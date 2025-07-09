import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { EquipmentModule } from './modules/equipment/equipment.module';
import { ReservationModule } from './modules/reservation/reservation.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [UserModule, EquipmentModule, ReservationModule, PrismaModule],
})
export class AppModule {}

