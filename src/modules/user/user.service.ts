import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async register(dto: { email: string; motDePasse: string; nom: string; avatar?: string }) {
    const hashedPassword = await bcrypt.hash(dto.motDePasse, 10);
    const user = await this.prisma.utilisateur.create({
      data: {
        email: dto.email,
        motDePasse: hashedPassword,
        nom: dto.nom,
        avatar: dto.avatar || '',
        role: 'utilisateur',
      },
      select: { id: true, email: true, nom: true, role: true, avatar: true, creeLe: true },
    });
    return user;
  }

  async login(dto: { email: string; motDePasse: string }) {
    const user = await this.prisma.utilisateur.findUnique({ where: { email: dto.email } });
    if (!user) return null;
    const valid = await bcrypt.compare(dto.motDePasse, user.motDePasse);
    if (!valid) return null;
    // Générer un JWT
    const token = jwt.sign(
      { sub: user.id, email: user.email, role: user.role },
      process.env.JWT_SECRET || 'devsecret',
      { expiresIn: '7d' }
    );
    return {
      token,
      user: { id: user.id, email: user.email, nom: user.nom, role: user.role },
    };
  }

  async findAll() {
    return this.prisma.utilisateur.findMany({
      select: { id: true, email: true, nom: true, role: true, creeLe: true },
    });
  }

  async findOne(id: number) {
    return this.prisma.utilisateur.findUnique({
      where: { id },
      select: { id: true, email: true, nom: true, role: true, creeLe: true },
    });
  }

  async update(id: number, dto: { nom?: string; email?: string; motDePasse?: string; avatar?: string }) {
    const data: any = { ...dto };
    if (dto.motDePasse) {
      data.motDePasse = await bcrypt.hash(dto.motDePasse, 10);
    }
    delete data.motDePasse;
    if (dto.motDePasse) {
      data.motDePasse = await bcrypt.hash(dto.motDePasse, 10);
    }
    return this.prisma.utilisateur.update({
      where: { id },
      data,
      select: { id: true, email: true, nom: true, role: true, avatar: true, creeLe: true },
    });
  }

  async remove(id: number) {
    return this.prisma.utilisateur.delete({
      where: { id },
      select: { id: true, email: true, nom: true, role: true, avatar: true, creeLe: true },
    });
  }
}
