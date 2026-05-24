-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "public";

-- CreateTable
CREATE TABLE "rel_fornecedor_ingrediente" (
    "fornecedor_id" SERIAL NOT NULL,
    "ingrediente_id" SERIAL NOT NULL,
    "data_hora_fornecimento" TIMESTAMPTZ(6) NOT NULL,
    "valor_fornecimento" DECIMAL(10,0),
    "quantidade" INTEGER,

    CONSTRAINT "rel_ingrediente_fornecedor_pkey" PRIMARY KEY ("fornecedor_id","ingrediente_id","data_hora_fornecimento")
);

-- CreateTable
CREATE TABLE "rel_fornecedor_produto" (
    "fornecedor_id" SERIAL NOT NULL,
    "produto_id" SERIAL NOT NULL,
    "data_hora_fornecimento" TIMESTAMPTZ(6) NOT NULL,
    "valor_fornecimento" DECIMAL(10,0),
    "quantidade" INTEGER,

    CONSTRAINT "rel_produto_fornecedor_pkey" PRIMARY KEY ("fornecedor_id","produto_id","data_hora_fornecimento")
);

-- CreateTable
CREATE TABLE "rel_pedido_produto" (
    "produto_id" SERIAL NOT NULL,
    "pedido_id" SERIAL NOT NULL,
    "valor_unitario" DECIMAL(10,0),
    "quantidade" INTEGER,

    CONSTRAINT "rel_pedido_produto_pkey" PRIMARY KEY ("produto_id","pedido_id")
);

-- CreateTable
CREATE TABLE "rel_produto_ingrediente" (
    "ingrediente_id" SERIAL NOT NULL,
    "produto_id" SERIAL NOT NULL,
    "quantidade" INTEGER NOT NULL,

    CONSTRAINT "rel_produto_ingrediente_pkey" PRIMARY KEY ("ingrediente_id","produto_id","quantidade")
);

-- CreateTable
CREATE TABLE "tbl_cliente" (
    "cliente_id" SERIAL NOT NULL,
    "tipo_pessoa_id" SMALLINT,
    "registro_nacional" VARCHAR(50),
    "nome" VARCHAR(100),
    "sobrenome" VARCHAR(100),
    "nome_fantasia" VARCHAR(200),
    "email" VARCHAR(320),
    "telefone" VARCHAR(15),

    CONSTRAINT "tbl_cliente_pkey" PRIMARY KEY ("cliente_id")
);

-- CreateTable
CREATE TABLE "tbl_endereco" (
    "endereco_id" SERIAL NOT NULL,
    "cliente_id" SERIAL NOT NULL,
    "pais" VARCHAR(10),
    "uf" VARCHAR(10),
    "complemento" VARCHAR(255),
    "rua" VARCHAR(255),
    "cod_postal" VARCHAR(10),

    CONSTRAINT "tbl_endereco_pkey" PRIMARY KEY ("endereco_id")
);

-- CreateTable
CREATE TABLE "tbl_fornecedor" (
    "fornecedor_id" SERIAL NOT NULL,
    "email" VARCHAR(320),
    "contato" VARCHAR(100),
    "telefone" VARCHAR(15),
    "nome" VARCHAR(200),
    "registro_nacional" VARCHAR(50),

    CONSTRAINT "tbl_fornecedor_pkey" PRIMARY KEY ("fornecedor_id")
);

-- CreateTable
CREATE TABLE "tbl_ingrediente" (
    "ingrediente_id" SERIAL NOT NULL,
    "tipo_ingrediente_id" INTEGER,
    "nome" VARCHAR(50),

    CONSTRAINT "tbl_ingrediente_pkey" PRIMARY KEY ("ingrediente_id")
);

-- CreateTable
CREATE TABLE "tbl_pedido" (
    "pedido_id" SERIAL NOT NULL,
    "status_pedido_id" SMALLINT,
    "cliente_id" SERIAL NOT NULL,
    "data_hora_pedido" TIMESTAMPTZ(6),

    CONSTRAINT "tbl_pedido_pkey" PRIMARY KEY ("pedido_id")
);

-- CreateTable
CREATE TABLE "tbl_produto" (
    "produto_id" SERIAL NOT NULL,
    "tipo_produto_id" INTEGER,
    "nome" VARCHAR(100),
    "valor_unitario" DECIMAL(10,0),
    "ibu" VARCHAR(10),
    "abv" VARCHAR(10),

    CONSTRAINT "tbl_produto_pkey" PRIMARY KEY ("produto_id")
);

-- CreateTable
CREATE TABLE "tbl_status_pedido" (
    "status_pedido_id" SMALLINT NOT NULL,
    "status" VARCHAR(20),

    CONSTRAINT "tbl_status_pedido_pkey" PRIMARY KEY ("status_pedido_id")
);

-- CreateTable
CREATE TABLE "tbl_tipo_ingrediente" (
    "tipo_ingrediente_id" INTEGER NOT NULL,
    "tipo" VARCHAR(30),

    CONSTRAINT "tbl_tipo_ingrediente_pkey" PRIMARY KEY ("tipo_ingrediente_id")
);

-- CreateTable
CREATE TABLE "tbl_tipo_pessoa" (
    "tipo_pessoa_id" SMALLINT NOT NULL,
    "tipo" SMALLINT,

    CONSTRAINT "tbl_tipo_pessoa_pkey" PRIMARY KEY ("tipo_pessoa_id")
);

-- CreateTable
CREATE TABLE "tbl_tipo_produto" (
    "tipo_produto_id" INTEGER NOT NULL,
    "tipo" VARCHAR(100),

    CONSTRAINT "tbl_tipo_produto_pkey" PRIMARY KEY ("tipo_produto_id")
);

-- AddForeignKey
ALTER TABLE "rel_fornecedor_ingrediente" ADD CONSTRAINT "rel_ingrediente_fornecedor_fornecedor_id_fkey" FOREIGN KEY ("fornecedor_id") REFERENCES "tbl_fornecedor"("fornecedor_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "rel_fornecedor_ingrediente" ADD CONSTRAINT "rel_ingrediente_fornecedor_ingrediente_id_fkey" FOREIGN KEY ("ingrediente_id") REFERENCES "tbl_ingrediente"("ingrediente_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "rel_fornecedor_produto" ADD CONSTRAINT "rel_produto_fornecedor_fornecedor_id_fkey" FOREIGN KEY ("fornecedor_id") REFERENCES "tbl_fornecedor"("fornecedor_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "rel_fornecedor_produto" ADD CONSTRAINT "rel_produto_fornecedor_produto_id_fkey" FOREIGN KEY ("produto_id") REFERENCES "tbl_produto"("produto_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "rel_pedido_produto" ADD CONSTRAINT "rel_pedido_produto_pedido_id_fkey" FOREIGN KEY ("pedido_id") REFERENCES "tbl_pedido"("pedido_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "rel_pedido_produto" ADD CONSTRAINT "rel_pedido_produto_produto_id_fkey" FOREIGN KEY ("produto_id") REFERENCES "tbl_produto"("produto_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "rel_produto_ingrediente" ADD CONSTRAINT "rel_produto_ingrediente_ingrediente_id_fkey" FOREIGN KEY ("ingrediente_id") REFERENCES "tbl_ingrediente"("ingrediente_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "rel_produto_ingrediente" ADD CONSTRAINT "rel_produto_ingrediente_produto_id_fkey" FOREIGN KEY ("produto_id") REFERENCES "tbl_produto"("produto_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "tbl_cliente" ADD CONSTRAINT "tbl_cliente_tipo_pessoa_id_fkey" FOREIGN KEY ("tipo_pessoa_id") REFERENCES "tbl_tipo_pessoa"("tipo_pessoa_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "tbl_endereco" ADD CONSTRAINT "tbl_endereco_cliente_id_fkey" FOREIGN KEY ("cliente_id") REFERENCES "tbl_cliente"("cliente_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "tbl_ingrediente" ADD CONSTRAINT "tbl_ingrediente_tipo_ingrediente_id_fkey" FOREIGN KEY ("tipo_ingrediente_id") REFERENCES "tbl_tipo_ingrediente"("tipo_ingrediente_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "tbl_pedido" ADD CONSTRAINT "tbl_pedido_cliente_id_fkey" FOREIGN KEY ("cliente_id") REFERENCES "tbl_cliente"("cliente_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "tbl_pedido" ADD CONSTRAINT "tbl_pedido_status_pedido_id_fkey" FOREIGN KEY ("status_pedido_id") REFERENCES "tbl_status_pedido"("status_pedido_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "tbl_produto" ADD CONSTRAINT "tbl_produto_tipo_produto_id_fkey" FOREIGN KEY ("tipo_produto_id") REFERENCES "tbl_tipo_produto"("tipo_produto_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

