import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class ReservationService {
  constructor(private prisma: PrismaService) {}

  async create(dto: { userId: number; equipmentId: number; startDate: string; endDate: string }) {
    return this.prisma.reservation.create({
      data: {
        userId: dto.userId,
        equipmentId: dto.equipmentId,
        startDate: new Date(dto.startDate),
        endDate: new Date(dto.endDate),
        status: 'pending',
      },
    });
  }

  async findAll() {
    return this.prisma.reservation.findMany({
      include: {
        user: { select: { id: true, name: true, email: true } },
        equipment: { select: { id: true, name: true } },
      },
    });
  }

  async findOne(id: number) {
    return this.prisma.reservation.findUnique({
      where: { id },
      include: {
        user: { select: { id: true, name: true, email: true } },
        equipment: { select: { id: true, name: true } },
      },
    });
  }

  async update(id: number, dto: { startDate?: string; endDate?: string; status?: string }) {
    return this.prisma.reservation.update({
      where: { id },
      data: {
        ...(dto.startDate && { startDate: new Date(dto.startDate) }),
        ...(dto.endDate && { endDate: new Date(dto.endDate) }),
        ...(dto.status && { status: dto.status }),
      },
    });
  }

  async remove(id: number) {
    return this.prisma.reservation.delete({ where: { id } });
  }
}

