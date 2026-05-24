import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.ts";
/**
 * Model tbl_status_pedido
 *
 */
export type tbl_status_pedidoModel = runtime.Types.Result.DefaultSelection<Prisma.$tbl_status_pedidoPayload>;
export type AggregateTbl_status_pedido = {
    _count: Tbl_status_pedidoCountAggregateOutputType | null;
    _avg: Tbl_status_pedidoAvgAggregateOutputType | null;
    _sum: Tbl_status_pedidoSumAggregateOutputType | null;
    _min: Tbl_status_pedidoMinAggregateOutputType | null;
    _max: Tbl_status_pedidoMaxAggregateOutputType | null;
};
export type Tbl_status_pedidoAvgAggregateOutputType = {
    status_pedido_id: number | null;
};
export type Tbl_status_pedidoSumAggregateOutputType = {
    status_pedido_id: number | null;
};
export type Tbl_status_pedidoMinAggregateOutputType = {
    status_pedido_id: number | null;
    status: string | null;
};
export type Tbl_status_pedidoMaxAggregateOutputType = {
    status_pedido_id: number | null;
    status: string | null;
};
export type Tbl_status_pedidoCountAggregateOutputType = {
    status_pedido_id: number;
    status: number;
    _all: number;
};
export type Tbl_status_pedidoAvgAggregateInputType = {
    status_pedido_id?: true;
};
export type Tbl_status_pedidoSumAggregateInputType = {
    status_pedido_id?: true;
};
export type Tbl_status_pedidoMinAggregateInputType = {
    status_pedido_id?: true;
    status?: true;
};
export type Tbl_status_pedidoMaxAggregateInputType = {
    status_pedido_id?: true;
    status?: true;
};
export type Tbl_status_pedidoCountAggregateInputType = {
    status_pedido_id?: true;
    status?: true;
    _all?: true;
};
export type Tbl_status_pedidoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_status_pedido to aggregate.
     */
    where?: Prisma.tbl_status_pedidoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tbl_status_pedidos to fetch.
     */
    orderBy?: Prisma.tbl_status_pedidoOrderByWithRelationInput | Prisma.tbl_status_pedidoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.tbl_status_pedidoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tbl_status_pedidos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tbl_status_pedidos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned tbl_status_pedidos
    **/
    _count?: true | Tbl_status_pedidoCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: Tbl_status_pedidoAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: Tbl_status_pedidoSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: Tbl_status_pedidoMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: Tbl_status_pedidoMaxAggregateInputType;
};
export type GetTbl_status_pedidoAggregateType<T extends Tbl_status_pedidoAggregateArgs> = {
    [P in keyof T & keyof AggregateTbl_status_pedido]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTbl_status_pedido[P]> : Prisma.GetScalarType<T[P], AggregateTbl_status_pedido[P]>;
};
export type tbl_status_pedidoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.tbl_status_pedidoWhereInput;
    orderBy?: Prisma.tbl_status_pedidoOrderByWithAggregationInput | Prisma.tbl_status_pedidoOrderByWithAggregationInput[];
    by: Prisma.Tbl_status_pedidoScalarFieldEnum[] | Prisma.Tbl_status_pedidoScalarFieldEnum;
    having?: Prisma.tbl_status_pedidoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Tbl_status_pedidoCountAggregateInputType | true;
    _avg?: Tbl_status_pedidoAvgAggregateInputType;
    _sum?: Tbl_status_pedidoSumAggregateInputType;
    _min?: Tbl_status_pedidoMinAggregateInputType;
    _max?: Tbl_status_pedidoMaxAggregateInputType;
};
export type Tbl_status_pedidoGroupByOutputType = {
    status_pedido_id: number;
    status: string | null;
    _count: Tbl_status_pedidoCountAggregateOutputType | null;
    _avg: Tbl_status_pedidoAvgAggregateOutputType | null;
    _sum: Tbl_status_pedidoSumAggregateOutputType | null;
    _min: Tbl_status_pedidoMinAggregateOutputType | null;
    _max: Tbl_status_pedidoMaxAggregateOutputType | null;
};
export type GetTbl_status_pedidoGroupByPayload<T extends tbl_status_pedidoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Tbl_status_pedidoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Tbl_status_pedidoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Tbl_status_pedidoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Tbl_status_pedidoGroupByOutputType[P]>;
}>>;
export type tbl_status_pedidoWhereInput = {
    AND?: Prisma.tbl_status_pedidoWhereInput | Prisma.tbl_status_pedidoWhereInput[];
    OR?: Prisma.tbl_status_pedidoWhereInput[];
    NOT?: Prisma.tbl_status_pedidoWhereInput | Prisma.tbl_status_pedidoWhereInput[];
    status_pedido_id?: Prisma.IntFilter<"tbl_status_pedido"> | number;
    status?: Prisma.StringNullableFilter<"tbl_status_pedido"> | string | null;
    tbl_pedido?: Prisma.Tbl_pedidoListRelationFilter;
};
export type tbl_status_pedidoOrderByWithRelationInput = {
    status_pedido_id?: Prisma.SortOrder;
    status?: Prisma.SortOrderInput | Prisma.SortOrder;
    tbl_pedido?: Prisma.tbl_pedidoOrderByRelationAggregateInput;
};
export type tbl_status_pedidoWhereUniqueInput = Prisma.AtLeast<{
    status_pedido_id?: number;
    AND?: Prisma.tbl_status_pedidoWhereInput | Prisma.tbl_status_pedidoWhereInput[];
    OR?: Prisma.tbl_status_pedidoWhereInput[];
    NOT?: Prisma.tbl_status_pedidoWhereInput | Prisma.tbl_status_pedidoWhereInput[];
    status?: Prisma.StringNullableFilter<"tbl_status_pedido"> | string | null;
    tbl_pedido?: Prisma.Tbl_pedidoListRelationFilter;
}, "status_pedido_id">;
export type tbl_status_pedidoOrderByWithAggregationInput = {
    status_pedido_id?: Prisma.SortOrder;
    status?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.tbl_status_pedidoCountOrderByAggregateInput;
    _avg?: Prisma.tbl_status_pedidoAvgOrderByAggregateInput;
    _max?: Prisma.tbl_status_pedidoMaxOrderByAggregateInput;
    _min?: Prisma.tbl_status_pedidoMinOrderByAggregateInput;
    _sum?: Prisma.tbl_status_pedidoSumOrderByAggregateInput;
};
export type tbl_status_pedidoScalarWhereWithAggregatesInput = {
    AND?: Prisma.tbl_status_pedidoScalarWhereWithAggregatesInput | Prisma.tbl_status_pedidoScalarWhereWithAggregatesInput[];
    OR?: Prisma.tbl_status_pedidoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.tbl_status_pedidoScalarWhereWithAggregatesInput | Prisma.tbl_status_pedidoScalarWhereWithAggregatesInput[];
    status_pedido_id?: Prisma.IntWithAggregatesFilter<"tbl_status_pedido"> | number;
    status?: Prisma.StringNullableWithAggregatesFilter<"tbl_status_pedido"> | string | null;
};
export type tbl_status_pedidoCreateInput = {
    status_pedido_id: number;
    status?: string | null;
    tbl_pedido?: Prisma.tbl_pedidoCreateNestedManyWithoutTbl_status_pedidoInput;
};
export type tbl_status_pedidoUncheckedCreateInput = {
    status_pedido_id: number;
    status?: string | null;
    tbl_pedido?: Prisma.tbl_pedidoUncheckedCreateNestedManyWithoutTbl_status_pedidoInput;
};
export type tbl_status_pedidoUpdateInput = {
    status_pedido_id?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tbl_pedido?: Prisma.tbl_pedidoUpdateManyWithoutTbl_status_pedidoNestedInput;
};
export type tbl_status_pedidoUncheckedUpdateInput = {
    status_pedido_id?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tbl_pedido?: Prisma.tbl_pedidoUncheckedUpdateManyWithoutTbl_status_pedidoNestedInput;
};
export type tbl_status_pedidoCreateManyInput = {
    status_pedido_id: number;
    status?: string | null;
};
export type tbl_status_pedidoUpdateManyMutationInput = {
    status_pedido_id?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type tbl_status_pedidoUncheckedUpdateManyInput = {
    status_pedido_id?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type Tbl_status_pedidoNullableScalarRelationFilter = {
    is?: Prisma.tbl_status_pedidoWhereInput | null;
    isNot?: Prisma.tbl_status_pedidoWhereInput | null;
};
export type tbl_status_pedidoCountOrderByAggregateInput = {
    status_pedido_id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
};
export type tbl_status_pedidoAvgOrderByAggregateInput = {
    status_pedido_id?: Prisma.SortOrder;
};
export type tbl_status_pedidoMaxOrderByAggregateInput = {
    status_pedido_id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
};
export type tbl_status_pedidoMinOrderByAggregateInput = {
    status_pedido_id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
};
export type tbl_status_pedidoSumOrderByAggregateInput = {
    status_pedido_id?: Prisma.SortOrder;
};
export type tbl_status_pedidoCreateNestedOneWithoutTbl_pedidoInput = {
    create?: Prisma.XOR<Prisma.tbl_status_pedidoCreateWithoutTbl_pedidoInput, Prisma.tbl_status_pedidoUncheckedCreateWithoutTbl_pedidoInput>;
    connectOrCreate?: Prisma.tbl_status_pedidoCreateOrConnectWithoutTbl_pedidoInput;
    connect?: Prisma.tbl_status_pedidoWhereUniqueInput;
};
export type tbl_status_pedidoUpdateOneWithoutTbl_pedidoNestedInput = {
    create?: Prisma.XOR<Prisma.tbl_status_pedidoCreateWithoutTbl_pedidoInput, Prisma.tbl_status_pedidoUncheckedCreateWithoutTbl_pedidoInput>;
    connectOrCreate?: Prisma.tbl_status_pedidoCreateOrConnectWithoutTbl_pedidoInput;
    upsert?: Prisma.tbl_status_pedidoUpsertWithoutTbl_pedidoInput;
    disconnect?: Prisma.tbl_status_pedidoWhereInput | boolean;
    delete?: Prisma.tbl_status_pedidoWhereInput | boolean;
    connect?: Prisma.tbl_status_pedidoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.tbl_status_pedidoUpdateToOneWithWhereWithoutTbl_pedidoInput, Prisma.tbl_status_pedidoUpdateWithoutTbl_pedidoInput>, Prisma.tbl_status_pedidoUncheckedUpdateWithoutTbl_pedidoInput>;
};
export type tbl_status_pedidoCreateWithoutTbl_pedidoInput = {
    status_pedido_id: number;
    status?: string | null;
};
export type tbl_status_pedidoUncheckedCreateWithoutTbl_pedidoInput = {
    status_pedido_id: number;
    status?: string | null;
};
export type tbl_status_pedidoCreateOrConnectWithoutTbl_pedidoInput = {
    where: Prisma.tbl_status_pedidoWhereUniqueInput;
    create: Prisma.XOR<Prisma.tbl_status_pedidoCreateWithoutTbl_pedidoInput, Prisma.tbl_status_pedidoUncheckedCreateWithoutTbl_pedidoInput>;
};
export type tbl_status_pedidoUpsertWithoutTbl_pedidoInput = {
    update: Prisma.XOR<Prisma.tbl_status_pedidoUpdateWithoutTbl_pedidoInput, Prisma.tbl_status_pedidoUncheckedUpdateWithoutTbl_pedidoInput>;
    create: Prisma.XOR<Prisma.tbl_status_pedidoCreateWithoutTbl_pedidoInput, Prisma.tbl_status_pedidoUncheckedCreateWithoutTbl_pedidoInput>;
    where?: Prisma.tbl_status_pedidoWhereInput;
};
export type tbl_status_pedidoUpdateToOneWithWhereWithoutTbl_pedidoInput = {
    where?: Prisma.tbl_status_pedidoWhereInput;
    data: Prisma.XOR<Prisma.tbl_status_pedidoUpdateWithoutTbl_pedidoInput, Prisma.tbl_status_pedidoUncheckedUpdateWithoutTbl_pedidoInput>;
};
export type tbl_status_pedidoUpdateWithoutTbl_pedidoInput = {
    status_pedido_id?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type tbl_status_pedidoUncheckedUpdateWithoutTbl_pedidoInput = {
    status_pedido_id?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
/**
 * Count Type Tbl_status_pedidoCountOutputType
 */
export type Tbl_status_pedidoCountOutputType = {
    tbl_pedido: number;
};
export type Tbl_status_pedidoCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tbl_pedido?: boolean | Tbl_status_pedidoCountOutputTypeCountTbl_pedidoArgs;
};
/**
 * Tbl_status_pedidoCountOutputType without action
 */
export type Tbl_status_pedidoCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tbl_status_pedidoCountOutputType
     */
    select?: Prisma.Tbl_status_pedidoCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * Tbl_status_pedidoCountOutputType without action
 */
export type Tbl_status_pedidoCountOutputTypeCountTbl_pedidoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.tbl_pedidoWhereInput;
};
export type tbl_status_pedidoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    status_pedido_id?: boolean;
    status?: boolean;
    tbl_pedido?: boolean | Prisma.tbl_status_pedido$tbl_pedidoArgs<ExtArgs>;
    _count?: boolean | Prisma.Tbl_status_pedidoCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["tbl_status_pedido"]>;
export type tbl_status_pedidoSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    status_pedido_id?: boolean;
    status?: boolean;
}, ExtArgs["result"]["tbl_status_pedido"]>;
export type tbl_status_pedidoSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    status_pedido_id?: boolean;
    status?: boolean;
}, ExtArgs["result"]["tbl_status_pedido"]>;
export type tbl_status_pedidoSelectScalar = {
    status_pedido_id?: boolean;
    status?: boolean;
};
export type tbl_status_pedidoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"status_pedido_id" | "status", ExtArgs["result"]["tbl_status_pedido"]>;
export type tbl_status_pedidoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tbl_pedido?: boolean | Prisma.tbl_status_pedido$tbl_pedidoArgs<ExtArgs>;
    _count?: boolean | Prisma.Tbl_status_pedidoCountOutputTypeDefaultArgs<ExtArgs>;
};
export type tbl_status_pedidoIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type tbl_status_pedidoIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $tbl_status_pedidoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "tbl_status_pedido";
    objects: {
        tbl_pedido: Prisma.$tbl_pedidoPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        status_pedido_id: number;
        status: string | null;
    }, ExtArgs["result"]["tbl_status_pedido"]>;
    composites: {};
};
export type tbl_status_pedidoGetPayload<S extends boolean | null | undefined | tbl_status_pedidoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$tbl_status_pedidoPayload, S>;
export type tbl_status_pedidoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<tbl_status_pedidoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Tbl_status_pedidoCountAggregateInputType | true;
};
export interface tbl_status_pedidoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['tbl_status_pedido'];
        meta: {
            name: 'tbl_status_pedido';
        };
    };
    /**
     * Find zero or one Tbl_status_pedido that matches the filter.
     * @param {tbl_status_pedidoFindUniqueArgs} args - Arguments to find a Tbl_status_pedido
     * @example
     * // Get one Tbl_status_pedido
     * const tbl_status_pedido = await prisma.tbl_status_pedido.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tbl_status_pedidoFindUniqueArgs>(args: Prisma.SelectSubset<T, tbl_status_pedidoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__tbl_status_pedidoClient<runtime.Types.Result.GetResult<Prisma.$tbl_status_pedidoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Tbl_status_pedido that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tbl_status_pedidoFindUniqueOrThrowArgs} args - Arguments to find a Tbl_status_pedido
     * @example
     * // Get one Tbl_status_pedido
     * const tbl_status_pedido = await prisma.tbl_status_pedido.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tbl_status_pedidoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, tbl_status_pedidoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__tbl_status_pedidoClient<runtime.Types.Result.GetResult<Prisma.$tbl_status_pedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Tbl_status_pedido that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_status_pedidoFindFirstArgs} args - Arguments to find a Tbl_status_pedido
     * @example
     * // Get one Tbl_status_pedido
     * const tbl_status_pedido = await prisma.tbl_status_pedido.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tbl_status_pedidoFindFirstArgs>(args?: Prisma.SelectSubset<T, tbl_status_pedidoFindFirstArgs<ExtArgs>>): Prisma.Prisma__tbl_status_pedidoClient<runtime.Types.Result.GetResult<Prisma.$tbl_status_pedidoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Tbl_status_pedido that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_status_pedidoFindFirstOrThrowArgs} args - Arguments to find a Tbl_status_pedido
     * @example
     * // Get one Tbl_status_pedido
     * const tbl_status_pedido = await prisma.tbl_status_pedido.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tbl_status_pedidoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, tbl_status_pedidoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__tbl_status_pedidoClient<runtime.Types.Result.GetResult<Prisma.$tbl_status_pedidoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Tbl_status_pedidos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_status_pedidoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tbl_status_pedidos
     * const tbl_status_pedidos = await prisma.tbl_status_pedido.findMany()
     *
     * // Get first 10 Tbl_status_pedidos
     * const tbl_status_pedidos = await prisma.tbl_status_pedido.findMany({ take: 10 })
     *
     * // Only select the `status_pedido_id`
     * const tbl_status_pedidoWithStatus_pedido_idOnly = await prisma.tbl_status_pedido.findMany({ select: { status_pedido_id: true } })
     *
     */
    findMany<T extends tbl_status_pedidoFindManyArgs>(args?: Prisma.SelectSubset<T, tbl_status_pedidoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$tbl_status_pedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Tbl_status_pedido.
     * @param {tbl_status_pedidoCreateArgs} args - Arguments to create a Tbl_status_pedido.
     * @example
     * // Create one Tbl_status_pedido
     * const Tbl_status_pedido = await prisma.tbl_status_pedido.create({
     *   data: {
     *     // ... data to create a Tbl_status_pedido
     *   }
     * })
     *
     */
    create<T extends tbl_status_pedidoCreateArgs>(args: Prisma.SelectSubset<T, tbl_status_pedidoCreateArgs<ExtArgs>>): Prisma.Prisma__tbl_status_pedidoClient<runtime.Types.Result.GetResult<Prisma.$tbl_status_pedidoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Tbl_status_pedidos.
     * @param {tbl_status_pedidoCreateManyArgs} args - Arguments to create many Tbl_status_pedidos.
     * @example
     * // Create many Tbl_status_pedidos
     * const tbl_status_pedido = await prisma.tbl_status_pedido.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends tbl_status_pedidoCreateManyArgs>(args?: Prisma.SelectSubset<T, tbl_status_pedidoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Tbl_status_pedidos and returns the data saved in the database.
     * @param {tbl_status_pedidoCreateManyAndReturnArgs} args - Arguments to create many Tbl_status_pedidos.
     * @example
     * // Create many Tbl_status_pedidos
     * const tbl_status_pedido = await prisma.tbl_status_pedido.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Tbl_status_pedidos and only return the `status_pedido_id`
     * const tbl_status_pedidoWithStatus_pedido_idOnly = await prisma.tbl_status_pedido.createManyAndReturn({
     *   select: { status_pedido_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends tbl_status_pedidoCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, tbl_status_pedidoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$tbl_status_pedidoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Tbl_status_pedido.
     * @param {tbl_status_pedidoDeleteArgs} args - Arguments to delete one Tbl_status_pedido.
     * @example
     * // Delete one Tbl_status_pedido
     * const Tbl_status_pedido = await prisma.tbl_status_pedido.delete({
     *   where: {
     *     // ... filter to delete one Tbl_status_pedido
     *   }
     * })
     *
     */
    delete<T extends tbl_status_pedidoDeleteArgs>(args: Prisma.SelectSubset<T, tbl_status_pedidoDeleteArgs<ExtArgs>>): Prisma.Prisma__tbl_status_pedidoClient<runtime.Types.Result.GetResult<Prisma.$tbl_status_pedidoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Tbl_status_pedido.
     * @param {tbl_status_pedidoUpdateArgs} args - Arguments to update one Tbl_status_pedido.
     * @example
     * // Update one Tbl_status_pedido
     * const tbl_status_pedido = await prisma.tbl_status_pedido.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends tbl_status_pedidoUpdateArgs>(args: Prisma.SelectSubset<T, tbl_status_pedidoUpdateArgs<ExtArgs>>): Prisma.Prisma__tbl_status_pedidoClient<runtime.Types.Result.GetResult<Prisma.$tbl_status_pedidoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Tbl_status_pedidos.
     * @param {tbl_status_pedidoDeleteManyArgs} args - Arguments to filter Tbl_status_pedidos to delete.
     * @example
     * // Delete a few Tbl_status_pedidos
     * const { count } = await prisma.tbl_status_pedido.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends tbl_status_pedidoDeleteManyArgs>(args?: Prisma.SelectSubset<T, tbl_status_pedidoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Tbl_status_pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_status_pedidoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tbl_status_pedidos
     * const tbl_status_pedido = await prisma.tbl_status_pedido.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends tbl_status_pedidoUpdateManyArgs>(args: Prisma.SelectSubset<T, tbl_status_pedidoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Tbl_status_pedidos and returns the data updated in the database.
     * @param {tbl_status_pedidoUpdateManyAndReturnArgs} args - Arguments to update many Tbl_status_pedidos.
     * @example
     * // Update many Tbl_status_pedidos
     * const tbl_status_pedido = await prisma.tbl_status_pedido.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Tbl_status_pedidos and only return the `status_pedido_id`
     * const tbl_status_pedidoWithStatus_pedido_idOnly = await prisma.tbl_status_pedido.updateManyAndReturn({
     *   select: { status_pedido_id: true },
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
    updateManyAndReturn<T extends tbl_status_pedidoUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, tbl_status_pedidoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$tbl_status_pedidoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Tbl_status_pedido.
     * @param {tbl_status_pedidoUpsertArgs} args - Arguments to update or create a Tbl_status_pedido.
     * @example
     * // Update or create a Tbl_status_pedido
     * const tbl_status_pedido = await prisma.tbl_status_pedido.upsert({
     *   create: {
     *     // ... data to create a Tbl_status_pedido
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tbl_status_pedido we want to update
     *   }
     * })
     */
    upsert<T extends tbl_status_pedidoUpsertArgs>(args: Prisma.SelectSubset<T, tbl_status_pedidoUpsertArgs<ExtArgs>>): Prisma.Prisma__tbl_status_pedidoClient<runtime.Types.Result.GetResult<Prisma.$tbl_status_pedidoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Tbl_status_pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_status_pedidoCountArgs} args - Arguments to filter Tbl_status_pedidos to count.
     * @example
     * // Count the number of Tbl_status_pedidos
     * const count = await prisma.tbl_status_pedido.count({
     *   where: {
     *     // ... the filter for the Tbl_status_pedidos we want to count
     *   }
     * })
    **/
    count<T extends tbl_status_pedidoCountArgs>(args?: Prisma.Subset<T, tbl_status_pedidoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Tbl_status_pedidoCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Tbl_status_pedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tbl_status_pedidoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tbl_status_pedidoAggregateArgs>(args: Prisma.Subset<T, Tbl_status_pedidoAggregateArgs>): Prisma.PrismaPromise<GetTbl_status_pedidoAggregateType<T>>;
    /**
     * Group by Tbl_status_pedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_status_pedidoGroupByArgs} args - Group by arguments.
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
    groupBy<T extends tbl_status_pedidoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: tbl_status_pedidoGroupByArgs['orderBy'];
    } : {
        orderBy?: tbl_status_pedidoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, tbl_status_pedidoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTbl_status_pedidoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the tbl_status_pedido model
     */
    readonly fields: tbl_status_pedidoFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for tbl_status_pedido.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__tbl_status_pedidoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    tbl_pedido<T extends Prisma.tbl_status_pedido$tbl_pedidoArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.tbl_status_pedido$tbl_pedidoArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$tbl_pedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the tbl_status_pedido model
 */
export interface tbl_status_pedidoFieldRefs {
    readonly status_pedido_id: Prisma.FieldRef<"tbl_status_pedido", 'Int'>;
    readonly status: Prisma.FieldRef<"tbl_status_pedido", 'String'>;
}
/**
 * tbl_status_pedido findUnique
 */
export type tbl_status_pedidoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_status_pedido
     */
    select?: Prisma.tbl_status_pedidoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the tbl_status_pedido
     */
    omit?: Prisma.tbl_status_pedidoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.tbl_status_pedidoInclude<ExtArgs> | null;
    /**
     * Filter, which tbl_status_pedido to fetch.
     */
    where: Prisma.tbl_status_pedidoWhereUniqueInput;
};
/**
 * tbl_status_pedido findUniqueOrThrow
 */
export type tbl_status_pedidoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_status_pedido
     */
    select?: Prisma.tbl_status_pedidoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the tbl_status_pedido
     */
    omit?: Prisma.tbl_status_pedidoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.tbl_status_pedidoInclude<ExtArgs> | null;
    /**
     * Filter, which tbl_status_pedido to fetch.
     */
    where: Prisma.tbl_status_pedidoWhereUniqueInput;
};
/**
 * tbl_status_pedido findFirst
 */
export type tbl_status_pedidoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_status_pedido
     */
    select?: Prisma.tbl_status_pedidoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the tbl_status_pedido
     */
    omit?: Prisma.tbl_status_pedidoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.tbl_status_pedidoInclude<ExtArgs> | null;
    /**
     * Filter, which tbl_status_pedido to fetch.
     */
    where?: Prisma.tbl_status_pedidoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tbl_status_pedidos to fetch.
     */
    orderBy?: Prisma.tbl_status_pedidoOrderByWithRelationInput | Prisma.tbl_status_pedidoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for tbl_status_pedidos.
     */
    cursor?: Prisma.tbl_status_pedidoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tbl_status_pedidos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tbl_status_pedidos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of tbl_status_pedidos.
     */
    distinct?: Prisma.Tbl_status_pedidoScalarFieldEnum | Prisma.Tbl_status_pedidoScalarFieldEnum[];
};
/**
 * tbl_status_pedido findFirstOrThrow
 */
export type tbl_status_pedidoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_status_pedido
     */
    select?: Prisma.tbl_status_pedidoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the tbl_status_pedido
     */
    omit?: Prisma.tbl_status_pedidoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.tbl_status_pedidoInclude<ExtArgs> | null;
    /**
     * Filter, which tbl_status_pedido to fetch.
     */
    where?: Prisma.tbl_status_pedidoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tbl_status_pedidos to fetch.
     */
    orderBy?: Prisma.tbl_status_pedidoOrderByWithRelationInput | Prisma.tbl_status_pedidoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for tbl_status_pedidos.
     */
    cursor?: Prisma.tbl_status_pedidoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tbl_status_pedidos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tbl_status_pedidos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of tbl_status_pedidos.
     */
    distinct?: Prisma.Tbl_status_pedidoScalarFieldEnum | Prisma.Tbl_status_pedidoScalarFieldEnum[];
};
/**
 * tbl_status_pedido findMany
 */
export type tbl_status_pedidoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_status_pedido
     */
    select?: Prisma.tbl_status_pedidoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the tbl_status_pedido
     */
    omit?: Prisma.tbl_status_pedidoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.tbl_status_pedidoInclude<ExtArgs> | null;
    /**
     * Filter, which tbl_status_pedidos to fetch.
     */
    where?: Prisma.tbl_status_pedidoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tbl_status_pedidos to fetch.
     */
    orderBy?: Prisma.tbl_status_pedidoOrderByWithRelationInput | Prisma.tbl_status_pedidoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing tbl_status_pedidos.
     */
    cursor?: Prisma.tbl_status_pedidoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tbl_status_pedidos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tbl_status_pedidos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of tbl_status_pedidos.
     */
    distinct?: Prisma.Tbl_status_pedidoScalarFieldEnum | Prisma.Tbl_status_pedidoScalarFieldEnum[];
};
/**
 * tbl_status_pedido create
 */
export type tbl_status_pedidoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_status_pedido
     */
    select?: Prisma.tbl_status_pedidoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the tbl_status_pedido
     */
    omit?: Prisma.tbl_status_pedidoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.tbl_status_pedidoInclude<ExtArgs> | null;
    /**
     * The data needed to create a tbl_status_pedido.
     */
    data: Prisma.XOR<Prisma.tbl_status_pedidoCreateInput, Prisma.tbl_status_pedidoUncheckedCreateInput>;
};
/**
 * tbl_status_pedido createMany
 */
export type tbl_status_pedidoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many tbl_status_pedidos.
     */
    data: Prisma.tbl_status_pedidoCreateManyInput | Prisma.tbl_status_pedidoCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * tbl_status_pedido createManyAndReturn
 */
export type tbl_status_pedidoCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_status_pedido
     */
    select?: Prisma.tbl_status_pedidoSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the tbl_status_pedido
     */
    omit?: Prisma.tbl_status_pedidoOmit<ExtArgs> | null;
    /**
     * The data used to create many tbl_status_pedidos.
     */
    data: Prisma.tbl_status_pedidoCreateManyInput | Prisma.tbl_status_pedidoCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * tbl_status_pedido update
 */
export type tbl_status_pedidoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_status_pedido
     */
    select?: Prisma.tbl_status_pedidoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the tbl_status_pedido
     */
    omit?: Prisma.tbl_status_pedidoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.tbl_status_pedidoInclude<ExtArgs> | null;
    /**
     * The data needed to update a tbl_status_pedido.
     */
    data: Prisma.XOR<Prisma.tbl_status_pedidoUpdateInput, Prisma.tbl_status_pedidoUncheckedUpdateInput>;
    /**
     * Choose, which tbl_status_pedido to update.
     */
    where: Prisma.tbl_status_pedidoWhereUniqueInput;
};
/**
 * tbl_status_pedido updateMany
 */
export type tbl_status_pedidoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update tbl_status_pedidos.
     */
    data: Prisma.XOR<Prisma.tbl_status_pedidoUpdateManyMutationInput, Prisma.tbl_status_pedidoUncheckedUpdateManyInput>;
    /**
     * Filter which tbl_status_pedidos to update
     */
    where?: Prisma.tbl_status_pedidoWhereInput;
    /**
     * Limit how many tbl_status_pedidos to update.
     */
    limit?: number;
};
/**
 * tbl_status_pedido updateManyAndReturn
 */
export type tbl_status_pedidoUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_status_pedido
     */
    select?: Prisma.tbl_status_pedidoSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the tbl_status_pedido
     */
    omit?: Prisma.tbl_status_pedidoOmit<ExtArgs> | null;
    /**
     * The data used to update tbl_status_pedidos.
     */
    data: Prisma.XOR<Prisma.tbl_status_pedidoUpdateManyMutationInput, Prisma.tbl_status_pedidoUncheckedUpdateManyInput>;
    /**
     * Filter which tbl_status_pedidos to update
     */
    where?: Prisma.tbl_status_pedidoWhereInput;
    /**
     * Limit how many tbl_status_pedidos to update.
     */
    limit?: number;
};
/**
 * tbl_status_pedido upsert
 */
export type tbl_status_pedidoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_status_pedido
     */
    select?: Prisma.tbl_status_pedidoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the tbl_status_pedido
     */
    omit?: Prisma.tbl_status_pedidoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.tbl_status_pedidoInclude<ExtArgs> | null;
    /**
     * The filter to search for the tbl_status_pedido to update in case it exists.
     */
    where: Prisma.tbl_status_pedidoWhereUniqueInput;
    /**
     * In case the tbl_status_pedido found by the `where` argument doesn't exist, create a new tbl_status_pedido with this data.
     */
    create: Prisma.XOR<Prisma.tbl_status_pedidoCreateInput, Prisma.tbl_status_pedidoUncheckedCreateInput>;
    /**
     * In case the tbl_status_pedido was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.tbl_status_pedidoUpdateInput, Prisma.tbl_status_pedidoUncheckedUpdateInput>;
};
/**
 * tbl_status_pedido delete
 */
export type tbl_status_pedidoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_status_pedido
     */
    select?: Prisma.tbl_status_pedidoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the tbl_status_pedido
     */
    omit?: Prisma.tbl_status_pedidoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.tbl_status_pedidoInclude<ExtArgs> | null;
    /**
     * Filter which tbl_status_pedido to delete.
     */
    where: Prisma.tbl_status_pedidoWhereUniqueInput;
};
/**
 * tbl_status_pedido deleteMany
 */
export type tbl_status_pedidoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_status_pedidos to delete
     */
    where?: Prisma.tbl_status_pedidoWhereInput;
    /**
     * Limit how many tbl_status_pedidos to delete.
     */
    limit?: number;
};
/**
 * tbl_status_pedido.tbl_pedido
 */
export type tbl_status_pedido$tbl_pedidoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * tbl_status_pedido without action
 */
export type tbl_status_pedidoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_status_pedido
     */
    select?: Prisma.tbl_status_pedidoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the tbl_status_pedido
     */
    omit?: Prisma.tbl_status_pedidoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.tbl_status_pedidoInclude<ExtArgs> | null;
};
//# sourceMappingURL=tbl_status_pedido.d.ts.map