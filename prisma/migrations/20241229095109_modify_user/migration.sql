/*
  Warnings:

  - You are about to drop the column `dirth_date` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `falmily_name` on the `User` table. All the data in the column will be lost.
  - Added the required column `birth_date` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `family_name` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "dirth_date",
DROP COLUMN "falmily_name",
ADD COLUMN     "birth_date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "family_name" TEXT NOT NULL;
