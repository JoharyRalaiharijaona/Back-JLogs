import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Client as PrismaClient } from '@prisma/client';
import { CreateClientDto } from './create-client.dto';
import { UpdateClientDto } from './update-client.dto';

@Injectable()
export class ClientService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<PrismaClient[]> {
    return this.prisma.client.findMany();
  }

  async findOne(id: number): Promise<PrismaClient | null> {
    return this.prisma.client.findUnique({ where: { id } });
  }

  async create(data: CreateClientDto): Promise<PrismaClient> {
    return this.prisma.client.create({ data });
  }

  async update(id: number, data: UpdateClientDto): Promise<PrismaClient> {
    return this.prisma.client.update({ where: { id }, data });
  }

  async remove(id: number): Promise<PrismaClient> {
    return this.prisma.client.delete({ where: { id } });
  }
}
