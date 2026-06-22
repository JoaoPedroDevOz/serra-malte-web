import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.ts";
/**
 * Model tbl_fornecedor
 *
 */
export type tbl_fornecedorModel = runtime.Types.Result.DefaultSelection<Prisma.$tbl_fornecedorPayload>;
export type AggregateTbl_fornecedor = {
    _count: Tbl_fornecedorCountAggregateOutputType | null;
    _avg: Tbl_fornecedorAvgAggregateOutputType | null;
    _sum: Tbl_fornecedorSumAggregateOutputType | null;
    _min: Tbl_fornecedorMinAggregateOutputType | null;
    _max: Tbl_fornecedorMaxAggregateOutputType | null;
};
export type Tbl_fornecedorAvgAggregateOutputType = {
    fornecedor_id: number | null;
};
export type Tbl_fornecedorSumAggregateOutputType = {
    fornecedor_id: number | null;
};
export type Tbl_fornecedorMinAggregateOutputType = {
    fornecedor_id: number | null;
    email: string | null;
    contato: string | null;
    telefone: string | null;
    nome: string | null;
    registro_nacional: string | null;
};
export type Tbl_fornecedorMaxAggregateOutputType = {
    fornecedor_id: number | null;
    email: string | null;
    contato: string | null;
    telefone: string | null;
    nome: string | null;
    registro_nacional: string | null;
};
export type Tbl_fornecedorCountAggregateOutputType = {
    fornecedor_id: number;
    email: number;
    contato: number;
    telefone: number;
    nome: number;
    registro_nacional: number;
    _all: number;
};
export type Tbl_fornecedorAvgAggregateInputType = {
    fornecedor_id?: true;
};
export type Tbl_fornecedorSumAggregateInputType = {
    fornecedor_id?: true;
};
export type Tbl_fornecedorMinAggregateInputType = {
    fornecedor_id?: true;
    email?: true;
    contato?: true;
    telefone?: true;
    nome?: true;
    registro_nacional?: true;
};
export type Tbl_fornecedorMaxAggregateInputType = {
    fornecedor_id?: true;
    email?: true;
    contato?: true;
    telefone?: true;
    nome?: true;
    registro_nacional?: true;
};
export type Tbl_fornecedorCountAggregateInputType = {
    fornecedor_id?: true;
    email?: true;
    contato?: true;
    telefone?: true;
    nome?: true;
    registro_nacional?: true;
    _all?: true;
};
export type Tbl_fornecedorAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_fornecedor to aggregate.
     */
    where?: Prisma.tbl_fornecedorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tbl_fornecedors to fetch.
     */
    orderBy?: Prisma.tbl_fornecedorOrderByWithRelationInput | Prisma.tbl_fornecedorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.tbl_fornecedorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tbl_fornecedors from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tbl_fornecedors.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned tbl_fornecedors
    **/
    _count?: true | Tbl_fornecedorCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: Tbl_fornecedorAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: Tbl_fornecedorSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: Tbl_fornecedorMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: Tbl_fornecedorMaxAggregateInputType;
};
export type GetTbl_fornecedorAggregateType<T extends Tbl_fornecedorAggregateArgs> = {
    [P in keyof T & keyof AggregateTbl_fornecedor]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTbl_fornecedor[P]> : Prisma.GetScalarType<T[P], AggregateTbl_fornecedor[P]>;
};
export type tbl_fornecedorGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.tbl_fornecedorWhereInput;
    orderBy?: Prisma.tbl_fornecedorOrderByWithAggregationInput | Prisma.tbl_fornecedorOrderByWithAggregationInput[];
    by: Prisma.Tbl_fornecedorScalarFieldEnum[] | Prisma.Tbl_fornecedorScalarFieldEnum;
    having?: Prisma.tbl_fornecedorScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Tbl_fornecedorCountAggregateInputType | true;
    _avg?: Tbl_fornecedorAvgAggregateInputType;
    _sum?: Tbl_fornecedorSumAggregateInputType;
    _min?: Tbl_fornecedorMinAggregateInputType;
    _max?: Tbl_fornecedorMaxAggregateInputType;
};
export type Tbl_fornecedorGroupByOutputType = {
    fornecedor_id: number;
    email: string | null;
    contato: string | null;
    telefone: string | null;
    nome: string;
    registro_nacional: string;
    _count: Tbl_fornecedorCountAggregateOutputType | null;
    _avg: Tbl_fornecedorAvgAggregateOutputType | null;
    _sum: Tbl_fornecedorSumAggregateOutputType | null;
    _min: Tbl_fornecedorMinAggregateOutputType | null;
    _max: Tbl_fornecedorMaxAggregateOutputType | null;
};
export type GetTbl_fornecedorGroupByPayload<T extends tbl_fornecedorGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Tbl_fornecedorGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Tbl_fornecedorGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Tbl_fornecedorGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Tbl_fornecedorGroupByOutputType[P]>;
}>>;
export type tbl_fornecedorWhereInput = {
    AND?: Prisma.tbl_fornecedorWhereInput | Prisma.tbl_fornecedorWhereInput[];
    OR?: Prisma.tbl_fornecedorWhereInput[];
    NOT?: Prisma.tbl_fornecedorWhereInput | Prisma.tbl_fornecedorWhereInput[];
    fornecedor_id?: Prisma.IntFilter<"tbl_fornecedor"> | number;
    email?: Prisma.StringNullableFilter<"tbl_fornecedor"> | string | null;
    contato?: Prisma.StringNullableFilter<"tbl_fornecedor"> | string | null;
    telefone?: Prisma.StringNullableFilter<"tbl_fornecedor"> | string | null;
    nome?: Prisma.StringFilter<"tbl_fornecedor"> | string;
    registro_nacional?: Prisma.StringFilter<"tbl_fornecedor"> | string;
    rel_fornecedor_ingrediente?: Prisma.Rel_fornecedor_ingredienteListRelationFilter;
    rel_fornecedor_produto?: Prisma.Rel_fornecedor_produtoListRelationFilter;
};
export type tbl_fornecedorOrderByWithRelationInput = {
    fornecedor_id?: Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    contato?: Prisma.SortOrderInput | Prisma.SortOrder;
    telefone?: Prisma.SortOrderInput | Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    registro_nacional?: Prisma.SortOrder;
    rel_fornecedor_ingrediente?: Prisma.rel_fornecedor_ingredienteOrderByRelationAggregateInput;
    rel_fornecedor_produto?: Prisma.rel_fornecedor_produtoOrderByRelationAggregateInput;
};
export type tbl_fornecedorWhereUniqueInput = Prisma.AtLeast<{
    fornecedor_id?: number;
    AND?: Prisma.tbl_fornecedorWhereInput | Prisma.tbl_fornecedorWhereInput[];
    OR?: Prisma.tbl_fornecedorWhereInput[];
    NOT?: Prisma.tbl_fornecedorWhereInput | Prisma.tbl_fornecedorWhereInput[];
    email?: Prisma.StringNullableFilter<"tbl_fornecedor"> | string | null;
    contato?: Prisma.StringNullableFilter<"tbl_fornecedor"> | string | null;
    telefone?: Prisma.StringNullableFilter<"tbl_fornecedor"> | string | null;
    nome?: Prisma.StringFilter<"tbl_fornecedor"> | string;
    registro_nacional?: Prisma.StringFilter<"tbl_fornecedor"> | string;
    rel_fornecedor_ingrediente?: Prisma.Rel_fornecedor_ingredienteListRelationFilter;
    rel_fornecedor_produto?: Prisma.Rel_fornecedor_produtoListRelationFilter;
}, "fornecedor_id">;
export type tbl_fornecedorOrderByWithAggregationInput = {
    fornecedor_id?: Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    contato?: Prisma.SortOrderInput | Prisma.SortOrder;
    telefone?: Prisma.SortOrderInput | Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    registro_nacional?: Prisma.SortOrder;
    _count?: Prisma.tbl_fornecedorCountOrderByAggregateInput;
    _avg?: Prisma.tbl_fornecedorAvgOrderByAggregateInput;
    _max?: Prisma.tbl_fornecedorMaxOrderByAggregateInput;
    _min?: Prisma.tbl_fornecedorMinOrderByAggregateInput;
    _sum?: Prisma.tbl_fornecedorSumOrderByAggregateInput;
};
export type tbl_fornecedorScalarWhereWithAggregatesInput = {
    AND?: Prisma.tbl_fornecedorScalarWhereWithAggregatesInput | Prisma.tbl_fornecedorScalarWhereWithAggregatesInput[];
    OR?: Prisma.tbl_fornecedorScalarWhereWithAggregatesInput[];
    NOT?: Prisma.tbl_fornecedorScalarWhereWithAggregatesInput | Prisma.tbl_fornecedorScalarWhereWithAggregatesInput[];
    fornecedor_id?: Prisma.IntWithAggregatesFilter<"tbl_fornecedor"> | number;
    email?: Prisma.StringNullableWithAggregatesFilter<"tbl_fornecedor"> | string | null;
    contato?: Prisma.StringNullableWithAggregatesFilter<"tbl_fornecedor"> | string | null;
    telefone?: Prisma.StringNullableWithAggregatesFilter<"tbl_fornecedor"> | string | null;
    nome?: Prisma.StringWithAggregatesFilter<"tbl_fornecedor"> | string;
    registro_nacional?: Prisma.StringWithAggregatesFilter<"tbl_fornecedor"> | string;
};
export type tbl_fornecedorCreateInput = {
    email?: string | null;
    contato?: string | null;
    telefone?: string | null;
    nome: string;
    registro_nacional: string;
    rel_fornecedor_ingrediente?: Prisma.rel_fornecedor_ingredienteCreateNestedManyWithoutTbl_fornecedorInput;
    rel_fornecedor_produto?: Prisma.rel_fornecedor_produtoCreateNestedManyWithoutTbl_fornecedorInput;
};
export type tbl_fornecedorUncheckedCreateInput = {
    fornecedor_id?: number;
    email?: string | null;
    contato?: string | null;
    telefone?: string | null;
    nome: string;
    registro_nacional: string;
    rel_fornecedor_ingrediente?: Prisma.rel_fornecedor_ingredienteUncheckedCreateNestedManyWithoutTbl_fornecedorInput;
    rel_fornecedor_produto?: Prisma.rel_fornecedor_produtoUncheckedCreateNestedManyWithoutTbl_fornecedorInput;
};
export type tbl_fornecedorUpdateInput = {
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contato?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    registro_nacional?: Prisma.StringFieldUpdateOperationsInput | string;
    rel_fornecedor_ingrediente?: Prisma.rel_fornecedor_ingredienteUpdateManyWithoutTbl_fornecedorNestedInput;
    rel_fornecedor_produto?: Prisma.rel_fornecedor_produtoUpdateManyWithoutTbl_fornecedorNestedInput;
};
export type tbl_fornecedorUncheckedUpdateInput = {
    fornecedor_id?: Prisma.IntFieldUpdateOperationsInput | number;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contato?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    registro_nacional?: Prisma.StringFieldUpdateOperationsInput | string;
    rel_fornecedor_ingrediente?: Prisma.rel_fornecedor_ingredienteUncheckedUpdateManyWithoutTbl_fornecedorNestedInput;
    rel_fornecedor_produto?: Prisma.rel_fornecedor_produtoUncheckedUpdateManyWithoutTbl_fornecedorNestedInput;
};
export type tbl_fornecedorCreateManyInput = {
    fornecedor_id?: number;
    email?: string | null;
    contato?: string | null;
    telefone?: string | null;
    nome: string;
    registro_nacional: string;
};
export type tbl_fornecedorUpdateManyMutationInput = {
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contato?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    registro_nacional?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type tbl_fornecedorUncheckedUpdateManyInput = {
    fornecedor_id?: Prisma.IntFieldUpdateOperationsInput | number;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contato?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    registro_nacional?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type Tbl_fornecedorScalarRelationFilter = {
    is?: Prisma.tbl_fornecedorWhereInput;
    isNot?: Prisma.tbl_fornecedorWhereInput;
};
export type tbl_fornecedorCountOrderByAggregateInput = {
    fornecedor_id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    contato?: Prisma.SortOrder;
    telefone?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    registro_nacional?: Prisma.SortOrder;
};
export type tbl_fornecedorAvgOrderByAggregateInput = {
    fornecedor_id?: Prisma.SortOrder;
};
export type tbl_fornecedorMaxOrderByAggregateInput = {
    fornecedor_id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    contato?: Prisma.SortOrder;
    telefone?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    registro_nacional?: Prisma.SortOrder;
};
export type tbl_fornecedorMinOrderByAggregateInput = {
    fornecedor_id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    contato?: Prisma.SortOrder;
    telefone?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    registro_nacional?: Prisma.SortOrder;
};
export type tbl_fornecedorSumOrderByAggregateInput = {
    fornecedor_id?: Prisma.SortOrder;
};
export type tbl_fornecedorCreateNestedOneWithoutRel_fornecedor_ingredienteInput = {
    create?: Prisma.XOR<Prisma.tbl_fornecedorCreateWithoutRel_fornecedor_ingredienteInput, Prisma.tbl_fornecedorUncheckedCreateWithoutRel_fornecedor_ingredienteInput>;
    connectOrCreate?: Prisma.tbl_fornecedorCreateOrConnectWithoutRel_fornecedor_ingredienteInput;
    connect?: Prisma.tbl_fornecedorWhereUniqueInput;
};
export type tbl_fornecedorUpdateOneRequiredWithoutRel_fornecedor_ingredienteNestedInput = {
    create?: Prisma.XOR<Prisma.tbl_fornecedorCreateWithoutRel_fornecedor_ingredienteInput, Prisma.tbl_fornecedorUncheckedCreateWithoutRel_fornecedor_ingredienteInput>;
    connectOrCreate?: Prisma.tbl_fornecedorCreateOrConnectWithoutRel_fornecedor_ingredienteInput;
    upsert?: Prisma.tbl_fornecedorUpsertWithoutRel_fornecedor_ingredienteInput;
    connect?: Prisma.tbl_fornecedorWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.tbl_fornecedorUpdateToOneWithWhereWithoutRel_fornecedor_ingredienteInput, Prisma.tbl_fornecedorUpdateWithoutRel_fornecedor_ingredienteInput>, Prisma.tbl_fornecedorUncheckedUpdateWithoutRel_fornecedor_ingredienteInput>;
};
export type tbl_fornecedorCreateNestedOneWithoutRel_fornecedor_produtoInput = {
    create?: Prisma.XOR<Prisma.tbl_fornecedorCreateWithoutRel_fornecedor_produtoInput, Prisma.tbl_fornecedorUncheckedCreateWithoutRel_fornecedor_produtoInput>;
    connectOrCreate?: Prisma.tbl_fornecedorCreateOrConnectWithoutRel_fornecedor_produtoInput;
    connect?: Prisma.tbl_fornecedorWhereUniqueInput;
};
export type tbl_fornecedorUpdateOneRequiredWithoutRel_fornecedor_produtoNestedInput = {
    create?: Prisma.XOR<Prisma.tbl_fornecedorCreateWithoutRel_fornecedor_produtoInput, Prisma.tbl_fornecedorUncheckedCreateWithoutRel_fornecedor_produtoInput>;
    connectOrCreate?: Prisma.tbl_fornecedorCreateOrConnectWithoutRel_fornecedor_produtoInput;
    upsert?: Prisma.tbl_fornecedorUpsertWithoutRel_fornecedor_produtoInput;
    connect?: Prisma.tbl_fornecedorWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.tbl_fornecedorUpdateToOneWithWhereWithoutRel_fornecedor_produtoInput, Prisma.tbl_fornecedorUpdateWithoutRel_fornecedor_produtoInput>, Prisma.tbl_fornecedorUncheckedUpdateWithoutRel_fornecedor_produtoInput>;
};
export type tbl_fornecedorCreateWithoutRel_fornecedor_ingredienteInput = {
    email?: string | null;
    contato?: string | null;
    telefone?: string | null;
    nome: string;
    registro_nacional: string;
    rel_fornecedor_produto?: Prisma.rel_fornecedor_produtoCreateNestedManyWithoutTbl_fornecedorInput;
};
export type tbl_fornecedorUncheckedCreateWithoutRel_fornecedor_ingredienteInput = {
    fornecedor_id?: number;
    email?: string | null;
    contato?: string | null;
    telefone?: string | null;
    nome: string;
    registro_nacional: string;
    rel_fornecedor_produto?: Prisma.rel_fornecedor_produtoUncheckedCreateNestedManyWithoutTbl_fornecedorInput;
};
export type tbl_fornecedorCreateOrConnectWithoutRel_fornecedor_ingredienteInput = {
    where: Prisma.tbl_fornecedorWhereUniqueInput;
    create: Prisma.XOR<Prisma.tbl_fornecedorCreateWithoutRel_fornecedor_ingredienteInput, Prisma.tbl_fornecedorUncheckedCreateWithoutRel_fornecedor_ingredienteInput>;
};
export type tbl_fornecedorUpsertWithoutRel_fornecedor_ingredienteInput = {
    update: Prisma.XOR<Prisma.tbl_fornecedorUpdateWithoutRel_fornecedor_ingredienteInput, Prisma.tbl_fornecedorUncheckedUpdateWithoutRel_fornecedor_ingredienteInput>;
    create: Prisma.XOR<Prisma.tbl_fornecedorCreateWithoutRel_fornecedor_ingredienteInput, Prisma.tbl_fornecedorUncheckedCreateWithoutRel_fornecedor_ingredienteInput>;
    where?: Prisma.tbl_fornecedorWhereInput;
};
export type tbl_fornecedorUpdateToOneWithWhereWithoutRel_fornecedor_ingredienteInput = {
    where?: Prisma.tbl_fornecedorWhereInput;
    data: Prisma.XOR<Prisma.tbl_fornecedorUpdateWithoutRel_fornecedor_ingredienteInput, Prisma.tbl_fornecedorUncheckedUpdateWithoutRel_fornecedor_ingredienteInput>;
};
export type tbl_fornecedorUpdateWithoutRel_fornecedor_ingredienteInput = {
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contato?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    registro_nacional?: Prisma.StringFieldUpdateOperationsInput | string;
    rel_fornecedor_produto?: Prisma.rel_fornecedor_produtoUpdateManyWithoutTbl_fornecedorNestedInput;
};
export type tbl_fornecedorUncheckedUpdateWithoutRel_fornecedor_ingredienteInput = {
    fornecedor_id?: Prisma.IntFieldUpdateOperationsInput | number;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contato?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    registro_nacional?: Prisma.StringFieldUpdateOperationsInput | string;
    rel_fornecedor_produto?: Prisma.rel_fornecedor_produtoUncheckedUpdateManyWithoutTbl_fornecedorNestedInput;
};
export type tbl_fornecedorCreateWithoutRel_fornecedor_produtoInput = {
    email?: string | null;
    contato?: string | null;
    telefone?: string | null;
    nome: string;
    registro_nacional: string;
    rel_fornecedor_ingrediente?: Prisma.rel_fornecedor_ingredienteCreateNestedManyWithoutTbl_fornecedorInput;
};
export type tbl_fornecedorUncheckedCreateWithoutRel_fornecedor_produtoInput = {
    fornecedor_id?: number;
    email?: string | null;
    contato?: string | null;
    telefone?: string | null;
    nome: string;
    registro_nacional: string;
    rel_fornecedor_ingrediente?: Prisma.rel_fornecedor_ingredienteUncheckedCreateNestedManyWithoutTbl_fornecedorInput;
};
export type tbl_fornecedorCreateOrConnectWithoutRel_fornecedor_produtoInput = {
    where: Prisma.tbl_fornecedorWhereUniqueInput;
    create: Prisma.XOR<Prisma.tbl_fornecedorCreateWithoutRel_fornecedor_produtoInput, Prisma.tbl_fornecedorUncheckedCreateWithoutRel_fornecedor_produtoInput>;
};
export type tbl_fornecedorUpsertWithoutRel_fornecedor_produtoInput = {
    update: Prisma.XOR<Prisma.tbl_fornecedorUpdateWithoutRel_fornecedor_produtoInput, Prisma.tbl_fornecedorUncheckedUpdateWithoutRel_fornecedor_produtoInput>;
    create: Prisma.XOR<Prisma.tbl_fornecedorCreateWithoutRel_fornecedor_produtoInput, Prisma.tbl_fornecedorUncheckedCreateWithoutRel_fornecedor_produtoInput>;
    where?: Prisma.tbl_fornecedorWhereInput;
};
export type tbl_fornecedorUpdateToOneWithWhereWithoutRel_fornecedor_produtoInput = {
    where?: Prisma.tbl_fornecedorWhereInput;
    data: Prisma.XOR<Prisma.tbl_fornecedorUpdateWithoutRel_fornecedor_produtoInput, Prisma.tbl_fornecedorUncheckedUpdateWithoutRel_fornecedor_produtoInput>;
};
export type tbl_fornecedorUpdateWithoutRel_fornecedor_produtoInput = {
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contato?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    registro_nacional?: Prisma.StringFieldUpdateOperationsInput | string;
    rel_fornecedor_ingrediente?: Prisma.rel_fornecedor_ingredienteUpdateManyWithoutTbl_fornecedorNestedInput;
};
export type tbl_fornecedorUncheckedUpdateWithoutRel_fornecedor_produtoInput = {
    fornecedor_id?: Prisma.IntFieldUpdateOperationsInput | number;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contato?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    registro_nacional?: Prisma.StringFieldUpdateOperationsInput | string;
    rel_fornecedor_ingrediente?: Prisma.rel_fornecedor_ingredienteUncheckedUpdateManyWithoutTbl_fornecedorNestedInput;
};
/**
 * Count Type Tbl_fornecedorCountOutputType
 */
export type Tbl_fornecedorCountOutputType = {
    rel_fornecedor_ingrediente: number;
    rel_fornecedor_produto: number;
};
export type Tbl_fornecedorCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rel_fornecedor_ingrediente?: boolean | Tbl_fornecedorCountOutputTypeCountRel_fornecedor_ingredienteArgs;
    rel_fornecedor_produto?: boolean | Tbl_fornecedorCountOutputTypeCountRel_fornecedor_produtoArgs;
};
/**
 * Tbl_fornecedorCountOutputType without action
 */
export type Tbl_fornecedorCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tbl_fornecedorCountOutputType
     */
    select?: Prisma.Tbl_fornecedorCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * Tbl_fornecedorCountOutputType without action
 */
export type Tbl_fornecedorCountOutputTypeCountRel_fornecedor_ingredienteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.rel_fornecedor_ingredienteWhereInput;
};
/**
 * Tbl_fornecedorCountOutputType without action
 */
export type Tbl_fornecedorCountOutputTypeCountRel_fornecedor_produtoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.rel_fornecedor_produtoWhereInput;
};
export type tbl_fornecedorSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    fornecedor_id?: boolean;
    email?: boolean;
    contato?: boolean;
    telefone?: boolean;
    nome?: boolean;
    registro_nacional?: boolean;
    rel_fornecedor_ingrediente?: boolean | Prisma.tbl_fornecedor$rel_fornecedor_ingredienteArgs<ExtArgs>;
    rel_fornecedor_produto?: boolean | Prisma.tbl_fornecedor$rel_fornecedor_produtoArgs<ExtArgs>;
    _count?: boolean | Prisma.Tbl_fornecedorCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["tbl_fornecedor"]>;
export type tbl_fornecedorSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    fornecedor_id?: boolean;
    email?: boolean;
    contato?: boolean;
    telefone?: boolean;
    nome?: boolean;
    registro_nacional?: boolean;
}, ExtArgs["result"]["tbl_fornecedor"]>;
export type tbl_fornecedorSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    fornecedor_id?: boolean;
    email?: boolean;
    contato?: boolean;
    telefone?: boolean;
    nome?: boolean;
    registro_nacional?: boolean;
}, ExtArgs["result"]["tbl_fornecedor"]>;
export type tbl_fornecedorSelectScalar = {
    fornecedor_id?: boolean;
    email?: boolean;
    contato?: boolean;
    telefone?: boolean;
    nome?: boolean;
    registro_nacional?: boolean;
};
export type tbl_fornecedorOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"fornecedor_id" | "email" | "contato" | "telefone" | "nome" | "registro_nacional", ExtArgs["result"]["tbl_fornecedor"]>;
export type tbl_fornecedorInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rel_fornecedor_ingrediente?: boolean | Prisma.tbl_fornecedor$rel_fornecedor_ingredienteArgs<ExtArgs>;
    rel_fornecedor_produto?: boolean | Prisma.tbl_fornecedor$rel_fornecedor_produtoArgs<ExtArgs>;
    _count?: boolean | Prisma.Tbl_fornecedorCountOutputTypeDefaultArgs<ExtArgs>;
};
export type tbl_fornecedorIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type tbl_fornecedorIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $tbl_fornecedorPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "tbl_fornecedor";
    objects: {
        rel_fornecedor_ingrediente: Prisma.$rel_fornecedor_ingredientePayload<ExtArgs>[];
        rel_fornecedor_produto: Prisma.$rel_fornecedor_produtoPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        fornecedor_id: number;
        email: string | null;
        contato: string | null;
        telefone: string | null;
        nome: string;
        registro_nacional: string;
    }, ExtArgs["result"]["tbl_fornecedor"]>;
    composites: {};
};
export type tbl_fornecedorGetPayload<S extends boolean | null | undefined | tbl_fornecedorDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$tbl_fornecedorPayload, S>;
export type tbl_fornecedorCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<tbl_fornecedorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Tbl_fornecedorCountAggregateInputType | true;
};
export interface tbl_fornecedorDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['tbl_fornecedor'];
        meta: {
            name: 'tbl_fornecedor';
        };
    };
    /**
     * Find zero or one Tbl_fornecedor that matches the filter.
     * @param {tbl_fornecedorFindUniqueArgs} args - Arguments to find a Tbl_fornecedor
     * @example
     * // Get one Tbl_fornecedor
     * const tbl_fornecedor = await prisma.tbl_fornecedor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tbl_fornecedorFindUniqueArgs>(args: Prisma.SelectSubset<T, tbl_fornecedorFindUniqueArgs<ExtArgs>>): Prisma.Prisma__tbl_fornecedorClient<runtime.Types.Result.GetResult<Prisma.$tbl_fornecedorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Tbl_fornecedor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tbl_fornecedorFindUniqueOrThrowArgs} args - Arguments to find a Tbl_fornecedor
     * @example
     * // Get one Tbl_fornecedor
     * const tbl_fornecedor = await prisma.tbl_fornecedor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tbl_fornecedorFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, tbl_fornecedorFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__tbl_fornecedorClient<runtime.Types.Result.GetResult<Prisma.$tbl_fornecedorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Tbl_fornecedor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_fornecedorFindFirstArgs} args - Arguments to find a Tbl_fornecedor
     * @example
     * // Get one Tbl_fornecedor
     * const tbl_fornecedor = await prisma.tbl_fornecedor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tbl_fornecedorFindFirstArgs>(args?: Prisma.SelectSubset<T, tbl_fornecedorFindFirstArgs<ExtArgs>>): Prisma.Prisma__tbl_fornecedorClient<runtime.Types.Result.GetResult<Prisma.$tbl_fornecedorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Tbl_fornecedor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_fornecedorFindFirstOrThrowArgs} args - Arguments to find a Tbl_fornecedor
     * @example
     * // Get one Tbl_fornecedor
     * const tbl_fornecedor = await prisma.tbl_fornecedor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tbl_fornecedorFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, tbl_fornecedorFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__tbl_fornecedorClient<runtime.Types.Result.GetResult<Prisma.$tbl_fornecedorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Tbl_fornecedors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_fornecedorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tbl_fornecedors
     * const tbl_fornecedors = await prisma.tbl_fornecedor.findMany()
     *
     * // Get first 10 Tbl_fornecedors
     * const tbl_fornecedors = await prisma.tbl_fornecedor.findMany({ take: 10 })
     *
     * // Only select the `fornecedor_id`
     * const tbl_fornecedorWithFornecedor_idOnly = await prisma.tbl_fornecedor.findMany({ select: { fornecedor_id: true } })
     *
     */
    findMany<T extends tbl_fornecedorFindManyArgs>(args?: Prisma.SelectSubset<T, tbl_fornecedorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$tbl_fornecedorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Tbl_fornecedor.
     * @param {tbl_fornecedorCreateArgs} args - Arguments to create a Tbl_fornecedor.
     * @example
     * // Create one Tbl_fornecedor
     * const Tbl_fornecedor = await prisma.tbl_fornecedor.create({
     *   data: {
     *     // ... data to create a Tbl_fornecedor
     *   }
     * })
     *
     */
    create<T extends tbl_fornecedorCreateArgs>(args: Prisma.SelectSubset<T, tbl_fornecedorCreateArgs<ExtArgs>>): Prisma.Prisma__tbl_fornecedorClient<runtime.Types.Result.GetResult<Prisma.$tbl_fornecedorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Tbl_fornecedors.
     * @param {tbl_fornecedorCreateManyArgs} args - Arguments to create many Tbl_fornecedors.
     * @example
     * // Create many Tbl_fornecedors
     * const tbl_fornecedor = await prisma.tbl_fornecedor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends tbl_fornecedorCreateManyArgs>(args?: Prisma.SelectSubset<T, tbl_fornecedorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Tbl_fornecedors and returns the data saved in the database.
     * @param {tbl_fornecedorCreateManyAndReturnArgs} args - Arguments to create many Tbl_fornecedors.
     * @example
     * // Create many Tbl_fornecedors
     * const tbl_fornecedor = await prisma.tbl_fornecedor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Tbl_fornecedors and only return the `fornecedor_id`
     * const tbl_fornecedorWithFornecedor_idOnly = await prisma.tbl_fornecedor.createManyAndReturn({
     *   select: { fornecedor_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends tbl_fornecedorCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, tbl_fornecedorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$tbl_fornecedorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Tbl_fornecedor.
     * @param {tbl_fornecedorDeleteArgs} args - Arguments to delete one Tbl_fornecedor.
     * @example
     * // Delete one Tbl_fornecedor
     * const Tbl_fornecedor = await prisma.tbl_fornecedor.delete({
     *   where: {
     *     // ... filter to delete one Tbl_fornecedor
     *   }
     * })
     *
     */
    delete<T extends tbl_fornecedorDeleteArgs>(args: Prisma.SelectSubset<T, tbl_fornecedorDeleteArgs<ExtArgs>>): Prisma.Prisma__tbl_fornecedorClient<runtime.Types.Result.GetResult<Prisma.$tbl_fornecedorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Tbl_fornecedor.
     * @param {tbl_fornecedorUpdateArgs} args - Arguments to update one Tbl_fornecedor.
     * @example
     * // Update one Tbl_fornecedor
     * const tbl_fornecedor = await prisma.tbl_fornecedor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends tbl_fornecedorUpdateArgs>(args: Prisma.SelectSubset<T, tbl_fornecedorUpdateArgs<ExtArgs>>): Prisma.Prisma__tbl_fornecedorClient<runtime.Types.Result.GetResult<Prisma.$tbl_fornecedorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Tbl_fornecedors.
     * @param {tbl_fornecedorDeleteManyArgs} args - Arguments to filter Tbl_fornecedors to delete.
     * @example
     * // Delete a few Tbl_fornecedors
     * const { count } = await prisma.tbl_fornecedor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends tbl_fornecedorDeleteManyArgs>(args?: Prisma.SelectSubset<T, tbl_fornecedorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Tbl_fornecedors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_fornecedorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tbl_fornecedors
     * const tbl_fornecedor = await prisma.tbl_fornecedor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends tbl_fornecedorUpdateManyArgs>(args: Prisma.SelectSubset<T, tbl_fornecedorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Tbl_fornecedors and returns the data updated in the database.
     * @param {tbl_fornecedorUpdateManyAndReturnArgs} args - Arguments to update many Tbl_fornecedors.
     * @example
     * // Update many Tbl_fornecedors
     * const tbl_fornecedor = await prisma.tbl_fornecedor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Tbl_fornecedors and only return the `fornecedor_id`
     * const tbl_fornecedorWithFornecedor_idOnly = await prisma.tbl_fornecedor.updateManyAndReturn({
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
    updateManyAndReturn<T extends tbl_fornecedorUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, tbl_fornecedorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$tbl_fornecedorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Tbl_fornecedor.
     * @param {tbl_fornecedorUpsertArgs} args - Arguments to update or create a Tbl_fornecedor.
     * @example
     * // Update or create a Tbl_fornecedor
     * const tbl_fornecedor = await prisma.tbl_fornecedor.upsert({
     *   create: {
     *     // ... data to create a Tbl_fornecedor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tbl_fornecedor we want to update
     *   }
     * })
     */
    upsert<T extends tbl_fornecedorUpsertArgs>(args: Prisma.SelectSubset<T, tbl_fornecedorUpsertArgs<ExtArgs>>): Prisma.Prisma__tbl_fornecedorClient<runtime.Types.Result.GetResult<Prisma.$tbl_fornecedorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Tbl_fornecedors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_fornecedorCountArgs} args - Arguments to filter Tbl_fornecedors to count.
     * @example
     * // Count the number of Tbl_fornecedors
     * const count = await prisma.tbl_fornecedor.count({
     *   where: {
     *     // ... the filter for the Tbl_fornecedors we want to count
     *   }
     * })
    **/
    count<T extends tbl_fornecedorCountArgs>(args?: Prisma.Subset<T, tbl_fornecedorCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Tbl_fornecedorCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Tbl_fornecedor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tbl_fornecedorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tbl_fornecedorAggregateArgs>(args: Prisma.Subset<T, Tbl_fornecedorAggregateArgs>): Prisma.PrismaPromise<GetTbl_fornecedorAggregateType<T>>;
    /**
     * Group by Tbl_fornecedor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_fornecedorGroupByArgs} args - Group by arguments.
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
    groupBy<T extends tbl_fornecedorGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: tbl_fornecedorGroupByArgs['orderBy'];
    } : {
        orderBy?: tbl_fornecedorGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, tbl_fornecedorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTbl_fornecedorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the tbl_fornecedor model
     */
    readonly fields: tbl_fornecedorFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for tbl_fornecedor.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__tbl_fornecedorClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    rel_fornecedor_ingrediente<T extends Prisma.tbl_fornecedor$rel_fornecedor_ingredienteArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.tbl_fornecedor$rel_fornecedor_ingredienteArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$rel_fornecedor_ingredientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    rel_fornecedor_produto<T extends Prisma.tbl_fornecedor$rel_fornecedor_produtoArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.tbl_fornecedor$rel_fornecedor_produtoArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$rel_fornecedor_produtoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the tbl_fornecedor model
 */
export interface tbl_fornecedorFieldRefs {
    readonly fornecedor_id: Prisma.FieldRef<"tbl_fornecedor", 'Int'>;
    readonly email: Prisma.FieldRef<"tbl_fornecedor", 'String'>;
    readonly contato: Prisma.FieldRef<"tbl_fornecedor", 'String'>;
    readonly telefone: Prisma.FieldRef<"tbl_fornecedor", 'String'>;
    readonly nome: Prisma.FieldRef<"tbl_fornecedor", 'String'>;
    readonly registro_nacional: Prisma.FieldRef<"tbl_fornecedor", 'String'>;
}
/**
 * tbl_fornecedor findUnique
 */
export type tbl_fornecedorFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_fornecedor
     */
    select?: Prisma.tbl_fornecedorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the tbl_fornecedor
     */
    omit?: Prisma.tbl_fornecedorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.tbl_fornecedorInclude<ExtArgs> | null;
    /**
     * Filter, which tbl_fornecedor to fetch.
     */
    where: Prisma.tbl_fornecedorWhereUniqueInput;
};
/**
 * tbl_fornecedor findUniqueOrThrow
 */
export type tbl_fornecedorFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_fornecedor
     */
    select?: Prisma.tbl_fornecedorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the tbl_fornecedor
     */
    omit?: Prisma.tbl_fornecedorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.tbl_fornecedorInclude<ExtArgs> | null;
    /**
     * Filter, which tbl_fornecedor to fetch.
     */
    where: Prisma.tbl_fornecedorWhereUniqueInput;
};
/**
 * tbl_fornecedor findFirst
 */
export type tbl_fornecedorFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_fornecedor
     */
    select?: Prisma.tbl_fornecedorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the tbl_fornecedor
     */
    omit?: Prisma.tbl_fornecedorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.tbl_fornecedorInclude<ExtArgs> | null;
    /**
     * Filter, which tbl_fornecedor to fetch.
     */
    where?: Prisma.tbl_fornecedorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tbl_fornecedors to fetch.
     */
    orderBy?: Prisma.tbl_fornecedorOrderByWithRelationInput | Prisma.tbl_fornecedorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for tbl_fornecedors.
     */
    cursor?: Prisma.tbl_fornecedorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tbl_fornecedors from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tbl_fornecedors.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of tbl_fornecedors.
     */
    distinct?: Prisma.Tbl_fornecedorScalarFieldEnum | Prisma.Tbl_fornecedorScalarFieldEnum[];
};
/**
 * tbl_fornecedor findFirstOrThrow
 */
export type tbl_fornecedorFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_fornecedor
     */
    select?: Prisma.tbl_fornecedorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the tbl_fornecedor
     */
    omit?: Prisma.tbl_fornecedorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.tbl_fornecedorInclude<ExtArgs> | null;
    /**
     * Filter, which tbl_fornecedor to fetch.
     */
    where?: Prisma.tbl_fornecedorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tbl_fornecedors to fetch.
     */
    orderBy?: Prisma.tbl_fornecedorOrderByWithRelationInput | Prisma.tbl_fornecedorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for tbl_fornecedors.
     */
    cursor?: Prisma.tbl_fornecedorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tbl_fornecedors from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tbl_fornecedors.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of tbl_fornecedors.
     */
    distinct?: Prisma.Tbl_fornecedorScalarFieldEnum | Prisma.Tbl_fornecedorScalarFieldEnum[];
};
/**
 * tbl_fornecedor findMany
 */
export type tbl_fornecedorFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_fornecedor
     */
    select?: Prisma.tbl_fornecedorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the tbl_fornecedor
     */
    omit?: Prisma.tbl_fornecedorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.tbl_fornecedorInclude<ExtArgs> | null;
    /**
     * Filter, which tbl_fornecedors to fetch.
     */
    where?: Prisma.tbl_fornecedorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tbl_fornecedors to fetch.
     */
    orderBy?: Prisma.tbl_fornecedorOrderByWithRelationInput | Prisma.tbl_fornecedorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing tbl_fornecedors.
     */
    cursor?: Prisma.tbl_fornecedorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tbl_fornecedors from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tbl_fornecedors.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of tbl_fornecedors.
     */
    distinct?: Prisma.Tbl_fornecedorScalarFieldEnum | Prisma.Tbl_fornecedorScalarFieldEnum[];
};
/**
 * tbl_fornecedor create
 */
export type tbl_fornecedorCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_fornecedor
     */
    select?: Prisma.tbl_fornecedorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the tbl_fornecedor
     */
    omit?: Prisma.tbl_fornecedorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.tbl_fornecedorInclude<ExtArgs> | null;
    /**
     * The data needed to create a tbl_fornecedor.
     */
    data: Prisma.XOR<Prisma.tbl_fornecedorCreateInput, Prisma.tbl_fornecedorUncheckedCreateInput>;
};
/**
 * tbl_fornecedor createMany
 */
export type tbl_fornecedorCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many tbl_fornecedors.
     */
    data: Prisma.tbl_fornecedorCreateManyInput | Prisma.tbl_fornecedorCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * tbl_fornecedor createManyAndReturn
 */
export type tbl_fornecedorCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_fornecedor
     */
    select?: Prisma.tbl_fornecedorSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the tbl_fornecedor
     */
    omit?: Prisma.tbl_fornecedorOmit<ExtArgs> | null;
    /**
     * The data used to create many tbl_fornecedors.
     */
    data: Prisma.tbl_fornecedorCreateManyInput | Prisma.tbl_fornecedorCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * tbl_fornecedor update
 */
export type tbl_fornecedorUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_fornecedor
     */
    select?: Prisma.tbl_fornecedorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the tbl_fornecedor
     */
    omit?: Prisma.tbl_fornecedorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.tbl_fornecedorInclude<ExtArgs> | null;
    /**
     * The data needed to update a tbl_fornecedor.
     */
    data: Prisma.XOR<Prisma.tbl_fornecedorUpdateInput, Prisma.tbl_fornecedorUncheckedUpdateInput>;
    /**
     * Choose, which tbl_fornecedor to update.
     */
    where: Prisma.tbl_fornecedorWhereUniqueInput;
};
/**
 * tbl_fornecedor updateMany
 */
export type tbl_fornecedorUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update tbl_fornecedors.
     */
    data: Prisma.XOR<Prisma.tbl_fornecedorUpdateManyMutationInput, Prisma.tbl_fornecedorUncheckedUpdateManyInput>;
    /**
     * Filter which tbl_fornecedors to update
     */
    where?: Prisma.tbl_fornecedorWhereInput;
    /**
     * Limit how many tbl_fornecedors to update.
     */
    limit?: number;
};
/**
 * tbl_fornecedor updateManyAndReturn
 */
export type tbl_fornecedorUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_fornecedor
     */
    select?: Prisma.tbl_fornecedorSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the tbl_fornecedor
     */
    omit?: Prisma.tbl_fornecedorOmit<ExtArgs> | null;
    /**
     * The data used to update tbl_fornecedors.
     */
    data: Prisma.XOR<Prisma.tbl_fornecedorUpdateManyMutationInput, Prisma.tbl_fornecedorUncheckedUpdateManyInput>;
    /**
     * Filter which tbl_fornecedors to update
     */
    where?: Prisma.tbl_fornecedorWhereInput;
    /**
     * Limit how many tbl_fornecedors to update.
     */
    limit?: number;
};
/**
 * tbl_fornecedor upsert
 */
export type tbl_fornecedorUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_fornecedor
     */
    select?: Prisma.tbl_fornecedorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the tbl_fornecedor
     */
    omit?: Prisma.tbl_fornecedorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.tbl_fornecedorInclude<ExtArgs> | null;
    /**
     * The filter to search for the tbl_fornecedor to update in case it exists.
     */
    where: Prisma.tbl_fornecedorWhereUniqueInput;
    /**
     * In case the tbl_fornecedor found by the `where` argument doesn't exist, create a new tbl_fornecedor with this data.
     */
    create: Prisma.XOR<Prisma.tbl_fornecedorCreateInput, Prisma.tbl_fornecedorUncheckedCreateInput>;
    /**
     * In case the tbl_fornecedor was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.tbl_fornecedorUpdateInput, Prisma.tbl_fornecedorUncheckedUpdateInput>;
};
/**
 * tbl_fornecedor delete
 */
export type tbl_fornecedorDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_fornecedor
     */
    select?: Prisma.tbl_fornecedorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the tbl_fornecedor
     */
    omit?: Prisma.tbl_fornecedorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.tbl_fornecedorInclude<ExtArgs> | null;
    /**
     * Filter which tbl_fornecedor to delete.
     */
    where: Prisma.tbl_fornecedorWhereUniqueInput;
};
/**
 * tbl_fornecedor deleteMany
 */
export type tbl_fornecedorDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_fornecedors to delete
     */
    where?: Prisma.tbl_fornecedorWhereInput;
    /**
     * Limit how many tbl_fornecedors to delete.
     */
    limit?: number;
};
/**
 * tbl_fornecedor.rel_fornecedor_ingrediente
 */
export type tbl_fornecedor$rel_fornecedor_ingredienteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * tbl_fornecedor.rel_fornecedor_produto
 */
export type tbl_fornecedor$rel_fornecedor_produtoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * tbl_fornecedor without action
 */
export type tbl_fornecedorDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_fornecedor
     */
    select?: Prisma.tbl_fornecedorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the tbl_fornecedor
     */
    omit?: Prisma.tbl_fornecedorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.tbl_fornecedorInclude<ExtArgs> | null;
};
//# sourceMappingURL=tbl_fornecedor.d.ts.map