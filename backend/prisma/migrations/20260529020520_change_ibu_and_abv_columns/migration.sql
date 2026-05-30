/*
  Warnings:

  - The `ibu` column on the `tbl_produto` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `abv` column on the `tbl_produto` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Made the column `valor_unitario` on table `tbl_produto` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "tbl_produto" ALTER COLUMN "valor_unitario" SET NOT NULL,
DROP COLUMN "ibu",
ADD COLUMN     "ibu" INTEGER,
DROP COLUMN "abv",
ADD COLUMN     "abv" DECIMAL(3,2)[];
