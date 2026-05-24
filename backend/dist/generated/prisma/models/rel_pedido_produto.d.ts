import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.ts";
/**
 * Model rel_pedido_produto
 *
 */
export type rel_pedido_produtoModel = runtime.Types.Result.DefaultSelection<Prisma.$rel_pedido_produtoPayload>;
export type AggregateRel_pedido_produto = {
    _count: Rel_pedido_produtoCountAggregateOutputType | null;
    _avg: Rel_pedido_produtoAvgAggregateOutputType | null;
    _sum: Rel_pedido_produtoSumAggregateOutputType | null;
    _min: Rel_pedido_produtoMinAggregateOutputType | null;
    _max: Rel_pedido_produtoMaxAggregateOutputType | null;
};
export type Rel_pedido_produtoAvgAggregateOutputType = {
    produto_id: number | null;
    pedido_id: number | null;
    valor_unitario: runtime.Decimal | null;
    quantidade: number | null;
};
export type Rel_pedido_produtoSumAggregateOutputType = {
    produto_id: number | null;
    pedido_id: number | null;
    valor_unitario: runtime.Decimal | null;
    quantidade: number | null;
};
export type Rel_pedido_produtoMinAggregateOutputType = {
    produto_id: number | null;
    pedido_id: number | null;
    valor_unitario: runtime.Decimal | null;
    quantidade: number | null;
};
export type Rel_pedido_produtoMaxAggregateOutputType = {
    produto_id: number | null;
    pedido_id: number | null;
    valor_unitario: runtime.Decimal | null;
    quantidade: number | null;
};
export type Rel_pedido_produtoCountAggregateOutputType = {
    produto_id: number;
    pedido_id: number;
    valor_unitario: number;
    quantidade: number;
    _all: number;
};
export type Rel_pedido_produtoAvgAggregateInputType = {
    produto_id?: true;
    pedido_id?: true;
    valor_unitario?: true;
    quantidade?: true;
};
export type Rel_pedido_produtoSumAggregateInputType = {
    produto_id?: true;
    pedido_id?: true;
    valor_unitario?: true;
    quantidade?: true;
};
export type Rel_pedido_produtoMinAggregateInputType = {
    produto_id?: true;
    pedido_id?: true;
    valor_unitario?: true;
    quantidade?: true;
};
export type Rel_pedido_produtoMaxAggregateInputType = {
    produto_id?: true;
    pedido_id?: true;
    valor_unitario?: true;
    quantidade?: true;
};
export type Rel_pedido_produtoCountAggregateInputType = {
    produto_id?: true;
    pedido_id?: true;
    valor_unitario?: true;
    quantidade?: true;
    _all?: true;
};
export type Rel_pedido_produtoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which rel_pedido_produto to aggregate.
     */
    where?: Prisma.rel_pedido_produtoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of rel_pedido_produtos to fetch.
     */
    orderBy?: Prisma.rel_pedido_produtoOrderByWithRelationInput | Prisma.rel_pedido_produtoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.rel_pedido_produtoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` rel_pedido_produtos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` rel_pedido_produtos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned rel_pedido_produtos
    **/
    _count?: true | Rel_pedido_produtoCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: Rel_pedido_produtoAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: Rel_pedido_produtoSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: Rel_pedido_produtoMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: Rel_pedido_produtoMaxAggregateInputType;
};
export type GetRel_pedido_produtoAggregateType<T extends Rel_pedido_produtoAggregateArgs> = {
    [P in keyof T & keyof AggregateRel_pedido_produto]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRel_pedido_produto[P]> : Prisma.GetScalarType<T[P], AggregateRel_pedido_produto[P]>;
};
export type rel_pedido_produtoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.rel_pedido_produtoWhereInput;
    orderBy?: Prisma.rel_pedido_produtoOrderByWithAggregationInput | Prisma.rel_pedido_produtoOrderByWithAggregationInput[];
    by: Prisma.Rel_pedido_produtoScalarFieldEnum[] | Prisma.Rel_pedido_produtoScalarFieldEnum;
    having?: Prisma.rel_pedido_produtoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Rel_pedido_produtoCountAggregateInputType | true;
    _avg?: Rel_pedido_produtoAvgAggregateInputType;
    _sum?: Rel_pedido_produtoSumAggregateInputType;
    _min?: Rel_pedido_produtoMinAggregateInputType;
    _max?: Rel_pedido_produtoMaxAggregateInputType;
};
export type Rel_pedido_produtoGroupByOutputType = {
    produto_id: number;
    pedido_id: number;
    valor_unitario: runtime.Decimal | null;
    quantidade: number | null;
    _count: Rel_pedido_produtoCountAggregateOutputType | null;
    _avg: Rel_pedido_produtoAvgAggregateOutputType | null;
    _sum: Rel_pedido_produtoSumAggregateOutputType | null;
    _min: Rel_pedido_produtoMinAggregateOutputType | null;
    _max: Rel_pedido_produtoMaxAggregateOutputType | null;
};
export type GetRel_pedido_produtoGroupByPayload<T extends rel_pedido_produtoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Rel_pedido_produtoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Rel_pedido_produtoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Rel_pedido_produtoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Rel_pedido_produtoGroupByOutputType[P]>;
}>>;
export type rel_pedido_produtoWhereInput = {
    AND?: Prisma.rel_pedido_produtoWhereInput | Prisma.rel_pedido_produtoWhereInput[];
    OR?: Prisma.rel_pedido_produtoWhereInput[];
    NOT?: Prisma.rel_pedido_produtoWhereInput | Prisma.rel_pedido_produtoWhereInput[];
    produto_id?: Prisma.IntFilter<"rel_pedido_produto"> | number;
    pedido_id?: Prisma.IntFilter<"rel_pedido_produto"> | number;
    valor_unitario?: Prisma.DecimalNullableFilter<"rel_pedido_produto"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    quantidade?: Prisma.IntNullableFilter<"rel_pedido_produto"> | number | null;
    tbl_pedido?: Prisma.XOR<Prisma.Tbl_pedidoScalarRelationFilter, Prisma.tbl_pedidoWhereInput>;
    tbl_produto?: Prisma.XOR<Prisma.Tbl_produtoScalarRelationFilter, Prisma.tbl_produtoWhereInput>;
};
export type rel_pedido_produtoOrderByWithRelationInput = {
    produto_id?: Prisma.SortOrder;
    pedido_id?: Prisma.SortOrder;
    valor_unitario?: Prisma.SortOrderInput | Prisma.SortOrder;
    quantidade?: Prisma.SortOrderInput | Prisma.SortOrder;
    tbl_pedido?: Prisma.tbl_pedidoOrderByWithRelationInput;
    tbl_produto?: Prisma.tbl_produtoOrderByWithRelationInput;
};
export type rel_pedido_produtoWhereUniqueInput = Prisma.AtLeast<{
    produto_id_pedido_id?: Prisma.rel_pedido_produtoProduto_idPedido_idCompoundUniqueInput;
    AND?: Prisma.rel_pedido_produtoWhereInput | Prisma.rel_pedido_produtoWhereInput[];
    OR?: Prisma.rel_pedido_produtoWhereInput[];
    NOT?: Prisma.rel_pedido_produtoWhereInput | Prisma.rel_pedido_produtoWhereInput[];
    produto_id?: Prisma.IntFilter<"rel_pedido_produto"> | number;
    pedido_id?: Prisma.IntFilter<"rel_pedido_produto"> | number;
    valor_unitario?: Prisma.DecimalNullableFilter<"rel_pedido_produto"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    quantidade?: Prisma.IntNullableFilter<"rel_pedido_produto"> | number | null;
    tbl_pedido?: Prisma.XOR<Prisma.Tbl_pedidoScalarRelationFilter, Prisma.tbl_pedidoWhereInput>;
    tbl_produto?: Prisma.XOR<Prisma.Tbl_produtoScalarRelationFilter, Prisma.tbl_produtoWhereInput>;
}, "produto_id_pedido_id">;
export type rel_pedido_produtoOrderByWithAggregationInput = {
    produto_id?: Prisma.SortOrder;
    pedido_id?: Prisma.SortOrder;
    valor_unitario?: Prisma.SortOrderInput | Prisma.SortOrder;
    quantidade?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.rel_pedido_produtoCountOrderByAggregateInput;
    _avg?: Prisma.rel_pedido_produtoAvgOrderByAggregateInput;
    _max?: Prisma.rel_pedido_produtoMaxOrderByAggregateInput;
    _min?: Prisma.rel_pedido_produtoMinOrderByAggregateInput;
    _sum?: Prisma.rel_pedido_produtoSumOrderByAggregateInput;
};
export type rel_pedido_produtoScalarWhereWithAggregatesInput = {
    AND?: Prisma.rel_pedido_produtoScalarWhereWithAggregatesInput | Prisma.rel_pedido_produtoScalarWhereWithAggregatesInput[];
    OR?: Prisma.rel_pedido_produtoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.rel_pedido_produtoScalarWhereWithAggregatesInput | Prisma.rel_pedido_produtoScalarWhereWithAggregatesInput[];
    produto_id?: Prisma.IntWithAggregatesFilter<"rel_pedido_produto"> | number;
    pedido_id?: Prisma.IntWithAggregatesFilter<"rel_pedido_produto"> | number;
    valor_unitario?: Prisma.DecimalNullableWithAggregatesFilter<"rel_pedido_produto"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    quantidade?: Prisma.IntNullableWithAggregatesFilter<"rel_pedido_produto"> | number | null;
};
export type rel_pedido_produtoCreateInput = {
    valor_unitario?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    quantidade?: number | null;
    tbl_pedido?: Prisma.tbl_pedidoCreateNestedOneWithoutRel_pedido_produtoInput;
    tbl_produto?: Prisma.tbl_produtoCreateNestedOneWithoutRel_pedido_produtoInput;
};
export type rel_pedido_produtoUncheckedCreateInput = {
    produto_id?: number;
    pedido_id?: number;
    valor_unitario?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    quantidade?: number | null;
};
export type rel_pedido_produtoUpdateInput = {
    valor_unitario?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    quantidade?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    tbl_pedido?: Prisma.tbl_pedidoUpdateOneRequiredWithoutRel_pedido_produtoNestedInput;
    tbl_produto?: Prisma.tbl_produtoUpdateOneRequiredWithoutRel_pedido_produtoNestedInput;
};
export type rel_pedido_produtoUncheckedUpdateInput = {
    produto_id?: Prisma.IntFieldUpdateOperationsInput | number;
    pedido_id?: Prisma.IntFieldUpdateOperationsInput | number;
    valor_unitario?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    quantidade?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type rel_pedido_produtoCreateManyInput = {
    produto_id?: number;
    pedido_id?: number;
    valor_unitario?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    quantidade?: number | null;
};
export type rel_pedido_produtoUpdateManyMutationInput = {
    valor_unitario?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    quantidade?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type rel_pedido_produtoUncheckedUpdateManyInput = {
    produto_id?: Prisma.IntFieldUpdateOperationsInput | number;
    pedido_id?: Prisma.IntFieldUpdateOperationsInput | number;
    valor_unitario?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    quantidade?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type rel_pedido_produtoProduto_idPedido_idCompoundUniqueInput = {
    produto_id: number;
    pedido_id: number;
};
export type rel_pedido_produtoCountOrderByAggregateInput = {
    produto_id?: Prisma.SortOrder;
    pedido_id?: Prisma.SortOrder;
    valor_unitario?: Prisma.SortOrder;
    quantidade?: Prisma.SortOrder;
};
export type rel_pedido_produtoAvgOrderByAggregateInput = {
    produto_id?: Prisma.SortOrder;
    pedido_id?: Prisma.SortOrder;
    valor_unitario?: Prisma.SortOrder;
    quantidade?: Prisma.SortOrder;
};
export type rel_pedido_produtoMaxOrderByAggregateInput = {
    produto_id?: Prisma.SortOrder;
    pedido_id?: Prisma.SortOrder;
    valor_unitario?: Prisma.SortOrder;
    quantidade?: Prisma.SortOrder;
};
export type rel_pedido_produtoMinOrderByAggregateInput = {
    produto_id?: Prisma.SortOrder;
    pedido_id?: Prisma.SortOrder;
    valor_unitario?: Prisma.SortOrder;
    quantidade?: Prisma.SortOrder;
};
export type rel_pedido_produtoSumOrderByAggregateInput = {
    produto_id?: Prisma.SortOrder;
    pedido_id?: Prisma.SortOrder;
    valor_unitario?: Prisma.SortOrder;
    quantidade?: Prisma.SortOrder;
};
export type Rel_pedido_produtoListRelationFilter = {
    every?: Prisma.rel_pedido_produtoWhereInput;
    some?: Prisma.rel_pedido_produtoWhereInput;
    none?: Prisma.rel_pedido_produtoWhereInput;
};
export type rel_pedido_produtoOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type rel_pedido_produtoCreateNestedManyWithoutTbl_pedidoInput = {
    create?: Prisma.XOR<Prisma.rel_pedido_produtoCreateWithoutTbl_pedidoInput, Prisma.rel_pedido_produtoUncheckedCreateWithoutTbl_pedidoInput> | Prisma.rel_pedido_produtoCreateWithoutTbl_pedidoInput[] | Prisma.rel_pedido_produtoUncheckedCreateWithoutTbl_pedidoInput[];
    connectOrCreate?: Prisma.rel_pedido_produtoCreateOrConnectWithoutTbl_pedidoInput | Prisma.rel_pedido_produtoCreateOrConnectWithoutTbl_pedidoInput[];
    createMany?: Prisma.rel_pedido_produtoCreateManyTbl_pedidoInputEnvelope;
    connect?: Prisma.rel_pedido_produtoWhereUniqueInput | Prisma.rel_pedido_produtoWhereUniqueInput[];
};
export type rel_pedido_produtoUncheckedCreateNestedManyWithoutTbl_pedidoInput = {
    create?: Prisma.XOR<Prisma.rel_pedido_produtoCreateWithoutTbl_pedidoInput, Prisma.rel_pedido_produtoUncheckedCreateWithoutTbl_pedidoInput> | Prisma.rel_pedido_produtoCreateWithoutTbl_pedidoInput[] | Prisma.rel_pedido_produtoUncheckedCreateWithoutTbl_pedidoInput[];
    connectOrCreate?: Prisma.rel_pedido_produtoCreateOrConnectWithoutTbl_pedidoInput | Prisma.rel_pedido_produtoCreateOrConnectWithoutTbl_pedidoInput[];
    createMany?: Prisma.rel_pedido_produtoCreateManyTbl_pedidoInputEnvelope;
    connect?: Prisma.rel_pedido_produtoWhereUniqueInput | Prisma.rel_pedido_produtoWhereUniqueInput[];
};
export type rel_pedido_produtoUpdateManyWithoutTbl_pedidoNestedInput = {
    create?: Prisma.XOR<Prisma.rel_pedido_produtoCreateWithoutTbl_pedidoInput, Prisma.rel_pedido_produtoUncheckedCreateWithoutTbl_pedidoInput> | Prisma.rel_pedido_produtoCreateWithoutTbl_pedidoInput[] | Prisma.rel_pedido_produtoUncheckedCreateWithoutTbl_pedidoInput[];
    connectOrCreate?: Prisma.rel_pedido_produtoCreateOrConnectWithoutTbl_pedidoInput | Prisma.rel_pedido_produtoCreateOrConnectWithoutTbl_pedidoInput[];
    upsert?: Prisma.rel_pedido_produtoUpsertWithWhereUniqueWithoutTbl_pedidoInput | Prisma.rel_pedido_produtoUpsertWithWhereUniqueWithoutTbl_pedidoInput[];
    createMany?: Prisma.rel_pedido_produtoCreateManyTbl_pedidoInputEnvelope;
    set?: Prisma.rel_pedido_produtoWhereUniqueInput | Prisma.rel_pedido_produtoWhereUniqueInput[];
    disconnect?: Prisma.rel_pedido_produtoWhereUniqueInput | Prisma.rel_pedido_produtoWhereUniqueInput[];
    delete?: Prisma.rel_pedido_produtoWhereUniqueInput | Prisma.rel_pedido_produtoWhereUniqueInput[];
    connect?: Prisma.rel_pedido_produtoWhereUniqueInput | Prisma.rel_pedido_produtoWhereUniqueInput[];
    update?: Prisma.rel_pedido_produtoUpdateWithWhereUniqueWithoutTbl_pedidoInput | Prisma.rel_pedido_produtoUpdateWithWhereUniqueWithoutTbl_pedidoInput[];
    updateMany?: Prisma.rel_pedido_produtoUpdateManyWithWhereWithoutTbl_pedidoInput | Prisma.rel_pedido_produtoUpdateManyWithWhereWithoutTbl_pedidoInput[];
    deleteMany?: Prisma.rel_pedido_produtoScalarWhereInput | Prisma.rel_pedido_produtoScalarWhereInput[];
};
export type rel_pedido_produtoUncheckedUpdateManyWithoutTbl_pedidoNestedInput = {
    create?: Prisma.XOR<Prisma.rel_pedido_produtoCreateWithoutTbl_pedidoInput, Prisma.rel_pedido_produtoUncheckedCreateWithoutTbl_pedidoInput> | Prisma.rel_pedido_produtoCreateWithoutTbl_pedidoInput[] | Prisma.rel_pedido_produtoUncheckedCreateWithoutTbl_pedidoInput[];
    connectOrCreate?: Prisma.rel_pedido_produtoCreateOrConnectWithoutTbl_pedidoInput | Prisma.rel_pedido_produtoCreateOrConnectWithoutTbl_pedidoInput[];
    upsert?: Prisma.rel_pedido_produtoUpsertWithWhereUniqueWithoutTbl_pedidoInput | Prisma.rel_pedido_produtoUpsertWithWhereUniqueWithoutTbl_pedidoInput[];
    createMany?: Prisma.rel_pedido_produtoCreateManyTbl_pedidoInputEnvelope;
    set?: Prisma.rel_pedido_produtoWhereUniqueInput | Prisma.rel_pedido_produtoWhereUniqueInput[];
    disconnect?: Prisma.rel_pedido_produtoWhereUniqueInput | Prisma.rel_pedido_produtoWhereUniqueInput[];
    delete?: Prisma.rel_pedido_produtoWhereUniqueInput | Prisma.rel_pedido_produtoWhereUniqueInput[];
    connect?: Prisma.rel_pedido_produtoWhereUniqueInput | Prisma.rel_pedido_produtoWhereUniqueInput[];
    update?: Prisma.rel_pedido_produtoUpdateWithWhereUniqueWithoutTbl_pedidoInput | Prisma.rel_pedido_produtoUpdateWithWhereUniqueWithoutTbl_pedidoInput[];
    updateMany?: Prisma.rel_pedido_produtoUpdateManyWithWhereWithoutTbl_pedidoInput | Prisma.rel_pedido_produtoUpdateManyWithWhereWithoutTbl_pedidoInput[];
    deleteMany?: Prisma.rel_pedido_produtoScalarWhereInput | Prisma.rel_pedido_produtoScalarWhereInput[];
};
export type rel_pedido_produtoCreateNestedManyWithoutTbl_produtoInput = {
    create?: Prisma.XOR<Prisma.rel_pedido_produtoCreateWithoutTbl_produtoInput, Prisma.rel_pedido_produtoUncheckedCreateWithoutTbl_produtoInput> | Prisma.rel_pedido_produtoCreateWithoutTbl_produtoInput[] | Prisma.rel_pedido_produtoUncheckedCreateWithoutTbl_produtoInput[];
    connectOrCreate?: Prisma.rel_pedido_produtoCreateOrConnectWithoutTbl_produtoInput | Prisma.rel_pedido_produtoCreateOrConnectWithoutTbl_produtoInput[];
    createMany?: Prisma.rel_pedido_produtoCreateManyTbl_produtoInputEnvelope;
    connect?: Prisma.rel_pedido_produtoWhereUniqueInput | Prisma.rel_pedido_produtoWhereUniqueInput[];
};
export type rel_pedido_produtoUncheckedCreateNestedManyWithoutTbl_produtoInput = {
    create?: Prisma.XOR<Prisma.rel_pedido_produtoCreateWithoutTbl_produtoInput, Prisma.rel_pedido_produtoUncheckedCreateWithoutTbl_produtoInput> | Prisma.rel_pedido_produtoCreateWithoutTbl_produtoInput[] | Prisma.rel_pedido_produtoUncheckedCreateWithoutTbl_produtoInput[];
    connectOrCreate?: Prisma.rel_pedido_produtoCreateOrConnectWithoutTbl_produtoInput | Prisma.rel_pedido_produtoCreateOrConnectWithoutTbl_produtoInput[];
    createMany?: Prisma.rel_pedido_produtoCreateManyTbl_produtoInputEnvelope;
    connect?: Prisma.rel_pedido_produtoWhereUniqueInput | Prisma.rel_pedido_produtoWhereUniqueInput[];
};
export type rel_pedido_produtoUpdateManyWithoutTbl_produtoNestedInput = {
    create?: Prisma.XOR<Prisma.rel_pedido_produtoCreateWithoutTbl_produtoInput, Prisma.rel_pedido_produtoUncheckedCreateWithoutTbl_produtoInput> | Prisma.rel_pedido_produtoCreateWithoutTbl_produtoInput[] | Prisma.rel_pedido_produtoUncheckedCreateWithoutTbl_produtoInput[];
    connectOrCreate?: Prisma.rel_pedido_produtoCreateOrConnectWithoutTbl_produtoInput | Prisma.rel_pedido_produtoCreateOrConnectWithoutTbl_produtoInput[];
    upsert?: Prisma.rel_pedido_produtoUpsertWithWhereUniqueWithoutTbl_produtoInput | Prisma.rel_pedido_produtoUpsertWithWhereUniqueWithoutTbl_produtoInput[];
    createMany?: Prisma.rel_pedido_produtoCreateManyTbl_produtoInputEnvelope;
    set?: Prisma.rel_pedido_produtoWhereUniqueInput | Prisma.rel_pedido_produtoWhereUniqueInput[];
    disconnect?: Prisma.rel_pedido_produtoWhereUniqueInput | Prisma.rel_pedido_produtoWhereUniqueInput[];
    delete?: Prisma.rel_pedido_produtoWhereUniqueInput | Prisma.rel_pedido_produtoWhereUniqueInput[];
    connect?: Prisma.rel_pedido_produtoWhereUniqueInput | Prisma.rel_pedido_produtoWhereUniqueInput[];
    update?: Prisma.rel_pedido_produtoUpdateWithWhereUniqueWithoutTbl_produtoInput | Prisma.rel_pedido_produtoUpdateWithWhereUniqueWithoutTbl_produtoInput[];
    updateMany?: Prisma.rel_pedido_produtoUpdateManyWithWhereWithoutTbl_produtoInput | Prisma.rel_pedido_produtoUpdateManyWithWhereWithoutTbl_produtoInput[];
    deleteMany?: Prisma.rel_pedido_produtoScalarWhereInput | Prisma.rel_pedido_produtoScalarWhereInput[];
};
export type rel_pedido_produtoUncheckedUpdateManyWithoutTbl_produtoNestedInput = {
    create?: Prisma.XOR<Prisma.rel_pedido_produtoCreateWithoutTbl_produtoInput, Prisma.rel_pedido_produtoUncheckedCreateWithoutTbl_produtoInput> | Prisma.rel_pedido_produtoCreateWithoutTbl_produtoInput[] | Prisma.rel_pedido_produtoUncheckedCreateWithoutTbl_produtoInput[];
    connectOrCreate?: Prisma.rel_pedido_produtoCreateOrConnectWithoutTbl_produtoInput | Prisma.rel_pedido_produtoCreateOrConnectWithoutTbl_produtoInput[];
    upsert?: Prisma.rel_pedido_produtoUpsertWithWhereUniqueWithoutTbl_produtoInput | Prisma.rel_pedido_produtoUpsertWithWhereUniqueWithoutTbl_produtoInput[];
    createMany?: Prisma.rel_pedido_produtoCreateManyTbl_produtoInputEnvelope;
    set?: Prisma.rel_pedido_produtoWhereUniqueInput | Prisma.rel_pedido_produtoWhereUniqueInput[];
    disconnect?: Prisma.rel_pedido_produtoWhereUniqueInput | Prisma.rel_pedido_produtoWhereUniqueInput[];
    delete?: Prisma.rel_pedido_produtoWhereUniqueInput | Prisma.rel_pedido_produtoWhereUniqueInput[];
    connect?: Prisma.rel_pedido_produtoWhereUniqueInput | Prisma.rel_pedido_produtoWhereUniqueInput[];
    update?: Prisma.rel_pedido_produtoUpdateWithWhereUniqueWithoutTbl_produtoInput | Prisma.rel_pedido_produtoUpdateWithWhereUniqueWithoutTbl_produtoInput[];
    updateMany?: Prisma.rel_pedido_produtoUpdateManyWithWhereWithoutTbl_produtoInput | Prisma.rel_pedido_produtoUpdateManyWithWhereWithoutTbl_produtoInput[];
    deleteMany?: Prisma.rel_pedido_produtoScalarWhereInput | Prisma.rel_pedido_produtoScalarWhereInput[];
};
export type rel_pedido_produtoCreateWithoutTbl_pedidoInput = {
    valor_unitario?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    quantidade?: number | null;
    tbl_produto?: Prisma.tbl_produtoCreateNestedOneWithoutRel_pedido_produtoInput;
};
export type rel_pedido_produtoUncheckedCreateWithoutTbl_pedidoInput = {
    produto_id?: number;
    valor_unitario?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    quantidade?: number | null;
};
export type rel_pedido_produtoCreateOrConnectWithoutTbl_pedidoInput = {
    where: Prisma.rel_pedido_produtoWhereUniqueInput;
    create: Prisma.XOR<Prisma.rel_pedido_produtoCreateWithoutTbl_pedidoInput, Prisma.rel_pedido_produtoUncheckedCreateWithoutTbl_pedidoInput>;
};
export type rel_pedido_produtoCreateManyTbl_pedidoInputEnvelope = {
    data: Prisma.rel_pedido_produtoCreateManyTbl_pedidoInput | Prisma.rel_pedido_produtoCreateManyTbl_pedidoInput[];
    skipDuplicates?: boolean;
};
export type rel_pedido_produtoUpsertWithWhereUniqueWithoutTbl_pedidoInput = {
    where: Prisma.rel_pedido_produtoWhereUniqueInput;
    update: Prisma.XOR<Prisma.rel_pedido_produtoUpdateWithoutTbl_pedidoInput, Prisma.rel_pedido_produtoUncheckedUpdateWithoutTbl_pedidoInput>;
    create: Prisma.XOR<Prisma.rel_pedido_produtoCreateWithoutTbl_pedidoInput, Prisma.rel_pedido_produtoUncheckedCreateWithoutTbl_pedidoInput>;
};
export type rel_pedido_produtoUpdateWithWhereUniqueWithoutTbl_pedidoInput = {
    where: Prisma.rel_pedido_produtoWhereUniqueInput;
    data: Prisma.XOR<Prisma.rel_pedido_produtoUpdateWithoutTbl_pedidoInput, Prisma.rel_pedido_produtoUncheckedUpdateWithoutTbl_pedidoInput>;
};
export type rel_pedido_produtoUpdateManyWithWhereWithoutTbl_pedidoInput = {
    where: Prisma.rel_pedido_produtoScalarWhereInput;
    data: Prisma.XOR<Prisma.rel_pedido_produtoUpdateManyMutationInput, Prisma.rel_pedido_produtoUncheckedUpdateManyWithoutTbl_pedidoInput>;
};
export type rel_pedido_produtoScalarWhereInput = {
    AND?: Prisma.rel_pedido_produtoScalarWhereInput | Prisma.rel_pedido_produtoScalarWhereInput[];
    OR?: Prisma.rel_pedido_produtoScalarWhereInput[];
    NOT?: Prisma.rel_pedido_produtoScalarWhereInput | Prisma.rel_pedido_produtoScalarWhereInput[];
    produto_id?: Prisma.IntFilter<"rel_pedido_produto"> | number;
    pedido_id?: Prisma.IntFilter<"rel_pedido_produto"> | number;
    valor_unitario?: Prisma.DecimalNullableFilter<"rel_pedido_produto"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    quantidade?: Prisma.IntNullableFilter<"rel_pedido_produto"> | number | null;
};
export type rel_pedido_produtoCreateWithoutTbl_produtoInput = {
    valor_unitario?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    quantidade?: number | null;
    tbl_pedido?: Prisma.tbl_pedidoCreateNestedOneWithoutRel_pedido_produtoInput;
};
export type rel_pedido_produtoUncheckedCreateWithoutTbl_produtoInput = {
    pedido_id?: number;
    valor_unitario?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    quantidade?: number | null;
};
export type rel_pedido_produtoCreateOrConnectWithoutTbl_produtoInput = {
    where: Prisma.rel_pedido_produtoWhereUniqueInput;
    create: Prisma.XOR<Prisma.rel_pedido_produtoCreateWithoutTbl_produtoInput, Prisma.rel_pedido_produtoUncheckedCreateWithoutTbl_produtoInput>;
};
export type rel_pedido_produtoCreateManyTbl_produtoInputEnvelope = {
    data: Prisma.rel_pedido_produtoCreateManyTbl_produtoInput | Prisma.rel_pedido_produtoCreateManyTbl_produtoInput[];
    skipDuplicates?: boolean;
};
export type rel_pedido_produtoUpsertWithWhereUniqueWithoutTbl_produtoInput = {
    where: Prisma.rel_pedido_produtoWhereUniqueInput;
    update: Prisma.XOR<Prisma.rel_pedido_produtoUpdateWithoutTbl_produtoInput, Prisma.rel_pedido_produtoUncheckedUpdateWithoutTbl_produtoInput>;
    create: Prisma.XOR<Prisma.rel_pedido_produtoCreateWithoutTbl_produtoInput, Prisma.rel_pedido_produtoUncheckedCreateWithoutTbl_produtoInput>;
};
export type rel_pedido_produtoUpdateWithWhereUniqueWithoutTbl_produtoInput = {
    where: Prisma.rel_pedido_produtoWhereUniqueInput;
    data: Prisma.XOR<Prisma.rel_pedido_produtoUpdateWithoutTbl_produtoInput, Prisma.rel_pedido_produtoUncheckedUpdateWithoutTbl_produtoInput>;
};
export type rel_pedido_produtoUpdateManyWithWhereWithoutTbl_produtoInput = {
    where: Prisma.rel_pedido_produtoScalarWhereInput;
    data: Prisma.XOR<Prisma.rel_pedido_produtoUpdateManyMutationInput, Prisma.rel_pedido_produtoUncheckedUpdateManyWithoutTbl_produtoInput>;
};
export type rel_pedido_produtoCreateManyTbl_pedidoInput = {
    produto_id?: number;
    valor_unitario?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    quantidade?: number | null;
};
export type rel_pedido_produtoUpdateWithoutTbl_pedidoInput = {
    valor_unitario?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    quantidade?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    tbl_produto?: Prisma.tbl_produtoUpdateOneRequiredWithoutRel_pedido_produtoNestedInput;
};
export type rel_pedido_produtoUncheckedUpdateWithoutTbl_pedidoInput = {
    produto_id?: Prisma.IntFieldUpdateOperationsInput | number;
    valor_unitario?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    quantidade?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type rel_pedido_produtoUncheckedUpdateManyWithoutTbl_pedidoInput = {
    produto_id?: Prisma.IntFieldUpdateOperationsInput | number;
    valor_unitario?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    quantidade?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type rel_pedido_produtoCreateManyTbl_produtoInput = {
    pedido_id?: number;
    valor_unitario?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    quantidade?: number | null;
};
export type rel_pedido_produtoUpdateWithoutTbl_produtoInput = {
    valor_unitario?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    quantidade?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    tbl_pedido?: Prisma.tbl_pedidoUpdateOneRequiredWithoutRel_pedido_produtoNestedInput;
};
export type rel_pedido_produtoUncheckedUpdateWithoutTbl_produtoInput = {
    pedido_id?: Prisma.IntFieldUpdateOperationsInput | number;
    valor_unitario?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    quantidade?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type rel_pedido_produtoUncheckedUpdateManyWithoutTbl_produtoInput = {
    pedido_id?: Prisma.IntFieldUpdateOperationsInput | number;
    valor_unitario?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    quantidade?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type rel_pedido_produtoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    produto_id?: boolean;
    pedido_id?: boolean;
    valor_unitario?: boolean;
    quantidade?: boolean;
    tbl_pedido?: boolean | Prisma.tbl_pedidoDefaultArgs<ExtArgs>;
    tbl_produto?: boolean | Prisma.tbl_produtoDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["rel_pedido_produto"]>;
export type rel_pedido_produtoSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    produto_id?: boolean;
    pedido_id?: boolean;
    valor_unitario?: boolean;
    quantidade?: boolean;
    tbl_pedido?: boolean | Prisma.tbl_pedidoDefaultArgs<ExtArgs>;
    tbl_produto?: boolean | Prisma.tbl_produtoDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["rel_pedido_produto"]>;
export type rel_pedido_produtoSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    produto_id?: boolean;
    pedido_id?: boolean;
    valor_unitario?: boolean;
    quantidade?: boolean;
    tbl_pedido?: boolean | Prisma.tbl_pedidoDefaultArgs<ExtArgs>;
    tbl_produto?: boolean | Prisma.tbl_produtoDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["rel_pedido_produto"]>;
export type rel_pedido_produtoSelectScalar = {
    produto_id?: boolean;
    pedido_id?: boolean;
    valor_unitario?: boolean;
    quantidade?: boolean;
};
export type rel_pedido_produtoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"produto_id" | "pedido_id" | "valor_unitario" | "quantidade", ExtArgs["result"]["rel_pedido_produto"]>;
export type rel_pedido_produtoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tbl_pedido?: boolean | Prisma.tbl_pedidoDefaultArgs<ExtArgs>;
    tbl_produto?: boolean | Prisma.tbl_produtoDefaultArgs<ExtArgs>;
};
export type rel_pedido_produtoIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tbl_pedido?: boolean | Prisma.tbl_pedidoDefaultArgs<ExtArgs>;
    tbl_produto?: boolean | Prisma.tbl_produtoDefaultArgs<ExtArgs>;
};
export type rel_pedido_produtoIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tbl_pedido?: boolean | Prisma.tbl_pedidoDefaultArgs<ExtArgs>;
    tbl_produto?: boolean | Prisma.tbl_produtoDefaultArgs<ExtArgs>;
};
export type $rel_pedido_produtoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "rel_pedido_produto";
    objects: {
        tbl_pedido: Prisma.$tbl_pedidoPayload<ExtArgs>;
        tbl_produto: Prisma.$tbl_produtoPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        produto_id: number;
        pedido_id: number;
        valor_unitario: runtime.Decimal | null;
        quantidade: number | null;
    }, ExtArgs["result"]["rel_pedido_produto"]>;
    composites: {};
};
export type rel_pedido_produtoGetPayload<S extends boolean | null | undefined | rel_pedido_produtoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$rel_pedido_produtoPayload, S>;
export type rel_pedido_produtoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<rel_pedido_produtoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Rel_pedido_produtoCountAggregateInputType | true;
};
export interface rel_pedido_produtoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['rel_pedido_produto'];
        meta: {
            name: 'rel_pedido_produto';
        };
    };
    /**
     * Find zero or one Rel_pedido_produto that matches the filter.
     * @param {rel_pedido_produtoFindUniqueArgs} args - Arguments to find a Rel_pedido_produto
     * @example
     * // Get one Rel_pedido_produto
     * const rel_pedido_produto = await prisma.rel_pedido_produto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends rel_pedido_produtoFindUniqueArgs>(args: Prisma.SelectSubset<T, rel_pedido_produtoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__rel_pedido_produtoClient<runtime.Types.Result.GetResult<Prisma.$rel_pedido_produtoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Rel_pedido_produto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {rel_pedido_produtoFindUniqueOrThrowArgs} args - Arguments to find a Rel_pedido_produto
     * @example
     * // Get one Rel_pedido_produto
     * const rel_pedido_produto = await prisma.rel_pedido_produto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends rel_pedido_produtoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, rel_pedido_produtoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__rel_pedido_produtoClient<runtime.Types.Result.GetResult<Prisma.$rel_pedido_produtoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Rel_pedido_produto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rel_pedido_produtoFindFirstArgs} args - Arguments to find a Rel_pedido_produto
     * @example
     * // Get one Rel_pedido_produto
     * const rel_pedido_produto = await prisma.rel_pedido_produto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends rel_pedido_produtoFindFirstArgs>(args?: Prisma.SelectSubset<T, rel_pedido_produtoFindFirstArgs<ExtArgs>>): Prisma.Prisma__rel_pedido_produtoClient<runtime.Types.Result.GetResult<Prisma.$rel_pedido_produtoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Rel_pedido_produto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rel_pedido_produtoFindFirstOrThrowArgs} args - Arguments to find a Rel_pedido_produto
     * @example
     * // Get one Rel_pedido_produto
     * const rel_pedido_produto = await prisma.rel_pedido_produto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends rel_pedido_produtoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, rel_pedido_produtoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__rel_pedido_produtoClient<runtime.Types.Result.GetResult<Prisma.$rel_pedido_produtoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Rel_pedido_produtos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rel_pedido_produtoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rel_pedido_produtos
     * const rel_pedido_produtos = await prisma.rel_pedido_produto.findMany()
     *
     * // Get first 10 Rel_pedido_produtos
     * const rel_pedido_produtos = await prisma.rel_pedido_produto.findMany({ take: 10 })
     *
     * // Only select the `produto_id`
     * const rel_pedido_produtoWithProduto_idOnly = await prisma.rel_pedido_produto.findMany({ select: { produto_id: true } })
     *
     */
    findMany<T extends rel_pedido_produtoFindManyArgs>(args?: Prisma.SelectSubset<T, rel_pedido_produtoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$rel_pedido_produtoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Rel_pedido_produto.
     * @param {rel_pedido_produtoCreateArgs} args - Arguments to create a Rel_pedido_produto.
     * @example
     * // Create one Rel_pedido_produto
     * const Rel_pedido_produto = await prisma.rel_pedido_produto.create({
     *   data: {
     *     // ... data to create a Rel_pedido_produto
     *   }
     * })
     *
     */
    create<T extends rel_pedido_produtoCreateArgs>(args: Prisma.SelectSubset<T, rel_pedido_produtoCreateArgs<ExtArgs>>): Prisma.Prisma__rel_pedido_produtoClient<runtime.Types.Result.GetResult<Prisma.$rel_pedido_produtoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Rel_pedido_produtos.
     * @param {rel_pedido_produtoCreateManyArgs} args - Arguments to create many Rel_pedido_produtos.
     * @example
     * // Create many Rel_pedido_produtos
     * const rel_pedido_produto = await prisma.rel_pedido_produto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends rel_pedido_produtoCreateManyArgs>(args?: Prisma.SelectSubset<T, rel_pedido_produtoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Rel_pedido_produtos and returns the data saved in the database.
     * @param {rel_pedido_produtoCreateManyAndReturnArgs} args - Arguments to create many Rel_pedido_produtos.
     * @example
     * // Create many Rel_pedido_produtos
     * const rel_pedido_produto = await prisma.rel_pedido_produto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Rel_pedido_produtos and only return the `produto_id`
     * const rel_pedido_produtoWithProduto_idOnly = await prisma.rel_pedido_produto.createManyAndReturn({
     *   select: { produto_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends rel_pedido_produtoCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, rel_pedido_produtoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$rel_pedido_produtoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Rel_pedido_produto.
     * @param {rel_pedido_produtoDeleteArgs} args - Arguments to delete one Rel_pedido_produto.
     * @example
     * // Delete one Rel_pedido_produto
     * const Rel_pedido_produto = await prisma.rel_pedido_produto.delete({
     *   where: {
     *     // ... filter to delete one Rel_pedido_produto
     *   }
     * })
     *
     */
    delete<T extends rel_pedido_produtoDeleteArgs>(args: Prisma.SelectSubset<T, rel_pedido_produtoDeleteArgs<ExtArgs>>): Prisma.Prisma__rel_pedido_produtoClient<runtime.Types.Result.GetResult<Prisma.$rel_pedido_produtoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Rel_pedido_produto.
     * @param {rel_pedido_produtoUpdateArgs} args - Arguments to update one Rel_pedido_produto.
     * @example
     * // Update one Rel_pedido_produto
     * const rel_pedido_produto = await prisma.rel_pedido_produto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends rel_pedido_produtoUpdateArgs>(args: Prisma.SelectSubset<T, rel_pedido_produtoUpdateArgs<ExtArgs>>): Prisma.Prisma__rel_pedido_produtoClient<runtime.Types.Result.GetResult<Prisma.$rel_pedido_produtoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Rel_pedido_produtos.
     * @param {rel_pedido_produtoDeleteManyArgs} args - Arguments to filter Rel_pedido_produtos to delete.
     * @example
     * // Delete a few Rel_pedido_produtos
     * const { count } = await prisma.rel_pedido_produto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends rel_pedido_produtoDeleteManyArgs>(args?: Prisma.SelectSubset<T, rel_pedido_produtoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Rel_pedido_produtos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rel_pedido_produtoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rel_pedido_produtos
     * const rel_pedido_produto = await prisma.rel_pedido_produto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends rel_pedido_produtoUpdateManyArgs>(args: Prisma.SelectSubset<T, rel_pedido_produtoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Rel_pedido_produtos and returns the data updated in the database.
     * @param {rel_pedido_produtoUpdateManyAndReturnArgs} args - Arguments to update many Rel_pedido_produtos.
     * @example
     * // Update many Rel_pedido_produtos
     * const rel_pedido_produto = await prisma.rel_pedido_produto.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Rel_pedido_produtos and only return the `produto_id`
     * const rel_pedido_produtoWithProduto_idOnly = await prisma.rel_pedido_produto.updateManyAndReturn({
     *   select: { produto_id: true },
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
    updateManyAndReturn<T extends rel_pedido_produtoUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, rel_pedido_produtoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$rel_pedido_produtoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Rel_pedido_produto.
     * @param {rel_pedido_produtoUpsertArgs} args - Arguments to update or create a Rel_pedido_produto.
     * @example
     * // Update or create a Rel_pedido_produto
     * const rel_pedido_produto = await prisma.rel_pedido_produto.upsert({
     *   create: {
     *     // ... data to create a Rel_pedido_produto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rel_pedido_produto we want to update
     *   }
     * })
     */
    upsert<T extends rel_pedido_produtoUpsertArgs>(args: Prisma.SelectSubset<T, rel_pedido_produtoUpsertArgs<ExtArgs>>): Prisma.Prisma__rel_pedido_produtoClient<runtime.Types.Result.GetResult<Prisma.$rel_pedido_produtoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Rel_pedido_produtos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rel_pedido_produtoCountArgs} args - Arguments to filter Rel_pedido_produtos to count.
     * @example
     * // Count the number of Rel_pedido_produtos
     * const count = await prisma.rel_pedido_produto.count({
     *   where: {
     *     // ... the filter for the Rel_pedido_produtos we want to count
     *   }
     * })
    **/
    count<T extends rel_pedido_produtoCountArgs>(args?: Prisma.Subset<T, rel_pedido_produtoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Rel_pedido_produtoCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Rel_pedido_produto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Rel_pedido_produtoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Rel_pedido_produtoAggregateArgs>(args: Prisma.Subset<T, Rel_pedido_produtoAggregateArgs>): Prisma.PrismaPromise<GetRel_pedido_produtoAggregateType<T>>;
    /**
     * Group by Rel_pedido_produto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rel_pedido_produtoGroupByArgs} args - Group by arguments.
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
    groupBy<T extends rel_pedido_produtoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: rel_pedido_produtoGroupByArgs['orderBy'];
    } : {
        orderBy?: rel_pedido_produtoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, rel_pedido_produtoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRel_pedido_produtoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the rel_pedido_produto model
     */
    readonly fields: rel_pedido_produtoFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for rel_pedido_produto.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__rel_pedido_produtoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    tbl_pedido<T extends Prisma.tbl_pedidoDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.tbl_pedidoDefaultArgs<ExtArgs>>): Prisma.Prisma__tbl_pedidoClient<runtime.Types.Result.GetResult<Prisma.$tbl_pedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    tbl_produto<T extends Prisma.tbl_produtoDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.tbl_produtoDefaultArgs<ExtArgs>>): Prisma.Prisma__tbl_produtoClient<runtime.Types.Result.GetResult<Prisma.$tbl_produtoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the rel_pedido_produto model
 */
export interface rel_pedido_produtoFieldRefs {
    readonly produto_id: Prisma.FieldRef<"rel_pedido_produto", 'Int'>;
    readonly pedido_id: Prisma.FieldRef<"rel_pedido_produto", 'Int'>;
    readonly valor_unitario: Prisma.FieldRef<"rel_pedido_produto", 'Decimal'>;
    readonly quantidade: Prisma.FieldRef<"rel_pedido_produto", 'Int'>;
}
/**
 * rel_pedido_produto findUnique
 */
export type rel_pedido_produtoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rel_pedido_produto
     */
    select?: Prisma.rel_pedido_produtoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the rel_pedido_produto
     */
    omit?: Prisma.rel_pedido_produtoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.rel_pedido_produtoInclude<ExtArgs> | null;
    /**
     * Filter, which rel_pedido_produto to fetch.
     */
    where: Prisma.rel_pedido_produtoWhereUniqueInput;
};
/**
 * rel_pedido_produto findUniqueOrThrow
 */
export type rel_pedido_produtoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rel_pedido_produto
     */
    select?: Prisma.rel_pedido_produtoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the rel_pedido_produto
     */
    omit?: Prisma.rel_pedido_produtoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.rel_pedido_produtoInclude<ExtArgs> | null;
    /**
     * Filter, which rel_pedido_produto to fetch.
     */
    where: Prisma.rel_pedido_produtoWhereUniqueInput;
};
/**
 * rel_pedido_produto findFirst
 */
export type rel_pedido_produtoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rel_pedido_produto
     */
    select?: Prisma.rel_pedido_produtoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the rel_pedido_produto
     */
    omit?: Prisma.rel_pedido_produtoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.rel_pedido_produtoInclude<ExtArgs> | null;
    /**
     * Filter, which rel_pedido_produto to fetch.
     */
    where?: Prisma.rel_pedido_produtoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of rel_pedido_produtos to fetch.
     */
    orderBy?: Prisma.rel_pedido_produtoOrderByWithRelationInput | Prisma.rel_pedido_produtoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for rel_pedido_produtos.
     */
    cursor?: Prisma.rel_pedido_produtoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` rel_pedido_produtos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` rel_pedido_produtos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of rel_pedido_produtos.
     */
    distinct?: Prisma.Rel_pedido_produtoScalarFieldEnum | Prisma.Rel_pedido_produtoScalarFieldEnum[];
};
/**
 * rel_pedido_produto findFirstOrThrow
 */
export type rel_pedido_produtoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rel_pedido_produto
     */
    select?: Prisma.rel_pedido_produtoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the rel_pedido_produto
     */
    omit?: Prisma.rel_pedido_produtoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.rel_pedido_produtoInclude<ExtArgs> | null;
    /**
     * Filter, which rel_pedido_produto to fetch.
     */
    where?: Prisma.rel_pedido_produtoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of rel_pedido_produtos to fetch.
     */
    orderBy?: Prisma.rel_pedido_produtoOrderByWithRelationInput | Prisma.rel_pedido_produtoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for rel_pedido_produtos.
     */
    cursor?: Prisma.rel_pedido_produtoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` rel_pedido_produtos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` rel_pedido_produtos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of rel_pedido_produtos.
     */
    distinct?: Prisma.Rel_pedido_produtoScalarFieldEnum | Prisma.Rel_pedido_produtoScalarFieldEnum[];
};
/**
 * rel_pedido_produto findMany
 */
export type rel_pedido_produtoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rel_pedido_produto
     */
    select?: Prisma.rel_pedido_produtoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the rel_pedido_produto
     */
    omit?: Prisma.rel_pedido_produtoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.rel_pedido_produtoInclude<ExtArgs> | null;
    /**
     * Filter, which rel_pedido_produtos to fetch.
     */
    where?: Prisma.rel_pedido_produtoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of rel_pedido_produtos to fetch.
     */
    orderBy?: Prisma.rel_pedido_produtoOrderByWithRelationInput | Prisma.rel_pedido_produtoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing rel_pedido_produtos.
     */
    cursor?: Prisma.rel_pedido_produtoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` rel_pedido_produtos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` rel_pedido_produtos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of rel_pedido_produtos.
     */
    distinct?: Prisma.Rel_pedido_produtoScalarFieldEnum | Prisma.Rel_pedido_produtoScalarFieldEnum[];
};
/**
 * rel_pedido_produto create
 */
export type rel_pedido_produtoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rel_pedido_produto
     */
    select?: Prisma.rel_pedido_produtoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the rel_pedido_produto
     */
    omit?: Prisma.rel_pedido_produtoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.rel_pedido_produtoInclude<ExtArgs> | null;
    /**
     * The data needed to create a rel_pedido_produto.
     */
    data: Prisma.XOR<Prisma.rel_pedido_produtoCreateInput, Prisma.rel_pedido_produtoUncheckedCreateInput>;
};
/**
 * rel_pedido_produto createMany
 */
export type rel_pedido_produtoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many rel_pedido_produtos.
     */
    data: Prisma.rel_pedido_produtoCreateManyInput | Prisma.rel_pedido_produtoCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * rel_pedido_produto createManyAndReturn
 */
export type rel_pedido_produtoCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rel_pedido_produto
     */
    select?: Prisma.rel_pedido_produtoSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the rel_pedido_produto
     */
    omit?: Prisma.rel_pedido_produtoOmit<ExtArgs> | null;
    /**
     * The data used to create many rel_pedido_produtos.
     */
    data: Prisma.rel_pedido_produtoCreateManyInput | Prisma.rel_pedido_produtoCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.rel_pedido_produtoIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * rel_pedido_produto update
 */
export type rel_pedido_produtoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rel_pedido_produto
     */
    select?: Prisma.rel_pedido_produtoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the rel_pedido_produto
     */
    omit?: Prisma.rel_pedido_produtoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.rel_pedido_produtoInclude<ExtArgs> | null;
    /**
     * The data needed to update a rel_pedido_produto.
     */
    data: Prisma.XOR<Prisma.rel_pedido_produtoUpdateInput, Prisma.rel_pedido_produtoUncheckedUpdateInput>;
    /**
     * Choose, which rel_pedido_produto to update.
     */
    where: Prisma.rel_pedido_produtoWhereUniqueInput;
};
/**
 * rel_pedido_produto updateMany
 */
export type rel_pedido_produtoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update rel_pedido_produtos.
     */
    data: Prisma.XOR<Prisma.rel_pedido_produtoUpdateManyMutationInput, Prisma.rel_pedido_produtoUncheckedUpdateManyInput>;
    /**
     * Filter which rel_pedido_produtos to update
     */
    where?: Prisma.rel_pedido_produtoWhereInput;
    /**
     * Limit how many rel_pedido_produtos to update.
     */
    limit?: number;
};
/**
 * rel_pedido_produto updateManyAndReturn
 */
export type rel_pedido_produtoUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rel_pedido_produto
     */
    select?: Prisma.rel_pedido_produtoSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the rel_pedido_produto
     */
    omit?: Prisma.rel_pedido_produtoOmit<ExtArgs> | null;
    /**
     * The data used to update rel_pedido_produtos.
     */
    data: Prisma.XOR<Prisma.rel_pedido_produtoUpdateManyMutationInput, Prisma.rel_pedido_produtoUncheckedUpdateManyInput>;
    /**
     * Filter which rel_pedido_produtos to update
     */
    where?: Prisma.rel_pedido_produtoWhereInput;
    /**
     * Limit how many rel_pedido_produtos to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.rel_pedido_produtoIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * rel_pedido_produto upsert
 */
export type rel_pedido_produtoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rel_pedido_produto
     */
    select?: Prisma.rel_pedido_produtoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the rel_pedido_produto
     */
    omit?: Prisma.rel_pedido_produtoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.rel_pedido_produtoInclude<ExtArgs> | null;
    /**
     * The filter to search for the rel_pedido_produto to update in case it exists.
     */
    where: Prisma.rel_pedido_produtoWhereUniqueInput;
    /**
     * In case the rel_pedido_produto found by the `where` argument doesn't exist, create a new rel_pedido_produto with this data.
     */
    create: Prisma.XOR<Prisma.rel_pedido_produtoCreateInput, Prisma.rel_pedido_produtoUncheckedCreateInput>;
    /**
     * In case the rel_pedido_produto was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.rel_pedido_produtoUpdateInput, Prisma.rel_pedido_produtoUncheckedUpdateInput>;
};
/**
 * rel_pedido_produto delete
 */
export type rel_pedido_produtoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rel_pedido_produto
     */
    select?: Prisma.rel_pedido_produtoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the rel_pedido_produto
     */
    omit?: Prisma.rel_pedido_produtoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.rel_pedido_produtoInclude<ExtArgs> | null;
    /**
     * Filter which rel_pedido_produto to delete.
     */
    where: Prisma.rel_pedido_produtoWhereUniqueInput;
};
/**
 * rel_pedido_produto deleteMany
 */
export type rel_pedido_produtoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which rel_pedido_produtos to delete
     */
    where?: Prisma.rel_pedido_produtoWhereInput;
    /**
     * Limit how many rel_pedido_produtos to delete.
     */
    limit?: number;
};
/**
 * rel_pedido_produto without action
 */
export type rel_pedido_produtoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rel_pedido_produto
     */
    select?: Prisma.rel_pedido_produtoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the rel_pedido_produto
     */
    omit?: Prisma.rel_pedido_produtoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.rel_pedido_produtoInclude<ExtArgs> | null;
};
//# sourceMappingURL=rel_pedido_produto.d.ts.map