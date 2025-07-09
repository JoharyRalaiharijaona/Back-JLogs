import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class EquipmentService {
  constructor(private prisma: PrismaService) {}

  async create(dto: { name: string; description?: string }) {
    return this.prisma.equipment.create({
      data: {
        name: dto.name,
        description: dto.description,
      },
    });
  }

  async findAll() {
    return this.prisma.equipment.findMany();
  }

  async findOne(id: number) {
    return this.prisma.equipment.findUnique({ where: { id } });
  }

  async update(id: number, dto: { name?: string; description?: string; available?: boolean }) {
    return this.prisma.equipment.update({
      where: { id },
      data: {
        ...dto,
      },
    });
  }

  async remove(id: number) {
    return this.prisma.equipment.delete({ where: { id } });
  }
}

