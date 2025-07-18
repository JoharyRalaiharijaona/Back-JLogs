import { Module } from '@nestjs/common';
import { DevisService } from './devis.service';
import { DevisController } from './devis.controller';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  controllers: [DevisController],
  providers: [DevisService, PrismaService],
  exports: [DevisService],
})
export class DevisModule {}
