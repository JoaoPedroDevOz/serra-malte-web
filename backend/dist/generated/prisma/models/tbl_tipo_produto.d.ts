import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.ts";
/**
 * Model tbl_tipo_produto
 *
 */
export type tbl_tipo_produtoModel = runtime.Types.Result.DefaultSelection<Prisma.$tbl_tipo_produtoPayload>;
export type AggregateTbl_tipo_produto = {
    _count: Tbl_tipo_produtoCountAggregateOutputType | null;
    _avg: Tbl_tipo_produtoAvgAggregateOutputType | null;
    _sum: Tbl_tipo_produtoSumAggregateOutputType | null;
    _min: Tbl_tipo_produtoMinAggregateOutputType | null;
    _max: Tbl_tipo_produtoMaxAggregateOutputType | null;
};
export type Tbl_tipo_produtoAvgAggregateOutputType = {
    tipo_produto_id: number | null;
};
export type Tbl_tipo_produtoSumAggregateOutputType = {
    tipo_produto_id: number | null;
};
export type Tbl_tipo_produtoMinAggregateOutputType = {
    tipo_produto_id: number | null;
    tipo: string | null;
};
export type Tbl_tipo_produtoMaxAggregateOutputType = {
    tipo_produto_id: number | null;
    tipo: string | null;
};
export type Tbl_tipo_produtoCountAggregateOutputType = {
    tipo_produto_id: number;
    tipo: number;
    _all: number;
};
export type Tbl_tipo_produtoAvgAggregateInputType = {
    tipo_produto_id?: true;
};
export type Tbl_tipo_produtoSumAggregateInputType = {
    tipo_produto_id?: true;
};
export type Tbl_tipo_produtoMinAggregateInputType = {
    tipo_produto_id?: true;
    tipo?: true;
};
export type Tbl_tipo_produtoMaxAggregateInputType = {
    tipo_produto_id?: true;
    tipo?: true;
};
export type Tbl_tipo_produtoCountAggregateInputType = {
    tipo_produto_id?: true;
    tipo?: true;
    _all?: true;
};
export type Tbl_tipo_produtoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_tipo_produto to aggregate.
     */
    where?: Prisma.tbl_tipo_produtoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tbl_tipo_produtos to fetch.
     */
    orderBy?: Prisma.tbl_tipo_produtoOrderByWithRelationInput | Prisma.tbl_tipo_produtoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.tbl_tipo_produtoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tbl_tipo_produtos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tbl_tipo_produtos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned tbl_tipo_produtos
    **/
    _count?: true | Tbl_tipo_produtoCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: Tbl_tipo_produtoAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: Tbl_tipo_produtoSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: Tbl_tipo_produtoMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: Tbl_tipo_produtoMaxAggregateInputType;
};
export type GetTbl_tipo_produtoAggregateType<T extends Tbl_tipo_produtoAggregateArgs> = {
    [P in keyof T & keyof AggregateTbl_tipo_produto]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTbl_tipo_produto[P]> : Prisma.GetScalarType<T[P], AggregateTbl_tipo_produto[P]>;
};
export type tbl_tipo_produtoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.tbl_tipo_produtoWhereInput;
    orderBy?: Prisma.tbl_tipo_produtoOrderByWithAggregationInput | Prisma.tbl_tipo_produtoOrderByWithAggregationInput[];
    by: Prisma.Tbl_tipo_produtoScalarFieldEnum[] | Prisma.Tbl_tipo_produtoScalarFieldEnum;
    having?: Prisma.tbl_tipo_produtoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Tbl_tipo_produtoCountAggregateInputType | true;
    _avg?: Tbl_tipo_produtoAvgAggregateInputType;
    _sum?: Tbl_tipo_produtoSumAggregateInputType;
    _min?: Tbl_tipo_produtoMinAggregateInputType;
    _max?: Tbl_tipo_produtoMaxAggregateInputType;
};
export type Tbl_tipo_produtoGroupByOutputType = {
    tipo_produto_id: number;
    tipo: string | null;
    _count: Tbl_tipo_produtoCountAggregateOutputType | null;
    _avg: Tbl_tipo_produtoAvgAggregateOutputType | null;
    _sum: Tbl_tipo_produtoSumAggregateOutputType | null;
    _min: Tbl_tipo_produtoMinAggregateOutputType | null;
    _max: Tbl_tipo_produtoMaxAggregateOutputType | null;
};
export type GetTbl_tipo_produtoGroupByPayload<T extends tbl_tipo_produtoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Tbl_tipo_produtoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Tbl_tipo_produtoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Tbl_tipo_produtoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Tbl_tipo_produtoGroupByOutputType[P]>;
}>>;
export type tbl_tipo_produtoWhereInput = {
    AND?: Prisma.tbl_tipo_produtoWhereInput | Prisma.tbl_tipo_produtoWhereInput[];
    OR?: Prisma.tbl_tipo_produtoWhereInput[];
    NOT?: Prisma.tbl_tipo_produtoWhereInput | Prisma.tbl_tipo_produtoWhereInput[];
    tipo_produto_id?: Prisma.IntFilter<"tbl_tipo_produto"> | number;
    tipo?: Prisma.StringNullableFilter<"tbl_tipo_produto"> | string | null;
    tbl_produto?: Prisma.Tbl_produtoListRelationFilter;
};
export type tbl_tipo_produtoOrderByWithRelationInput = {
    tipo_produto_id?: Prisma.SortOrder;
    tipo?: Prisma.SortOrderInput | Prisma.SortOrder;
    tbl_produto?: Prisma.tbl_produtoOrderByRelationAggregateInput;
};
export type tbl_tipo_produtoWhereUniqueInput = Prisma.AtLeast<{
    tipo_produto_id?: number;
    AND?: Prisma.tbl_tipo_produtoWhereInput | Prisma.tbl_tipo_produtoWhereInput[];
    OR?: Prisma.tbl_tipo_produtoWhereInput[];
    NOT?: Prisma.tbl_tipo_produtoWhereInput | Prisma.tbl_tipo_produtoWhereInput[];
    tipo?: Prisma.StringNullableFilter<"tbl_tipo_produto"> | string | null;
    tbl_produto?: Prisma.Tbl_produtoListRelationFilter;
}, "tipo_produto_id">;
export type tbl_tipo_produtoOrderByWithAggregationInput = {
    tipo_produto_id?: Prisma.SortOrder;
    tipo?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.tbl_tipo_produtoCountOrderByAggregateInput;
    _avg?: Prisma.tbl_tipo_produtoAvgOrderByAggregateInput;
    _max?: Prisma.tbl_tipo_produtoMaxOrderByAggregateInput;
    _min?: Prisma.tbl_tipo_produtoMinOrderByAggregateInput;
    _sum?: Prisma.tbl_tipo_produtoSumOrderByAggregateInput;
};
export type tbl_tipo_produtoScalarWhereWithAggregatesInput = {
    AND?: Prisma.tbl_tipo_produtoScalarWhereWithAggregatesInput | Prisma.tbl_tipo_produtoScalarWhereWithAggregatesInput[];
    OR?: Prisma.tbl_tipo_produtoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.tbl_tipo_produtoScalarWhereWithAggregatesInput | Prisma.tbl_tipo_produtoScalarWhereWithAggregatesInput[];
    tipo_produto_id?: Prisma.IntWithAggregatesFilter<"tbl_tipo_produto"> | number;
    tipo?: Prisma.StringNullableWithAggregatesFilter<"tbl_tipo_produto"> | string | null;
};
export type tbl_tipo_produtoCreateInput = {
    tipo_produto_id: number;
    tipo?: string | null;
    tbl_produto?: Prisma.tbl_produtoCreateNestedManyWithoutTbl_tipo_produtoInput;
};
export type tbl_tipo_produtoUncheckedCreateInput = {
    tipo_produto_id: number;
    tipo?: string | null;
    tbl_produto?: Prisma.tbl_produtoUncheckedCreateNestedManyWithoutTbl_tipo_produtoInput;
};
export type tbl_tipo_produtoUpdateInput = {
    tipo_produto_id?: Prisma.IntFieldUpdateOperationsInput | number;
    tipo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tbl_produto?: Prisma.tbl_produtoUpdateManyWithoutTbl_tipo_produtoNestedInput;
};
export type tbl_tipo_produtoUncheckedUpdateInput = {
    tipo_produto_id?: Prisma.IntFieldUpdateOperationsInput | number;
    tipo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tbl_produto?: Prisma.tbl_produtoUncheckedUpdateManyWithoutTbl_tipo_produtoNestedInput;
};
export type tbl_tipo_produtoCreateManyInput = {
    tipo_produto_id: number;
    tipo?: string | null;
};
export type tbl_tipo_produtoUpdateManyMutationInput = {
    tipo_produto_id?: Prisma.IntFieldUpdateOperationsInput | number;
    tipo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type tbl_tipo_produtoUncheckedUpdateManyInput = {
    tipo_produto_id?: Prisma.IntFieldUpdateOperationsInput | number;
    tipo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type Tbl_tipo_produtoNullableScalarRelationFilter = {
    is?: Prisma.tbl_tipo_produtoWhereInput | null;
    isNot?: Prisma.tbl_tipo_produtoWhereInput | null;
};
export type tbl_tipo_produtoCountOrderByAggregateInput = {
    tipo_produto_id?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
};
export type tbl_tipo_produtoAvgOrderByAggregateInput = {
    tipo_produto_id?: Prisma.SortOrder;
};
export type tbl_tipo_produtoMaxOrderByAggregateInput = {
    tipo_produto_id?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
};
export type tbl_tipo_produtoMinOrderByAggregateInput = {
    tipo_produto_id?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
};
export type tbl_tipo_produtoSumOrderByAggregateInput = {
    tipo_produto_id?: Prisma.SortOrder;
};
export type tbl_tipo_produtoCreateNestedOneWithoutTbl_produtoInput = {
    create?: Prisma.XOR<Prisma.tbl_tipo_produtoCreateWithoutTbl_produtoInput, Prisma.tbl_tipo_produtoUncheckedCreateWithoutTbl_produtoInput>;
    connectOrCreate?: Prisma.tbl_tipo_produtoCreateOrConnectWithoutTbl_produtoInput;
    connect?: Prisma.tbl_tipo_produtoWhereUniqueInput;
};
export type tbl_tipo_produtoUpdateOneWithoutTbl_produtoNestedInput = {
    create?: Prisma.XOR<Prisma.tbl_tipo_produtoCreateWithoutTbl_produtoInput, Prisma.tbl_tipo_produtoUncheckedCreateWithoutTbl_produtoInput>;
    connectOrCreate?: Prisma.tbl_tipo_produtoCreateOrConnectWithoutTbl_produtoInput;
    upsert?: Prisma.tbl_tipo_produtoUpsertWithoutTbl_produtoInput;
    disconnect?: Prisma.tbl_tipo_produtoWhereInput | boolean;
    delete?: Prisma.tbl_tipo_produtoWhereInput | boolean;
    connect?: Prisma.tbl_tipo_produtoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.tbl_tipo_produtoUpdateToOneWithWhereWithoutTbl_produtoInput, Prisma.tbl_tipo_produtoUpdateWithoutTbl_produtoInput>, Prisma.tbl_tipo_produtoUncheckedUpdateWithoutTbl_produtoInput>;
};
export type tbl_tipo_produtoCreateWithoutTbl_produtoInput = {
    tipo_produto_id: number;
    tipo?: string | null;
};
export type tbl_tipo_produtoUncheckedCreateWithoutTbl_produtoInput = {
    tipo_produto_id: number;
    tipo?: string | null;
};
export type tbl_tipo_produtoCreateOrConnectWithoutTbl_produtoInput = {
    where: Prisma.tbl_tipo_produtoWhereUniqueInput;
    create: Prisma.XOR<Prisma.tbl_tipo_produtoCreateWithoutTbl_produtoInput, Prisma.tbl_tipo_produtoUncheckedCreateWithoutTbl_produtoInput>;
};
export type tbl_tipo_produtoUpsertWithoutTbl_produtoInput = {
    update: Prisma.XOR<Prisma.tbl_tipo_produtoUpdateWithoutTbl_produtoInput, Prisma.tbl_tipo_produtoUncheckedUpdateWithoutTbl_produtoInput>;
    create: Prisma.XOR<Prisma.tbl_tipo_produtoCreateWithoutTbl_produtoInput, Prisma.tbl_tipo_produtoUncheckedCreateWithoutTbl_produtoInput>;
    where?: Prisma.tbl_tipo_produtoWhereInput;
};
export type tbl_tipo_produtoUpdateToOneWithWhereWithoutTbl_produtoInput = {
    where?: Prisma.tbl_tipo_produtoWhereInput;
    data: Prisma.XOR<Prisma.tbl_tipo_produtoUpdateWithoutTbl_produtoInput, Prisma.tbl_tipo_produtoUncheckedUpdateWithoutTbl_produtoInput>;
};
export type tbl_tipo_produtoUpdateWithoutTbl_produtoInput = {
    tipo_produto_id?: Prisma.IntFieldUpdateOperationsInput | number;
    tipo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type tbl_tipo_produtoUncheckedUpdateWithoutTbl_produtoInput = {
    tipo_produto_id?: Prisma.IntFieldUpdateOperationsInput | number;
    tipo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
/**
 * Count Type Tbl_tipo_produtoCountOutputType
 */
export type Tbl_tipo_produtoCountOutputType = {
    tbl_produto: number;
};
export type Tbl_tipo_produtoCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tbl_produto?: boolean | Tbl_tipo_produtoCountOutputTypeCountTbl_produtoArgs;
};
/**
 * Tbl_tipo_produtoCountOutputType without action
 */
export type Tbl_tipo_produtoCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tbl_tipo_produtoCountOutputType
     */
    select?: Prisma.Tbl_tipo_produtoCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * Tbl_tipo_produtoCountOutputType without action
 */
export type Tbl_tipo_produtoCountOutputTypeCountTbl_produtoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.tbl_produtoWhereInput;
};
export type tbl_tipo_produtoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    tipo_produto_id?: boolean;
    tipo?: boolean;
    tbl_produto?: boolean | Prisma.tbl_tipo_produto$tbl_produtoArgs<ExtArgs>;
    _count?: boolean | Prisma.Tbl_tipo_produtoCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["tbl_tipo_produto"]>;
export type tbl_tipo_produtoSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    tipo_produto_id?: boolean;
    tipo?: boolean;
}, ExtArgs["result"]["tbl_tipo_produto"]>;
export type tbl_tipo_produtoSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    tipo_produto_id?: boolean;
    tipo?: boolean;
}, ExtArgs["result"]["tbl_tipo_produto"]>;
export type tbl_tipo_produtoSelectScalar = {
    tipo_produto_id?: boolean;
    tipo?: boolean;
};
export type tbl_tipo_produtoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"tipo_produto_id" | "tipo", ExtArgs["result"]["tbl_tipo_produto"]>;
export type tbl_tipo_produtoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tbl_produto?: boolean | Prisma.tbl_tipo_produto$tbl_produtoArgs<ExtArgs>;
    _count?: boolean | Prisma.Tbl_tipo_produtoCountOutputTypeDefaultArgs<ExtArgs>;
};
export type tbl_tipo_produtoIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type tbl_tipo_produtoIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $tbl_tipo_produtoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "tbl_tipo_produto";
    objects: {
        tbl_produto: Prisma.$tbl_produtoPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        tipo_produto_id: number;
        tipo: string | null;
    }, ExtArgs["result"]["tbl_tipo_produto"]>;
    composites: {};
};
export type tbl_tipo_produtoGetPayload<S extends boolean | null | undefined | tbl_tipo_produtoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$tbl_tipo_produtoPayload, S>;
export type tbl_tipo_produtoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<tbl_tipo_produtoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Tbl_tipo_produtoCountAggregateInputType | true;
};
export interface tbl_tipo_produtoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['tbl_tipo_produto'];
        meta: {
            name: 'tbl_tipo_produto';
        };
    };
    /**
     * Find zero or one Tbl_tipo_produto that matches the filter.
     * @param {tbl_tipo_produtoFindUniqueArgs} args - Arguments to find a Tbl_tipo_produto
     * @example
     * // Get one Tbl_tipo_produto
     * const tbl_tipo_produto = await prisma.tbl_tipo_produto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tbl_tipo_produtoFindUniqueArgs>(args: Prisma.SelectSubset<T, tbl_tipo_produtoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__tbl_tipo_produtoClient<runtime.Types.Result.GetResult<Prisma.$tbl_tipo_produtoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Tbl_tipo_produto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tbl_tipo_produtoFindUniqueOrThrowArgs} args - Arguments to find a Tbl_tipo_produto
     * @example
     * // Get one Tbl_tipo_produto
     * const tbl_tipo_produto = await prisma.tbl_tipo_produto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tbl_tipo_produtoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, tbl_tipo_produtoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__tbl_tipo_produtoClient<runtime.Types.Result.GetResult<Prisma.$tbl_tipo_produtoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Tbl_tipo_produto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_tipo_produtoFindFirstArgs} args - Arguments to find a Tbl_tipo_produto
     * @example
     * // Get one Tbl_tipo_produto
     * const tbl_tipo_produto = await prisma.tbl_tipo_produto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tbl_tipo_produtoFindFirstArgs>(args?: Prisma.SelectSubset<T, tbl_tipo_produtoFindFirstArgs<ExtArgs>>): Prisma.Prisma__tbl_tipo_produtoClient<runtime.Types.Result.GetResult<Prisma.$tbl_tipo_produtoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Tbl_tipo_produto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_tipo_produtoFindFirstOrThrowArgs} args - Arguments to find a Tbl_tipo_produto
     * @example
     * // Get one Tbl_tipo_produto
     * const tbl_tipo_produto = await prisma.tbl_tipo_produto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tbl_tipo_produtoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, tbl_tipo_produtoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__tbl_tipo_produtoClient<runtime.Types.Result.GetResult<Prisma.$tbl_tipo_produtoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Tbl_tipo_produtos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_tipo_produtoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tbl_tipo_produtos
     * const tbl_tipo_produtos = await prisma.tbl_tipo_produto.findMany()
     *
     * // Get first 10 Tbl_tipo_produtos
     * const tbl_tipo_produtos = await prisma.tbl_tipo_produto.findMany({ take: 10 })
     *
     * // Only select the `tipo_produto_id`
     * const tbl_tipo_produtoWithTipo_produto_idOnly = await prisma.tbl_tipo_produto.findMany({ select: { tipo_produto_id: true } })
     *
     */
    findMany<T extends tbl_tipo_produtoFindManyArgs>(args?: Prisma.SelectSubset<T, tbl_tipo_produtoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$tbl_tipo_produtoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Tbl_tipo_produto.
     * @param {tbl_tipo_produtoCreateArgs} args - Arguments to create a Tbl_tipo_produto.
     * @example
     * // Create one Tbl_tipo_produto
     * const Tbl_tipo_produto = await prisma.tbl_tipo_produto.create({
     *   data: {
     *     // ... data to create a Tbl_tipo_produto
     *   }
     * })
     *
     */
    create<T extends tbl_tipo_produtoCreateArgs>(args: Prisma.SelectSubset<T, tbl_tipo_produtoCreateArgs<ExtArgs>>): Prisma.Prisma__tbl_tipo_produtoClient<runtime.Types.Result.GetResult<Prisma.$tbl_tipo_produtoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Tbl_tipo_produtos.
     * @param {tbl_tipo_produtoCreateManyArgs} args - Arguments to create many Tbl_tipo_produtos.
     * @example
     * // Create many Tbl_tipo_produtos
     * const tbl_tipo_produto = await prisma.tbl_tipo_produto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends tbl_tipo_produtoCreateManyArgs>(args?: Prisma.SelectSubset<T, tbl_tipo_produtoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Tbl_tipo_produtos and returns the data saved in the database.
     * @param {tbl_tipo_produtoCreateManyAndReturnArgs} args - Arguments to create many Tbl_tipo_produtos.
     * @example
     * // Create many Tbl_tipo_produtos
     * const tbl_tipo_produto = await prisma.tbl_tipo_produto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Tbl_tipo_produtos and only return the `tipo_produto_id`
     * const tbl_tipo_produtoWithTipo_produto_idOnly = await prisma.tbl_tipo_produto.createManyAndReturn({
     *   select: { tipo_produto_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends tbl_tipo_produtoCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, tbl_tipo_produtoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$tbl_tipo_produtoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Tbl_tipo_produto.
     * @param {tbl_tipo_produtoDeleteArgs} args - Arguments to delete one Tbl_tipo_produto.
     * @example
     * // Delete one Tbl_tipo_produto
     * const Tbl_tipo_produto = await prisma.tbl_tipo_produto.delete({
     *   where: {
     *     // ... filter to delete one Tbl_tipo_produto
     *   }
     * })
     *
     */
    delete<T extends tbl_tipo_produtoDeleteArgs>(args: Prisma.SelectSubset<T, tbl_tipo_produtoDeleteArgs<ExtArgs>>): Prisma.Prisma__tbl_tipo_produtoClient<runtime.Types.Result.GetResult<Prisma.$tbl_tipo_produtoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Tbl_tipo_produto.
     * @param {tbl_tipo_produtoUpdateArgs} args - Arguments to update one Tbl_tipo_produto.
     * @example
     * // Update one Tbl_tipo_produto
     * const tbl_tipo_produto = await prisma.tbl_tipo_produto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends tbl_tipo_produtoUpdateArgs>(args: Prisma.SelectSubset<T, tbl_tipo_produtoUpdateArgs<ExtArgs>>): Prisma.Prisma__tbl_tipo_produtoClient<runtime.Types.Result.GetResult<Prisma.$tbl_tipo_produtoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Tbl_tipo_produtos.
     * @param {tbl_tipo_produtoDeleteManyArgs} args - Arguments to filter Tbl_tipo_produtos to delete.
     * @example
     * // Delete a few Tbl_tipo_produtos
     * const { count } = await prisma.tbl_tipo_produto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends tbl_tipo_produtoDeleteManyArgs>(args?: Prisma.SelectSubset<T, tbl_tipo_produtoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Tbl_tipo_produtos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_tipo_produtoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tbl_tipo_produtos
     * const tbl_tipo_produto = await prisma.tbl_tipo_produto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends tbl_tipo_produtoUpdateManyArgs>(args: Prisma.SelectSubset<T, tbl_tipo_produtoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Tbl_tipo_produtos and returns the data updated in the database.
     * @param {tbl_tipo_produtoUpdateManyAndReturnArgs} args - Arguments to update many Tbl_tipo_produtos.
     * @example
     * // Update many Tbl_tipo_produtos
     * const tbl_tipo_produto = await prisma.tbl_tipo_produto.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Tbl_tipo_produtos and only return the `tipo_produto_id`
     * const tbl_tipo_produtoWithTipo_produto_idOnly = await prisma.tbl_tipo_produto.updateManyAndReturn({
     *   select: { tipo_produto_id: true },
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
    updateManyAndReturn<T extends tbl_tipo_produtoUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, tbl_tipo_produtoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$tbl_tipo_produtoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Tbl_tipo_produto.
     * @param {tbl_tipo_produtoUpsertArgs} args - Arguments to update or create a Tbl_tipo_produto.
     * @example
     * // Update or create a Tbl_tipo_produto
     * const tbl_tipo_produto = await prisma.tbl_tipo_produto.upsert({
     *   create: {
     *     // ... data to create a Tbl_tipo_produto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tbl_tipo_produto we want to update
     *   }
     * })
     */
    upsert<T extends tbl_tipo_produtoUpsertArgs>(args: Prisma.SelectSubset<T, tbl_tipo_produtoUpsertArgs<ExtArgs>>): Prisma.Prisma__tbl_tipo_produtoClient<runtime.Types.Result.GetResult<Prisma.$tbl_tipo_produtoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Tbl_tipo_produtos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_tipo_produtoCountArgs} args - Arguments to filter Tbl_tipo_produtos to count.
     * @example
     * // Count the number of Tbl_tipo_produtos
     * const count = await prisma.tbl_tipo_produto.count({
     *   where: {
     *     // ... the filter for the Tbl_tipo_produtos we want to count
     *   }
     * })
    **/
    count<T extends tbl_tipo_produtoCountArgs>(args?: Prisma.Subset<T, tbl_tipo_produtoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Tbl_tipo_produtoCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Tbl_tipo_produto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tbl_tipo_produtoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tbl_tipo_produtoAggregateArgs>(args: Prisma.Subset<T, Tbl_tipo_produtoAggregateArgs>): Prisma.PrismaPromise<GetTbl_tipo_produtoAggregateType<T>>;
    /**
     * Group by Tbl_tipo_produto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_tipo_produtoGroupByArgs} args - Group by arguments.
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
    groupBy<T extends tbl_tipo_produtoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: tbl_tipo_produtoGroupByArgs['orderBy'];
    } : {
        orderBy?: tbl_tipo_produtoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, tbl_tipo_produtoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTbl_tipo_produtoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the tbl_tipo_produto model
     */
    readonly fields: tbl_tipo_produtoFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for tbl_tipo_produto.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__tbl_tipo_produtoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    tbl_produto<T extends Prisma.tbl_tipo_produto$tbl_produtoArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.tbl_tipo_produto$tbl_produtoArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$tbl_produtoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the tbl_tipo_produto model
 */
export interface tbl_tipo_produtoFieldRefs {
    readonly tipo_produto_id: Prisma.FieldRef<"tbl_tipo_produto", 'Int'>;
    readonly tipo: Prisma.FieldRef<"tbl_tipo_produto", 'String'>;
}
/**
 * tbl_tipo_produto findUnique
 */
export type tbl_tipo_produtoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which tbl_tipo_produto to fetch.
     */
    where: Prisma.tbl_tipo_produtoWhereUniqueInput;
};
/**
 * tbl_tipo_produto findUniqueOrThrow
 */
export type tbl_tipo_produtoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which tbl_tipo_produto to fetch.
     */
    where: Prisma.tbl_tipo_produtoWhereUniqueInput;
};
/**
 * tbl_tipo_produto findFirst
 */
export type tbl_tipo_produtoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which tbl_tipo_produto to fetch.
     */
    where?: Prisma.tbl_tipo_produtoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tbl_tipo_produtos to fetch.
     */
    orderBy?: Prisma.tbl_tipo_produtoOrderByWithRelationInput | Prisma.tbl_tipo_produtoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for tbl_tipo_produtos.
     */
    cursor?: Prisma.tbl_tipo_produtoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tbl_tipo_produtos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tbl_tipo_produtos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of tbl_tipo_produtos.
     */
    distinct?: Prisma.Tbl_tipo_produtoScalarFieldEnum | Prisma.Tbl_tipo_produtoScalarFieldEnum[];
};
/**
 * tbl_tipo_produto findFirstOrThrow
 */
export type tbl_tipo_produtoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which tbl_tipo_produto to fetch.
     */
    where?: Prisma.tbl_tipo_produtoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tbl_tipo_produtos to fetch.
     */
    orderBy?: Prisma.tbl_tipo_produtoOrderByWithRelationInput | Prisma.tbl_tipo_produtoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for tbl_tipo_produtos.
     */
    cursor?: Prisma.tbl_tipo_produtoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tbl_tipo_produtos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tbl_tipo_produtos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of tbl_tipo_produtos.
     */
    distinct?: Prisma.Tbl_tipo_produtoScalarFieldEnum | Prisma.Tbl_tipo_produtoScalarFieldEnum[];
};
/**
 * tbl_tipo_produto findMany
 */
export type tbl_tipo_produtoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which tbl_tipo_produtos to fetch.
     */
    where?: Prisma.tbl_tipo_produtoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tbl_tipo_produtos to fetch.
     */
    orderBy?: Prisma.tbl_tipo_produtoOrderByWithRelationInput | Prisma.tbl_tipo_produtoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing tbl_tipo_produtos.
     */
    cursor?: Prisma.tbl_tipo_produtoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tbl_tipo_produtos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tbl_tipo_produtos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of tbl_tipo_produtos.
     */
    distinct?: Prisma.Tbl_tipo_produtoScalarFieldEnum | Prisma.Tbl_tipo_produtoScalarFieldEnum[];
};
/**
 * tbl_tipo_produto create
 */
export type tbl_tipo_produtoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a tbl_tipo_produto.
     */
    data: Prisma.XOR<Prisma.tbl_tipo_produtoCreateInput, Prisma.tbl_tipo_produtoUncheckedCreateInput>;
};
/**
 * tbl_tipo_produto createMany
 */
export type tbl_tipo_produtoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many tbl_tipo_produtos.
     */
    data: Prisma.tbl_tipo_produtoCreateManyInput | Prisma.tbl_tipo_produtoCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * tbl_tipo_produto createManyAndReturn
 */
export type tbl_tipo_produtoCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_tipo_produto
     */
    select?: Prisma.tbl_tipo_produtoSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the tbl_tipo_produto
     */
    omit?: Prisma.tbl_tipo_produtoOmit<ExtArgs> | null;
    /**
     * The data used to create many tbl_tipo_produtos.
     */
    data: Prisma.tbl_tipo_produtoCreateManyInput | Prisma.tbl_tipo_produtoCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * tbl_tipo_produto update
 */
export type tbl_tipo_produtoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a tbl_tipo_produto.
     */
    data: Prisma.XOR<Prisma.tbl_tipo_produtoUpdateInput, Prisma.tbl_tipo_produtoUncheckedUpdateInput>;
    /**
     * Choose, which tbl_tipo_produto to update.
     */
    where: Prisma.tbl_tipo_produtoWhereUniqueInput;
};
/**
 * tbl_tipo_produto updateMany
 */
export type tbl_tipo_produtoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update tbl_tipo_produtos.
     */
    data: Prisma.XOR<Prisma.tbl_tipo_produtoUpdateManyMutationInput, Prisma.tbl_tipo_produtoUncheckedUpdateManyInput>;
    /**
     * Filter which tbl_tipo_produtos to update
     */
    where?: Prisma.tbl_tipo_produtoWhereInput;
    /**
     * Limit how many tbl_tipo_produtos to update.
     */
    limit?: number;
};
/**
 * tbl_tipo_produto updateManyAndReturn
 */
export type tbl_tipo_produtoUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_tipo_produto
     */
    select?: Prisma.tbl_tipo_produtoSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the tbl_tipo_produto
     */
    omit?: Prisma.tbl_tipo_produtoOmit<ExtArgs> | null;
    /**
     * The data used to update tbl_tipo_produtos.
     */
    data: Prisma.XOR<Prisma.tbl_tipo_produtoUpdateManyMutationInput, Prisma.tbl_tipo_produtoUncheckedUpdateManyInput>;
    /**
     * Filter which tbl_tipo_produtos to update
     */
    where?: Prisma.tbl_tipo_produtoWhereInput;
    /**
     * Limit how many tbl_tipo_produtos to update.
     */
    limit?: number;
};
/**
 * tbl_tipo_produto upsert
 */
export type tbl_tipo_produtoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the tbl_tipo_produto to update in case it exists.
     */
    where: Prisma.tbl_tipo_produtoWhereUniqueInput;
    /**
     * In case the tbl_tipo_produto found by the `where` argument doesn't exist, create a new tbl_tipo_produto with this data.
     */
    create: Prisma.XOR<Prisma.tbl_tipo_produtoCreateInput, Prisma.tbl_tipo_produtoUncheckedCreateInput>;
    /**
     * In case the tbl_tipo_produto was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.tbl_tipo_produtoUpdateInput, Prisma.tbl_tipo_produtoUncheckedUpdateInput>;
};
/**
 * tbl_tipo_produto delete
 */
export type tbl_tipo_produtoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which tbl_tipo_produto to delete.
     */
    where: Prisma.tbl_tipo_produtoWhereUniqueInput;
};
/**
 * tbl_tipo_produto deleteMany
 */
export type tbl_tipo_produtoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_tipo_produtos to delete
     */
    where?: Prisma.tbl_tipo_produtoWhereInput;
    /**
     * Limit how many tbl_tipo_produtos to delete.
     */
    limit?: number;
};
/**
 * tbl_tipo_produto.tbl_produto
 */
export type tbl_tipo_produto$tbl_produtoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.tbl_produtoWhereInput;
    orderBy?: Prisma.tbl_produtoOrderByWithRelationInput | Prisma.tbl_produtoOrderByWithRelationInput[];
    cursor?: Prisma.tbl_produtoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Tbl_produtoScalarFieldEnum | Prisma.Tbl_produtoScalarFieldEnum[];
};
/**
 * tbl_tipo_produto without action
 */
export type tbl_tipo_produtoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
//# sourceMappingURL=tbl_tipo_produto.d.ts.map