import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { ReservationService } from './reservation.service';

@Controller('reservations')
export class ReservationController {
  constructor(private readonly reservationService: ReservationService) {}

  // Créer une réservation
  @Post()
  async create(@Body() dto: {
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
    return this.reservationService.create(dto);
  }

  // Liste des réservations
  @Get()
  async findAll() {
    return this.reservationService.findAll();
  }

  // Détail d'une réservation
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.reservationService.findOne(Number(id));
  }

  // Modifier une réservation (statut, dates...)
  @Patch(':id')
  async update(@Param('id') id: string, @Body() dto: { dateDebut?: string; dateFin?: string; statut?: string }) {
    return this.reservationService.update(Number(id), dto);
  }

  // Supprimer une réservation
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.reservationService.remove(Number(id));
  }
}
