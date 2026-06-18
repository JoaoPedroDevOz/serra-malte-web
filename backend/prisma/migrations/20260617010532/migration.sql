/*
  Warnings:

  - The `abv` column on the `tbl_produto` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "tbl_ingrediente" ADD COLUMN     "quantidade_estoque" INTEGER,
ADD COLUMN     "valor_unitario" DECIMAL(10,0);

-- AlterTable
ALTER TABLE "tbl_produto" DROP COLUMN "abv",
ADD COLUMN     "abv" DECIMAL(3,2);

-- AlterTable
CREATE SEQUENCE tbl_tipo_ingrediente_tipo_ingrediente_id_seq;
ALTER TABLE "tbl_tipo_ingrediente" ALTER COLUMN "tipo_ingrediente_id" SET DEFAULT nextval('tbl_tipo_ingrediente_tipo_ingrediente_id_seq');
ALTER SEQUENCE tbl_tipo_ingrediente_tipo_ingrediente_id_seq OWNED BY "tbl_tipo_ingrediente"."tipo_ingrediente_id";

-- AlterTable
CREATE SEQUENCE tbl_tipo_produto_tipo_produto_id_seq;
ALTER TABLE "tbl_tipo_produto" ALTER COLUMN "tipo_produto_id" SET DEFAULT nextval('tbl_tipo_produto_tipo_produto_id_seq');
ALTER SEQUENCE tbl_tipo_produto_tipo_produto_id_seq OWNED BY "tbl_tipo_produto"."tipo_produto_id";
