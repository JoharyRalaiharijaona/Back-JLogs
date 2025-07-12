import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class DevisService {
  constructor(private prisma: PrismaService) {}

  async create(dto: { reservationId: number; clientId: number; montant: number }) {
    return this.prisma.devis.create({
      data: {
        reservationId: dto.reservationId,
        clientId: dto.clientId,
        montant: dto.montant,
      },
    });
  }

  async findAll() {
    return this.prisma.devis.findMany();
  }

  async findOne(id: number) {
    return this.prisma.devis.findUnique({ where: { id } });
  }

  async update(id: number, dto: { montant?: number }) {
    return this.prisma.devis.update({
      where: { id },
      data: dto,
    });
  }

  async remove(id: number) {
    return this.prisma.devis.delete({ where: { id } });
  }
}

