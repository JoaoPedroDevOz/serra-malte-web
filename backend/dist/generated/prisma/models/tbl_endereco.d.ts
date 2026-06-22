import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.ts";
/**
 * Model tbl_endereco
 *
 */
export type tbl_enderecoModel = runtime.Types.Result.DefaultSelection<Prisma.$tbl_enderecoPayload>;
export type AggregateTbl_endereco = {
    _count: Tbl_enderecoCountAggregateOutputType | null;
    _avg: Tbl_enderecoAvgAggregateOutputType | null;
    _sum: Tbl_enderecoSumAggregateOutputType | null;
    _min: Tbl_enderecoMinAggregateOutputType | null;
    _max: Tbl_enderecoMaxAggregateOutputType | null;
};
export type Tbl_enderecoAvgAggregateOutputType = {
    endereco_id: number | null;
    cliente_id: number | null;
};
export type Tbl_enderecoSumAggregateOutputType = {
    endereco_id: number | null;
    cliente_id: number | null;
};
export type Tbl_enderecoMinAggregateOutputType = {
    endereco_id: number | null;
    cliente_id: number | null;
    pais: string | null;
    uf: string | null;
    complemento: string | null;
    rua: string | null;
    cod_postal: string | null;
};
export type Tbl_enderecoMaxAggregateOutputType = {
    endereco_id: number | null;
    cliente_id: number | null;
    pais: string | null;
    uf: string | null;
    complemento: string | null;
    rua: string | null;
    cod_postal: string | null;
};
export type Tbl_enderecoCountAggregateOutputType = {
    endereco_id: number;
    cliente_id: number;
    pais: number;
    uf: number;
    complemento: number;
    rua: number;
    cod_postal: number;
    _all: number;
};
export type Tbl_enderecoAvgAggregateInputType = {
    endereco_id?: true;
    cliente_id?: true;
};
export type Tbl_enderecoSumAggregateInputType = {
    endereco_id?: true;
    cliente_id?: true;
};
export type Tbl_enderecoMinAggregateInputType = {
    endereco_id?: true;
    cliente_id?: true;
    pais?: true;
    uf?: true;
    complemento?: true;
    rua?: true;
    cod_postal?: true;
};
export type Tbl_enderecoMaxAggregateInputType = {
    endereco_id?: true;
    cliente_id?: true;
    pais?: true;
    uf?: true;
    complemento?: true;
    rua?: true;
    cod_postal?: true;
};
export type Tbl_enderecoCountAggregateInputType = {
    endereco_id?: true;
    cliente_id?: true;
    pais?: true;
    uf?: true;
    complemento?: true;
    rua?: true;
    cod_postal?: true;
    _all?: true;
};
export type Tbl_enderecoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_endereco to aggregate.
     */
    where?: Prisma.tbl_enderecoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tbl_enderecos to fetch.
     */
    orderBy?: Prisma.tbl_enderecoOrderByWithRelationInput | Prisma.tbl_enderecoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.tbl_enderecoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tbl_enderecos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tbl_enderecos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned tbl_enderecos
    **/
    _count?: true | Tbl_enderecoCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: Tbl_enderecoAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: Tbl_enderecoSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: Tbl_enderecoMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: Tbl_enderecoMaxAggregateInputType;
};
export type GetTbl_enderecoAggregateType<T extends Tbl_enderecoAggregateArgs> = {
    [P in keyof T & keyof AggregateTbl_endereco]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTbl_endereco[P]> : Prisma.GetScalarType<T[P], AggregateTbl_endereco[P]>;
};
export type tbl_enderecoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.tbl_enderecoWhereInput;
    orderBy?: Prisma.tbl_enderecoOrderByWithAggregationInput | Prisma.tbl_enderecoOrderByWithAggregationInput[];
    by: Prisma.Tbl_enderecoScalarFieldEnum[] | Prisma.Tbl_enderecoScalarFieldEnum;
    having?: Prisma.tbl_enderecoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Tbl_enderecoCountAggregateInputType | true;
    _avg?: Tbl_enderecoAvgAggregateInputType;
    _sum?: Tbl_enderecoSumAggregateInputType;
    _min?: Tbl_enderecoMinAggregateInputType;
    _max?: Tbl_enderecoMaxAggregateInputType;
};
export type Tbl_enderecoGroupByOutputType = {
    endereco_id: number;
    cliente_id: number;
    pais: string;
    uf: string | null;
    complemento: string | null;
    rua: string;
    cod_postal: string;
    _count: Tbl_enderecoCountAggregateOutputType | null;
    _avg: Tbl_enderecoAvgAggregateOutputType | null;
    _sum: Tbl_enderecoSumAggregateOutputType | null;
    _min: Tbl_enderecoMinAggregateOutputType | null;
    _max: Tbl_enderecoMaxAggregateOutputType | null;
};
export type GetTbl_enderecoGroupByPayload<T extends tbl_enderecoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Tbl_enderecoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Tbl_enderecoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Tbl_enderecoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Tbl_enderecoGroupByOutputType[P]>;
}>>;
export type tbl_enderecoWhereInput = {
    AND?: Prisma.tbl_enderecoWhereInput | Prisma.tbl_enderecoWhereInput[];
    OR?: Prisma.tbl_enderecoWhereInput[];
    NOT?: Prisma.tbl_enderecoWhereInput | Prisma.tbl_enderecoWhereInput[];
    endereco_id?: Prisma.IntFilter<"tbl_endereco"> | number;
    cliente_id?: Prisma.IntFilter<"tbl_endereco"> | number;
    pais?: Prisma.StringFilter<"tbl_endereco"> | string;
    uf?: Prisma.StringNullableFilter<"tbl_endereco"> | string | null;
    complemento?: Prisma.StringNullableFilter<"tbl_endereco"> | string | null;
    rua?: Prisma.StringFilter<"tbl_endereco"> | string;
    cod_postal?: Prisma.StringFilter<"tbl_endereco"> | string;
    tbl_cliente?: Prisma.XOR<Prisma.Tbl_clienteScalarRelationFilter, Prisma.tbl_clienteWhereInput>;
};
export type tbl_enderecoOrderByWithRelationInput = {
    endereco_id?: Prisma.SortOrder;
    cliente_id?: Prisma.SortOrder;
    pais?: Prisma.SortOrder;
    uf?: Prisma.SortOrderInput | Prisma.SortOrder;
    complemento?: Prisma.SortOrderInput | Prisma.SortOrder;
    rua?: Prisma.SortOrder;
    cod_postal?: Prisma.SortOrder;
    tbl_cliente?: Prisma.tbl_clienteOrderByWithRelationInput;
};
export type tbl_enderecoWhereUniqueInput = Prisma.AtLeast<{
    endereco_id?: number;
    AND?: Prisma.tbl_enderecoWhereInput | Prisma.tbl_enderecoWhereInput[];
    OR?: Prisma.tbl_enderecoWhereInput[];
    NOT?: Prisma.tbl_enderecoWhereInput | Prisma.tbl_enderecoWhereInput[];
    cliente_id?: Prisma.IntFilter<"tbl_endereco"> | number;
    pais?: Prisma.StringFilter<"tbl_endereco"> | string;
    uf?: Prisma.StringNullableFilter<"tbl_endereco"> | string | null;
    complemento?: Prisma.StringNullableFilter<"tbl_endereco"> | string | null;
    rua?: Prisma.StringFilter<"tbl_endereco"> | string;
    cod_postal?: Prisma.StringFilter<"tbl_endereco"> | string;
    tbl_cliente?: Prisma.XOR<Prisma.Tbl_clienteScalarRelationFilter, Prisma.tbl_clienteWhereInput>;
}, "endereco_id">;
export type tbl_enderecoOrderByWithAggregationInput = {
    endereco_id?: Prisma.SortOrder;
    cliente_id?: Prisma.SortOrder;
    pais?: Prisma.SortOrder;
    uf?: Prisma.SortOrderInput | Prisma.SortOrder;
    complemento?: Prisma.SortOrderInput | Prisma.SortOrder;
    rua?: Prisma.SortOrder;
    cod_postal?: Prisma.SortOrder;
    _count?: Prisma.tbl_enderecoCountOrderByAggregateInput;
    _avg?: Prisma.tbl_enderecoAvgOrderByAggregateInput;
    _max?: Prisma.tbl_enderecoMaxOrderByAggregateInput;
    _min?: Prisma.tbl_enderecoMinOrderByAggregateInput;
    _sum?: Prisma.tbl_enderecoSumOrderByAggregateInput;
};
export type tbl_enderecoScalarWhereWithAggregatesInput = {
    AND?: Prisma.tbl_enderecoScalarWhereWithAggregatesInput | Prisma.tbl_enderecoScalarWhereWithAggregatesInput[];
    OR?: Prisma.tbl_enderecoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.tbl_enderecoScalarWhereWithAggregatesInput | Prisma.tbl_enderecoScalarWhereWithAggregatesInput[];
    endereco_id?: Prisma.IntWithAggregatesFilter<"tbl_endereco"> | number;
    cliente_id?: Prisma.IntWithAggregatesFilter<"tbl_endereco"> | number;
    pais?: Prisma.StringWithAggregatesFilter<"tbl_endereco"> | string;
    uf?: Prisma.StringNullableWithAggregatesFilter<"tbl_endereco"> | string | null;
    complemento?: Prisma.StringNullableWithAggregatesFilter<"tbl_endereco"> | string | null;
    rua?: Prisma.StringWithAggregatesFilter<"tbl_endereco"> | string;
    cod_postal?: Prisma.StringWithAggregatesFilter<"tbl_endereco"> | string;
};
export type tbl_enderecoCreateInput = {
    pais: string;
    uf?: string | null;
    complemento?: string | null;
    rua: string;
    cod_postal: string;
    tbl_cliente?: Prisma.tbl_clienteCreateNestedOneWithoutTbl_enderecoInput;
};
export type tbl_enderecoUncheckedCreateInput = {
    endereco_id?: number;
    cliente_id?: number;
    pais: string;
    uf?: string | null;
    complemento?: string | null;
    rua: string;
    cod_postal: string;
};
export type tbl_enderecoUpdateInput = {
    pais?: Prisma.StringFieldUpdateOperationsInput | string;
    uf?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    complemento?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rua?: Prisma.StringFieldUpdateOperationsInput | string;
    cod_postal?: Prisma.StringFieldUpdateOperationsInput | string;
    tbl_cliente?: Prisma.tbl_clienteUpdateOneRequiredWithoutTbl_enderecoNestedInput;
};
export type tbl_enderecoUncheckedUpdateInput = {
    endereco_id?: Prisma.IntFieldUpdateOperationsInput | number;
    cliente_id?: Prisma.IntFieldUpdateOperationsInput | number;
    pais?: Prisma.StringFieldUpdateOperationsInput | string;
    uf?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    complemento?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rua?: Prisma.StringFieldUpdateOperationsInput | string;
    cod_postal?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type tbl_enderecoCreateManyInput = {
    endereco_id?: number;
    cliente_id?: number;
    pais: string;
    uf?: string | null;
    complemento?: string | null;
    rua: string;
    cod_postal: string;
};
export type tbl_enderecoUpdateManyMutationInput = {
    pais?: Prisma.StringFieldUpdateOperationsInput | string;
    uf?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    complemento?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rua?: Prisma.StringFieldUpdateOperationsInput | string;
    cod_postal?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type tbl_enderecoUncheckedUpdateManyInput = {
    endereco_id?: Prisma.IntFieldUpdateOperationsInput | number;
    cliente_id?: Prisma.IntFieldUpdateOperationsInput | number;
    pais?: Prisma.StringFieldUpdateOperationsInput | string;
    uf?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    complemento?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rua?: Prisma.StringFieldUpdateOperationsInput | string;
    cod_postal?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type Tbl_enderecoListRelationFilter = {
    every?: Prisma.tbl_enderecoWhereInput;
    some?: Prisma.tbl_enderecoWhereInput;
    none?: Prisma.tbl_enderecoWhereInput;
};
export type tbl_enderecoOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type tbl_enderecoCountOrderByAggregateInput = {
    endereco_id?: Prisma.SortOrder;
    cliente_id?: Prisma.SortOrder;
    pais?: Prisma.SortOrder;
    uf?: Prisma.SortOrder;
    complemento?: Prisma.SortOrder;
    rua?: Prisma.SortOrder;
    cod_postal?: Prisma.SortOrder;
};
export type tbl_enderecoAvgOrderByAggregateInput = {
    endereco_id?: Prisma.SortOrder;
    cliente_id?: Prisma.SortOrder;
};
export type tbl_enderecoMaxOrderByAggregateInput = {
    endereco_id?: Prisma.SortOrder;
    cliente_id?: Prisma.SortOrder;
    pais?: Prisma.SortOrder;
    uf?: Prisma.SortOrder;
    complemento?: Prisma.SortOrder;
    rua?: Prisma.SortOrder;
    cod_postal?: Prisma.SortOrder;
};
export type tbl_enderecoMinOrderByAggregateInput = {
    endereco_id?: Prisma.SortOrder;
    cliente_id?: Prisma.SortOrder;
    pais?: Prisma.SortOrder;
    uf?: Prisma.SortOrder;
    complemento?: Prisma.SortOrder;
    rua?: Prisma.SortOrder;
    cod_postal?: Prisma.SortOrder;
};
export type tbl_enderecoSumOrderByAggregateInput = {
    endereco_id?: Prisma.SortOrder;
    cliente_id?: Prisma.SortOrder;
};
export type tbl_enderecoCreateNestedManyWithoutTbl_clienteInput = {
    create?: Prisma.XOR<Prisma.tbl_enderecoCreateWithoutTbl_clienteInput, Prisma.tbl_enderecoUncheckedCreateWithoutTbl_clienteInput> | Prisma.tbl_enderecoCreateWithoutTbl_clienteInput[] | Prisma.tbl_enderecoUncheckedCreateWithoutTbl_clienteInput[];
    connectOrCreate?: Prisma.tbl_enderecoCreateOrConnectWithoutTbl_clienteInput | Prisma.tbl_enderecoCreateOrConnectWithoutTbl_clienteInput[];
    createMany?: Prisma.tbl_enderecoCreateManyTbl_clienteInputEnvelope;
    connect?: Prisma.tbl_enderecoWhereUniqueInput | Prisma.tbl_enderecoWhereUniqueInput[];
};
export type tbl_enderecoUncheckedCreateNestedManyWithoutTbl_clienteInput = {
    create?: Prisma.XOR<Prisma.tbl_enderecoCreateWithoutTbl_clienteInput, Prisma.tbl_enderecoUncheckedCreateWithoutTbl_clienteInput> | Prisma.tbl_enderecoCreateWithoutTbl_clienteInput[] | Prisma.tbl_enderecoUncheckedCreateWithoutTbl_clienteInput[];
    connectOrCreate?: Prisma.tbl_enderecoCreateOrConnectWithoutTbl_clienteInput | Prisma.tbl_enderecoCreateOrConnectWithoutTbl_clienteInput[];
    createMany?: Prisma.tbl_enderecoCreateManyTbl_clienteInputEnvelope;
    connect?: Prisma.tbl_enderecoWhereUniqueInput | Prisma.tbl_enderecoWhereUniqueInput[];
};
export type tbl_enderecoUpdateManyWithoutTbl_clienteNestedInput = {
    create?: Prisma.XOR<Prisma.tbl_enderecoCreateWithoutTbl_clienteInput, Prisma.tbl_enderecoUncheckedCreateWithoutTbl_clienteInput> | Prisma.tbl_enderecoCreateWithoutTbl_clienteInput[] | Prisma.tbl_enderecoUncheckedCreateWithoutTbl_clienteInput[];
    connectOrCreate?: Prisma.tbl_enderecoCreateOrConnectWithoutTbl_clienteInput | Prisma.tbl_enderecoCreateOrConnectWithoutTbl_clienteInput[];
    upsert?: Prisma.tbl_enderecoUpsertWithWhereUniqueWithoutTbl_clienteInput | Prisma.tbl_enderecoUpsertWithWhereUniqueWithoutTbl_clienteInput[];
    createMany?: Prisma.tbl_enderecoCreateManyTbl_clienteInputEnvelope;
    set?: Prisma.tbl_enderecoWhereUniqueInput | Prisma.tbl_enderecoWhereUniqueInput[];
    disconnect?: Prisma.tbl_enderecoWhereUniqueInput | Prisma.tbl_enderecoWhereUniqueInput[];
    delete?: Prisma.tbl_enderecoWhereUniqueInput | Prisma.tbl_enderecoWhereUniqueInput[];
    connect?: Prisma.tbl_enderecoWhereUniqueInput | Prisma.tbl_enderecoWhereUniqueInput[];
    update?: Prisma.tbl_enderecoUpdateWithWhereUniqueWithoutTbl_clienteInput | Prisma.tbl_enderecoUpdateWithWhereUniqueWithoutTbl_clienteInput[];
    updateMany?: Prisma.tbl_enderecoUpdateManyWithWhereWithoutTbl_clienteInput | Prisma.tbl_enderecoUpdateManyWithWhereWithoutTbl_clienteInput[];
    deleteMany?: Prisma.tbl_enderecoScalarWhereInput | Prisma.tbl_enderecoScalarWhereInput[];
};
export type tbl_enderecoUncheckedUpdateManyWithoutTbl_clienteNestedInput = {
    create?: Prisma.XOR<Prisma.tbl_enderecoCreateWithoutTbl_clienteInput, Prisma.tbl_enderecoUncheckedCreateWithoutTbl_clienteInput> | Prisma.tbl_enderecoCreateWithoutTbl_clienteInput[] | Prisma.tbl_enderecoUncheckedCreateWithoutTbl_clienteInput[];
    connectOrCreate?: Prisma.tbl_enderecoCreateOrConnectWithoutTbl_clienteInput | Prisma.tbl_enderecoCreateOrConnectWithoutTbl_clienteInput[];
    upsert?: Prisma.tbl_enderecoUpsertWithWhereUniqueWithoutTbl_clienteInput | Prisma.tbl_enderecoUpsertWithWhereUniqueWithoutTbl_clienteInput[];
    createMany?: Prisma.tbl_enderecoCreateManyTbl_clienteInputEnvelope;
    set?: Prisma.tbl_enderecoWhereUniqueInput | Prisma.tbl_enderecoWhereUniqueInput[];
    disconnect?: Prisma.tbl_enderecoWhereUniqueInput | Prisma.tbl_enderecoWhereUniqueInput[];
    delete?: Prisma.tbl_enderecoWhereUniqueInput | Prisma.tbl_enderecoWhereUniqueInput[];
    connect?: Prisma.tbl_enderecoWhereUniqueInput | Prisma.tbl_enderecoWhereUniqueInput[];
    update?: Prisma.tbl_enderecoUpdateWithWhereUniqueWithoutTbl_clienteInput | Prisma.tbl_enderecoUpdateWithWhereUniqueWithoutTbl_clienteInput[];
    updateMany?: Prisma.tbl_enderecoUpdateManyWithWhereWithoutTbl_clienteInput | Prisma.tbl_enderecoUpdateManyWithWhereWithoutTbl_clienteInput[];
    deleteMany?: Prisma.tbl_enderecoScalarWhereInput | Prisma.tbl_enderecoScalarWhereInput[];
};
export type tbl_enderecoCreateWithoutTbl_clienteInput = {
    pais: string;
    uf?: string | null;
    complemento?: string | null;
    rua: string;
    cod_postal: string;
};
export type tbl_enderecoUncheckedCreateWithoutTbl_clienteInput = {
    endereco_id?: number;
    pais: string;
    uf?: string | null;
    complemento?: string | null;
    rua: string;
    cod_postal: string;
};
export type tbl_enderecoCreateOrConnectWithoutTbl_clienteInput = {
    where: Prisma.tbl_enderecoWhereUniqueInput;
    create: Prisma.XOR<Prisma.tbl_enderecoCreateWithoutTbl_clienteInput, Prisma.tbl_enderecoUncheckedCreateWithoutTbl_clienteInput>;
};
export type tbl_enderecoCreateManyTbl_clienteInputEnvelope = {
    data: Prisma.tbl_enderecoCreateManyTbl_clienteInput | Prisma.tbl_enderecoCreateManyTbl_clienteInput[];
    skipDuplicates?: boolean;
};
export type tbl_enderecoUpsertWithWhereUniqueWithoutTbl_clienteInput = {
    where: Prisma.tbl_enderecoWhereUniqueInput;
    update: Prisma.XOR<Prisma.tbl_enderecoUpdateWithoutTbl_clienteInput, Prisma.tbl_enderecoUncheckedUpdateWithoutTbl_clienteInput>;
    create: Prisma.XOR<Prisma.tbl_enderecoCreateWithoutTbl_clienteInput, Prisma.tbl_enderecoUncheckedCreateWithoutTbl_clienteInput>;
};
export type tbl_enderecoUpdateWithWhereUniqueWithoutTbl_clienteInput = {
    where: Prisma.tbl_enderecoWhereUniqueInput;
    data: Prisma.XOR<Prisma.tbl_enderecoUpdateWithoutTbl_clienteInput, Prisma.tbl_enderecoUncheckedUpdateWithoutTbl_clienteInput>;
};
export type tbl_enderecoUpdateManyWithWhereWithoutTbl_clienteInput = {
    where: Prisma.tbl_enderecoScalarWhereInput;
    data: Prisma.XOR<Prisma.tbl_enderecoUpdateManyMutationInput, Prisma.tbl_enderecoUncheckedUpdateManyWithoutTbl_clienteInput>;
};
export type tbl_enderecoScalarWhereInput = {
    AND?: Prisma.tbl_enderecoScalarWhereInput | Prisma.tbl_enderecoScalarWhereInput[];
    OR?: Prisma.tbl_enderecoScalarWhereInput[];
    NOT?: Prisma.tbl_enderecoScalarWhereInput | Prisma.tbl_enderecoScalarWhereInput[];
    endereco_id?: Prisma.IntFilter<"tbl_endereco"> | number;
    cliente_id?: Prisma.IntFilter<"tbl_endereco"> | number;
    pais?: Prisma.StringFilter<"tbl_endereco"> | string;
    uf?: Prisma.StringNullableFilter<"tbl_endereco"> | string | null;
    complemento?: Prisma.StringNullableFilter<"tbl_endereco"> | string | null;
    rua?: Prisma.StringFilter<"tbl_endereco"> | string;
    cod_postal?: Prisma.StringFilter<"tbl_endereco"> | string;
};
export type tbl_enderecoCreateManyTbl_clienteInput = {
    endereco_id?: number;
    pais: string;
    uf?: string | null;
    complemento?: string | null;
    rua: string;
    cod_postal: string;
};
export type tbl_enderecoUpdateWithoutTbl_clienteInput = {
    pais?: Prisma.StringFieldUpdateOperationsInput | string;
    uf?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    complemento?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rua?: Prisma.StringFieldUpdateOperationsInput | string;
    cod_postal?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type tbl_enderecoUncheckedUpdateWithoutTbl_clienteInput = {
    endereco_id?: Prisma.IntFieldUpdateOperationsInput | number;
    pais?: Prisma.StringFieldUpdateOperationsInput | string;
    uf?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    complemento?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rua?: Prisma.StringFieldUpdateOperationsInput | string;
    cod_postal?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type tbl_enderecoUncheckedUpdateManyWithoutTbl_clienteInput = {
    endereco_id?: Prisma.IntFieldUpdateOperationsInput | number;
    pais?: Prisma.StringFieldUpdateOperationsInput | string;
    uf?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    complemento?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rua?: Prisma.StringFieldUpdateOperationsInput | string;
    cod_postal?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type tbl_enderecoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    endereco_id?: boolean;
    cliente_id?: boolean;
    pais?: boolean;
    uf?: boolean;
    complemento?: boolean;
    rua?: boolean;
    cod_postal?: boolean;
    tbl_cliente?: boolean | Prisma.tbl_clienteDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["tbl_endereco"]>;
export type tbl_enderecoSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    endereco_id?: boolean;
    cliente_id?: boolean;
    pais?: boolean;
    uf?: boolean;
    complemento?: boolean;
    rua?: boolean;
    cod_postal?: boolean;
    tbl_cliente?: boolean | Prisma.tbl_clienteDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["tbl_endereco"]>;
export type tbl_enderecoSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    endereco_id?: boolean;
    cliente_id?: boolean;
    pais?: boolean;
    uf?: boolean;
    complemento?: boolean;
    rua?: boolean;
    cod_postal?: boolean;
    tbl_cliente?: boolean | Prisma.tbl_clienteDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["tbl_endereco"]>;
export type tbl_enderecoSelectScalar = {
    endereco_id?: boolean;
    cliente_id?: boolean;
    pais?: boolean;
    uf?: boolean;
    complemento?: boolean;
    rua?: boolean;
    cod_postal?: boolean;
};
export type tbl_enderecoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"endereco_id" | "cliente_id" | "pais" | "uf" | "complemento" | "rua" | "cod_postal", ExtArgs["result"]["tbl_endereco"]>;
export type tbl_enderecoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tbl_cliente?: boolean | Prisma.tbl_clienteDefaultArgs<ExtArgs>;
};
export type tbl_enderecoIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tbl_cliente?: boolean | Prisma.tbl_clienteDefaultArgs<ExtArgs>;
};
export type tbl_enderecoIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tbl_cliente?: boolean | Prisma.tbl_clienteDefaultArgs<ExtArgs>;
};
export type $tbl_enderecoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "tbl_endereco";
    objects: {
        tbl_cliente: Prisma.$tbl_clientePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        endereco_id: number;
        cliente_id: number;
        pais: string;
        uf: string | null;
        complemento: string | null;
        rua: string;
        cod_postal: string;
    }, ExtArgs["result"]["tbl_endereco"]>;
    composites: {};
};
export type tbl_enderecoGetPayload<S extends boolean | null | undefined | tbl_enderecoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$tbl_enderecoPayload, S>;
export type tbl_enderecoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<tbl_enderecoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Tbl_enderecoCountAggregateInputType | true;
};
export interface tbl_enderecoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['tbl_endereco'];
        meta: {
            name: 'tbl_endereco';
        };
    };
    /**
     * Find zero or one Tbl_endereco that matches the filter.
     * @param {tbl_enderecoFindUniqueArgs} args - Arguments to find a Tbl_endereco
     * @example
     * // Get one Tbl_endereco
     * const tbl_endereco = await prisma.tbl_endereco.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tbl_enderecoFindUniqueArgs>(args: Prisma.SelectSubset<T, tbl_enderecoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__tbl_enderecoClient<runtime.Types.Result.GetResult<Prisma.$tbl_enderecoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Tbl_endereco that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tbl_enderecoFindUniqueOrThrowArgs} args - Arguments to find a Tbl_endereco
     * @example
     * // Get one Tbl_endereco
     * const tbl_endereco = await prisma.tbl_endereco.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tbl_enderecoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, tbl_enderecoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__tbl_enderecoClient<runtime.Types.Result.GetResult<Prisma.$tbl_enderecoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Tbl_endereco that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_enderecoFindFirstArgs} args - Arguments to find a Tbl_endereco
     * @example
     * // Get one Tbl_endereco
     * const tbl_endereco = await prisma.tbl_endereco.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tbl_enderecoFindFirstArgs>(args?: Prisma.SelectSubset<T, tbl_enderecoFindFirstArgs<ExtArgs>>): Prisma.Prisma__tbl_enderecoClient<runtime.Types.Result.GetResult<Prisma.$tbl_enderecoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Tbl_endereco that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_enderecoFindFirstOrThrowArgs} args - Arguments to find a Tbl_endereco
     * @example
     * // Get one Tbl_endereco
     * const tbl_endereco = await prisma.tbl_endereco.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tbl_enderecoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, tbl_enderecoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__tbl_enderecoClient<runtime.Types.Result.GetResult<Prisma.$tbl_enderecoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Tbl_enderecos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_enderecoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tbl_enderecos
     * const tbl_enderecos = await prisma.tbl_endereco.findMany()
     *
     * // Get first 10 Tbl_enderecos
     * const tbl_enderecos = await prisma.tbl_endereco.findMany({ take: 10 })
     *
     * // Only select the `endereco_id`
     * const tbl_enderecoWithEndereco_idOnly = await prisma.tbl_endereco.findMany({ select: { endereco_id: true } })
     *
     */
    findMany<T extends tbl_enderecoFindManyArgs>(args?: Prisma.SelectSubset<T, tbl_enderecoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$tbl_enderecoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Tbl_endereco.
     * @param {tbl_enderecoCreateArgs} args - Arguments to create a Tbl_endereco.
     * @example
     * // Create one Tbl_endereco
     * const Tbl_endereco = await prisma.tbl_endereco.create({
     *   data: {
     *     // ... data to create a Tbl_endereco
     *   }
     * })
     *
     */
    create<T extends tbl_enderecoCreateArgs>(args: Prisma.SelectSubset<T, tbl_enderecoCreateArgs<ExtArgs>>): Prisma.Prisma__tbl_enderecoClient<runtime.Types.Result.GetResult<Prisma.$tbl_enderecoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Tbl_enderecos.
     * @param {tbl_enderecoCreateManyArgs} args - Arguments to create many Tbl_enderecos.
     * @example
     * // Create many Tbl_enderecos
     * const tbl_endereco = await prisma.tbl_endereco.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends tbl_enderecoCreateManyArgs>(args?: Prisma.SelectSubset<T, tbl_enderecoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Tbl_enderecos and returns the data saved in the database.
     * @param {tbl_enderecoCreateManyAndReturnArgs} args - Arguments to create many Tbl_enderecos.
     * @example
     * // Create many Tbl_enderecos
     * const tbl_endereco = await prisma.tbl_endereco.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Tbl_enderecos and only return the `endereco_id`
     * const tbl_enderecoWithEndereco_idOnly = await prisma.tbl_endereco.createManyAndReturn({
     *   select: { endereco_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends tbl_enderecoCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, tbl_enderecoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$tbl_enderecoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Tbl_endereco.
     * @param {tbl_enderecoDeleteArgs} args - Arguments to delete one Tbl_endereco.
     * @example
     * // Delete one Tbl_endereco
     * const Tbl_endereco = await prisma.tbl_endereco.delete({
     *   where: {
     *     // ... filter to delete one Tbl_endereco
     *   }
     * })
     *
     */
    delete<T extends tbl_enderecoDeleteArgs>(args: Prisma.SelectSubset<T, tbl_enderecoDeleteArgs<ExtArgs>>): Prisma.Prisma__tbl_enderecoClient<runtime.Types.Result.GetResult<Prisma.$tbl_enderecoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Tbl_endereco.
     * @param {tbl_enderecoUpdateArgs} args - Arguments to update one Tbl_endereco.
     * @example
     * // Update one Tbl_endereco
     * const tbl_endereco = await prisma.tbl_endereco.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends tbl_enderecoUpdateArgs>(args: Prisma.SelectSubset<T, tbl_enderecoUpdateArgs<ExtArgs>>): Prisma.Prisma__tbl_enderecoClient<runtime.Types.Result.GetResult<Prisma.$tbl_enderecoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Tbl_enderecos.
     * @param {tbl_enderecoDeleteManyArgs} args - Arguments to filter Tbl_enderecos to delete.
     * @example
     * // Delete a few Tbl_enderecos
     * const { count } = await prisma.tbl_endereco.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends tbl_enderecoDeleteManyArgs>(args?: Prisma.SelectSubset<T, tbl_enderecoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Tbl_enderecos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_enderecoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tbl_enderecos
     * const tbl_endereco = await prisma.tbl_endereco.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends tbl_enderecoUpdateManyArgs>(args: Prisma.SelectSubset<T, tbl_enderecoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Tbl_enderecos and returns the data updated in the database.
     * @param {tbl_enderecoUpdateManyAndReturnArgs} args - Arguments to update many Tbl_enderecos.
     * @example
     * // Update many Tbl_enderecos
     * const tbl_endereco = await prisma.tbl_endereco.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Tbl_enderecos and only return the `endereco_id`
     * const tbl_enderecoWithEndereco_idOnly = await prisma.tbl_endereco.updateManyAndReturn({
     *   select: { endereco_id: true },
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
    updateManyAndReturn<T extends tbl_enderecoUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, tbl_enderecoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$tbl_enderecoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Tbl_endereco.
     * @param {tbl_enderecoUpsertArgs} args - Arguments to update or create a Tbl_endereco.
     * @example
     * // Update or create a Tbl_endereco
     * const tbl_endereco = await prisma.tbl_endereco.upsert({
     *   create: {
     *     // ... data to create a Tbl_endereco
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tbl_endereco we want to update
     *   }
     * })
     */
    upsert<T extends tbl_enderecoUpsertArgs>(args: Prisma.SelectSubset<T, tbl_enderecoUpsertArgs<ExtArgs>>): Prisma.Prisma__tbl_enderecoClient<runtime.Types.Result.GetResult<Prisma.$tbl_enderecoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Tbl_enderecos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_enderecoCountArgs} args - Arguments to filter Tbl_enderecos to count.
     * @example
     * // Count the number of Tbl_enderecos
     * const count = await prisma.tbl_endereco.count({
     *   where: {
     *     // ... the filter for the Tbl_enderecos we want to count
     *   }
     * })
    **/
    count<T extends tbl_enderecoCountArgs>(args?: Prisma.Subset<T, tbl_enderecoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Tbl_enderecoCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Tbl_endereco.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tbl_enderecoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tbl_enderecoAggregateArgs>(args: Prisma.Subset<T, Tbl_enderecoAggregateArgs>): Prisma.PrismaPromise<GetTbl_enderecoAggregateType<T>>;
    /**
     * Group by Tbl_endereco.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_enderecoGroupByArgs} args - Group by arguments.
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
    groupBy<T extends tbl_enderecoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: tbl_enderecoGroupByArgs['orderBy'];
    } : {
        orderBy?: tbl_enderecoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, tbl_enderecoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTbl_enderecoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the tbl_endereco model
     */
    readonly fields: tbl_enderecoFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for tbl_endereco.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__tbl_enderecoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    tbl_cliente<T extends Prisma.tbl_clienteDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.tbl_clienteDefaultArgs<ExtArgs>>): Prisma.Prisma__tbl_clienteClient<runtime.Types.Result.GetResult<Prisma.$tbl_clientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the tbl_endereco model
 */
export interface tbl_enderecoFieldRefs {
    readonly endereco_id: Prisma.FieldRef<"tbl_endereco", 'Int'>;
    readonly cliente_id: Prisma.FieldRef<"tbl_endereco", 'Int'>;
    readonly pais: Prisma.FieldRef<"tbl_endereco", 'String'>;
    readonly uf: Prisma.FieldRef<"tbl_endereco", 'String'>;
    readonly complemento: Prisma.FieldRef<"tbl_endereco", 'String'>;
    readonly rua: Prisma.FieldRef<"tbl_endereco", 'String'>;
    readonly cod_postal: Prisma.FieldRef<"tbl_endereco", 'String'>;
}
/**
 * tbl_endereco findUnique
 */
export type tbl_enderecoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which tbl_endereco to fetch.
     */
    where: Prisma.tbl_enderecoWhereUniqueInput;
};
/**
 * tbl_endereco findUniqueOrThrow
 */
export type tbl_enderecoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which tbl_endereco to fetch.
     */
    where: Prisma.tbl_enderecoWhereUniqueInput;
};
/**
 * tbl_endereco findFirst
 */
export type tbl_enderecoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which tbl_endereco to fetch.
     */
    where?: Prisma.tbl_enderecoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tbl_enderecos to fetch.
     */
    orderBy?: Prisma.tbl_enderecoOrderByWithRelationInput | Prisma.tbl_enderecoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for tbl_enderecos.
     */
    cursor?: Prisma.tbl_enderecoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tbl_enderecos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tbl_enderecos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of tbl_enderecos.
     */
    distinct?: Prisma.Tbl_enderecoScalarFieldEnum | Prisma.Tbl_enderecoScalarFieldEnum[];
};
/**
 * tbl_endereco findFirstOrThrow
 */
export type tbl_enderecoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which tbl_endereco to fetch.
     */
    where?: Prisma.tbl_enderecoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tbl_enderecos to fetch.
     */
    orderBy?: Prisma.tbl_enderecoOrderByWithRelationInput | Prisma.tbl_enderecoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for tbl_enderecos.
     */
    cursor?: Prisma.tbl_enderecoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tbl_enderecos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tbl_enderecos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of tbl_enderecos.
     */
    distinct?: Prisma.Tbl_enderecoScalarFieldEnum | Prisma.Tbl_enderecoScalarFieldEnum[];
};
/**
 * tbl_endereco findMany
 */
export type tbl_enderecoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which tbl_enderecos to fetch.
     */
    where?: Prisma.tbl_enderecoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tbl_enderecos to fetch.
     */
    orderBy?: Prisma.tbl_enderecoOrderByWithRelationInput | Prisma.tbl_enderecoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing tbl_enderecos.
     */
    cursor?: Prisma.tbl_enderecoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tbl_enderecos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tbl_enderecos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of tbl_enderecos.
     */
    distinct?: Prisma.Tbl_enderecoScalarFieldEnum | Prisma.Tbl_enderecoScalarFieldEnum[];
};
/**
 * tbl_endereco create
 */
export type tbl_enderecoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a tbl_endereco.
     */
    data: Prisma.XOR<Prisma.tbl_enderecoCreateInput, Prisma.tbl_enderecoUncheckedCreateInput>;
};
/**
 * tbl_endereco createMany
 */
export type tbl_enderecoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many tbl_enderecos.
     */
    data: Prisma.tbl_enderecoCreateManyInput | Prisma.tbl_enderecoCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * tbl_endereco createManyAndReturn
 */
export type tbl_enderecoCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_endereco
     */
    select?: Prisma.tbl_enderecoSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the tbl_endereco
     */
    omit?: Prisma.tbl_enderecoOmit<ExtArgs> | null;
    /**
     * The data used to create many tbl_enderecos.
     */
    data: Prisma.tbl_enderecoCreateManyInput | Prisma.tbl_enderecoCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.tbl_enderecoIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * tbl_endereco update
 */
export type tbl_enderecoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a tbl_endereco.
     */
    data: Prisma.XOR<Prisma.tbl_enderecoUpdateInput, Prisma.tbl_enderecoUncheckedUpdateInput>;
    /**
     * Choose, which tbl_endereco to update.
     */
    where: Prisma.tbl_enderecoWhereUniqueInput;
};
/**
 * tbl_endereco updateMany
 */
export type tbl_enderecoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update tbl_enderecos.
     */
    data: Prisma.XOR<Prisma.tbl_enderecoUpdateManyMutationInput, Prisma.tbl_enderecoUncheckedUpdateManyInput>;
    /**
     * Filter which tbl_enderecos to update
     */
    where?: Prisma.tbl_enderecoWhereInput;
    /**
     * Limit how many tbl_enderecos to update.
     */
    limit?: number;
};
/**
 * tbl_endereco updateManyAndReturn
 */
export type tbl_enderecoUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_endereco
     */
    select?: Prisma.tbl_enderecoSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the tbl_endereco
     */
    omit?: Prisma.tbl_enderecoOmit<ExtArgs> | null;
    /**
     * The data used to update tbl_enderecos.
     */
    data: Prisma.XOR<Prisma.tbl_enderecoUpdateManyMutationInput, Prisma.tbl_enderecoUncheckedUpdateManyInput>;
    /**
     * Filter which tbl_enderecos to update
     */
    where?: Prisma.tbl_enderecoWhereInput;
    /**
     * Limit how many tbl_enderecos to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.tbl_enderecoIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * tbl_endereco upsert
 */
export type tbl_enderecoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the tbl_endereco to update in case it exists.
     */
    where: Prisma.tbl_enderecoWhereUniqueInput;
    /**
     * In case the tbl_endereco found by the `where` argument doesn't exist, create a new tbl_endereco with this data.
     */
    create: Prisma.XOR<Prisma.tbl_enderecoCreateInput, Prisma.tbl_enderecoUncheckedCreateInput>;
    /**
     * In case the tbl_endereco was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.tbl_enderecoUpdateInput, Prisma.tbl_enderecoUncheckedUpdateInput>;
};
/**
 * tbl_endereco delete
 */
export type tbl_enderecoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which tbl_endereco to delete.
     */
    where: Prisma.tbl_enderecoWhereUniqueInput;
};
/**
 * tbl_endereco deleteMany
 */
export type tbl_enderecoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_enderecos to delete
     */
    where?: Prisma.tbl_enderecoWhereInput;
    /**
     * Limit how many tbl_enderecos to delete.
     */
    limit?: number;
};
/**
 * tbl_endereco without action
 */
export type tbl_enderecoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
//# sourceMappingURL=tbl_endereco.d.ts.map