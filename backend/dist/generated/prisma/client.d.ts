import * as runtime from "@prisma/client/runtime/client";
import * as $Class from "./internal/class.ts";
import * as Prisma from "./internal/prismaNamespace.ts";
export * as $Enums from './enums.ts';
export * from "./enums.ts";
/**
 * ## Prisma Client
 *
 * Type-safe database client for TypeScript
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Rel_fornecedor_ingredientes
 * const rel_fornecedor_ingredientes = await prisma.rel_fornecedor_ingrediente.findMany()
 * ```
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export declare const PrismaClient: $Class.PrismaClientConstructor;
export type PrismaClient<LogOpts extends Prisma.LogLevel = never, OmitOpts extends Prisma.PrismaClientOptions["omit"] = Prisma.PrismaClientOptions["omit"], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = $Class.PrismaClient<LogOpts, OmitOpts, ExtArgs>;
export { Prisma };
/**
 * Model rel_fornecedor_ingrediente
 *
 */
export type rel_fornecedor_ingrediente = Prisma.rel_fornecedor_ingredienteModel;
/**
 * Model rel_fornecedor_produto
 *
 */
export type rel_fornecedor_produto = Prisma.rel_fornecedor_produtoModel;
/**
 * Model rel_pedido_produto
 *
 */
export type rel_pedido_produto = Prisma.rel_pedido_produtoModel;
/**
 * Model rel_produto_ingrediente
 *
 */
export type rel_produto_ingrediente = Prisma.rel_produto_ingredienteModel;
/**
 * Model tbl_cliente
 *
 */
export type tbl_cliente = Prisma.tbl_clienteModel;
/**
 * Model tbl_endereco
 *
 */
export type tbl_endereco = Prisma.tbl_enderecoModel;
/**
 * Model tbl_fornecedor
 *
 */
export type tbl_fornecedor = Prisma.tbl_fornecedorModel;
/**
 * Model tbl_ingrediente
 *
 */
export type tbl_ingrediente = Prisma.tbl_ingredienteModel;
/**
 * Model tbl_pedido
 *
 */
export type tbl_pedido = Prisma.tbl_pedidoModel;
/**
 * Model tbl_produto
 *
 */
export type tbl_produto = Prisma.tbl_produtoModel;
/**
 * Model tbl_status_pedido
 *
 */
export type tbl_status_pedido = Prisma.tbl_status_pedidoModel;
/**
 * Model tbl_tipo_ingrediente
 *
 */
export type tbl_tipo_ingrediente = Prisma.tbl_tipo_ingredienteModel;
/**
 * Model tbl_tipo_pessoa
 *
 */
export type tbl_tipo_pessoa = Prisma.tbl_tipo_pessoaModel;
/**
 * Model tbl_tipo_produto
 *
 */
export type tbl_tipo_produto = Prisma.tbl_tipo_produtoModel;
//# sourceMappingURL=client.d.ts.map