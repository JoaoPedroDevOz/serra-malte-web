import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.ts";
/**
 * Model tbl_pedido
 *
 */
export type tbl_pedidoModel = runtime.Types.Result.DefaultSelection<Prisma.$tbl_pedidoPayload>;
export type AggregateTbl_pedido = {
    _count: Tbl_pedidoCountAggregateOutputType | null;
    _avg: Tbl_pedidoAvgAggregateOutputType | null;
    _sum: Tbl_pedidoSumAggregateOutputType | null;
    _min: Tbl_pedidoMinAggregateOutputType | null;
    _max: Tbl_pedidoMaxAggregateOutputType | null;
};
export type Tbl_pedidoAvgAggregateOutputType = {
    pedido_id: number | null;
    status_pedido_id: number | null;
    cliente_id: number | null;
};
export type Tbl_pedidoSumAggregateOutputType = {
    pedido_id: number | null;
    status_pedido_id: number | null;
    cliente_id: number | null;
};
export type Tbl_pedidoMinAggregateOutputType = {
    pedido_id: number | null;
    status_pedido_id: number | null;
    cliente_id: number | null;
    data_hora_pedido: Date | null;
};
export type Tbl_pedidoMaxAggregateOutputType = {
    pedido_id: number | null;
    status_pedido_id: number | null;
    cliente_id: number | null;
    data_hora_pedido: Date | null;
};
export type Tbl_pedidoCountAggregateOutputType = {
    pedido_id: number;
    status_pedido_id: number;
    cliente_id: number;
    data_hora_pedido: number;
    _all: number;
};
export type Tbl_pedidoAvgAggregateInputType = {
    pedido_id?: true;
    status_pedido_id?: true;
    cliente_id?: true;
};
export type Tbl_pedidoSumAggregateInputType = {
    pedido_id?: true;
    status_pedido_id?: true;
    cliente_id?: true;
};
export type Tbl_pedidoMinAggregateInputType = {
    pedido_id?: true;
    status_pedido_id?: true;
    cliente_id?: true;
    data_hora_pedido?: true;
};
export type Tbl_pedidoMaxAggregateInputType = {
    pedido_id?: true;
    status_pedido_id?: true;
    cliente_id?: true;
    data_hora_pedido?: true;
};
export type Tbl_pedidoCountAggregateInputType = {
    pedido_id?: true;
    status_pedido_id?: true;
    cliente_id?: true;
    data_hora_pedido?: true;
    _all?: true;
};
export type Tbl_pedidoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_pedido to aggregate.
     */
    where?: Prisma.tbl_pedidoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tbl_pedidos to fetch.
     */
    orderBy?: Prisma.tbl_pedidoOrderByWithRelationInput | Prisma.tbl_pedidoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.tbl_pedidoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tbl_pedidos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tbl_pedidos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned tbl_pedidos
    **/
    _count?: true | Tbl_pedidoCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: Tbl_pedidoAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: Tbl_pedidoSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: Tbl_pedidoMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: Tbl_pedidoMaxAggregateInputType;
};
export type GetTbl_pedidoAggregateType<T extends Tbl_pedidoAggregateArgs> = {
    [P in keyof T & keyof AggregateTbl_pedido]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTbl_pedido[P]> : Prisma.GetScalarType<T[P], AggregateTbl_pedido[P]>;
};
export type tbl_pedidoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.tbl_pedidoWhereInput;
    orderBy?: Prisma.tbl_pedidoOrderByWithAggregationInput | Prisma.tbl_pedidoOrderByWithAggregationInput[];
    by: Prisma.Tbl_pedidoScalarFieldEnum[] | Prisma.Tbl_pedidoScalarFieldEnum;
    having?: Prisma.tbl_pedidoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Tbl_pedidoCountAggregateInputType | true;
    _avg?: Tbl_pedidoAvgAggregateInputType;
    _sum?: Tbl_pedidoSumAggregateInputType;
    _min?: Tbl_pedidoMinAggregateInputType;
    _max?: Tbl_pedidoMaxAggregateInputType;
};
export type Tbl_pedidoGroupByOutputType = {
    pedido_id: number;
    status_pedido_id: number;
    cliente_id: number;
    data_hora_pedido: Date;
    _count: Tbl_pedidoCountAggregateOutputType | null;
    _avg: Tbl_pedidoAvgAggregateOutputType | null;
    _sum: Tbl_pedidoSumAggregateOutputType | null;
    _min: Tbl_pedidoMinAggregateOutputType | null;
    _max: Tbl_pedidoMaxAggregateOutputType | null;
};
export type GetTbl_pedidoGroupByPayload<T extends tbl_pedidoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Tbl_pedidoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Tbl_pedidoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Tbl_pedidoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Tbl_pedidoGroupByOutputType[P]>;
}>>;
export type tbl_pedidoWhereInput = {
    AND?: Prisma.tbl_pedidoWhereInput | Prisma.tbl_pedidoWhereInput[];
    OR?: Prisma.tbl_pedidoWhereInput[];
    NOT?: Prisma.tbl_pedidoWhereInput | Prisma.tbl_pedidoWhereInput[];
    pedido_id?: Prisma.IntFilter<"tbl_pedido"> | number;
    status_pedido_id?: Prisma.IntFilter<"tbl_pedido"> | number;
    cliente_id?: Prisma.IntFilter<"tbl_pedido"> | number;
    data_hora_pedido?: Prisma.DateTimeFilter<"tbl_pedido"> | Date | string;
    rel_pedido_produto?: Prisma.Rel_pedido_produtoListRelationFilter;
    tbl_cliente?: Prisma.XOR<Prisma.Tbl_clienteScalarRelationFilter, Prisma.tbl_clienteWhereInput>;
    tbl_status_pedido?: Prisma.XOR<Prisma.Tbl_status_pedidoScalarRelationFilter, Prisma.tbl_status_pedidoWhereInput>;
};
export type tbl_pedidoOrderByWithRelationInput = {
    pedido_id?: Prisma.SortOrder;
    status_pedido_id?: Prisma.SortOrder;
    cliente_id?: Prisma.SortOrder;
    data_hora_pedido?: Prisma.SortOrder;
    rel_pedido_produto?: Prisma.rel_pedido_produtoOrderByRelationAggregateInput;
    tbl_cliente?: Prisma.tbl_clienteOrderByWithRelationInput;
    tbl_status_pedido?: Prisma.tbl_status_pedidoOrderByWithRelationInput;
};
export type tbl_pedidoWhereUniqueInput = Prisma.AtLeast<{
    pedido_id?: number;
    AND?: Prisma.tbl_pedidoWhereInput | Prisma.tbl_pedidoWhereInput[];
    OR?: Prisma.tbl_pedidoWhereInput[];
    NOT?: Prisma.tbl_pedidoWhereInput | Prisma.tbl_pedidoWhereInput[];
    status_pedido_id?: Prisma.IntFilter<"tbl_pedido"> | number;
    cliente_id?: Prisma.IntFilter<"tbl_pedido"> | number;
    data_hora_pedido?: Prisma.DateTimeFilter<"tbl_pedido"> | Date | string;
    rel_pedido_produto?: Prisma.Rel_pedido_produtoListRelationFilter;
    tbl_cliente?: Prisma.XOR<Prisma.Tbl_clienteScalarRelationFilter, Prisma.tbl_clienteWhereInput>;
    tbl_status_pedido?: Prisma.XOR<Prisma.Tbl_status_pedidoScalarRelationFilter, Prisma.tbl_status_pedidoWhereInput>;
}, "pedido_id">;
export type tbl_pedidoOrderByWithAggregationInput = {
    pedido_id?: Prisma.SortOrder;
    status_pedido_id?: Prisma.SortOrder;
    cliente_id?: Prisma.SortOrder;
    data_hora_pedido?: Prisma.SortOrder;
    _count?: Prisma.tbl_pedidoCountOrderByAggregateInput;
    _avg?: Prisma.tbl_pedidoAvgOrderByAggregateInput;
    _max?: Prisma.tbl_pedidoMaxOrderByAggregateInput;
    _min?: Prisma.tbl_pedidoMinOrderByAggregateInput;
    _sum?: Prisma.tbl_pedidoSumOrderByAggregateInput;
};
export type tbl_pedidoScalarWhereWithAggregatesInput = {
    AND?: Prisma.tbl_pedidoScalarWhereWithAggregatesInput | Prisma.tbl_pedidoScalarWhereWithAggregatesInput[];
    OR?: Prisma.tbl_pedidoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.tbl_pedidoScalarWhereWithAggregatesInput | Prisma.tbl_pedidoScalarWhereWithAggregatesInput[];
    pedido_id?: Prisma.IntWithAggregatesFilter<"tbl_pedido"> | number;
    status_pedido_id?: Prisma.IntWithAggregatesFilter<"tbl_pedido"> | number;
    cliente_id?: Prisma.IntWithAggregatesFilter<"tbl_pedido"> | number;
    data_hora_pedido?: Prisma.DateTimeWithAggregatesFilter<"tbl_pedido"> | Date | string;
};
export type tbl_pedidoCreateInput = {
    data_hora_pedido: Date | string;
    rel_pedido_produto?: Prisma.rel_pedido_produtoCreateNestedManyWithoutTbl_pedidoInput;
    tbl_cliente?: Prisma.tbl_clienteCreateNestedOneWithoutTbl_pedidoInput;
    tbl_status_pedido: Prisma.tbl_status_pedidoCreateNestedOneWithoutTbl_pedidoInput;
};
export type tbl_pedidoUncheckedCreateInput = {
    pedido_id?: number;
    status_pedido_id: number;
    cliente_id?: number;
    data_hora_pedido: Date | string;
    rel_pedido_produto?: Prisma.rel_pedido_produtoUncheckedCreateNestedManyWithoutTbl_pedidoInput;
};
export type tbl_pedidoUpdateInput = {
    data_hora_pedido?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rel_pedido_produto?: Prisma.rel_pedido_produtoUpdateManyWithoutTbl_pedidoNestedInput;
    tbl_cliente?: Prisma.tbl_clienteUpdateOneRequiredWithoutTbl_pedidoNestedInput;
    tbl_status_pedido?: Prisma.tbl_status_pedidoUpdateOneRequiredWithoutTbl_pedidoNestedInput;
};
export type tbl_pedidoUncheckedUpdateInput = {
    pedido_id?: Prisma.IntFieldUpdateOperationsInput | number;
    status_pedido_id?: Prisma.IntFieldUpdateOperationsInput | number;
    cliente_id?: Prisma.IntFieldUpdateOperationsInput | number;
    data_hora_pedido?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rel_pedido_produto?: Prisma.rel_pedido_produtoUncheckedUpdateManyWithoutTbl_pedidoNestedInput;
};
export type tbl_pedidoCreateManyInput = {
    pedido_id?: number;
    status_pedido_id: number;
    cliente_id?: number;
    data_hora_pedido: Date | string;
};
export type tbl_pedidoUpdateManyMutationInput = {
    data_hora_pedido?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type tbl_pedidoUncheckedUpdateManyInput = {
    pedido_id?: Prisma.IntFieldUpdateOperationsInput | number;
    status_pedido_id?: Prisma.IntFieldUpdateOperationsInput | number;
    cliente_id?: Prisma.IntFieldUpdateOperationsInput | number;
    data_hora_pedido?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Tbl_pedidoScalarRelationFilter = {
    is?: Prisma.tbl_pedidoWhereInput;
    isNot?: Prisma.tbl_pedidoWhereInput;
};
export type Tbl_pedidoListRelationFilter = {
    every?: Prisma.tbl_pedidoWhereInput;
    some?: Prisma.tbl_pedidoWhereInput;
    none?: Prisma.tbl_pedidoWhereInput;
};
export type tbl_pedidoOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type tbl_pedidoCountOrderByAggregateInput = {
    pedido_id?: Prisma.SortOrder;
    status_pedido_id?: Prisma.SortOrder;
    cliente_id?: Prisma.SortOrder;
    data_hora_pedido?: Prisma.SortOrder;
};
export type tbl_pedidoAvgOrderByAggregateInput = {
    pedido_id?: Prisma.SortOrder;
    status_pedido_id?: Prisma.SortOrder;
    cliente_id?: Prisma.SortOrder;
};
export type tbl_pedidoMaxOrderByAggregateInput = {
    pedido_id?: Prisma.SortOrder;
    status_pedido_id?: Prisma.SortOrder;
    cliente_id?: Prisma.SortOrder;
    data_hora_pedido?: Prisma.SortOrder;
};
export type tbl_pedidoMinOrderByAggregateInput = {
    pedido_id?: Prisma.SortOrder;
    status_pedido_id?: Prisma.SortOrder;
    cliente_id?: Prisma.SortOrder;
    data_hora_pedido?: Prisma.SortOrder;
};
export type tbl_pedidoSumOrderByAggregateInput = {
    pedido_id?: Prisma.SortOrder;
    status_pedido_id?: Prisma.SortOrder;
    cliente_id?: Prisma.SortOrder;
};
export type tbl_pedidoCreateNestedOneWithoutRel_pedido_produtoInput = {
    create?: Prisma.XOR<Prisma.tbl_pedidoCreateWithoutRel_pedido_produtoInput, Prisma.tbl_pedidoUncheckedCreateWithoutRel_pedido_produtoInput>;
    connectOrCreate?: Prisma.tbl_pedidoCreateOrConnectWithoutRel_pedido_produtoInput;
    connect?: Prisma.tbl_pedidoWhereUniqueInput;
};
export type tbl_pedidoUpdateOneRequiredWithoutRel_pedido_produtoNestedInput = {
    create?: Prisma.XOR<Prisma.tbl_pedidoCreateWithoutRel_pedido_produtoInput, Prisma.tbl_pedidoUncheckedCreateWithoutRel_pedido_produtoInput>;
    connectOrCreate?: Prisma.tbl_pedidoCreateOrConnectWithoutRel_pedido_produtoInput;
    upsert?: Prisma.tbl_pedidoUpsertWithoutRel_pedido_produtoInput;
    connect?: Prisma.tbl_pedidoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.tbl_pedidoUpdateToOneWithWhereWithoutRel_pedido_produtoInput, Prisma.tbl_pedidoUpdateWithoutRel_pedido_produtoInput>, Prisma.tbl_pedidoUncheckedUpdateWithoutRel_pedido_produtoInput>;
};
export type tbl_pedidoCreateNestedManyWithoutTbl_clienteInput = {
    create?: Prisma.XOR<Prisma.tbl_pedidoCreateWithoutTbl_clienteInput, Prisma.tbl_pedidoUncheckedCreateWithoutTbl_clienteInput> | Prisma.tbl_pedidoCreateWithoutTbl_clienteInput[] | Prisma.tbl_pedidoUncheckedCreateWithoutTbl_clienteInput[];
    connectOrCreate?: Prisma.tbl_pedidoCreateOrConnectWithoutTbl_clienteInput | Prisma.tbl_pedidoCreateOrConnectWithoutTbl_clienteInput[];
    createMany?: Prisma.tbl_pedidoCreateManyTbl_clienteInputEnvelope;
    connect?: Prisma.tbl_pedidoWhereUniqueInput | Prisma.tbl_pedidoWhereUniqueInput[];
};
export type tbl_pedidoUncheckedCreateNestedManyWithoutTbl_clienteInput = {
    create?: Prisma.XOR<Prisma.tbl_pedidoCreateWithoutTbl_clienteInput, Prisma.tbl_pedidoUncheckedCreateWithoutTbl_clienteInput> | Prisma.tbl_pedidoCreateWithoutTbl_clienteInput[] | Prisma.tbl_pedidoUncheckedCreateWithoutTbl_clienteInput[];
    connectOrCreate?: Prisma.tbl_pedidoCreateOrConnectWithoutTbl_clienteInput | Prisma.tbl_pedidoCreateOrConnectWithoutTbl_clienteInput[];
    createMany?: Prisma.tbl_pedidoCreateManyTbl_clienteInputEnvelope;
    connect?: Prisma.tbl_pedidoWhereUniqueInput | Prisma.tbl_pedidoWhereUniqueInput[];
};
export type tbl_pedidoUpdateManyWithoutTbl_clienteNestedInput = {
    create?: Prisma.XOR<Prisma.tbl_pedidoCreateWithoutTbl_clienteInput, Prisma.tbl_pedidoUncheckedCreateWithoutTbl_clienteInput> | Prisma.tbl_pedidoCreateWithoutTbl_clienteInput[] | Prisma.tbl_pedidoUncheckedCreateWithoutTbl_clienteInput[];
    connectOrCreate?: Prisma.tbl_pedidoCreateOrConnectWithoutTbl_clienteInput | Prisma.tbl_pedidoCreateOrConnectWithoutTbl_clienteInput[];
    upsert?: Prisma.tbl_pedidoUpsertWithWhereUniqueWithoutTbl_clienteInput | Prisma.tbl_pedidoUpsertWithWhereUniqueWithoutTbl_clienteInput[];
    createMany?: Prisma.tbl_pedidoCreateManyTbl_clienteInputEnvelope;
    set?: Prisma.tbl_pedidoWhereUniqueInput | Prisma.tbl_pedidoWhereUniqueInput[];
    disconnect?: Prisma.tbl_pedidoWhereUniqueInput | Prisma.tbl_pedidoWhereUniqueInput[];
    delete?: Prisma.tbl_pedidoWhereUniqueInput | Prisma.tbl_pedidoWhereUniqueInput[];
    connect?: Prisma.tbl_pedidoWhereUniqueInput | Prisma.tbl_pedidoWhereUniqueInput[];
    update?: Prisma.tbl_pedidoUpdateWithWhereUniqueWithoutTbl_clienteInput | Prisma.tbl_pedidoUpdateWithWhereUniqueWithoutTbl_clienteInput[];
    updateMany?: Prisma.tbl_pedidoUpdateManyWithWhereWithoutTbl_clienteInput | Prisma.tbl_pedidoUpdateManyWithWhereWithoutTbl_clienteInput[];
    deleteMany?: Prisma.tbl_pedidoScalarWhereInput | Prisma.tbl_pedidoScalarWhereInput[];
};
export type tbl_pedidoUncheckedUpdateManyWithoutTbl_clienteNestedInput = {
    create?: Prisma.XOR<Prisma.tbl_pedidoCreateWithoutTbl_clienteInput, Prisma.tbl_pedidoUncheckedCreateWithoutTbl_clienteInput> | Prisma.tbl_pedidoCreateWithoutTbl_clienteInput[] | Prisma.tbl_pedidoUncheckedCreateWithoutTbl_clienteInput[];
    connectOrCreate?: Prisma.tbl_pedidoCreateOrConnectWithoutTbl_clienteInput | Prisma.tbl_pedidoCreateOrConnectWithoutTbl_clienteInput[];
    upsert?: Prisma.tbl_pedidoUpsertWithWhereUniqueWithoutTbl_clienteInput | Prisma.tbl_pedidoUpsertWithWhereUniqueWithoutTbl_clienteInput[];
    createMany?: Prisma.tbl_pedidoCreateManyTbl_clienteInputEnvelope;
    set?: Prisma.tbl_pedidoWhereUniqueInput | Prisma.tbl_pedidoWhereUniqueInput[];
    disconnect?: Prisma.tbl_pedidoWhereUniqueInput | Prisma.tbl_pedidoWhereUniqueInput[];
    delete?: Prisma.tbl_pedidoWhereUniqueInput | Prisma.tbl_pedidoWhereUniqueInput[];
    connect?: Prisma.tbl_pedidoWhereUniqueInput | Prisma.tbl_pedidoWhereUniqueInput[];
    update?: Prisma.tbl_pedidoUpdateWithWhereUniqueWithoutTbl_clienteInput | Prisma.tbl_pedidoUpdateWithWhereUniqueWithoutTbl_clienteInput[];
    updateMany?: Prisma.tbl_pedidoUpdateManyWithWhereWithoutTbl_clienteInput | Prisma.tbl_pedidoUpdateManyWithWhereWithoutTbl_clienteInput[];
    deleteMany?: Prisma.tbl_pedidoScalarWhereInput | Prisma.tbl_pedidoScalarWhereInput[];
};
export type tbl_pedidoCreateNestedManyWithoutTbl_status_pedidoInput = {
    create?: Prisma.XOR<Prisma.tbl_pedidoCreateWithoutTbl_status_pedidoInput, Prisma.tbl_pedidoUncheckedCreateWithoutTbl_status_pedidoInput> | Prisma.tbl_pedidoCreateWithoutTbl_status_pedidoInput[] | Prisma.tbl_pedidoUncheckedCreateWithoutTbl_status_pedidoInput[];
    connectOrCreate?: Prisma.tbl_pedidoCreateOrConnectWithoutTbl_status_pedidoInput | Prisma.tbl_pedidoCreateOrConnectWithoutTbl_status_pedidoInput[];
    createMany?: Prisma.tbl_pedidoCreateManyTbl_status_pedidoInputEnvelope;
    connect?: Prisma.tbl_pedidoWhereUniqueInput | Prisma.tbl_pedidoWhereUniqueInput[];
};
export type tbl_pedidoUncheckedCreateNestedManyWithoutTbl_status_pedidoInput = {
    create?: Prisma.XOR<Prisma.tbl_pedidoCreateWithoutTbl_status_pedidoInput, Prisma.tbl_pedidoUncheckedCreateWithoutTbl_status_pedidoInput> | Prisma.tbl_pedidoCreateWithoutTbl_status_pedidoInput[] | Prisma.tbl_pedidoUncheckedCreateWithoutTbl_status_pedidoInput[];
    connectOrCreate?: Prisma.tbl_pedidoCreateOrConnectWithoutTbl_status_pedidoInput | Prisma.tbl_pedidoCreateOrConnectWithoutTbl_status_pedidoInput[];
    createMany?: Prisma.tbl_pedidoCreateManyTbl_status_pedidoInputEnvelope;
    connect?: Prisma.tbl_pedidoWhereUniqueInput | Prisma.tbl_pedidoWhereUniqueInput[];
};
export type tbl_pedidoUpdateManyWithoutTbl_status_pedidoNestedInput = {
    create?: Prisma.XOR<Prisma.tbl_pedidoCreateWithoutTbl_status_pedidoInput, Prisma.tbl_pedidoUncheckedCreateWithoutTbl_status_pedidoInput> | Prisma.tbl_pedidoCreateWithoutTbl_status_pedidoInput[] | Prisma.tbl_pedidoUncheckedCreateWithoutTbl_status_pedidoInput[];
    connectOrCreate?: Prisma.tbl_pedidoCreateOrConnectWithoutTbl_status_pedidoInput | Prisma.tbl_pedidoCreateOrConnectWithoutTbl_status_pedidoInput[];
    upsert?: Prisma.tbl_pedidoUpsertWithWhereUniqueWithoutTbl_status_pedidoInput | Prisma.tbl_pedidoUpsertWithWhereUniqueWithoutTbl_status_pedidoInput[];
    createMany?: Prisma.tbl_pedidoCreateManyTbl_status_pedidoInputEnvelope;
    set?: Prisma.tbl_pedidoWhereUniqueInput | Prisma.tbl_pedidoWhereUniqueInput[];
    disconnect?: Prisma.tbl_pedidoWhereUniqueInput | Prisma.tbl_pedidoWhereUniqueInput[];
    delete?: Prisma.tbl_pedidoWhereUniqueInput | Prisma.tbl_pedidoWhereUniqueInput[];
    connect?: Prisma.tbl_pedidoWhereUniqueInput | Prisma.tbl_pedidoWhereUniqueInput[];
    update?: Prisma.tbl_pedidoUpdateWithWhereUniqueWithoutTbl_status_pedidoInput | Prisma.tbl_pedidoUpdateWithWhereUniqueWithoutTbl_status_pedidoInput[];
    updateMany?: Prisma.tbl_pedidoUpdateManyWithWhereWithoutTbl_status_pedidoInput | Prisma.tbl_pedidoUpdateManyWithWhereWithoutTbl_status_pedidoInput[];
    deleteMany?: Prisma.tbl_pedidoScalarWhereInput | Prisma.tbl_pedidoScalarWhereInput[];
};
export type tbl_pedidoUncheckedUpdateManyWithoutTbl_status_pedidoNestedInput = {
    create?: Prisma.XOR<Prisma.tbl_pedidoCreateWithoutTbl_status_pedidoInput, Prisma.tbl_pedidoUncheckedCreateWithoutTbl_status_pedidoInput> | Prisma.tbl_pedidoCreateWithoutTbl_status_pedidoInput[] | Prisma.tbl_pedidoUncheckedCreateWithoutTbl_status_pedidoInput[];
    connectOrCreate?: Prisma.tbl_pedidoCreateOrConnectWithoutTbl_status_pedidoInput | Prisma.tbl_pedidoCreateOrConnectWithoutTbl_status_pedidoInput[];
    upsert?: Prisma.tbl_pedidoUpsertWithWhereUniqueWithoutTbl_status_pedidoInput | Prisma.tbl_pedidoUpsertWithWhereUniqueWithoutTbl_status_pedidoInput[];
    createMany?: Prisma.tbl_pedidoCreateManyTbl_status_pedidoInputEnvelope;
    set?: Prisma.tbl_pedidoWhereUniqueInput | Prisma.tbl_pedidoWhereUniqueInput[];
    disconnect?: Prisma.tbl_pedidoWhereUniqueInput | Prisma.tbl_pedidoWhereUniqueInput[];
    delete?: Prisma.tbl_pedidoWhereUniqueInput | Prisma.tbl_pedidoWhereUniqueInput[];
    connect?: Prisma.tbl_pedidoWhereUniqueInput | Prisma.tbl_pedidoWhereUniqueInput[];
    update?: Prisma.tbl_pedidoUpdateWithWhereUniqueWithoutTbl_status_pedidoInput | Prisma.tbl_pedidoUpdateWithWhereUniqueWithoutTbl_status_pedidoInput[];
    updateMany?: Prisma.tbl_pedidoUpdateManyWithWhereWithoutTbl_status_pedidoInput | Prisma.tbl_pedidoUpdateManyWithWhereWithoutTbl_status_pedidoInput[];
    deleteMany?: Prisma.tbl_pedidoScalarWhereInput | Prisma.tbl_pedidoScalarWhereInput[];
};
export type tbl_pedidoCreateWithoutRel_pedido_produtoInput = {
    data_hora_pedido: Date | string;
    tbl_cliente?: Prisma.tbl_clienteCreateNestedOneWithoutTbl_pedidoInput;
    tbl_status_pedido: Prisma.tbl_status_pedidoCreateNestedOneWithoutTbl_pedidoInput;
};
export type tbl_pedidoUncheckedCreateWithoutRel_pedido_produtoInput = {
    pedido_id?: number;
    status_pedido_id: number;
    cliente_id?: number;
    data_hora_pedido: Date | string;
};
export type tbl_pedidoCreateOrConnectWithoutRel_pedido_produtoInput = {
    where: Prisma.tbl_pedidoWhereUniqueInput;
    create: Prisma.XOR<Prisma.tbl_pedidoCreateWithoutRel_pedido_produtoInput, Prisma.tbl_pedidoUncheckedCreateWithoutRel_pedido_produtoInput>;
};
export type tbl_pedidoUpsertWithoutRel_pedido_produtoInput = {
    update: Prisma.XOR<Prisma.tbl_pedidoUpdateWithoutRel_pedido_produtoInput, Prisma.tbl_pedidoUncheckedUpdateWithoutRel_pedido_produtoInput>;
    create: Prisma.XOR<Prisma.tbl_pedidoCreateWithoutRel_pedido_produtoInput, Prisma.tbl_pedidoUncheckedCreateWithoutRel_pedido_produtoInput>;
    where?: Prisma.tbl_pedidoWhereInput;
};
export type tbl_pedidoUpdateToOneWithWhereWithoutRel_pedido_produtoInput = {
    where?: Prisma.tbl_pedidoWhereInput;
    data: Prisma.XOR<Prisma.tbl_pedidoUpdateWithoutRel_pedido_produtoInput, Prisma.tbl_pedidoUncheckedUpdateWithoutRel_pedido_produtoInput>;
};
export type tbl_pedidoUpdateWithoutRel_pedido_produtoInput = {
    data_hora_pedido?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tbl_cliente?: Prisma.tbl_clienteUpdateOneRequiredWithoutTbl_pedidoNestedInput;
    tbl_status_pedido?: Prisma.tbl_status_pedidoUpdateOneRequiredWithoutTbl_pedidoNestedInput;
};
export type tbl_pedidoUncheckedUpdateWithoutRel_pedido_produtoInput = {
    pedido_id?: Prisma.IntFieldUpdateOperationsInput | number;
    status_pedido_id?: Prisma.IntFieldUpdateOperationsInput | number;
    cliente_id?: Prisma.IntFieldUpdateOperationsInput | number;
    data_hora_pedido?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type tbl_pedidoCreateWithoutTbl_clienteInput = {
    data_hora_pedido: Date | string;
    rel_pedido_produto?: Prisma.rel_pedido_produtoCreateNestedManyWithoutTbl_pedidoInput;
    tbl_status_pedido: Prisma.tbl_status_pedidoCreateNestedOneWithoutTbl_pedidoInput;
};
export type tbl_pedidoUncheckedCreateWithoutTbl_clienteInput = {
    pedido_id?: number;
    status_pedido_id: number;
    data_hora_pedido: Date | string;
    rel_pedido_produto?: Prisma.rel_pedido_produtoUncheckedCreateNestedManyWithoutTbl_pedidoInput;
};
export type tbl_pedidoCreateOrConnectWithoutTbl_clienteInput = {
    where: Prisma.tbl_pedidoWhereUniqueInput;
    create: Prisma.XOR<Prisma.tbl_pedidoCreateWithoutTbl_clienteInput, Prisma.tbl_pedidoUncheckedCreateWithoutTbl_clienteInput>;
};
export type tbl_pedidoCreateManyTbl_clienteInputEnvelope = {
    data: Prisma.tbl_pedidoCreateManyTbl_clienteInput | Prisma.tbl_pedidoCreateManyTbl_clienteInput[];
    skipDuplicates?: boolean;
};
export type tbl_pedidoUpsertWithWhereUniqueWithoutTbl_clienteInput = {
    where: Prisma.tbl_pedidoWhereUniqueInput;
    update: Prisma.XOR<Prisma.tbl_pedidoUpdateWithoutTbl_clienteInput, Prisma.tbl_pedidoUncheckedUpdateWithoutTbl_clienteInput>;
    create: Prisma.XOR<Prisma.tbl_pedidoCreateWithoutTbl_clienteInput, Prisma.tbl_pedidoUncheckedCreateWithoutTbl_clienteInput>;
};
export type tbl_pedidoUpdateWithWhereUniqueWithoutTbl_clienteInput = {
    where: Prisma.tbl_pedidoWhereUniqueInput;
    data: Prisma.XOR<Prisma.tbl_pedidoUpdateWithoutTbl_clienteInput, Prisma.tbl_pedidoUncheckedUpdateWithoutTbl_clienteInput>;
};
export type tbl_pedidoUpdateManyWithWhereWithoutTbl_clienteInput = {
    where: Prisma.tbl_pedidoScalarWhereInput;
    data: Prisma.XOR<Prisma.tbl_pedidoUpdateManyMutationInput, Prisma.tbl_pedidoUncheckedUpdateManyWithoutTbl_clienteInput>;
};
export type tbl_pedidoScalarWhereInput = {
    AND?: Prisma.tbl_pedidoScalarWhereInput | Prisma.tbl_pedidoScalarWhereInput[];
    OR?: Prisma.tbl_pedidoScalarWhereInput[];
    NOT?: Prisma.tbl_pedidoScalarWhereInput | Prisma.tbl_pedidoScalarWhereInput[];
    pedido_id?: Prisma.IntFilter<"tbl_pedido"> | number;
    status_pedido_id?: Prisma.IntFilter<"tbl_pedido"> | number;
    cliente_id?: Prisma.IntFilter<"tbl_pedido"> | number;
    data_hora_pedido?: Prisma.DateTimeFilter<"tbl_pedido"> | Date | string;
};
export type tbl_pedidoCreateWithoutTbl_status_pedidoInput = {
    data_hora_pedido: Date | string;
    rel_pedido_produto?: Prisma.rel_pedido_produtoCreateNestedManyWithoutTbl_pedidoInput;
    tbl_cliente?: Prisma.tbl_clienteCreateNestedOneWithoutTbl_pedidoInput;
};
export type tbl_pedidoUncheckedCreateWithoutTbl_status_pedidoInput = {
    pedido_id?: number;
    cliente_id?: number;
    data_hora_pedido: Date | string;
    rel_pedido_produto?: Prisma.rel_pedido_produtoUncheckedCreateNestedManyWithoutTbl_pedidoInput;
};
export type tbl_pedidoCreateOrConnectWithoutTbl_status_pedidoInput = {
    where: Prisma.tbl_pedidoWhereUniqueInput;
    create: Prisma.XOR<Prisma.tbl_pedidoCreateWithoutTbl_status_pedidoInput, Prisma.tbl_pedidoUncheckedCreateWithoutTbl_status_pedidoInput>;
};
export type tbl_pedidoCreateManyTbl_status_pedidoInputEnvelope = {
    data: Prisma.tbl_pedidoCreateManyTbl_status_pedidoInput | Prisma.tbl_pedidoCreateManyTbl_status_pedidoInput[];
    skipDuplicates?: boolean;
};
export type tbl_pedidoUpsertWithWhereUniqueWithoutTbl_status_pedidoInput = {
    where: Prisma.tbl_pedidoWhereUniqueInput;
    update: Prisma.XOR<Prisma.tbl_pedidoUpdateWithoutTbl_status_pedidoInput, Prisma.tbl_pedidoUncheckedUpdateWithoutTbl_status_pedidoInput>;
    create: Prisma.XOR<Prisma.tbl_pedidoCreateWithoutTbl_status_pedidoInput, Prisma.tbl_pedidoUncheckedCreateWithoutTbl_status_pedidoInput>;
};
export type tbl_pedidoUpdateWithWhereUniqueWithoutTbl_status_pedidoInput = {
    where: Prisma.tbl_pedidoWhereUniqueInput;
    data: Prisma.XOR<Prisma.tbl_pedidoUpdateWithoutTbl_status_pedidoInput, Prisma.tbl_pedidoUncheckedUpdateWithoutTbl_status_pedidoInput>;
};
export type tbl_pedidoUpdateManyWithWhereWithoutTbl_status_pedidoInput = {
    where: Prisma.tbl_pedidoScalarWhereInput;
    data: Prisma.XOR<Prisma.tbl_pedidoUpdateManyMutationInput, Prisma.tbl_pedidoUncheckedUpdateManyWithoutTbl_status_pedidoInput>;
};
export type tbl_pedidoCreateManyTbl_clienteInput = {
    pedido_id?: number;
    status_pedido_id: number;
    data_hora_pedido: Date | string;
};
export type tbl_pedidoUpdateWithoutTbl_clienteInput = {
    data_hora_pedido?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rel_pedido_produto?: Prisma.rel_pedido_produtoUpdateManyWithoutTbl_pedidoNestedInput;
    tbl_status_pedido?: Prisma.tbl_status_pedidoUpdateOneRequiredWithoutTbl_pedidoNestedInput;
};
export type tbl_pedidoUncheckedUpdateWithoutTbl_clienteInput = {
    pedido_id?: Prisma.IntFieldUpdateOperationsInput | number;
    status_pedido_id?: Prisma.IntFieldUpdateOperationsInput | number;
    data_hora_pedido?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rel_pedido_produto?: Prisma.rel_pedido_produtoUncheckedUpdateManyWithoutTbl_pedidoNestedInput;
};
export type tbl_pedidoUncheckedUpdateManyWithoutTbl_clienteInput = {
    pedido_id?: Prisma.IntFieldUpdateOperationsInput | number;
    status_pedido_id?: Prisma.IntFieldUpdateOperationsInput | number;
    data_hora_pedido?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type tbl_pedidoCreateManyTbl_status_pedidoInput = {
    pedido_id?: number;
    cliente_id?: number;
    data_hora_pedido: Date | string;
};
export type tbl_pedidoUpdateWithoutTbl_status_pedidoInput = {
    data_hora_pedido?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rel_pedido_produto?: Prisma.rel_pedido_produtoUpdateManyWithoutTbl_pedidoNestedInput;
    tbl_cliente?: Prisma.tbl_clienteUpdateOneRequiredWithoutTbl_pedidoNestedInput;
};
export type tbl_pedidoUncheckedUpdateWithoutTbl_status_pedidoInput = {
    pedido_id?: Prisma.IntFieldUpdateOperationsInput | number;
    cliente_id?: Prisma.IntFieldUpdateOperationsInput | number;
    data_hora_pedido?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rel_pedido_produto?: Prisma.rel_pedido_produtoUncheckedUpdateManyWithoutTbl_pedidoNestedInput;
};
export type tbl_pedidoUncheckedUpdateManyWithoutTbl_status_pedidoInput = {
    pedido_id?: Prisma.IntFieldUpdateOperationsInput | number;
    cliente_id?: Prisma.IntFieldUpdateOperationsInput | number;
    data_hora_pedido?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type Tbl_pedidoCountOutputType
 */
export type Tbl_pedidoCountOutputType = {
    rel_pedido_produto: number;
};
export type Tbl_pedidoCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rel_pedido_produto?: boolean | Tbl_pedidoCountOutputTypeCountRel_pedido_produtoArgs;
};
/**
 * Tbl_pedidoCountOutputType without action
 */
export type Tbl_pedidoCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tbl_pedidoCountOutputType
     */
    select?: Prisma.Tbl_pedidoCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * Tbl_pedidoCountOutputType without action
 */
export type Tbl_pedidoCountOutputTypeCountRel_pedido_produtoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.rel_pedido_produtoWhereInput;
};
export type tbl_pedidoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    pedido_id?: boolean;
    status_pedido_id?: boolean;
    cliente_id?: boolean;
    data_hora_pedido?: boolean;
    rel_pedido_produto?: boolean | Prisma.tbl_pedido$rel_pedido_produtoArgs<ExtArgs>;
    tbl_cliente?: boolean | Prisma.tbl_clienteDefaultArgs<ExtArgs>;
    tbl_status_pedido?: boolean | Prisma.tbl_status_pedidoDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.Tbl_pedidoCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["tbl_pedido"]>;
export type tbl_pedidoSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    pedido_id?: boolean;
    status_pedido_id?: boolean;
    cliente_id?: boolean;
    data_hora_pedido?: boolean;
    tbl_cliente?: boolean | Prisma.tbl_clienteDefaultArgs<ExtArgs>;
    tbl_status_pedido?: boolean | Prisma.tbl_status_pedidoDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["tbl_pedido"]>;
export type tbl_pedidoSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    pedido_id?: boolean;
    status_pedido_id?: boolean;
    cliente_id?: boolean;
    data_hora_pedido?: boolean;
    tbl_cliente?: boolean | Prisma.tbl_clienteDefaultArgs<ExtArgs>;
    tbl_status_pedido?: boolean | Prisma.tbl_status_pedidoDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["tbl_pedido"]>;
export type tbl_pedidoSelectScalar = {
    pedido_id?: boolean;
    status_pedido_id?: boolean;
    cliente_id?: boolean;
    data_hora_pedido?: boolean;
};
export type tbl_pedidoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"pedido_id" | "status_pedido_id" | "cliente_id" | "data_hora_pedido", ExtArgs["result"]["tbl_pedido"]>;
export type tbl_pedidoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rel_pedido_produto?: boolean | Prisma.tbl_pedido$rel_pedido_produtoArgs<ExtArgs>;
    tbl_cliente?: boolean | Prisma.tbl_clienteDefaultArgs<ExtArgs>;
    tbl_status_pedido?: boolean | Prisma.tbl_status_pedidoDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.Tbl_pedidoCountOutputTypeDefaultArgs<ExtArgs>;
};
export type tbl_pedidoIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tbl_cliente?: boolean | Prisma.tbl_clienteDefaultArgs<ExtArgs>;
    tbl_status_pedido?: boolean | Prisma.tbl_status_pedidoDefaultArgs<ExtArgs>;
};
export type tbl_pedidoIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tbl_cliente?: boolean | Prisma.tbl_clienteDefaultArgs<ExtArgs>;
    tbl_status_pedido?: boolean | Prisma.tbl_status_pedidoDefaultArgs<ExtArgs>;
};
export type $tbl_pedidoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "tbl_pedido";
    objects: {
        rel_pedido_produto: Prisma.$rel_pedido_produtoPayload<ExtArgs>[];
        tbl_cliente: Prisma.$tbl_clientePayload<ExtArgs>;
        tbl_status_pedido: Prisma.$tbl_status_pedidoPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        pedido_id: number;
        status_pedido_id: number;
        cliente_id: number;
        data_hora_pedido: Date;
    }, ExtArgs["result"]["tbl_pedido"]>;
    composites: {};
};
export type tbl_pedidoGetPayload<S extends boolean | null | undefined | tbl_pedidoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$tbl_pedidoPayload, S>;
export type tbl_pedidoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<tbl_pedidoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Tbl_pedidoCountAggregateInputType | true;
};
export interface tbl_pedidoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['tbl_pedido'];
        meta: {
            name: 'tbl_pedido';
        };
    };
    /**
     * Find zero or one Tbl_pedido that matches the filter.
     * @param {tbl_pedidoFindUniqueArgs} args - Arguments to find a Tbl_pedido
     * @example
     * // Get one Tbl_pedido
     * const tbl_pedido = await prisma.tbl_pedido.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tbl_pedidoFindUniqueArgs>(args: Prisma.SelectSubset<T, tbl_pedidoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__tbl_pedidoClient<runtime.Types.Result.GetResult<Prisma.$tbl_pedidoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Tbl_pedido that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tbl_pedidoFindUniqueOrThrowArgs} args - Arguments to find a Tbl_pedido
     * @example
     * // Get one Tbl_pedido
     * const tbl_pedido = await prisma.tbl_pedido.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tbl_pedidoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, tbl_pedidoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__tbl_pedidoClient<runtime.Types.Result.GetResult<Prisma.$tbl_pedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Tbl_pedido that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_pedidoFindFirstArgs} args - Arguments to find a Tbl_pedido
     * @example
     * // Get one Tbl_pedido
     * const tbl_pedido = await prisma.tbl_pedido.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tbl_pedidoFindFirstArgs>(args?: Prisma.SelectSubset<T, tbl_pedidoFindFirstArgs<ExtArgs>>): Prisma.Prisma__tbl_pedidoClient<runtime.Types.Result.GetResult<Prisma.$tbl_pedidoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Tbl_pedido that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_pedidoFindFirstOrThrowArgs} args - Arguments to find a Tbl_pedido
     * @example
     * // Get one Tbl_pedido
     * const tbl_pedido = await prisma.tbl_pedido.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tbl_pedidoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, tbl_pedidoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__tbl_pedidoClient<runtime.Types.Result.GetResult<Prisma.$tbl_pedidoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Tbl_pedidos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_pedidoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tbl_pedidos
     * const tbl_pedidos = await prisma.tbl_pedido.findMany()
     *
     * // Get first 10 Tbl_pedidos
     * const tbl_pedidos = await prisma.tbl_pedido.findMany({ take: 10 })
     *
     * // Only select the `pedido_id`
     * const tbl_pedidoWithPedido_idOnly = await prisma.tbl_pedido.findMany({ select: { pedido_id: true } })
     *
     */
    findMany<T extends tbl_pedidoFindManyArgs>(args?: Prisma.SelectSubset<T, tbl_pedidoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$tbl_pedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Tbl_pedido.
     * @param {tbl_pedidoCreateArgs} args - Arguments to create a Tbl_pedido.
     * @example
     * // Create one Tbl_pedido
     * const Tbl_pedido = await prisma.tbl_pedido.create({
     *   data: {
     *     // ... data to create a Tbl_pedido
     *   }
     * })
     *
     */
    create<T extends tbl_pedidoCreateArgs>(args: Prisma.SelectSubset<T, tbl_pedidoCreateArgs<ExtArgs>>): Prisma.Prisma__tbl_pedidoClient<runtime.Types.Result.GetResult<Prisma.$tbl_pedidoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Tbl_pedidos.
     * @param {tbl_pedidoCreateManyArgs} args - Arguments to create many Tbl_pedidos.
     * @example
     * // Create many Tbl_pedidos
     * const tbl_pedido = await prisma.tbl_pedido.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends tbl_pedidoCreateManyArgs>(args?: Prisma.SelectSubset<T, tbl_pedidoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Tbl_pedidos and returns the data saved in the database.
     * @param {tbl_pedidoCreateManyAndReturnArgs} args - Arguments to create many Tbl_pedidos.
     * @example
     * // Create many Tbl_pedidos
     * const tbl_pedido = await prisma.tbl_pedido.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Tbl_pedidos and only return the `pedido_id`
     * const tbl_pedidoWithPedido_idOnly = await prisma.tbl_pedido.createManyAndReturn({
     *   select: { pedido_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends tbl_pedidoCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, tbl_pedidoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$tbl_pedidoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Tbl_pedido.
     * @param {tbl_pedidoDeleteArgs} args - Arguments to delete one Tbl_pedido.
     * @example
     * // Delete one Tbl_pedido
     * const Tbl_pedido = await prisma.tbl_pedido.delete({
     *   where: {
     *     // ... filter to delete one Tbl_pedido
     *   }
     * })
     *
     */
    delete<T extends tbl_pedidoDeleteArgs>(args: Prisma.SelectSubset<T, tbl_pedidoDeleteArgs<ExtArgs>>): Prisma.Prisma__tbl_pedidoClient<runtime.Types.Result.GetResult<Prisma.$tbl_pedidoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Tbl_pedido.
     * @param {tbl_pedidoUpdateArgs} args - Arguments to update one Tbl_pedido.
     * @example
     * // Update one Tbl_pedido
     * const tbl_pedido = await prisma.tbl_pedido.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends tbl_pedidoUpdateArgs>(args: Prisma.SelectSubset<T, tbl_pedidoUpdateArgs<ExtArgs>>): Prisma.Prisma__tbl_pedidoClient<runtime.Types.Result.GetResult<Prisma.$tbl_pedidoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Tbl_pedidos.
     * @param {tbl_pedidoDeleteManyArgs} args - Arguments to filter Tbl_pedidos to delete.
     * @example
     * // Delete a few Tbl_pedidos
     * const { count } = await prisma.tbl_pedido.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends tbl_pedidoDeleteManyArgs>(args?: Prisma.SelectSubset<T, tbl_pedidoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Tbl_pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_pedidoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tbl_pedidos
     * const tbl_pedido = await prisma.tbl_pedido.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends tbl_pedidoUpdateManyArgs>(args: Prisma.SelectSubset<T, tbl_pedidoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Tbl_pedidos and returns the data updated in the database.
     * @param {tbl_pedidoUpdateManyAndReturnArgs} args - Arguments to update many Tbl_pedidos.
     * @example
     * // Update many Tbl_pedidos
     * const tbl_pedido = await prisma.tbl_pedido.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Tbl_pedidos and only return the `pedido_id`
     * const tbl_pedidoWithPedido_idOnly = await prisma.tbl_pedido.updateManyAndReturn({
     *   select: { pedido_id: true },
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
    updateManyAndReturn<T extends tbl_pedidoUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, tbl_pedidoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$tbl_pedidoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Tbl_pedido.
     * @param {tbl_pedidoUpsertArgs} args - Arguments to update or create a Tbl_pedido.
     * @example
     * // Update or create a Tbl_pedido
     * const tbl_pedido = await prisma.tbl_pedido.upsert({
     *   create: {
     *     // ... data to create a Tbl_pedido
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tbl_pedido we want to update
     *   }
     * })
     */
    upsert<T extends tbl_pedidoUpsertArgs>(args: Prisma.SelectSubset<T, tbl_pedidoUpsertArgs<ExtArgs>>): Prisma.Prisma__tbl_pedidoClient<runtime.Types.Result.GetResult<Prisma.$tbl_pedidoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Tbl_pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_pedidoCountArgs} args - Arguments to filter Tbl_pedidos to count.
     * @example
     * // Count the number of Tbl_pedidos
     * const count = await prisma.tbl_pedido.count({
     *   where: {
     *     // ... the filter for the Tbl_pedidos we want to count
     *   }
     * })
    **/
    count<T extends tbl_pedidoCountArgs>(args?: Prisma.Subset<T, tbl_pedidoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Tbl_pedidoCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Tbl_pedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tbl_pedidoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tbl_pedidoAggregateArgs>(args: Prisma.Subset<T, Tbl_pedidoAggregateArgs>): Prisma.PrismaPromise<GetTbl_pedidoAggregateType<T>>;
    /**
     * Group by Tbl_pedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_pedidoGroupByArgs} args - Group by arguments.
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
    groupBy<T extends tbl_pedidoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: tbl_pedidoGroupByArgs['orderBy'];
    } : {
        orderBy?: tbl_pedidoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, tbl_pedidoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTbl_pedidoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the tbl_pedido model
     */
    readonly fields: tbl_pedidoFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for tbl_pedido.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__tbl_pedidoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    rel_pedido_produto<T extends Prisma.tbl_pedido$rel_pedido_produtoArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.tbl_pedido$rel_pedido_produtoArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$rel_pedido_produtoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    tbl_cliente<T extends Prisma.tbl_clienteDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.tbl_clienteDefaultArgs<ExtArgs>>): Prisma.Prisma__tbl_clienteClient<runtime.Types.Result.GetResult<Prisma.$tbl_clientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    tbl_status_pedido<T extends Prisma.tbl_status_pedidoDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.tbl_status_pedidoDefaultArgs<ExtArgs>>): Prisma.Prisma__tbl_status_pedidoClient<runtime.Types.Result.GetResult<Prisma.$tbl_status_pedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the tbl_pedido model
 */
export interface tbl_pedidoFieldRefs {
    readonly pedido_id: Prisma.FieldRef<"tbl_pedido", 'Int'>;
    readonly status_pedido_id: Prisma.FieldRef<"tbl_pedido", 'Int'>;
    readonly cliente_id: Prisma.FieldRef<"tbl_pedido", 'Int'>;
    readonly data_hora_pedido: Prisma.FieldRef<"tbl_pedido", 'DateTime'>;
}
/**
 * tbl_pedido findUnique
 */
export type tbl_pedidoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which tbl_pedido to fetch.
     */
    where: Prisma.tbl_pedidoWhereUniqueInput;
};
/**
 * tbl_pedido findUniqueOrThrow
 */
export type tbl_pedidoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which tbl_pedido to fetch.
     */
    where: Prisma.tbl_pedidoWhereUniqueInput;
};
/**
 * tbl_pedido findFirst
 */
export type tbl_pedidoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which tbl_pedido to fetch.
     */
    where?: Prisma.tbl_pedidoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tbl_pedidos to fetch.
     */
    orderBy?: Prisma.tbl_pedidoOrderByWithRelationInput | Prisma.tbl_pedidoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for tbl_pedidos.
     */
    cursor?: Prisma.tbl_pedidoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tbl_pedidos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tbl_pedidos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of tbl_pedidos.
     */
    distinct?: Prisma.Tbl_pedidoScalarFieldEnum | Prisma.Tbl_pedidoScalarFieldEnum[];
};
/**
 * tbl_pedido findFirstOrThrow
 */
export type tbl_pedidoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which tbl_pedido to fetch.
     */
    where?: Prisma.tbl_pedidoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tbl_pedidos to fetch.
     */
    orderBy?: Prisma.tbl_pedidoOrderByWithRelationInput | Prisma.tbl_pedidoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for tbl_pedidos.
     */
    cursor?: Prisma.tbl_pedidoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tbl_pedidos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tbl_pedidos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of tbl_pedidos.
     */
    distinct?: Prisma.Tbl_pedidoScalarFieldEnum | Prisma.Tbl_pedidoScalarFieldEnum[];
};
/**
 * tbl_pedido findMany
 */
export type tbl_pedidoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which tbl_pedidos to fetch.
     */
    where?: Prisma.tbl_pedidoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tbl_pedidos to fetch.
     */
    orderBy?: Prisma.tbl_pedidoOrderByWithRelationInput | Prisma.tbl_pedidoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing tbl_pedidos.
     */
    cursor?: Prisma.tbl_pedidoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tbl_pedidos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tbl_pedidos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of tbl_pedidos.
     */
    distinct?: Prisma.Tbl_pedidoScalarFieldEnum | Prisma.Tbl_pedidoScalarFieldEnum[];
};
/**
 * tbl_pedido create
 */
export type tbl_pedidoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a tbl_pedido.
     */
    data: Prisma.XOR<Prisma.tbl_pedidoCreateInput, Prisma.tbl_pedidoUncheckedCreateInput>;
};
/**
 * tbl_pedido createMany
 */
export type tbl_pedidoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many tbl_pedidos.
     */
    data: Prisma.tbl_pedidoCreateManyInput | Prisma.tbl_pedidoCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * tbl_pedido createManyAndReturn
 */
export type tbl_pedidoCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_pedido
     */
    select?: Prisma.tbl_pedidoSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the tbl_pedido
     */
    omit?: Prisma.tbl_pedidoOmit<ExtArgs> | null;
    /**
     * The data used to create many tbl_pedidos.
     */
    data: Prisma.tbl_pedidoCreateManyInput | Prisma.tbl_pedidoCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.tbl_pedidoIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * tbl_pedido update
 */
export type tbl_pedidoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a tbl_pedido.
     */
    data: Prisma.XOR<Prisma.tbl_pedidoUpdateInput, Prisma.tbl_pedidoUncheckedUpdateInput>;
    /**
     * Choose, which tbl_pedido to update.
     */
    where: Prisma.tbl_pedidoWhereUniqueInput;
};
/**
 * tbl_pedido updateMany
 */
export type tbl_pedidoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update tbl_pedidos.
     */
    data: Prisma.XOR<Prisma.tbl_pedidoUpdateManyMutationInput, Prisma.tbl_pedidoUncheckedUpdateManyInput>;
    /**
     * Filter which tbl_pedidos to update
     */
    where?: Prisma.tbl_pedidoWhereInput;
    /**
     * Limit how many tbl_pedidos to update.
     */
    limit?: number;
};
/**
 * tbl_pedido updateManyAndReturn
 */
export type tbl_pedidoUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_pedido
     */
    select?: Prisma.tbl_pedidoSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the tbl_pedido
     */
    omit?: Prisma.tbl_pedidoOmit<ExtArgs> | null;
    /**
     * The data used to update tbl_pedidos.
     */
    data: Prisma.XOR<Prisma.tbl_pedidoUpdateManyMutationInput, Prisma.tbl_pedidoUncheckedUpdateManyInput>;
    /**
     * Filter which tbl_pedidos to update
     */
    where?: Prisma.tbl_pedidoWhereInput;
    /**
     * Limit how many tbl_pedidos to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.tbl_pedidoIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * tbl_pedido upsert
 */
export type tbl_pedidoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the tbl_pedido to update in case it exists.
     */
    where: Prisma.tbl_pedidoWhereUniqueInput;
    /**
     * In case the tbl_pedido found by the `where` argument doesn't exist, create a new tbl_pedido with this data.
     */
    create: Prisma.XOR<Prisma.tbl_pedidoCreateInput, Prisma.tbl_pedidoUncheckedCreateInput>;
    /**
     * In case the tbl_pedido was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.tbl_pedidoUpdateInput, Prisma.tbl_pedidoUncheckedUpdateInput>;
};
/**
 * tbl_pedido delete
 */
export type tbl_pedidoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which tbl_pedido to delete.
     */
    where: Prisma.tbl_pedidoWhereUniqueInput;
};
/**
 * tbl_pedido deleteMany
 */
export type tbl_pedidoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_pedidos to delete
     */
    where?: Prisma.tbl_pedidoWhereInput;
    /**
     * Limit how many tbl_pedidos to delete.
     */
    limit?: number;
};
/**
 * tbl_pedido.rel_pedido_produto
 */
export type tbl_pedido$rel_pedido_produtoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * tbl_pedido without action
 */
export type tbl_pedidoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
//# sourceMappingURL=tbl_pedido.d.ts.map