import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.ts";
/**
 * Model tbl_ingrediente
 *
 */
export type tbl_ingredienteModel = runtime.Types.Result.DefaultSelection<Prisma.$tbl_ingredientePayload>;
export type AggregateTbl_ingrediente = {
    _count: Tbl_ingredienteCountAggregateOutputType | null;
    _avg: Tbl_ingredienteAvgAggregateOutputType | null;
    _sum: Tbl_ingredienteSumAggregateOutputType | null;
    _min: Tbl_ingredienteMinAggregateOutputType | null;
    _max: Tbl_ingredienteMaxAggregateOutputType | null;
};
export type Tbl_ingredienteAvgAggregateOutputType = {
    ingrediente_id: number | null;
    tipo_ingrediente_id: number | null;
    valor_unitario: runtime.Decimal | null;
    quantidade_estoque: number | null;
};
export type Tbl_ingredienteSumAggregateOutputType = {
    ingrediente_id: number | null;
    tipo_ingrediente_id: number | null;
    valor_unitario: runtime.Decimal | null;
    quantidade_estoque: number | null;
};
export type Tbl_ingredienteMinAggregateOutputType = {
    ingrediente_id: number | null;
    tipo_ingrediente_id: number | null;
    nome: string | null;
    valor_unitario: runtime.Decimal | null;
    quantidade_estoque: number | null;
};
export type Tbl_ingredienteMaxAggregateOutputType = {
    ingrediente_id: number | null;
    tipo_ingrediente_id: number | null;
    nome: string | null;
    valor_unitario: runtime.Decimal | null;
    quantidade_estoque: number | null;
};
export type Tbl_ingredienteCountAggregateOutputType = {
    ingrediente_id: number;
    tipo_ingrediente_id: number;
    nome: number;
    valor_unitario: number;
    quantidade_estoque: number;
    _all: number;
};
export type Tbl_ingredienteAvgAggregateInputType = {
    ingrediente_id?: true;
    tipo_ingrediente_id?: true;
    valor_unitario?: true;
    quantidade_estoque?: true;
};
export type Tbl_ingredienteSumAggregateInputType = {
    ingrediente_id?: true;
    tipo_ingrediente_id?: true;
    valor_unitario?: true;
    quantidade_estoque?: true;
};
export type Tbl_ingredienteMinAggregateInputType = {
    ingrediente_id?: true;
    tipo_ingrediente_id?: true;
    nome?: true;
    valor_unitario?: true;
    quantidade_estoque?: true;
};
export type Tbl_ingredienteMaxAggregateInputType = {
    ingrediente_id?: true;
    tipo_ingrediente_id?: true;
    nome?: true;
    valor_unitario?: true;
    quantidade_estoque?: true;
};
export type Tbl_ingredienteCountAggregateInputType = {
    ingrediente_id?: true;
    tipo_ingrediente_id?: true;
    nome?: true;
    valor_unitario?: true;
    quantidade_estoque?: true;
    _all?: true;
};
export type Tbl_ingredienteAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_ingrediente to aggregate.
     */
    where?: Prisma.tbl_ingredienteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tbl_ingredientes to fetch.
     */
    orderBy?: Prisma.tbl_ingredienteOrderByWithRelationInput | Prisma.tbl_ingredienteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.tbl_ingredienteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tbl_ingredientes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tbl_ingredientes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned tbl_ingredientes
    **/
    _count?: true | Tbl_ingredienteCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: Tbl_ingredienteAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: Tbl_ingredienteSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: Tbl_ingredienteMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: Tbl_ingredienteMaxAggregateInputType;
};
export type GetTbl_ingredienteAggregateType<T extends Tbl_ingredienteAggregateArgs> = {
    [P in keyof T & keyof AggregateTbl_ingrediente]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTbl_ingrediente[P]> : Prisma.GetScalarType<T[P], AggregateTbl_ingrediente[P]>;
};
export type tbl_ingredienteGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.tbl_ingredienteWhereInput;
    orderBy?: Prisma.tbl_ingredienteOrderByWithAggregationInput | Prisma.tbl_ingredienteOrderByWithAggregationInput[];
    by: Prisma.Tbl_ingredienteScalarFieldEnum[] | Prisma.Tbl_ingredienteScalarFieldEnum;
    having?: Prisma.tbl_ingredienteScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Tbl_ingredienteCountAggregateInputType | true;
    _avg?: Tbl_ingredienteAvgAggregateInputType;
    _sum?: Tbl_ingredienteSumAggregateInputType;
    _min?: Tbl_ingredienteMinAggregateInputType;
    _max?: Tbl_ingredienteMaxAggregateInputType;
};
export type Tbl_ingredienteGroupByOutputType = {
    ingrediente_id: number;
    tipo_ingrediente_id: number;
    nome: string;
    valor_unitario: runtime.Decimal | null;
    quantidade_estoque: number | null;
    _count: Tbl_ingredienteCountAggregateOutputType | null;
    _avg: Tbl_ingredienteAvgAggregateOutputType | null;
    _sum: Tbl_ingredienteSumAggregateOutputType | null;
    _min: Tbl_ingredienteMinAggregateOutputType | null;
    _max: Tbl_ingredienteMaxAggregateOutputType | null;
};
export type GetTbl_ingredienteGroupByPayload<T extends tbl_ingredienteGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Tbl_ingredienteGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Tbl_ingredienteGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Tbl_ingredienteGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Tbl_ingredienteGroupByOutputType[P]>;
}>>;
export type tbl_ingredienteWhereInput = {
    AND?: Prisma.tbl_ingredienteWhereInput | Prisma.tbl_ingredienteWhereInput[];
    OR?: Prisma.tbl_ingredienteWhereInput[];
    NOT?: Prisma.tbl_ingredienteWhereInput | Prisma.tbl_ingredienteWhereInput[];
    ingrediente_id?: Prisma.IntFilter<"tbl_ingrediente"> | number;
    tipo_ingrediente_id?: Prisma.IntFilter<"tbl_ingrediente"> | number;
    nome?: Prisma.StringFilter<"tbl_ingrediente"> | string;
    valor_unitario?: Prisma.DecimalNullableFilter<"tbl_ingrediente"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    quantidade_estoque?: Prisma.IntNullableFilter<"tbl_ingrediente"> | number | null;
    rel_fornecedor_ingrediente?: Prisma.Rel_fornecedor_ingredienteListRelationFilter;
    rel_produto_ingrediente?: Prisma.Rel_produto_ingredienteListRelationFilter;
    tbl_tipo_ingrediente?: Prisma.XOR<Prisma.Tbl_tipo_ingredienteScalarRelationFilter, Prisma.tbl_tipo_ingredienteWhereInput>;
};
export type tbl_ingredienteOrderByWithRelationInput = {
    ingrediente_id?: Prisma.SortOrder;
    tipo_ingrediente_id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    valor_unitario?: Prisma.SortOrderInput | Prisma.SortOrder;
    quantidade_estoque?: Prisma.SortOrderInput | Prisma.SortOrder;
    rel_fornecedor_ingrediente?: Prisma.rel_fornecedor_ingredienteOrderByRelationAggregateInput;
    rel_produto_ingrediente?: Prisma.rel_produto_ingredienteOrderByRelationAggregateInput;
    tbl_tipo_ingrediente?: Prisma.tbl_tipo_ingredienteOrderByWithRelationInput;
};
export type tbl_ingredienteWhereUniqueInput = Prisma.AtLeast<{
    ingrediente_id?: number;
    AND?: Prisma.tbl_ingredienteWhereInput | Prisma.tbl_ingredienteWhereInput[];
    OR?: Prisma.tbl_ingredienteWhereInput[];
    NOT?: Prisma.tbl_ingredienteWhereInput | Prisma.tbl_ingredienteWhereInput[];
    tipo_ingrediente_id?: Prisma.IntFilter<"tbl_ingrediente"> | number;
    nome?: Prisma.StringFilter<"tbl_ingrediente"> | string;
    valor_unitario?: Prisma.DecimalNullableFilter<"tbl_ingrediente"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    quantidade_estoque?: Prisma.IntNullableFilter<"tbl_ingrediente"> | number | null;
    rel_fornecedor_ingrediente?: Prisma.Rel_fornecedor_ingredienteListRelationFilter;
    rel_produto_ingrediente?: Prisma.Rel_produto_ingredienteListRelationFilter;
    tbl_tipo_ingrediente?: Prisma.XOR<Prisma.Tbl_tipo_ingredienteScalarRelationFilter, Prisma.tbl_tipo_ingredienteWhereInput>;
}, "ingrediente_id">;
export type tbl_ingredienteOrderByWithAggregationInput = {
    ingrediente_id?: Prisma.SortOrder;
    tipo_ingrediente_id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    valor_unitario?: Prisma.SortOrderInput | Prisma.SortOrder;
    quantidade_estoque?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.tbl_ingredienteCountOrderByAggregateInput;
    _avg?: Prisma.tbl_ingredienteAvgOrderByAggregateInput;
    _max?: Prisma.tbl_ingredienteMaxOrderByAggregateInput;
    _min?: Prisma.tbl_ingredienteMinOrderByAggregateInput;
    _sum?: Prisma.tbl_ingredienteSumOrderByAggregateInput;
};
export type tbl_ingredienteScalarWhereWithAggregatesInput = {
    AND?: Prisma.tbl_ingredienteScalarWhereWithAggregatesInput | Prisma.tbl_ingredienteScalarWhereWithAggregatesInput[];
    OR?: Prisma.tbl_ingredienteScalarWhereWithAggregatesInput[];
    NOT?: Prisma.tbl_ingredienteScalarWhereWithAggregatesInput | Prisma.tbl_ingredienteScalarWhereWithAggregatesInput[];
    ingrediente_id?: Prisma.IntWithAggregatesFilter<"tbl_ingrediente"> | number;
    tipo_ingrediente_id?: Prisma.IntWithAggregatesFilter<"tbl_ingrediente"> | number;
    nome?: Prisma.StringWithAggregatesFilter<"tbl_ingrediente"> | string;
    valor_unitario?: Prisma.DecimalNullableWithAggregatesFilter<"tbl_ingrediente"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    quantidade_estoque?: Prisma.IntNullableWithAggregatesFilter<"tbl_ingrediente"> | number | null;
};
export type tbl_ingredienteCreateInput = {
    nome: string;
    valor_unitario?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    quantidade_estoque?: number | null;
    rel_fornecedor_ingrediente?: Prisma.rel_fornecedor_ingredienteCreateNestedManyWithoutTbl_ingredienteInput;
    rel_produto_ingrediente?: Prisma.rel_produto_ingredienteCreateNestedManyWithoutTbl_ingredienteInput;
    tbl_tipo_ingrediente: Prisma.tbl_tipo_ingredienteCreateNestedOneWithoutTbl_ingredienteInput;
};
export type tbl_ingredienteUncheckedCreateInput = {
    ingrediente_id?: number;
    tipo_ingrediente_id: number;
    nome: string;
    valor_unitario?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    quantidade_estoque?: number | null;
    rel_fornecedor_ingrediente?: Prisma.rel_fornecedor_ingredienteUncheckedCreateNestedManyWithoutTbl_ingredienteInput;
    rel_produto_ingrediente?: Prisma.rel_produto_ingredienteUncheckedCreateNestedManyWithoutTbl_ingredienteInput;
};
export type tbl_ingredienteUpdateInput = {
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    valor_unitario?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    quantidade_estoque?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    rel_fornecedor_ingrediente?: Prisma.rel_fornecedor_ingredienteUpdateManyWithoutTbl_ingredienteNestedInput;
    rel_produto_ingrediente?: Prisma.rel_produto_ingredienteUpdateManyWithoutTbl_ingredienteNestedInput;
    tbl_tipo_ingrediente?: Prisma.tbl_tipo_ingredienteUpdateOneRequiredWithoutTbl_ingredienteNestedInput;
};
export type tbl_ingredienteUncheckedUpdateInput = {
    ingrediente_id?: Prisma.IntFieldUpdateOperationsInput | number;
    tipo_ingrediente_id?: Prisma.IntFieldUpdateOperationsInput | number;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    valor_unitario?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    quantidade_estoque?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    rel_fornecedor_ingrediente?: Prisma.rel_fornecedor_ingredienteUncheckedUpdateManyWithoutTbl_ingredienteNestedInput;
    rel_produto_ingrediente?: Prisma.rel_produto_ingredienteUncheckedUpdateManyWithoutTbl_ingredienteNestedInput;
};
export type tbl_ingredienteCreateManyInput = {
    ingrediente_id?: number;
    tipo_ingrediente_id: number;
    nome: string;
    valor_unitario?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    quantidade_estoque?: number | null;
};
export type tbl_ingredienteUpdateManyMutationInput = {
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    valor_unitario?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    quantidade_estoque?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type tbl_ingredienteUncheckedUpdateManyInput = {
    ingrediente_id?: Prisma.IntFieldUpdateOperationsInput | number;
    tipo_ingrediente_id?: Prisma.IntFieldUpdateOperationsInput | number;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    valor_unitario?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    quantidade_estoque?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type Tbl_ingredienteScalarRelationFilter = {
    is?: Prisma.tbl_ingredienteWhereInput;
    isNot?: Prisma.tbl_ingredienteWhereInput;
};
export type tbl_ingredienteCountOrderByAggregateInput = {
    ingrediente_id?: Prisma.SortOrder;
    tipo_ingrediente_id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    valor_unitario?: Prisma.SortOrder;
    quantidade_estoque?: Prisma.SortOrder;
};
export type tbl_ingredienteAvgOrderByAggregateInput = {
    ingrediente_id?: Prisma.SortOrder;
    tipo_ingrediente_id?: Prisma.SortOrder;
    valor_unitario?: Prisma.SortOrder;
    quantidade_estoque?: Prisma.SortOrder;
};
export type tbl_ingredienteMaxOrderByAggregateInput = {
    ingrediente_id?: Prisma.SortOrder;
    tipo_ingrediente_id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    valor_unitario?: Prisma.SortOrder;
    quantidade_estoque?: Prisma.SortOrder;
};
export type tbl_ingredienteMinOrderByAggregateInput = {
    ingrediente_id?: Prisma.SortOrder;
    tipo_ingrediente_id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    valor_unitario?: Prisma.SortOrder;
    quantidade_estoque?: Prisma.SortOrder;
};
export type tbl_ingredienteSumOrderByAggregateInput = {
    ingrediente_id?: Prisma.SortOrder;
    tipo_ingrediente_id?: Prisma.SortOrder;
    valor_unitario?: Prisma.SortOrder;
    quantidade_estoque?: Prisma.SortOrder;
};
export type Tbl_ingredienteListRelationFilter = {
    every?: Prisma.tbl_ingredienteWhereInput;
    some?: Prisma.tbl_ingredienteWhereInput;
    none?: Prisma.tbl_ingredienteWhereInput;
};
export type tbl_ingredienteOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type tbl_ingredienteCreateNestedOneWithoutRel_fornecedor_ingredienteInput = {
    create?: Prisma.XOR<Prisma.tbl_ingredienteCreateWithoutRel_fornecedor_ingredienteInput, Prisma.tbl_ingredienteUncheckedCreateWithoutRel_fornecedor_ingredienteInput>;
    connectOrCreate?: Prisma.tbl_ingredienteCreateOrConnectWithoutRel_fornecedor_ingredienteInput;
    connect?: Prisma.tbl_ingredienteWhereUniqueInput;
};
export type tbl_ingredienteUpdateOneRequiredWithoutRel_fornecedor_ingredienteNestedInput = {
    create?: Prisma.XOR<Prisma.tbl_ingredienteCreateWithoutRel_fornecedor_ingredienteInput, Prisma.tbl_ingredienteUncheckedCreateWithoutRel_fornecedor_ingredienteInput>;
    connectOrCreate?: Prisma.tbl_ingredienteCreateOrConnectWithoutRel_fornecedor_ingredienteInput;
    upsert?: Prisma.tbl_ingredienteUpsertWithoutRel_fornecedor_ingredienteInput;
    connect?: Prisma.tbl_ingredienteWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.tbl_ingredienteUpdateToOneWithWhereWithoutRel_fornecedor_ingredienteInput, Prisma.tbl_ingredienteUpdateWithoutRel_fornecedor_ingredienteInput>, Prisma.tbl_ingredienteUncheckedUpdateWithoutRel_fornecedor_ingredienteInput>;
};
export type tbl_ingredienteCreateNestedOneWithoutRel_produto_ingredienteInput = {
    create?: Prisma.XOR<Prisma.tbl_ingredienteCreateWithoutRel_produto_ingredienteInput, Prisma.tbl_ingredienteUncheckedCreateWithoutRel_produto_ingredienteInput>;
    connectOrCreate?: Prisma.tbl_ingredienteCreateOrConnectWithoutRel_produto_ingredienteInput;
    connect?: Prisma.tbl_ingredienteWhereUniqueInput;
};
export type tbl_ingredienteUpdateOneRequiredWithoutRel_produto_ingredienteNestedInput = {
    create?: Prisma.XOR<Prisma.tbl_ingredienteCreateWithoutRel_produto_ingredienteInput, Prisma.tbl_ingredienteUncheckedCreateWithoutRel_produto_ingredienteInput>;
    connectOrCreate?: Prisma.tbl_ingredienteCreateOrConnectWithoutRel_produto_ingredienteInput;
    upsert?: Prisma.tbl_ingredienteUpsertWithoutRel_produto_ingredienteInput;
    connect?: Prisma.tbl_ingredienteWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.tbl_ingredienteUpdateToOneWithWhereWithoutRel_produto_ingredienteInput, Prisma.tbl_ingredienteUpdateWithoutRel_produto_ingredienteInput>, Prisma.tbl_ingredienteUncheckedUpdateWithoutRel_produto_ingredienteInput>;
};
export type NullableDecimalFieldUpdateOperationsInput = {
    set?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    increment?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    decrement?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    multiply?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    divide?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type tbl_ingredienteCreateNestedManyWithoutTbl_tipo_ingredienteInput = {
    create?: Prisma.XOR<Prisma.tbl_ingredienteCreateWithoutTbl_tipo_ingredienteInput, Prisma.tbl_ingredienteUncheckedCreateWithoutTbl_tipo_ingredienteInput> | Prisma.tbl_ingredienteCreateWithoutTbl_tipo_ingredienteInput[] | Prisma.tbl_ingredienteUncheckedCreateWithoutTbl_tipo_ingredienteInput[];
    connectOrCreate?: Prisma.tbl_ingredienteCreateOrConnectWithoutTbl_tipo_ingredienteInput | Prisma.tbl_ingredienteCreateOrConnectWithoutTbl_tipo_ingredienteInput[];
    createMany?: Prisma.tbl_ingredienteCreateManyTbl_tipo_ingredienteInputEnvelope;
    connect?: Prisma.tbl_ingredienteWhereUniqueInput | Prisma.tbl_ingredienteWhereUniqueInput[];
};
export type tbl_ingredienteUncheckedCreateNestedManyWithoutTbl_tipo_ingredienteInput = {
    create?: Prisma.XOR<Prisma.tbl_ingredienteCreateWithoutTbl_tipo_ingredienteInput, Prisma.tbl_ingredienteUncheckedCreateWithoutTbl_tipo_ingredienteInput> | Prisma.tbl_ingredienteCreateWithoutTbl_tipo_ingredienteInput[] | Prisma.tbl_ingredienteUncheckedCreateWithoutTbl_tipo_ingredienteInput[];
    connectOrCreate?: Prisma.tbl_ingredienteCreateOrConnectWithoutTbl_tipo_ingredienteInput | Prisma.tbl_ingredienteCreateOrConnectWithoutTbl_tipo_ingredienteInput[];
    createMany?: Prisma.tbl_ingredienteCreateManyTbl_tipo_ingredienteInputEnvelope;
    connect?: Prisma.tbl_ingredienteWhereUniqueInput | Prisma.tbl_ingredienteWhereUniqueInput[];
};
export type tbl_ingredienteUpdateManyWithoutTbl_tipo_ingredienteNestedInput = {
    create?: Prisma.XOR<Prisma.tbl_ingredienteCreateWithoutTbl_tipo_ingredienteInput, Prisma.tbl_ingredienteUncheckedCreateWithoutTbl_tipo_ingredienteInput> | Prisma.tbl_ingredienteCreateWithoutTbl_tipo_ingredienteInput[] | Prisma.tbl_ingredienteUncheckedCreateWithoutTbl_tipo_ingredienteInput[];
    connectOrCreate?: Prisma.tbl_ingredienteCreateOrConnectWithoutTbl_tipo_ingredienteInput | Prisma.tbl_ingredienteCreateOrConnectWithoutTbl_tipo_ingredienteInput[];
    upsert?: Prisma.tbl_ingredienteUpsertWithWhereUniqueWithoutTbl_tipo_ingredienteInput | Prisma.tbl_ingredienteUpsertWithWhereUniqueWithoutTbl_tipo_ingredienteInput[];
    createMany?: Prisma.tbl_ingredienteCreateManyTbl_tipo_ingredienteInputEnvelope;
    set?: Prisma.tbl_ingredienteWhereUniqueInput | Prisma.tbl_ingredienteWhereUniqueInput[];
    disconnect?: Prisma.tbl_ingredienteWhereUniqueInput | Prisma.tbl_ingredienteWhereUniqueInput[];
    delete?: Prisma.tbl_ingredienteWhereUniqueInput | Prisma.tbl_ingredienteWhereUniqueInput[];
    connect?: Prisma.tbl_ingredienteWhereUniqueInput | Prisma.tbl_ingredienteWhereUniqueInput[];
    update?: Prisma.tbl_ingredienteUpdateWithWhereUniqueWithoutTbl_tipo_ingredienteInput | Prisma.tbl_ingredienteUpdateWithWhereUniqueWithoutTbl_tipo_ingredienteInput[];
    updateMany?: Prisma.tbl_ingredienteUpdateManyWithWhereWithoutTbl_tipo_ingredienteInput | Prisma.tbl_ingredienteUpdateManyWithWhereWithoutTbl_tipo_ingredienteInput[];
    deleteMany?: Prisma.tbl_ingredienteScalarWhereInput | Prisma.tbl_ingredienteScalarWhereInput[];
};
export type tbl_ingredienteUncheckedUpdateManyWithoutTbl_tipo_ingredienteNestedInput = {
    create?: Prisma.XOR<Prisma.tbl_ingredienteCreateWithoutTbl_tipo_ingredienteInput, Prisma.tbl_ingredienteUncheckedCreateWithoutTbl_tipo_ingredienteInput> | Prisma.tbl_ingredienteCreateWithoutTbl_tipo_ingredienteInput[] | Prisma.tbl_ingredienteUncheckedCreateWithoutTbl_tipo_ingredienteInput[];
    connectOrCreate?: Prisma.tbl_ingredienteCreateOrConnectWithoutTbl_tipo_ingredienteInput | Prisma.tbl_ingredienteCreateOrConnectWithoutTbl_tipo_ingredienteInput[];
    upsert?: Prisma.tbl_ingredienteUpsertWithWhereUniqueWithoutTbl_tipo_ingredienteInput | Prisma.tbl_ingredienteUpsertWithWhereUniqueWithoutTbl_tipo_ingredienteInput[];
    createMany?: Prisma.tbl_ingredienteCreateManyTbl_tipo_ingredienteInputEnvelope;
    set?: Prisma.tbl_ingredienteWhereUniqueInput | Prisma.tbl_ingredienteWhereUniqueInput[];
    disconnect?: Prisma.tbl_ingredienteWhereUniqueInput | Prisma.tbl_ingredienteWhereUniqueInput[];
    delete?: Prisma.tbl_ingredienteWhereUniqueInput | Prisma.tbl_ingredienteWhereUniqueInput[];
    connect?: Prisma.tbl_ingredienteWhereUniqueInput | Prisma.tbl_ingredienteWhereUniqueInput[];
    update?: Prisma.tbl_ingredienteUpdateWithWhereUniqueWithoutTbl_tipo_ingredienteInput | Prisma.tbl_ingredienteUpdateWithWhereUniqueWithoutTbl_tipo_ingredienteInput[];
    updateMany?: Prisma.tbl_ingredienteUpdateManyWithWhereWithoutTbl_tipo_ingredienteInput | Prisma.tbl_ingredienteUpdateManyWithWhereWithoutTbl_tipo_ingredienteInput[];
    deleteMany?: Prisma.tbl_ingredienteScalarWhereInput | Prisma.tbl_ingredienteScalarWhereInput[];
};
export type tbl_ingredienteCreateWithoutRel_fornecedor_ingredienteInput = {
    nome: string;
    valor_unitario?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    quantidade_estoque?: number | null;
    rel_produto_ingrediente?: Prisma.rel_produto_ingredienteCreateNestedManyWithoutTbl_ingredienteInput;
    tbl_tipo_ingrediente: Prisma.tbl_tipo_ingredienteCreateNestedOneWithoutTbl_ingredienteInput;
};
export type tbl_ingredienteUncheckedCreateWithoutRel_fornecedor_ingredienteInput = {
    ingrediente_id?: number;
    tipo_ingrediente_id: number;
    nome: string;
    valor_unitario?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    quantidade_estoque?: number | null;
    rel_produto_ingrediente?: Prisma.rel_produto_ingredienteUncheckedCreateNestedManyWithoutTbl_ingredienteInput;
};
export type tbl_ingredienteCreateOrConnectWithoutRel_fornecedor_ingredienteInput = {
    where: Prisma.tbl_ingredienteWhereUniqueInput;
    create: Prisma.XOR<Prisma.tbl_ingredienteCreateWithoutRel_fornecedor_ingredienteInput, Prisma.tbl_ingredienteUncheckedCreateWithoutRel_fornecedor_ingredienteInput>;
};
export type tbl_ingredienteUpsertWithoutRel_fornecedor_ingredienteInput = {
    update: Prisma.XOR<Prisma.tbl_ingredienteUpdateWithoutRel_fornecedor_ingredienteInput, Prisma.tbl_ingredienteUncheckedUpdateWithoutRel_fornecedor_ingredienteInput>;
    create: Prisma.XOR<Prisma.tbl_ingredienteCreateWithoutRel_fornecedor_ingredienteInput, Prisma.tbl_ingredienteUncheckedCreateWithoutRel_fornecedor_ingredienteInput>;
    where?: Prisma.tbl_ingredienteWhereInput;
};
export type tbl_ingredienteUpdateToOneWithWhereWithoutRel_fornecedor_ingredienteInput = {
    where?: Prisma.tbl_ingredienteWhereInput;
    data: Prisma.XOR<Prisma.tbl_ingredienteUpdateWithoutRel_fornecedor_ingredienteInput, Prisma.tbl_ingredienteUncheckedUpdateWithoutRel_fornecedor_ingredienteInput>;
};
export type tbl_ingredienteUpdateWithoutRel_fornecedor_ingredienteInput = {
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    valor_unitario?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    quantidade_estoque?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    rel_produto_ingrediente?: Prisma.rel_produto_ingredienteUpdateManyWithoutTbl_ingredienteNestedInput;
    tbl_tipo_ingrediente?: Prisma.tbl_tipo_ingredienteUpdateOneRequiredWithoutTbl_ingredienteNestedInput;
};
export type tbl_ingredienteUncheckedUpdateWithoutRel_fornecedor_ingredienteInput = {
    ingrediente_id?: Prisma.IntFieldUpdateOperationsInput | number;
    tipo_ingrediente_id?: Prisma.IntFieldUpdateOperationsInput | number;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    valor_unitario?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    quantidade_estoque?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    rel_produto_ingrediente?: Prisma.rel_produto_ingredienteUncheckedUpdateManyWithoutTbl_ingredienteNestedInput;
};
export type tbl_ingredienteCreateWithoutRel_produto_ingredienteInput = {
    nome: string;
    valor_unitario?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    quantidade_estoque?: number | null;
    rel_fornecedor_ingrediente?: Prisma.rel_fornecedor_ingredienteCreateNestedManyWithoutTbl_ingredienteInput;
    tbl_tipo_ingrediente: Prisma.tbl_tipo_ingredienteCreateNestedOneWithoutTbl_ingredienteInput;
};
export type tbl_ingredienteUncheckedCreateWithoutRel_produto_ingredienteInput = {
    ingrediente_id?: number;
    tipo_ingrediente_id: number;
    nome: string;
    valor_unitario?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    quantidade_estoque?: number | null;
    rel_fornecedor_ingrediente?: Prisma.rel_fornecedor_ingredienteUncheckedCreateNestedManyWithoutTbl_ingredienteInput;
};
export type tbl_ingredienteCreateOrConnectWithoutRel_produto_ingredienteInput = {
    where: Prisma.tbl_ingredienteWhereUniqueInput;
    create: Prisma.XOR<Prisma.tbl_ingredienteCreateWithoutRel_produto_ingredienteInput, Prisma.tbl_ingredienteUncheckedCreateWithoutRel_produto_ingredienteInput>;
};
export type tbl_ingredienteUpsertWithoutRel_produto_ingredienteInput = {
    update: Prisma.XOR<Prisma.tbl_ingredienteUpdateWithoutRel_produto_ingredienteInput, Prisma.tbl_ingredienteUncheckedUpdateWithoutRel_produto_ingredienteInput>;
    create: Prisma.XOR<Prisma.tbl_ingredienteCreateWithoutRel_produto_ingredienteInput, Prisma.tbl_ingredienteUncheckedCreateWithoutRel_produto_ingredienteInput>;
    where?: Prisma.tbl_ingredienteWhereInput;
};
export type tbl_ingredienteUpdateToOneWithWhereWithoutRel_produto_ingredienteInput = {
    where?: Prisma.tbl_ingredienteWhereInput;
    data: Prisma.XOR<Prisma.tbl_ingredienteUpdateWithoutRel_produto_ingredienteInput, Prisma.tbl_ingredienteUncheckedUpdateWithoutRel_produto_ingredienteInput>;
};
export type tbl_ingredienteUpdateWithoutRel_produto_ingredienteInput = {
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    valor_unitario?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    quantidade_estoque?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    rel_fornecedor_ingrediente?: Prisma.rel_fornecedor_ingredienteUpdateManyWithoutTbl_ingredienteNestedInput;
    tbl_tipo_ingrediente?: Prisma.tbl_tipo_ingredienteUpdateOneRequiredWithoutTbl_ingredienteNestedInput;
};
export type tbl_ingredienteUncheckedUpdateWithoutRel_produto_ingredienteInput = {
    ingrediente_id?: Prisma.IntFieldUpdateOperationsInput | number;
    tipo_ingrediente_id?: Prisma.IntFieldUpdateOperationsInput | number;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    valor_unitario?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    quantidade_estoque?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    rel_fornecedor_ingrediente?: Prisma.rel_fornecedor_ingredienteUncheckedUpdateManyWithoutTbl_ingredienteNestedInput;
};
export type tbl_ingredienteCreateWithoutTbl_tipo_ingredienteInput = {
    nome: string;
    valor_unitario?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    quantidade_estoque?: number | null;
    rel_fornecedor_ingrediente?: Prisma.rel_fornecedor_ingredienteCreateNestedManyWithoutTbl_ingredienteInput;
    rel_produto_ingrediente?: Prisma.rel_produto_ingredienteCreateNestedManyWithoutTbl_ingredienteInput;
};
export type tbl_ingredienteUncheckedCreateWithoutTbl_tipo_ingredienteInput = {
    ingrediente_id?: number;
    nome: string;
    valor_unitario?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    quantidade_estoque?: number | null;
    rel_fornecedor_ingrediente?: Prisma.rel_fornecedor_ingredienteUncheckedCreateNestedManyWithoutTbl_ingredienteInput;
    rel_produto_ingrediente?: Prisma.rel_produto_ingredienteUncheckedCreateNestedManyWithoutTbl_ingredienteInput;
};
export type tbl_ingredienteCreateOrConnectWithoutTbl_tipo_ingredienteInput = {
    where: Prisma.tbl_ingredienteWhereUniqueInput;
    create: Prisma.XOR<Prisma.tbl_ingredienteCreateWithoutTbl_tipo_ingredienteInput, Prisma.tbl_ingredienteUncheckedCreateWithoutTbl_tipo_ingredienteInput>;
};
export type tbl_ingredienteCreateManyTbl_tipo_ingredienteInputEnvelope = {
    data: Prisma.tbl_ingredienteCreateManyTbl_tipo_ingredienteInput | Prisma.tbl_ingredienteCreateManyTbl_tipo_ingredienteInput[];
    skipDuplicates?: boolean;
};
export type tbl_ingredienteUpsertWithWhereUniqueWithoutTbl_tipo_ingredienteInput = {
    where: Prisma.tbl_ingredienteWhereUniqueInput;
    update: Prisma.XOR<Prisma.tbl_ingredienteUpdateWithoutTbl_tipo_ingredienteInput, Prisma.tbl_ingredienteUncheckedUpdateWithoutTbl_tipo_ingredienteInput>;
    create: Prisma.XOR<Prisma.tbl_ingredienteCreateWithoutTbl_tipo_ingredienteInput, Prisma.tbl_ingredienteUncheckedCreateWithoutTbl_tipo_ingredienteInput>;
};
export type tbl_ingredienteUpdateWithWhereUniqueWithoutTbl_tipo_ingredienteInput = {
    where: Prisma.tbl_ingredienteWhereUniqueInput;
    data: Prisma.XOR<Prisma.tbl_ingredienteUpdateWithoutTbl_tipo_ingredienteInput, Prisma.tbl_ingredienteUncheckedUpdateWithoutTbl_tipo_ingredienteInput>;
};
export type tbl_ingredienteUpdateManyWithWhereWithoutTbl_tipo_ingredienteInput = {
    where: Prisma.tbl_ingredienteScalarWhereInput;
    data: Prisma.XOR<Prisma.tbl_ingredienteUpdateManyMutationInput, Prisma.tbl_ingredienteUncheckedUpdateManyWithoutTbl_tipo_ingredienteInput>;
};
export type tbl_ingredienteScalarWhereInput = {
    AND?: Prisma.tbl_ingredienteScalarWhereInput | Prisma.tbl_ingredienteScalarWhereInput[];
    OR?: Prisma.tbl_ingredienteScalarWhereInput[];
    NOT?: Prisma.tbl_ingredienteScalarWhereInput | Prisma.tbl_ingredienteScalarWhereInput[];
    ingrediente_id?: Prisma.IntFilter<"tbl_ingrediente"> | number;
    tipo_ingrediente_id?: Prisma.IntFilter<"tbl_ingrediente"> | number;
    nome?: Prisma.StringFilter<"tbl_ingrediente"> | string;
    valor_unitario?: Prisma.DecimalNullableFilter<"tbl_ingrediente"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    quantidade_estoque?: Prisma.IntNullableFilter<"tbl_ingrediente"> | number | null;
};
export type tbl_ingredienteCreateManyTbl_tipo_ingredienteInput = {
    ingrediente_id?: number;
    nome: string;
    valor_unitario?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    quantidade_estoque?: number | null;
};
export type tbl_ingredienteUpdateWithoutTbl_tipo_ingredienteInput = {
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    valor_unitario?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    quantidade_estoque?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    rel_fornecedor_ingrediente?: Prisma.rel_fornecedor_ingredienteUpdateManyWithoutTbl_ingredienteNestedInput;
    rel_produto_ingrediente?: Prisma.rel_produto_ingredienteUpdateManyWithoutTbl_ingredienteNestedInput;
};
export type tbl_ingredienteUncheckedUpdateWithoutTbl_tipo_ingredienteInput = {
    ingrediente_id?: Prisma.IntFieldUpdateOperationsInput | number;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    valor_unitario?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    quantidade_estoque?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    rel_fornecedor_ingrediente?: Prisma.rel_fornecedor_ingredienteUncheckedUpdateManyWithoutTbl_ingredienteNestedInput;
    rel_produto_ingrediente?: Prisma.rel_produto_ingredienteUncheckedUpdateManyWithoutTbl_ingredienteNestedInput;
};
export type tbl_ingredienteUncheckedUpdateManyWithoutTbl_tipo_ingredienteInput = {
    ingrediente_id?: Prisma.IntFieldUpdateOperationsInput | number;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    valor_unitario?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    quantidade_estoque?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
/**
 * Count Type Tbl_ingredienteCountOutputType
 */
export type Tbl_ingredienteCountOutputType = {
    rel_fornecedor_ingrediente: number;
    rel_produto_ingrediente: number;
};
export type Tbl_ingredienteCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rel_fornecedor_ingrediente?: boolean | Tbl_ingredienteCountOutputTypeCountRel_fornecedor_ingredienteArgs;
    rel_produto_ingrediente?: boolean | Tbl_ingredienteCountOutputTypeCountRel_produto_ingredienteArgs;
};
/**
 * Tbl_ingredienteCountOutputType without action
 */
export type Tbl_ingredienteCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tbl_ingredienteCountOutputType
     */
    select?: Prisma.Tbl_ingredienteCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * Tbl_ingredienteCountOutputType without action
 */
export type Tbl_ingredienteCountOutputTypeCountRel_fornecedor_ingredienteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.rel_fornecedor_ingredienteWhereInput;
};
/**
 * Tbl_ingredienteCountOutputType without action
 */
export type Tbl_ingredienteCountOutputTypeCountRel_produto_ingredienteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.rel_produto_ingredienteWhereInput;
};
export type tbl_ingredienteSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    ingrediente_id?: boolean;
    tipo_ingrediente_id?: boolean;
    nome?: boolean;
    valor_unitario?: boolean;
    quantidade_estoque?: boolean;
    rel_fornecedor_ingrediente?: boolean | Prisma.tbl_ingrediente$rel_fornecedor_ingredienteArgs<ExtArgs>;
    rel_produto_ingrediente?: boolean | Prisma.tbl_ingrediente$rel_produto_ingredienteArgs<ExtArgs>;
    tbl_tipo_ingrediente?: boolean | Prisma.tbl_tipo_ingredienteDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.Tbl_ingredienteCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["tbl_ingrediente"]>;
export type tbl_ingredienteSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    ingrediente_id?: boolean;
    tipo_ingrediente_id?: boolean;
    nome?: boolean;
    valor_unitario?: boolean;
    quantidade_estoque?: boolean;
    tbl_tipo_ingrediente?: boolean | Prisma.tbl_tipo_ingredienteDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["tbl_ingrediente"]>;
export type tbl_ingredienteSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    ingrediente_id?: boolean;
    tipo_ingrediente_id?: boolean;
    nome?: boolean;
    valor_unitario?: boolean;
    quantidade_estoque?: boolean;
    tbl_tipo_ingrediente?: boolean | Prisma.tbl_tipo_ingredienteDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["tbl_ingrediente"]>;
export type tbl_ingredienteSelectScalar = {
    ingrediente_id?: boolean;
    tipo_ingrediente_id?: boolean;
    nome?: boolean;
    valor_unitario?: boolean;
    quantidade_estoque?: boolean;
};
export type tbl_ingredienteOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"ingrediente_id" | "tipo_ingrediente_id" | "nome" | "valor_unitario" | "quantidade_estoque", ExtArgs["result"]["tbl_ingrediente"]>;
export type tbl_ingredienteInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rel_fornecedor_ingrediente?: boolean | Prisma.tbl_ingrediente$rel_fornecedor_ingredienteArgs<ExtArgs>;
    rel_produto_ingrediente?: boolean | Prisma.tbl_ingrediente$rel_produto_ingredienteArgs<ExtArgs>;
    tbl_tipo_ingrediente?: boolean | Prisma.tbl_tipo_ingredienteDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.Tbl_ingredienteCountOutputTypeDefaultArgs<ExtArgs>;
};
export type tbl_ingredienteIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tbl_tipo_ingrediente?: boolean | Prisma.tbl_tipo_ingredienteDefaultArgs<ExtArgs>;
};
export type tbl_ingredienteIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tbl_tipo_ingrediente?: boolean | Prisma.tbl_tipo_ingredienteDefaultArgs<ExtArgs>;
};
export type $tbl_ingredientePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "tbl_ingrediente";
    objects: {
        rel_fornecedor_ingrediente: Prisma.$rel_fornecedor_ingredientePayload<ExtArgs>[];
        rel_produto_ingrediente: Prisma.$rel_produto_ingredientePayload<ExtArgs>[];
        tbl_tipo_ingrediente: Prisma.$tbl_tipo_ingredientePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        ingrediente_id: number;
        tipo_ingrediente_id: number;
        nome: string;
        valor_unitario: runtime.Decimal | null;
        quantidade_estoque: number | null;
    }, ExtArgs["result"]["tbl_ingrediente"]>;
    composites: {};
};
export type tbl_ingredienteGetPayload<S extends boolean | null | undefined | tbl_ingredienteDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$tbl_ingredientePayload, S>;
export type tbl_ingredienteCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<tbl_ingredienteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Tbl_ingredienteCountAggregateInputType | true;
};
export interface tbl_ingredienteDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['tbl_ingrediente'];
        meta: {
            name: 'tbl_ingrediente';
        };
    };
    /**
     * Find zero or one Tbl_ingrediente that matches the filter.
     * @param {tbl_ingredienteFindUniqueArgs} args - Arguments to find a Tbl_ingrediente
     * @example
     * // Get one Tbl_ingrediente
     * const tbl_ingrediente = await prisma.tbl_ingrediente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tbl_ingredienteFindUniqueArgs>(args: Prisma.SelectSubset<T, tbl_ingredienteFindUniqueArgs<ExtArgs>>): Prisma.Prisma__tbl_ingredienteClient<runtime.Types.Result.GetResult<Prisma.$tbl_ingredientePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Tbl_ingrediente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tbl_ingredienteFindUniqueOrThrowArgs} args - Arguments to find a Tbl_ingrediente
     * @example
     * // Get one Tbl_ingrediente
     * const tbl_ingrediente = await prisma.tbl_ingrediente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tbl_ingredienteFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, tbl_ingredienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__tbl_ingredienteClient<runtime.Types.Result.GetResult<Prisma.$tbl_ingredientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Tbl_ingrediente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_ingredienteFindFirstArgs} args - Arguments to find a Tbl_ingrediente
     * @example
     * // Get one Tbl_ingrediente
     * const tbl_ingrediente = await prisma.tbl_ingrediente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tbl_ingredienteFindFirstArgs>(args?: Prisma.SelectSubset<T, tbl_ingredienteFindFirstArgs<ExtArgs>>): Prisma.Prisma__tbl_ingredienteClient<runtime.Types.Result.GetResult<Prisma.$tbl_ingredientePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Tbl_ingrediente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_ingredienteFindFirstOrThrowArgs} args - Arguments to find a Tbl_ingrediente
     * @example
     * // Get one Tbl_ingrediente
     * const tbl_ingrediente = await prisma.tbl_ingrediente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tbl_ingredienteFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, tbl_ingredienteFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__tbl_ingredienteClient<runtime.Types.Result.GetResult<Prisma.$tbl_ingredientePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Tbl_ingredientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_ingredienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tbl_ingredientes
     * const tbl_ingredientes = await prisma.tbl_ingrediente.findMany()
     *
     * // Get first 10 Tbl_ingredientes
     * const tbl_ingredientes = await prisma.tbl_ingrediente.findMany({ take: 10 })
     *
     * // Only select the `ingrediente_id`
     * const tbl_ingredienteWithIngrediente_idOnly = await prisma.tbl_ingrediente.findMany({ select: { ingrediente_id: true } })
     *
     */
    findMany<T extends tbl_ingredienteFindManyArgs>(args?: Prisma.SelectSubset<T, tbl_ingredienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$tbl_ingredientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Tbl_ingrediente.
     * @param {tbl_ingredienteCreateArgs} args - Arguments to create a Tbl_ingrediente.
     * @example
     * // Create one Tbl_ingrediente
     * const Tbl_ingrediente = await prisma.tbl_ingrediente.create({
     *   data: {
     *     // ... data to create a Tbl_ingrediente
     *   }
     * })
     *
     */
    create<T extends tbl_ingredienteCreateArgs>(args: Prisma.SelectSubset<T, tbl_ingredienteCreateArgs<ExtArgs>>): Prisma.Prisma__tbl_ingredienteClient<runtime.Types.Result.GetResult<Prisma.$tbl_ingredientePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Tbl_ingredientes.
     * @param {tbl_ingredienteCreateManyArgs} args - Arguments to create many Tbl_ingredientes.
     * @example
     * // Create many Tbl_ingredientes
     * const tbl_ingrediente = await prisma.tbl_ingrediente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends tbl_ingredienteCreateManyArgs>(args?: Prisma.SelectSubset<T, tbl_ingredienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Tbl_ingredientes and returns the data saved in the database.
     * @param {tbl_ingredienteCreateManyAndReturnArgs} args - Arguments to create many Tbl_ingredientes.
     * @example
     * // Create many Tbl_ingredientes
     * const tbl_ingrediente = await prisma.tbl_ingrediente.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Tbl_ingredientes and only return the `ingrediente_id`
     * const tbl_ingredienteWithIngrediente_idOnly = await prisma.tbl_ingrediente.createManyAndReturn({
     *   select: { ingrediente_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends tbl_ingredienteCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, tbl_ingredienteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$tbl_ingredientePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Tbl_ingrediente.
     * @param {tbl_ingredienteDeleteArgs} args - Arguments to delete one Tbl_ingrediente.
     * @example
     * // Delete one Tbl_ingrediente
     * const Tbl_ingrediente = await prisma.tbl_ingrediente.delete({
     *   where: {
     *     // ... filter to delete one Tbl_ingrediente
     *   }
     * })
     *
     */
    delete<T extends tbl_ingredienteDeleteArgs>(args: Prisma.SelectSubset<T, tbl_ingredienteDeleteArgs<ExtArgs>>): Prisma.Prisma__tbl_ingredienteClient<runtime.Types.Result.GetResult<Prisma.$tbl_ingredientePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Tbl_ingrediente.
     * @param {tbl_ingredienteUpdateArgs} args - Arguments to update one Tbl_ingrediente.
     * @example
     * // Update one Tbl_ingrediente
     * const tbl_ingrediente = await prisma.tbl_ingrediente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends tbl_ingredienteUpdateArgs>(args: Prisma.SelectSubset<T, tbl_ingredienteUpdateArgs<ExtArgs>>): Prisma.Prisma__tbl_ingredienteClient<runtime.Types.Result.GetResult<Prisma.$tbl_ingredientePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Tbl_ingredientes.
     * @param {tbl_ingredienteDeleteManyArgs} args - Arguments to filter Tbl_ingredientes to delete.
     * @example
     * // Delete a few Tbl_ingredientes
     * const { count } = await prisma.tbl_ingrediente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends tbl_ingredienteDeleteManyArgs>(args?: Prisma.SelectSubset<T, tbl_ingredienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Tbl_ingredientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_ingredienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tbl_ingredientes
     * const tbl_ingrediente = await prisma.tbl_ingrediente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends tbl_ingredienteUpdateManyArgs>(args: Prisma.SelectSubset<T, tbl_ingredienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Tbl_ingredientes and returns the data updated in the database.
     * @param {tbl_ingredienteUpdateManyAndReturnArgs} args - Arguments to update many Tbl_ingredientes.
     * @example
     * // Update many Tbl_ingredientes
     * const tbl_ingrediente = await prisma.tbl_ingrediente.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Tbl_ingredientes and only return the `ingrediente_id`
     * const tbl_ingredienteWithIngrediente_idOnly = await prisma.tbl_ingrediente.updateManyAndReturn({
     *   select: { ingrediente_id: true },
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
    updateManyAndReturn<T extends tbl_ingredienteUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, tbl_ingredienteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$tbl_ingredientePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Tbl_ingrediente.
     * @param {tbl_ingredienteUpsertArgs} args - Arguments to update or create a Tbl_ingrediente.
     * @example
     * // Update or create a Tbl_ingrediente
     * const tbl_ingrediente = await prisma.tbl_ingrediente.upsert({
     *   create: {
     *     // ... data to create a Tbl_ingrediente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tbl_ingrediente we want to update
     *   }
     * })
     */
    upsert<T extends tbl_ingredienteUpsertArgs>(args: Prisma.SelectSubset<T, tbl_ingredienteUpsertArgs<ExtArgs>>): Prisma.Prisma__tbl_ingredienteClient<runtime.Types.Result.GetResult<Prisma.$tbl_ingredientePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Tbl_ingredientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_ingredienteCountArgs} args - Arguments to filter Tbl_ingredientes to count.
     * @example
     * // Count the number of Tbl_ingredientes
     * const count = await prisma.tbl_ingrediente.count({
     *   where: {
     *     // ... the filter for the Tbl_ingredientes we want to count
     *   }
     * })
    **/
    count<T extends tbl_ingredienteCountArgs>(args?: Prisma.Subset<T, tbl_ingredienteCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Tbl_ingredienteCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Tbl_ingrediente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tbl_ingredienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tbl_ingredienteAggregateArgs>(args: Prisma.Subset<T, Tbl_ingredienteAggregateArgs>): Prisma.PrismaPromise<GetTbl_ingredienteAggregateType<T>>;
    /**
     * Group by Tbl_ingrediente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_ingredienteGroupByArgs} args - Group by arguments.
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
    groupBy<T extends tbl_ingredienteGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: tbl_ingredienteGroupByArgs['orderBy'];
    } : {
        orderBy?: tbl_ingredienteGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, tbl_ingredienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTbl_ingredienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the tbl_ingrediente model
     */
    readonly fields: tbl_ingredienteFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for tbl_ingrediente.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__tbl_ingredienteClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    rel_fornecedor_ingrediente<T extends Prisma.tbl_ingrediente$rel_fornecedor_ingredienteArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.tbl_ingrediente$rel_fornecedor_ingredienteArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$rel_fornecedor_ingredientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    rel_produto_ingrediente<T extends Prisma.tbl_ingrediente$rel_produto_ingredienteArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.tbl_ingrediente$rel_produto_ingredienteArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$rel_produto_ingredientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    tbl_tipo_ingrediente<T extends Prisma.tbl_tipo_ingredienteDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.tbl_tipo_ingredienteDefaultArgs<ExtArgs>>): Prisma.Prisma__tbl_tipo_ingredienteClient<runtime.Types.Result.GetResult<Prisma.$tbl_tipo_ingredientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the tbl_ingrediente model
 */
export interface tbl_ingredienteFieldRefs {
    readonly ingrediente_id: Prisma.FieldRef<"tbl_ingrediente", 'Int'>;
    readonly tipo_ingrediente_id: Prisma.FieldRef<"tbl_ingrediente", 'Int'>;
    readonly nome: Prisma.FieldRef<"tbl_ingrediente", 'String'>;
    readonly valor_unitario: Prisma.FieldRef<"tbl_ingrediente", 'Decimal'>;
    readonly quantidade_estoque: Prisma.FieldRef<"tbl_ingrediente", 'Int'>;
}
/**
 * tbl_ingrediente findUnique
 */
export type tbl_ingredienteFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_ingrediente
     */
    select?: Prisma.tbl_ingredienteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the tbl_ingrediente
     */
    omit?: Prisma.tbl_ingredienteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.tbl_ingredienteInclude<ExtArgs> | null;
    /**
     * Filter, which tbl_ingrediente to fetch.
     */
    where: Prisma.tbl_ingredienteWhereUniqueInput;
};
/**
 * tbl_ingrediente findUniqueOrThrow
 */
export type tbl_ingredienteFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_ingrediente
     */
    select?: Prisma.tbl_ingredienteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the tbl_ingrediente
     */
    omit?: Prisma.tbl_ingredienteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.tbl_ingredienteInclude<ExtArgs> | null;
    /**
     * Filter, which tbl_ingrediente to fetch.
     */
    where: Prisma.tbl_ingredienteWhereUniqueInput;
};
/**
 * tbl_ingrediente findFirst
 */
export type tbl_ingredienteFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_ingrediente
     */
    select?: Prisma.tbl_ingredienteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the tbl_ingrediente
     */
    omit?: Prisma.tbl_ingredienteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.tbl_ingredienteInclude<ExtArgs> | null;
    /**
     * Filter, which tbl_ingrediente to fetch.
     */
    where?: Prisma.tbl_ingredienteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tbl_ingredientes to fetch.
     */
    orderBy?: Prisma.tbl_ingredienteOrderByWithRelationInput | Prisma.tbl_ingredienteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for tbl_ingredientes.
     */
    cursor?: Prisma.tbl_ingredienteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tbl_ingredientes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tbl_ingredientes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of tbl_ingredientes.
     */
    distinct?: Prisma.Tbl_ingredienteScalarFieldEnum | Prisma.Tbl_ingredienteScalarFieldEnum[];
};
/**
 * tbl_ingrediente findFirstOrThrow
 */
export type tbl_ingredienteFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_ingrediente
     */
    select?: Prisma.tbl_ingredienteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the tbl_ingrediente
     */
    omit?: Prisma.tbl_ingredienteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.tbl_ingredienteInclude<ExtArgs> | null;
    /**
     * Filter, which tbl_ingrediente to fetch.
     */
    where?: Prisma.tbl_ingredienteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tbl_ingredientes to fetch.
     */
    orderBy?: Prisma.tbl_ingredienteOrderByWithRelationInput | Prisma.tbl_ingredienteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for tbl_ingredientes.
     */
    cursor?: Prisma.tbl_ingredienteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tbl_ingredientes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tbl_ingredientes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of tbl_ingredientes.
     */
    distinct?: Prisma.Tbl_ingredienteScalarFieldEnum | Prisma.Tbl_ingredienteScalarFieldEnum[];
};
/**
 * tbl_ingrediente findMany
 */
export type tbl_ingredienteFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_ingrediente
     */
    select?: Prisma.tbl_ingredienteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the tbl_ingrediente
     */
    omit?: Prisma.tbl_ingredienteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.tbl_ingredienteInclude<ExtArgs> | null;
    /**
     * Filter, which tbl_ingredientes to fetch.
     */
    where?: Prisma.tbl_ingredienteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tbl_ingredientes to fetch.
     */
    orderBy?: Prisma.tbl_ingredienteOrderByWithRelationInput | Prisma.tbl_ingredienteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing tbl_ingredientes.
     */
    cursor?: Prisma.tbl_ingredienteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tbl_ingredientes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tbl_ingredientes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of tbl_ingredientes.
     */
    distinct?: Prisma.Tbl_ingredienteScalarFieldEnum | Prisma.Tbl_ingredienteScalarFieldEnum[];
};
/**
 * tbl_ingrediente create
 */
export type tbl_ingredienteCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_ingrediente
     */
    select?: Prisma.tbl_ingredienteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the tbl_ingrediente
     */
    omit?: Prisma.tbl_ingredienteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.tbl_ingredienteInclude<ExtArgs> | null;
    /**
     * The data needed to create a tbl_ingrediente.
     */
    data: Prisma.XOR<Prisma.tbl_ingredienteCreateInput, Prisma.tbl_ingredienteUncheckedCreateInput>;
};
/**
 * tbl_ingrediente createMany
 */
export type tbl_ingredienteCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many tbl_ingredientes.
     */
    data: Prisma.tbl_ingredienteCreateManyInput | Prisma.tbl_ingredienteCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * tbl_ingrediente createManyAndReturn
 */
export type tbl_ingredienteCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_ingrediente
     */
    select?: Prisma.tbl_ingredienteSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the tbl_ingrediente
     */
    omit?: Prisma.tbl_ingredienteOmit<ExtArgs> | null;
    /**
     * The data used to create many tbl_ingredientes.
     */
    data: Prisma.tbl_ingredienteCreateManyInput | Prisma.tbl_ingredienteCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.tbl_ingredienteIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * tbl_ingrediente update
 */
export type tbl_ingredienteUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_ingrediente
     */
    select?: Prisma.tbl_ingredienteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the tbl_ingrediente
     */
    omit?: Prisma.tbl_ingredienteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.tbl_ingredienteInclude<ExtArgs> | null;
    /**
     * The data needed to update a tbl_ingrediente.
     */
    data: Prisma.XOR<Prisma.tbl_ingredienteUpdateInput, Prisma.tbl_ingredienteUncheckedUpdateInput>;
    /**
     * Choose, which tbl_ingrediente to update.
     */
    where: Prisma.tbl_ingredienteWhereUniqueInput;
};
/**
 * tbl_ingrediente updateMany
 */
export type tbl_ingredienteUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update tbl_ingredientes.
     */
    data: Prisma.XOR<Prisma.tbl_ingredienteUpdateManyMutationInput, Prisma.tbl_ingredienteUncheckedUpdateManyInput>;
    /**
     * Filter which tbl_ingredientes to update
     */
    where?: Prisma.tbl_ingredienteWhereInput;
    /**
     * Limit how many tbl_ingredientes to update.
     */
    limit?: number;
};
/**
 * tbl_ingrediente updateManyAndReturn
 */
export type tbl_ingredienteUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_ingrediente
     */
    select?: Prisma.tbl_ingredienteSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the tbl_ingrediente
     */
    omit?: Prisma.tbl_ingredienteOmit<ExtArgs> | null;
    /**
     * The data used to update tbl_ingredientes.
     */
    data: Prisma.XOR<Prisma.tbl_ingredienteUpdateManyMutationInput, Prisma.tbl_ingredienteUncheckedUpdateManyInput>;
    /**
     * Filter which tbl_ingredientes to update
     */
    where?: Prisma.tbl_ingredienteWhereInput;
    /**
     * Limit how many tbl_ingredientes to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.tbl_ingredienteIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * tbl_ingrediente upsert
 */
export type tbl_ingredienteUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_ingrediente
     */
    select?: Prisma.tbl_ingredienteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the tbl_ingrediente
     */
    omit?: Prisma.tbl_ingredienteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.tbl_ingredienteInclude<ExtArgs> | null;
    /**
     * The filter to search for the tbl_ingrediente to update in case it exists.
     */
    where: Prisma.tbl_ingredienteWhereUniqueInput;
    /**
     * In case the tbl_ingrediente found by the `where` argument doesn't exist, create a new tbl_ingrediente with this data.
     */
    create: Prisma.XOR<Prisma.tbl_ingredienteCreateInput, Prisma.tbl_ingredienteUncheckedCreateInput>;
    /**
     * In case the tbl_ingrediente was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.tbl_ingredienteUpdateInput, Prisma.tbl_ingredienteUncheckedUpdateInput>;
};
/**
 * tbl_ingrediente delete
 */
export type tbl_ingredienteDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_ingrediente
     */
    select?: Prisma.tbl_ingredienteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the tbl_ingrediente
     */
    omit?: Prisma.tbl_ingredienteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.tbl_ingredienteInclude<ExtArgs> | null;
    /**
     * Filter which tbl_ingrediente to delete.
     */
    where: Prisma.tbl_ingredienteWhereUniqueInput;
};
/**
 * tbl_ingrediente deleteMany
 */
export type tbl_ingredienteDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_ingredientes to delete
     */
    where?: Prisma.tbl_ingredienteWhereInput;
    /**
     * Limit how many tbl_ingredientes to delete.
     */
    limit?: number;
};
/**
 * tbl_ingrediente.rel_fornecedor_ingrediente
 */
export type tbl_ingrediente$rel_fornecedor_ingredienteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rel_fornecedor_ingrediente
     */
    select?: Prisma.rel_fornecedor_ingredienteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the rel_fornecedor_ingrediente
     */
    omit?: Prisma.rel_fornecedor_ingredienteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.rel_fornecedor_ingredienteInclude<ExtArgs> | null;
    where?: Prisma.rel_fornecedor_ingredienteWhereInput;
    orderBy?: Prisma.rel_fornecedor_ingredienteOrderByWithRelationInput | Prisma.rel_fornecedor_ingredienteOrderByWithRelationInput[];
    cursor?: Prisma.rel_fornecedor_ingredienteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Rel_fornecedor_ingredienteScalarFieldEnum | Prisma.Rel_fornecedor_ingredienteScalarFieldEnum[];
};
/**
 * tbl_ingrediente.rel_produto_ingrediente
 */
export type tbl_ingrediente$rel_produto_ingredienteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * tbl_ingrediente without action
 */
export type tbl_ingredienteDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_ingrediente
     */
    select?: Prisma.tbl_ingredienteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the tbl_ingrediente
     */
    omit?: Prisma.tbl_ingredienteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.tbl_ingredienteInclude<ExtArgs> | null;
};
//# sourceMappingURL=tbl_ingrediente.d.ts.map