import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.ts";
/**
 * Model tbl_cliente
 *
 */
export type tbl_clienteModel = runtime.Types.Result.DefaultSelection<Prisma.$tbl_clientePayload>;
export type AggregateTbl_cliente = {
    _count: Tbl_clienteCountAggregateOutputType | null;
    _avg: Tbl_clienteAvgAggregateOutputType | null;
    _sum: Tbl_clienteSumAggregateOutputType | null;
    _min: Tbl_clienteMinAggregateOutputType | null;
    _max: Tbl_clienteMaxAggregateOutputType | null;
};
export type Tbl_clienteAvgAggregateOutputType = {
    cliente_id: number | null;
    tipo_pessoa_id: number | null;
};
export type Tbl_clienteSumAggregateOutputType = {
    cliente_id: number | null;
    tipo_pessoa_id: number | null;
};
export type Tbl_clienteMinAggregateOutputType = {
    cliente_id: number | null;
    tipo_pessoa_id: number | null;
    registro_nacional: string | null;
    nome: string | null;
    sobrenome: string | null;
    nome_fantasia: string | null;
    email: string | null;
    telefone: string | null;
};
export type Tbl_clienteMaxAggregateOutputType = {
    cliente_id: number | null;
    tipo_pessoa_id: number | null;
    registro_nacional: string | null;
    nome: string | null;
    sobrenome: string | null;
    nome_fantasia: string | null;
    email: string | null;
    telefone: string | null;
};
export type Tbl_clienteCountAggregateOutputType = {
    cliente_id: number;
    tipo_pessoa_id: number;
    registro_nacional: number;
    nome: number;
    sobrenome: number;
    nome_fantasia: number;
    email: number;
    telefone: number;
    _all: number;
};
export type Tbl_clienteAvgAggregateInputType = {
    cliente_id?: true;
    tipo_pessoa_id?: true;
};
export type Tbl_clienteSumAggregateInputType = {
    cliente_id?: true;
    tipo_pessoa_id?: true;
};
export type Tbl_clienteMinAggregateInputType = {
    cliente_id?: true;
    tipo_pessoa_id?: true;
    registro_nacional?: true;
    nome?: true;
    sobrenome?: true;
    nome_fantasia?: true;
    email?: true;
    telefone?: true;
};
export type Tbl_clienteMaxAggregateInputType = {
    cliente_id?: true;
    tipo_pessoa_id?: true;
    registro_nacional?: true;
    nome?: true;
    sobrenome?: true;
    nome_fantasia?: true;
    email?: true;
    telefone?: true;
};
export type Tbl_clienteCountAggregateInputType = {
    cliente_id?: true;
    tipo_pessoa_id?: true;
    registro_nacional?: true;
    nome?: true;
    sobrenome?: true;
    nome_fantasia?: true;
    email?: true;
    telefone?: true;
    _all?: true;
};
export type Tbl_clienteAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_cliente to aggregate.
     */
    where?: Prisma.tbl_clienteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tbl_clientes to fetch.
     */
    orderBy?: Prisma.tbl_clienteOrderByWithRelationInput | Prisma.tbl_clienteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.tbl_clienteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tbl_clientes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tbl_clientes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned tbl_clientes
    **/
    _count?: true | Tbl_clienteCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: Tbl_clienteAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: Tbl_clienteSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: Tbl_clienteMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: Tbl_clienteMaxAggregateInputType;
};
export type GetTbl_clienteAggregateType<T extends Tbl_clienteAggregateArgs> = {
    [P in keyof T & keyof AggregateTbl_cliente]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTbl_cliente[P]> : Prisma.GetScalarType<T[P], AggregateTbl_cliente[P]>;
};
export type tbl_clienteGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.tbl_clienteWhereInput;
    orderBy?: Prisma.tbl_clienteOrderByWithAggregationInput | Prisma.tbl_clienteOrderByWithAggregationInput[];
    by: Prisma.Tbl_clienteScalarFieldEnum[] | Prisma.Tbl_clienteScalarFieldEnum;
    having?: Prisma.tbl_clienteScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Tbl_clienteCountAggregateInputType | true;
    _avg?: Tbl_clienteAvgAggregateInputType;
    _sum?: Tbl_clienteSumAggregateInputType;
    _min?: Tbl_clienteMinAggregateInputType;
    _max?: Tbl_clienteMaxAggregateInputType;
};
export type Tbl_clienteGroupByOutputType = {
    cliente_id: number;
    tipo_pessoa_id: number;
    registro_nacional: string;
    nome: string;
    sobrenome: string | null;
    nome_fantasia: string | null;
    email: string | null;
    telefone: string | null;
    _count: Tbl_clienteCountAggregateOutputType | null;
    _avg: Tbl_clienteAvgAggregateOutputType | null;
    _sum: Tbl_clienteSumAggregateOutputType | null;
    _min: Tbl_clienteMinAggregateOutputType | null;
    _max: Tbl_clienteMaxAggregateOutputType | null;
};
export type GetTbl_clienteGroupByPayload<T extends tbl_clienteGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Tbl_clienteGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Tbl_clienteGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Tbl_clienteGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Tbl_clienteGroupByOutputType[P]>;
}>>;
export type tbl_clienteWhereInput = {
    AND?: Prisma.tbl_clienteWhereInput | Prisma.tbl_clienteWhereInput[];
    OR?: Prisma.tbl_clienteWhereInput[];
    NOT?: Prisma.tbl_clienteWhereInput | Prisma.tbl_clienteWhereInput[];
    cliente_id?: Prisma.IntFilter<"tbl_cliente"> | number;
    tipo_pessoa_id?: Prisma.IntFilter<"tbl_cliente"> | number;
    registro_nacional?: Prisma.StringFilter<"tbl_cliente"> | string;
    nome?: Prisma.StringFilter<"tbl_cliente"> | string;
    sobrenome?: Prisma.StringNullableFilter<"tbl_cliente"> | string | null;
    nome_fantasia?: Prisma.StringNullableFilter<"tbl_cliente"> | string | null;
    email?: Prisma.StringNullableFilter<"tbl_cliente"> | string | null;
    telefone?: Prisma.StringNullableFilter<"tbl_cliente"> | string | null;
    tbl_tipo_pessoa?: Prisma.XOR<Prisma.Tbl_tipo_pessoaScalarRelationFilter, Prisma.tbl_tipo_pessoaWhereInput>;
    tbl_endereco?: Prisma.Tbl_enderecoListRelationFilter;
    tbl_pedido?: Prisma.Tbl_pedidoListRelationFilter;
};
export type tbl_clienteOrderByWithRelationInput = {
    cliente_id?: Prisma.SortOrder;
    tipo_pessoa_id?: Prisma.SortOrder;
    registro_nacional?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    sobrenome?: Prisma.SortOrderInput | Prisma.SortOrder;
    nome_fantasia?: Prisma.SortOrderInput | Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    telefone?: Prisma.SortOrderInput | Prisma.SortOrder;
    tbl_tipo_pessoa?: Prisma.tbl_tipo_pessoaOrderByWithRelationInput;
    tbl_endereco?: Prisma.tbl_enderecoOrderByRelationAggregateInput;
    tbl_pedido?: Prisma.tbl_pedidoOrderByRelationAggregateInput;
};
export type tbl_clienteWhereUniqueInput = Prisma.AtLeast<{
    cliente_id?: number;
    AND?: Prisma.tbl_clienteWhereInput | Prisma.tbl_clienteWhereInput[];
    OR?: Prisma.tbl_clienteWhereInput[];
    NOT?: Prisma.tbl_clienteWhereInput | Prisma.tbl_clienteWhereInput[];
    tipo_pessoa_id?: Prisma.IntFilter<"tbl_cliente"> | number;
    registro_nacional?: Prisma.StringFilter<"tbl_cliente"> | string;
    nome?: Prisma.StringFilter<"tbl_cliente"> | string;
    sobrenome?: Prisma.StringNullableFilter<"tbl_cliente"> | string | null;
    nome_fantasia?: Prisma.StringNullableFilter<"tbl_cliente"> | string | null;
    email?: Prisma.StringNullableFilter<"tbl_cliente"> | string | null;
    telefone?: Prisma.StringNullableFilter<"tbl_cliente"> | string | null;
    tbl_tipo_pessoa?: Prisma.XOR<Prisma.Tbl_tipo_pessoaScalarRelationFilter, Prisma.tbl_tipo_pessoaWhereInput>;
    tbl_endereco?: Prisma.Tbl_enderecoListRelationFilter;
    tbl_pedido?: Prisma.Tbl_pedidoListRelationFilter;
}, "cliente_id">;
export type tbl_clienteOrderByWithAggregationInput = {
    cliente_id?: Prisma.SortOrder;
    tipo_pessoa_id?: Prisma.SortOrder;
    registro_nacional?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    sobrenome?: Prisma.SortOrderInput | Prisma.SortOrder;
    nome_fantasia?: Prisma.SortOrderInput | Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    telefone?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.tbl_clienteCountOrderByAggregateInput;
    _avg?: Prisma.tbl_clienteAvgOrderByAggregateInput;
    _max?: Prisma.tbl_clienteMaxOrderByAggregateInput;
    _min?: Prisma.tbl_clienteMinOrderByAggregateInput;
    _sum?: Prisma.tbl_clienteSumOrderByAggregateInput;
};
export type tbl_clienteScalarWhereWithAggregatesInput = {
    AND?: Prisma.tbl_clienteScalarWhereWithAggregatesInput | Prisma.tbl_clienteScalarWhereWithAggregatesInput[];
    OR?: Prisma.tbl_clienteScalarWhereWithAggregatesInput[];
    NOT?: Prisma.tbl_clienteScalarWhereWithAggregatesInput | Prisma.tbl_clienteScalarWhereWithAggregatesInput[];
    cliente_id?: Prisma.IntWithAggregatesFilter<"tbl_cliente"> | number;
    tipo_pessoa_id?: Prisma.IntWithAggregatesFilter<"tbl_cliente"> | number;
    registro_nacional?: Prisma.StringWithAggregatesFilter<"tbl_cliente"> | string;
    nome?: Prisma.StringWithAggregatesFilter<"tbl_cliente"> | string;
    sobrenome?: Prisma.StringNullableWithAggregatesFilter<"tbl_cliente"> | string | null;
    nome_fantasia?: Prisma.StringNullableWithAggregatesFilter<"tbl_cliente"> | string | null;
    email?: Prisma.StringNullableWithAggregatesFilter<"tbl_cliente"> | string | null;
    telefone?: Prisma.StringNullableWithAggregatesFilter<"tbl_cliente"> | string | null;
};
export type tbl_clienteCreateInput = {
    registro_nacional: string;
    nome: string;
    sobrenome?: string | null;
    nome_fantasia?: string | null;
    email?: string | null;
    telefone?: string | null;
    tbl_tipo_pessoa: Prisma.tbl_tipo_pessoaCreateNestedOneWithoutTbl_clienteInput;
    tbl_endereco?: Prisma.tbl_enderecoCreateNestedManyWithoutTbl_clienteInput;
    tbl_pedido?: Prisma.tbl_pedidoCreateNestedManyWithoutTbl_clienteInput;
};
export type tbl_clienteUncheckedCreateInput = {
    cliente_id?: number;
    tipo_pessoa_id: number;
    registro_nacional: string;
    nome: string;
    sobrenome?: string | null;
    nome_fantasia?: string | null;
    email?: string | null;
    telefone?: string | null;
    tbl_endereco?: Prisma.tbl_enderecoUncheckedCreateNestedManyWithoutTbl_clienteInput;
    tbl_pedido?: Prisma.tbl_pedidoUncheckedCreateNestedManyWithoutTbl_clienteInput;
};
export type tbl_clienteUpdateInput = {
    registro_nacional?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    sobrenome?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nome_fantasia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tbl_tipo_pessoa?: Prisma.tbl_tipo_pessoaUpdateOneRequiredWithoutTbl_clienteNestedInput;
    tbl_endereco?: Prisma.tbl_enderecoUpdateManyWithoutTbl_clienteNestedInput;
    tbl_pedido?: Prisma.tbl_pedidoUpdateManyWithoutTbl_clienteNestedInput;
};
export type tbl_clienteUncheckedUpdateInput = {
    cliente_id?: Prisma.IntFieldUpdateOperationsInput | number;
    tipo_pessoa_id?: Prisma.IntFieldUpdateOperationsInput | number;
    registro_nacional?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    sobrenome?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nome_fantasia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tbl_endereco?: Prisma.tbl_enderecoUncheckedUpdateManyWithoutTbl_clienteNestedInput;
    tbl_pedido?: Prisma.tbl_pedidoUncheckedUpdateManyWithoutTbl_clienteNestedInput;
};
export type tbl_clienteCreateManyInput = {
    cliente_id?: number;
    tipo_pessoa_id: number;
    registro_nacional: string;
    nome: string;
    sobrenome?: string | null;
    nome_fantasia?: string | null;
    email?: string | null;
    telefone?: string | null;
};
export type tbl_clienteUpdateManyMutationInput = {
    registro_nacional?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    sobrenome?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nome_fantasia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type tbl_clienteUncheckedUpdateManyInput = {
    cliente_id?: Prisma.IntFieldUpdateOperationsInput | number;
    tipo_pessoa_id?: Prisma.IntFieldUpdateOperationsInput | number;
    registro_nacional?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    sobrenome?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nome_fantasia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type tbl_clienteCountOrderByAggregateInput = {
    cliente_id?: Prisma.SortOrder;
    tipo_pessoa_id?: Prisma.SortOrder;
    registro_nacional?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    sobrenome?: Prisma.SortOrder;
    nome_fantasia?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    telefone?: Prisma.SortOrder;
};
export type tbl_clienteAvgOrderByAggregateInput = {
    cliente_id?: Prisma.SortOrder;
    tipo_pessoa_id?: Prisma.SortOrder;
};
export type tbl_clienteMaxOrderByAggregateInput = {
    cliente_id?: Prisma.SortOrder;
    tipo_pessoa_id?: Prisma.SortOrder;
    registro_nacional?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    sobrenome?: Prisma.SortOrder;
    nome_fantasia?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    telefone?: Prisma.SortOrder;
};
export type tbl_clienteMinOrderByAggregateInput = {
    cliente_id?: Prisma.SortOrder;
    tipo_pessoa_id?: Prisma.SortOrder;
    registro_nacional?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    sobrenome?: Prisma.SortOrder;
    nome_fantasia?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    telefone?: Prisma.SortOrder;
};
export type tbl_clienteSumOrderByAggregateInput = {
    cliente_id?: Prisma.SortOrder;
    tipo_pessoa_id?: Prisma.SortOrder;
};
export type Tbl_clienteScalarRelationFilter = {
    is?: Prisma.tbl_clienteWhereInput;
    isNot?: Prisma.tbl_clienteWhereInput;
};
export type Tbl_clienteListRelationFilter = {
    every?: Prisma.tbl_clienteWhereInput;
    some?: Prisma.tbl_clienteWhereInput;
    none?: Prisma.tbl_clienteWhereInput;
};
export type tbl_clienteOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type tbl_clienteCreateNestedOneWithoutTbl_enderecoInput = {
    create?: Prisma.XOR<Prisma.tbl_clienteCreateWithoutTbl_enderecoInput, Prisma.tbl_clienteUncheckedCreateWithoutTbl_enderecoInput>;
    connectOrCreate?: Prisma.tbl_clienteCreateOrConnectWithoutTbl_enderecoInput;
    connect?: Prisma.tbl_clienteWhereUniqueInput;
};
export type tbl_clienteUpdateOneRequiredWithoutTbl_enderecoNestedInput = {
    create?: Prisma.XOR<Prisma.tbl_clienteCreateWithoutTbl_enderecoInput, Prisma.tbl_clienteUncheckedCreateWithoutTbl_enderecoInput>;
    connectOrCreate?: Prisma.tbl_clienteCreateOrConnectWithoutTbl_enderecoInput;
    upsert?: Prisma.tbl_clienteUpsertWithoutTbl_enderecoInput;
    connect?: Prisma.tbl_clienteWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.tbl_clienteUpdateToOneWithWhereWithoutTbl_enderecoInput, Prisma.tbl_clienteUpdateWithoutTbl_enderecoInput>, Prisma.tbl_clienteUncheckedUpdateWithoutTbl_enderecoInput>;
};
export type tbl_clienteCreateNestedOneWithoutTbl_pedidoInput = {
    create?: Prisma.XOR<Prisma.tbl_clienteCreateWithoutTbl_pedidoInput, Prisma.tbl_clienteUncheckedCreateWithoutTbl_pedidoInput>;
    connectOrCreate?: Prisma.tbl_clienteCreateOrConnectWithoutTbl_pedidoInput;
    connect?: Prisma.tbl_clienteWhereUniqueInput;
};
export type tbl_clienteUpdateOneRequiredWithoutTbl_pedidoNestedInput = {
    create?: Prisma.XOR<Prisma.tbl_clienteCreateWithoutTbl_pedidoInput, Prisma.tbl_clienteUncheckedCreateWithoutTbl_pedidoInput>;
    connectOrCreate?: Prisma.tbl_clienteCreateOrConnectWithoutTbl_pedidoInput;
    upsert?: Prisma.tbl_clienteUpsertWithoutTbl_pedidoInput;
    connect?: Prisma.tbl_clienteWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.tbl_clienteUpdateToOneWithWhereWithoutTbl_pedidoInput, Prisma.tbl_clienteUpdateWithoutTbl_pedidoInput>, Prisma.tbl_clienteUncheckedUpdateWithoutTbl_pedidoInput>;
};
export type tbl_clienteCreateNestedManyWithoutTbl_tipo_pessoaInput = {
    create?: Prisma.XOR<Prisma.tbl_clienteCreateWithoutTbl_tipo_pessoaInput, Prisma.tbl_clienteUncheckedCreateWithoutTbl_tipo_pessoaInput> | Prisma.tbl_clienteCreateWithoutTbl_tipo_pessoaInput[] | Prisma.tbl_clienteUncheckedCreateWithoutTbl_tipo_pessoaInput[];
    connectOrCreate?: Prisma.tbl_clienteCreateOrConnectWithoutTbl_tipo_pessoaInput | Prisma.tbl_clienteCreateOrConnectWithoutTbl_tipo_pessoaInput[];
    createMany?: Prisma.tbl_clienteCreateManyTbl_tipo_pessoaInputEnvelope;
    connect?: Prisma.tbl_clienteWhereUniqueInput | Prisma.tbl_clienteWhereUniqueInput[];
};
export type tbl_clienteUncheckedCreateNestedManyWithoutTbl_tipo_pessoaInput = {
    create?: Prisma.XOR<Prisma.tbl_clienteCreateWithoutTbl_tipo_pessoaInput, Prisma.tbl_clienteUncheckedCreateWithoutTbl_tipo_pessoaInput> | Prisma.tbl_clienteCreateWithoutTbl_tipo_pessoaInput[] | Prisma.tbl_clienteUncheckedCreateWithoutTbl_tipo_pessoaInput[];
    connectOrCreate?: Prisma.tbl_clienteCreateOrConnectWithoutTbl_tipo_pessoaInput | Prisma.tbl_clienteCreateOrConnectWithoutTbl_tipo_pessoaInput[];
    createMany?: Prisma.tbl_clienteCreateManyTbl_tipo_pessoaInputEnvelope;
    connect?: Prisma.tbl_clienteWhereUniqueInput | Prisma.tbl_clienteWhereUniqueInput[];
};
export type tbl_clienteUpdateManyWithoutTbl_tipo_pessoaNestedInput = {
    create?: Prisma.XOR<Prisma.tbl_clienteCreateWithoutTbl_tipo_pessoaInput, Prisma.tbl_clienteUncheckedCreateWithoutTbl_tipo_pessoaInput> | Prisma.tbl_clienteCreateWithoutTbl_tipo_pessoaInput[] | Prisma.tbl_clienteUncheckedCreateWithoutTbl_tipo_pessoaInput[];
    connectOrCreate?: Prisma.tbl_clienteCreateOrConnectWithoutTbl_tipo_pessoaInput | Prisma.tbl_clienteCreateOrConnectWithoutTbl_tipo_pessoaInput[];
    upsert?: Prisma.tbl_clienteUpsertWithWhereUniqueWithoutTbl_tipo_pessoaInput | Prisma.tbl_clienteUpsertWithWhereUniqueWithoutTbl_tipo_pessoaInput[];
    createMany?: Prisma.tbl_clienteCreateManyTbl_tipo_pessoaInputEnvelope;
    set?: Prisma.tbl_clienteWhereUniqueInput | Prisma.tbl_clienteWhereUniqueInput[];
    disconnect?: Prisma.tbl_clienteWhereUniqueInput | Prisma.tbl_clienteWhereUniqueInput[];
    delete?: Prisma.tbl_clienteWhereUniqueInput | Prisma.tbl_clienteWhereUniqueInput[];
    connect?: Prisma.tbl_clienteWhereUniqueInput | Prisma.tbl_clienteWhereUniqueInput[];
    update?: Prisma.tbl_clienteUpdateWithWhereUniqueWithoutTbl_tipo_pessoaInput | Prisma.tbl_clienteUpdateWithWhereUniqueWithoutTbl_tipo_pessoaInput[];
    updateMany?: Prisma.tbl_clienteUpdateManyWithWhereWithoutTbl_tipo_pessoaInput | Prisma.tbl_clienteUpdateManyWithWhereWithoutTbl_tipo_pessoaInput[];
    deleteMany?: Prisma.tbl_clienteScalarWhereInput | Prisma.tbl_clienteScalarWhereInput[];
};
export type tbl_clienteUncheckedUpdateManyWithoutTbl_tipo_pessoaNestedInput = {
    create?: Prisma.XOR<Prisma.tbl_clienteCreateWithoutTbl_tipo_pessoaInput, Prisma.tbl_clienteUncheckedCreateWithoutTbl_tipo_pessoaInput> | Prisma.tbl_clienteCreateWithoutTbl_tipo_pessoaInput[] | Prisma.tbl_clienteUncheckedCreateWithoutTbl_tipo_pessoaInput[];
    connectOrCreate?: Prisma.tbl_clienteCreateOrConnectWithoutTbl_tipo_pessoaInput | Prisma.tbl_clienteCreateOrConnectWithoutTbl_tipo_pessoaInput[];
    upsert?: Prisma.tbl_clienteUpsertWithWhereUniqueWithoutTbl_tipo_pessoaInput | Prisma.tbl_clienteUpsertWithWhereUniqueWithoutTbl_tipo_pessoaInput[];
    createMany?: Prisma.tbl_clienteCreateManyTbl_tipo_pessoaInputEnvelope;
    set?: Prisma.tbl_clienteWhereUniqueInput | Prisma.tbl_clienteWhereUniqueInput[];
    disconnect?: Prisma.tbl_clienteWhereUniqueInput | Prisma.tbl_clienteWhereUniqueInput[];
    delete?: Prisma.tbl_clienteWhereUniqueInput | Prisma.tbl_clienteWhereUniqueInput[];
    connect?: Prisma.tbl_clienteWhereUniqueInput | Prisma.tbl_clienteWhereUniqueInput[];
    update?: Prisma.tbl_clienteUpdateWithWhereUniqueWithoutTbl_tipo_pessoaInput | Prisma.tbl_clienteUpdateWithWhereUniqueWithoutTbl_tipo_pessoaInput[];
    updateMany?: Prisma.tbl_clienteUpdateManyWithWhereWithoutTbl_tipo_pessoaInput | Prisma.tbl_clienteUpdateManyWithWhereWithoutTbl_tipo_pessoaInput[];
    deleteMany?: Prisma.tbl_clienteScalarWhereInput | Prisma.tbl_clienteScalarWhereInput[];
};
export type tbl_clienteCreateWithoutTbl_enderecoInput = {
    registro_nacional: string;
    nome: string;
    sobrenome?: string | null;
    nome_fantasia?: string | null;
    email?: string | null;
    telefone?: string | null;
    tbl_tipo_pessoa: Prisma.tbl_tipo_pessoaCreateNestedOneWithoutTbl_clienteInput;
    tbl_pedido?: Prisma.tbl_pedidoCreateNestedManyWithoutTbl_clienteInput;
};
export type tbl_clienteUncheckedCreateWithoutTbl_enderecoInput = {
    cliente_id?: number;
    tipo_pessoa_id: number;
    registro_nacional: string;
    nome: string;
    sobrenome?: string | null;
    nome_fantasia?: string | null;
    email?: string | null;
    telefone?: string | null;
    tbl_pedido?: Prisma.tbl_pedidoUncheckedCreateNestedManyWithoutTbl_clienteInput;
};
export type tbl_clienteCreateOrConnectWithoutTbl_enderecoInput = {
    where: Prisma.tbl_clienteWhereUniqueInput;
    create: Prisma.XOR<Prisma.tbl_clienteCreateWithoutTbl_enderecoInput, Prisma.tbl_clienteUncheckedCreateWithoutTbl_enderecoInput>;
};
export type tbl_clienteUpsertWithoutTbl_enderecoInput = {
    update: Prisma.XOR<Prisma.tbl_clienteUpdateWithoutTbl_enderecoInput, Prisma.tbl_clienteUncheckedUpdateWithoutTbl_enderecoInput>;
    create: Prisma.XOR<Prisma.tbl_clienteCreateWithoutTbl_enderecoInput, Prisma.tbl_clienteUncheckedCreateWithoutTbl_enderecoInput>;
    where?: Prisma.tbl_clienteWhereInput;
};
export type tbl_clienteUpdateToOneWithWhereWithoutTbl_enderecoInput = {
    where?: Prisma.tbl_clienteWhereInput;
    data: Prisma.XOR<Prisma.tbl_clienteUpdateWithoutTbl_enderecoInput, Prisma.tbl_clienteUncheckedUpdateWithoutTbl_enderecoInput>;
};
export type tbl_clienteUpdateWithoutTbl_enderecoInput = {
    registro_nacional?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    sobrenome?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nome_fantasia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tbl_tipo_pessoa?: Prisma.tbl_tipo_pessoaUpdateOneRequiredWithoutTbl_clienteNestedInput;
    tbl_pedido?: Prisma.tbl_pedidoUpdateManyWithoutTbl_clienteNestedInput;
};
export type tbl_clienteUncheckedUpdateWithoutTbl_enderecoInput = {
    cliente_id?: Prisma.IntFieldUpdateOperationsInput | number;
    tipo_pessoa_id?: Prisma.IntFieldUpdateOperationsInput | number;
    registro_nacional?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    sobrenome?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nome_fantasia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tbl_pedido?: Prisma.tbl_pedidoUncheckedUpdateManyWithoutTbl_clienteNestedInput;
};
export type tbl_clienteCreateWithoutTbl_pedidoInput = {
    registro_nacional: string;
    nome: string;
    sobrenome?: string | null;
    nome_fantasia?: string | null;
    email?: string | null;
    telefone?: string | null;
    tbl_tipo_pessoa: Prisma.tbl_tipo_pessoaCreateNestedOneWithoutTbl_clienteInput;
    tbl_endereco?: Prisma.tbl_enderecoCreateNestedManyWithoutTbl_clienteInput;
};
export type tbl_clienteUncheckedCreateWithoutTbl_pedidoInput = {
    cliente_id?: number;
    tipo_pessoa_id: number;
    registro_nacional: string;
    nome: string;
    sobrenome?: string | null;
    nome_fantasia?: string | null;
    email?: string | null;
    telefone?: string | null;
    tbl_endereco?: Prisma.tbl_enderecoUncheckedCreateNestedManyWithoutTbl_clienteInput;
};
export type tbl_clienteCreateOrConnectWithoutTbl_pedidoInput = {
    where: Prisma.tbl_clienteWhereUniqueInput;
    create: Prisma.XOR<Prisma.tbl_clienteCreateWithoutTbl_pedidoInput, Prisma.tbl_clienteUncheckedCreateWithoutTbl_pedidoInput>;
};
export type tbl_clienteUpsertWithoutTbl_pedidoInput = {
    update: Prisma.XOR<Prisma.tbl_clienteUpdateWithoutTbl_pedidoInput, Prisma.tbl_clienteUncheckedUpdateWithoutTbl_pedidoInput>;
    create: Prisma.XOR<Prisma.tbl_clienteCreateWithoutTbl_pedidoInput, Prisma.tbl_clienteUncheckedCreateWithoutTbl_pedidoInput>;
    where?: Prisma.tbl_clienteWhereInput;
};
export type tbl_clienteUpdateToOneWithWhereWithoutTbl_pedidoInput = {
    where?: Prisma.tbl_clienteWhereInput;
    data: Prisma.XOR<Prisma.tbl_clienteUpdateWithoutTbl_pedidoInput, Prisma.tbl_clienteUncheckedUpdateWithoutTbl_pedidoInput>;
};
export type tbl_clienteUpdateWithoutTbl_pedidoInput = {
    registro_nacional?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    sobrenome?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nome_fantasia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tbl_tipo_pessoa?: Prisma.tbl_tipo_pessoaUpdateOneRequiredWithoutTbl_clienteNestedInput;
    tbl_endereco?: Prisma.tbl_enderecoUpdateManyWithoutTbl_clienteNestedInput;
};
export type tbl_clienteUncheckedUpdateWithoutTbl_pedidoInput = {
    cliente_id?: Prisma.IntFieldUpdateOperationsInput | number;
    tipo_pessoa_id?: Prisma.IntFieldUpdateOperationsInput | number;
    registro_nacional?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    sobrenome?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nome_fantasia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tbl_endereco?: Prisma.tbl_enderecoUncheckedUpdateManyWithoutTbl_clienteNestedInput;
};
export type tbl_clienteCreateWithoutTbl_tipo_pessoaInput = {
    registro_nacional: string;
    nome: string;
    sobrenome?: string | null;
    nome_fantasia?: string | null;
    email?: string | null;
    telefone?: string | null;
    tbl_endereco?: Prisma.tbl_enderecoCreateNestedManyWithoutTbl_clienteInput;
    tbl_pedido?: Prisma.tbl_pedidoCreateNestedManyWithoutTbl_clienteInput;
};
export type tbl_clienteUncheckedCreateWithoutTbl_tipo_pessoaInput = {
    cliente_id?: number;
    registro_nacional: string;
    nome: string;
    sobrenome?: string | null;
    nome_fantasia?: string | null;
    email?: string | null;
    telefone?: string | null;
    tbl_endereco?: Prisma.tbl_enderecoUncheckedCreateNestedManyWithoutTbl_clienteInput;
    tbl_pedido?: Prisma.tbl_pedidoUncheckedCreateNestedManyWithoutTbl_clienteInput;
};
export type tbl_clienteCreateOrConnectWithoutTbl_tipo_pessoaInput = {
    where: Prisma.tbl_clienteWhereUniqueInput;
    create: Prisma.XOR<Prisma.tbl_clienteCreateWithoutTbl_tipo_pessoaInput, Prisma.tbl_clienteUncheckedCreateWithoutTbl_tipo_pessoaInput>;
};
export type tbl_clienteCreateManyTbl_tipo_pessoaInputEnvelope = {
    data: Prisma.tbl_clienteCreateManyTbl_tipo_pessoaInput | Prisma.tbl_clienteCreateManyTbl_tipo_pessoaInput[];
    skipDuplicates?: boolean;
};
export type tbl_clienteUpsertWithWhereUniqueWithoutTbl_tipo_pessoaInput = {
    where: Prisma.tbl_clienteWhereUniqueInput;
    update: Prisma.XOR<Prisma.tbl_clienteUpdateWithoutTbl_tipo_pessoaInput, Prisma.tbl_clienteUncheckedUpdateWithoutTbl_tipo_pessoaInput>;
    create: Prisma.XOR<Prisma.tbl_clienteCreateWithoutTbl_tipo_pessoaInput, Prisma.tbl_clienteUncheckedCreateWithoutTbl_tipo_pessoaInput>;
};
export type tbl_clienteUpdateWithWhereUniqueWithoutTbl_tipo_pessoaInput = {
    where: Prisma.tbl_clienteWhereUniqueInput;
    data: Prisma.XOR<Prisma.tbl_clienteUpdateWithoutTbl_tipo_pessoaInput, Prisma.tbl_clienteUncheckedUpdateWithoutTbl_tipo_pessoaInput>;
};
export type tbl_clienteUpdateManyWithWhereWithoutTbl_tipo_pessoaInput = {
    where: Prisma.tbl_clienteScalarWhereInput;
    data: Prisma.XOR<Prisma.tbl_clienteUpdateManyMutationInput, Prisma.tbl_clienteUncheckedUpdateManyWithoutTbl_tipo_pessoaInput>;
};
export type tbl_clienteScalarWhereInput = {
    AND?: Prisma.tbl_clienteScalarWhereInput | Prisma.tbl_clienteScalarWhereInput[];
    OR?: Prisma.tbl_clienteScalarWhereInput[];
    NOT?: Prisma.tbl_clienteScalarWhereInput | Prisma.tbl_clienteScalarWhereInput[];
    cliente_id?: Prisma.IntFilter<"tbl_cliente"> | number;
    tipo_pessoa_id?: Prisma.IntFilter<"tbl_cliente"> | number;
    registro_nacional?: Prisma.StringFilter<"tbl_cliente"> | string;
    nome?: Prisma.StringFilter<"tbl_cliente"> | string;
    sobrenome?: Prisma.StringNullableFilter<"tbl_cliente"> | string | null;
    nome_fantasia?: Prisma.StringNullableFilter<"tbl_cliente"> | string | null;
    email?: Prisma.StringNullableFilter<"tbl_cliente"> | string | null;
    telefone?: Prisma.StringNullableFilter<"tbl_cliente"> | string | null;
};
export type tbl_clienteCreateManyTbl_tipo_pessoaInput = {
    cliente_id?: number;
    registro_nacional: string;
    nome: string;
    sobrenome?: string | null;
    nome_fantasia?: string | null;
    email?: string | null;
    telefone?: string | null;
};
export type tbl_clienteUpdateWithoutTbl_tipo_pessoaInput = {
    registro_nacional?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    sobrenome?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nome_fantasia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tbl_endereco?: Prisma.tbl_enderecoUpdateManyWithoutTbl_clienteNestedInput;
    tbl_pedido?: Prisma.tbl_pedidoUpdateManyWithoutTbl_clienteNestedInput;
};
export type tbl_clienteUncheckedUpdateWithoutTbl_tipo_pessoaInput = {
    cliente_id?: Prisma.IntFieldUpdateOperationsInput | number;
    registro_nacional?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    sobrenome?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nome_fantasia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tbl_endereco?: Prisma.tbl_enderecoUncheckedUpdateManyWithoutTbl_clienteNestedInput;
    tbl_pedido?: Prisma.tbl_pedidoUncheckedUpdateManyWithoutTbl_clienteNestedInput;
};
export type tbl_clienteUncheckedUpdateManyWithoutTbl_tipo_pessoaInput = {
    cliente_id?: Prisma.IntFieldUpdateOperationsInput | number;
    registro_nacional?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    sobrenome?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nome_fantasia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
/**
 * Count Type Tbl_clienteCountOutputType
 */
export type Tbl_clienteCountOutputType = {
    tbl_endereco: number;
    tbl_pedido: number;
};
export type Tbl_clienteCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tbl_endereco?: boolean | Tbl_clienteCountOutputTypeCountTbl_enderecoArgs;
    tbl_pedido?: boolean | Tbl_clienteCountOutputTypeCountTbl_pedidoArgs;
};
/**
 * Tbl_clienteCountOutputType without action
 */
export type Tbl_clienteCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tbl_clienteCountOutputType
     */
    select?: Prisma.Tbl_clienteCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * Tbl_clienteCountOutputType without action
 */
export type Tbl_clienteCountOutputTypeCountTbl_enderecoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.tbl_enderecoWhereInput;
};
/**
 * Tbl_clienteCountOutputType without action
 */
export type Tbl_clienteCountOutputTypeCountTbl_pedidoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.tbl_pedidoWhereInput;
};
export type tbl_clienteSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    cliente_id?: boolean;
    tipo_pessoa_id?: boolean;
    registro_nacional?: boolean;
    nome?: boolean;
    sobrenome?: boolean;
    nome_fantasia?: boolean;
    email?: boolean;
    telefone?: boolean;
    tbl_tipo_pessoa?: boolean | Prisma.tbl_tipo_pessoaDefaultArgs<ExtArgs>;
    tbl_endereco?: boolean | Prisma.tbl_cliente$tbl_enderecoArgs<ExtArgs>;
    tbl_pedido?: boolean | Prisma.tbl_cliente$tbl_pedidoArgs<ExtArgs>;
    _count?: boolean | Prisma.Tbl_clienteCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["tbl_cliente"]>;
export type tbl_clienteSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    cliente_id?: boolean;
    tipo_pessoa_id?: boolean;
    registro_nacional?: boolean;
    nome?: boolean;
    sobrenome?: boolean;
    nome_fantasia?: boolean;
    email?: boolean;
    telefone?: boolean;
    tbl_tipo_pessoa?: boolean | Prisma.tbl_tipo_pessoaDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["tbl_cliente"]>;
export type tbl_clienteSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    cliente_id?: boolean;
    tipo_pessoa_id?: boolean;
    registro_nacional?: boolean;
    nome?: boolean;
    sobrenome?: boolean;
    nome_fantasia?: boolean;
    email?: boolean;
    telefone?: boolean;
    tbl_tipo_pessoa?: boolean | Prisma.tbl_tipo_pessoaDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["tbl_cliente"]>;
export type tbl_clienteSelectScalar = {
    cliente_id?: boolean;
    tipo_pessoa_id?: boolean;
    registro_nacional?: boolean;
    nome?: boolean;
    sobrenome?: boolean;
    nome_fantasia?: boolean;
    email?: boolean;
    telefone?: boolean;
};
export type tbl_clienteOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"cliente_id" | "tipo_pessoa_id" | "registro_nacional" | "nome" | "sobrenome" | "nome_fantasia" | "email" | "telefone", ExtArgs["result"]["tbl_cliente"]>;
export type tbl_clienteInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tbl_tipo_pessoa?: boolean | Prisma.tbl_tipo_pessoaDefaultArgs<ExtArgs>;
    tbl_endereco?: boolean | Prisma.tbl_cliente$tbl_enderecoArgs<ExtArgs>;
    tbl_pedido?: boolean | Prisma.tbl_cliente$tbl_pedidoArgs<ExtArgs>;
    _count?: boolean | Prisma.Tbl_clienteCountOutputTypeDefaultArgs<ExtArgs>;
};
export type tbl_clienteIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tbl_tipo_pessoa?: boolean | Prisma.tbl_tipo_pessoaDefaultArgs<ExtArgs>;
};
export type tbl_clienteIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tbl_tipo_pessoa?: boolean | Prisma.tbl_tipo_pessoaDefaultArgs<ExtArgs>;
};
export type $tbl_clientePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "tbl_cliente";
    objects: {
        tbl_tipo_pessoa: Prisma.$tbl_tipo_pessoaPayload<ExtArgs>;
        tbl_endereco: Prisma.$tbl_enderecoPayload<ExtArgs>[];
        tbl_pedido: Prisma.$tbl_pedidoPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        cliente_id: number;
        tipo_pessoa_id: number;
        registro_nacional: string;
        nome: string;
        sobrenome: string | null;
        nome_fantasia: string | null;
        email: string | null;
        telefone: string | null;
    }, ExtArgs["result"]["tbl_cliente"]>;
    composites: {};
};
export type tbl_clienteGetPayload<S extends boolean | null | undefined | tbl_clienteDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$tbl_clientePayload, S>;
export type tbl_clienteCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<tbl_clienteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Tbl_clienteCountAggregateInputType | true;
};
export interface tbl_clienteDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['tbl_cliente'];
        meta: {
            name: 'tbl_cliente';
        };
    };
    /**
     * Find zero or one Tbl_cliente that matches the filter.
     * @param {tbl_clienteFindUniqueArgs} args - Arguments to find a Tbl_cliente
     * @example
     * // Get one Tbl_cliente
     * const tbl_cliente = await prisma.tbl_cliente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tbl_clienteFindUniqueArgs>(args: Prisma.SelectSubset<T, tbl_clienteFindUniqueArgs<ExtArgs>>): Prisma.Prisma__tbl_clienteClient<runtime.Types.Result.GetResult<Prisma.$tbl_clientePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Tbl_cliente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tbl_clienteFindUniqueOrThrowArgs} args - Arguments to find a Tbl_cliente
     * @example
     * // Get one Tbl_cliente
     * const tbl_cliente = await prisma.tbl_cliente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tbl_clienteFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, tbl_clienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__tbl_clienteClient<runtime.Types.Result.GetResult<Prisma.$tbl_clientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Tbl_cliente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_clienteFindFirstArgs} args - Arguments to find a Tbl_cliente
     * @example
     * // Get one Tbl_cliente
     * const tbl_cliente = await prisma.tbl_cliente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tbl_clienteFindFirstArgs>(args?: Prisma.SelectSubset<T, tbl_clienteFindFirstArgs<ExtArgs>>): Prisma.Prisma__tbl_clienteClient<runtime.Types.Result.GetResult<Prisma.$tbl_clientePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Tbl_cliente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_clienteFindFirstOrThrowArgs} args - Arguments to find a Tbl_cliente
     * @example
     * // Get one Tbl_cliente
     * const tbl_cliente = await prisma.tbl_cliente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tbl_clienteFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, tbl_clienteFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__tbl_clienteClient<runtime.Types.Result.GetResult<Prisma.$tbl_clientePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Tbl_clientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_clienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tbl_clientes
     * const tbl_clientes = await prisma.tbl_cliente.findMany()
     *
     * // Get first 10 Tbl_clientes
     * const tbl_clientes = await prisma.tbl_cliente.findMany({ take: 10 })
     *
     * // Only select the `cliente_id`
     * const tbl_clienteWithCliente_idOnly = await prisma.tbl_cliente.findMany({ select: { cliente_id: true } })
     *
     */
    findMany<T extends tbl_clienteFindManyArgs>(args?: Prisma.SelectSubset<T, tbl_clienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$tbl_clientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Tbl_cliente.
     * @param {tbl_clienteCreateArgs} args - Arguments to create a Tbl_cliente.
     * @example
     * // Create one Tbl_cliente
     * const Tbl_cliente = await prisma.tbl_cliente.create({
     *   data: {
     *     // ... data to create a Tbl_cliente
     *   }
     * })
     *
     */
    create<T extends tbl_clienteCreateArgs>(args: Prisma.SelectSubset<T, tbl_clienteCreateArgs<ExtArgs>>): Prisma.Prisma__tbl_clienteClient<runtime.Types.Result.GetResult<Prisma.$tbl_clientePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Tbl_clientes.
     * @param {tbl_clienteCreateManyArgs} args - Arguments to create many Tbl_clientes.
     * @example
     * // Create many Tbl_clientes
     * const tbl_cliente = await prisma.tbl_cliente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends tbl_clienteCreateManyArgs>(args?: Prisma.SelectSubset<T, tbl_clienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Tbl_clientes and returns the data saved in the database.
     * @param {tbl_clienteCreateManyAndReturnArgs} args - Arguments to create many Tbl_clientes.
     * @example
     * // Create many Tbl_clientes
     * const tbl_cliente = await prisma.tbl_cliente.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Tbl_clientes and only return the `cliente_id`
     * const tbl_clienteWithCliente_idOnly = await prisma.tbl_cliente.createManyAndReturn({
     *   select: { cliente_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends tbl_clienteCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, tbl_clienteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$tbl_clientePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Tbl_cliente.
     * @param {tbl_clienteDeleteArgs} args - Arguments to delete one Tbl_cliente.
     * @example
     * // Delete one Tbl_cliente
     * const Tbl_cliente = await prisma.tbl_cliente.delete({
     *   where: {
     *     // ... filter to delete one Tbl_cliente
     *   }
     * })
     *
     */
    delete<T extends tbl_clienteDeleteArgs>(args: Prisma.SelectSubset<T, tbl_clienteDeleteArgs<ExtArgs>>): Prisma.Prisma__tbl_clienteClient<runtime.Types.Result.GetResult<Prisma.$tbl_clientePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Tbl_cliente.
     * @param {tbl_clienteUpdateArgs} args - Arguments to update one Tbl_cliente.
     * @example
     * // Update one Tbl_cliente
     * const tbl_cliente = await prisma.tbl_cliente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends tbl_clienteUpdateArgs>(args: Prisma.SelectSubset<T, tbl_clienteUpdateArgs<ExtArgs>>): Prisma.Prisma__tbl_clienteClient<runtime.Types.Result.GetResult<Prisma.$tbl_clientePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Tbl_clientes.
     * @param {tbl_clienteDeleteManyArgs} args - Arguments to filter Tbl_clientes to delete.
     * @example
     * // Delete a few Tbl_clientes
     * const { count } = await prisma.tbl_cliente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends tbl_clienteDeleteManyArgs>(args?: Prisma.SelectSubset<T, tbl_clienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Tbl_clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_clienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tbl_clientes
     * const tbl_cliente = await prisma.tbl_cliente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends tbl_clienteUpdateManyArgs>(args: Prisma.SelectSubset<T, tbl_clienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Tbl_clientes and returns the data updated in the database.
     * @param {tbl_clienteUpdateManyAndReturnArgs} args - Arguments to update many Tbl_clientes.
     * @example
     * // Update many Tbl_clientes
     * const tbl_cliente = await prisma.tbl_cliente.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Tbl_clientes and only return the `cliente_id`
     * const tbl_clienteWithCliente_idOnly = await prisma.tbl_cliente.updateManyAndReturn({
     *   select: { cliente_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends tbl_clienteUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, tbl_clienteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$tbl_clientePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Tbl_cliente.
     * @param {tbl_clienteUpsertArgs} args - Arguments to update or create a Tbl_cliente.
     * @example
     * // Update or create a Tbl_cliente
     * const tbl_cliente = await prisma.tbl_cliente.upsert({
     *   create: {
     *     // ... data to create a Tbl_cliente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tbl_cliente we want to update
     *   }
     * })
     */
    upsert<T extends tbl_clienteUpsertArgs>(args: Prisma.SelectSubset<T, tbl_clienteUpsertArgs<ExtArgs>>): Prisma.Prisma__tbl_clienteClient<runtime.Types.Result.GetResult<Prisma.$tbl_clientePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Tbl_clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_clienteCountArgs} args - Arguments to filter Tbl_clientes to count.
     * @example
     * // Count the number of Tbl_clientes
     * const count = await prisma.tbl_cliente.count({
     *   where: {
     *     // ... the filter for the Tbl_clientes we want to count
     *   }
     * })
    **/
    count<T extends tbl_clienteCountArgs>(args?: Prisma.Subset<T, tbl_clienteCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Tbl_clienteCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Tbl_cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tbl_clienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Tbl_clienteAggregateArgs>(args: Prisma.Subset<T, Tbl_clienteAggregateArgs>): Prisma.PrismaPromise<GetTbl_clienteAggregateType<T>>;
    /**
     * Group by Tbl_cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_clienteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends tbl_clienteGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: tbl_clienteGroupByArgs['orderBy'];
    } : {
        orderBy?: tbl_clienteGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, tbl_clienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTbl_clienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the tbl_cliente model
     */
    readonly fields: tbl_clienteFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for tbl_cliente.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__tbl_clienteClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    tbl_tipo_pessoa<T extends Prisma.tbl_tipo_pessoaDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.tbl_tipo_pessoaDefaultArgs<ExtArgs>>): Prisma.Prisma__tbl_tipo_pessoaClient<runtime.Types.Result.GetResult<Prisma.$tbl_tipo_pessoaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    tbl_endereco<T extends Prisma.tbl_cliente$tbl_enderecoArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.tbl_cliente$tbl_enderecoArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$tbl_enderecoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    tbl_pedido<T extends Prisma.tbl_cliente$tbl_pedidoArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.tbl_cliente$tbl_pedidoArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$tbl_pedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the tbl_cliente model
 */
export interface tbl_clienteFieldRefs {
    readonly cliente_id: Prisma.FieldRef<"tbl_cliente", 'Int'>;
    readonly tipo_pessoa_id: Prisma.FieldRef<"tbl_cliente", 'Int'>;
    readonly registro_nacional: Prisma.FieldRef<"tbl_cliente", 'String'>;
    readonly nome: Prisma.FieldRef<"tbl_cliente", 'String'>;
    readonly sobrenome: Prisma.FieldRef<"tbl_cliente", 'String'>;
    readonly nome_fantasia: Prisma.FieldRef<"tbl_cliente", 'String'>;
    readonly email: Prisma.FieldRef<"tbl_cliente", 'String'>;
    readonly telefone: Prisma.FieldRef<"tbl_cliente", 'String'>;
}
/**
 * tbl_cliente findUnique
 */
export type tbl_clienteFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_cliente
     */
    select?: Prisma.tbl_clienteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the tbl_cliente
     */
    omit?: Prisma.tbl_clienteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.tbl_clienteInclude<ExtArgs> | null;
    /**
     * Filter, which tbl_cliente to fetch.
     */
    where: Prisma.tbl_clienteWhereUniqueInput;
};
/**
 * tbl_cliente findUniqueOrThrow
 */
export type tbl_clienteFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_cliente
     */
    select?: Prisma.tbl_clienteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the tbl_cliente
     */
    omit?: Prisma.tbl_clienteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.tbl_clienteInclude<ExtArgs> | null;
    /**
     * Filter, which tbl_cliente to fetch.
     */
    where: Prisma.tbl_clienteWhereUniqueInput;
};
/**
 * tbl_cliente findFirst
 */
export type tbl_clienteFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_cliente
     */
    select?: Prisma.tbl_clienteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the tbl_cliente
     */
    omit?: Prisma.tbl_clienteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.tbl_clienteInclude<ExtArgs> | null;
    /**
     * Filter, which tbl_cliente to fetch.
     */
    where?: Prisma.tbl_clienteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tbl_clientes to fetch.
     */
    orderBy?: Prisma.tbl_clienteOrderByWithRelationInput | Prisma.tbl_clienteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for tbl_clientes.
     */
    cursor?: Prisma.tbl_clienteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tbl_clientes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tbl_clientes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of tbl_clientes.
     */
    distinct?: Prisma.Tbl_clienteScalarFieldEnum | Prisma.Tbl_clienteScalarFieldEnum[];
};
/**
 * tbl_cliente findFirstOrThrow
 */
export type tbl_clienteFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_cliente
     */
    select?: Prisma.tbl_clienteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the tbl_cliente
     */
    omit?: Prisma.tbl_clienteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.tbl_clienteInclude<ExtArgs> | null;
    /**
     * Filter, which tbl_cliente to fetch.
     */
    where?: Prisma.tbl_clienteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tbl_clientes to fetch.
     */
    orderBy?: Prisma.tbl_clienteOrderByWithRelationInput | Prisma.tbl_clienteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for tbl_clientes.
     */
    cursor?: Prisma.tbl_clienteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tbl_clientes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tbl_clientes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of tbl_clientes.
     */
    distinct?: Prisma.Tbl_clienteScalarFieldEnum | Prisma.Tbl_clienteScalarFieldEnum[];
};
/**
 * tbl_cliente findMany
 */
export type tbl_clienteFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_cliente
     */
    select?: Prisma.tbl_clienteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the tbl_cliente
     */
    omit?: Prisma.tbl_clienteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.tbl_clienteInclude<ExtArgs> | null;
    /**
     * Filter, which tbl_clientes to fetch.
     */
    where?: Prisma.tbl_clienteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tbl_clientes to fetch.
     */
    orderBy?: Prisma.tbl_clienteOrderByWithRelationInput | Prisma.tbl_clienteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing tbl_clientes.
     */
    cursor?: Prisma.tbl_clienteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tbl_clientes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tbl_clientes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of tbl_clientes.
     */
    distinct?: Prisma.Tbl_clienteScalarFieldEnum | Prisma.Tbl_clienteScalarFieldEnum[];
};
/**
 * tbl_cliente create
 */
export type tbl_clienteCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_cliente
     */
    select?: Prisma.tbl_clienteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the tbl_cliente
     */
    omit?: Prisma.tbl_clienteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.tbl_clienteInclude<ExtArgs> | null;
    /**
     * The data needed to create a tbl_cliente.
     */
    data: Prisma.XOR<Prisma.tbl_clienteCreateInput, Prisma.tbl_clienteUncheckedCreateInput>;
};
/**
 * tbl_cliente createMany
 */
export type tbl_clienteCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many tbl_clientes.
     */
    data: Prisma.tbl_clienteCreateManyInput | Prisma.tbl_clienteCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * tbl_cliente createManyAndReturn
 */
export type tbl_clienteCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_cliente
     */
    select?: Prisma.tbl_clienteSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the tbl_cliente
     */
    omit?: Prisma.tbl_clienteOmit<ExtArgs> | null;
    /**
     * The data used to create many tbl_clientes.
     */
    data: Prisma.tbl_clienteCreateManyInput | Prisma.tbl_clienteCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.tbl_clienteIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * tbl_cliente update
 */
export type tbl_clienteUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_cliente
     */
    select?: Prisma.tbl_clienteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the tbl_cliente
     */
    omit?: Prisma.tbl_clienteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.tbl_clienteInclude<ExtArgs> | null;
    /**
     * The data needed to update a tbl_cliente.
     */
    data: Prisma.XOR<Prisma.tbl_clienteUpdateInput, Prisma.tbl_clienteUncheckedUpdateInput>;
    /**
     * Choose, which tbl_cliente to update.
     */
    where: Prisma.tbl_clienteWhereUniqueInput;
};
/**
 * tbl_cliente updateMany
 */
export type tbl_clienteUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update tbl_clientes.
     */
    data: Prisma.XOR<Prisma.tbl_clienteUpdateManyMutationInput, Prisma.tbl_clienteUncheckedUpdateManyInput>;
    /**
     * Filter which tbl_clientes to update
     */
    where?: Prisma.tbl_clienteWhereInput;
    /**
     * Limit how many tbl_clientes to update.
     */
    limit?: number;
};
/**
 * tbl_cliente updateManyAndReturn
 */
export type tbl_clienteUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_cliente
     */
    select?: Prisma.tbl_clienteSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the tbl_cliente
     */
    omit?: Prisma.tbl_clienteOmit<ExtArgs> | null;
    /**
     * The data used to update tbl_clientes.
     */
    data: Prisma.XOR<Prisma.tbl_clienteUpdateManyMutationInput, Prisma.tbl_clienteUncheckedUpdateManyInput>;
    /**
     * Filter which tbl_clientes to update
     */
    where?: Prisma.tbl_clienteWhereInput;
    /**
     * Limit how many tbl_clientes to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.tbl_clienteIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * tbl_cliente upsert
 */
export type tbl_clienteUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_cliente
     */
    select?: Prisma.tbl_clienteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the tbl_cliente
     */
    omit?: Prisma.tbl_clienteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.tbl_clienteInclude<ExtArgs> | null;
    /**
     * The filter to search for the tbl_cliente to update in case it exists.
     */
    where: Prisma.tbl_clienteWhereUniqueInput;
    /**
     * In case the tbl_cliente found by the `where` argument doesn't exist, create a new tbl_cliente with this data.
     */
    create: Prisma.XOR<Prisma.tbl_clienteCreateInput, Prisma.tbl_clienteUncheckedCreateInput>;
    /**
     * In case the tbl_cliente was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.tbl_clienteUpdateInput, Prisma.tbl_clienteUncheckedUpdateInput>;
};
/**
 * tbl_cliente delete
 */
export type tbl_clienteDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_cliente
     */
    select?: Prisma.tbl_clienteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the tbl_cliente
     */
    omit?: Prisma.tbl_clienteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.tbl_clienteInclude<ExtArgs> | null;
    /**
     * Filter which tbl_cliente to delete.
     */
    where: Prisma.tbl_clienteWhereUniqueInput;
};
/**
 * tbl_cliente deleteMany
 */
export type tbl_clienteDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_clientes to delete
     */
    where?: Prisma.tbl_clienteWhereInput;
    /**
     * Limit how many tbl_clientes to delete.
     */
    limit?: number;
};
/**
 * tbl_cliente.tbl_endereco
 */
export type tbl_cliente$tbl_enderecoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_endereco
     */
    select?: Prisma.tbl_enderecoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the tbl_endereco
     */
    omit?: Prisma.tbl_enderecoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.tbl_enderecoInclude<ExtArgs> | null;
    where?: Prisma.tbl_enderecoWhereInput;
    orderBy?: Prisma.tbl_enderecoOrderByWithRelationInput | Prisma.tbl_enderecoOrderByWithRelationInput[];
    cursor?: Prisma.tbl_enderecoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Tbl_enderecoScalarFieldEnum | Prisma.Tbl_enderecoScalarFieldEnum[];
};
/**
 * tbl_cliente.tbl_pedido
 */
export type tbl_cliente$tbl_pedidoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_pedido
     */
    select?: Prisma.tbl_pedidoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the tbl_pedido
     */
    omit?: Prisma.tbl_pedidoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.tbl_pedidoInclude<ExtArgs> | null;
    where?: Prisma.tbl_pedidoWhereInput;
    orderBy?: Prisma.tbl_pedidoOrderByWithRelationInput | Prisma.tbl_pedidoOrderByWithRelationInput[];
    cursor?: Prisma.tbl_pedidoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Tbl_pedidoScalarFieldEnum | Prisma.Tbl_pedidoScalarFieldEnum[];
};
/**
 * tbl_cliente without action
 */
export type tbl_clienteDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_cliente
     */
    select?: Prisma.tbl_clienteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the tbl_cliente
     */
    omit?: Prisma.tbl_clienteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.tbl_clienteInclude<ExtArgs> | null;
};
//# sourceMappingURL=tbl_cliente.d.ts.map