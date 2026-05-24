import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.ts";
/**
 * Model rel_fornecedor_produto
 *
 */
export type rel_fornecedor_produtoModel = runtime.Types.Result.DefaultSelection<Prisma.$rel_fornecedor_produtoPayload>;
export type AggregateRel_fornecedor_produto = {
    _count: Rel_fornecedor_produtoCountAggregateOutputType | null;
    _avg: Rel_fornecedor_produtoAvgAggregateOutputType | null;
    _sum: Rel_fornecedor_produtoSumAggregateOutputType | null;
    _min: Rel_fornecedor_produtoMinAggregateOutputType | null;
    _max: Rel_fornecedor_produtoMaxAggregateOutputType | null;
};
export type Rel_fornecedor_produtoAvgAggregateOutputType = {
    fornecedor_id: number | null;
    produto_id: number | null;
    valor_fornecimento: runtime.Decimal | null;
    quantidade: number | null;
};
export type Rel_fornecedor_produtoSumAggregateOutputType = {
    fornecedor_id: number | null;
    produto_id: number | null;
    valor_fornecimento: runtime.Decimal | null;
    quantidade: number | null;
};
export type Rel_fornecedor_produtoMinAggregateOutputType = {
    fornecedor_id: number | null;
    produto_id: number | null;
    data_hora_fornecimento: Date | null;
    valor_fornecimento: runtime.Decimal | null;
    quantidade: number | null;
};
export type Rel_fornecedor_produtoMaxAggregateOutputType = {
    fornecedor_id: number | null;
    produto_id: number | null;
    data_hora_fornecimento: Date | null;
    valor_fornecimento: runtime.Decimal | null;
    quantidade: number | null;
};
export type Rel_fornecedor_produtoCountAggregateOutputType = {
    fornecedor_id: number;
    produto_id: number;
    data_hora_fornecimento: number;
    valor_fornecimento: number;
    quantidade: number;
    _all: number;
};
export type Rel_fornecedor_produtoAvgAggregateInputType = {
    fornecedor_id?: true;
    produto_id?: true;
    valor_fornecimento?: true;
    quantidade?: true;
};
export type Rel_fornecedor_produtoSumAggregateInputType = {
    fornecedor_id?: true;
    produto_id?: true;
    valor_fornecimento?: true;
    quantidade?: true;
};
export type Rel_fornecedor_produtoMinAggregateInputType = {
    fornecedor_id?: true;
    produto_id?: true;
    data_hora_fornecimento?: true;
    valor_fornecimento?: true;
    quantidade?: true;
};
export type Rel_fornecedor_produtoMaxAggregateInputType = {
    fornecedor_id?: true;
    produto_id?: true;
    data_hora_fornecimento?: true;
    valor_fornecimento?: true;
    quantidade?: true;
};
export type Rel_fornecedor_produtoCountAggregateInputType = {
    fornecedor_id?: true;
    produto_id?: true;
    data_hora_fornecimento?: true;
    valor_fornecimento?: true;
    quantidade?: true;
    _all?: true;
};
export type Rel_fornecedor_produtoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which rel_fornecedor_produto to aggregate.
     */
    where?: Prisma.rel_fornecedor_produtoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of rel_fornecedor_produtos to fetch.
     */
    orderBy?: Prisma.rel_fornecedor_produtoOrderByWithRelationInput | Prisma.rel_fornecedor_produtoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.rel_fornecedor_produtoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` rel_fornecedor_produtos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` rel_fornecedor_produtos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned rel_fornecedor_produtos
    **/
    _count?: true | Rel_fornecedor_produtoCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: Rel_fornecedor_produtoAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: Rel_fornecedor_produtoSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: Rel_fornecedor_produtoMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: Rel_fornecedor_produtoMaxAggregateInputType;
};
export type GetRel_fornecedor_produtoAggregateType<T extends Rel_fornecedor_produtoAggregateArgs> = {
    [P in keyof T & keyof AggregateRel_fornecedor_produto]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRel_fornecedor_produto[P]> : Prisma.GetScalarType<T[P], AggregateRel_fornecedor_produto[P]>;
};
export type rel_fornecedor_produtoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.rel_fornecedor_produtoWhereInput;
    orderBy?: Prisma.rel_fornecedor_produtoOrderByWithAggregationInput | Prisma.rel_fornecedor_produtoOrderByWithAggregationInput[];
    by: Prisma.Rel_fornecedor_produtoScalarFieldEnum[] | Prisma.Rel_fornecedor_produtoScalarFieldEnum;
    having?: Prisma.rel_fornecedor_produtoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Rel_fornecedor_produtoCountAggregateInputType | true;
    _avg?: Rel_fornecedor_produtoAvgAggregateInputType;
    _sum?: Rel_fornecedor_produtoSumAggregateInputType;
    _min?: Rel_fornecedor_produtoMinAggregateInputType;
    _max?: Rel_fornecedor_produtoMaxAggregateInputType;
};
export type Rel_fornecedor_produtoGroupByOutputType = {
    fornecedor_id: number;
    produto_id: number;
    data_hora_fornecimento: Date;
    valor_fornecimento: runtime.Decimal | null;
    quantidade: number | null;
    _count: Rel_fornecedor_produtoCountAggregateOutputType | null;
    _avg: Rel_fornecedor_produtoAvgAggregateOutputType | null;
    _sum: Rel_fornecedor_produtoSumAggregateOutputType | null;
    _min: Rel_fornecedor_produtoMinAggregateOutputType | null;
    _max: Rel_fornecedor_produtoMaxAggregateOutputType | null;
};
export type GetRel_fornecedor_produtoGroupByPayload<T extends rel_fornecedor_produtoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Rel_fornecedor_produtoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Rel_fornecedor_produtoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Rel_fornecedor_produtoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Rel_fornecedor_produtoGroupByOutputType[P]>;
}>>;
export type rel_fornecedor_produtoWhereInput = {
    AND?: Prisma.rel_fornecedor_produtoWhereInput | Prisma.rel_fornecedor_produtoWhereInput[];
    OR?: Prisma.rel_fornecedor_produtoWhereInput[];
    NOT?: Prisma.rel_fornecedor_produtoWhereInput | Prisma.rel_fornecedor_produtoWhereInput[];
    fornecedor_id?: Prisma.IntFilter<"rel_fornecedor_produto"> | number;
    produto_id?: Prisma.IntFilter<"rel_fornecedor_produto"> | number;
    data_hora_fornecimento?: Prisma.DateTimeFilter<"rel_fornecedor_produto"> | Date | string;
    valor_fornecimento?: Prisma.DecimalNullableFilter<"rel_fornecedor_produto"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    quantidade?: Prisma.IntNullableFilter<"rel_fornecedor_produto"> | number | null;
    tbl_fornecedor?: Prisma.XOR<Prisma.Tbl_fornecedorScalarRelationFilter, Prisma.tbl_fornecedorWhereInput>;
    tbl_produto?: Prisma.XOR<Prisma.Tbl_produtoScalarRelationFilter, Prisma.tbl_produtoWhereInput>;
};
export type rel_fornecedor_produtoOrderByWithRelationInput = {
    fornecedor_id?: Prisma.SortOrder;
    produto_id?: Prisma.SortOrder;
    data_hora_fornecimento?: Prisma.SortOrder;
    valor_fornecimento?: Prisma.SortOrderInput | Prisma.SortOrder;
    quantidade?: Prisma.SortOrderInput | Prisma.SortOrder;
    tbl_fornecedor?: Prisma.tbl_fornecedorOrderByWithRelationInput;
    tbl_produto?: Prisma.tbl_produtoOrderByWithRelationInput;
};
export type rel_fornecedor_produtoWhereUniqueInput = Prisma.AtLeast<{
    fornecedor_id_produto_id_data_hora_fornecimento?: Prisma.rel_fornecedor_produtoFornecedor_idProduto_idData_hora_fornecimentoCompoundUniqueInput;
    AND?: Prisma.rel_fornecedor_produtoWhereInput | Prisma.rel_fornecedor_produtoWhereInput[];
    OR?: Prisma.rel_fornecedor_produtoWhereInput[];
    NOT?: Prisma.rel_fornecedor_produtoWhereInput | Prisma.rel_fornecedor_produtoWhereInput[];
    fornecedor_id?: Prisma.IntFilter<"rel_fornecedor_produto"> | number;
    produto_id?: Prisma.IntFilter<"rel_fornecedor_produto"> | number;
    data_hora_fornecimento?: Prisma.DateTimeFilter<"rel_fornecedor_produto"> | Date | string;
    valor_fornecimento?: Prisma.DecimalNullableFilter<"rel_fornecedor_produto"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    quantidade?: Prisma.IntNullableFilter<"rel_fornecedor_produto"> | number | null;
    tbl_fornecedor?: Prisma.XOR<Prisma.Tbl_fornecedorScalarRelationFilter, Prisma.tbl_fornecedorWhereInput>;
    tbl_produto?: Prisma.XOR<Prisma.Tbl_produtoScalarRelationFilter, Prisma.tbl_produtoWhereInput>;
}, "fornecedor_id_produto_id_data_hora_fornecimento">;
export type rel_fornecedor_produtoOrderByWithAggregationInput = {
    fornecedor_id?: Prisma.SortOrder;
    produto_id?: Prisma.SortOrder;
    data_hora_fornecimento?: Prisma.SortOrder;
    valor_fornecimento?: Prisma.SortOrderInput | Prisma.SortOrder;
    quantidade?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.rel_fornecedor_produtoCountOrderByAggregateInput;
    _avg?: Prisma.rel_fornecedor_produtoAvgOrderByAggregateInput;
    _max?: Prisma.rel_fornecedor_produtoMaxOrderByAggregateInput;
    _min?: Prisma.rel_fornecedor_produtoMinOrderByAggregateInput;
    _sum?: Prisma.rel_fornecedor_produtoSumOrderByAggregateInput;
};
export type rel_fornecedor_produtoScalarWhereWithAggregatesInput = {
    AND?: Prisma.rel_fornecedor_produtoScalarWhereWithAggregatesInput | Prisma.rel_fornecedor_produtoScalarWhereWithAggregatesInput[];
    OR?: Prisma.rel_fornecedor_produtoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.rel_fornecedor_produtoScalarWhereWithAggregatesInput | Prisma.rel_fornecedor_produtoScalarWhereWithAggregatesInput[];
    fornecedor_id?: Prisma.IntWithAggregatesFilter<"rel_fornecedor_produto"> | number;
    produto_id?: Prisma.IntWithAggregatesFilter<"rel_fornecedor_produto"> | number;
    data_hora_fornecimento?: Prisma.DateTimeWithAggregatesFilter<"rel_fornecedor_produto"> | Date | string;
    valor_fornecimento?: Prisma.DecimalNullableWithAggregatesFilter<"rel_fornecedor_produto"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    quantidade?: Prisma.IntNullableWithAggregatesFilter<"rel_fornecedor_produto"> | number | null;
};
export type rel_fornecedor_produtoCreateInput = {
    data_hora_fornecimento: Date | string;
    valor_fornecimento?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    quantidade?: number | null;
    tbl_fornecedor?: Prisma.tbl_fornecedorCreateNestedOneWithoutRel_fornecedor_produtoInput;
    tbl_produto?: Prisma.tbl_produtoCreateNestedOneWithoutRel_fornecedor_produtoInput;
};
export type rel_fornecedor_produtoUncheckedCreateInput = {
    fornecedor_id?: number;
    produto_id?: number;
    data_hora_fornecimento: Date | string;
    valor_fornecimento?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    quantidade?: number | null;
};
export type rel_fornecedor_produtoUpdateInput = {
    data_hora_fornecimento?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    valor_fornecimento?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    quantidade?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    tbl_fornecedor?: Prisma.tbl_fornecedorUpdateOneRequiredWithoutRel_fornecedor_produtoNestedInput;
    tbl_produto?: Prisma.tbl_produtoUpdateOneRequiredWithoutRel_fornecedor_produtoNestedInput;
};
export type rel_fornecedor_produtoUncheckedUpdateInput = {
    fornecedor_id?: Prisma.IntFieldUpdateOperationsInput | number;
    produto_id?: Prisma.IntFieldUpdateOperationsInput | number;
    data_hora_fornecimento?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    valor_fornecimento?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    quantidade?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type rel_fornecedor_produtoCreateManyInput = {
    fornecedor_id?: number;
    produto_id?: number;
    data_hora_fornecimento: Date | string;
    valor_fornecimento?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    quantidade?: number | null;
};
export type rel_fornecedor_produtoUpdateManyMutationInput = {
    data_hora_fornecimento?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    valor_fornecimento?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    quantidade?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type rel_fornecedor_produtoUncheckedUpdateManyInput = {
    fornecedor_id?: Prisma.IntFieldUpdateOperationsInput | number;
    produto_id?: Prisma.IntFieldUpdateOperationsInput | number;
    data_hora_fornecimento?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    valor_fornecimento?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    quantidade?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type rel_fornecedor_produtoFornecedor_idProduto_idData_hora_fornecimentoCompoundUniqueInput = {
    fornecedor_id: number;
    produto_id: number;
    data_hora_fornecimento: Date | string;
};
export type rel_fornecedor_produtoCountOrderByAggregateInput = {
    fornecedor_id?: Prisma.SortOrder;
    produto_id?: Prisma.SortOrder;
    data_hora_fornecimento?: Prisma.SortOrder;
    valor_fornecimento?: Prisma.SortOrder;
    quantidade?: Prisma.SortOrder;
};
export type rel_fornecedor_produtoAvgOrderByAggregateInput = {
    fornecedor_id?: Prisma.SortOrder;
    produto_id?: Prisma.SortOrder;
    valor_fornecimento?: Prisma.SortOrder;
    quantidade?: Prisma.SortOrder;
};
export type rel_fornecedor_produtoMaxOrderByAggregateInput = {
    fornecedor_id?: Prisma.SortOrder;
    produto_id?: Prisma.SortOrder;
    data_hora_fornecimento?: Prisma.SortOrder;
    valor_fornecimento?: Prisma.SortOrder;
    quantidade?: Prisma.SortOrder;
};
export type rel_fornecedor_produtoMinOrderByAggregateInput = {
    fornecedor_id?: Prisma.SortOrder;
    produto_id?: Prisma.SortOrder;
    data_hora_fornecimento?: Prisma.SortOrder;
    valor_fornecimento?: Prisma.SortOrder;
    quantidade?: Prisma.SortOrder;
};
export type rel_fornecedor_produtoSumOrderByAggregateInput = {
    fornecedor_id?: Prisma.SortOrder;
    produto_id?: Prisma.SortOrder;
    valor_fornecimento?: Prisma.SortOrder;
    quantidade?: Prisma.SortOrder;
};
export type Rel_fornecedor_produtoListRelationFilter = {
    every?: Prisma.rel_fornecedor_produtoWhereInput;
    some?: Prisma.rel_fornecedor_produtoWhereInput;
    none?: Prisma.rel_fornecedor_produtoWhereInput;
};
export type rel_fornecedor_produtoOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type rel_fornecedor_produtoCreateNestedManyWithoutTbl_fornecedorInput = {
    create?: Prisma.XOR<Prisma.rel_fornecedor_produtoCreateWithoutTbl_fornecedorInput, Prisma.rel_fornecedor_produtoUncheckedCreateWithoutTbl_fornecedorInput> | Prisma.rel_fornecedor_produtoCreateWithoutTbl_fornecedorInput[] | Prisma.rel_fornecedor_produtoUncheckedCreateWithoutTbl_fornecedorInput[];
    connectOrCreate?: Prisma.rel_fornecedor_produtoCreateOrConnectWithoutTbl_fornecedorInput | Prisma.rel_fornecedor_produtoCreateOrConnectWithoutTbl_fornecedorInput[];
    createMany?: Prisma.rel_fornecedor_produtoCreateManyTbl_fornecedorInputEnvelope;
    connect?: Prisma.rel_fornecedor_produtoWhereUniqueInput | Prisma.rel_fornecedor_produtoWhereUniqueInput[];
};
export type rel_fornecedor_produtoUncheckedCreateNestedManyWithoutTbl_fornecedorInput = {
    create?: Prisma.XOR<Prisma.rel_fornecedor_produtoCreateWithoutTbl_fornecedorInput, Prisma.rel_fornecedor_produtoUncheckedCreateWithoutTbl_fornecedorInput> | Prisma.rel_fornecedor_produtoCreateWithoutTbl_fornecedorInput[] | Prisma.rel_fornecedor_produtoUncheckedCreateWithoutTbl_fornecedorInput[];
    connectOrCreate?: Prisma.rel_fornecedor_produtoCreateOrConnectWithoutTbl_fornecedorInput | Prisma.rel_fornecedor_produtoCreateOrConnectWithoutTbl_fornecedorInput[];
    createMany?: Prisma.rel_fornecedor_produtoCreateManyTbl_fornecedorInputEnvelope;
    connect?: Prisma.rel_fornecedor_produtoWhereUniqueInput | Prisma.rel_fornecedor_produtoWhereUniqueInput[];
};
export type rel_fornecedor_produtoUpdateManyWithoutTbl_fornecedorNestedInput = {
    create?: Prisma.XOR<Prisma.rel_fornecedor_produtoCreateWithoutTbl_fornecedorInput, Prisma.rel_fornecedor_produtoUncheckedCreateWithoutTbl_fornecedorInput> | Prisma.rel_fornecedor_produtoCreateWithoutTbl_fornecedorInput[] | Prisma.rel_fornecedor_produtoUncheckedCreateWithoutTbl_fornecedorInput[];
    connectOrCreate?: Prisma.rel_fornecedor_produtoCreateOrConnectWithoutTbl_fornecedorInput | Prisma.rel_fornecedor_produtoCreateOrConnectWithoutTbl_fornecedorInput[];
    upsert?: Prisma.rel_fornecedor_produtoUpsertWithWhereUniqueWithoutTbl_fornecedorInput | Prisma.rel_fornecedor_produtoUpsertWithWhereUniqueWithoutTbl_fornecedorInput[];
    createMany?: Prisma.rel_fornecedor_produtoCreateManyTbl_fornecedorInputEnvelope;
    set?: Prisma.rel_fornecedor_produtoWhereUniqueInput | Prisma.rel_fornecedor_produtoWhereUniqueInput[];
    disconnect?: Prisma.rel_fornecedor_produtoWhereUniqueInput | Prisma.rel_fornecedor_produtoWhereUniqueInput[];
    delete?: Prisma.rel_fornecedor_produtoWhereUniqueInput | Prisma.rel_fornecedor_produtoWhereUniqueInput[];
    connect?: Prisma.rel_fornecedor_produtoWhereUniqueInput | Prisma.rel_fornecedor_produtoWhereUniqueInput[];
    update?: Prisma.rel_fornecedor_produtoUpdateWithWhereUniqueWithoutTbl_fornecedorInput | Prisma.rel_fornecedor_produtoUpdateWithWhereUniqueWithoutTbl_fornecedorInput[];
    updateMany?: Prisma.rel_fornecedor_produtoUpdateManyWithWhereWithoutTbl_fornecedorInput | Prisma.rel_fornecedor_produtoUpdateManyWithWhereWithoutTbl_fornecedorInput[];
    deleteMany?: Prisma.rel_fornecedor_produtoScalarWhereInput | Prisma.rel_fornecedor_produtoScalarWhereInput[];
};
export type rel_fornecedor_produtoUncheckedUpdateManyWithoutTbl_fornecedorNestedInput = {
    create?: Prisma.XOR<Prisma.rel_fornecedor_produtoCreateWithoutTbl_fornecedorInput, Prisma.rel_fornecedor_produtoUncheckedCreateWithoutTbl_fornecedorInput> | Prisma.rel_fornecedor_produtoCreateWithoutTbl_fornecedorInput[] | Prisma.rel_fornecedor_produtoUncheckedCreateWithoutTbl_fornecedorInput[];
    connectOrCreate?: Prisma.rel_fornecedor_produtoCreateOrConnectWithoutTbl_fornecedorInput | Prisma.rel_fornecedor_produtoCreateOrConnectWithoutTbl_fornecedorInput[];
    upsert?: Prisma.rel_fornecedor_produtoUpsertWithWhereUniqueWithoutTbl_fornecedorInput | Prisma.rel_fornecedor_produtoUpsertWithWhereUniqueWithoutTbl_fornecedorInput[];
    createMany?: Prisma.rel_fornecedor_produtoCreateManyTbl_fornecedorInputEnvelope;
    set?: Prisma.rel_fornecedor_produtoWhereUniqueInput | Prisma.rel_fornecedor_produtoWhereUniqueInput[];
    disconnect?: Prisma.rel_fornecedor_produtoWhereUniqueInput | Prisma.rel_fornecedor_produtoWhereUniqueInput[];
    delete?: Prisma.rel_fornecedor_produtoWhereUniqueInput | Prisma.rel_fornecedor_produtoWhereUniqueInput[];
    connect?: Prisma.rel_fornecedor_produtoWhereUniqueInput | Prisma.rel_fornecedor_produtoWhereUniqueInput[];
    update?: Prisma.rel_fornecedor_produtoUpdateWithWhereUniqueWithoutTbl_fornecedorInput | Prisma.rel_fornecedor_produtoUpdateWithWhereUniqueWithoutTbl_fornecedorInput[];
    updateMany?: Prisma.rel_fornecedor_produtoUpdateManyWithWhereWithoutTbl_fornecedorInput | Prisma.rel_fornecedor_produtoUpdateManyWithWhereWithoutTbl_fornecedorInput[];
    deleteMany?: Prisma.rel_fornecedor_produtoScalarWhereInput | Prisma.rel_fornecedor_produtoScalarWhereInput[];
};
export type rel_fornecedor_produtoCreateNestedManyWithoutTbl_produtoInput = {
    create?: Prisma.XOR<Prisma.rel_fornecedor_produtoCreateWithoutTbl_produtoInput, Prisma.rel_fornecedor_produtoUncheckedCreateWithoutTbl_produtoInput> | Prisma.rel_fornecedor_produtoCreateWithoutTbl_produtoInput[] | Prisma.rel_fornecedor_produtoUncheckedCreateWithoutTbl_produtoInput[];
    connectOrCreate?: Prisma.rel_fornecedor_produtoCreateOrConnectWithoutTbl_produtoInput | Prisma.rel_fornecedor_produtoCreateOrConnectWithoutTbl_produtoInput[];
    createMany?: Prisma.rel_fornecedor_produtoCreateManyTbl_produtoInputEnvelope;
    connect?: Prisma.rel_fornecedor_produtoWhereUniqueInput | Prisma.rel_fornecedor_produtoWhereUniqueInput[];
};
export type rel_fornecedor_produtoUncheckedCreateNestedManyWithoutTbl_produtoInput = {
    create?: Prisma.XOR<Prisma.rel_fornecedor_produtoCreateWithoutTbl_produtoInput, Prisma.rel_fornecedor_produtoUncheckedCreateWithoutTbl_produtoInput> | Prisma.rel_fornecedor_produtoCreateWithoutTbl_produtoInput[] | Prisma.rel_fornecedor_produtoUncheckedCreateWithoutTbl_produtoInput[];
    connectOrCreate?: Prisma.rel_fornecedor_produtoCreateOrConnectWithoutTbl_produtoInput | Prisma.rel_fornecedor_produtoCreateOrConnectWithoutTbl_produtoInput[];
    createMany?: Prisma.rel_fornecedor_produtoCreateManyTbl_produtoInputEnvelope;
    connect?: Prisma.rel_fornecedor_produtoWhereUniqueInput | Prisma.rel_fornecedor_produtoWhereUniqueInput[];
};
export type rel_fornecedor_produtoUpdateManyWithoutTbl_produtoNestedInput = {
    create?: Prisma.XOR<Prisma.rel_fornecedor_produtoCreateWithoutTbl_produtoInput, Prisma.rel_fornecedor_produtoUncheckedCreateWithoutTbl_produtoInput> | Prisma.rel_fornecedor_produtoCreateWithoutTbl_produtoInput[] | Prisma.rel_fornecedor_produtoUncheckedCreateWithoutTbl_produtoInput[];
    connectOrCreate?: Prisma.rel_fornecedor_produtoCreateOrConnectWithoutTbl_produtoInput | Prisma.rel_fornecedor_produtoCreateOrConnectWithoutTbl_produtoInput[];
    upsert?: Prisma.rel_fornecedor_produtoUpsertWithWhereUniqueWithoutTbl_produtoInput | Prisma.rel_fornecedor_produtoUpsertWithWhereUniqueWithoutTbl_produtoInput[];
    createMany?: Prisma.rel_fornecedor_produtoCreateManyTbl_produtoInputEnvelope;
    set?: Prisma.rel_fornecedor_produtoWhereUniqueInput | Prisma.rel_fornecedor_produtoWhereUniqueInput[];
    disconnect?: Prisma.rel_fornecedor_produtoWhereUniqueInput | Prisma.rel_fornecedor_produtoWhereUniqueInput[];
    delete?: Prisma.rel_fornecedor_produtoWhereUniqueInput | Prisma.rel_fornecedor_produtoWhereUniqueInput[];
    connect?: Prisma.rel_fornecedor_produtoWhereUniqueInput | Prisma.rel_fornecedor_produtoWhereUniqueInput[];
    update?: Prisma.rel_fornecedor_produtoUpdateWithWhereUniqueWithoutTbl_produtoInput | Prisma.rel_fornecedor_produtoUpdateWithWhereUniqueWithoutTbl_produtoInput[];
    updateMany?: Prisma.rel_fornecedor_produtoUpdateManyWithWhereWithoutTbl_produtoInput | Prisma.rel_fornecedor_produtoUpdateManyWithWhereWithoutTbl_produtoInput[];
    deleteMany?: Prisma.rel_fornecedor_produtoScalarWhereInput | Prisma.rel_fornecedor_produtoScalarWhereInput[];
};
export type rel_fornecedor_produtoUncheckedUpdateManyWithoutTbl_produtoNestedInput = {
    create?: Prisma.XOR<Prisma.rel_fornecedor_produtoCreateWithoutTbl_produtoInput, Prisma.rel_fornecedor_produtoUncheckedCreateWithoutTbl_produtoInput> | Prisma.rel_fornecedor_produtoCreateWithoutTbl_produtoInput[] | Prisma.rel_fornecedor_produtoUncheckedCreateWithoutTbl_produtoInput[];
    connectOrCreate?: Prisma.rel_fornecedor_produtoCreateOrConnectWithoutTbl_produtoInput | Prisma.rel_fornecedor_produtoCreateOrConnectWithoutTbl_produtoInput[];
    upsert?: Prisma.rel_fornecedor_produtoUpsertWithWhereUniqueWithoutTbl_produtoInput | Prisma.rel_fornecedor_produtoUpsertWithWhereUniqueWithoutTbl_produtoInput[];
    createMany?: Prisma.rel_fornecedor_produtoCreateManyTbl_produtoInputEnvelope;
    set?: Prisma.rel_fornecedor_produtoWhereUniqueInput | Prisma.rel_fornecedor_produtoWhereUniqueInput[];
    disconnect?: Prisma.rel_fornecedor_produtoWhereUniqueInput | Prisma.rel_fornecedor_produtoWhereUniqueInput[];
    delete?: Prisma.rel_fornecedor_produtoWhereUniqueInput | Prisma.rel_fornecedor_produtoWhereUniqueInput[];
    connect?: Prisma.rel_fornecedor_produtoWhereUniqueInput | Prisma.rel_fornecedor_produtoWhereUniqueInput[];
    update?: Prisma.rel_fornecedor_produtoUpdateWithWhereUniqueWithoutTbl_produtoInput | Prisma.rel_fornecedor_produtoUpdateWithWhereUniqueWithoutTbl_produtoInput[];
    updateMany?: Prisma.rel_fornecedor_produtoUpdateManyWithWhereWithoutTbl_produtoInput | Prisma.rel_fornecedor_produtoUpdateManyWithWhereWithoutTbl_produtoInput[];
    deleteMany?: Prisma.rel_fornecedor_produtoScalarWhereInput | Prisma.rel_fornecedor_produtoScalarWhereInput[];
};
export type rel_fornecedor_produtoCreateWithoutTbl_fornecedorInput = {
    data_hora_fornecimento: Date | string;
    valor_fornecimento?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    quantidade?: number | null;
    tbl_produto?: Prisma.tbl_produtoCreateNestedOneWithoutRel_fornecedor_produtoInput;
};
export type rel_fornecedor_produtoUncheckedCreateWithoutTbl_fornecedorInput = {
    produto_id?: number;
    data_hora_fornecimento: Date | string;
    valor_fornecimento?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    quantidade?: number | null;
};
export type rel_fornecedor_produtoCreateOrConnectWithoutTbl_fornecedorInput = {
    where: Prisma.rel_fornecedor_produtoWhereUniqueInput;
    create: Prisma.XOR<Prisma.rel_fornecedor_produtoCreateWithoutTbl_fornecedorInput, Prisma.rel_fornecedor_produtoUncheckedCreateWithoutTbl_fornecedorInput>;
};
export type rel_fornecedor_produtoCreateManyTbl_fornecedorInputEnvelope = {
    data: Prisma.rel_fornecedor_produtoCreateManyTbl_fornecedorInput | Prisma.rel_fornecedor_produtoCreateManyTbl_fornecedorInput[];
    skipDuplicates?: boolean;
};
export type rel_fornecedor_produtoUpsertWithWhereUniqueWithoutTbl_fornecedorInput = {
    where: Prisma.rel_fornecedor_produtoWhereUniqueInput;
    update: Prisma.XOR<Prisma.rel_fornecedor_produtoUpdateWithoutTbl_fornecedorInput, Prisma.rel_fornecedor_produtoUncheckedUpdateWithoutTbl_fornecedorInput>;
    create: Prisma.XOR<Prisma.rel_fornecedor_produtoCreateWithoutTbl_fornecedorInput, Prisma.rel_fornecedor_produtoUncheckedCreateWithoutTbl_fornecedorInput>;
};
export type rel_fornecedor_produtoUpdateWithWhereUniqueWithoutTbl_fornecedorInput = {
    where: Prisma.rel_fornecedor_produtoWhereUniqueInput;
    data: Prisma.XOR<Prisma.rel_fornecedor_produtoUpdateWithoutTbl_fornecedorInput, Prisma.rel_fornecedor_produtoUncheckedUpdateWithoutTbl_fornecedorInput>;
};
export type rel_fornecedor_produtoUpdateManyWithWhereWithoutTbl_fornecedorInput = {
    where: Prisma.rel_fornecedor_produtoScalarWhereInput;
    data: Prisma.XOR<Prisma.rel_fornecedor_produtoUpdateManyMutationInput, Prisma.rel_fornecedor_produtoUncheckedUpdateManyWithoutTbl_fornecedorInput>;
};
export type rel_fornecedor_produtoScalarWhereInput = {
    AND?: Prisma.rel_fornecedor_produtoScalarWhereInput | Prisma.rel_fornecedor_produtoScalarWhereInput[];
    OR?: Prisma.rel_fornecedor_produtoScalarWhereInput[];
    NOT?: Prisma.rel_fornecedor_produtoScalarWhereInput | Prisma.rel_fornecedor_produtoScalarWhereInput[];
    fornecedor_id?: Prisma.IntFilter<"rel_fornecedor_produto"> | number;
    produto_id?: Prisma.IntFilter<"rel_fornecedor_produto"> | number;
    data_hora_fornecimento?: Prisma.DateTimeFilter<"rel_fornecedor_produto"> | Date | string;
    valor_fornecimento?: Prisma.DecimalNullableFilter<"rel_fornecedor_produto"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    quantidade?: Prisma.IntNullableFilter<"rel_fornecedor_produto"> | number | null;
};
export type rel_fornecedor_produtoCreateWithoutTbl_produtoInput = {
    data_hora_fornecimento: Date | string;
    valor_fornecimento?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    quantidade?: number | null;
    tbl_fornecedor?: Prisma.tbl_fornecedorCreateNestedOneWithoutRel_fornecedor_produtoInput;
};
export type rel_fornecedor_produtoUncheckedCreateWithoutTbl_produtoInput = {
    fornecedor_id?: number;
    data_hora_fornecimento: Date | string;
    valor_fornecimento?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    quantidade?: number | null;
};
export type rel_fornecedor_produtoCreateOrConnectWithoutTbl_produtoInput = {
    where: Prisma.rel_fornecedor_produtoWhereUniqueInput;
    create: Prisma.XOR<Prisma.rel_fornecedor_produtoCreateWithoutTbl_produtoInput, Prisma.rel_fornecedor_produtoUncheckedCreateWithoutTbl_produtoInput>;
};
export type rel_fornecedor_produtoCreateManyTbl_produtoInputEnvelope = {
    data: Prisma.rel_fornecedor_produtoCreateManyTbl_produtoInput | Prisma.rel_fornecedor_produtoCreateManyTbl_produtoInput[];
    skipDuplicates?: boolean;
};
export type rel_fornecedor_produtoUpsertWithWhereUniqueWithoutTbl_produtoInput = {
    where: Prisma.rel_fornecedor_produtoWhereUniqueInput;
    update: Prisma.XOR<Prisma.rel_fornecedor_produtoUpdateWithoutTbl_produtoInput, Prisma.rel_fornecedor_produtoUncheckedUpdateWithoutTbl_produtoInput>;
    create: Prisma.XOR<Prisma.rel_fornecedor_produtoCreateWithoutTbl_produtoInput, Prisma.rel_fornecedor_produtoUncheckedCreateWithoutTbl_produtoInput>;
};
export type rel_fornecedor_produtoUpdateWithWhereUniqueWithoutTbl_produtoInput = {
    where: Prisma.rel_fornecedor_produtoWhereUniqueInput;
    data: Prisma.XOR<Prisma.rel_fornecedor_produtoUpdateWithoutTbl_produtoInput, Prisma.rel_fornecedor_produtoUncheckedUpdateWithoutTbl_produtoInput>;
};
export type rel_fornecedor_produtoUpdateManyWithWhereWithoutTbl_produtoInput = {
    where: Prisma.rel_fornecedor_produtoScalarWhereInput;
    data: Prisma.XOR<Prisma.rel_fornecedor_produtoUpdateManyMutationInput, Prisma.rel_fornecedor_produtoUncheckedUpdateManyWithoutTbl_produtoInput>;
};
export type rel_fornecedor_produtoCreateManyTbl_fornecedorInput = {
    produto_id?: number;
    data_hora_fornecimento: Date | string;
    valor_fornecimento?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    quantidade?: number | null;
};
export type rel_fornecedor_produtoUpdateWithoutTbl_fornecedorInput = {
    data_hora_fornecimento?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    valor_fornecimento?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    quantidade?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    tbl_produto?: Prisma.tbl_produtoUpdateOneRequiredWithoutRel_fornecedor_produtoNestedInput;
};
export type rel_fornecedor_produtoUncheckedUpdateWithoutTbl_fornecedorInput = {
    produto_id?: Prisma.IntFieldUpdateOperationsInput | number;
    data_hora_fornecimento?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    valor_fornecimento?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    quantidade?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type rel_fornecedor_produtoUncheckedUpdateManyWithoutTbl_fornecedorInput = {
    produto_id?: Prisma.IntFieldUpdateOperationsInput | number;
    data_hora_fornecimento?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    valor_fornecimento?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    quantidade?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type rel_fornecedor_produtoCreateManyTbl_produtoInput = {
    fornecedor_id?: number;
    data_hora_fornecimento: Date | string;
    valor_fornecimento?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    quantidade?: number | null;
};
export type rel_fornecedor_produtoUpdateWithoutTbl_produtoInput = {
    data_hora_fornecimento?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    valor_fornecimento?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    quantidade?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    tbl_fornecedor?: Prisma.tbl_fornecedorUpdateOneRequiredWithoutRel_fornecedor_produtoNestedInput;
};
export type rel_fornecedor_produtoUncheckedUpdateWithoutTbl_produtoInput = {
    fornecedor_id?: Prisma.IntFieldUpdateOperationsInput | number;
    data_hora_fornecimento?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    valor_fornecimento?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    quantidade?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type rel_fornecedor_produtoUncheckedUpdateManyWithoutTbl_produtoInput = {
    fornecedor_id?: Prisma.IntFieldUpdateOperationsInput | number;
    data_hora_fornecimento?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    valor_fornecimento?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    quantidade?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type rel_fornecedor_produtoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    fornecedor_id?: boolean;
    produto_id?: boolean;
    data_hora_fornecimento?: boolean;
    valor_fornecimento?: boolean;
    quantidade?: boolean;
    tbl_fornecedor?: boolean | Prisma.tbl_fornecedorDefaultArgs<ExtArgs>;
    tbl_produto?: boolean | Prisma.tbl_produtoDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["rel_fornecedor_produto"]>;
export type rel_fornecedor_produtoSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    fornecedor_id?: boolean;
    produto_id?: boolean;
    data_hora_fornecimento?: boolean;
    valor_fornecimento?: boolean;
    quantidade?: boolean;
    tbl_fornecedor?: boolean | Prisma.tbl_fornecedorDefaultArgs<ExtArgs>;
    tbl_produto?: boolean | Prisma.tbl_produtoDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["rel_fornecedor_produto"]>;
export type rel_fornecedor_produtoSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    fornecedor_id?: boolean;
    produto_id?: boolean;
    data_hora_fornecimento?: boolean;
    valor_fornecimento?: boolean;
    quantidade?: boolean;
    tbl_fornecedor?: boolean | Prisma.tbl_fornecedorDefaultArgs<ExtArgs>;
    tbl_produto?: boolean | Prisma.tbl_produtoDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["rel_fornecedor_produto"]>;
export type rel_fornecedor_produtoSelectScalar = {
    fornecedor_id?: boolean;
    produto_id?: boolean;
    data_hora_fornecimento?: boolean;
    valor_fornecimento?: boolean;
    quantidade?: boolean;
};
export type rel_fornecedor_produtoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"fornecedor_id" | "produto_id" | "data_hora_fornecimento" | "valor_fornecimento" | "quantidade", ExtArgs["result"]["rel_fornecedor_produto"]>;
export type rel_fornecedor_produtoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tbl_fornecedor?: boolean | Prisma.tbl_fornecedorDefaultArgs<ExtArgs>;
    tbl_produto?: boolean | Prisma.tbl_produtoDefaultArgs<ExtArgs>;
};
export type rel_fornecedor_produtoIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tbl_fornecedor?: boolean | Prisma.tbl_fornecedorDefaultArgs<ExtArgs>;
    tbl_produto?: boolean | Prisma.tbl_produtoDefaultArgs<ExtArgs>;
};
export type rel_fornecedor_produtoIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tbl_fornecedor?: boolean | Prisma.tbl_fornecedorDefaultArgs<ExtArgs>;
    tbl_produto?: boolean | Prisma.tbl_produtoDefaultArgs<ExtArgs>;
};
export type $rel_fornecedor_produtoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "rel_fornecedor_produto";
    objects: {
        tbl_fornecedor: Prisma.$tbl_fornecedorPayload<ExtArgs>;
        tbl_produto: Prisma.$tbl_produtoPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        fornecedor_id: number;
        produto_id: number;
        data_hora_fornecimento: Date;
        valor_fornecimento: runtime.Decimal | null;
        quantidade: number | null;
    }, ExtArgs["result"]["rel_fornecedor_produto"]>;
    composites: {};
};
export type rel_fornecedor_produtoGetPayload<S extends boolean | null | undefined | rel_fornecedor_produtoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$rel_fornecedor_produtoPayload, S>;
export type rel_fornecedor_produtoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<rel_fornecedor_produtoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Rel_fornecedor_produtoCountAggregateInputType | true;
};
export interface rel_fornecedor_produtoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['rel_fornecedor_produto'];
        meta: {
            name: 'rel_fornecedor_produto';
        };
    };
    /**
     * Find zero or one Rel_fornecedor_produto that matches the filter.
     * @param {rel_fornecedor_produtoFindUniqueArgs} args - Arguments to find a Rel_fornecedor_produto
     * @example
     * // Get one Rel_fornecedor_produto
     * const rel_fornecedor_produto = await prisma.rel_fornecedor_produto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends rel_fornecedor_produtoFindUniqueArgs>(args: Prisma.SelectSubset<T, rel_fornecedor_produtoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__rel_fornecedor_produtoClient<runtime.Types.Result.GetResult<Prisma.$rel_fornecedor_produtoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Rel_fornecedor_produto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {rel_fornecedor_produtoFindUniqueOrThrowArgs} args - Arguments to find a Rel_fornecedor_produto
     * @example
     * // Get one Rel_fornecedor_produto
     * const rel_fornecedor_produto = await prisma.rel_fornecedor_produto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends rel_fornecedor_produtoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, rel_fornecedor_produtoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__rel_fornecedor_produtoClient<runtime.Types.Result.GetResult<Prisma.$rel_fornecedor_produtoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Rel_fornecedor_produto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rel_fornecedor_produtoFindFirstArgs} args - Arguments to find a Rel_fornecedor_produto
     * @example
     * // Get one Rel_fornecedor_produto
     * const rel_fornecedor_produto = await prisma.rel_fornecedor_produto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends rel_fornecedor_produtoFindFirstArgs>(args?: Prisma.SelectSubset<T, rel_fornecedor_produtoFindFirstArgs<ExtArgs>>): Prisma.Prisma__rel_fornecedor_produtoClient<runtime.Types.Result.GetResult<Prisma.$rel_fornecedor_produtoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Rel_fornecedor_produto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rel_fornecedor_produtoFindFirstOrThrowArgs} args - Arguments to find a Rel_fornecedor_produto
     * @example
     * // Get one Rel_fornecedor_produto
     * const rel_fornecedor_produto = await prisma.rel_fornecedor_produto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends rel_fornecedor_produtoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, rel_fornecedor_produtoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__rel_fornecedor_produtoClient<runtime.Types.Result.GetResult<Prisma.$rel_fornecedor_produtoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Rel_fornecedor_produtos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rel_fornecedor_produtoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rel_fornecedor_produtos
     * const rel_fornecedor_produtos = await prisma.rel_fornecedor_produto.findMany()
     *
     * // Get first 10 Rel_fornecedor_produtos
     * const rel_fornecedor_produtos = await prisma.rel_fornecedor_produto.findMany({ take: 10 })
     *
     * // Only select the `fornecedor_id`
     * const rel_fornecedor_produtoWithFornecedor_idOnly = await prisma.rel_fornecedor_produto.findMany({ select: { fornecedor_id: true } })
     *
     */
    findMany<T extends rel_fornecedor_produtoFindManyArgs>(args?: Prisma.SelectSubset<T, rel_fornecedor_produtoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$rel_fornecedor_produtoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Rel_fornecedor_produto.
     * @param {rel_fornecedor_produtoCreateArgs} args - Arguments to create a Rel_fornecedor_produto.
     * @example
     * // Create one Rel_fornecedor_produto
     * const Rel_fornecedor_produto = await prisma.rel_fornecedor_produto.create({
     *   data: {
     *     // ... data to create a Rel_fornecedor_produto
     *   }
     * })
     *
     */
    create<T extends rel_fornecedor_produtoCreateArgs>(args: Prisma.SelectSubset<T, rel_fornecedor_produtoCreateArgs<ExtArgs>>): Prisma.Prisma__rel_fornecedor_produtoClient<runtime.Types.Result.GetResult<Prisma.$rel_fornecedor_produtoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Rel_fornecedor_produtos.
     * @param {rel_fornecedor_produtoCreateManyArgs} args - Arguments to create many Rel_fornecedor_produtos.
     * @example
     * // Create many Rel_fornecedor_produtos
     * const rel_fornecedor_produto = await prisma.rel_fornecedor_produto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends rel_fornecedor_produtoCreateManyArgs>(args?: Prisma.SelectSubset<T, rel_fornecedor_produtoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Rel_fornecedor_produtos and returns the data saved in the database.
     * @param {rel_fornecedor_produtoCreateManyAndReturnArgs} args - Arguments to create many Rel_fornecedor_produtos.
     * @example
     * // Create many Rel_fornecedor_produtos
     * const rel_fornecedor_produto = await prisma.rel_fornecedor_produto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Rel_fornecedor_produtos and only return the `fornecedor_id`
     * const rel_fornecedor_produtoWithFornecedor_idOnly = await prisma.rel_fornecedor_produto.createManyAndReturn({
     *   select: { fornecedor_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends rel_fornecedor_produtoCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, rel_fornecedor_produtoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$rel_fornecedor_produtoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Rel_fornecedor_produto.
     * @param {rel_fornecedor_produtoDeleteArgs} args - Arguments to delete one Rel_fornecedor_produto.
     * @example
     * // Delete one Rel_fornecedor_produto
     * const Rel_fornecedor_produto = await prisma.rel_fornecedor_produto.delete({
     *   where: {
     *     // ... filter to delete one Rel_fornecedor_produto
     *   }
     * })
     *
     */
    delete<T extends rel_fornecedor_produtoDeleteArgs>(args: Prisma.SelectSubset<T, rel_fornecedor_produtoDeleteArgs<ExtArgs>>): Prisma.Prisma__rel_fornecedor_produtoClient<runtime.Types.Result.GetResult<Prisma.$rel_fornecedor_produtoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Rel_fornecedor_produto.
     * @param {rel_fornecedor_produtoUpdateArgs} args - Arguments to update one Rel_fornecedor_produto.
     * @example
     * // Update one Rel_fornecedor_produto
     * const rel_fornecedor_produto = await prisma.rel_fornecedor_produto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends rel_fornecedor_produtoUpdateArgs>(args: Prisma.SelectSubset<T, rel_fornecedor_produtoUpdateArgs<ExtArgs>>): Prisma.Prisma__rel_fornecedor_produtoClient<runtime.Types.Result.GetResult<Prisma.$rel_fornecedor_produtoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Rel_fornecedor_produtos.
     * @param {rel_fornecedor_produtoDeleteManyArgs} args - Arguments to filter Rel_fornecedor_produtos to delete.
     * @example
     * // Delete a few Rel_fornecedor_produtos
     * const { count } = await prisma.rel_fornecedor_produto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends rel_fornecedor_produtoDeleteManyArgs>(args?: Prisma.SelectSubset<T, rel_fornecedor_produtoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Rel_fornecedor_produtos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rel_fornecedor_produtoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rel_fornecedor_produtos
     * const rel_fornecedor_produto = await prisma.rel_fornecedor_produto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends rel_fornecedor_produtoUpdateManyArgs>(args: Prisma.SelectSubset<T, rel_fornecedor_produtoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Rel_fornecedor_produtos and returns the data updated in the database.
     * @param {rel_fornecedor_produtoUpdateManyAndReturnArgs} args - Arguments to update many Rel_fornecedor_produtos.
     * @example
     * // Update many Rel_fornecedor_produtos
     * const rel_fornecedor_produto = await prisma.rel_fornecedor_produto.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Rel_fornecedor_produtos and only return the `fornecedor_id`
     * const rel_fornecedor_produtoWithFornecedor_idOnly = await prisma.rel_fornecedor_produto.updateManyAndReturn({
     *   select: { fornecedor_id: true },
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
    updateManyAndReturn<T extends rel_fornecedor_produtoUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, rel_fornecedor_produtoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$rel_fornecedor_produtoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Rel_fornecedor_produto.
     * @param {rel_fornecedor_produtoUpsertArgs} args - Arguments to update or create a Rel_fornecedor_produto.
     * @example
     * // Update or create a Rel_fornecedor_produto
     * const rel_fornecedor_produto = await prisma.rel_fornecedor_produto.upsert({
     *   create: {
     *     // ... data to create a Rel_fornecedor_produto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rel_fornecedor_produto we want to update
     *   }
     * })
     */
    upsert<T extends rel_fornecedor_produtoUpsertArgs>(args: Prisma.SelectSubset<T, rel_fornecedor_produtoUpsertArgs<ExtArgs>>): Prisma.Prisma__rel_fornecedor_produtoClient<runtime.Types.Result.GetResult<Prisma.$rel_fornecedor_produtoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Rel_fornecedor_produtos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rel_fornecedor_produtoCountArgs} args - Arguments to filter Rel_fornecedor_produtos to count.
     * @example
     * // Count the number of Rel_fornecedor_produtos
     * const count = await prisma.rel_fornecedor_produto.count({
     *   where: {
     *     // ... the filter for the Rel_fornecedor_produtos we want to count
     *   }
     * })
    **/
    count<T extends rel_fornecedor_produtoCountArgs>(args?: Prisma.Subset<T, rel_fornecedor_produtoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Rel_fornecedor_produtoCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Rel_fornecedor_produto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Rel_fornecedor_produtoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Rel_fornecedor_produtoAggregateArgs>(args: Prisma.Subset<T, Rel_fornecedor_produtoAggregateArgs>): Prisma.PrismaPromise<GetRel_fornecedor_produtoAggregateType<T>>;
    /**
     * Group by Rel_fornecedor_produto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rel_fornecedor_produtoGroupByArgs} args - Group by arguments.
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
    groupBy<T extends rel_fornecedor_produtoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: rel_fornecedor_produtoGroupByArgs['orderBy'];
    } : {
        orderBy?: rel_fornecedor_produtoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, rel_fornecedor_produtoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRel_fornecedor_produtoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the rel_fornecedor_produto model
     */
    readonly fields: rel_fornecedor_produtoFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for rel_fornecedor_produto.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__rel_fornecedor_produtoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    tbl_fornecedor<T extends Prisma.tbl_fornecedorDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.tbl_fornecedorDefaultArgs<ExtArgs>>): Prisma.Prisma__tbl_fornecedorClient<runtime.Types.Result.GetResult<Prisma.$tbl_fornecedorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the rel_fornecedor_produto model
 */
export interface rel_fornecedor_produtoFieldRefs {
    readonly fornecedor_id: Prisma.FieldRef<"rel_fornecedor_produto", 'Int'>;
    readonly produto_id: Prisma.FieldRef<"rel_fornecedor_produto", 'Int'>;
    readonly data_hora_fornecimento: Prisma.FieldRef<"rel_fornecedor_produto", 'DateTime'>;
    readonly valor_fornecimento: Prisma.FieldRef<"rel_fornecedor_produto", 'Decimal'>;
    readonly quantidade: Prisma.FieldRef<"rel_fornecedor_produto", 'Int'>;
}
/**
 * rel_fornecedor_produto findUnique
 */
export type rel_fornecedor_produtoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which rel_fornecedor_produto to fetch.
     */
    where: Prisma.rel_fornecedor_produtoWhereUniqueInput;
};
/**
 * rel_fornecedor_produto findUniqueOrThrow
 */
export type rel_fornecedor_produtoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which rel_fornecedor_produto to fetch.
     */
    where: Prisma.rel_fornecedor_produtoWhereUniqueInput;
};
/**
 * rel_fornecedor_produto findFirst
 */
export type rel_fornecedor_produtoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which rel_fornecedor_produto to fetch.
     */
    where?: Prisma.rel_fornecedor_produtoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of rel_fornecedor_produtos to fetch.
     */
    orderBy?: Prisma.rel_fornecedor_produtoOrderByWithRelationInput | Prisma.rel_fornecedor_produtoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for rel_fornecedor_produtos.
     */
    cursor?: Prisma.rel_fornecedor_produtoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` rel_fornecedor_produtos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` rel_fornecedor_produtos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of rel_fornecedor_produtos.
     */
    distinct?: Prisma.Rel_fornecedor_produtoScalarFieldEnum | Prisma.Rel_fornecedor_produtoScalarFieldEnum[];
};
/**
 * rel_fornecedor_produto findFirstOrThrow
 */
export type rel_fornecedor_produtoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which rel_fornecedor_produto to fetch.
     */
    where?: Prisma.rel_fornecedor_produtoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of rel_fornecedor_produtos to fetch.
     */
    orderBy?: Prisma.rel_fornecedor_produtoOrderByWithRelationInput | Prisma.rel_fornecedor_produtoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for rel_fornecedor_produtos.
     */
    cursor?: Prisma.rel_fornecedor_produtoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` rel_fornecedor_produtos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` rel_fornecedor_produtos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of rel_fornecedor_produtos.
     */
    distinct?: Prisma.Rel_fornecedor_produtoScalarFieldEnum | Prisma.Rel_fornecedor_produtoScalarFieldEnum[];
};
/**
 * rel_fornecedor_produto findMany
 */
export type rel_fornecedor_produtoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which rel_fornecedor_produtos to fetch.
     */
    where?: Prisma.rel_fornecedor_produtoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of rel_fornecedor_produtos to fetch.
     */
    orderBy?: Prisma.rel_fornecedor_produtoOrderByWithRelationInput | Prisma.rel_fornecedor_produtoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing rel_fornecedor_produtos.
     */
    cursor?: Prisma.rel_fornecedor_produtoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` rel_fornecedor_produtos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` rel_fornecedor_produtos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of rel_fornecedor_produtos.
     */
    distinct?: Prisma.Rel_fornecedor_produtoScalarFieldEnum | Prisma.Rel_fornecedor_produtoScalarFieldEnum[];
};
/**
 * rel_fornecedor_produto create
 */
export type rel_fornecedor_produtoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a rel_fornecedor_produto.
     */
    data: Prisma.XOR<Prisma.rel_fornecedor_produtoCreateInput, Prisma.rel_fornecedor_produtoUncheckedCreateInput>;
};
/**
 * rel_fornecedor_produto createMany
 */
export type rel_fornecedor_produtoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many rel_fornecedor_produtos.
     */
    data: Prisma.rel_fornecedor_produtoCreateManyInput | Prisma.rel_fornecedor_produtoCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * rel_fornecedor_produto createManyAndReturn
 */
export type rel_fornecedor_produtoCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rel_fornecedor_produto
     */
    select?: Prisma.rel_fornecedor_produtoSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the rel_fornecedor_produto
     */
    omit?: Prisma.rel_fornecedor_produtoOmit<ExtArgs> | null;
    /**
     * The data used to create many rel_fornecedor_produtos.
     */
    data: Prisma.rel_fornecedor_produtoCreateManyInput | Prisma.rel_fornecedor_produtoCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.rel_fornecedor_produtoIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * rel_fornecedor_produto update
 */
export type rel_fornecedor_produtoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a rel_fornecedor_produto.
     */
    data: Prisma.XOR<Prisma.rel_fornecedor_produtoUpdateInput, Prisma.rel_fornecedor_produtoUncheckedUpdateInput>;
    /**
     * Choose, which rel_fornecedor_produto to update.
     */
    where: Prisma.rel_fornecedor_produtoWhereUniqueInput;
};
/**
 * rel_fornecedor_produto updateMany
 */
export type rel_fornecedor_produtoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update rel_fornecedor_produtos.
     */
    data: Prisma.XOR<Prisma.rel_fornecedor_produtoUpdateManyMutationInput, Prisma.rel_fornecedor_produtoUncheckedUpdateManyInput>;
    /**
     * Filter which rel_fornecedor_produtos to update
     */
    where?: Prisma.rel_fornecedor_produtoWhereInput;
    /**
     * Limit how many rel_fornecedor_produtos to update.
     */
    limit?: number;
};
/**
 * rel_fornecedor_produto updateManyAndReturn
 */
export type rel_fornecedor_produtoUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rel_fornecedor_produto
     */
    select?: Prisma.rel_fornecedor_produtoSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the rel_fornecedor_produto
     */
    omit?: Prisma.rel_fornecedor_produtoOmit<ExtArgs> | null;
    /**
     * The data used to update rel_fornecedor_produtos.
     */
    data: Prisma.XOR<Prisma.rel_fornecedor_produtoUpdateManyMutationInput, Prisma.rel_fornecedor_produtoUncheckedUpdateManyInput>;
    /**
     * Filter which rel_fornecedor_produtos to update
     */
    where?: Prisma.rel_fornecedor_produtoWhereInput;
    /**
     * Limit how many rel_fornecedor_produtos to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.rel_fornecedor_produtoIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * rel_fornecedor_produto upsert
 */
export type rel_fornecedor_produtoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the rel_fornecedor_produto to update in case it exists.
     */
    where: Prisma.rel_fornecedor_produtoWhereUniqueInput;
    /**
     * In case the rel_fornecedor_produto found by the `where` argument doesn't exist, create a new rel_fornecedor_produto with this data.
     */
    create: Prisma.XOR<Prisma.rel_fornecedor_produtoCreateInput, Prisma.rel_fornecedor_produtoUncheckedCreateInput>;
    /**
     * In case the rel_fornecedor_produto was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.rel_fornecedor_produtoUpdateInput, Prisma.rel_fornecedor_produtoUncheckedUpdateInput>;
};
/**
 * rel_fornecedor_produto delete
 */
export type rel_fornecedor_produtoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which rel_fornecedor_produto to delete.
     */
    where: Prisma.rel_fornecedor_produtoWhereUniqueInput;
};
/**
 * rel_fornecedor_produto deleteMany
 */
export type rel_fornecedor_produtoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which rel_fornecedor_produtos to delete
     */
    where?: Prisma.rel_fornecedor_produtoWhereInput;
    /**
     * Limit how many rel_fornecedor_produtos to delete.
     */
    limit?: number;
};
/**
 * rel_fornecedor_produto without action
 */
export type rel_fornecedor_produtoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
//# sourceMappingURL=rel_fornecedor_produto.d.ts.map