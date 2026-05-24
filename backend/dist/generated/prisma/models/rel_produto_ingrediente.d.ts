import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.ts";
/**
 * Model rel_produto_ingrediente
 *
 */
export type rel_produto_ingredienteModel = runtime.Types.Result.DefaultSelection<Prisma.$rel_produto_ingredientePayload>;
export type AggregateRel_produto_ingrediente = {
    _count: Rel_produto_ingredienteCountAggregateOutputType | null;
    _avg: Rel_produto_ingredienteAvgAggregateOutputType | null;
    _sum: Rel_produto_ingredienteSumAggregateOutputType | null;
    _min: Rel_produto_ingredienteMinAggregateOutputType | null;
    _max: Rel_produto_ingredienteMaxAggregateOutputType | null;
};
export type Rel_produto_ingredienteAvgAggregateOutputType = {
    ingrediente_id: number | null;
    produto_id: number | null;
    quantidade: number | null;
};
export type Rel_produto_ingredienteSumAggregateOutputType = {
    ingrediente_id: number | null;
    produto_id: number | null;
    quantidade: number | null;
};
export type Rel_produto_ingredienteMinAggregateOutputType = {
    ingrediente_id: number | null;
    produto_id: number | null;
    quantidade: number | null;
};
export type Rel_produto_ingredienteMaxAggregateOutputType = {
    ingrediente_id: number | null;
    produto_id: number | null;
    quantidade: number | null;
};
export type Rel_produto_ingredienteCountAggregateOutputType = {
    ingrediente_id: number;
    produto_id: number;
    quantidade: number;
    _all: number;
};
export type Rel_produto_ingredienteAvgAggregateInputType = {
    ingrediente_id?: true;
    produto_id?: true;
    quantidade?: true;
};
export type Rel_produto_ingredienteSumAggregateInputType = {
    ingrediente_id?: true;
    produto_id?: true;
    quantidade?: true;
};
export type Rel_produto_ingredienteMinAggregateInputType = {
    ingrediente_id?: true;
    produto_id?: true;
    quantidade?: true;
};
export type Rel_produto_ingredienteMaxAggregateInputType = {
    ingrediente_id?: true;
    produto_id?: true;
    quantidade?: true;
};
export type Rel_produto_ingredienteCountAggregateInputType = {
    ingrediente_id?: true;
    produto_id?: true;
    quantidade?: true;
    _all?: true;
};
export type Rel_produto_ingredienteAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which rel_produto_ingrediente to aggregate.
     */
    where?: Prisma.rel_produto_ingredienteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of rel_produto_ingredientes to fetch.
     */
    orderBy?: Prisma.rel_produto_ingredienteOrderByWithRelationInput | Prisma.rel_produto_ingredienteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.rel_produto_ingredienteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` rel_produto_ingredientes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` rel_produto_ingredientes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned rel_produto_ingredientes
    **/
    _count?: true | Rel_produto_ingredienteCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: Rel_produto_ingredienteAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: Rel_produto_ingredienteSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: Rel_produto_ingredienteMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: Rel_produto_ingredienteMaxAggregateInputType;
};
export type GetRel_produto_ingredienteAggregateType<T extends Rel_produto_ingredienteAggregateArgs> = {
    [P in keyof T & keyof AggregateRel_produto_ingrediente]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRel_produto_ingrediente[P]> : Prisma.GetScalarType<T[P], AggregateRel_produto_ingrediente[P]>;
};
export type rel_produto_ingredienteGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.rel_produto_ingredienteWhereInput;
    orderBy?: Prisma.rel_produto_ingredienteOrderByWithAggregationInput | Prisma.rel_produto_ingredienteOrderByWithAggregationInput[];
    by: Prisma.Rel_produto_ingredienteScalarFieldEnum[] | Prisma.Rel_produto_ingredienteScalarFieldEnum;
    having?: Prisma.rel_produto_ingredienteScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Rel_produto_ingredienteCountAggregateInputType | true;
    _avg?: Rel_produto_ingredienteAvgAggregateInputType;
    _sum?: Rel_produto_ingredienteSumAggregateInputType;
    _min?: Rel_produto_ingredienteMinAggregateInputType;
    _max?: Rel_produto_ingredienteMaxAggregateInputType;
};
export type Rel_produto_ingredienteGroupByOutputType = {
    ingrediente_id: number;
    produto_id: number;
    quantidade: number;
    _count: Rel_produto_ingredienteCountAggregateOutputType | null;
    _avg: Rel_produto_ingredienteAvgAggregateOutputType | null;
    _sum: Rel_produto_ingredienteSumAggregateOutputType | null;
    _min: Rel_produto_ingredienteMinAggregateOutputType | null;
    _max: Rel_produto_ingredienteMaxAggregateOutputType | null;
};
export type GetRel_produto_ingredienteGroupByPayload<T extends rel_produto_ingredienteGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Rel_produto_ingredienteGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Rel_produto_ingredienteGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Rel_produto_ingredienteGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Rel_produto_ingredienteGroupByOutputType[P]>;
}>>;
export type rel_produto_ingredienteWhereInput = {
    AND?: Prisma.rel_produto_ingredienteWhereInput | Prisma.rel_produto_ingredienteWhereInput[];
    OR?: Prisma.rel_produto_ingredienteWhereInput[];
    NOT?: Prisma.rel_produto_ingredienteWhereInput | Prisma.rel_produto_ingredienteWhereInput[];
    ingrediente_id?: Prisma.IntFilter<"rel_produto_ingrediente"> | number;
    produto_id?: Prisma.IntFilter<"rel_produto_ingrediente"> | number;
    quantidade?: Prisma.IntFilter<"rel_produto_ingrediente"> | number;
    tbl_ingrediente?: Prisma.XOR<Prisma.Tbl_ingredienteScalarRelationFilter, Prisma.tbl_ingredienteWhereInput>;
    tbl_produto?: Prisma.XOR<Prisma.Tbl_produtoScalarRelationFilter, Prisma.tbl_produtoWhereInput>;
};
export type rel_produto_ingredienteOrderByWithRelationInput = {
    ingrediente_id?: Prisma.SortOrder;
    produto_id?: Prisma.SortOrder;
    quantidade?: Prisma.SortOrder;
    tbl_ingrediente?: Prisma.tbl_ingredienteOrderByWithRelationInput;
    tbl_produto?: Prisma.tbl_produtoOrderByWithRelationInput;
};
export type rel_produto_ingredienteWhereUniqueInput = Prisma.AtLeast<{
    ingrediente_id_produto_id_quantidade?: Prisma.rel_produto_ingredienteIngrediente_idProduto_idQuantidadeCompoundUniqueInput;
    AND?: Prisma.rel_produto_ingredienteWhereInput | Prisma.rel_produto_ingredienteWhereInput[];
    OR?: Prisma.rel_produto_ingredienteWhereInput[];
    NOT?: Prisma.rel_produto_ingredienteWhereInput | Prisma.rel_produto_ingredienteWhereInput[];
    ingrediente_id?: Prisma.IntFilter<"rel_produto_ingrediente"> | number;
    produto_id?: Prisma.IntFilter<"rel_produto_ingrediente"> | number;
    quantidade?: Prisma.IntFilter<"rel_produto_ingrediente"> | number;
    tbl_ingrediente?: Prisma.XOR<Prisma.Tbl_ingredienteScalarRelationFilter, Prisma.tbl_ingredienteWhereInput>;
    tbl_produto?: Prisma.XOR<Prisma.Tbl_produtoScalarRelationFilter, Prisma.tbl_produtoWhereInput>;
}, "ingrediente_id_produto_id_quantidade">;
export type rel_produto_ingredienteOrderByWithAggregationInput = {
    ingrediente_id?: Prisma.SortOrder;
    produto_id?: Prisma.SortOrder;
    quantidade?: Prisma.SortOrder;
    _count?: Prisma.rel_produto_ingredienteCountOrderByAggregateInput;
    _avg?: Prisma.rel_produto_ingredienteAvgOrderByAggregateInput;
    _max?: Prisma.rel_produto_ingredienteMaxOrderByAggregateInput;
    _min?: Prisma.rel_produto_ingredienteMinOrderByAggregateInput;
    _sum?: Prisma.rel_produto_ingredienteSumOrderByAggregateInput;
};
export type rel_produto_ingredienteScalarWhereWithAggregatesInput = {
    AND?: Prisma.rel_produto_ingredienteScalarWhereWithAggregatesInput | Prisma.rel_produto_ingredienteScalarWhereWithAggregatesInput[];
    OR?: Prisma.rel_produto_ingredienteScalarWhereWithAggregatesInput[];
    NOT?: Prisma.rel_produto_ingredienteScalarWhereWithAggregatesInput | Prisma.rel_produto_ingredienteScalarWhereWithAggregatesInput[];
    ingrediente_id?: Prisma.IntWithAggregatesFilter<"rel_produto_ingrediente"> | number;
    produto_id?: Prisma.IntWithAggregatesFilter<"rel_produto_ingrediente"> | number;
    quantidade?: Prisma.IntWithAggregatesFilter<"rel_produto_ingrediente"> | number;
};
export type rel_produto_ingredienteCreateInput = {
    quantidade: number;
    tbl_ingrediente?: Prisma.tbl_ingredienteCreateNestedOneWithoutRel_produto_ingredienteInput;
    tbl_produto?: Prisma.tbl_produtoCreateNestedOneWithoutRel_produto_ingredienteInput;
};
export type rel_produto_ingredienteUncheckedCreateInput = {
    ingrediente_id?: number;
    produto_id?: number;
    quantidade: number;
};
export type rel_produto_ingredienteUpdateInput = {
    quantidade?: Prisma.IntFieldUpdateOperationsInput | number;
    tbl_ingrediente?: Prisma.tbl_ingredienteUpdateOneRequiredWithoutRel_produto_ingredienteNestedInput;
    tbl_produto?: Prisma.tbl_produtoUpdateOneRequiredWithoutRel_produto_ingredienteNestedInput;
};
export type rel_produto_ingredienteUncheckedUpdateInput = {
    ingrediente_id?: Prisma.IntFieldUpdateOperationsInput | number;
    produto_id?: Prisma.IntFieldUpdateOperationsInput | number;
    quantidade?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type rel_produto_ingredienteCreateManyInput = {
    ingrediente_id?: number;
    produto_id?: number;
    quantidade: number;
};
export type rel_produto_ingredienteUpdateManyMutationInput = {
    quantidade?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type rel_produto_ingredienteUncheckedUpdateManyInput = {
    ingrediente_id?: Prisma.IntFieldUpdateOperationsInput | number;
    produto_id?: Prisma.IntFieldUpdateOperationsInput | number;
    quantidade?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type rel_produto_ingredienteIngrediente_idProduto_idQuantidadeCompoundUniqueInput = {
    ingrediente_id: number;
    produto_id: number;
    quantidade: number;
};
export type rel_produto_ingredienteCountOrderByAggregateInput = {
    ingrediente_id?: Prisma.SortOrder;
    produto_id?: Prisma.SortOrder;
    quantidade?: Prisma.SortOrder;
};
export type rel_produto_ingredienteAvgOrderByAggregateInput = {
    ingrediente_id?: Prisma.SortOrder;
    produto_id?: Prisma.SortOrder;
    quantidade?: Prisma.SortOrder;
};
export type rel_produto_ingredienteMaxOrderByAggregateInput = {
    ingrediente_id?: Prisma.SortOrder;
    produto_id?: Prisma.SortOrder;
    quantidade?: Prisma.SortOrder;
};
export type rel_produto_ingredienteMinOrderByAggregateInput = {
    ingrediente_id?: Prisma.SortOrder;
    produto_id?: Prisma.SortOrder;
    quantidade?: Prisma.SortOrder;
};
export type rel_produto_ingredienteSumOrderByAggregateInput = {
    ingrediente_id?: Prisma.SortOrder;
    produto_id?: Prisma.SortOrder;
    quantidade?: Prisma.SortOrder;
};
export type Rel_produto_ingredienteListRelationFilter = {
    every?: Prisma.rel_produto_ingredienteWhereInput;
    some?: Prisma.rel_produto_ingredienteWhereInput;
    none?: Prisma.rel_produto_ingredienteWhereInput;
};
export type rel_produto_ingredienteOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type rel_produto_ingredienteCreateNestedManyWithoutTbl_ingredienteInput = {
    create?: Prisma.XOR<Prisma.rel_produto_ingredienteCreateWithoutTbl_ingredienteInput, Prisma.rel_produto_ingredienteUncheckedCreateWithoutTbl_ingredienteInput> | Prisma.rel_produto_ingredienteCreateWithoutTbl_ingredienteInput[] | Prisma.rel_produto_ingredienteUncheckedCreateWithoutTbl_ingredienteInput[];
    connectOrCreate?: Prisma.rel_produto_ingredienteCreateOrConnectWithoutTbl_ingredienteInput | Prisma.rel_produto_ingredienteCreateOrConnectWithoutTbl_ingredienteInput[];
    createMany?: Prisma.rel_produto_ingredienteCreateManyTbl_ingredienteInputEnvelope;
    connect?: Prisma.rel_produto_ingredienteWhereUniqueInput | Prisma.rel_produto_ingredienteWhereUniqueInput[];
};
export type rel_produto_ingredienteUncheckedCreateNestedManyWithoutTbl_ingredienteInput = {
    create?: Prisma.XOR<Prisma.rel_produto_ingredienteCreateWithoutTbl_ingredienteInput, Prisma.rel_produto_ingredienteUncheckedCreateWithoutTbl_ingredienteInput> | Prisma.rel_produto_ingredienteCreateWithoutTbl_ingredienteInput[] | Prisma.rel_produto_ingredienteUncheckedCreateWithoutTbl_ingredienteInput[];
    connectOrCreate?: Prisma.rel_produto_ingredienteCreateOrConnectWithoutTbl_ingredienteInput | Prisma.rel_produto_ingredienteCreateOrConnectWithoutTbl_ingredienteInput[];
    createMany?: Prisma.rel_produto_ingredienteCreateManyTbl_ingredienteInputEnvelope;
    connect?: Prisma.rel_produto_ingredienteWhereUniqueInput | Prisma.rel_produto_ingredienteWhereUniqueInput[];
};
export type rel_produto_ingredienteUpdateManyWithoutTbl_ingredienteNestedInput = {
    create?: Prisma.XOR<Prisma.rel_produto_ingredienteCreateWithoutTbl_ingredienteInput, Prisma.rel_produto_ingredienteUncheckedCreateWithoutTbl_ingredienteInput> | Prisma.rel_produto_ingredienteCreateWithoutTbl_ingredienteInput[] | Prisma.rel_produto_ingredienteUncheckedCreateWithoutTbl_ingredienteInput[];
    connectOrCreate?: Prisma.rel_produto_ingredienteCreateOrConnectWithoutTbl_ingredienteInput | Prisma.rel_produto_ingredienteCreateOrConnectWithoutTbl_ingredienteInput[];
    upsert?: Prisma.rel_produto_ingredienteUpsertWithWhereUniqueWithoutTbl_ingredienteInput | Prisma.rel_produto_ingredienteUpsertWithWhereUniqueWithoutTbl_ingredienteInput[];
    createMany?: Prisma.rel_produto_ingredienteCreateManyTbl_ingredienteInputEnvelope;
    set?: Prisma.rel_produto_ingredienteWhereUniqueInput | Prisma.rel_produto_ingredienteWhereUniqueInput[];
    disconnect?: Prisma.rel_produto_ingredienteWhereUniqueInput | Prisma.rel_produto_ingredienteWhereUniqueInput[];
    delete?: Prisma.rel_produto_ingredienteWhereUniqueInput | Prisma.rel_produto_ingredienteWhereUniqueInput[];
    connect?: Prisma.rel_produto_ingredienteWhereUniqueInput | Prisma.rel_produto_ingredienteWhereUniqueInput[];
    update?: Prisma.rel_produto_ingredienteUpdateWithWhereUniqueWithoutTbl_ingredienteInput | Prisma.rel_produto_ingredienteUpdateWithWhereUniqueWithoutTbl_ingredienteInput[];
    updateMany?: Prisma.rel_produto_ingredienteUpdateManyWithWhereWithoutTbl_ingredienteInput | Prisma.rel_produto_ingredienteUpdateManyWithWhereWithoutTbl_ingredienteInput[];
    deleteMany?: Prisma.rel_produto_ingredienteScalarWhereInput | Prisma.rel_produto_ingredienteScalarWhereInput[];
};
export type rel_produto_ingredienteUncheckedUpdateManyWithoutTbl_ingredienteNestedInput = {
    create?: Prisma.XOR<Prisma.rel_produto_ingredienteCreateWithoutTbl_ingredienteInput, Prisma.rel_produto_ingredienteUncheckedCreateWithoutTbl_ingredienteInput> | Prisma.rel_produto_ingredienteCreateWithoutTbl_ingredienteInput[] | Prisma.rel_produto_ingredienteUncheckedCreateWithoutTbl_ingredienteInput[];
    connectOrCreate?: Prisma.rel_produto_ingredienteCreateOrConnectWithoutTbl_ingredienteInput | Prisma.rel_produto_ingredienteCreateOrConnectWithoutTbl_ingredienteInput[];
    upsert?: Prisma.rel_produto_ingredienteUpsertWithWhereUniqueWithoutTbl_ingredienteInput | Prisma.rel_produto_ingredienteUpsertWithWhereUniqueWithoutTbl_ingredienteInput[];
    createMany?: Prisma.rel_produto_ingredienteCreateManyTbl_ingredienteInputEnvelope;
    set?: Prisma.rel_produto_ingredienteWhereUniqueInput | Prisma.rel_produto_ingredienteWhereUniqueInput[];
    disconnect?: Prisma.rel_produto_ingredienteWhereUniqueInput | Prisma.rel_produto_ingredienteWhereUniqueInput[];
    delete?: Prisma.rel_produto_ingredienteWhereUniqueInput | Prisma.rel_produto_ingredienteWhereUniqueInput[];
    connect?: Prisma.rel_produto_ingredienteWhereUniqueInput | Prisma.rel_produto_ingredienteWhereUniqueInput[];
    update?: Prisma.rel_produto_ingredienteUpdateWithWhereUniqueWithoutTbl_ingredienteInput | Prisma.rel_produto_ingredienteUpdateWithWhereUniqueWithoutTbl_ingredienteInput[];
    updateMany?: Prisma.rel_produto_ingredienteUpdateManyWithWhereWithoutTbl_ingredienteInput | Prisma.rel_produto_ingredienteUpdateManyWithWhereWithoutTbl_ingredienteInput[];
    deleteMany?: Prisma.rel_produto_ingredienteScalarWhereInput | Prisma.rel_produto_ingredienteScalarWhereInput[];
};
export type rel_produto_ingredienteCreateNestedManyWithoutTbl_produtoInput = {
    create?: Prisma.XOR<Prisma.rel_produto_ingredienteCreateWithoutTbl_produtoInput, Prisma.rel_produto_ingredienteUncheckedCreateWithoutTbl_produtoInput> | Prisma.rel_produto_ingredienteCreateWithoutTbl_produtoInput[] | Prisma.rel_produto_ingredienteUncheckedCreateWithoutTbl_produtoInput[];
    connectOrCreate?: Prisma.rel_produto_ingredienteCreateOrConnectWithoutTbl_produtoInput | Prisma.rel_produto_ingredienteCreateOrConnectWithoutTbl_produtoInput[];
    createMany?: Prisma.rel_produto_ingredienteCreateManyTbl_produtoInputEnvelope;
    connect?: Prisma.rel_produto_ingredienteWhereUniqueInput | Prisma.rel_produto_ingredienteWhereUniqueInput[];
};
export type rel_produto_ingredienteUncheckedCreateNestedManyWithoutTbl_produtoInput = {
    create?: Prisma.XOR<Prisma.rel_produto_ingredienteCreateWithoutTbl_produtoInput, Prisma.rel_produto_ingredienteUncheckedCreateWithoutTbl_produtoInput> | Prisma.rel_produto_ingredienteCreateWithoutTbl_produtoInput[] | Prisma.rel_produto_ingredienteUncheckedCreateWithoutTbl_produtoInput[];
    connectOrCreate?: Prisma.rel_produto_ingredienteCreateOrConnectWithoutTbl_produtoInput | Prisma.rel_produto_ingredienteCreateOrConnectWithoutTbl_produtoInput[];
    createMany?: Prisma.rel_produto_ingredienteCreateManyTbl_produtoInputEnvelope;
    connect?: Prisma.rel_produto_ingredienteWhereUniqueInput | Prisma.rel_produto_ingredienteWhereUniqueInput[];
};
export type rel_produto_ingredienteUpdateManyWithoutTbl_produtoNestedInput = {
    create?: Prisma.XOR<Prisma.rel_produto_ingredienteCreateWithoutTbl_produtoInput, Prisma.rel_produto_ingredienteUncheckedCreateWithoutTbl_produtoInput> | Prisma.rel_produto_ingredienteCreateWithoutTbl_produtoInput[] | Prisma.rel_produto_ingredienteUncheckedCreateWithoutTbl_produtoInput[];
    connectOrCreate?: Prisma.rel_produto_ingredienteCreateOrConnectWithoutTbl_produtoInput | Prisma.rel_produto_ingredienteCreateOrConnectWithoutTbl_produtoInput[];
    upsert?: Prisma.rel_produto_ingredienteUpsertWithWhereUniqueWithoutTbl_produtoInput | Prisma.rel_produto_ingredienteUpsertWithWhereUniqueWithoutTbl_produtoInput[];
    createMany?: Prisma.rel_produto_ingredienteCreateManyTbl_produtoInputEnvelope;
    set?: Prisma.rel_produto_ingredienteWhereUniqueInput | Prisma.rel_produto_ingredienteWhereUniqueInput[];
    disconnect?: Prisma.rel_produto_ingredienteWhereUniqueInput | Prisma.rel_produto_ingredienteWhereUniqueInput[];
    delete?: Prisma.rel_produto_ingredienteWhereUniqueInput | Prisma.rel_produto_ingredienteWhereUniqueInput[];
    connect?: Prisma.rel_produto_ingredienteWhereUniqueInput | Prisma.rel_produto_ingredienteWhereUniqueInput[];
    update?: Prisma.rel_produto_ingredienteUpdateWithWhereUniqueWithoutTbl_produtoInput | Prisma.rel_produto_ingredienteUpdateWithWhereUniqueWithoutTbl_produtoInput[];
    updateMany?: Prisma.rel_produto_ingredienteUpdateManyWithWhereWithoutTbl_produtoInput | Prisma.rel_produto_ingredienteUpdateManyWithWhereWithoutTbl_produtoInput[];
    deleteMany?: Prisma.rel_produto_ingredienteScalarWhereInput | Prisma.rel_produto_ingredienteScalarWhereInput[];
};
export type rel_produto_ingredienteUncheckedUpdateManyWithoutTbl_produtoNestedInput = {
    create?: Prisma.XOR<Prisma.rel_produto_ingredienteCreateWithoutTbl_produtoInput, Prisma.rel_produto_ingredienteUncheckedCreateWithoutTbl_produtoInput> | Prisma.rel_produto_ingredienteCreateWithoutTbl_produtoInput[] | Prisma.rel_produto_ingredienteUncheckedCreateWithoutTbl_produtoInput[];
    connectOrCreate?: Prisma.rel_produto_ingredienteCreateOrConnectWithoutTbl_produtoInput | Prisma.rel_produto_ingredienteCreateOrConnectWithoutTbl_produtoInput[];
    upsert?: Prisma.rel_produto_ingredienteUpsertWithWhereUniqueWithoutTbl_produtoInput | Prisma.rel_produto_ingredienteUpsertWithWhereUniqueWithoutTbl_produtoInput[];
    createMany?: Prisma.rel_produto_ingredienteCreateManyTbl_produtoInputEnvelope;
    set?: Prisma.rel_produto_ingredienteWhereUniqueInput | Prisma.rel_produto_ingredienteWhereUniqueInput[];
    disconnect?: Prisma.rel_produto_ingredienteWhereUniqueInput | Prisma.rel_produto_ingredienteWhereUniqueInput[];
    delete?: Prisma.rel_produto_ingredienteWhereUniqueInput | Prisma.rel_produto_ingredienteWhereUniqueInput[];
    connect?: Prisma.rel_produto_ingredienteWhereUniqueInput | Prisma.rel_produto_ingredienteWhereUniqueInput[];
    update?: Prisma.rel_produto_ingredienteUpdateWithWhereUniqueWithoutTbl_produtoInput | Prisma.rel_produto_ingredienteUpdateWithWhereUniqueWithoutTbl_produtoInput[];
    updateMany?: Prisma.rel_produto_ingredienteUpdateManyWithWhereWithoutTbl_produtoInput | Prisma.rel_produto_ingredienteUpdateManyWithWhereWithoutTbl_produtoInput[];
    deleteMany?: Prisma.rel_produto_ingredienteScalarWhereInput | Prisma.rel_produto_ingredienteScalarWhereInput[];
};
export type rel_produto_ingredienteCreateWithoutTbl_ingredienteInput = {
    quantidade: number;
    tbl_produto?: Prisma.tbl_produtoCreateNestedOneWithoutRel_produto_ingredienteInput;
};
export type rel_produto_ingredienteUncheckedCreateWithoutTbl_ingredienteInput = {
    produto_id?: number;
    quantidade: number;
};
export type rel_produto_ingredienteCreateOrConnectWithoutTbl_ingredienteInput = {
    where: Prisma.rel_produto_ingredienteWhereUniqueInput;
    create: Prisma.XOR<Prisma.rel_produto_ingredienteCreateWithoutTbl_ingredienteInput, Prisma.rel_produto_ingredienteUncheckedCreateWithoutTbl_ingredienteInput>;
};
export type rel_produto_ingredienteCreateManyTbl_ingredienteInputEnvelope = {
    data: Prisma.rel_produto_ingredienteCreateManyTbl_ingredienteInput | Prisma.rel_produto_ingredienteCreateManyTbl_ingredienteInput[];
    skipDuplicates?: boolean;
};
export type rel_produto_ingredienteUpsertWithWhereUniqueWithoutTbl_ingredienteInput = {
    where: Prisma.rel_produto_ingredienteWhereUniqueInput;
    update: Prisma.XOR<Prisma.rel_produto_ingredienteUpdateWithoutTbl_ingredienteInput, Prisma.rel_produto_ingredienteUncheckedUpdateWithoutTbl_ingredienteInput>;
    create: Prisma.XOR<Prisma.rel_produto_ingredienteCreateWithoutTbl_ingredienteInput, Prisma.rel_produto_ingredienteUncheckedCreateWithoutTbl_ingredienteInput>;
};
export type rel_produto_ingredienteUpdateWithWhereUniqueWithoutTbl_ingredienteInput = {
    where: Prisma.rel_produto_ingredienteWhereUniqueInput;
    data: Prisma.XOR<Prisma.rel_produto_ingredienteUpdateWithoutTbl_ingredienteInput, Prisma.rel_produto_ingredienteUncheckedUpdateWithoutTbl_ingredienteInput>;
};
export type rel_produto_ingredienteUpdateManyWithWhereWithoutTbl_ingredienteInput = {
    where: Prisma.rel_produto_ingredienteScalarWhereInput;
    data: Prisma.XOR<Prisma.rel_produto_ingredienteUpdateManyMutationInput, Prisma.rel_produto_ingredienteUncheckedUpdateManyWithoutTbl_ingredienteInput>;
};
export type rel_produto_ingredienteScalarWhereInput = {
    AND?: Prisma.rel_produto_ingredienteScalarWhereInput | Prisma.rel_produto_ingredienteScalarWhereInput[];
    OR?: Prisma.rel_produto_ingredienteScalarWhereInput[];
    NOT?: Prisma.rel_produto_ingredienteScalarWhereInput | Prisma.rel_produto_ingredienteScalarWhereInput[];
    ingrediente_id?: Prisma.IntFilter<"rel_produto_ingrediente"> | number;
    produto_id?: Prisma.IntFilter<"rel_produto_ingrediente"> | number;
    quantidade?: Prisma.IntFilter<"rel_produto_ingrediente"> | number;
};
export type rel_produto_ingredienteCreateWithoutTbl_produtoInput = {
    quantidade: number;
    tbl_ingrediente?: Prisma.tbl_ingredienteCreateNestedOneWithoutRel_produto_ingredienteInput;
};
export type rel_produto_ingredienteUncheckedCreateWithoutTbl_produtoInput = {
    ingrediente_id?: number;
    quantidade: number;
};
export type rel_produto_ingredienteCreateOrConnectWithoutTbl_produtoInput = {
    where: Prisma.rel_produto_ingredienteWhereUniqueInput;
    create: Prisma.XOR<Prisma.rel_produto_ingredienteCreateWithoutTbl_produtoInput, Prisma.rel_produto_ingredienteUncheckedCreateWithoutTbl_produtoInput>;
};
export type rel_produto_ingredienteCreateManyTbl_produtoInputEnvelope = {
    data: Prisma.rel_produto_ingredienteCreateManyTbl_produtoInput | Prisma.rel_produto_ingredienteCreateManyTbl_produtoInput[];
    skipDuplicates?: boolean;
};
export type rel_produto_ingredienteUpsertWithWhereUniqueWithoutTbl_produtoInput = {
    where: Prisma.rel_produto_ingredienteWhereUniqueInput;
    update: Prisma.XOR<Prisma.rel_produto_ingredienteUpdateWithoutTbl_produtoInput, Prisma.rel_produto_ingredienteUncheckedUpdateWithoutTbl_produtoInput>;
    create: Prisma.XOR<Prisma.rel_produto_ingredienteCreateWithoutTbl_produtoInput, Prisma.rel_produto_ingredienteUncheckedCreateWithoutTbl_produtoInput>;
};
export type rel_produto_ingredienteUpdateWithWhereUniqueWithoutTbl_produtoInput = {
    where: Prisma.rel_produto_ingredienteWhereUniqueInput;
    data: Prisma.XOR<Prisma.rel_produto_ingredienteUpdateWithoutTbl_produtoInput, Prisma.rel_produto_ingredienteUncheckedUpdateWithoutTbl_produtoInput>;
};
export type rel_produto_ingredienteUpdateManyWithWhereWithoutTbl_produtoInput = {
    where: Prisma.rel_produto_ingredienteScalarWhereInput;
    data: Prisma.XOR<Prisma.rel_produto_ingredienteUpdateManyMutationInput, Prisma.rel_produto_ingredienteUncheckedUpdateManyWithoutTbl_produtoInput>;
};
export type rel_produto_ingredienteCreateManyTbl_ingredienteInput = {
    produto_id?: number;
    quantidade: number;
};
export type rel_produto_ingredienteUpdateWithoutTbl_ingredienteInput = {
    quantidade?: Prisma.IntFieldUpdateOperationsInput | number;
    tbl_produto?: Prisma.tbl_produtoUpdateOneRequiredWithoutRel_produto_ingredienteNestedInput;
};
export type rel_produto_ingredienteUncheckedUpdateWithoutTbl_ingredienteInput = {
    produto_id?: Prisma.IntFieldUpdateOperationsInput | number;
    quantidade?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type rel_produto_ingredienteUncheckedUpdateManyWithoutTbl_ingredienteInput = {
    produto_id?: Prisma.IntFieldUpdateOperationsInput | number;
    quantidade?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type rel_produto_ingredienteCreateManyTbl_produtoInput = {
    ingrediente_id?: number;
    quantidade: number;
};
export type rel_produto_ingredienteUpdateWithoutTbl_produtoInput = {
    quantidade?: Prisma.IntFieldUpdateOperationsInput | number;
    tbl_ingrediente?: Prisma.tbl_ingredienteUpdateOneRequiredWithoutRel_produto_ingredienteNestedInput;
};
export type rel_produto_ingredienteUncheckedUpdateWithoutTbl_produtoInput = {
    ingrediente_id?: Prisma.IntFieldUpdateOperationsInput | number;
    quantidade?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type rel_produto_ingredienteUncheckedUpdateManyWithoutTbl_produtoInput = {
    ingrediente_id?: Prisma.IntFieldUpdateOperationsInput | number;
    quantidade?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type rel_produto_ingredienteSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    ingrediente_id?: boolean;
    produto_id?: boolean;
    quantidade?: boolean;
    tbl_ingrediente?: boolean | Prisma.tbl_ingredienteDefaultArgs<ExtArgs>;
    tbl_produto?: boolean | Prisma.tbl_produtoDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["rel_produto_ingrediente"]>;
export type rel_produto_ingredienteSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    ingrediente_id?: boolean;
    produto_id?: boolean;
    quantidade?: boolean;
    tbl_ingrediente?: boolean | Prisma.tbl_ingredienteDefaultArgs<ExtArgs>;
    tbl_produto?: boolean | Prisma.tbl_produtoDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["rel_produto_ingrediente"]>;
export type rel_produto_ingredienteSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    ingrediente_id?: boolean;
    produto_id?: boolean;
    quantidade?: boolean;
    tbl_ingrediente?: boolean | Prisma.tbl_ingredienteDefaultArgs<ExtArgs>;
    tbl_produto?: boolean | Prisma.tbl_produtoDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["rel_produto_ingrediente"]>;
export type rel_produto_ingredienteSelectScalar = {
    ingrediente_id?: boolean;
    produto_id?: boolean;
    quantidade?: boolean;
};
export type rel_produto_ingredienteOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"ingrediente_id" | "produto_id" | "quantidade", ExtArgs["result"]["rel_produto_ingrediente"]>;
export type rel_produto_ingredienteInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tbl_ingrediente?: boolean | Prisma.tbl_ingredienteDefaultArgs<ExtArgs>;
    tbl_produto?: boolean | Prisma.tbl_produtoDefaultArgs<ExtArgs>;
};
export type rel_produto_ingredienteIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tbl_ingrediente?: boolean | Prisma.tbl_ingredienteDefaultArgs<ExtArgs>;
    tbl_produto?: boolean | Prisma.tbl_produtoDefaultArgs<ExtArgs>;
};
export type rel_produto_ingredienteIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tbl_ingrediente?: boolean | Prisma.tbl_ingredienteDefaultArgs<ExtArgs>;
    tbl_produto?: boolean | Prisma.tbl_produtoDefaultArgs<ExtArgs>;
};
export type $rel_produto_ingredientePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "rel_produto_ingrediente";
    objects: {
        tbl_ingrediente: Prisma.$tbl_ingredientePayload<ExtArgs>;
        tbl_produto: Prisma.$tbl_produtoPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        ingrediente_id: number;
        produto_id: number;
        quantidade: number;
    }, ExtArgs["result"]["rel_produto_ingrediente"]>;
    composites: {};
};
export type rel_produto_ingredienteGetPayload<S extends boolean | null | undefined | rel_produto_ingredienteDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$rel_produto_ingredientePayload, S>;
export type rel_produto_ingredienteCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<rel_produto_ingredienteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Rel_produto_ingredienteCountAggregateInputType | true;
};
export interface rel_produto_ingredienteDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['rel_produto_ingrediente'];
        meta: {
            name: 'rel_produto_ingrediente';
        };
    };
    /**
     * Find zero or one Rel_produto_ingrediente that matches the filter.
     * @param {rel_produto_ingredienteFindUniqueArgs} args - Arguments to find a Rel_produto_ingrediente
     * @example
     * // Get one Rel_produto_ingrediente
     * const rel_produto_ingrediente = await prisma.rel_produto_ingrediente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends rel_produto_ingredienteFindUniqueArgs>(args: Prisma.SelectSubset<T, rel_produto_ingredienteFindUniqueArgs<ExtArgs>>): Prisma.Prisma__rel_produto_ingredienteClient<runtime.Types.Result.GetResult<Prisma.$rel_produto_ingredientePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Rel_produto_ingrediente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {rel_produto_ingredienteFindUniqueOrThrowArgs} args - Arguments to find a Rel_produto_ingrediente
     * @example
     * // Get one Rel_produto_ingrediente
     * const rel_produto_ingrediente = await prisma.rel_produto_ingrediente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends rel_produto_ingredienteFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, rel_produto_ingredienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__rel_produto_ingredienteClient<runtime.Types.Result.GetResult<Prisma.$rel_produto_ingredientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Rel_produto_ingrediente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rel_produto_ingredienteFindFirstArgs} args - Arguments to find a Rel_produto_ingrediente
     * @example
     * // Get one Rel_produto_ingrediente
     * const rel_produto_ingrediente = await prisma.rel_produto_ingrediente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends rel_produto_ingredienteFindFirstArgs>(args?: Prisma.SelectSubset<T, rel_produto_ingredienteFindFirstArgs<ExtArgs>>): Prisma.Prisma__rel_produto_ingredienteClient<runtime.Types.Result.GetResult<Prisma.$rel_produto_ingredientePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Rel_produto_ingrediente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rel_produto_ingredienteFindFirstOrThrowArgs} args - Arguments to find a Rel_produto_ingrediente
     * @example
     * // Get one Rel_produto_ingrediente
     * const rel_produto_ingrediente = await prisma.rel_produto_ingrediente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends rel_produto_ingredienteFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, rel_produto_ingredienteFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__rel_produto_ingredienteClient<runtime.Types.Result.GetResult<Prisma.$rel_produto_ingredientePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Rel_produto_ingredientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rel_produto_ingredienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rel_produto_ingredientes
     * const rel_produto_ingredientes = await prisma.rel_produto_ingrediente.findMany()
     *
     * // Get first 10 Rel_produto_ingredientes
     * const rel_produto_ingredientes = await prisma.rel_produto_ingrediente.findMany({ take: 10 })
     *
     * // Only select the `ingrediente_id`
     * const rel_produto_ingredienteWithIngrediente_idOnly = await prisma.rel_produto_ingrediente.findMany({ select: { ingrediente_id: true } })
     *
     */
    findMany<T extends rel_produto_ingredienteFindManyArgs>(args?: Prisma.SelectSubset<T, rel_produto_ingredienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$rel_produto_ingredientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Rel_produto_ingrediente.
     * @param {rel_produto_ingredienteCreateArgs} args - Arguments to create a Rel_produto_ingrediente.
     * @example
     * // Create one Rel_produto_ingrediente
     * const Rel_produto_ingrediente = await prisma.rel_produto_ingrediente.create({
     *   data: {
     *     // ... data to create a Rel_produto_ingrediente
     *   }
     * })
     *
     */
    create<T extends rel_produto_ingredienteCreateArgs>(args: Prisma.SelectSubset<T, rel_produto_ingredienteCreateArgs<ExtArgs>>): Prisma.Prisma__rel_produto_ingredienteClient<runtime.Types.Result.GetResult<Prisma.$rel_produto_ingredientePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Rel_produto_ingredientes.
     * @param {rel_produto_ingredienteCreateManyArgs} args - Arguments to create many Rel_produto_ingredientes.
     * @example
     * // Create many Rel_produto_ingredientes
     * const rel_produto_ingrediente = await prisma.rel_produto_ingrediente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends rel_produto_ingredienteCreateManyArgs>(args?: Prisma.SelectSubset<T, rel_produto_ingredienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Rel_produto_ingredientes and returns the data saved in the database.
     * @param {rel_produto_ingredienteCreateManyAndReturnArgs} args - Arguments to create many Rel_produto_ingredientes.
     * @example
     * // Create many Rel_produto_ingredientes
     * const rel_produto_ingrediente = await prisma.rel_produto_ingrediente.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Rel_produto_ingredientes and only return the `ingrediente_id`
     * const rel_produto_ingredienteWithIngrediente_idOnly = await prisma.rel_produto_ingrediente.createManyAndReturn({
     *   select: { ingrediente_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends rel_produto_ingredienteCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, rel_produto_ingredienteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$rel_produto_ingredientePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Rel_produto_ingrediente.
     * @param {rel_produto_ingredienteDeleteArgs} args - Arguments to delete one Rel_produto_ingrediente.
     * @example
     * // Delete one Rel_produto_ingrediente
     * const Rel_produto_ingrediente = await prisma.rel_produto_ingrediente.delete({
     *   where: {
     *     // ... filter to delete one Rel_produto_ingrediente
     *   }
     * })
     *
     */
    delete<T extends rel_produto_ingredienteDeleteArgs>(args: Prisma.SelectSubset<T, rel_produto_ingredienteDeleteArgs<ExtArgs>>): Prisma.Prisma__rel_produto_ingredienteClient<runtime.Types.Result.GetResult<Prisma.$rel_produto_ingredientePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Rel_produto_ingrediente.
     * @param {rel_produto_ingredienteUpdateArgs} args - Arguments to update one Rel_produto_ingrediente.
     * @example
     * // Update one Rel_produto_ingrediente
     * const rel_produto_ingrediente = await prisma.rel_produto_ingrediente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends rel_produto_ingredienteUpdateArgs>(args: Prisma.SelectSubset<T, rel_produto_ingredienteUpdateArgs<ExtArgs>>): Prisma.Prisma__rel_produto_ingredienteClient<runtime.Types.Result.GetResult<Prisma.$rel_produto_ingredientePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Rel_produto_ingredientes.
     * @param {rel_produto_ingredienteDeleteManyArgs} args - Arguments to filter Rel_produto_ingredientes to delete.
     * @example
     * // Delete a few Rel_produto_ingredientes
     * const { count } = await prisma.rel_produto_ingrediente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends rel_produto_ingredienteDeleteManyArgs>(args?: Prisma.SelectSubset<T, rel_produto_ingredienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Rel_produto_ingredientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rel_produto_ingredienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rel_produto_ingredientes
     * const rel_produto_ingrediente = await prisma.rel_produto_ingrediente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends rel_produto_ingredienteUpdateManyArgs>(args: Prisma.SelectSubset<T, rel_produto_ingredienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Rel_produto_ingredientes and returns the data updated in the database.
     * @param {rel_produto_ingredienteUpdateManyAndReturnArgs} args - Arguments to update many Rel_produto_ingredientes.
     * @example
     * // Update many Rel_produto_ingredientes
     * const rel_produto_ingrediente = await prisma.rel_produto_ingrediente.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Rel_produto_ingredientes and only return the `ingrediente_id`
     * const rel_produto_ingredienteWithIngrediente_idOnly = await prisma.rel_produto_ingrediente.updateManyAndReturn({
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
    updateManyAndReturn<T extends rel_produto_ingredienteUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, rel_produto_ingredienteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$rel_produto_ingredientePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Rel_produto_ingrediente.
     * @param {rel_produto_ingredienteUpsertArgs} args - Arguments to update or create a Rel_produto_ingrediente.
     * @example
     * // Update or create a Rel_produto_ingrediente
     * const rel_produto_ingrediente = await prisma.rel_produto_ingrediente.upsert({
     *   create: {
     *     // ... data to create a Rel_produto_ingrediente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rel_produto_ingrediente we want to update
     *   }
     * })
     */
    upsert<T extends rel_produto_ingredienteUpsertArgs>(args: Prisma.SelectSubset<T, rel_produto_ingredienteUpsertArgs<ExtArgs>>): Prisma.Prisma__rel_produto_ingredienteClient<runtime.Types.Result.GetResult<Prisma.$rel_produto_ingredientePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Rel_produto_ingredientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rel_produto_ingredienteCountArgs} args - Arguments to filter Rel_produto_ingredientes to count.
     * @example
     * // Count the number of Rel_produto_ingredientes
     * const count = await prisma.rel_produto_ingrediente.count({
     *   where: {
     *     // ... the filter for the Rel_produto_ingredientes we want to count
     *   }
     * })
    **/
    count<T extends rel_produto_ingredienteCountArgs>(args?: Prisma.Subset<T, rel_produto_ingredienteCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Rel_produto_ingredienteCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Rel_produto_ingrediente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Rel_produto_ingredienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Rel_produto_ingredienteAggregateArgs>(args: Prisma.Subset<T, Rel_produto_ingredienteAggregateArgs>): Prisma.PrismaPromise<GetRel_produto_ingredienteAggregateType<T>>;
    /**
     * Group by Rel_produto_ingrediente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rel_produto_ingredienteGroupByArgs} args - Group by arguments.
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
    groupBy<T extends rel_produto_ingredienteGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: rel_produto_ingredienteGroupByArgs['orderBy'];
    } : {
        orderBy?: rel_produto_ingredienteGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, rel_produto_ingredienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRel_produto_ingredienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the rel_produto_ingrediente model
     */
    readonly fields: rel_produto_ingredienteFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for rel_produto_ingrediente.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__rel_produto_ingredienteClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    tbl_ingrediente<T extends Prisma.tbl_ingredienteDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.tbl_ingredienteDefaultArgs<ExtArgs>>): Prisma.Prisma__tbl_ingredienteClient<runtime.Types.Result.GetResult<Prisma.$tbl_ingredientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the rel_produto_ingrediente model
 */
export interface rel_produto_ingredienteFieldRefs {
    readonly ingrediente_id: Prisma.FieldRef<"rel_produto_ingrediente", 'Int'>;
    readonly produto_id: Prisma.FieldRef<"rel_produto_ingrediente", 'Int'>;
    readonly quantidade: Prisma.FieldRef<"rel_produto_ingrediente", 'Int'>;
}
/**
 * rel_produto_ingrediente findUnique
 */
export type rel_produto_ingredienteFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which rel_produto_ingrediente to fetch.
     */
    where: Prisma.rel_produto_ingredienteWhereUniqueInput;
};
/**
 * rel_produto_ingrediente findUniqueOrThrow
 */
export type rel_produto_ingredienteFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which rel_produto_ingrediente to fetch.
     */
    where: Prisma.rel_produto_ingredienteWhereUniqueInput;
};
/**
 * rel_produto_ingrediente findFirst
 */
export type rel_produto_ingredienteFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which rel_produto_ingrediente to fetch.
     */
    where?: Prisma.rel_produto_ingredienteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of rel_produto_ingredientes to fetch.
     */
    orderBy?: Prisma.rel_produto_ingredienteOrderByWithRelationInput | Prisma.rel_produto_ingredienteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for rel_produto_ingredientes.
     */
    cursor?: Prisma.rel_produto_ingredienteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` rel_produto_ingredientes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` rel_produto_ingredientes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of rel_produto_ingredientes.
     */
    distinct?: Prisma.Rel_produto_ingredienteScalarFieldEnum | Prisma.Rel_produto_ingredienteScalarFieldEnum[];
};
/**
 * rel_produto_ingrediente findFirstOrThrow
 */
export type rel_produto_ingredienteFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which rel_produto_ingrediente to fetch.
     */
    where?: Prisma.rel_produto_ingredienteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of rel_produto_ingredientes to fetch.
     */
    orderBy?: Prisma.rel_produto_ingredienteOrderByWithRelationInput | Prisma.rel_produto_ingredienteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for rel_produto_ingredientes.
     */
    cursor?: Prisma.rel_produto_ingredienteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` rel_produto_ingredientes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` rel_produto_ingredientes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of rel_produto_ingredientes.
     */
    distinct?: Prisma.Rel_produto_ingredienteScalarFieldEnum | Prisma.Rel_produto_ingredienteScalarFieldEnum[];
};
/**
 * rel_produto_ingrediente findMany
 */
export type rel_produto_ingredienteFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which rel_produto_ingredientes to fetch.
     */
    where?: Prisma.rel_produto_ingredienteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of rel_produto_ingredientes to fetch.
     */
    orderBy?: Prisma.rel_produto_ingredienteOrderByWithRelationInput | Prisma.rel_produto_ingredienteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing rel_produto_ingredientes.
     */
    cursor?: Prisma.rel_produto_ingredienteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` rel_produto_ingredientes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` rel_produto_ingredientes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of rel_produto_ingredientes.
     */
    distinct?: Prisma.Rel_produto_ingredienteScalarFieldEnum | Prisma.Rel_produto_ingredienteScalarFieldEnum[];
};
/**
 * rel_produto_ingrediente create
 */
export type rel_produto_ingredienteCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a rel_produto_ingrediente.
     */
    data: Prisma.XOR<Prisma.rel_produto_ingredienteCreateInput, Prisma.rel_produto_ingredienteUncheckedCreateInput>;
};
/**
 * rel_produto_ingrediente createMany
 */
export type rel_produto_ingredienteCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many rel_produto_ingredientes.
     */
    data: Prisma.rel_produto_ingredienteCreateManyInput | Prisma.rel_produto_ingredienteCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * rel_produto_ingrediente createManyAndReturn
 */
export type rel_produto_ingredienteCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rel_produto_ingrediente
     */
    select?: Prisma.rel_produto_ingredienteSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the rel_produto_ingrediente
     */
    omit?: Prisma.rel_produto_ingredienteOmit<ExtArgs> | null;
    /**
     * The data used to create many rel_produto_ingredientes.
     */
    data: Prisma.rel_produto_ingredienteCreateManyInput | Prisma.rel_produto_ingredienteCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.rel_produto_ingredienteIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * rel_produto_ingrediente update
 */
export type rel_produto_ingredienteUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a rel_produto_ingrediente.
     */
    data: Prisma.XOR<Prisma.rel_produto_ingredienteUpdateInput, Prisma.rel_produto_ingredienteUncheckedUpdateInput>;
    /**
     * Choose, which rel_produto_ingrediente to update.
     */
    where: Prisma.rel_produto_ingredienteWhereUniqueInput;
};
/**
 * rel_produto_ingrediente updateMany
 */
export type rel_produto_ingredienteUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update rel_produto_ingredientes.
     */
    data: Prisma.XOR<Prisma.rel_produto_ingredienteUpdateManyMutationInput, Prisma.rel_produto_ingredienteUncheckedUpdateManyInput>;
    /**
     * Filter which rel_produto_ingredientes to update
     */
    where?: Prisma.rel_produto_ingredienteWhereInput;
    /**
     * Limit how many rel_produto_ingredientes to update.
     */
    limit?: number;
};
/**
 * rel_produto_ingrediente updateManyAndReturn
 */
export type rel_produto_ingredienteUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rel_produto_ingrediente
     */
    select?: Prisma.rel_produto_ingredienteSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the rel_produto_ingrediente
     */
    omit?: Prisma.rel_produto_ingredienteOmit<ExtArgs> | null;
    /**
     * The data used to update rel_produto_ingredientes.
     */
    data: Prisma.XOR<Prisma.rel_produto_ingredienteUpdateManyMutationInput, Prisma.rel_produto_ingredienteUncheckedUpdateManyInput>;
    /**
     * Filter which rel_produto_ingredientes to update
     */
    where?: Prisma.rel_produto_ingredienteWhereInput;
    /**
     * Limit how many rel_produto_ingredientes to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.rel_produto_ingredienteIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * rel_produto_ingrediente upsert
 */
export type rel_produto_ingredienteUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the rel_produto_ingrediente to update in case it exists.
     */
    where: Prisma.rel_produto_ingredienteWhereUniqueInput;
    /**
     * In case the rel_produto_ingrediente found by the `where` argument doesn't exist, create a new rel_produto_ingrediente with this data.
     */
    create: Prisma.XOR<Prisma.rel_produto_ingredienteCreateInput, Prisma.rel_produto_ingredienteUncheckedCreateInput>;
    /**
     * In case the rel_produto_ingrediente was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.rel_produto_ingredienteUpdateInput, Prisma.rel_produto_ingredienteUncheckedUpdateInput>;
};
/**
 * rel_produto_ingrediente delete
 */
export type rel_produto_ingredienteDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which rel_produto_ingrediente to delete.
     */
    where: Prisma.rel_produto_ingredienteWhereUniqueInput;
};
/**
 * rel_produto_ingrediente deleteMany
 */
export type rel_produto_ingredienteDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which rel_produto_ingredientes to delete
     */
    where?: Prisma.rel_produto_ingredienteWhereInput;
    /**
     * Limit how many rel_produto_ingredientes to delete.
     */
    limit?: number;
};
/**
 * rel_produto_ingrediente without action
 */
export type rel_produto_ingredienteDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
//# sourceMappingURL=rel_produto_ingrediente.d.ts.map