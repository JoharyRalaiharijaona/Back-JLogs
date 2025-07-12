import { Injectable, Inject } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { DevisService } from '../devis/devis.service';

@Injectable()
export class ReservationService {
  constructor(private prisma: PrismaService, @Inject(DevisService) private devisService: DevisService) {}

  async create(dto: {
    clientId: number;
    materiels: { materielId: number; quantite: number }[];
    nomEvenement: string;
    dateDebut: string;
    dateFin: string;
    statut: string;
    lieu: string;
    contactNom: string;
    contactEmail: string;
    contactTelephone: string;
    notes?: string;
  }) {
    // Calcul du montant total à partir des matériels réservés (prix * quantité)
    let montant = 0;
    // Récupérer les prix des matériels avant la création de la réservation
    const materielsData = await Promise.all(
      dto.materiels.map(async item => {
        const materiel = await this.prisma.materiel.findUnique({ where: { id: item.materielId } });
        return {
          materielId: item.materielId,
          quantite: item.quantite,
          prix: materiel ? Number(materiel.prix) : 0
        };
      })
    );
    montant = materielsData.reduce((acc, item) => acc + (item.prix * item.quantite), 0);

    const reservation = await this.prisma.reservation.create({
      data: {
        client: { connect: { id: dto.clientId } },
        nomEvenement: dto.nomEvenement,
        dateDebut: dto.dateDebut ? new Date(dto.dateDebut) : undefined,
        dateFin: dto.dateFin ? new Date(dto.dateFin) : undefined,
        statut: dto.statut,
        lieu: dto.lieu,
        contactNom: dto.contactNom,
        contactEmail: dto.contactEmail,
        contactTelephone: dto.contactTelephone,
        valeurTotale: montant,
        notes: dto.notes,
        materiels: {
          create: dto.materiels.map(item => ({
            materiel: { connect: { id: item.materielId } },
            quantite: item.quantite
          }))
        }
      },
      include: {
        client: true,
        materiels: {
          include: { materiel: true }
        }
      }
    });
    await this.devisService.create({
      reservationId: reservation.id,
      clientId: reservation.clientId,
      montant
    });
    return reservation;
  }

  async findAll() {
    return this.prisma.reservation.findMany({
      include: {
        client: true,
        materiels: {
          include: { materiel: true }
        }
      }
    });
  }

  async findOne(id: number) {
    return this.prisma.reservation.findUnique({
      where: { id },
      include: {
        client: true,
        materiels: {
          include: { materiel: true }
        }
      }
    });
  }

  async update(id: number, dto: { dateDebut?: string; dateFin?: string; statut?: string }) {
    // Récupérer les matériels liés à la réservation
    const reservationMateriels = await this.prisma.reservationSurMateriel.findMany({
      where: { reservationId: id },
      include: { materiel: true }
    });
    // Calculer la nouvelle valeur totale
    const valeurTotale = reservationMateriels.reduce((acc, item) => {
      const prix = item.materiel ? Number(item.materiel.prix) : 0;
      const quantite = item.quantite || 1;
      return acc + prix * quantite;
    }, 0);
    return this.prisma.reservation.update({
      where: { id },
      data: {
        dateDebut: dto.dateDebut ? new Date(dto.dateDebut) : undefined,
        dateFin: dto.dateFin ? new Date(dto.dateFin) : undefined,
        statut: dto.statut,
        valeurTotale
      },
    });
  }

  async remove(id: number) {
    // Supprimer d'abord les matériels liés à la réservation
    await this.prisma.reservationSurMateriel.deleteMany({ where: { reservationId: id } });
    // Puis supprimer la réservation
    return this.prisma.reservation.delete({ where: { id } });
  }
}
