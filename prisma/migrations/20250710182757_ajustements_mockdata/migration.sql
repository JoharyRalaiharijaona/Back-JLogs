/*
  Warnings:

  - You are about to drop the column `available` on the `Equipment` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `Equipment` table. All the data in the column will be lost.
  - You are about to drop the column `equipmentId` on the `Reservation` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Reservation` table. All the data in the column will be lost.
  - Added the required column `category` to the `Equipment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `condition` to the `Equipment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `Equipment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastMaintenance` to the `Equipment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `location` to the `Equipment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `purchaseDate` to the `Equipment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `serialNumber` to the `Equipment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `Equipment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `value` to the `Equipment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `clientId` to the `Reservation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contactEmail` to the `Reservation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contactPerson` to the `Reservation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contactPhone` to the `Reservation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `eventName` to the `Reservation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `location` to the `Reservation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalValue` to the `Reservation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `avatar` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Reservation" DROP CONSTRAINT "Reservation_equipmentId_fkey";

-- DropForeignKey
ALTER TABLE "Reservation" DROP CONSTRAINT "Reservation_userId_fkey";

-- AlterTable
ALTER TABLE "Equipment" DROP COLUMN "available",
DROP COLUMN "description",
ADD COLUMN     "category" TEXT NOT NULL,
ADD COLUMN     "condition" TEXT NOT NULL,
ADD COLUMN     "image" TEXT NOT NULL,
ADD COLUMN     "lastMaintenance" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "location" TEXT NOT NULL,
ADD COLUMN     "purchaseDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "serialNumber" TEXT NOT NULL,
ADD COLUMN     "status" TEXT NOT NULL,
ADD COLUMN     "value" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Reservation" DROP COLUMN "equipmentId",
DROP COLUMN "userId",
ADD COLUMN     "clientId" INTEGER NOT NULL,
ADD COLUMN     "contactEmail" TEXT NOT NULL,
ADD COLUMN     "contactPerson" TEXT NOT NULL,
ADD COLUMN     "contactPhone" TEXT NOT NULL,
ADD COLUMN     "eventName" TEXT NOT NULL,
ADD COLUMN     "location" TEXT NOT NULL,
ADD COLUMN     "notes" TEXT,
ADD COLUMN     "totalValue" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "avatar" TEXT NOT NULL,
ADD COLUMN     "lastActivity" TIMESTAMP(3);

-- CreateTable
CREATE TABLE "Client" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "fonction" TEXT NOT NULL,
    "NIF" TEXT NOT NULL,
    "STAT" TEXT NOT NULL,
    "avatar" TEXT NOT NULL,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ReservationOnEquipment" (
    "reservationId" INTEGER NOT NULL,
    "equipmentId" INTEGER NOT NULL,

    CONSTRAINT "ReservationOnEquipment_pkey" PRIMARY KEY ("reservationId","equipmentId")
);

-- CreateTable
CREATE TABLE "Activity" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "equipmentId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL,
    "location" TEXT NOT NULL,
    "notes" TEXT,

    CONSTRAINT "Activity_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Client_email_key" ON "Client"("email");

-- AddForeignKey
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReservationOnEquipment" ADD CONSTRAINT "ReservationOnEquipment_reservationId_fkey" FOREIGN KEY ("reservationId") REFERENCES "Reservation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReservationOnEquipment" ADD CONSTRAINT "ReservationOnEquipment_equipmentId_fkey" FOREIGN KEY ("equipmentId") REFERENCES "Equipment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Activity" ADD CONSTRAINT "Activity_equipmentId_fkey" FOREIGN KEY ("equipmentId") REFERENCES "Equipment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Activity" ADD CONSTRAINT "Activity_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
