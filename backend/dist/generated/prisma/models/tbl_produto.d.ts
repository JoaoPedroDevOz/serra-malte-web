import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.ts";
/**
 * Model tbl_produto
 *
 */
export type tbl_produtoModel = runtime.Types.Result.DefaultSelection<Prisma.$tbl_produtoPayload>;
export type AggregateTbl_produto = {
    _count: Tbl_produtoCountAggregateOutputType | null;
    _avg: Tbl_produtoAvgAggregateOutputType | null;
    _sum: Tbl_produtoSumAggregateOutputType | null;
    _min: Tbl_produtoMinAggregateOutputType | null;
    _max: Tbl_produtoMaxAggregateOutputType | null;
};
export type Tbl_produtoAvgAggregateOutputType = {
    produto_id: number | null;
    tipo_produto_id: number | null;
    valor_unitario: runtime.Decimal | null;
};
export type Tbl_produtoSumAggregateOutputType = {
    produto_id: number | null;
    tipo_produto_id: number | null;
    valor_unitario: runtime.Decimal | null;
};
export type Tbl_produtoMinAggregateOutputType = {
    produto_id: number | null;
    tipo_produto_id: number | null;
    nome: string | null;
    valor_unitario: runtime.Decimal | null;
    ibu: string | null;
    abv: string | null;
};
export type Tbl_produtoMaxAggregateOutputType = {
    produto_id: number | null;
    tipo_produto_id: number | null;
    nome: string | null;
    valor_unitario: runtime.Decimal | null;
    ibu: string | null;
    abv: string | null;
};
export type Tbl_produtoCountAggregateOutputType = {
    produto_id: number;
    tipo_produto_id: number;
    nome: number;
    valor_unitario: number;
    ibu: number;
    abv: number;
    _all: number;
};
export type Tbl_produtoAvgAggregateInputType = {
    produto_id?: true;
    tipo_produto_id?: true;
    valor_unitario?: true;
};
export type Tbl_produtoSumAggregateInputType = {
    produto_id?: true;
    tipo_produto_id?: true;
    valor_unitario?: true;
};
export type Tbl_produtoMinAggregateInputType = {
    produto_id?: true;
    tipo_produto_id?: true;
    nome?: true;
    valor_unitario?: true;
    ibu?: true;
    abv?: true;
};
export type Tbl_produtoMaxAggregateInputType = {
    produto_id?: true;
    tipo_produto_id?: true;
    nome?: true;
    valor_unitario?: true;
    ibu?: true;
    abv?: true;
};
export type Tbl_produtoCountAggregateInputType = {
    produto_id?: true;
    tipo_produto_id?: true;
    nome?: true;
    valor_unitario?: true;
    ibu?: true;
    abv?: true;
    _all?: true;
};
export type Tbl_produtoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_produto to aggregate.
     */
    where?: Prisma.tbl_produtoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tbl_produtos to fetch.
     */
    orderBy?: Prisma.tbl_produtoOrderByWithRelationInput | Prisma.tbl_produtoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.tbl_produtoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tbl_produtos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tbl_produtos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned tbl_produtos
    **/
    _count?: true | Tbl_produtoCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: Tbl_produtoAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: Tbl_produtoSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: Tbl_produtoMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: Tbl_produtoMaxAggregateInputType;
};
export type GetTbl_produtoAggregateType<T extends Tbl_produtoAggregateArgs> = {
    [P in keyof T & keyof AggregateTbl_produto]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTbl_produto[P]> : Prisma.GetScalarType<T[P], AggregateTbl_produto[P]>;
};
export type tbl_produtoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.tbl_produtoWhereInput;
    orderBy?: Prisma.tbl_produtoOrderByWithAggregationInput | Prisma.tbl_produtoOrderByWithAggregationInput[];
    by: Prisma.Tbl_produtoScalarFieldEnum[] | Prisma.Tbl_produtoScalarFieldEnum;
    having?: Prisma.tbl_produtoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Tbl_produtoCountAggregateInputType | true;
    _avg?: Tbl_produtoAvgAggregateInputType;
    _sum?: Tbl_produtoSumAggregateInputType;
    _min?: Tbl_produtoMinAggregateInputType;
    _max?: Tbl_produtoMaxAggregateInputType;
};
export type Tbl_produtoGroupByOutputType = {
    produto_id: number;
    tipo_produto_id: number | null;
    nome: string | null;
    valor_unitario: runtime.Decimal | null;
    ibu: string | null;
    abv: string | null;
    _count: Tbl_produtoCountAggregateOutputType | null;
    _avg: Tbl_produtoAvgAggregateOutputType | null;
    _sum: Tbl_produtoSumAggregateOutputType | null;
    _min: Tbl_produtoMinAggregateOutputType | null;
    _max: Tbl_produtoMaxAggregateOutputType | null;
};
export type GetTbl_produtoGroupByPayload<T extends tbl_produtoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Tbl_produtoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Tbl_produtoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Tbl_produtoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Tbl_produtoGroupByOutputType[P]>;
}>>;
export type tbl_produtoWhereInput = {
    AND?: Prisma.tbl_produtoWhereInput | Prisma.tbl_produtoWhereInput[];
    OR?: Prisma.tbl_produtoWhereInput[];
    NOT?: Prisma.tbl_produtoWhereInput | Prisma.tbl_produtoWhereInput[];
    produto_id?: Prisma.IntFilter<"tbl_produto"> | number;
    tipo_produto_id?: Prisma.IntNullableFilter<"tbl_produto"> | number | null;
    nome?: Prisma.StringNullableFilter<"tbl_produto"> | string | null;
    valor_unitario?: Prisma.DecimalNullableFilter<"tbl_produto"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    ibu?: Prisma.StringNullableFilter<"tbl_produto"> | string | null;
    abv?: Prisma.StringNullableFilter<"tbl_produto"> | string | null;
    rel_fornecedor_produto?: Prisma.Rel_fornecedor_produtoListRelationFilter;
    rel_pedido_produto?: Prisma.Rel_pedido_produtoListRelationFilter;
    rel_produto_ingrediente?: Prisma.Rel_produto_ingredienteListRelationFilter;
    tbl_tipo_produto?: Prisma.XOR<Prisma.Tbl_tipo_produtoNullableScalarRelationFilter, Prisma.tbl_tipo_produtoWhereInput> | null;
};
export type tbl_produtoOrderByWithRelationInput = {
    produto_id?: Prisma.SortOrder;
    tipo_produto_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    nome?: Prisma.SortOrderInput | Prisma.SortOrder;
    valor_unitario?: Prisma.SortOrderInput | Prisma.SortOrder;
    ibu?: Prisma.SortOrderInput | Prisma.SortOrder;
    abv?: Prisma.SortOrderInput | Prisma.SortOrder;
    rel_fornecedor_produto?: Prisma.rel_fornecedor_produtoOrderByRelationAggregateInput;
    rel_pedido_produto?: Prisma.rel_pedido_produtoOrderByRelationAggregateInput;
    rel_produto_ingrediente?: Prisma.rel_produto_ingredienteOrderByRelationAggregateInput;
    tbl_tipo_produto?: Prisma.tbl_tipo_produtoOrderByWithRelationInput;
};
export type tbl_produtoWhereUniqueInput = Prisma.AtLeast<{
    produto_id?: number;
    AND?: Prisma.tbl_produtoWhereInput | Prisma.tbl_produtoWhereInput[];
    OR?: Prisma.tbl_produtoWhereInput[];
    NOT?: Prisma.tbl_produtoWhereInput | Prisma.tbl_produtoWhereInput[];
    tipo_produto_id?: Prisma.IntNullableFilter<"tbl_produto"> | number | null;
    nome?: Prisma.StringNullableFilter<"tbl_produto"> | string | null;
    valor_unitario?: Prisma.DecimalNullableFilter<"tbl_produto"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    ibu?: Prisma.StringNullableFilter<"tbl_produto"> | string | null;
    abv?: Prisma.StringNullableFilter<"tbl_produto"> | string | null;
    rel_fornecedor_produto?: Prisma.Rel_fornecedor_produtoListRelationFilter;
    rel_pedido_produto?: Prisma.Rel_pedido_produtoListRelationFilter;
    rel_produto_ingrediente?: Prisma.Rel_produto_ingredienteListRelationFilter;
    tbl_tipo_produto?: Prisma.XOR<Prisma.Tbl_tipo_produtoNullableScalarRelationFilter, Prisma.tbl_tipo_produtoWhereInput> | null;
}, "produto_id">;
export type tbl_produtoOrderByWithAggregationInput = {
    produto_id?: Prisma.SortOrder;
    tipo_produto_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    nome?: Prisma.SortOrderInput | Prisma.SortOrder;
    valor_unitario?: Prisma.SortOrderInput | Prisma.SortOrder;
    ibu?: Prisma.SortOrderInput | Prisma.SortOrder;
    abv?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.tbl_produtoCountOrderByAggregateInput;
    _avg?: Prisma.tbl_produtoAvgOrderByAggregateInput;
    _max?: Prisma.tbl_produtoMaxOrderByAggregateInput;
    _min?: Prisma.tbl_produtoMinOrderByAggregateInput;
    _sum?: Prisma.tbl_produtoSumOrderByAggregateInput;
};
export type tbl_produtoScalarWhereWithAggregatesInput = {
    AND?: Prisma.tbl_produtoScalarWhereWithAggregatesInput | Prisma.tbl_produtoScalarWhereWithAggregatesInput[];
    OR?: Prisma.tbl_produtoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.tbl_produtoScalarWhereWithAggregatesInput | Prisma.tbl_produtoScalarWhereWithAggregatesInput[];
    produto_id?: Prisma.IntWithAggregatesFilter<"tbl_produto"> | number;
    tipo_produto_id?: Prisma.IntNullableWithAggregatesFilter<"tbl_produto"> | number | null;
    nome?: Prisma.StringNullableWithAggregatesFilter<"tbl_produto"> | string | null;
    valor_unitario?: Prisma.DecimalNullableWithAggregatesFilter<"tbl_produto"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    ibu?: Prisma.StringNullableWithAggregatesFilter<"tbl_produto"> | string | null;
    abv?: Prisma.StringNullableWithAggregatesFilter<"tbl_produto"> | string | null;
};
export type tbl_produtoCreateInput = {
    nome?: string | null;
    valor_unitario?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    ibu?: string | null;
    abv?: string | null;
    rel_fornecedor_produto?: Prisma.rel_fornecedor_produtoCreateNestedManyWithoutTbl_produtoInput;
    rel_pedido_produto?: Prisma.rel_pedido_produtoCreateNestedManyWithoutTbl_produtoInput;
    rel_produto_ingrediente?: Prisma.rel_produto_ingredienteCreateNestedManyWithoutTbl_produtoInput;
    tbl_tipo_produto?: Prisma.tbl_tipo_produtoCreateNestedOneWithoutTbl_produtoInput;
};
export type tbl_produtoUncheckedCreateInput = {
    produto_id?: number;
    tipo_produto_id?: number | null;
    nome?: string | null;
    valor_unitario?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    ibu?: string | null;
    abv?: string | null;
    rel_fornecedor_produto?: Prisma.rel_fornecedor_produtoUncheckedCreateNestedManyWithoutTbl_produtoInput;
    rel_pedido_produto?: Prisma.rel_pedido_produtoUncheckedCreateNestedManyWithoutTbl_produtoInput;
    rel_produto_ingrediente?: Prisma.rel_produto_ingredienteUncheckedCreateNestedManyWithoutTbl_produtoInput;
};
export type tbl_produtoUpdateInput = {
    nome?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    valor_unitario?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    ibu?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    abv?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rel_fornecedor_produto?: Prisma.rel_fornecedor_produtoUpdateManyWithoutTbl_produtoNestedInput;
    rel_pedido_produto?: Prisma.rel_pedido_produtoUpdateManyWithoutTbl_produtoNestedInput;
    rel_produto_ingrediente?: Prisma.rel_produto_ingredienteUpdateManyWithoutTbl_produtoNestedInput;
    tbl_tipo_produto?: Prisma.tbl_tipo_produtoUpdateOneWithoutTbl_produtoNestedInput;
};
export type tbl_produtoUncheckedUpdateInput = {
    produto_id?: Prisma.IntFieldUpdateOperationsInput | number;
    tipo_produto_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nome?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    valor_unitario?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    ibu?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    abv?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rel_fornecedor_produto?: Prisma.rel_fornecedor_produtoUncheckedUpdateManyWithoutTbl_produtoNestedInput;
    rel_pedido_produto?: Prisma.rel_pedido_produtoUncheckedUpdateManyWithoutTbl_produtoNestedInput;
    rel_produto_ingrediente?: Prisma.rel_produto_ingredienteUncheckedUpdateManyWithoutTbl_produtoNestedInput;
};
export type tbl_produtoCreateManyInput = {
    produto_id?: number;
    tipo_produto_id?: number | null;
    nome?: string | null;
    valor_unitario?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    ibu?: string | null;
    abv?: string | null;
};
export type tbl_produtoUpdateManyMutationInput = {
    nome?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    valor_unitario?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    ibu?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    abv?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type tbl_produtoUncheckedUpdateManyInput = {
    produto_id?: Prisma.IntFieldUpdateOperationsInput | number;
    tipo_produto_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nome?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    valor_unitario?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    ibu?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    abv?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type Tbl_produtoScalarRelationFilter = {
    is?: Prisma.tbl_produtoWhereInput;
    isNot?: Prisma.tbl_produtoWhereInput;
};
export type tbl_produtoCountOrderByAggregateInput = {
    produto_id?: Prisma.SortOrder;
    tipo_produto_id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    valor_unitario?: Prisma.SortOrder;
    ibu?: Prisma.SortOrder;
    abv?: Prisma.SortOrder;
};
export type tbl_produtoAvgOrderByAggregateInput = {
    produto_id?: Prisma.SortOrder;
    tipo_produto_id?: Prisma.SortOrder;
    valor_unitario?: Prisma.SortOrder;
};
export type tbl_produtoMaxOrderByAggregateInput = {
    produto_id?: Prisma.SortOrder;
    tipo_produto_id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    valor_unitario?: Prisma.SortOrder;
    ibu?: Prisma.SortOrder;
    abv?: Prisma.SortOrder;
};
export type tbl_produtoMinOrderByAggregateInput = {
    produto_id?: Prisma.SortOrder;
    tipo_produto_id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    valor_unitario?: Prisma.SortOrder;
    ibu?: Prisma.SortOrder;
    abv?: Prisma.SortOrder;
};
export type tbl_produtoSumOrderByAggregateInput = {
    produto_id?: Prisma.SortOrder;
    tipo_produto_id?: Prisma.SortOrder;
    valor_unitario?: Prisma.SortOrder;
};
export type Tbl_produtoListRelationFilter = {
    every?: Prisma.tbl_produtoWhereInput;
    some?: Prisma.tbl_produtoWhereInput;
    none?: Prisma.tbl_produtoWhereInput;
};
export type tbl_produtoOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type tbl_produtoCreateNestedOneWithoutRel_fornecedor_produtoInput = {
    create?: Prisma.XOR<Prisma.tbl_produtoCreateWithoutRel_fornecedor_produtoInput, Prisma.tbl_produtoUncheckedCreateWithoutRel_fornecedor_produtoInput>;
    connectOrCreate?: Prisma.tbl_produtoCreateOrConnectWithoutRel_fornecedor_produtoInput;
    connect?: Prisma.tbl_produtoWhereUniqueInput;
};
export type tbl_produtoUpdateOneRequiredWithoutRel_fornecedor_produtoNestedInput = {
    create?: Prisma.XOR<Prisma.tbl_produtoCreateWithoutRel_fornecedor_produtoInput, Prisma.tbl_produtoUncheckedCreateWithoutRel_fornecedor_produtoInput>;
    connectOrCreate?: Prisma.tbl_produtoCreateOrConnectWithoutRel_fornecedor_produtoInput;
    upsert?: Prisma.tbl_produtoUpsertWithoutRel_fornecedor_produtoInput;
    connect?: Prisma.tbl_produtoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.tbl_produtoUpdateToOneWithWhereWithoutRel_fornecedor_produtoInput, Prisma.tbl_produtoUpdateWithoutRel_fornecedor_produtoInput>, Prisma.tbl_produtoUncheckedUpdateWithoutRel_fornecedor_produtoInput>;
};
export type tbl_produtoCreateNestedOneWithoutRel_pedido_produtoInput = {
    create?: Prisma.XOR<Prisma.tbl_produtoCreateWithoutRel_pedido_produtoInput, Prisma.tbl_produtoUncheckedCreateWithoutRel_pedido_produtoInput>;
    connectOrCreate?: Prisma.tbl_produtoCreateOrConnectWithoutRel_pedido_produtoInput;
    connect?: Prisma.tbl_produtoWhereUniqueInput;
};
export type tbl_produtoUpdateOneRequiredWithoutRel_pedido_produtoNestedInput = {
    create?: Prisma.XOR<Prisma.tbl_produtoCreateWithoutRel_pedido_produtoInput, Prisma.tbl_produtoUncheckedCreateWithoutRel_pedido_produtoInput>;
    connectOrCreate?: Prisma.tbl_produtoCreateOrConnectWithoutRel_pedido_produtoInput;
    upsert?: Prisma.tbl_produtoUpsertWithoutRel_pedido_produtoInput;
    connect?: Prisma.tbl_produtoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.tbl_produtoUpdateToOneWithWhereWithoutRel_pedido_produtoInput, Prisma.tbl_produtoUpdateWithoutRel_pedido_produtoInput>, Prisma.tbl_produtoUncheckedUpdateWithoutRel_pedido_produtoInput>;
};
export type tbl_produtoCreateNestedOneWithoutRel_produto_ingredienteInput = {
    create?: Prisma.XOR<Prisma.tbl_produtoCreateWithoutRel_produto_ingredienteInput, Prisma.tbl_produtoUncheckedCreateWithoutRel_produto_ingredienteInput>;
    connectOrCreate?: Prisma.tbl_produtoCreateOrConnectWithoutRel_produto_ingredienteInput;
    connect?: Prisma.tbl_produtoWhereUniqueInput;
};
export type tbl_produtoUpdateOneRequiredWithoutRel_produto_ingredienteNestedInput = {
    create?: Prisma.XOR<Prisma.tbl_produtoCreateWithoutRel_produto_ingredienteInput, Prisma.tbl_produtoUncheckedCreateWithoutRel_produto_ingredienteInput>;
    connectOrCreate?: Prisma.tbl_produtoCreateOrConnectWithoutRel_produto_ingredienteInput;
    upsert?: Prisma.tbl_produtoUpsertWithoutRel_produto_ingredienteInput;
    connect?: Prisma.tbl_produtoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.tbl_produtoUpdateToOneWithWhereWithoutRel_produto_ingredienteInput, Prisma.tbl_produtoUpdateWithoutRel_produto_ingredienteInput>, Prisma.tbl_produtoUncheckedUpdateWithoutRel_produto_ingredienteInput>;
};
export type tbl_produtoCreateNestedManyWithoutTbl_tipo_produtoInput = {
    create?: Prisma.XOR<Prisma.tbl_produtoCreateWithoutTbl_tipo_produtoInput, Prisma.tbl_produtoUncheckedCreateWithoutTbl_tipo_produtoInput> | Prisma.tbl_produtoCreateWithoutTbl_tipo_produtoInput[] | Prisma.tbl_produtoUncheckedCreateWithoutTbl_tipo_produtoInput[];
    connectOrCreate?: Prisma.tbl_produtoCreateOrConnectWithoutTbl_tipo_produtoInput | Prisma.tbl_produtoCreateOrConnectWithoutTbl_tipo_produtoInput[];
    createMany?: Prisma.tbl_produtoCreateManyTbl_tipo_produtoInputEnvelope;
    connect?: Prisma.tbl_produtoWhereUniqueInput | Prisma.tbl_produtoWhereUniqueInput[];
};
export type tbl_produtoUncheckedCreateNestedManyWithoutTbl_tipo_produtoInput = {
    create?: Prisma.XOR<Prisma.tbl_produtoCreateWithoutTbl_tipo_produtoInput, Prisma.tbl_produtoUncheckedCreateWithoutTbl_tipo_produtoInput> | Prisma.tbl_produtoCreateWithoutTbl_tipo_produtoInput[] | Prisma.tbl_produtoUncheckedCreateWithoutTbl_tipo_produtoInput[];
    connectOrCreate?: Prisma.tbl_produtoCreateOrConnectWithoutTbl_tipo_produtoInput | Prisma.tbl_produtoCreateOrConnectWithoutTbl_tipo_produtoInput[];
    createMany?: Prisma.tbl_produtoCreateManyTbl_tipo_produtoInputEnvelope;
    connect?: Prisma.tbl_produtoWhereUniqueInput | Prisma.tbl_produtoWhereUniqueInput[];
};
export type tbl_produtoUpdateManyWithoutTbl_tipo_produtoNestedInput = {
    create?: Prisma.XOR<Prisma.tbl_produtoCreateWithoutTbl_tipo_produtoInput, Prisma.tbl_produtoUncheckedCreateWithoutTbl_tipo_produtoInput> | Prisma.tbl_produtoCreateWithoutTbl_tipo_produtoInput[] | Prisma.tbl_produtoUncheckedCreateWithoutTbl_tipo_produtoInput[];
    connectOrCreate?: Prisma.tbl_produtoCreateOrConnectWithoutTbl_tipo_produtoInput | Prisma.tbl_produtoCreateOrConnectWithoutTbl_tipo_produtoInput[];
    upsert?: Prisma.tbl_produtoUpsertWithWhereUniqueWithoutTbl_tipo_produtoInput | Prisma.tbl_produtoUpsertWithWhereUniqueWithoutTbl_tipo_produtoInput[];
    createMany?: Prisma.tbl_produtoCreateManyTbl_tipo_produtoInputEnvelope;
    set?: Prisma.tbl_produtoWhereUniqueInput | Prisma.tbl_produtoWhereUniqueInput[];
    disconnect?: Prisma.tbl_produtoWhereUniqueInput | Prisma.tbl_produtoWhereUniqueInput[];
    delete?: Prisma.tbl_produtoWhereUniqueInput | Prisma.tbl_produtoWhereUniqueInput[];
    connect?: Prisma.tbl_produtoWhereUniqueInput | Prisma.tbl_produtoWhereUniqueInput[];
    update?: Prisma.tbl_produtoUpdateWithWhereUniqueWithoutTbl_tipo_produtoInput | Prisma.tbl_produtoUpdateWithWhereUniqueWithoutTbl_tipo_produtoInput[];
    updateMany?: Prisma.tbl_produtoUpdateManyWithWhereWithoutTbl_tipo_produtoInput | Prisma.tbl_produtoUpdateManyWithWhereWithoutTbl_tipo_produtoInput[];
    deleteMany?: Prisma.tbl_produtoScalarWhereInput | Prisma.tbl_produtoScalarWhereInput[];
};
export type tbl_produtoUncheckedUpdateManyWithoutTbl_tipo_produtoNestedInput = {
    create?: Prisma.XOR<Prisma.tbl_produtoCreateWithoutTbl_tipo_produtoInput, Prisma.tbl_produtoUncheckedCreateWithoutTbl_tipo_produtoInput> | Prisma.tbl_produtoCreateWithoutTbl_tipo_produtoInput[] | Prisma.tbl_produtoUncheckedCreateWithoutTbl_tipo_produtoInput[];
    connectOrCreate?: Prisma.tbl_produtoCreateOrConnectWithoutTbl_tipo_produtoInput | Prisma.tbl_produtoCreateOrConnectWithoutTbl_tipo_produtoInput[];
    upsert?: Prisma.tbl_produtoUpsertWithWhereUniqueWithoutTbl_tipo_produtoInput | Prisma.tbl_produtoUpsertWithWhereUniqueWithoutTbl_tipo_produtoInput[];
    createMany?: Prisma.tbl_produtoCreateManyTbl_tipo_produtoInputEnvelope;
    set?: Prisma.tbl_produtoWhereUniqueInput | Prisma.tbl_produtoWhereUniqueInput[];
    disconnect?: Prisma.tbl_produtoWhereUniqueInput | Prisma.tbl_produtoWhereUniqueInput[];
    delete?: Prisma.tbl_produtoWhereUniqueInput | Prisma.tbl_produtoWhereUniqueInput[];
    connect?: Prisma.tbl_produtoWhereUniqueInput | Prisma.tbl_produtoWhereUniqueInput[];
    update?: Prisma.tbl_produtoUpdateWithWhereUniqueWithoutTbl_tipo_produtoInput | Prisma.tbl_produtoUpdateWithWhereUniqueWithoutTbl_tipo_produtoInput[];
    updateMany?: Prisma.tbl_produtoUpdateManyWithWhereWithoutTbl_tipo_produtoInput | Prisma.tbl_produtoUpdateManyWithWhereWithoutTbl_tipo_produtoInput[];
    deleteMany?: Prisma.tbl_produtoScalarWhereInput | Prisma.tbl_produtoScalarWhereInput[];
};
export type tbl_produtoCreateWithoutRel_fornecedor_produtoInput = {
    nome?: string | null;
    valor_unitario?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    ibu?: string | null;
    abv?: string | null;
    rel_pedido_produto?: Prisma.rel_pedido_produtoCreateNestedManyWithoutTbl_produtoInput;
    rel_produto_ingrediente?: Prisma.rel_produto_ingredienteCreateNestedManyWithoutTbl_produtoInput;
    tbl_tipo_produto?: Prisma.tbl_tipo_produtoCreateNestedOneWithoutTbl_produtoInput;
};
export type tbl_produtoUncheckedCreateWithoutRel_fornecedor_produtoInput = {
    produto_id?: number;
    tipo_produto_id?: number | null;
    nome?: string | null;
    valor_unitario?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    ibu?: string | null;
    abv?: string | null;
    rel_pedido_produto?: Prisma.rel_pedido_produtoUncheckedCreateNestedManyWithoutTbl_produtoInput;
    rel_produto_ingrediente?: Prisma.rel_produto_ingredienteUncheckedCreateNestedManyWithoutTbl_produtoInput;
};
export type tbl_produtoCreateOrConnectWithoutRel_fornecedor_produtoInput = {
    where: Prisma.tbl_produtoWhereUniqueInput;
    create: Prisma.XOR<Prisma.tbl_produtoCreateWithoutRel_fornecedor_produtoInput, Prisma.tbl_produtoUncheckedCreateWithoutRel_fornecedor_produtoInput>;
};
export type tbl_produtoUpsertWithoutRel_fornecedor_produtoInput = {
    update: Prisma.XOR<Prisma.tbl_produtoUpdateWithoutRel_fornecedor_produtoInput, Prisma.tbl_produtoUncheckedUpdateWithoutRel_fornecedor_produtoInput>;
    create: Prisma.XOR<Prisma.tbl_produtoCreateWithoutRel_fornecedor_produtoInput, Prisma.tbl_produtoUncheckedCreateWithoutRel_fornecedor_produtoInput>;
    where?: Prisma.tbl_produtoWhereInput;
};
export type tbl_produtoUpdateToOneWithWhereWithoutRel_fornecedor_produtoInput = {
    where?: Prisma.tbl_produtoWhereInput;
    data: Prisma.XOR<Prisma.tbl_produtoUpdateWithoutRel_fornecedor_produtoInput, Prisma.tbl_produtoUncheckedUpdateWithoutRel_fornecedor_produtoInput>;
};
export type tbl_produtoUpdateWithoutRel_fornecedor_produtoInput = {
    nome?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    valor_unitario?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    ibu?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    abv?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rel_pedido_produto?: Prisma.rel_pedido_produtoUpdateManyWithoutTbl_produtoNestedInput;
    rel_produto_ingrediente?: Prisma.rel_produto_ingredienteUpdateManyWithoutTbl_produtoNestedInput;
    tbl_tipo_produto?: Prisma.tbl_tipo_produtoUpdateOneWithoutTbl_produtoNestedInput;
};
export type tbl_produtoUncheckedUpdateWithoutRel_fornecedor_produtoInput = {
    produto_id?: Prisma.IntFieldUpdateOperationsInput | number;
    tipo_produto_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nome?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    valor_unitario?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    ibu?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    abv?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rel_pedido_produto?: Prisma.rel_pedido_produtoUncheckedUpdateManyWithoutTbl_produtoNestedInput;
    rel_produto_ingrediente?: Prisma.rel_produto_ingredienteUncheckedUpdateManyWithoutTbl_produtoNestedInput;
};
export type tbl_produtoCreateWithoutRel_pedido_produtoInput = {
    nome?: string | null;
    valor_unitario?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    ibu?: string | null;
    abv?: string | null;
    rel_fornecedor_produto?: Prisma.rel_fornecedor_produtoCreateNestedManyWithoutTbl_produtoInput;
    rel_produto_ingrediente?: Prisma.rel_produto_ingredienteCreateNestedManyWithoutTbl_produtoInput;
    tbl_tipo_produto?: Prisma.tbl_tipo_produtoCreateNestedOneWithoutTbl_produtoInput;
};
export type tbl_produtoUncheckedCreateWithoutRel_pedido_produtoInput = {
    produto_id?: number;
    tipo_produto_id?: number | null;
    nome?: string | null;
    valor_unitario?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    ibu?: string | null;
    abv?: string | null;
    rel_fornecedor_produto?: Prisma.rel_fornecedor_produtoUncheckedCreateNestedManyWithoutTbl_produtoInput;
    rel_produto_ingrediente?: Prisma.rel_produto_ingredienteUncheckedCreateNestedManyWithoutTbl_produtoInput;
};
export type tbl_produtoCreateOrConnectWithoutRel_pedido_produtoInput = {
    where: Prisma.tbl_produtoWhereUniqueInput;
    create: Prisma.XOR<Prisma.tbl_produtoCreateWithoutRel_pedido_produtoInput, Prisma.tbl_produtoUncheckedCreateWithoutRel_pedido_produtoInput>;
};
export type tbl_produtoUpsertWithoutRel_pedido_produtoInput = {
    update: Prisma.XOR<Prisma.tbl_produtoUpdateWithoutRel_pedido_produtoInput, Prisma.tbl_produtoUncheckedUpdateWithoutRel_pedido_produtoInput>;
    create: Prisma.XOR<Prisma.tbl_produtoCreateWithoutRel_pedido_produtoInput, Prisma.tbl_produtoUncheckedCreateWithoutRel_pedido_produtoInput>;
    where?: Prisma.tbl_produtoWhereInput;
};
export type tbl_produtoUpdateToOneWithWhereWithoutRel_pedido_produtoInput = {
    where?: Prisma.tbl_produtoWhereInput;
    data: Prisma.XOR<Prisma.tbl_produtoUpdateWithoutRel_pedido_produtoInput, Prisma.tbl_produtoUncheckedUpdateWithoutRel_pedido_produtoInput>;
};
export type tbl_produtoUpdateWithoutRel_pedido_produtoInput = {
    nome?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    valor_unitario?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    ibu?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    abv?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rel_fornecedor_produto?: Prisma.rel_fornecedor_produtoUpdateManyWithoutTbl_produtoNestedInput;
    rel_produto_ingrediente?: Prisma.rel_produto_ingredienteUpdateManyWithoutTbl_produtoNestedInput;
    tbl_tipo_produto?: Prisma.tbl_tipo_produtoUpdateOneWithoutTbl_produtoNestedInput;
};
export type tbl_produtoUncheckedUpdateWithoutRel_pedido_produtoInput = {
    produto_id?: Prisma.IntFieldUpdateOperationsInput | number;
    tipo_produto_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nome?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    valor_unitario?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    ibu?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    abv?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rel_fornecedor_produto?: Prisma.rel_fornecedor_produtoUncheckedUpdateManyWithoutTbl_produtoNestedInput;
    rel_produto_ingrediente?: Prisma.rel_produto_ingredienteUncheckedUpdateManyWithoutTbl_produtoNestedInput;
};
export type tbl_produtoCreateWithoutRel_produto_ingredienteInput = {
    nome?: string | null;
    valor_unitario?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    ibu?: string | null;
    abv?: string | null;
    rel_fornecedor_produto?: Prisma.rel_fornecedor_produtoCreateNestedManyWithoutTbl_produtoInput;
    rel_pedido_produto?: Prisma.rel_pedido_produtoCreateNestedManyWithoutTbl_produtoInput;
    tbl_tipo_produto?: Prisma.tbl_tipo_produtoCreateNestedOneWithoutTbl_produtoInput;
};
export type tbl_produtoUncheckedCreateWithoutRel_produto_ingredienteInput = {
    produto_id?: number;
    tipo_produto_id?: number | null;
    nome?: string | null;
    valor_unitario?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    ibu?: string | null;
    abv?: string | null;
    rel_fornecedor_produto?: Prisma.rel_fornecedor_produtoUncheckedCreateNestedManyWithoutTbl_produtoInput;
    rel_pedido_produto?: Prisma.rel_pedido_produtoUncheckedCreateNestedManyWithoutTbl_produtoInput;
};
export type tbl_produtoCreateOrConnectWithoutRel_produto_ingredienteInput = {
    where: Prisma.tbl_produtoWhereUniqueInput;
    create: Prisma.XOR<Prisma.tbl_produtoCreateWithoutRel_produto_ingredienteInput, Prisma.tbl_produtoUncheckedCreateWithoutRel_produto_ingredienteInput>;
};
export type tbl_produtoUpsertWithoutRel_produto_ingredienteInput = {
    update: Prisma.XOR<Prisma.tbl_produtoUpdateWithoutRel_produto_ingredienteInput, Prisma.tbl_produtoUncheckedUpdateWithoutRel_produto_ingredienteInput>;
    create: Prisma.XOR<Prisma.tbl_produtoCreateWithoutRel_produto_ingredienteInput, Prisma.tbl_produtoUncheckedCreateWithoutRel_produto_ingredienteInput>;
    where?: Prisma.tbl_produtoWhereInput;
};
export type tbl_produtoUpdateToOneWithWhereWithoutRel_produto_ingredienteInput = {
    where?: Prisma.tbl_produtoWhereInput;
    data: Prisma.XOR<Prisma.tbl_produtoUpdateWithoutRel_produto_ingredienteInput, Prisma.tbl_produtoUncheckedUpdateWithoutRel_produto_ingredienteInput>;
};
export type tbl_produtoUpdateWithoutRel_produto_ingredienteInput = {
    nome?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    valor_unitario?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    ibu?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    abv?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rel_fornecedor_produto?: Prisma.rel_fornecedor_produtoUpdateManyWithoutTbl_produtoNestedInput;
    rel_pedido_produto?: Prisma.rel_pedido_produtoUpdateManyWithoutTbl_produtoNestedInput;
    tbl_tipo_produto?: Prisma.tbl_tipo_produtoUpdateOneWithoutTbl_produtoNestedInput;
};
export type tbl_produtoUncheckedUpdateWithoutRel_produto_ingredienteInput = {
    produto_id?: Prisma.IntFieldUpdateOperationsInput | number;
    tipo_produto_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nome?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    valor_unitario?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    ibu?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    abv?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rel_fornecedor_produto?: Prisma.rel_fornecedor_produtoUncheckedUpdateManyWithoutTbl_produtoNestedInput;
    rel_pedido_produto?: Prisma.rel_pedido_produtoUncheckedUpdateManyWithoutTbl_produtoNestedInput;
};
export type tbl_produtoCreateWithoutTbl_tipo_produtoInput = {
    nome?: string | null;
    valor_unitario?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    ibu?: string | null;
    abv?: string | null;
    rel_fornecedor_produto?: Prisma.rel_fornecedor_produtoCreateNestedManyWithoutTbl_produtoInput;
    rel_pedido_produto?: Prisma.rel_pedido_produtoCreateNestedManyWithoutTbl_produtoInput;
    rel_produto_ingrediente?: Prisma.rel_produto_ingredienteCreateNestedManyWithoutTbl_produtoInput;
};
export type tbl_produtoUncheckedCreateWithoutTbl_tipo_produtoInput = {
    produto_id?: number;
    nome?: string | null;
    valor_unitario?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    ibu?: string | null;
    abv?: string | null;
    rel_fornecedor_produto?: Prisma.rel_fornecedor_produtoUncheckedCreateNestedManyWithoutTbl_produtoInput;
    rel_pedido_produto?: Prisma.rel_pedido_produtoUncheckedCreateNestedManyWithoutTbl_produtoInput;
    rel_produto_ingrediente?: Prisma.rel_produto_ingredienteUncheckedCreateNestedManyWithoutTbl_produtoInput;
};
export type tbl_produtoCreateOrConnectWithoutTbl_tipo_produtoInput = {
    where: Prisma.tbl_produtoWhereUniqueInput;
    create: Prisma.XOR<Prisma.tbl_produtoCreateWithoutTbl_tipo_produtoInput, Prisma.tbl_produtoUncheckedCreateWithoutTbl_tipo_produtoInput>;
};
export type tbl_produtoCreateManyTbl_tipo_produtoInputEnvelope = {
    data: Prisma.tbl_produtoCreateManyTbl_tipo_produtoInput | Prisma.tbl_produtoCreateManyTbl_tipo_produtoInput[];
    skipDuplicates?: boolean;
};
export type tbl_produtoUpsertWithWhereUniqueWithoutTbl_tipo_produtoInput = {
    where: Prisma.tbl_produtoWhereUniqueInput;
    update: Prisma.XOR<Prisma.tbl_produtoUpdateWithoutTbl_tipo_produtoInput, Prisma.tbl_produtoUncheckedUpdateWithoutTbl_tipo_produtoInput>;
    create: Prisma.XOR<Prisma.tbl_produtoCreateWithoutTbl_tipo_produtoInput, Prisma.tbl_produtoUncheckedCreateWithoutTbl_tipo_produtoInput>;
};
export type tbl_produtoUpdateWithWhereUniqueWithoutTbl_tipo_produtoInput = {
    where: Prisma.tbl_produtoWhereUniqueInput;
    data: Prisma.XOR<Prisma.tbl_produtoUpdateWithoutTbl_tipo_produtoInput, Prisma.tbl_produtoUncheckedUpdateWithoutTbl_tipo_produtoInput>;
};
export type tbl_produtoUpdateManyWithWhereWithoutTbl_tipo_produtoInput = {
    where: Prisma.tbl_produtoScalarWhereInput;
    data: Prisma.XOR<Prisma.tbl_produtoUpdateManyMutationInput, Prisma.tbl_produtoUncheckedUpdateManyWithoutTbl_tipo_produtoInput>;
};
export type tbl_produtoScalarWhereInput = {
    AND?: Prisma.tbl_produtoScalarWhereInput | Prisma.tbl_produtoScalarWhereInput[];
    OR?: Prisma.tbl_produtoScalarWhereInput[];
    NOT?: Prisma.tbl_produtoScalarWhereInput | Prisma.tbl_produtoScalarWhereInput[];
    produto_id?: Prisma.IntFilter<"tbl_produto"> | number;
    tipo_produto_id?: Prisma.IntNullableFilter<"tbl_produto"> | number | null;
    nome?: Prisma.StringNullableFilter<"tbl_produto"> | string | null;
    valor_unitario?: Prisma.DecimalNullableFilter<"tbl_produto"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    ibu?: Prisma.StringNullableFilter<"tbl_produto"> | string | null;
    abv?: Prisma.StringNullableFilter<"tbl_produto"> | string | null;
};
export type tbl_produtoCreateManyTbl_tipo_produtoInput = {
    produto_id?: number;
    nome?: string | null;
    valor_unitario?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    ibu?: string | null;
    abv?: string | null;
};
export type tbl_produtoUpdateWithoutTbl_tipo_produtoInput = {
    nome?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    valor_unitario?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    ibu?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    abv?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rel_fornecedor_produto?: Prisma.rel_fornecedor_produtoUpdateManyWithoutTbl_produtoNestedInput;
    rel_pedido_produto?: Prisma.rel_pedido_produtoUpdateManyWithoutTbl_produtoNestedInput;
    rel_produto_ingrediente?: Prisma.rel_produto_ingredienteUpdateManyWithoutTbl_produtoNestedInput;
};
export type tbl_produtoUncheckedUpdateWithoutTbl_tipo_produtoInput = {
    produto_id?: Prisma.IntFieldUpdateOperationsInput | number;
    nome?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    valor_unitario?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    ibu?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    abv?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rel_fornecedor_produto?: Prisma.rel_fornecedor_produtoUncheckedUpdateManyWithoutTbl_produtoNestedInput;
    rel_pedido_produto?: Prisma.rel_pedido_produtoUncheckedUpdateManyWithoutTbl_produtoNestedInput;
    rel_produto_ingrediente?: Prisma.rel_produto_ingredienteUncheckedUpdateManyWithoutTbl_produtoNestedInput;
};
export type tbl_produtoUncheckedUpdateManyWithoutTbl_tipo_produtoInput = {
    produto_id?: Prisma.IntFieldUpdateOperationsInput | number;
    nome?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    valor_unitario?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    ibu?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    abv?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
/**
 * Count Type Tbl_produtoCountOutputType
 */
export type Tbl_produtoCountOutputType = {
    rel_fornecedor_produto: number;
    rel_pedido_produto: number;
    rel_produto_ingrediente: number;
};
export type Tbl_produtoCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rel_fornecedor_produto?: boolean | Tbl_produtoCountOutputTypeCountRel_fornecedor_produtoArgs;
    rel_pedido_produto?: boolean | Tbl_produtoCountOutputTypeCountRel_pedido_produtoArgs;
    rel_produto_ingrediente?: boolean | Tbl_produtoCountOutputTypeCountRel_produto_ingredienteArgs;
};
/**
 * Tbl_produtoCountOutputType without action
 */
export type Tbl_produtoCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tbl_produtoCountOutputType
     */
    select?: Prisma.Tbl_produtoCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * Tbl_produtoCountOutputType without action
 */
export type Tbl_produtoCountOutputTypeCountRel_fornecedor_produtoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.rel_fornecedor_produtoWhereInput;
};
/**
 * Tbl_produtoCountOutputType without action
 */
export type Tbl_produtoCountOutputTypeCountRel_pedido_produtoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.rel_pedido_produtoWhereInput;
};
/**
 * Tbl_produtoCountOutputType without action
 */
export type Tbl_produtoCountOutputTypeCountRel_produto_ingredienteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.rel_produto_ingredienteWhereInput;
};
export type tbl_produtoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    produto_id?: boolean;
    tipo_produto_id?: boolean;
    nome?: boolean;
    valor_unitario?: boolean;
    ibu?: boolean;
    abv?: boolean;
    rel_fornecedor_produto?: boolean | Prisma.tbl_produto$rel_fornecedor_produtoArgs<ExtArgs>;
    rel_pedido_produto?: boolean | Prisma.tbl_produto$rel_pedido_produtoArgs<ExtArgs>;
    rel_produto_ingrediente?: boolean | Prisma.tbl_produto$rel_produto_ingredienteArgs<ExtArgs>;
    tbl_tipo_produto?: boolean | Prisma.tbl_produto$tbl_tipo_produtoArgs<ExtArgs>;
    _count?: boolean | Prisma.Tbl_produtoCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["tbl_produto"]>;
export type tbl_produtoSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    produto_id?: boolean;
    tipo_produto_id?: boolean;
    nome?: boolean;
    valor_unitario?: boolean;
    ibu?: boolean;
    abv?: boolean;
    tbl_tipo_produto?: boolean | Prisma.tbl_produto$tbl_tipo_produtoArgs<ExtArgs>;
}, ExtArgs["result"]["tbl_produto"]>;
export type tbl_produtoSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    produto_id?: boolean;
    tipo_produto_id?: boolean;
    nome?: boolean;
    valor_unitario?: boolean;
    ibu?: boolean;
    abv?: boolean;
    tbl_tipo_produto?: boolean | Prisma.tbl_produto$tbl_tipo_produtoArgs<ExtArgs>;
}, ExtArgs["result"]["tbl_produto"]>;
export type tbl_produtoSelectScalar = {
    produto_id?: boolean;
    tipo_produto_id?: boolean;
    nome?: boolean;
    valor_unitario?: boolean;
    ibu?: boolean;
    abv?: boolean;
};
export type tbl_produtoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"produto_id" | "tipo_produto_id" | "nome" | "valor_unitario" | "ibu" | "abv", ExtArgs["result"]["tbl_produto"]>;
export type tbl_produtoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rel_fornecedor_produto?: boolean | Prisma.tbl_produto$rel_fornecedor_produtoArgs<ExtArgs>;
    rel_pedido_produto?: boolean | Prisma.tbl_produto$rel_pedido_produtoArgs<ExtArgs>;
    rel_produto_ingrediente?: boolean | Prisma.tbl_produto$rel_produto_ingredienteArgs<ExtArgs>;
    tbl_tipo_produto?: boolean | Prisma.tbl_produto$tbl_tipo_produtoArgs<ExtArgs>;
    _count?: boolean | Prisma.Tbl_produtoCountOutputTypeDefaultArgs<ExtArgs>;
};
export type tbl_produtoIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tbl_tipo_produto?: boolean | Prisma.tbl_produto$tbl_tipo_produtoArgs<ExtArgs>;
};
export type tbl_produtoIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tbl_tipo_produto?: boolean | Prisma.tbl_produto$tbl_tipo_produtoArgs<ExtArgs>;
};
export type $tbl_produtoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "tbl_produto";
    objects: {
        rel_fornecedor_produto: Prisma.$rel_fornecedor_produtoPayload<ExtArgs>[];
        rel_pedido_produto: Prisma.$rel_pedido_produtoPayload<ExtArgs>[];
        rel_produto_ingrediente: Prisma.$rel_produto_ingredientePayload<ExtArgs>[];
        tbl_tipo_produto: Prisma.$tbl_tipo_produtoPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        produto_id: number;
        tipo_produto_id: number | null;
        nome: string | null;
        valor_unitario: runtime.Decimal | null;
        ibu: string | null;
        abv: string | null;
    }, ExtArgs["result"]["tbl_produto"]>;
    composites: {};
};
export type tbl_produtoGetPayload<S extends boolean | null | undefined | tbl_produtoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$tbl_produtoPayload, S>;
export type tbl_produtoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<tbl_produtoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Tbl_produtoCountAggregateInputType | true;
};
export interface tbl_produtoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['tbl_produto'];
        meta: {
            name: 'tbl_produto';
        };
    };
    /**
     * Find zero or one Tbl_produto that matches the filter.
     * @param {tbl_produtoFindUniqueArgs} args - Arguments to find a Tbl_produto
     * @example
     * // Get one Tbl_produto
     * const tbl_produto = await prisma.tbl_produto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tbl_produtoFindUniqueArgs>(args: Prisma.SelectSubset<T, tbl_produtoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__tbl_produtoClient<runtime.Types.Result.GetResult<Prisma.$tbl_produtoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Tbl_produto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tbl_produtoFindUniqueOrThrowArgs} args - Arguments to find a Tbl_produto
     * @example
     * // Get one Tbl_produto
     * const tbl_produto = await prisma.tbl_produto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tbl_produtoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, tbl_produtoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__tbl_produtoClient<runtime.Types.Result.GetResult<Prisma.$tbl_produtoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Tbl_produto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_produtoFindFirstArgs} args - Arguments to find a Tbl_produto
     * @example
     * // Get one Tbl_produto
     * const tbl_produto = await prisma.tbl_produto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tbl_produtoFindFirstArgs>(args?: Prisma.SelectSubset<T, tbl_produtoFindFirstArgs<ExtArgs>>): Prisma.Prisma__tbl_produtoClient<runtime.Types.Result.GetResult<Prisma.$tbl_produtoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Tbl_produto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_produtoFindFirstOrThrowArgs} args - Arguments to find a Tbl_produto
     * @example
     * // Get one Tbl_produto
     * const tbl_produto = await prisma.tbl_produto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tbl_produtoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, tbl_produtoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__tbl_produtoClient<runtime.Types.Result.GetResult<Prisma.$tbl_produtoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Tbl_produtos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_produtoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tbl_produtos
     * const tbl_produtos = await prisma.tbl_produto.findMany()
     *
     * // Get first 10 Tbl_produtos
     * const tbl_produtos = await prisma.tbl_produto.findMany({ take: 10 })
     *
     * // Only select the `produto_id`
     * const tbl_produtoWithProduto_idOnly = await prisma.tbl_produto.findMany({ select: { produto_id: true } })
     *
     */
    findMany<T extends tbl_produtoFindManyArgs>(args?: Prisma.SelectSubset<T, tbl_produtoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$tbl_produtoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Tbl_produto.
     * @param {tbl_produtoCreateArgs} args - Arguments to create a Tbl_produto.
     * @example
     * // Create one Tbl_produto
     * const Tbl_produto = await prisma.tbl_produto.create({
     *   data: {
     *     // ... data to create a Tbl_produto
     *   }
     * })
     *
     */
    create<T extends tbl_produtoCreateArgs>(args: Prisma.SelectSubset<T, tbl_produtoCreateArgs<ExtArgs>>): Prisma.Prisma__tbl_produtoClient<runtime.Types.Result.GetResult<Prisma.$tbl_produtoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Tbl_produtos.
     * @param {tbl_produtoCreateManyArgs} args - Arguments to create many Tbl_produtos.
     * @example
     * // Create many Tbl_produtos
     * const tbl_produto = await prisma.tbl_produto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends tbl_produtoCreateManyArgs>(args?: Prisma.SelectSubset<T, tbl_produtoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Tbl_produtos and returns the data saved in the database.
     * @param {tbl_produtoCreateManyAndReturnArgs} args - Arguments to create many Tbl_produtos.
     * @example
     * // Create many Tbl_produtos
     * const tbl_produto = await prisma.tbl_produto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Tbl_produtos and only return the `produto_id`
     * const tbl_produtoWithProduto_idOnly = await prisma.tbl_produto.createManyAndReturn({
     *   select: { produto_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends tbl_produtoCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, tbl_produtoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$tbl_produtoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Tbl_produto.
     * @param {tbl_produtoDeleteArgs} args - Arguments to delete one Tbl_produto.
     * @example
     * // Delete one Tbl_produto
     * const Tbl_produto = await prisma.tbl_produto.delete({
     *   where: {
     *     // ... filter to delete one Tbl_produto
     *   }
     * })
     *
     */
    delete<T extends tbl_produtoDeleteArgs>(args: Prisma.SelectSubset<T, tbl_produtoDeleteArgs<ExtArgs>>): Prisma.Prisma__tbl_produtoClient<runtime.Types.Result.GetResult<Prisma.$tbl_produtoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Tbl_produto.
     * @param {tbl_produtoUpdateArgs} args - Arguments to update one Tbl_produto.
     * @example
     * // Update one Tbl_produto
     * const tbl_produto = await prisma.tbl_produto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends tbl_produtoUpdateArgs>(args: Prisma.SelectSubset<T, tbl_produtoUpdateArgs<ExtArgs>>): Prisma.Prisma__tbl_produtoClient<runtime.Types.Result.GetResult<Prisma.$tbl_produtoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Tbl_produtos.
     * @param {tbl_produtoDeleteManyArgs} args - Arguments to filter Tbl_produtos to delete.
     * @example
     * // Delete a few Tbl_produtos
     * const { count } = await prisma.tbl_produto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends tbl_produtoDeleteManyArgs>(args?: Prisma.SelectSubset<T, tbl_produtoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Tbl_produtos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_produtoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tbl_produtos
     * const tbl_produto = await prisma.tbl_produto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends tbl_produtoUpdateManyArgs>(args: Prisma.SelectSubset<T, tbl_produtoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Tbl_produtos and returns the data updated in the database.
     * @param {tbl_produtoUpdateManyAndReturnArgs} args - Arguments to update many Tbl_produtos.
     * @example
     * // Update many Tbl_produtos
     * const tbl_produto = await prisma.tbl_produto.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Tbl_produtos and only return the `produto_id`
     * const tbl_produtoWithProduto_idOnly = await prisma.tbl_produto.updateManyAndReturn({
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
    updateManyAndReturn<T extends tbl_produtoUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, tbl_produtoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$tbl_produtoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Tbl_produto.
     * @param {tbl_produtoUpsertArgs} args - Arguments to update or create a Tbl_produto.
     * @example
     * // Update or create a Tbl_produto
     * const tbl_produto = await prisma.tbl_produto.upsert({
     *   create: {
     *     // ... data to create a Tbl_produto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tbl_produto we want to update
     *   }
     * })
     */
    upsert<T extends tbl_produtoUpsertArgs>(args: Prisma.SelectSubset<T, tbl_produtoUpsertArgs<ExtArgs>>): Prisma.Prisma__tbl_produtoClient<runtime.Types.Result.GetResult<Prisma.$tbl_produtoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Tbl_produtos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_produtoCountArgs} args - Arguments to filter Tbl_produtos to count.
     * @example
     * // Count the number of Tbl_produtos
     * const count = await prisma.tbl_produto.count({
     *   where: {
     *     // ... the filter for the Tbl_produtos we want to count
     *   }
     * })
    **/
    count<T extends tbl_produtoCountArgs>(args?: Prisma.Subset<T, tbl_produtoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Tbl_produtoCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Tbl_produto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tbl_produtoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tbl_produtoAggregateArgs>(args: Prisma.Subset<T, Tbl_produtoAggregateArgs>): Prisma.PrismaPromise<GetTbl_produtoAggregateType<T>>;
    /**
     * Group by Tbl_produto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_produtoGroupByArgs} args - Group by arguments.
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
    groupBy<T extends tbl_produtoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: tbl_produtoGroupByArgs['orderBy'];
    } : {
        orderBy?: tbl_produtoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, tbl_produtoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTbl_produtoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the tbl_produto model
     */
    readonly fields: tbl_produtoFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for tbl_produto.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__tbl_produtoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    rel_fornecedor_produto<T extends Prisma.tbl_produto$rel_fornecedor_produtoArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.tbl_produto$rel_fornecedor_produtoArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$rel_fornecedor_produtoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    rel_pedido_produto<T extends Prisma.tbl_produto$rel_pedido_produtoArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.tbl_produto$rel_pedido_produtoArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$rel_pedido_produtoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    rel_produto_ingrediente<T extends Prisma.tbl_produto$rel_produto_ingredienteArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.tbl_produto$rel_produto_ingredienteArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$rel_produto_ingredientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    tbl_tipo_produto<T extends Prisma.tbl_produto$tbl_tipo_produtoArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.tbl_produto$tbl_tipo_produtoArgs<ExtArgs>>): Prisma.Prisma__tbl_tipo_produtoClient<runtime.Types.Result.GetResult<Prisma.$tbl_tipo_produtoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the tbl_produto model
 */
export interface tbl_produtoFieldRefs {
    readonly produto_id: Prisma.FieldRef<"tbl_produto", 'Int'>;
    readonly tipo_produto_id: Prisma.FieldRef<"tbl_produto", 'Int'>;
    readonly nome: Prisma.FieldRef<"tbl_produto", 'String'>;
    readonly valor_unitario: Prisma.FieldRef<"tbl_produto", 'Decimal'>;
    readonly ibu: Prisma.FieldRef<"tbl_produto", 'String'>;
    readonly abv: Prisma.FieldRef<"tbl_produto", 'String'>;
}
/**
 * tbl_produto findUnique
 */
export type tbl_produtoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_produto
     */
    select?: Prisma.tbl_produtoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the tbl_produto
     */
    omit?: Prisma.tbl_produtoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.tbl_produtoInclude<ExtArgs> | null;
    /**
     * Filter, which tbl_produto to fetch.
     */
    where: Prisma.tbl_produtoWhereUniqueInput;
};
/**
 * tbl_produto findUniqueOrThrow
 */
export type tbl_produtoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_produto
     */
    select?: Prisma.tbl_produtoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the tbl_produto
     */
    omit?: Prisma.tbl_produtoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.tbl_produtoInclude<ExtArgs> | null;
    /**
     * Filter, which tbl_produto to fetch.
     */
    where: Prisma.tbl_produtoWhereUniqueInput;
};
/**
 * tbl_produto findFirst
 */
export type tbl_produtoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_produto
     */
    select?: Prisma.tbl_produtoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the tbl_produto
     */
    omit?: Prisma.tbl_produtoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.tbl_produtoInclude<ExtArgs> | null;
    /**
     * Filter, which tbl_produto to fetch.
     */
    where?: Prisma.tbl_produtoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tbl_produtos to fetch.
     */
    orderBy?: Prisma.tbl_produtoOrderByWithRelationInput | Prisma.tbl_produtoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for tbl_produtos.
     */
    cursor?: Prisma.tbl_produtoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tbl_produtos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tbl_produtos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of tbl_produtos.
     */
    distinct?: Prisma.Tbl_produtoScalarFieldEnum | Prisma.Tbl_produtoScalarFieldEnum[];
};
/**
 * tbl_produto findFirstOrThrow
 */
export type tbl_produtoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_produto
     */
    select?: Prisma.tbl_produtoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the tbl_produto
     */
    omit?: Prisma.tbl_produtoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.tbl_produtoInclude<ExtArgs> | null;
    /**
     * Filter, which tbl_produto to fetch.
     */
    where?: Prisma.tbl_produtoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tbl_produtos to fetch.
     */
    orderBy?: Prisma.tbl_produtoOrderByWithRelationInput | Prisma.tbl_produtoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for tbl_produtos.
     */
    cursor?: Prisma.tbl_produtoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tbl_produtos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tbl_produtos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of tbl_produtos.
     */
    distinct?: Prisma.Tbl_produtoScalarFieldEnum | Prisma.Tbl_produtoScalarFieldEnum[];
};
/**
 * tbl_produto findMany
 */
export type tbl_produtoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_produto
     */
    select?: Prisma.tbl_produtoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the tbl_produto
     */
    omit?: Prisma.tbl_produtoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.tbl_produtoInclude<ExtArgs> | null;
    /**
     * Filter, which tbl_produtos to fetch.
     */
    where?: Prisma.tbl_produtoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tbl_produtos to fetch.
     */
    orderBy?: Prisma.tbl_produtoOrderByWithRelationInput | Prisma.tbl_produtoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing tbl_produtos.
     */
    cursor?: Prisma.tbl_produtoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tbl_produtos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tbl_produtos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of tbl_produtos.
     */
    distinct?: Prisma.Tbl_produtoScalarFieldEnum | Prisma.Tbl_produtoScalarFieldEnum[];
};
/**
 * tbl_produto create
 */
export type tbl_produtoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_produto
     */
    select?: Prisma.tbl_produtoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the tbl_produto
     */
    omit?: Prisma.tbl_produtoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.tbl_produtoInclude<ExtArgs> | null;
    /**
     * The data needed to create a tbl_produto.
     */
    data?: Prisma.XOR<Prisma.tbl_produtoCreateInput, Prisma.tbl_produtoUncheckedCreateInput>;
};
/**
 * tbl_produto createMany
 */
export type tbl_produtoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many tbl_produtos.
     */
    data: Prisma.tbl_produtoCreateManyInput | Prisma.tbl_produtoCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * tbl_produto createManyAndReturn
 */
export type tbl_produtoCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_produto
     */
    select?: Prisma.tbl_produtoSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the tbl_produto
     */
    omit?: Prisma.tbl_produtoOmit<ExtArgs> | null;
    /**
     * The data used to create many tbl_produtos.
     */
    data: Prisma.tbl_produtoCreateManyInput | Prisma.tbl_produtoCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.tbl_produtoIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * tbl_produto update
 */
export type tbl_produtoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_produto
     */
    select?: Prisma.tbl_produtoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the tbl_produto
     */
    omit?: Prisma.tbl_produtoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.tbl_produtoInclude<ExtArgs> | null;
    /**
     * The data needed to update a tbl_produto.
     */
    data: Prisma.XOR<Prisma.tbl_produtoUpdateInput, Prisma.tbl_produtoUncheckedUpdateInput>;
    /**
     * Choose, which tbl_produto to update.
     */
    where: Prisma.tbl_produtoWhereUniqueInput;
};
/**
 * tbl_produto updateMany
 */
export type tbl_produtoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update tbl_produtos.
     */
    data: Prisma.XOR<Prisma.tbl_produtoUpdateManyMutationInput, Prisma.tbl_produtoUncheckedUpdateManyInput>;
    /**
     * Filter which tbl_produtos to update
     */
    where?: Prisma.tbl_produtoWhereInput;
    /**
     * Limit how many tbl_produtos to update.
     */
    limit?: number;
};
/**
 * tbl_produto updateManyAndReturn
 */
export type tbl_produtoUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_produto
     */
    select?: Prisma.tbl_produtoSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the tbl_produto
     */
    omit?: Prisma.tbl_produtoOmit<ExtArgs> | null;
    /**
     * The data used to update tbl_produtos.
     */
    data: Prisma.XOR<Prisma.tbl_produtoUpdateManyMutationInput, Prisma.tbl_produtoUncheckedUpdateManyInput>;
    /**
     * Filter which tbl_produtos to update
     */
    where?: Prisma.tbl_produtoWhereInput;
    /**
     * Limit how many tbl_produtos to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.tbl_produtoIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * tbl_produto upsert
 */
export type tbl_produtoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_produto
     */
    select?: Prisma.tbl_produtoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the tbl_produto
     */
    omit?: Prisma.tbl_produtoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.tbl_produtoInclude<ExtArgs> | null;
    /**
     * The filter to search for the tbl_produto to update in case it exists.
     */
    where: Prisma.tbl_produtoWhereUniqueInput;
    /**
     * In case the tbl_produto found by the `where` argument doesn't exist, create a new tbl_produto with this data.
     */
    create: Prisma.XOR<Prisma.tbl_produtoCreateInput, Prisma.tbl_produtoUncheckedCreateInput>;
    /**
     * In case the tbl_produto was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.tbl_produtoUpdateInput, Prisma.tbl_produtoUncheckedUpdateInput>;
};
/**
 * tbl_produto delete
 */
export type tbl_produtoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_produto
     */
    select?: Prisma.tbl_produtoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the tbl_produto
     */
    omit?: Prisma.tbl_produtoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.tbl_produtoInclude<ExtArgs> | null;
    /**
     * Filter which tbl_produto to delete.
     */
    where: Prisma.tbl_produtoWhereUniqueInput;
};
/**
 * tbl_produto deleteMany
 */
export type tbl_produtoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_produtos to delete
     */
    where?: Prisma.tbl_produtoWhereInput;
    /**
     * Limit how many tbl_produtos to delete.
     */
    limit?: number;
};
/**
 * tbl_produto.rel_fornecedor_produto
 */
export type tbl_produto$rel_fornecedor_produtoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rel_fornecedor_produto
     */
    select?: Prisma.rel_fornecedor_produtoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the rel_fornecedor_produto
     */
    omit?: Prisma.rel_fornecedor_produtoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.rel_fornecedor_produtoInclude<ExtArgs> | null;
    where?: Prisma.rel_fornecedor_produtoWhereInput;
    orderBy?: Prisma.rel_fornecedor_produtoOrderByWithRelationInput | Prisma.rel_fornecedor_produtoOrderByWithRelationInput[];
    cursor?: Prisma.rel_fornecedor_produtoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Rel_fornecedor_produtoScalarFieldEnum | Prisma.Rel_fornecedor_produtoScalarFieldEnum[];
};
/**
 * tbl_produto.rel_pedido_produto
 */
export type tbl_produto$rel_pedido_produtoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.rel_pedido_produtoWhereInput;
    orderBy?: Prisma.rel_pedido_produtoOrderByWithRelationInput | Prisma.rel_pedido_produtoOrderByWithRelationInput[];
    cursor?: Prisma.rel_pedido_produtoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Rel_pedido_produtoScalarFieldEnum | Prisma.Rel_pedido_produtoScalarFieldEnum[];
};
/**
 * tbl_produto.rel_produto_ingrediente
 */
export type tbl_produto$rel_produto_ingredienteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rel_produto_ingrediente
     */
    select?: Prisma.rel_produto_ingredienteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the rel_produto_ingrediente
     */
    omit?: Prisma.rel_produto_ingredienteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.rel_produto_ingredienteInclude<ExtArgs> | null;
    where?: Prisma.rel_produto_ingredienteWhereInput;
    orderBy?: Prisma.rel_produto_ingredienteOrderByWithRelationInput | Prisma.rel_produto_ingredienteOrderByWithRelationInput[];
    cursor?: Prisma.rel_produto_ingredienteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Rel_produto_ingredienteScalarFieldEnum | Prisma.Rel_produto_ingredienteScalarFieldEnum[];
};
/**
 * tbl_produto.tbl_tipo_produto
 */
export type tbl_produto$tbl_tipo_produtoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_tipo_produto
     */
    select?: Prisma.tbl_tipo_produtoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the tbl_tipo_produto
     */
    omit?: Prisma.tbl_tipo_produtoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.tbl_tipo_produtoInclude<ExtArgs> | null;
    where?: Prisma.tbl_tipo_produtoWhereInput;
};
/**
 * tbl_produto without action
 */
export type tbl_produtoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_produto
     */
    select?: Prisma.tbl_produtoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the tbl_produto
     */
    omit?: Prisma.tbl_produtoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.tbl_produtoInclude<ExtArgs> | null;
};
//# sourceMappingURL=tbl_produto.d.ts.map