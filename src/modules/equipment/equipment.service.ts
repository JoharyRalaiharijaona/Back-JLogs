import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Materiel } from '@prisma/client';

@Injectable()
export class EquipmentService {
  constructor(private prisma: PrismaService) {}

  async create(dto: { nom: string; categorie: string; statut: string; etat: string; emplacement: string; dateAchat: Date; derniereMaintenance: Date; numeroSerie: string; valeur: number; image: string; prix: number }) {
    return this.prisma.materiel.create({
      data: {
        nom: dto.nom,
        categorie: dto.categorie,
        statut: dto.statut,
        etat: dto.etat,
        emplacement: dto.emplacement,
        dateAchat: dto.dateAchat,
        derniereMaintenance: dto.derniereMaintenance,
        numeroSerie: dto.numeroSerie,
        valeur: dto.valeur,
        image: dto.image,
        prix: dto.prix,
      },
    });
  }

  async findAll(): Promise<Materiel[]> {
    return this.prisma.materiel.findMany();
  }

  async findOne(id: number): Promise<Materiel | null> {
    return this.prisma.materiel.findUnique({ where: { id } });
  }

  async update(id: number, dto: Partial<{ nom: string; categorie: string; statut: string; etat: string; emplacement: string; dateAchat: Date; derniereMaintenance: Date; numeroSerie: string; valeur: number; image: string; prix: number }>): Promise<Materiel> {
    return this.prisma.materiel.update({
      where: { id },
      data: dto,
    });
  }

  async remove(id: number): Promise<Materiel> {
    return this.prisma.materiel.delete({ where: { id } });
  }
}
