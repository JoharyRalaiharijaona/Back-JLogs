import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class ReservationService {
  constructor(private prisma: PrismaService) {}

  async create(dto: {
    clientId: number;
    equipmentIds: number[];
    eventName: string;
    startDate: string;
    endDate: string;
    status: string;
    location: string;
    contactPerson: string;
    contactEmail: string;
    contactPhone: string;
    totalValue: number;
    notes?: string;
  }) {
    return this.prisma.reservation.create({
      data: {
        client: { connect: { id: dto.clientId } },
        eventName: dto.eventName,
        startDate: new Date(dto.startDate),
        endDate: new Date(dto.endDate),
        status: dto.status,
        location: dto.location,
        contactPerson: dto.contactPerson,
        contactEmail: dto.contactEmail,
        contactPhone: dto.contactPhone,
        totalValue: dto.totalValue,
        notes: dto.notes,
        equipments: {
          create: dto.equipmentIds.map(equipmentId => ({ equipment: { connect: { id: equipmentId } } }))
        }
      },
      include: {
        client: true,
        equipments: { include: { equipment: true } }
      }
    });
  }

  async findAll() {
    return this.prisma.reservation.findMany({
      include: {
        client: true,
        equipments: { include: { equipment: true } }
      },
    });
  }

  async findOne(id: number) {
    return this.prisma.reservation.findUnique({
      where: { id },
      include: {
        client: true,
        equipments: { include: { equipment: true } }
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
