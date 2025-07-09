import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { ReservationService } from './reservation.service';

@Controller('reservations')
export class ReservationController {
  constructor(private readonly reservationService: ReservationService) {}

  // Créer une réservation
  @Post()
  async create(@Body() dto: { userId: number; equipmentId: number; startDate: string; endDate: string }) {
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
  async update(@Param('id') id: string, @Body() dto: { startDate?: string; endDate?: string; status?: string }) {
    return this.reservationService.update(Number(id), dto);
  }

  // Supprimer une réservation
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.reservationService.remove(Number(id));
  }
}

