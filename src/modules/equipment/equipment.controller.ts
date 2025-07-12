import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { EquipmentService } from './equipment.service';

@Controller('equipment')
export class EquipmentController {
  constructor(private readonly equipmentService: EquipmentService) {}

  // Créer un matériel
  @Post()
  async create(@Body() dto: { nom: string; categorie: string; statut: string; etat: string; emplacement: string; dateAchat: Date; derniereMaintenance: Date; numeroSerie: string; valeur: number; image: string; prix: number }) {
    return this.equipmentService.create(dto);
  }

  // Liste des matériels
  @Get()
  async findAll() {
    return this.equipmentService.findAll();
  }

  // Détail d'un matériel
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.equipmentService.findOne(Number(id));
  }

  // Modifier un matériel
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() dto: Partial<{ nom: string; categorie: string; statut: string; etat: string; emplacement: string; dateAchat: Date; derniereMaintenance: Date; numeroSerie: string; valeur: number; image: string; prix: number }>
  ) {
    return this.equipmentService.update(Number(id), dto);
  }

  // Supprimer un matériel
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.equipmentService.remove(Number(id));
  }
}
