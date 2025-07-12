import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { EquipmentModule } from './modules/equipment/equipment.module';
import { ReservationModule } from './modules/reservation/reservation.module';
import { PrismaModule } from './prisma/prisma.module';
import { ClientModule } from './modules/clients/client.module';
import { DevisModule } from './modules/devis/devis.module';

@Module({
  imports: [UserModule, EquipmentModule, ReservationModule, PrismaModule, ClientModule, DevisModule],
})
export class AppModule {}
