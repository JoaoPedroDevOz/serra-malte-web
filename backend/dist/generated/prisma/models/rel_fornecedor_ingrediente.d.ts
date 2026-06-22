import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.ts";
/**
 * Model rel_fornecedor_ingrediente
 *
 */
export type rel_fornecedor_ingredienteModel = runtime.Types.Result.DefaultSelection<Prisma.$rel_fornecedor_ingredientePayload>;
export type AggregateRel_fornecedor_ingrediente = {
    _count: Rel_fornecedor_ingredienteCountAggregateOutputType | null;
    _avg: Rel_fornecedor_ingredienteAvgAggregateOutputType | null;
    _sum: Rel_fornecedor_ingredienteSumAggregateOutputType | null;
    _min: Rel_fornecedor_ingredienteMinAggregateOutputType | null;
    _max: Rel_fornecedor_ingredienteMaxAggregateOutputType | null;
};
export type Rel_fornecedor_ingredienteAvgAggregateOutputType = {
    fornecedor_id: number | null;
    ingrediente_id: number | null;
    valor_fornecimento: runtime.Decimal | null;
    quantidade: number | null;
};
export type Rel_fornecedor_ingredienteSumAggregateOutputType = {
    fornecedor_id: number | null;
    ingrediente_id: number | null;
    valor_fornecimento: runtime.Decimal | null;
    quantidade: number | null;
};
export type Rel_fornecedor_ingredienteMinAggregateOutputType = {
    fornecedor_id: number | null;
    ingrediente_id: number | null;
    data_hora_fornecimento: Date | null;
    valor_fornecimento: runtime.Decimal | null;
    quantidade: number | null;
};
export type Rel_fornecedor_ingredienteMaxAggregateOutputType = {
    fornecedor_id: number | null;
    ingrediente_id: number | null;
    data_hora_fornecimento: Date | null;
    valor_fornecimento: runtime.Decimal | null;
    quantidade: number | null;
};
export type Rel_fornecedor_ingredienteCountAggregateOutputType = {
    fornecedor_id: number;
    ingrediente_id: number;
    data_hora_fornecimento: number;
    valor_fornecimento: number;
    quantidade: number;
    _all: number;
};
export type Rel_fornecedor_ingredienteAvgAggregateInputType = {
    fornecedor_id?: true;
    ingrediente_id?: true;
    valor_fornecimento?: true;
    quantidade?: true;
};
export type Rel_fornecedor_ingredienteSumAggregateInputType = {
    fornecedor_id?: true;
    ingrediente_id?: true;
    valor_fornecimento?: true;
    quantidade?: true;
};
export type Rel_fornecedor_ingredienteMinAggregateInputType = {
    fornecedor_id?: true;
    ingrediente_id?: true;
    data_hora_fornecimento?: true;
    valor_fornecimento?: true;
    quantidade?: true;
};
export type Rel_fornecedor_ingredienteMaxAggregateInputType = {
    fornecedor_id?: true;
    ingrediente_id?: true;
    data_hora_fornecimento?: true;
    valor_fornecimento?: true;
    quantidade?: true;
};
export type Rel_fornecedor_ingredienteCountAggregateInputType = {
    fornecedor_id?: true;
    ingrediente_id?: true;
    data_hora_fornecimento?: true;
    valor_fornecimento?: true;
    quantidade?: true;
    _all?: true;
};
export type Rel_fornecedor_ingredienteAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which rel_fornecedor_ingrediente to aggregate.
     */
    where?: Prisma.rel_fornecedor_ingredienteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of rel_fornecedor_ingredientes to fetch.
     */
    orderBy?: Prisma.rel_fornecedor_ingredienteOrderByWithRelationInput | Prisma.rel_fornecedor_ingredienteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.rel_fornecedor_ingredienteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` rel_fornecedor_ingredientes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` rel_fornecedor_ingredientes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned rel_fornecedor_ingredientes
    **/
    _count?: true | Rel_fornecedor_ingredienteCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: Rel_fornecedor_ingredienteAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: Rel_fornecedor_ingredienteSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: Rel_fornecedor_ingredienteMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: Rel_fornecedor_ingredienteMaxAggregateInputType;
};
export type GetRel_fornecedor_ingredienteAggregateType<T extends Rel_fornecedor_ingredienteAggregateArgs> = {
    [P in keyof T & keyof AggregateRel_fornecedor_ingrediente]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRel_fornecedor_ingrediente[P]> : Prisma.GetScalarType<T[P], AggregateRel_fornecedor_ingrediente[P]>;
};
export type rel_fornecedor_ingredienteGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.rel_fornecedor_ingredienteWhereInput;
    orderBy?: Prisma.rel_fornecedor_ingredienteOrderByWithAggregationInput | Prisma.rel_fornecedor_ingredienteOrderByWithAggregationInput[];
    by: Prisma.Rel_fornecedor_ingredienteScalarFieldEnum[] | Prisma.Rel_fornecedor_ingredienteScalarFieldEnum;
    having?: Prisma.rel_fornecedor_ingredienteScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Rel_fornecedor_ingredienteCountAggregateInputType | true;
    _avg?: Rel_fornecedor_ingredienteAvgAggregateInputType;
    _sum?: Rel_fornecedor_ingredienteSumAggregateInputType;
    _min?: Rel_fornecedor_ingredienteMinAggregateInputType;
    _max?: Rel_fornecedor_ingredienteMaxAggregateInputType;
};
export type Rel_fornecedor_ingredienteGroupByOutputType = {
    fornecedor_id: number;
    ingrediente_id: number;
    data_hora_fornecimento: Date;
    valor_fornecimento: runtime.Decimal;
    quantidade: number;
    _count: Rel_fornecedor_ingredienteCountAggregateOutputType | null;
    _avg: Rel_fornecedor_ingredienteAvgAggregateOutputType | null;
    _sum: Rel_fornecedor_ingredienteSumAggregateOutputType | null;
    _min: Rel_fornecedor_ingredienteMinAggregateOutputType | null;
    _max: Rel_fornecedor_ingredienteMaxAggregateOutputType | null;
};
export type GetRel_fornecedor_ingredienteGroupByPayload<T extends rel_fornecedor_ingredienteGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Rel_fornecedor_ingredienteGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Rel_fornecedor_ingredienteGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Rel_fornecedor_ingredienteGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Rel_fornecedor_ingredienteGroupByOutputType[P]>;
}>>;
export type rel_fornecedor_ingredienteWhereInput = {
    AND?: Prisma.rel_fornecedor_ingredienteWhereInput | Prisma.rel_fornecedor_ingredienteWhereInput[];
    OR?: Prisma.rel_fornecedor_ingredienteWhereInput[];
    NOT?: Prisma.rel_fornecedor_ingredienteWhereInput | Prisma.rel_fornecedor_ingredienteWhereInput[];
    fornecedor_id?: Prisma.IntFilter<"rel_fornecedor_ingrediente"> | number;
    ingrediente_id?: Prisma.IntFilter<"rel_fornecedor_ingrediente"> | number;
    data_hora_fornecimento?: Prisma.DateTimeFilter<"rel_fornecedor_ingrediente"> | Date | string;
    valor_fornecimento?: Prisma.DecimalFilter<"rel_fornecedor_ingrediente"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    quantidade?: Prisma.IntFilter<"rel_fornecedor_ingrediente"> | number;
    tbl_fornecedor?: Prisma.XOR<Prisma.Tbl_fornecedorScalarRelationFilter, Prisma.tbl_fornecedorWhereInput>;
    tbl_ingrediente?: Prisma.XOR<Prisma.Tbl_ingredienteScalarRelationFilter, Prisma.tbl_ingredienteWhereInput>;
};
export type rel_fornecedor_ingredienteOrderByWithRelationInput = {
    fornecedor_id?: Prisma.SortOrder;
    ingrediente_id?: Prisma.SortOrder;
    data_hora_fornecimento?: Prisma.SortOrder;
    valor_fornecimento?: Prisma.SortOrder;
    quantidade?: Prisma.SortOrder;
    tbl_fornecedor?: Prisma.tbl_fornecedorOrderByWithRelationInput;
    tbl_ingrediente?: Prisma.tbl_ingredienteOrderByWithRelationInput;
};
export type rel_fornecedor_ingredienteWhereUniqueInput = Prisma.AtLeast<{
    fornecedor_id_ingrediente_id_data_hora_fornecimento?: Prisma.rel_fornecedor_ingredienteFornecedor_idIngrediente_idData_hora_fornecimentoCompoundUniqueInput;
    AND?: Prisma.rel_fornecedor_ingredienteWhereInput | Prisma.rel_fornecedor_ingredienteWhereInput[];
    OR?: Prisma.rel_fornecedor_ingredienteWhereInput[];
    NOT?: Prisma.rel_fornecedor_ingredienteWhereInput | Prisma.rel_fornecedor_ingredienteWhereInput[];
    fornecedor_id?: Prisma.IntFilter<"rel_fornecedor_ingrediente"> | number;
    ingrediente_id?: Prisma.IntFilter<"rel_fornecedor_ingrediente"> | number;
    data_hora_fornecimento?: Prisma.DateTimeFilter<"rel_fornecedor_ingrediente"> | Date | string;
    valor_fornecimento?: Prisma.DecimalFilter<"rel_fornecedor_ingrediente"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    quantidade?: Prisma.IntFilter<"rel_fornecedor_ingrediente"> | number;
    tbl_fornecedor?: Prisma.XOR<Prisma.Tbl_fornecedorScalarRelationFilter, Prisma.tbl_fornecedorWhereInput>;
    tbl_ingrediente?: Prisma.XOR<Prisma.Tbl_ingredienteScalarRelationFilter, Prisma.tbl_ingredienteWhereInput>;
}, "fornecedor_id_ingrediente_id_data_hora_fornecimento">;
export type rel_fornecedor_ingredienteOrderByWithAggregationInput = {
    fornecedor_id?: Prisma.SortOrder;
    ingrediente_id?: Prisma.SortOrder;
    data_hora_fornecimento?: Prisma.SortOrder;
    valor_fornecimento?: Prisma.SortOrder;
    quantidade?: Prisma.SortOrder;
    _count?: Prisma.rel_fornecedor_ingredienteCountOrderByAggregateInput;
    _avg?: Prisma.rel_fornecedor_ingredienteAvgOrderByAggregateInput;
    _max?: Prisma.rel_fornecedor_ingredienteMaxOrderByAggregateInput;
    _min?: Prisma.rel_fornecedor_ingredienteMinOrderByAggregateInput;
    _sum?: Prisma.rel_fornecedor_ingredienteSumOrderByAggregateInput;
};
export type rel_fornecedor_ingredienteScalarWhereWithAggregatesInput = {
    AND?: Prisma.rel_fornecedor_ingredienteScalarWhereWithAggregatesInput | Prisma.rel_fornecedor_ingredienteScalarWhereWithAggregatesInput[];
    OR?: Prisma.rel_fornecedor_ingredienteScalarWhereWithAggregatesInput[];
    NOT?: Prisma.rel_fornecedor_ingredienteScalarWhereWithAggregatesInput | Prisma.rel_fornecedor_ingredienteScalarWhereWithAggregatesInput[];
    fornecedor_id?: Prisma.IntWithAggregatesFilter<"rel_fornecedor_ingrediente"> | number;
    ingrediente_id?: Prisma.IntWithAggregatesFilter<"rel_fornecedor_ingrediente"> | number;
    data_hora_fornecimento?: Prisma.DateTimeWithAggregatesFilter<"rel_fornecedor_ingrediente"> | Date | string;
    valor_fornecimento?: Prisma.DecimalWithAggregatesFilter<"rel_fornecedor_ingrediente"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    quantidade?: Prisma.IntWithAggregatesFilter<"rel_fornecedor_ingrediente"> | number;
};
export type rel_fornecedor_ingredienteCreateInput = {
    data_hora_fornecimento: Date | string;
    valor_fornecimento: runtime.Decimal | runtime.DecimalJsLike | number | string;
    quantidade?: number;
    tbl_fornecedor?: Prisma.tbl_fornecedorCreateNestedOneWithoutRel_fornecedor_ingredienteInput;
    tbl_ingrediente?: Prisma.tbl_ingredienteCreateNestedOneWithoutRel_fornecedor_ingredienteInput;
};
export type rel_fornecedor_ingredienteUncheckedCreateInput = {
    fornecedor_id?: number;
    ingrediente_id?: number;
    data_hora_fornecimento: Date | string;
    valor_fornecimento: runtime.Decimal | runtime.DecimalJsLike | number | string;
    quantidade?: number;
};
export type rel_fornecedor_ingredienteUpdateInput = {
    data_hora_fornecimento?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    valor_fornecimento?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    quantidade?: Prisma.IntFieldUpdateOperationsInput | number;
    tbl_fornecedor?: Prisma.tbl_fornecedorUpdateOneRequiredWithoutRel_fornecedor_ingredienteNestedInput;
    tbl_ingrediente?: Prisma.tbl_ingredienteUpdateOneRequiredWithoutRel_fornecedor_ingredienteNestedInput;
};
export type rel_fornecedor_ingredienteUncheckedUpdateInput = {
    fornecedor_id?: Prisma.IntFieldUpdateOperationsInput | number;
    ingrediente_id?: Prisma.IntFieldUpdateOperationsInput | number;
    data_hora_fornecimento?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    valor_fornecimento?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    quantidade?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type rel_fornecedor_ingredienteCreateManyInput = {
    fornecedor_id?: number;
    ingrediente_id?: number;
    data_hora_fornecimento: Date | string;
    valor_fornecimento: runtime.Decimal | runtime.DecimalJsLike | number | string;
    quantidade?: number;
};
export type rel_fornecedor_ingredienteUpdateManyMutationInput = {
    data_hora_fornecimento?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    valor_fornecimento?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    quantidade?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type rel_fornecedor_ingredienteUncheckedUpdateManyInput = {
    fornecedor_id?: Prisma.IntFieldUpdateOperationsInput | number;
    ingrediente_id?: Prisma.IntFieldUpdateOperationsInput | number;
    data_hora_fornecimento?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    valor_fornecimento?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    quantidade?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type rel_fornecedor_ingredienteFornecedor_idIngrediente_idData_hora_fornecimentoCompoundUniqueInput = {
    fornecedor_id: number;
    ingrediente_id: number;
    data_hora_fornecimento: Date | string;
};
export type rel_fornecedor_ingredienteCountOrderByAggregateInput = {
    fornecedor_id?: Prisma.SortOrder;
    ingrediente_id?: Prisma.SortOrder;
    data_hora_fornecimento?: Prisma.SortOrder;
    valor_fornecimento?: Prisma.SortOrder;
    quantidade?: Prisma.SortOrder;
};
export type rel_fornecedor_ingredienteAvgOrderByAggregateInput = {
    fornecedor_id?: Prisma.SortOrder;
    ingrediente_id?: Prisma.SortOrder;
    valor_fornecimento?: Prisma.SortOrder;
    quantidade?: Prisma.SortOrder;
};
export type rel_fornecedor_ingredienteMaxOrderByAggregateInput = {
    fornecedor_id?: Prisma.SortOrder;
    ingrediente_id?: Prisma.SortOrder;
    data_hora_fornecimento?: Prisma.SortOrder;
    valor_fornecimento?: Prisma.SortOrder;
    quantidade?: Prisma.SortOrder;
};
export type rel_fornecedor_ingredienteMinOrderByAggregateInput = {
    fornecedor_id?: Prisma.SortOrder;
    ingrediente_id?: Prisma.SortOrder;
    data_hora_fornecimento?: Prisma.SortOrder;
    valor_fornecimento?: Prisma.SortOrder;
    quantidade?: Prisma.SortOrder;
};
export type rel_fornecedor_ingredienteSumOrderByAggregateInput = {
    fornecedor_id?: Prisma.SortOrder;
    ingrediente_id?: Prisma.SortOrder;
    valor_fornecimento?: Prisma.SortOrder;
    quantidade?: Prisma.SortOrder;
};
export type Rel_fornecedor_ingredienteListRelationFilter = {
    every?: Prisma.rel_fornecedor_ingredienteWhereInput;
    some?: Prisma.rel_fornecedor_ingredienteWhereInput;
    none?: Prisma.rel_fornecedor_ingredienteWhereInput;
};
export type rel_fornecedor_ingredienteOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type DecimalFieldUpdateOperationsInput = {
    set?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    increment?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    decrement?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    multiply?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    divide?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type rel_fornecedor_ingredienteCreateNestedManyWithoutTbl_fornecedorInput = {
    create?: Prisma.XOR<Prisma.rel_fornecedor_ingredienteCreateWithoutTbl_fornecedorInput, Prisma.rel_fornecedor_ingredienteUncheckedCreateWithoutTbl_fornecedorInput> | Prisma.rel_fornecedor_ingredienteCreateWithoutTbl_fornecedorInput[] | Prisma.rel_fornecedor_ingredienteUncheckedCreateWithoutTbl_fornecedorInput[];
    connectOrCreate?: Prisma.rel_fornecedor_ingredienteCreateOrConnectWithoutTbl_fornecedorInput | Prisma.rel_fornecedor_ingredienteCreateOrConnectWithoutTbl_fornecedorInput[];
    createMany?: Prisma.rel_fornecedor_ingredienteCreateManyTbl_fornecedorInputEnvelope;
    connect?: Prisma.rel_fornecedor_ingredienteWhereUniqueInput | Prisma.rel_fornecedor_ingredienteWhereUniqueInput[];
};
export type rel_fornecedor_ingredienteUncheckedCreateNestedManyWithoutTbl_fornecedorInput = {
    create?: Prisma.XOR<Prisma.rel_fornecedor_ingredienteCreateWithoutTbl_fornecedorInput, Prisma.rel_fornecedor_ingredienteUncheckedCreateWithoutTbl_fornecedorInput> | Prisma.rel_fornecedor_ingredienteCreateWithoutTbl_fornecedorInput[] | Prisma.rel_fornecedor_ingredienteUncheckedCreateWithoutTbl_fornecedorInput[];
    connectOrCreate?: Prisma.rel_fornecedor_ingredienteCreateOrConnectWithoutTbl_fornecedorInput | Prisma.rel_fornecedor_ingredienteCreateOrConnectWithoutTbl_fornecedorInput[];
    createMany?: Prisma.rel_fornecedor_ingredienteCreateManyTbl_fornecedorInputEnvelope;
    connect?: Prisma.rel_fornecedor_ingredienteWhereUniqueInput | Prisma.rel_fornecedor_ingredienteWhereUniqueInput[];
};
export type rel_fornecedor_ingredienteUpdateManyWithoutTbl_fornecedorNestedInput = {
    create?: Prisma.XOR<Prisma.rel_fornecedor_ingredienteCreateWithoutTbl_fornecedorInput, Prisma.rel_fornecedor_ingredienteUncheckedCreateWithoutTbl_fornecedorInput> | Prisma.rel_fornecedor_ingredienteCreateWithoutTbl_fornecedorInput[] | Prisma.rel_fornecedor_ingredienteUncheckedCreateWithoutTbl_fornecedorInput[];
    connectOrCreate?: Prisma.rel_fornecedor_ingredienteCreateOrConnectWithoutTbl_fornecedorInput | Prisma.rel_fornecedor_ingredienteCreateOrConnectWithoutTbl_fornecedorInput[];
    upsert?: Prisma.rel_fornecedor_ingredienteUpsertWithWhereUniqueWithoutTbl_fornecedorInput | Prisma.rel_fornecedor_ingredienteUpsertWithWhereUniqueWithoutTbl_fornecedorInput[];
    createMany?: Prisma.rel_fornecedor_ingredienteCreateManyTbl_fornecedorInputEnvelope;
    set?: Prisma.rel_fornecedor_ingredienteWhereUniqueInput | Prisma.rel_fornecedor_ingredienteWhereUniqueInput[];
    disconnect?: Prisma.rel_fornecedor_ingredienteWhereUniqueInput | Prisma.rel_fornecedor_ingredienteWhereUniqueInput[];
    delete?: Prisma.rel_fornecedor_ingredienteWhereUniqueInput | Prisma.rel_fornecedor_ingredienteWhereUniqueInput[];
    connect?: Prisma.rel_fornecedor_ingredienteWhereUniqueInput | Prisma.rel_fornecedor_ingredienteWhereUniqueInput[];
    update?: Prisma.rel_fornecedor_ingredienteUpdateWithWhereUniqueWithoutTbl_fornecedorInput | Prisma.rel_fornecedor_ingredienteUpdateWithWhereUniqueWithoutTbl_fornecedorInput[];
    updateMany?: Prisma.rel_fornecedor_ingredienteUpdateManyWithWhereWithoutTbl_fornecedorInput | Prisma.rel_fornecedor_ingredienteUpdateManyWithWhereWithoutTbl_fornecedorInput[];
    deleteMany?: Prisma.rel_fornecedor_ingredienteScalarWhereInput | Prisma.rel_fornecedor_ingredienteScalarWhereInput[];
};
export type rel_fornecedor_ingredienteUncheckedUpdateManyWithoutTbl_fornecedorNestedInput = {
    create?: Prisma.XOR<Prisma.rel_fornecedor_ingredienteCreateWithoutTbl_fornecedorInput, Prisma.rel_fornecedor_ingredienteUncheckedCreateWithoutTbl_fornecedorInput> | Prisma.rel_fornecedor_ingredienteCreateWithoutTbl_fornecedorInput[] | Prisma.rel_fornecedor_ingredienteUncheckedCreateWithoutTbl_fornecedorInput[];
    connectOrCreate?: Prisma.rel_fornecedor_ingredienteCreateOrConnectWithoutTbl_fornecedorInput | Prisma.rel_fornecedor_ingredienteCreateOrConnectWithoutTbl_fornecedorInput[];
    upsert?: Prisma.rel_fornecedor_ingredienteUpsertWithWhereUniqueWithoutTbl_fornecedorInput | Prisma.rel_fornecedor_ingredienteUpsertWithWhereUniqueWithoutTbl_fornecedorInput[];
    createMany?: Prisma.rel_fornecedor_ingredienteCreateManyTbl_fornecedorInputEnvelope;
    set?: Prisma.rel_fornecedor_ingredienteWhereUniqueInput | Prisma.rel_fornecedor_ingredienteWhereUniqueInput[];
    disconnect?: Prisma.rel_fornecedor_ingredienteWhereUniqueInput | Prisma.rel_fornecedor_ingredienteWhereUniqueInput[];
    delete?: Prisma.rel_fornecedor_ingredienteWhereUniqueInput | Prisma.rel_fornecedor_ingredienteWhereUniqueInput[];
    connect?: Prisma.rel_fornecedor_ingredienteWhereUniqueInput | Prisma.rel_fornecedor_ingredienteWhereUniqueInput[];
    update?: Prisma.rel_fornecedor_ingredienteUpdateWithWhereUniqueWithoutTbl_fornecedorInput | Prisma.rel_fornecedor_ingredienteUpdateWithWhereUniqueWithoutTbl_fornecedorInput[];
    updateMany?: Prisma.rel_fornecedor_ingredienteUpdateManyWithWhereWithoutTbl_fornecedorInput | Prisma.rel_fornecedor_ingredienteUpdateManyWithWhereWithoutTbl_fornecedorInput[];
    deleteMany?: Prisma.rel_fornecedor_ingredienteScalarWhereInput | Prisma.rel_fornecedor_ingredienteScalarWhereInput[];
};
export type rel_fornecedor_ingredienteCreateNestedManyWithoutTbl_ingredienteInput = {
    create?: Prisma.XOR<Prisma.rel_fornecedor_ingredienteCreateWithoutTbl_ingredienteInput, Prisma.rel_fornecedor_ingredienteUncheckedCreateWithoutTbl_ingredienteInput> | Prisma.rel_fornecedor_ingredienteCreateWithoutTbl_ingredienteInput[] | Prisma.rel_fornecedor_ingredienteUncheckedCreateWithoutTbl_ingredienteInput[];
    connectOrCreate?: Prisma.rel_fornecedor_ingredienteCreateOrConnectWithoutTbl_ingredienteInput | Prisma.rel_fornecedor_ingredienteCreateOrConnectWithoutTbl_ingredienteInput[];
    createMany?: Prisma.rel_fornecedor_ingredienteCreateManyTbl_ingredienteInputEnvelope;
    connect?: Prisma.rel_fornecedor_ingredienteWhereUniqueInput | Prisma.rel_fornecedor_ingredienteWhereUniqueInput[];
};
export type rel_fornecedor_ingredienteUncheckedCreateNestedManyWithoutTbl_ingredienteInput = {
    create?: Prisma.XOR<Prisma.rel_fornecedor_ingredienteCreateWithoutTbl_ingredienteInput, Prisma.rel_fornecedor_ingredienteUncheckedCreateWithoutTbl_ingredienteInput> | Prisma.rel_fornecedor_ingredienteCreateWithoutTbl_ingredienteInput[] | Prisma.rel_fornecedor_ingredienteUncheckedCreateWithoutTbl_ingredienteInput[];
    connectOrCreate?: Prisma.rel_fornecedor_ingredienteCreateOrConnectWithoutTbl_ingredienteInput | Prisma.rel_fornecedor_ingredienteCreateOrConnectWithoutTbl_ingredienteInput[];
    createMany?: Prisma.rel_fornecedor_ingredienteCreateManyTbl_ingredienteInputEnvelope;
    connect?: Prisma.rel_fornecedor_ingredienteWhereUniqueInput | Prisma.rel_fornecedor_ingredienteWhereUniqueInput[];
};
export type rel_fornecedor_ingredienteUpdateManyWithoutTbl_ingredienteNestedInput = {
    create?: Prisma.XOR<Prisma.rel_fornecedor_ingredienteCreateWithoutTbl_ingredienteInput, Prisma.rel_fornecedor_ingredienteUncheckedCreateWithoutTbl_ingredienteInput> | Prisma.rel_fornecedor_ingredienteCreateWithoutTbl_ingredienteInput[] | Prisma.rel_fornecedor_ingredienteUncheckedCreateWithoutTbl_ingredienteInput[];
    connectOrCreate?: Prisma.rel_fornecedor_ingredienteCreateOrConnectWithoutTbl_ingredienteInput | Prisma.rel_fornecedor_ingredienteCreateOrConnectWithoutTbl_ingredienteInput[];
    upsert?: Prisma.rel_fornecedor_ingredienteUpsertWithWhereUniqueWithoutTbl_ingredienteInput | Prisma.rel_fornecedor_ingredienteUpsertWithWhereUniqueWithoutTbl_ingredienteInput[];
    createMany?: Prisma.rel_fornecedor_ingredienteCreateManyTbl_ingredienteInputEnvelope;
    set?: Prisma.rel_fornecedor_ingredienteWhereUniqueInput | Prisma.rel_fornecedor_ingredienteWhereUniqueInput[];
    disconnect?: Prisma.rel_fornecedor_ingredienteWhereUniqueInput | Prisma.rel_fornecedor_ingredienteWhereUniqueInput[];
    delete?: Prisma.rel_fornecedor_ingredienteWhereUniqueInput | Prisma.rel_fornecedor_ingredienteWhereUniqueInput[];
    connect?: Prisma.rel_fornecedor_ingredienteWhereUniqueInput | Prisma.rel_fornecedor_ingredienteWhereUniqueInput[];
    update?: Prisma.rel_fornecedor_ingredienteUpdateWithWhereUniqueWithoutTbl_ingredienteInput | Prisma.rel_fornecedor_ingredienteUpdateWithWhereUniqueWithoutTbl_ingredienteInput[];
    updateMany?: Prisma.rel_fornecedor_ingredienteUpdateManyWithWhereWithoutTbl_ingredienteInput | Prisma.rel_fornecedor_ingredienteUpdateManyWithWhereWithoutTbl_ingredienteInput[];
    deleteMany?: Prisma.rel_fornecedor_ingredienteScalarWhereInput | Prisma.rel_fornecedor_ingredienteScalarWhereInput[];
};
export type rel_fornecedor_ingredienteUncheckedUpdateManyWithoutTbl_ingredienteNestedInput = {
    create?: Prisma.XOR<Prisma.rel_fornecedor_ingredienteCreateWithoutTbl_ingredienteInput, Prisma.rel_fornecedor_ingredienteUncheckedCreateWithoutTbl_ingredienteInput> | Prisma.rel_fornecedor_ingredienteCreateWithoutTbl_ingredienteInput[] | Prisma.rel_fornecedor_ingredienteUncheckedCreateWithoutTbl_ingredienteInput[];
    connectOrCreate?: Prisma.rel_fornecedor_ingredienteCreateOrConnectWithoutTbl_ingredienteInput | Prisma.rel_fornecedor_ingredienteCreateOrConnectWithoutTbl_ingredienteInput[];
    upsert?: Prisma.rel_fornecedor_ingredienteUpsertWithWhereUniqueWithoutTbl_ingredienteInput | Prisma.rel_fornecedor_ingredienteUpsertWithWhereUniqueWithoutTbl_ingredienteInput[];
    createMany?: Prisma.rel_fornecedor_ingredienteCreateManyTbl_ingredienteInputEnvelope;
    set?: Prisma.rel_fornecedor_ingredienteWhereUniqueInput | Prisma.rel_fornecedor_ingredienteWhereUniqueInput[];
    disconnect?: Prisma.rel_fornecedor_ingredienteWhereUniqueInput | Prisma.rel_fornecedor_ingredienteWhereUniqueInput[];
    delete?: Prisma.rel_fornecedor_ingredienteWhereUniqueInput | Prisma.rel_fornecedor_ingredienteWhereUniqueInput[];
    connect?: Prisma.rel_fornecedor_ingredienteWhereUniqueInput | Prisma.rel_fornecedor_ingredienteWhereUniqueInput[];
    update?: Prisma.rel_fornecedor_ingredienteUpdateWithWhereUniqueWithoutTbl_ingredienteInput | Prisma.rel_fornecedor_ingredienteUpdateWithWhereUniqueWithoutTbl_ingredienteInput[];
    updateMany?: Prisma.rel_fornecedor_ingredienteUpdateManyWithWhereWithoutTbl_ingredienteInput | Prisma.rel_fornecedor_ingredienteUpdateManyWithWhereWithoutTbl_ingredienteInput[];
    deleteMany?: Prisma.rel_fornecedor_ingredienteScalarWhereInput | Prisma.rel_fornecedor_ingredienteScalarWhereInput[];
};
export type rel_fornecedor_ingredienteCreateWithoutTbl_fornecedorInput = {
    data_hora_fornecimento: Date | string;
    valor_fornecimento: runtime.Decimal | runtime.DecimalJsLike | number | string;
    quantidade?: number;
    tbl_ingrediente?: Prisma.tbl_ingredienteCreateNestedOneWithoutRel_fornecedor_ingredienteInput;
};
export type rel_fornecedor_ingredienteUncheckedCreateWithoutTbl_fornecedorInput = {
    ingrediente_id?: number;
    data_hora_fornecimento: Date | string;
    valor_fornecimento: runtime.Decimal | runtime.DecimalJsLike | number | string;
    quantidade?: number;
};
export type rel_fornecedor_ingredienteCreateOrConnectWithoutTbl_fornecedorInput = {
    where: Prisma.rel_fornecedor_ingredienteWhereUniqueInput;
    create: Prisma.XOR<Prisma.rel_fornecedor_ingredienteCreateWithoutTbl_fornecedorInput, Prisma.rel_fornecedor_ingredienteUncheckedCreateWithoutTbl_fornecedorInput>;
};
export type rel_fornecedor_ingredienteCreateManyTbl_fornecedorInputEnvelope = {
    data: Prisma.rel_fornecedor_ingredienteCreateManyTbl_fornecedorInput | Prisma.rel_fornecedor_ingredienteCreateManyTbl_fornecedorInput[];
    skipDuplicates?: boolean;
};
export type rel_fornecedor_ingredienteUpsertWithWhereUniqueWithoutTbl_fornecedorInput = {
    where: Prisma.rel_fornecedor_ingredienteWhereUniqueInput;
    update: Prisma.XOR<Prisma.rel_fornecedor_ingredienteUpdateWithoutTbl_fornecedorInput, Prisma.rel_fornecedor_ingredienteUncheckedUpdateWithoutTbl_fornecedorInput>;
    create: Prisma.XOR<Prisma.rel_fornecedor_ingredienteCreateWithoutTbl_fornecedorInput, Prisma.rel_fornecedor_ingredienteUncheckedCreateWithoutTbl_fornecedorInput>;
};
export type rel_fornecedor_ingredienteUpdateWithWhereUniqueWithoutTbl_fornecedorInput = {
    where: Prisma.rel_fornecedor_ingredienteWhereUniqueInput;
    data: Prisma.XOR<Prisma.rel_fornecedor_ingredienteUpdateWithoutTbl_fornecedorInput, Prisma.rel_fornecedor_ingredienteUncheckedUpdateWithoutTbl_fornecedorInput>;
};
export type rel_fornecedor_ingredienteUpdateManyWithWhereWithoutTbl_fornecedorInput = {
    where: Prisma.rel_fornecedor_ingredienteScalarWhereInput;
    data: Prisma.XOR<Prisma.rel_fornecedor_ingredienteUpdateManyMutationInput, Prisma.rel_fornecedor_ingredienteUncheckedUpdateManyWithoutTbl_fornecedorInput>;
};
export type rel_fornecedor_ingredienteScalarWhereInput = {
    AND?: Prisma.rel_fornecedor_ingredienteScalarWhereInput | Prisma.rel_fornecedor_ingredienteScalarWhereInput[];
    OR?: Prisma.rel_fornecedor_ingredienteScalarWhereInput[];
    NOT?: Prisma.rel_fornecedor_ingredienteScalarWhereInput | Prisma.rel_fornecedor_ingredienteScalarWhereInput[];
    fornecedor_id?: Prisma.IntFilter<"rel_fornecedor_ingrediente"> | number;
    ingrediente_id?: Prisma.IntFilter<"rel_fornecedor_ingrediente"> | number;
    data_hora_fornecimento?: Prisma.DateTimeFilter<"rel_fornecedor_ingrediente"> | Date | string;
    valor_fornecimento?: Prisma.DecimalFilter<"rel_fornecedor_ingrediente"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    quantidade?: Prisma.IntFilter<"rel_fornecedor_ingrediente"> | number;
};
export type rel_fornecedor_ingredienteCreateWithoutTbl_ingredienteInput = {
    data_hora_fornecimento: Date | string;
    valor_fornecimento: runtime.Decimal | runtime.DecimalJsLike | number | string;
    quantidade?: number;
    tbl_fornecedor?: Prisma.tbl_fornecedorCreateNestedOneWithoutRel_fornecedor_ingredienteInput;
};
export type rel_fornecedor_ingredienteUncheckedCreateWithoutTbl_ingredienteInput = {
    fornecedor_id?: number;
    data_hora_fornecimento: Date | string;
    valor_fornecimento: runtime.Decimal | runtime.DecimalJsLike | number | string;
    quantidade?: number;
};
export type rel_fornecedor_ingredienteCreateOrConnectWithoutTbl_ingredienteInput = {
    where: Prisma.rel_fornecedor_ingredienteWhereUniqueInput;
    create: Prisma.XOR<Prisma.rel_fornecedor_ingredienteCreateWithoutTbl_ingredienteInput, Prisma.rel_fornecedor_ingredienteUncheckedCreateWithoutTbl_ingredienteInput>;
};
export type rel_fornecedor_ingredienteCreateManyTbl_ingredienteInputEnvelope = {
    data: Prisma.rel_fornecedor_ingredienteCreateManyTbl_ingredienteInput | Prisma.rel_fornecedor_ingredienteCreateManyTbl_ingredienteInput[];
    skipDuplicates?: boolean;
};
export type rel_fornecedor_ingredienteUpsertWithWhereUniqueWithoutTbl_ingredienteInput = {
    where: Prisma.rel_fornecedor_ingredienteWhereUniqueInput;
    update: Prisma.XOR<Prisma.rel_fornecedor_ingredienteUpdateWithoutTbl_ingredienteInput, Prisma.rel_fornecedor_ingredienteUncheckedUpdateWithoutTbl_ingredienteInput>;
    create: Prisma.XOR<Prisma.rel_fornecedor_ingredienteCreateWithoutTbl_ingredienteInput, Prisma.rel_fornecedor_ingredienteUncheckedCreateWithoutTbl_ingredienteInput>;
};
export type rel_fornecedor_ingredienteUpdateWithWhereUniqueWithoutTbl_ingredienteInput = {
    where: Prisma.rel_fornecedor_ingredienteWhereUniqueInput;
    data: Prisma.XOR<Prisma.rel_fornecedor_ingredienteUpdateWithoutTbl_ingredienteInput, Prisma.rel_fornecedor_ingredienteUncheckedUpdateWithoutTbl_ingredienteInput>;
};
export type rel_fornecedor_ingredienteUpdateManyWithWhereWithoutTbl_ingredienteInput = {
    where: Prisma.rel_fornecedor_ingredienteScalarWhereInput;
    data: Prisma.XOR<Prisma.rel_fornecedor_ingredienteUpdateManyMutationInput, Prisma.rel_fornecedor_ingredienteUncheckedUpdateManyWithoutTbl_ingredienteInput>;
};
export type rel_fornecedor_ingredienteCreateManyTbl_fornecedorInput = {
    ingrediente_id?: number;
    data_hora_fornecimento: Date | string;
    valor_fornecimento: runtime.Decimal | runtime.DecimalJsLike | number | string;
    quantidade?: number;
};
export type rel_fornecedor_ingredienteUpdateWithoutTbl_fornecedorInput = {
    data_hora_fornecimento?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    valor_fornecimento?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    quantidade?: Prisma.IntFieldUpdateOperationsInput | number;
    tbl_ingrediente?: Prisma.tbl_ingredienteUpdateOneRequiredWithoutRel_fornecedor_ingredienteNestedInput;
};
export type rel_fornecedor_ingredienteUncheckedUpdateWithoutTbl_fornecedorInput = {
    ingrediente_id?: Prisma.IntFieldUpdateOperationsInput | number;
    data_hora_fornecimento?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    valor_fornecimento?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    quantidade?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type rel_fornecedor_ingredienteUncheckedUpdateManyWithoutTbl_fornecedorInput = {
    ingrediente_id?: Prisma.IntFieldUpdateOperationsInput | number;
    data_hora_fornecimento?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    valor_fornecimento?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    quantidade?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type rel_fornecedor_ingredienteCreateManyTbl_ingredienteInput = {
    fornecedor_id?: number;
    data_hora_fornecimento: Date | string;
    valor_fornecimento: runtime.Decimal | runtime.DecimalJsLike | number | string;
    quantidade?: number;
};
export type rel_fornecedor_ingredienteUpdateWithoutTbl_ingredienteInput = {
    data_hora_fornecimento?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    valor_fornecimento?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    quantidade?: Prisma.IntFieldUpdateOperationsInput | number;
    tbl_fornecedor?: Prisma.tbl_fornecedorUpdateOneRequiredWithoutRel_fornecedor_ingredienteNestedInput;
};
export type rel_fornecedor_ingredienteUncheckedUpdateWithoutTbl_ingredienteInput = {
    fornecedor_id?: Prisma.IntFieldUpdateOperationsInput | number;
    data_hora_fornecimento?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    valor_fornecimento?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    quantidade?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type rel_fornecedor_ingredienteUncheckedUpdateManyWithoutTbl_ingredienteInput = {
    fornecedor_id?: Prisma.IntFieldUpdateOperationsInput | number;
    data_hora_fornecimento?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    valor_fornecimento?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    quantidade?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type rel_fornecedor_ingredienteSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    fornecedor_id?: boolean;
    ingrediente_id?: boolean;
    data_hora_fornecimento?: boolean;
    valor_fornecimento?: boolean;
    quantidade?: boolean;
    tbl_fornecedor?: boolean | Prisma.tbl_fornecedorDefaultArgs<ExtArgs>;
    tbl_ingrediente?: boolean | Prisma.tbl_ingredienteDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["rel_fornecedor_ingrediente"]>;
export type rel_fornecedor_ingredienteSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    fornecedor_id?: boolean;
    ingrediente_id?: boolean;
    data_hora_fornecimento?: boolean;
    valor_fornecimento?: boolean;
    quantidade?: boolean;
    tbl_fornecedor?: boolean | Prisma.tbl_fornecedorDefaultArgs<ExtArgs>;
    tbl_ingrediente?: boolean | Prisma.tbl_ingredienteDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["rel_fornecedor_ingrediente"]>;
export type rel_fornecedor_ingredienteSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    fornecedor_id?: boolean;
    ingrediente_id?: boolean;
    data_hora_fornecimento?: boolean;
    valor_fornecimento?: boolean;
    quantidade?: boolean;
    tbl_fornecedor?: boolean | Prisma.tbl_fornecedorDefaultArgs<ExtArgs>;
    tbl_ingrediente?: boolean | Prisma.tbl_ingredienteDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["rel_fornecedor_ingrediente"]>;
export type rel_fornecedor_ingredienteSelectScalar = {
    fornecedor_id?: boolean;
    ingrediente_id?: boolean;
    data_hora_fornecimento?: boolean;
    valor_fornecimento?: boolean;
    quantidade?: boolean;
};
export type rel_fornecedor_ingredienteOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"fornecedor_id" | "ingrediente_id" | "data_hora_fornecimento" | "valor_fornecimento" | "quantidade", ExtArgs["result"]["rel_fornecedor_ingrediente"]>;
export type rel_fornecedor_ingredienteInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tbl_fornecedor?: boolean | Prisma.tbl_fornecedorDefaultArgs<ExtArgs>;
    tbl_ingrediente?: boolean | Prisma.tbl_ingredienteDefaultArgs<ExtArgs>;
};
export type rel_fornecedor_ingredienteIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tbl_fornecedor?: boolean | Prisma.tbl_fornecedorDefaultArgs<ExtArgs>;
    tbl_ingrediente?: boolean | Prisma.tbl_ingredienteDefaultArgs<ExtArgs>;
};
export type rel_fornecedor_ingredienteIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tbl_fornecedor?: boolean | Prisma.tbl_fornecedorDefaultArgs<ExtArgs>;
    tbl_ingrediente?: boolean | Prisma.tbl_ingredienteDefaultArgs<ExtArgs>;
};
export type $rel_fornecedor_ingredientePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "rel_fornecedor_ingrediente";
    objects: {
        tbl_fornecedor: Prisma.$tbl_fornecedorPayload<ExtArgs>;
        tbl_ingrediente: Prisma.$tbl_ingredientePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        fornecedor_id: number;
        ingrediente_id: number;
        data_hora_fornecimento: Date;
        valor_fornecimento: runtime.Decimal;
        quantidade: number;
    }, ExtArgs["result"]["rel_fornecedor_ingrediente"]>;
    composites: {};
};
export type rel_fornecedor_ingredienteGetPayload<S extends boolean | null | undefined | rel_fornecedor_ingredienteDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$rel_fornecedor_ingredientePayload, S>;
export type rel_fornecedor_ingredienteCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<rel_fornecedor_ingredienteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Rel_fornecedor_ingredienteCountAggregateInputType | true;
};
export interface rel_fornecedor_ingredienteDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['rel_fornecedor_ingrediente'];
        meta: {
            name: 'rel_fornecedor_ingrediente';
        };
    };
    /**
     * Find zero or one Rel_fornecedor_ingrediente that matches the filter.
     * @param {rel_fornecedor_ingredienteFindUniqueArgs} args - Arguments to find a Rel_fornecedor_ingrediente
     * @example
     * // Get one Rel_fornecedor_ingrediente
     * const rel_fornecedor_ingrediente = await prisma.rel_fornecedor_ingrediente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends rel_fornecedor_ingredienteFindUniqueArgs>(args: Prisma.SelectSubset<T, rel_fornecedor_ingredienteFindUniqueArgs<ExtArgs>>): Prisma.Prisma__rel_fornecedor_ingredienteClient<runtime.Types.Result.GetResult<Prisma.$rel_fornecedor_ingredientePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Rel_fornecedor_ingrediente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {rel_fornecedor_ingredienteFindUniqueOrThrowArgs} args - Arguments to find a Rel_fornecedor_ingrediente
     * @example
     * // Get one Rel_fornecedor_ingrediente
     * const rel_fornecedor_ingrediente = await prisma.rel_fornecedor_ingrediente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends rel_fornecedor_ingredienteFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, rel_fornecedor_ingredienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__rel_fornecedor_ingredienteClient<runtime.Types.Result.GetResult<Prisma.$rel_fornecedor_ingredientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Rel_fornecedor_ingrediente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rel_fornecedor_ingredienteFindFirstArgs} args - Arguments to find a Rel_fornecedor_ingrediente
     * @example
     * // Get one Rel_fornecedor_ingrediente
     * const rel_fornecedor_ingrediente = await prisma.rel_fornecedor_ingrediente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends rel_fornecedor_ingredienteFindFirstArgs>(args?: Prisma.SelectSubset<T, rel_fornecedor_ingredienteFindFirstArgs<ExtArgs>>): Prisma.Prisma__rel_fornecedor_ingredienteClient<runtime.Types.Result.GetResult<Prisma.$rel_fornecedor_ingredientePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Rel_fornecedor_ingrediente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rel_fornecedor_ingredienteFindFirstOrThrowArgs} args - Arguments to find a Rel_fornecedor_ingrediente
     * @example
     * // Get one Rel_fornecedor_ingrediente
     * const rel_fornecedor_ingrediente = await prisma.rel_fornecedor_ingrediente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends rel_fornecedor_ingredienteFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, rel_fornecedor_ingredienteFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__rel_fornecedor_ingredienteClient<runtime.Types.Result.GetResult<Prisma.$rel_fornecedor_ingredientePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Rel_fornecedor_ingredientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rel_fornecedor_ingredienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rel_fornecedor_ingredientes
     * const rel_fornecedor_ingredientes = await prisma.rel_fornecedor_ingrediente.findMany()
     *
     * // Get first 10 Rel_fornecedor_ingredientes
     * const rel_fornecedor_ingredientes = await prisma.rel_fornecedor_ingrediente.findMany({ take: 10 })
     *
     * // Only select the `fornecedor_id`
     * const rel_fornecedor_ingredienteWithFornecedor_idOnly = await prisma.rel_fornecedor_ingrediente.findMany({ select: { fornecedor_id: true } })
     *
     */
    findMany<T extends rel_fornecedor_ingredienteFindManyArgs>(args?: Prisma.SelectSubset<T, rel_fornecedor_ingredienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$rel_fornecedor_ingredientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Rel_fornecedor_ingrediente.
     * @param {rel_fornecedor_ingredienteCreateArgs} args - Arguments to create a Rel_fornecedor_ingrediente.
     * @example
     * // Create one Rel_fornecedor_ingrediente
     * const Rel_fornecedor_ingrediente = await prisma.rel_fornecedor_ingrediente.create({
     *   data: {
     *     // ... data to create a Rel_fornecedor_ingrediente
     *   }
     * })
     *
     */
    create<T extends rel_fornecedor_ingredienteCreateArgs>(args: Prisma.SelectSubset<T, rel_fornecedor_ingredienteCreateArgs<ExtArgs>>): Prisma.Prisma__rel_fornecedor_ingredienteClient<runtime.Types.Result.GetResult<Prisma.$rel_fornecedor_ingredientePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Rel_fornecedor_ingredientes.
     * @param {rel_fornecedor_ingredienteCreateManyArgs} args - Arguments to create many Rel_fornecedor_ingredientes.
     * @example
     * // Create many Rel_fornecedor_ingredientes
     * const rel_fornecedor_ingrediente = await prisma.rel_fornecedor_ingrediente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends rel_fornecedor_ingredienteCreateManyArgs>(args?: Prisma.SelectSubset<T, rel_fornecedor_ingredienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Rel_fornecedor_ingredientes and returns the data saved in the database.
     * @param {rel_fornecedor_ingredienteCreateManyAndReturnArgs} args - Arguments to create many Rel_fornecedor_ingredientes.
     * @example
     * // Create many Rel_fornecedor_ingredientes
     * const rel_fornecedor_ingrediente = await prisma.rel_fornecedor_ingrediente.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Rel_fornecedor_ingredientes and only return the `fornecedor_id`
     * const rel_fornecedor_ingredienteWithFornecedor_idOnly = await prisma.rel_fornecedor_ingrediente.createManyAndReturn({
     *   select: { fornecedor_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends rel_fornecedor_ingredienteCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, rel_fornecedor_ingredienteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$rel_fornecedor_ingredientePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Rel_fornecedor_ingrediente.
     * @param {rel_fornecedor_ingredienteDeleteArgs} args - Arguments to delete one Rel_fornecedor_ingrediente.
     * @example
     * // Delete one Rel_fornecedor_ingrediente
     * const Rel_fornecedor_ingrediente = await prisma.rel_fornecedor_ingrediente.delete({
     *   where: {
     *     // ... filter to delete one Rel_fornecedor_ingrediente
     *   }
     * })
     *
     */
    delete<T extends rel_fornecedor_ingredienteDeleteArgs>(args: Prisma.SelectSubset<T, rel_fornecedor_ingredienteDeleteArgs<ExtArgs>>): Prisma.Prisma__rel_fornecedor_ingredienteClient<runtime.Types.Result.GetResult<Prisma.$rel_fornecedor_ingredientePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Rel_fornecedor_ingrediente.
     * @param {rel_fornecedor_ingredienteUpdateArgs} args - Arguments to update one Rel_fornecedor_ingrediente.
     * @example
     * // Update one Rel_fornecedor_ingrediente
     * const rel_fornecedor_ingrediente = await prisma.rel_fornecedor_ingrediente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends rel_fornecedor_ingredienteUpdateArgs>(args: Prisma.SelectSubset<T, rel_fornecedor_ingredienteUpdateArgs<ExtArgs>>): Prisma.Prisma__rel_fornecedor_ingredienteClient<runtime.Types.Result.GetResult<Prisma.$rel_fornecedor_ingredientePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Rel_fornecedor_ingredientes.
     * @param {rel_fornecedor_ingredienteDeleteManyArgs} args - Arguments to filter Rel_fornecedor_ingredientes to delete.
     * @example
     * // Delete a few Rel_fornecedor_ingredientes
     * const { count } = await prisma.rel_fornecedor_ingrediente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends rel_fornecedor_ingredienteDeleteManyArgs>(args?: Prisma.SelectSubset<T, rel_fornecedor_ingredienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Rel_fornecedor_ingredientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rel_fornecedor_ingredienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rel_fornecedor_ingredientes
     * const rel_fornecedor_ingrediente = await prisma.rel_fornecedor_ingrediente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends rel_fornecedor_ingredienteUpdateManyArgs>(args: Prisma.SelectSubset<T, rel_fornecedor_ingredienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Rel_fornecedor_ingredientes and returns the data updated in the database.
     * @param {rel_fornecedor_ingredienteUpdateManyAndReturnArgs} args - Arguments to update many Rel_fornecedor_ingredientes.
     * @example
     * // Update many Rel_fornecedor_ingredientes
     * const rel_fornecedor_ingrediente = await prisma.rel_fornecedor_ingrediente.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Rel_fornecedor_ingredientes and only return the `fornecedor_id`
     * const rel_fornecedor_ingredienteWithFornecedor_idOnly = await prisma.rel_fornecedor_ingrediente.updateManyAndReturn({
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
    updateManyAndReturn<T extends rel_fornecedor_ingredienteUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, rel_fornecedor_ingredienteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$rel_fornecedor_ingredientePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Rel_fornecedor_ingrediente.
     * @param {rel_fornecedor_ingredienteUpsertArgs} args - Arguments to update or create a Rel_fornecedor_ingrediente.
     * @example
     * // Update or create a Rel_fornecedor_ingrediente
     * const rel_fornecedor_ingrediente = await prisma.rel_fornecedor_ingrediente.upsert({
     *   create: {
     *     // ... data to create a Rel_fornecedor_ingrediente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rel_fornecedor_ingrediente we want to update
     *   }
     * })
     */
    upsert<T extends rel_fornecedor_ingredienteUpsertArgs>(args: Prisma.SelectSubset<T, rel_fornecedor_ingredienteUpsertArgs<ExtArgs>>): Prisma.Prisma__rel_fornecedor_ingredienteClient<runtime.Types.Result.GetResult<Prisma.$rel_fornecedor_ingredientePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Rel_fornecedor_ingredientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rel_fornecedor_ingredienteCountArgs} args - Arguments to filter Rel_fornecedor_ingredientes to count.
     * @example
     * // Count the number of Rel_fornecedor_ingredientes
     * const count = await prisma.rel_fornecedor_ingrediente.count({
     *   where: {
     *     // ... the filter for the Rel_fornecedor_ingredientes we want to count
     *   }
     * })
    **/
    count<T extends rel_fornecedor_ingredienteCountArgs>(args?: Prisma.Subset<T, rel_fornecedor_ingredienteCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Rel_fornecedor_ingredienteCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Rel_fornecedor_ingrediente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Rel_fornecedor_ingredienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Rel_fornecedor_ingredienteAggregateArgs>(args: Prisma.Subset<T, Rel_fornecedor_ingredienteAggregateArgs>): Prisma.PrismaPromise<GetRel_fornecedor_ingredienteAggregateType<T>>;
    /**
     * Group by Rel_fornecedor_ingrediente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rel_fornecedor_ingredienteGroupByArgs} args - Group by arguments.
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
    groupBy<T extends rel_fornecedor_ingredienteGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: rel_fornecedor_ingredienteGroupByArgs['orderBy'];
    } : {
        orderBy?: rel_fornecedor_ingredienteGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, rel_fornecedor_ingredienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRel_fornecedor_ingredienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the rel_fornecedor_ingrediente model
     */
    readonly fields: rel_fornecedor_ingredienteFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for rel_fornecedor_ingrediente.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__rel_fornecedor_ingredienteClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    tbl_fornecedor<T extends Prisma.tbl_fornecedorDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.tbl_fornecedorDefaultArgs<ExtArgs>>): Prisma.Prisma__tbl_fornecedorClient<runtime.Types.Result.GetResult<Prisma.$tbl_fornecedorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    tbl_ingrediente<T extends Prisma.tbl_ingredienteDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.tbl_ingredienteDefaultArgs<ExtArgs>>): Prisma.Prisma__tbl_ingredienteClient<runtime.Types.Result.GetResult<Prisma.$tbl_ingredientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the rel_fornecedor_ingrediente model
 */
export interface rel_fornecedor_ingredienteFieldRefs {
    readonly fornecedor_id: Prisma.FieldRef<"rel_fornecedor_ingrediente", 'Int'>;
    readonly ingrediente_id: Prisma.FieldRef<"rel_fornecedor_ingrediente", 'Int'>;
    readonly data_hora_fornecimento: Prisma.FieldRef<"rel_fornecedor_ingrediente", 'DateTime'>;
    readonly valor_fornecimento: Prisma.FieldRef<"rel_fornecedor_ingrediente", 'Decimal'>;
    readonly quantidade: Prisma.FieldRef<"rel_fornecedor_ingrediente", 'Int'>;
}
/**
 * rel_fornecedor_ingrediente findUnique
 */
export type rel_fornecedor_ingredienteFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which rel_fornecedor_ingrediente to fetch.
     */
    where: Prisma.rel_fornecedor_ingredienteWhereUniqueInput;
};
/**
 * rel_fornecedor_ingrediente findUniqueOrThrow
 */
export type rel_fornecedor_ingredienteFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which rel_fornecedor_ingrediente to fetch.
     */
    where: Prisma.rel_fornecedor_ingredienteWhereUniqueInput;
};
/**
 * rel_fornecedor_ingrediente findFirst
 */
export type rel_fornecedor_ingredienteFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which rel_fornecedor_ingrediente to fetch.
     */
    where?: Prisma.rel_fornecedor_ingredienteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of rel_fornecedor_ingredientes to fetch.
     */
    orderBy?: Prisma.rel_fornecedor_ingredienteOrderByWithRelationInput | Prisma.rel_fornecedor_ingredienteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for rel_fornecedor_ingredientes.
     */
    cursor?: Prisma.rel_fornecedor_ingredienteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` rel_fornecedor_ingredientes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` rel_fornecedor_ingredientes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of rel_fornecedor_ingredientes.
     */
    distinct?: Prisma.Rel_fornecedor_ingredienteScalarFieldEnum | Prisma.Rel_fornecedor_ingredienteScalarFieldEnum[];
};
/**
 * rel_fornecedor_ingrediente findFirstOrThrow
 */
export type rel_fornecedor_ingredienteFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which rel_fornecedor_ingrediente to fetch.
     */
    where?: Prisma.rel_fornecedor_ingredienteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of rel_fornecedor_ingredientes to fetch.
     */
    orderBy?: Prisma.rel_fornecedor_ingredienteOrderByWithRelationInput | Prisma.rel_fornecedor_ingredienteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for rel_fornecedor_ingredientes.
     */
    cursor?: Prisma.rel_fornecedor_ingredienteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` rel_fornecedor_ingredientes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` rel_fornecedor_ingredientes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of rel_fornecedor_ingredientes.
     */
    distinct?: Prisma.Rel_fornecedor_ingredienteScalarFieldEnum | Prisma.Rel_fornecedor_ingredienteScalarFieldEnum[];
};
/**
 * rel_fornecedor_ingrediente findMany
 */
export type rel_fornecedor_ingredienteFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which rel_fornecedor_ingredientes to fetch.
     */
    where?: Prisma.rel_fornecedor_ingredienteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of rel_fornecedor_ingredientes to fetch.
     */
    orderBy?: Prisma.rel_fornecedor_ingredienteOrderByWithRelationInput | Prisma.rel_fornecedor_ingredienteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing rel_fornecedor_ingredientes.
     */
    cursor?: Prisma.rel_fornecedor_ingredienteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` rel_fornecedor_ingredientes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` rel_fornecedor_ingredientes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of rel_fornecedor_ingredientes.
     */
    distinct?: Prisma.Rel_fornecedor_ingredienteScalarFieldEnum | Prisma.Rel_fornecedor_ingredienteScalarFieldEnum[];
};
/**
 * rel_fornecedor_ingrediente create
 */
export type rel_fornecedor_ingredienteCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a rel_fornecedor_ingrediente.
     */
    data: Prisma.XOR<Prisma.rel_fornecedor_ingredienteCreateInput, Prisma.rel_fornecedor_ingredienteUncheckedCreateInput>;
};
/**
 * rel_fornecedor_ingrediente createMany
 */
export type rel_fornecedor_ingredienteCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many rel_fornecedor_ingredientes.
     */
    data: Prisma.rel_fornecedor_ingredienteCreateManyInput | Prisma.rel_fornecedor_ingredienteCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * rel_fornecedor_ingrediente createManyAndReturn
 */
export type rel_fornecedor_ingredienteCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rel_fornecedor_ingrediente
     */
    select?: Prisma.rel_fornecedor_ingredienteSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the rel_fornecedor_ingrediente
     */
    omit?: Prisma.rel_fornecedor_ingredienteOmit<ExtArgs> | null;
    /**
     * The data used to create many rel_fornecedor_ingredientes.
     */
    data: Prisma.rel_fornecedor_ingredienteCreateManyInput | Prisma.rel_fornecedor_ingredienteCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.rel_fornecedor_ingredienteIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * rel_fornecedor_ingrediente update
 */
export type rel_fornecedor_ingredienteUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a rel_fornecedor_ingrediente.
     */
    data: Prisma.XOR<Prisma.rel_fornecedor_ingredienteUpdateInput, Prisma.rel_fornecedor_ingredienteUncheckedUpdateInput>;
    /**
     * Choose, which rel_fornecedor_ingrediente to update.
     */
    where: Prisma.rel_fornecedor_ingredienteWhereUniqueInput;
};
/**
 * rel_fornecedor_ingrediente updateMany
 */
export type rel_fornecedor_ingredienteUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update rel_fornecedor_ingredientes.
     */
    data: Prisma.XOR<Prisma.rel_fornecedor_ingredienteUpdateManyMutationInput, Prisma.rel_fornecedor_ingredienteUncheckedUpdateManyInput>;
    /**
     * Filter which rel_fornecedor_ingredientes to update
     */
    where?: Prisma.rel_fornecedor_ingredienteWhereInput;
    /**
     * Limit how many rel_fornecedor_ingredientes to update.
     */
    limit?: number;
};
/**
 * rel_fornecedor_ingrediente updateManyAndReturn
 */
export type rel_fornecedor_ingredienteUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rel_fornecedor_ingrediente
     */
    select?: Prisma.rel_fornecedor_ingredienteSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the rel_fornecedor_ingrediente
     */
    omit?: Prisma.rel_fornecedor_ingredienteOmit<ExtArgs> | null;
    /**
     * The data used to update rel_fornecedor_ingredientes.
     */
    data: Prisma.XOR<Prisma.rel_fornecedor_ingredienteUpdateManyMutationInput, Prisma.rel_fornecedor_ingredienteUncheckedUpdateManyInput>;
    /**
     * Filter which rel_fornecedor_ingredientes to update
     */
    where?: Prisma.rel_fornecedor_ingredienteWhereInput;
    /**
     * Limit how many rel_fornecedor_ingredientes to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.rel_fornecedor_ingredienteIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * rel_fornecedor_ingrediente upsert
 */
export type rel_fornecedor_ingredienteUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the rel_fornecedor_ingrediente to update in case it exists.
     */
    where: Prisma.rel_fornecedor_ingredienteWhereUniqueInput;
    /**
     * In case the rel_fornecedor_ingrediente found by the `where` argument doesn't exist, create a new rel_fornecedor_ingrediente with this data.
     */
    create: Prisma.XOR<Prisma.rel_fornecedor_ingredienteCreateInput, Prisma.rel_fornecedor_ingredienteUncheckedCreateInput>;
    /**
     * In case the rel_fornecedor_ingrediente was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.rel_fornecedor_ingredienteUpdateInput, Prisma.rel_fornecedor_ingredienteUncheckedUpdateInput>;
};
/**
 * rel_fornecedor_ingrediente delete
 */
export type rel_fornecedor_ingredienteDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which rel_fornecedor_ingrediente to delete.
     */
    where: Prisma.rel_fornecedor_ingredienteWhereUniqueInput;
};
/**
 * rel_fornecedor_ingrediente deleteMany
 */
export type rel_fornecedor_ingredienteDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which rel_fornecedor_ingredientes to delete
     */
    where?: Prisma.rel_fornecedor_ingredienteWhereInput;
    /**
     * Limit how many rel_fornecedor_ingredientes to delete.
     */
    limit?: number;
};
/**
 * rel_fornecedor_ingrediente without action
 */
export type rel_fornecedor_ingredienteDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
//# sourceMappingURL=rel_fornecedor_ingrediente.d.ts.map