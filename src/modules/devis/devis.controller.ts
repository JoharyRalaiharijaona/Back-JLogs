import { Controller, Post, Get, Param, Body, Patch, Delete } from '@nestjs/common';
import { DevisService } from './devis.service';

@Controller('devis')
export class DevisController {
  constructor(private readonly devisService: DevisService) {}

  // Création d'un devis
  @Post()
  async create(@Body() dto: { reservationId: number; clientId: number; montant: number }) {
    return this.devisService.create(dto);
  }

  // Liste des devis
  @Get()
  async findAll() {
    return this.devisService.findAll();
  }

  // Détail d'un devis
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.devisService.findOne(Number(id));
  }

  // Mise à jour d'un devis
  @Patch(':id')
  async update(@Param('id') id: string, @Body() dto: { montant?: number }) {
    return this.devisService.update(Number(id), dto);
  }

  // Suppression d'un devis
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.devisService.remove(Number(id));
  }
}

