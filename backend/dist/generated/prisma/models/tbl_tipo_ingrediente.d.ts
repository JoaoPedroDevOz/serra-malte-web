import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.ts";
/**
 * Model tbl_tipo_ingrediente
 *
 */
export type tbl_tipo_ingredienteModel = runtime.Types.Result.DefaultSelection<Prisma.$tbl_tipo_ingredientePayload>;
export type AggregateTbl_tipo_ingrediente = {
    _count: Tbl_tipo_ingredienteCountAggregateOutputType | null;
    _avg: Tbl_tipo_ingredienteAvgAggregateOutputType | null;
    _sum: Tbl_tipo_ingredienteSumAggregateOutputType | null;
    _min: Tbl_tipo_ingredienteMinAggregateOutputType | null;
    _max: Tbl_tipo_ingredienteMaxAggregateOutputType | null;
};
export type Tbl_tipo_ingredienteAvgAggregateOutputType = {
    tipo_ingrediente_id: number | null;
};
export type Tbl_tipo_ingredienteSumAggregateOutputType = {
    tipo_ingrediente_id: number | null;
};
export type Tbl_tipo_ingredienteMinAggregateOutputType = {
    tipo_ingrediente_id: number | null;
    tipo: string | null;
};
export type Tbl_tipo_ingredienteMaxAggregateOutputType = {
    tipo_ingrediente_id: number | null;
    tipo: string | null;
};
export type Tbl_tipo_ingredienteCountAggregateOutputType = {
    tipo_ingrediente_id: number;
    tipo: number;
    _all: number;
};
export type Tbl_tipo_ingredienteAvgAggregateInputType = {
    tipo_ingrediente_id?: true;
};
export type Tbl_tipo_ingredienteSumAggregateInputType = {
    tipo_ingrediente_id?: true;
};
export type Tbl_tipo_ingredienteMinAggregateInputType = {
    tipo_ingrediente_id?: true;
    tipo?: true;
};
export type Tbl_tipo_ingredienteMaxAggregateInputType = {
    tipo_ingrediente_id?: true;
    tipo?: true;
};
export type Tbl_tipo_ingredienteCountAggregateInputType = {
    tipo_ingrediente_id?: true;
    tipo?: true;
    _all?: true;
};
export type Tbl_tipo_ingredienteAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_tipo_ingrediente to aggregate.
     */
    where?: Prisma.tbl_tipo_ingredienteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tbl_tipo_ingredientes to fetch.
     */
    orderBy?: Prisma.tbl_tipo_ingredienteOrderByWithRelationInput | Prisma.tbl_tipo_ingredienteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.tbl_tipo_ingredienteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tbl_tipo_ingredientes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tbl_tipo_ingredientes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned tbl_tipo_ingredientes
    **/
    _count?: true | Tbl_tipo_ingredienteCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: Tbl_tipo_ingredienteAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: Tbl_tipo_ingredienteSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: Tbl_tipo_ingredienteMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: Tbl_tipo_ingredienteMaxAggregateInputType;
};
export type GetTbl_tipo_ingredienteAggregateType<T extends Tbl_tipo_ingredienteAggregateArgs> = {
    [P in keyof T & keyof AggregateTbl_tipo_ingrediente]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTbl_tipo_ingrediente[P]> : Prisma.GetScalarType<T[P], AggregateTbl_tipo_ingrediente[P]>;
};
export type tbl_tipo_ingredienteGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.tbl_tipo_ingredienteWhereInput;
    orderBy?: Prisma.tbl_tipo_ingredienteOrderByWithAggregationInput | Prisma.tbl_tipo_ingredienteOrderByWithAggregationInput[];
    by: Prisma.Tbl_tipo_ingredienteScalarFieldEnum[] | Prisma.Tbl_tipo_ingredienteScalarFieldEnum;
    having?: Prisma.tbl_tipo_ingredienteScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Tbl_tipo_ingredienteCountAggregateInputType | true;
    _avg?: Tbl_tipo_ingredienteAvgAggregateInputType;
    _sum?: Tbl_tipo_ingredienteSumAggregateInputType;
    _min?: Tbl_tipo_ingredienteMinAggregateInputType;
    _max?: Tbl_tipo_ingredienteMaxAggregateInputType;
};
export type Tbl_tipo_ingredienteGroupByOutputType = {
    tipo_ingrediente_id: number;
    tipo: string | null;
    _count: Tbl_tipo_ingredienteCountAggregateOutputType | null;
    _avg: Tbl_tipo_ingredienteAvgAggregateOutputType | null;
    _sum: Tbl_tipo_ingredienteSumAggregateOutputType | null;
    _min: Tbl_tipo_ingredienteMinAggregateOutputType | null;
    _max: Tbl_tipo_ingredienteMaxAggregateOutputType | null;
};
export type GetTbl_tipo_ingredienteGroupByPayload<T extends tbl_tipo_ingredienteGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Tbl_tipo_ingredienteGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Tbl_tipo_ingredienteGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Tbl_tipo_ingredienteGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Tbl_tipo_ingredienteGroupByOutputType[P]>;
}>>;
export type tbl_tipo_ingredienteWhereInput = {
    AND?: Prisma.tbl_tipo_ingredienteWhereInput | Prisma.tbl_tipo_ingredienteWhereInput[];
    OR?: Prisma.tbl_tipo_ingredienteWhereInput[];
    NOT?: Prisma.tbl_tipo_ingredienteWhereInput | Prisma.tbl_tipo_ingredienteWhereInput[];
    tipo_ingrediente_id?: Prisma.IntFilter<"tbl_tipo_ingrediente"> | number;
    tipo?: Prisma.StringNullableFilter<"tbl_tipo_ingrediente"> | string | null;
    tbl_ingrediente?: Prisma.Tbl_ingredienteListRelationFilter;
};
export type tbl_tipo_ingredienteOrderByWithRelationInput = {
    tipo_ingrediente_id?: Prisma.SortOrder;
    tipo?: Prisma.SortOrderInput | Prisma.SortOrder;
    tbl_ingrediente?: Prisma.tbl_ingredienteOrderByRelationAggregateInput;
};
export type tbl_tipo_ingredienteWhereUniqueInput = Prisma.AtLeast<{
    tipo_ingrediente_id?: number;
    AND?: Prisma.tbl_tipo_ingredienteWhereInput | Prisma.tbl_tipo_ingredienteWhereInput[];
    OR?: Prisma.tbl_tipo_ingredienteWhereInput[];
    NOT?: Prisma.tbl_tipo_ingredienteWhereInput | Prisma.tbl_tipo_ingredienteWhereInput[];
    tipo?: Prisma.StringNullableFilter<"tbl_tipo_ingrediente"> | string | null;
    tbl_ingrediente?: Prisma.Tbl_ingredienteListRelationFilter;
}, "tipo_ingrediente_id">;
export type tbl_tipo_ingredienteOrderByWithAggregationInput = {
    tipo_ingrediente_id?: Prisma.SortOrder;
    tipo?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.tbl_tipo_ingredienteCountOrderByAggregateInput;
    _avg?: Prisma.tbl_tipo_ingredienteAvgOrderByAggregateInput;
    _max?: Prisma.tbl_tipo_ingredienteMaxOrderByAggregateInput;
    _min?: Prisma.tbl_tipo_ingredienteMinOrderByAggregateInput;
    _sum?: Prisma.tbl_tipo_ingredienteSumOrderByAggregateInput;
};
export type tbl_tipo_ingredienteScalarWhereWithAggregatesInput = {
    AND?: Prisma.tbl_tipo_ingredienteScalarWhereWithAggregatesInput | Prisma.tbl_tipo_ingredienteScalarWhereWithAggregatesInput[];
    OR?: Prisma.tbl_tipo_ingredienteScalarWhereWithAggregatesInput[];
    NOT?: Prisma.tbl_tipo_ingredienteScalarWhereWithAggregatesInput | Prisma.tbl_tipo_ingredienteScalarWhereWithAggregatesInput[];
    tipo_ingrediente_id?: Prisma.IntWithAggregatesFilter<"tbl_tipo_ingrediente"> | number;
    tipo?: Prisma.StringNullableWithAggregatesFilter<"tbl_tipo_ingrediente"> | string | null;
};
export type tbl_tipo_ingredienteCreateInput = {
    tipo_ingrediente_id: number;
    tipo?: string | null;
    tbl_ingrediente?: Prisma.tbl_ingredienteCreateNestedManyWithoutTbl_tipo_ingredienteInput;
};
export type tbl_tipo_ingredienteUncheckedCreateInput = {
    tipo_ingrediente_id: number;
    tipo?: string | null;
    tbl_ingrediente?: Prisma.tbl_ingredienteUncheckedCreateNestedManyWithoutTbl_tipo_ingredienteInput;
};
export type tbl_tipo_ingredienteUpdateInput = {
    tipo_ingrediente_id?: Prisma.IntFieldUpdateOperationsInput | number;
    tipo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tbl_ingrediente?: Prisma.tbl_ingredienteUpdateManyWithoutTbl_tipo_ingredienteNestedInput;
};
export type tbl_tipo_ingredienteUncheckedUpdateInput = {
    tipo_ingrediente_id?: Prisma.IntFieldUpdateOperationsInput | number;
    tipo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tbl_ingrediente?: Prisma.tbl_ingredienteUncheckedUpdateManyWithoutTbl_tipo_ingredienteNestedInput;
};
export type tbl_tipo_ingredienteCreateManyInput = {
    tipo_ingrediente_id: number;
    tipo?: string | null;
};
export type tbl_tipo_ingredienteUpdateManyMutationInput = {
    tipo_ingrediente_id?: Prisma.IntFieldUpdateOperationsInput | number;
    tipo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type tbl_tipo_ingredienteUncheckedUpdateManyInput = {
    tipo_ingrediente_id?: Prisma.IntFieldUpdateOperationsInput | number;
    tipo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type Tbl_tipo_ingredienteNullableScalarRelationFilter = {
    is?: Prisma.tbl_tipo_ingredienteWhereInput | null;
    isNot?: Prisma.tbl_tipo_ingredienteWhereInput | null;
};
export type tbl_tipo_ingredienteCountOrderByAggregateInput = {
    tipo_ingrediente_id?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
};
export type tbl_tipo_ingredienteAvgOrderByAggregateInput = {
    tipo_ingrediente_id?: Prisma.SortOrder;
};
export type tbl_tipo_ingredienteMaxOrderByAggregateInput = {
    tipo_ingrediente_id?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
};
export type tbl_tipo_ingredienteMinOrderByAggregateInput = {
    tipo_ingrediente_id?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
};
export type tbl_tipo_ingredienteSumOrderByAggregateInput = {
    tipo_ingrediente_id?: Prisma.SortOrder;
};
export type tbl_tipo_ingredienteCreateNestedOneWithoutTbl_ingredienteInput = {
    create?: Prisma.XOR<Prisma.tbl_tipo_ingredienteCreateWithoutTbl_ingredienteInput, Prisma.tbl_tipo_ingredienteUncheckedCreateWithoutTbl_ingredienteInput>;
    connectOrCreate?: Prisma.tbl_tipo_ingredienteCreateOrConnectWithoutTbl_ingredienteInput;
    connect?: Prisma.tbl_tipo_ingredienteWhereUniqueInput;
};
export type tbl_tipo_ingredienteUpdateOneWithoutTbl_ingredienteNestedInput = {
    create?: Prisma.XOR<Prisma.tbl_tipo_ingredienteCreateWithoutTbl_ingredienteInput, Prisma.tbl_tipo_ingredienteUncheckedCreateWithoutTbl_ingredienteInput>;
    connectOrCreate?: Prisma.tbl_tipo_ingredienteCreateOrConnectWithoutTbl_ingredienteInput;
    upsert?: Prisma.tbl_tipo_ingredienteUpsertWithoutTbl_ingredienteInput;
    disconnect?: Prisma.tbl_tipo_ingredienteWhereInput | boolean;
    delete?: Prisma.tbl_tipo_ingredienteWhereInput | boolean;
    connect?: Prisma.tbl_tipo_ingredienteWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.tbl_tipo_ingredienteUpdateToOneWithWhereWithoutTbl_ingredienteInput, Prisma.tbl_tipo_ingredienteUpdateWithoutTbl_ingredienteInput>, Prisma.tbl_tipo_ingredienteUncheckedUpdateWithoutTbl_ingredienteInput>;
};
export type tbl_tipo_ingredienteCreateWithoutTbl_ingredienteInput = {
    tipo_ingrediente_id: number;
    tipo?: string | null;
};
export type tbl_tipo_ingredienteUncheckedCreateWithoutTbl_ingredienteInput = {
    tipo_ingrediente_id: number;
    tipo?: string | null;
};
export type tbl_tipo_ingredienteCreateOrConnectWithoutTbl_ingredienteInput = {
    where: Prisma.tbl_tipo_ingredienteWhereUniqueInput;
    create: Prisma.XOR<Prisma.tbl_tipo_ingredienteCreateWithoutTbl_ingredienteInput, Prisma.tbl_tipo_ingredienteUncheckedCreateWithoutTbl_ingredienteInput>;
};
export type tbl_tipo_ingredienteUpsertWithoutTbl_ingredienteInput = {
    update: Prisma.XOR<Prisma.tbl_tipo_ingredienteUpdateWithoutTbl_ingredienteInput, Prisma.tbl_tipo_ingredienteUncheckedUpdateWithoutTbl_ingredienteInput>;
    create: Prisma.XOR<Prisma.tbl_tipo_ingredienteCreateWithoutTbl_ingredienteInput, Prisma.tbl_tipo_ingredienteUncheckedCreateWithoutTbl_ingredienteInput>;
    where?: Prisma.tbl_tipo_ingredienteWhereInput;
};
export type tbl_tipo_ingredienteUpdateToOneWithWhereWithoutTbl_ingredienteInput = {
    where?: Prisma.tbl_tipo_ingredienteWhereInput;
    data: Prisma.XOR<Prisma.tbl_tipo_ingredienteUpdateWithoutTbl_ingredienteInput, Prisma.tbl_tipo_ingredienteUncheckedUpdateWithoutTbl_ingredienteInput>;
};
export type tbl_tipo_ingredienteUpdateWithoutTbl_ingredienteInput = {
    tipo_ingrediente_id?: Prisma.IntFieldUpdateOperationsInput | number;
    tipo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type tbl_tipo_ingredienteUncheckedUpdateWithoutTbl_ingredienteInput = {
    tipo_ingrediente_id?: Prisma.IntFieldUpdateOperationsInput | number;
    tipo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
/**
 * Count Type Tbl_tipo_ingredienteCountOutputType
 */
export type Tbl_tipo_ingredienteCountOutputType = {
    tbl_ingrediente: number;
};
export type Tbl_tipo_ingredienteCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tbl_ingrediente?: boolean | Tbl_tipo_ingredienteCountOutputTypeCountTbl_ingredienteArgs;
};
/**
 * Tbl_tipo_ingredienteCountOutputType without action
 */
export type Tbl_tipo_ingredienteCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tbl_tipo_ingredienteCountOutputType
     */
    select?: Prisma.Tbl_tipo_ingredienteCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * Tbl_tipo_ingredienteCountOutputType without action
 */
export type Tbl_tipo_ingredienteCountOutputTypeCountTbl_ingredienteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.tbl_ingredienteWhereInput;
};
export type tbl_tipo_ingredienteSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    tipo_ingrediente_id?: boolean;
    tipo?: boolean;
    tbl_ingrediente?: boolean | Prisma.tbl_tipo_ingrediente$tbl_ingredienteArgs<ExtArgs>;
    _count?: boolean | Prisma.Tbl_tipo_ingredienteCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["tbl_tipo_ingrediente"]>;
export type tbl_tipo_ingredienteSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    tipo_ingrediente_id?: boolean;
    tipo?: boolean;
}, ExtArgs["result"]["tbl_tipo_ingrediente"]>;
export type tbl_tipo_ingredienteSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    tipo_ingrediente_id?: boolean;
    tipo?: boolean;
}, ExtArgs["result"]["tbl_tipo_ingrediente"]>;
export type tbl_tipo_ingredienteSelectScalar = {
    tipo_ingrediente_id?: boolean;
    tipo?: boolean;
};
export type tbl_tipo_ingredienteOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"tipo_ingrediente_id" | "tipo", ExtArgs["result"]["tbl_tipo_ingrediente"]>;
export type tbl_tipo_ingredienteInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tbl_ingrediente?: boolean | Prisma.tbl_tipo_ingrediente$tbl_ingredienteArgs<ExtArgs>;
    _count?: boolean | Prisma.Tbl_tipo_ingredienteCountOutputTypeDefaultArgs<ExtArgs>;
};
export type tbl_tipo_ingredienteIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type tbl_tipo_ingredienteIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $tbl_tipo_ingredientePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "tbl_tipo_ingrediente";
    objects: {
        tbl_ingrediente: Prisma.$tbl_ingredientePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        tipo_ingrediente_id: number;
        tipo: string | null;
    }, ExtArgs["result"]["tbl_tipo_ingrediente"]>;
    composites: {};
};
export type tbl_tipo_ingredienteGetPayload<S extends boolean | null | undefined | tbl_tipo_ingredienteDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$tbl_tipo_ingredientePayload, S>;
export type tbl_tipo_ingredienteCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<tbl_tipo_ingredienteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Tbl_tipo_ingredienteCountAggregateInputType | true;
};
export interface tbl_tipo_ingredienteDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['tbl_tipo_ingrediente'];
        meta: {
            name: 'tbl_tipo_ingrediente';
        };
    };
    /**
     * Find zero or one Tbl_tipo_ingrediente that matches the filter.
     * @param {tbl_tipo_ingredienteFindUniqueArgs} args - Arguments to find a Tbl_tipo_ingrediente
     * @example
     * // Get one Tbl_tipo_ingrediente
     * const tbl_tipo_ingrediente = await prisma.tbl_tipo_ingrediente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tbl_tipo_ingredienteFindUniqueArgs>(args: Prisma.SelectSubset<T, tbl_tipo_ingredienteFindUniqueArgs<ExtArgs>>): Prisma.Prisma__tbl_tipo_ingredienteClient<runtime.Types.Result.GetResult<Prisma.$tbl_tipo_ingredientePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Tbl_tipo_ingrediente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tbl_tipo_ingredienteFindUniqueOrThrowArgs} args - Arguments to find a Tbl_tipo_ingrediente
     * @example
     * // Get one Tbl_tipo_ingrediente
     * const tbl_tipo_ingrediente = await prisma.tbl_tipo_ingrediente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tbl_tipo_ingredienteFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, tbl_tipo_ingredienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__tbl_tipo_ingredienteClient<runtime.Types.Result.GetResult<Prisma.$tbl_tipo_ingredientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Tbl_tipo_ingrediente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_tipo_ingredienteFindFirstArgs} args - Arguments to find a Tbl_tipo_ingrediente
     * @example
     * // Get one Tbl_tipo_ingrediente
     * const tbl_tipo_ingrediente = await prisma.tbl_tipo_ingrediente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tbl_tipo_ingredienteFindFirstArgs>(args?: Prisma.SelectSubset<T, tbl_tipo_ingredienteFindFirstArgs<ExtArgs>>): Prisma.Prisma__tbl_tipo_ingredienteClient<runtime.Types.Result.GetResult<Prisma.$tbl_tipo_ingredientePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Tbl_tipo_ingrediente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_tipo_ingredienteFindFirstOrThrowArgs} args - Arguments to find a Tbl_tipo_ingrediente
     * @example
     * // Get one Tbl_tipo_ingrediente
     * const tbl_tipo_ingrediente = await prisma.tbl_tipo_ingrediente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tbl_tipo_ingredienteFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, tbl_tipo_ingredienteFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__tbl_tipo_ingredienteClient<runtime.Types.Result.GetResult<Prisma.$tbl_tipo_ingredientePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Tbl_tipo_ingredientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_tipo_ingredienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tbl_tipo_ingredientes
     * const tbl_tipo_ingredientes = await prisma.tbl_tipo_ingrediente.findMany()
     *
     * // Get first 10 Tbl_tipo_ingredientes
     * const tbl_tipo_ingredientes = await prisma.tbl_tipo_ingrediente.findMany({ take: 10 })
     *
     * // Only select the `tipo_ingrediente_id`
     * const tbl_tipo_ingredienteWithTipo_ingrediente_idOnly = await prisma.tbl_tipo_ingrediente.findMany({ select: { tipo_ingrediente_id: true } })
     *
     */
    findMany<T extends tbl_tipo_ingredienteFindManyArgs>(args?: Prisma.SelectSubset<T, tbl_tipo_ingredienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$tbl_tipo_ingredientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Tbl_tipo_ingrediente.
     * @param {tbl_tipo_ingredienteCreateArgs} args - Arguments to create a Tbl_tipo_ingrediente.
     * @example
     * // Create one Tbl_tipo_ingrediente
     * const Tbl_tipo_ingrediente = await prisma.tbl_tipo_ingrediente.create({
     *   data: {
     *     // ... data to create a Tbl_tipo_ingrediente
     *   }
     * })
     *
     */
    create<T extends tbl_tipo_ingredienteCreateArgs>(args: Prisma.SelectSubset<T, tbl_tipo_ingredienteCreateArgs<ExtArgs>>): Prisma.Prisma__tbl_tipo_ingredienteClient<runtime.Types.Result.GetResult<Prisma.$tbl_tipo_ingredientePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Tbl_tipo_ingredientes.
     * @param {tbl_tipo_ingredienteCreateManyArgs} args - Arguments to create many Tbl_tipo_ingredientes.
     * @example
     * // Create many Tbl_tipo_ingredientes
     * const tbl_tipo_ingrediente = await prisma.tbl_tipo_ingrediente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends tbl_tipo_ingredienteCreateManyArgs>(args?: Prisma.SelectSubset<T, tbl_tipo_ingredienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Tbl_tipo_ingredientes and returns the data saved in the database.
     * @param {tbl_tipo_ingredienteCreateManyAndReturnArgs} args - Arguments to create many Tbl_tipo_ingredientes.
     * @example
     * // Create many Tbl_tipo_ingredientes
     * const tbl_tipo_ingrediente = await prisma.tbl_tipo_ingrediente.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Tbl_tipo_ingredientes and only return the `tipo_ingrediente_id`
     * const tbl_tipo_ingredienteWithTipo_ingrediente_idOnly = await prisma.tbl_tipo_ingrediente.createManyAndReturn({
     *   select: { tipo_ingrediente_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends tbl_tipo_ingredienteCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, tbl_tipo_ingredienteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$tbl_tipo_ingredientePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Tbl_tipo_ingrediente.
     * @param {tbl_tipo_ingredienteDeleteArgs} args - Arguments to delete one Tbl_tipo_ingrediente.
     * @example
     * // Delete one Tbl_tipo_ingrediente
     * const Tbl_tipo_ingrediente = await prisma.tbl_tipo_ingrediente.delete({
     *   where: {
     *     // ... filter to delete one Tbl_tipo_ingrediente
     *   }
     * })
     *
     */
    delete<T extends tbl_tipo_ingredienteDeleteArgs>(args: Prisma.SelectSubset<T, tbl_tipo_ingredienteDeleteArgs<ExtArgs>>): Prisma.Prisma__tbl_tipo_ingredienteClient<runtime.Types.Result.GetResult<Prisma.$tbl_tipo_ingredientePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Tbl_tipo_ingrediente.
     * @param {tbl_tipo_ingredienteUpdateArgs} args - Arguments to update one Tbl_tipo_ingrediente.
     * @example
     * // Update one Tbl_tipo_ingrediente
     * const tbl_tipo_ingrediente = await prisma.tbl_tipo_ingrediente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends tbl_tipo_ingredienteUpdateArgs>(args: Prisma.SelectSubset<T, tbl_tipo_ingredienteUpdateArgs<ExtArgs>>): Prisma.Prisma__tbl_tipo_ingredienteClient<runtime.Types.Result.GetResult<Prisma.$tbl_tipo_ingredientePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Tbl_tipo_ingredientes.
     * @param {tbl_tipo_ingredienteDeleteManyArgs} args - Arguments to filter Tbl_tipo_ingredientes to delete.
     * @example
     * // Delete a few Tbl_tipo_ingredientes
     * const { count } = await prisma.tbl_tipo_ingrediente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends tbl_tipo_ingredienteDeleteManyArgs>(args?: Prisma.SelectSubset<T, tbl_tipo_ingredienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Tbl_tipo_ingredientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_tipo_ingredienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tbl_tipo_ingredientes
     * const tbl_tipo_ingrediente = await prisma.tbl_tipo_ingrediente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends tbl_tipo_ingredienteUpdateManyArgs>(args: Prisma.SelectSubset<T, tbl_tipo_ingredienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Tbl_tipo_ingredientes and returns the data updated in the database.
     * @param {tbl_tipo_ingredienteUpdateManyAndReturnArgs} args - Arguments to update many Tbl_tipo_ingredientes.
     * @example
     * // Update many Tbl_tipo_ingredientes
     * const tbl_tipo_ingrediente = await prisma.tbl_tipo_ingrediente.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Tbl_tipo_ingredientes and only return the `tipo_ingrediente_id`
     * const tbl_tipo_ingredienteWithTipo_ingrediente_idOnly = await prisma.tbl_tipo_ingrediente.updateManyAndReturn({
     *   select: { tipo_ingrediente_id: true },
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
    updateManyAndReturn<T extends tbl_tipo_ingredienteUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, tbl_tipo_ingredienteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$tbl_tipo_ingredientePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Tbl_tipo_ingrediente.
     * @param {tbl_tipo_ingredienteUpsertArgs} args - Arguments to update or create a Tbl_tipo_ingrediente.
     * @example
     * // Update or create a Tbl_tipo_ingrediente
     * const tbl_tipo_ingrediente = await prisma.tbl_tipo_ingrediente.upsert({
     *   create: {
     *     // ... data to create a Tbl_tipo_ingrediente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tbl_tipo_ingrediente we want to update
     *   }
     * })
     */
    upsert<T extends tbl_tipo_ingredienteUpsertArgs>(args: Prisma.SelectSubset<T, tbl_tipo_ingredienteUpsertArgs<ExtArgs>>): Prisma.Prisma__tbl_tipo_ingredienteClient<runtime.Types.Result.GetResult<Prisma.$tbl_tipo_ingredientePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Tbl_tipo_ingredientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_tipo_ingredienteCountArgs} args - Arguments to filter Tbl_tipo_ingredientes to count.
     * @example
     * // Count the number of Tbl_tipo_ingredientes
     * const count = await prisma.tbl_tipo_ingrediente.count({
     *   where: {
     *     // ... the filter for the Tbl_tipo_ingredientes we want to count
     *   }
     * })
    **/
    count<T extends tbl_tipo_ingredienteCountArgs>(args?: Prisma.Subset<T, tbl_tipo_ingredienteCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Tbl_tipo_ingredienteCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Tbl_tipo_ingrediente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tbl_tipo_ingredienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tbl_tipo_ingredienteAggregateArgs>(args: Prisma.Subset<T, Tbl_tipo_ingredienteAggregateArgs>): Prisma.PrismaPromise<GetTbl_tipo_ingredienteAggregateType<T>>;
    /**
     * Group by Tbl_tipo_ingrediente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_tipo_ingredienteGroupByArgs} args - Group by arguments.
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
    groupBy<T extends tbl_tipo_ingredienteGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: tbl_tipo_ingredienteGroupByArgs['orderBy'];
    } : {
        orderBy?: tbl_tipo_ingredienteGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, tbl_tipo_ingredienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTbl_tipo_ingredienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the tbl_tipo_ingrediente model
     */
    readonly fields: tbl_tipo_ingredienteFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for tbl_tipo_ingrediente.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__tbl_tipo_ingredienteClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    tbl_ingrediente<T extends Prisma.tbl_tipo_ingrediente$tbl_ingredienteArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.tbl_tipo_ingrediente$tbl_ingredienteArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$tbl_ingredientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the tbl_tipo_ingrediente model
 */
export interface tbl_tipo_ingredienteFieldRefs {
    readonly tipo_ingrediente_id: Prisma.FieldRef<"tbl_tipo_ingrediente", 'Int'>;
    readonly tipo: Prisma.FieldRef<"tbl_tipo_ingrediente", 'String'>;
}
/**
 * tbl_tipo_ingrediente findUnique
 */
export type tbl_tipo_ingredienteFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_tipo_ingrediente
     */
    select?: Prisma.tbl_tipo_ingredienteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the tbl_tipo_ingrediente
     */
    omit?: Prisma.tbl_tipo_ingredienteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.tbl_tipo_ingredienteInclude<ExtArgs> | null;
    /**
     * Filter, which tbl_tipo_ingrediente to fetch.
     */
    where: Prisma.tbl_tipo_ingredienteWhereUniqueInput;
};
/**
 * tbl_tipo_ingrediente findUniqueOrThrow
 */
export type tbl_tipo_ingredienteFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_tipo_ingrediente
     */
    select?: Prisma.tbl_tipo_ingredienteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the tbl_tipo_ingrediente
     */
    omit?: Prisma.tbl_tipo_ingredienteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.tbl_tipo_ingredienteInclude<ExtArgs> | null;
    /**
     * Filter, which tbl_tipo_ingrediente to fetch.
     */
    where: Prisma.tbl_tipo_ingredienteWhereUniqueInput;
};
/**
 * tbl_tipo_ingrediente findFirst
 */
export type tbl_tipo_ingredienteFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_tipo_ingrediente
     */
    select?: Prisma.tbl_tipo_ingredienteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the tbl_tipo_ingrediente
     */
    omit?: Prisma.tbl_tipo_ingredienteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.tbl_tipo_ingredienteInclude<ExtArgs> | null;
    /**
     * Filter, which tbl_tipo_ingrediente to fetch.
     */
    where?: Prisma.tbl_tipo_ingredienteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tbl_tipo_ingredientes to fetch.
     */
    orderBy?: Prisma.tbl_tipo_ingredienteOrderByWithRelationInput | Prisma.tbl_tipo_ingredienteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for tbl_tipo_ingredientes.
     */
    cursor?: Prisma.tbl_tipo_ingredienteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tbl_tipo_ingredientes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tbl_tipo_ingredientes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of tbl_tipo_ingredientes.
     */
    distinct?: Prisma.Tbl_tipo_ingredienteScalarFieldEnum | Prisma.Tbl_tipo_ingredienteScalarFieldEnum[];
};
/**
 * tbl_tipo_ingrediente findFirstOrThrow
 */
export type tbl_tipo_ingredienteFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_tipo_ingrediente
     */
    select?: Prisma.tbl_tipo_ingredienteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the tbl_tipo_ingrediente
     */
    omit?: Prisma.tbl_tipo_ingredienteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.tbl_tipo_ingredienteInclude<ExtArgs> | null;
    /**
     * Filter, which tbl_tipo_ingrediente to fetch.
     */
    where?: Prisma.tbl_tipo_ingredienteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tbl_tipo_ingredientes to fetch.
     */
    orderBy?: Prisma.tbl_tipo_ingredienteOrderByWithRelationInput | Prisma.tbl_tipo_ingredienteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for tbl_tipo_ingredientes.
     */
    cursor?: Prisma.tbl_tipo_ingredienteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tbl_tipo_ingredientes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tbl_tipo_ingredientes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of tbl_tipo_ingredientes.
     */
    distinct?: Prisma.Tbl_tipo_ingredienteScalarFieldEnum | Prisma.Tbl_tipo_ingredienteScalarFieldEnum[];
};
/**
 * tbl_tipo_ingrediente findMany
 */
export type tbl_tipo_ingredienteFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_tipo_ingrediente
     */
    select?: Prisma.tbl_tipo_ingredienteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the tbl_tipo_ingrediente
     */
    omit?: Prisma.tbl_tipo_ingredienteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.tbl_tipo_ingredienteInclude<ExtArgs> | null;
    /**
     * Filter, which tbl_tipo_ingredientes to fetch.
     */
    where?: Prisma.tbl_tipo_ingredienteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tbl_tipo_ingredientes to fetch.
     */
    orderBy?: Prisma.tbl_tipo_ingredienteOrderByWithRelationInput | Prisma.tbl_tipo_ingredienteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing tbl_tipo_ingredientes.
     */
    cursor?: Prisma.tbl_tipo_ingredienteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tbl_tipo_ingredientes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tbl_tipo_ingredientes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of tbl_tipo_ingredientes.
     */
    distinct?: Prisma.Tbl_tipo_ingredienteScalarFieldEnum | Prisma.Tbl_tipo_ingredienteScalarFieldEnum[];
};
/**
 * tbl_tipo_ingrediente create
 */
export type tbl_tipo_ingredienteCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_tipo_ingrediente
     */
    select?: Prisma.tbl_tipo_ingredienteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the tbl_tipo_ingrediente
     */
    omit?: Prisma.tbl_tipo_ingredienteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.tbl_tipo_ingredienteInclude<ExtArgs> | null;
    /**
     * The data needed to create a tbl_tipo_ingrediente.
     */
    data: Prisma.XOR<Prisma.tbl_tipo_ingredienteCreateInput, Prisma.tbl_tipo_ingredienteUncheckedCreateInput>;
};
/**
 * tbl_tipo_ingrediente createMany
 */
export type tbl_tipo_ingredienteCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many tbl_tipo_ingredientes.
     */
    data: Prisma.tbl_tipo_ingredienteCreateManyInput | Prisma.tbl_tipo_ingredienteCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * tbl_tipo_ingrediente createManyAndReturn
 */
export type tbl_tipo_ingredienteCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_tipo_ingrediente
     */
    select?: Prisma.tbl_tipo_ingredienteSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the tbl_tipo_ingrediente
     */
    omit?: Prisma.tbl_tipo_ingredienteOmit<ExtArgs> | null;
    /**
     * The data used to create many tbl_tipo_ingredientes.
     */
    data: Prisma.tbl_tipo_ingredienteCreateManyInput | Prisma.tbl_tipo_ingredienteCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * tbl_tipo_ingrediente update
 */
export type tbl_tipo_ingredienteUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_tipo_ingrediente
     */
    select?: Prisma.tbl_tipo_ingredienteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the tbl_tipo_ingrediente
     */
    omit?: Prisma.tbl_tipo_ingredienteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.tbl_tipo_ingredienteInclude<ExtArgs> | null;
    /**
     * The data needed to update a tbl_tipo_ingrediente.
     */
    data: Prisma.XOR<Prisma.tbl_tipo_ingredienteUpdateInput, Prisma.tbl_tipo_ingredienteUncheckedUpdateInput>;
    /**
     * Choose, which tbl_tipo_ingrediente to update.
     */
    where: Prisma.tbl_tipo_ingredienteWhereUniqueInput;
};
/**
 * tbl_tipo_ingrediente updateMany
 */
export type tbl_tipo_ingredienteUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update tbl_tipo_ingredientes.
     */
    data: Prisma.XOR<Prisma.tbl_tipo_ingredienteUpdateManyMutationInput, Prisma.tbl_tipo_ingredienteUncheckedUpdateManyInput>;
    /**
     * Filter which tbl_tipo_ingredientes to update
     */
    where?: Prisma.tbl_tipo_ingredienteWhereInput;
    /**
     * Limit how many tbl_tipo_ingredientes to update.
     */
    limit?: number;
};
/**
 * tbl_tipo_ingrediente updateManyAndReturn
 */
export type tbl_tipo_ingredienteUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_tipo_ingrediente
     */
    select?: Prisma.tbl_tipo_ingredienteSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the tbl_tipo_ingrediente
     */
    omit?: Prisma.tbl_tipo_ingredienteOmit<ExtArgs> | null;
    /**
     * The data used to update tbl_tipo_ingredientes.
     */
    data: Prisma.XOR<Prisma.tbl_tipo_ingredienteUpdateManyMutationInput, Prisma.tbl_tipo_ingredienteUncheckedUpdateManyInput>;
    /**
     * Filter which tbl_tipo_ingredientes to update
     */
    where?: Prisma.tbl_tipo_ingredienteWhereInput;
    /**
     * Limit how many tbl_tipo_ingredientes to update.
     */
    limit?: number;
};
/**
 * tbl_tipo_ingrediente upsert
 */
export type tbl_tipo_ingredienteUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_tipo_ingrediente
     */
    select?: Prisma.tbl_tipo_ingredienteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the tbl_tipo_ingrediente
     */
    omit?: Prisma.tbl_tipo_ingredienteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.tbl_tipo_ingredienteInclude<ExtArgs> | null;
    /**
     * The filter to search for the tbl_tipo_ingrediente to update in case it exists.
     */
    where: Prisma.tbl_tipo_ingredienteWhereUniqueInput;
    /**
     * In case the tbl_tipo_ingrediente found by the `where` argument doesn't exist, create a new tbl_tipo_ingrediente with this data.
     */
    create: Prisma.XOR<Prisma.tbl_tipo_ingredienteCreateInput, Prisma.tbl_tipo_ingredienteUncheckedCreateInput>;
    /**
     * In case the tbl_tipo_ingrediente was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.tbl_tipo_ingredienteUpdateInput, Prisma.tbl_tipo_ingredienteUncheckedUpdateInput>;
};
/**
 * tbl_tipo_ingrediente delete
 */
export type tbl_tipo_ingredienteDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_tipo_ingrediente
     */
    select?: Prisma.tbl_tipo_ingredienteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the tbl_tipo_ingrediente
     */
    omit?: Prisma.tbl_tipo_ingredienteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.tbl_tipo_ingredienteInclude<ExtArgs> | null;
    /**
     * Filter which tbl_tipo_ingrediente to delete.
     */
    where: Prisma.tbl_tipo_ingredienteWhereUniqueInput;
};
/**
 * tbl_tipo_ingrediente deleteMany
 */
export type tbl_tipo_ingredienteDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_tipo_ingredientes to delete
     */
    where?: Prisma.tbl_tipo_ingredienteWhereInput;
    /**
     * Limit how many tbl_tipo_ingredientes to delete.
     */
    limit?: number;
};
/**
 * tbl_tipo_ingrediente.tbl_ingrediente
 */
export type tbl_tipo_ingrediente$tbl_ingredienteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.tbl_ingredienteWhereInput;
    orderBy?: Prisma.tbl_ingredienteOrderByWithRelationInput | Prisma.tbl_ingredienteOrderByWithRelationInput[];
    cursor?: Prisma.tbl_ingredienteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Tbl_ingredienteScalarFieldEnum | Prisma.Tbl_ingredienteScalarFieldEnum[];
};
/**
 * tbl_tipo_ingrediente without action
 */
export type tbl_tipo_ingredienteDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_tipo_ingrediente
     */
    select?: Prisma.tbl_tipo_ingredienteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the tbl_tipo_ingrediente
     */
    omit?: Prisma.tbl_tipo_ingredienteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.tbl_tipo_ingredienteInclude<ExtArgs> | null;
};
//# sourceMappingURL=tbl_tipo_ingrediente.d.ts.map