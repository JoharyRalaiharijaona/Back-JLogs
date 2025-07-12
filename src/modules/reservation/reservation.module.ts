import { Module } from '@nestjs/common';
import { ReservationService } from './reservation.service';
import { ReservationController } from './reservation.controller';
import { PrismaModule } from '../../prisma/prisma.module';
import { DevisModule } from '../devis/devis.module';

@Module({
  imports: [PrismaModule, DevisModule],
  controllers: [ReservationController],
  providers: [ReservationService],
  exports: [ReservationService],
})
export class ReservationModule {}
