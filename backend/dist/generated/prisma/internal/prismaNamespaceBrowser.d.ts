import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.ts';
export type * from './prismaNamespace.ts';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly rel_fornecedor_ingrediente: "rel_fornecedor_ingrediente";
    readonly rel_fornecedor_produto: "rel_fornecedor_produto";
    readonly rel_pedido_produto: "rel_pedido_produto";
    readonly rel_produto_ingrediente: "rel_produto_ingrediente";
    readonly tbl_cliente: "tbl_cliente";
    readonly tbl_endereco: "tbl_endereco";
    readonly tbl_fornecedor: "tbl_fornecedor";
    readonly tbl_ingrediente: "tbl_ingrediente";
    readonly tbl_pedido: "tbl_pedido";
    readonly tbl_produto: "tbl_produto";
    readonly tbl_status_pedido: "tbl_status_pedido";
    readonly tbl_tipo_ingrediente: "tbl_tipo_ingrediente";
    readonly tbl_tipo_pessoa: "tbl_tipo_pessoa";
    readonly tbl_tipo_produto: "tbl_tipo_produto";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const Rel_fornecedor_ingredienteScalarFieldEnum: {
    readonly fornecedor_id: "fornecedor_id";
    readonly ingrediente_id: "ingrediente_id";
    readonly data_hora_fornecimento: "data_hora_fornecimento";
    readonly valor_fornecimento: "valor_fornecimento";
    readonly quantidade: "quantidade";
};
export type Rel_fornecedor_ingredienteScalarFieldEnum = (typeof Rel_fornecedor_ingredienteScalarFieldEnum)[keyof typeof Rel_fornecedor_ingredienteScalarFieldEnum];
export declare const Rel_fornecedor_produtoScalarFieldEnum: {
    readonly fornecedor_id: "fornecedor_id";
    readonly produto_id: "produto_id";
    readonly data_hora_fornecimento: "data_hora_fornecimento";
    readonly valor_fornecimento: "valor_fornecimento";
    readonly quantidade: "quantidade";
};
export type Rel_fornecedor_produtoScalarFieldEnum = (typeof Rel_fornecedor_produtoScalarFieldEnum)[keyof typeof Rel_fornecedor_produtoScalarFieldEnum];
export declare const Rel_pedido_produtoScalarFieldEnum: {
    readonly produto_id: "produto_id";
    readonly pedido_id: "pedido_id";
    readonly valor_unitario: "valor_unitario";
    readonly quantidade: "quantidade";
};
export type Rel_pedido_produtoScalarFieldEnum = (typeof Rel_pedido_produtoScalarFieldEnum)[keyof typeof Rel_pedido_produtoScalarFieldEnum];
export declare const Rel_produto_ingredienteScalarFieldEnum: {
    readonly ingrediente_id: "ingrediente_id";
    readonly produto_id: "produto_id";
    readonly quantidade: "quantidade";
};
export type Rel_produto_ingredienteScalarFieldEnum = (typeof Rel_produto_ingredienteScalarFieldEnum)[keyof typeof Rel_produto_ingredienteScalarFieldEnum];
export declare const Tbl_clienteScalarFieldEnum: {
    readonly cliente_id: "cliente_id";
    readonly tipo_pessoa_id: "tipo_pessoa_id";
    readonly registro_nacional: "registro_nacional";
    readonly nome: "nome";
    readonly sobrenome: "sobrenome";
    readonly nome_fantasia: "nome_fantasia";
    readonly email: "email";
    readonly telefone: "telefone";
};
export type Tbl_clienteScalarFieldEnum = (typeof Tbl_clienteScalarFieldEnum)[keyof typeof Tbl_clienteScalarFieldEnum];
export declare const Tbl_enderecoScalarFieldEnum: {
    readonly endereco_id: "endereco_id";
    readonly cliente_id: "cliente_id";
    readonly pais: "pais";
    readonly uf: "uf";
    readonly complemento: "complemento";
    readonly rua: "rua";
    readonly cod_postal: "cod_postal";
};
export type Tbl_enderecoScalarFieldEnum = (typeof Tbl_enderecoScalarFieldEnum)[keyof typeof Tbl_enderecoScalarFieldEnum];
export declare const Tbl_fornecedorScalarFieldEnum: {
    readonly fornecedor_id: "fornecedor_id";
    readonly email: "email";
    readonly contato: "contato";
    readonly telefone: "telefone";
    readonly nome: "nome";
    readonly registro_nacional: "registro_nacional";
};
export type Tbl_fornecedorScalarFieldEnum = (typeof Tbl_fornecedorScalarFieldEnum)[keyof typeof Tbl_fornecedorScalarFieldEnum];
export declare const Tbl_ingredienteScalarFieldEnum: {
    readonly ingrediente_id: "ingrediente_id";
    readonly tipo_ingrediente_id: "tipo_ingrediente_id";
    readonly nome: "nome";
    readonly valor_unitario: "valor_unitario";
    readonly quantidade_estoque: "quantidade_estoque";
};
export type Tbl_ingredienteScalarFieldEnum = (typeof Tbl_ingredienteScalarFieldEnum)[keyof typeof Tbl_ingredienteScalarFieldEnum];
export declare const Tbl_pedidoScalarFieldEnum: {
    readonly pedido_id: "pedido_id";
    readonly status_pedido_id: "status_pedido_id";
    readonly cliente_id: "cliente_id";
    readonly data_hora_pedido: "data_hora_pedido";
};
export type Tbl_pedidoScalarFieldEnum = (typeof Tbl_pedidoScalarFieldEnum)[keyof typeof Tbl_pedidoScalarFieldEnum];
export declare const Tbl_produtoScalarFieldEnum: {
    readonly produto_id: "produto_id";
    readonly tipo_produto_id: "tipo_produto_id";
    readonly nome: "nome";
    readonly valor_unitario: "valor_unitario";
    readonly ibu: "ibu";
    readonly abv: "abv";
};
export type Tbl_produtoScalarFieldEnum = (typeof Tbl_produtoScalarFieldEnum)[keyof typeof Tbl_produtoScalarFieldEnum];
export declare const Tbl_status_pedidoScalarFieldEnum: {
    readonly status_pedido_id: "status_pedido_id";
    readonly status: "status";
};
export type Tbl_status_pedidoScalarFieldEnum = (typeof Tbl_status_pedidoScalarFieldEnum)[keyof typeof Tbl_status_pedidoScalarFieldEnum];
export declare const Tbl_tipo_ingredienteScalarFieldEnum: {
    readonly tipo_ingrediente_id: "tipo_ingrediente_id";
    readonly tipo: "tipo";
};
export type Tbl_tipo_ingredienteScalarFieldEnum = (typeof Tbl_tipo_ingredienteScalarFieldEnum)[keyof typeof Tbl_tipo_ingredienteScalarFieldEnum];
export declare const Tbl_tipo_pessoaScalarFieldEnum: {
    readonly tipo_pessoa_id: "tipo_pessoa_id";
    readonly tipo: "tipo";
};
export type Tbl_tipo_pessoaScalarFieldEnum = (typeof Tbl_tipo_pessoaScalarFieldEnum)[keyof typeof Tbl_tipo_pessoaScalarFieldEnum];
export declare const Tbl_tipo_produtoScalarFieldEnum: {
    readonly tipo_produto_id: "tipo_produto_id";
    readonly tipo: "tipo";
};
export type Tbl_tipo_produtoScalarFieldEnum = (typeof Tbl_tipo_produtoScalarFieldEnum)[keyof typeof Tbl_tipo_produtoScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
//# sourceMappingURL=prismaNamespaceBrowser.d.ts.map