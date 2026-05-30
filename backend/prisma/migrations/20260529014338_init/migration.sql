/*
  Warnings:

  - Made the column `valor_fornecimento` on table `rel_fornecedor_ingrediente` required. This step will fail if there are existing NULL values in that column.
  - Made the column `quantidade` on table `rel_fornecedor_ingrediente` required. This step will fail if there are existing NULL values in that column.
  - Made the column `valor_fornecimento` on table `rel_fornecedor_produto` required. This step will fail if there are existing NULL values in that column.
  - Made the column `quantidade` on table `rel_fornecedor_produto` required. This step will fail if there are existing NULL values in that column.
  - Made the column `valor_unitario` on table `rel_pedido_produto` required. This step will fail if there are existing NULL values in that column.
  - Made the column `quantidade` on table `rel_pedido_produto` required. This step will fail if there are existing NULL values in that column.
  - Made the column `tipo_pessoa_id` on table `tbl_cliente` required. This step will fail if there are existing NULL values in that column.
  - Made the column `registro_nacional` on table `tbl_cliente` required. This step will fail if there are existing NULL values in that column.
  - Made the column `nome` on table `tbl_cliente` required. This step will fail if there are existing NULL values in that column.
  - Made the column `pais` on table `tbl_endereco` required. This step will fail if there are existing NULL values in that column.
  - Made the column `rua` on table `tbl_endereco` required. This step will fail if there are existing NULL values in that column.
  - Made the column `cod_postal` on table `tbl_endereco` required. This step will fail if there are existing NULL values in that column.
  - Made the column `nome` on table `tbl_fornecedor` required. This step will fail if there are existing NULL values in that column.
  - Made the column `registro_nacional` on table `tbl_fornecedor` required. This step will fail if there are existing NULL values in that column.
  - Made the column `tipo_ingrediente_id` on table `tbl_ingrediente` required. This step will fail if there are existing NULL values in that column.
  - Made the column `nome` on table `tbl_ingrediente` required. This step will fail if there are existing NULL values in that column.
  - Made the column `status_pedido_id` on table `tbl_pedido` required. This step will fail if there are existing NULL values in that column.
  - Made the column `data_hora_pedido` on table `tbl_pedido` required. This step will fail if there are existing NULL values in that column.
  - Made the column `tipo_produto_id` on table `tbl_produto` required. This step will fail if there are existing NULL values in that column.
  - Made the column `nome` on table `tbl_produto` required. This step will fail if there are existing NULL values in that column.
  - Made the column `status` on table `tbl_status_pedido` required. This step will fail if there are existing NULL values in that column.
  - Made the column `tipo` on table `tbl_tipo_ingrediente` required. This step will fail if there are existing NULL values in that column.
  - Made the column `tipo` on table `tbl_tipo_pessoa` required. This step will fail if there are existing NULL values in that column.
  - Made the column `tipo` on table `tbl_tipo_produto` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "rel_fornecedor_ingrediente" ALTER COLUMN "valor_fornecimento" SET NOT NULL,
ALTER COLUMN "quantidade" SET NOT NULL,
ALTER COLUMN "quantidade" SET DEFAULT 1;

-- AlterTable
ALTER TABLE "rel_fornecedor_produto" ALTER COLUMN "valor_fornecimento" SET NOT NULL,
ALTER COLUMN "quantidade" SET NOT NULL,
ALTER COLUMN "quantidade" SET DEFAULT 1;

-- AlterTable
ALTER TABLE "rel_pedido_produto" ALTER COLUMN "valor_unitario" SET NOT NULL,
ALTER COLUMN "quantidade" SET NOT NULL,
ALTER COLUMN "quantidade" SET DEFAULT 1;

-- AlterTable
ALTER TABLE "tbl_cliente" ALTER COLUMN "tipo_pessoa_id" SET NOT NULL,
ALTER COLUMN "registro_nacional" SET NOT NULL,
ALTER COLUMN "nome" SET NOT NULL;

-- AlterTable
ALTER TABLE "tbl_endereco" ALTER COLUMN "pais" SET NOT NULL,
ALTER COLUMN "rua" SET NOT NULL,
ALTER COLUMN "cod_postal" SET NOT NULL;

-- AlterTable
ALTER TABLE "tbl_fornecedor" ALTER COLUMN "nome" SET NOT NULL,
ALTER COLUMN "registro_nacional" SET NOT NULL;

-- AlterTable
ALTER TABLE "tbl_ingrediente" ALTER COLUMN "tipo_ingrediente_id" SET NOT NULL,
ALTER COLUMN "nome" SET NOT NULL;

-- AlterTable
ALTER TABLE "tbl_pedido" ALTER COLUMN "status_pedido_id" SET NOT NULL,
ALTER COLUMN "data_hora_pedido" SET NOT NULL;

-- AlterTable
ALTER TABLE "tbl_produto" ALTER COLUMN "tipo_produto_id" SET NOT NULL,
ALTER COLUMN "nome" SET NOT NULL,
ALTER COLUMN "valor_unitario" SET DEFAULT 0;

-- AlterTable
ALTER TABLE "tbl_status_pedido" ALTER COLUMN "status" SET NOT NULL;

-- AlterTable
ALTER TABLE "tbl_tipo_ingrediente" ALTER COLUMN "tipo" SET NOT NULL;

-- AlterTable
ALTER TABLE "tbl_tipo_pessoa" ALTER COLUMN "tipo" SET NOT NULL;

-- AlterTable
ALTER TABLE "tbl_tipo_produto" ALTER COLUMN "tipo" SET NOT NULL;
