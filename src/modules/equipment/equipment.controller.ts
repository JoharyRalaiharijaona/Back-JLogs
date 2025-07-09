import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { EquipmentService } from './equipment.service';

@Controller('equipment')
export class EquipmentController {
  constructor(private readonly equipmentService: EquipmentService) {}

  // Créer un équipement
  @Post()
  async create(@Body() dto: { name: string; description?: string }) {
    return this.equipmentService.create(dto);
  }

  // Liste des équipements
  @Get()
  async findAll() {
    return this.equipmentService.findAll();
  }

  // Détail d'un équipement
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.equipmentService.findOne(Number(id));
  }

  // Modifier un équipement
  @Patch(':id')
  async update(@Param('id') id: string, @Body() dto: { name?: string; description?: string; available?: boolean }) {
    return this.equipmentService.update(Number(id), dto);
  }

  // Supprimer un équipement
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.equipmentService.remove(Number(id));
  }
}

