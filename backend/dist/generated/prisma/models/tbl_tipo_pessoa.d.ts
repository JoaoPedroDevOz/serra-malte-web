import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.ts";
/**
 * Model tbl_tipo_pessoa
 *
 */
export type tbl_tipo_pessoaModel = runtime.Types.Result.DefaultSelection<Prisma.$tbl_tipo_pessoaPayload>;
export type AggregateTbl_tipo_pessoa = {
    _count: Tbl_tipo_pessoaCountAggregateOutputType | null;
    _avg: Tbl_tipo_pessoaAvgAggregateOutputType | null;
    _sum: Tbl_tipo_pessoaSumAggregateOutputType | null;
    _min: Tbl_tipo_pessoaMinAggregateOutputType | null;
    _max: Tbl_tipo_pessoaMaxAggregateOutputType | null;
};
export type Tbl_tipo_pessoaAvgAggregateOutputType = {
    tipo_pessoa_id: number | null;
    tipo: number | null;
};
export type Tbl_tipo_pessoaSumAggregateOutputType = {
    tipo_pessoa_id: number | null;
    tipo: number | null;
};
export type Tbl_tipo_pessoaMinAggregateOutputType = {
    tipo_pessoa_id: number | null;
    tipo: number | null;
};
export type Tbl_tipo_pessoaMaxAggregateOutputType = {
    tipo_pessoa_id: number | null;
    tipo: number | null;
};
export type Tbl_tipo_pessoaCountAggregateOutputType = {
    tipo_pessoa_id: number;
    tipo: number;
    _all: number;
};
export type Tbl_tipo_pessoaAvgAggregateInputType = {
    tipo_pessoa_id?: true;
    tipo?: true;
};
export type Tbl_tipo_pessoaSumAggregateInputType = {
    tipo_pessoa_id?: true;
    tipo?: true;
};
export type Tbl_tipo_pessoaMinAggregateInputType = {
    tipo_pessoa_id?: true;
    tipo?: true;
};
export type Tbl_tipo_pessoaMaxAggregateInputType = {
    tipo_pessoa_id?: true;
    tipo?: true;
};
export type Tbl_tipo_pessoaCountAggregateInputType = {
    tipo_pessoa_id?: true;
    tipo?: true;
    _all?: true;
};
export type Tbl_tipo_pessoaAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_tipo_pessoa to aggregate.
     */
    where?: Prisma.tbl_tipo_pessoaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tbl_tipo_pessoas to fetch.
     */
    orderBy?: Prisma.tbl_tipo_pessoaOrderByWithRelationInput | Prisma.tbl_tipo_pessoaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.tbl_tipo_pessoaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tbl_tipo_pessoas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tbl_tipo_pessoas.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned tbl_tipo_pessoas
    **/
    _count?: true | Tbl_tipo_pessoaCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: Tbl_tipo_pessoaAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: Tbl_tipo_pessoaSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: Tbl_tipo_pessoaMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: Tbl_tipo_pessoaMaxAggregateInputType;
};
export type GetTbl_tipo_pessoaAggregateType<T extends Tbl_tipo_pessoaAggregateArgs> = {
    [P in keyof T & keyof AggregateTbl_tipo_pessoa]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTbl_tipo_pessoa[P]> : Prisma.GetScalarType<T[P], AggregateTbl_tipo_pessoa[P]>;
};
export type tbl_tipo_pessoaGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.tbl_tipo_pessoaWhereInput;
    orderBy?: Prisma.tbl_tipo_pessoaOrderByWithAggregationInput | Prisma.tbl_tipo_pessoaOrderByWithAggregationInput[];
    by: Prisma.Tbl_tipo_pessoaScalarFieldEnum[] | Prisma.Tbl_tipo_pessoaScalarFieldEnum;
    having?: Prisma.tbl_tipo_pessoaScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Tbl_tipo_pessoaCountAggregateInputType | true;
    _avg?: Tbl_tipo_pessoaAvgAggregateInputType;
    _sum?: Tbl_tipo_pessoaSumAggregateInputType;
    _min?: Tbl_tipo_pessoaMinAggregateInputType;
    _max?: Tbl_tipo_pessoaMaxAggregateInputType;
};
export type Tbl_tipo_pessoaGroupByOutputType = {
    tipo_pessoa_id: number;
    tipo: number | null;
    _count: Tbl_tipo_pessoaCountAggregateOutputType | null;
    _avg: Tbl_tipo_pessoaAvgAggregateOutputType | null;
    _sum: Tbl_tipo_pessoaSumAggregateOutputType | null;
    _min: Tbl_tipo_pessoaMinAggregateOutputType | null;
    _max: Tbl_tipo_pessoaMaxAggregateOutputType | null;
};
export type GetTbl_tipo_pessoaGroupByPayload<T extends tbl_tipo_pessoaGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Tbl_tipo_pessoaGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Tbl_tipo_pessoaGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Tbl_tipo_pessoaGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Tbl_tipo_pessoaGroupByOutputType[P]>;
}>>;
export type tbl_tipo_pessoaWhereInput = {
    AND?: Prisma.tbl_tipo_pessoaWhereInput | Prisma.tbl_tipo_pessoaWhereInput[];
    OR?: Prisma.tbl_tipo_pessoaWhereInput[];
    NOT?: Prisma.tbl_tipo_pessoaWhereInput | Prisma.tbl_tipo_pessoaWhereInput[];
    tipo_pessoa_id?: Prisma.IntFilter<"tbl_tipo_pessoa"> | number;
    tipo?: Prisma.IntNullableFilter<"tbl_tipo_pessoa"> | number | null;
    tbl_cliente?: Prisma.Tbl_clienteListRelationFilter;
};
export type tbl_tipo_pessoaOrderByWithRelationInput = {
    tipo_pessoa_id?: Prisma.SortOrder;
    tipo?: Prisma.SortOrderInput | Prisma.SortOrder;
    tbl_cliente?: Prisma.tbl_clienteOrderByRelationAggregateInput;
};
export type tbl_tipo_pessoaWhereUniqueInput = Prisma.AtLeast<{
    tipo_pessoa_id?: number;
    AND?: Prisma.tbl_tipo_pessoaWhereInput | Prisma.tbl_tipo_pessoaWhereInput[];
    OR?: Prisma.tbl_tipo_pessoaWhereInput[];
    NOT?: Prisma.tbl_tipo_pessoaWhereInput | Prisma.tbl_tipo_pessoaWhereInput[];
    tipo?: Prisma.IntNullableFilter<"tbl_tipo_pessoa"> | number | null;
    tbl_cliente?: Prisma.Tbl_clienteListRelationFilter;
}, "tipo_pessoa_id">;
export type tbl_tipo_pessoaOrderByWithAggregationInput = {
    tipo_pessoa_id?: Prisma.SortOrder;
    tipo?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.tbl_tipo_pessoaCountOrderByAggregateInput;
    _avg?: Prisma.tbl_tipo_pessoaAvgOrderByAggregateInput;
    _max?: Prisma.tbl_tipo_pessoaMaxOrderByAggregateInput;
    _min?: Prisma.tbl_tipo_pessoaMinOrderByAggregateInput;
    _sum?: Prisma.tbl_tipo_pessoaSumOrderByAggregateInput;
};
export type tbl_tipo_pessoaScalarWhereWithAggregatesInput = {
    AND?: Prisma.tbl_tipo_pessoaScalarWhereWithAggregatesInput | Prisma.tbl_tipo_pessoaScalarWhereWithAggregatesInput[];
    OR?: Prisma.tbl_tipo_pessoaScalarWhereWithAggregatesInput[];
    NOT?: Prisma.tbl_tipo_pessoaScalarWhereWithAggregatesInput | Prisma.tbl_tipo_pessoaScalarWhereWithAggregatesInput[];
    tipo_pessoa_id?: Prisma.IntWithAggregatesFilter<"tbl_tipo_pessoa"> | number;
    tipo?: Prisma.IntNullableWithAggregatesFilter<"tbl_tipo_pessoa"> | number | null;
};
export type tbl_tipo_pessoaCreateInput = {
    tipo_pessoa_id: number;
    tipo?: number | null;
    tbl_cliente?: Prisma.tbl_clienteCreateNestedManyWithoutTbl_tipo_pessoaInput;
};
export type tbl_tipo_pessoaUncheckedCreateInput = {
    tipo_pessoa_id: number;
    tipo?: number | null;
    tbl_cliente?: Prisma.tbl_clienteUncheckedCreateNestedManyWithoutTbl_tipo_pessoaInput;
};
export type tbl_tipo_pessoaUpdateInput = {
    tipo_pessoa_id?: Prisma.IntFieldUpdateOperationsInput | number;
    tipo?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    tbl_cliente?: Prisma.tbl_clienteUpdateManyWithoutTbl_tipo_pessoaNestedInput;
};
export type tbl_tipo_pessoaUncheckedUpdateInput = {
    tipo_pessoa_id?: Prisma.IntFieldUpdateOperationsInput | number;
    tipo?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    tbl_cliente?: Prisma.tbl_clienteUncheckedUpdateManyWithoutTbl_tipo_pessoaNestedInput;
};
export type tbl_tipo_pessoaCreateManyInput = {
    tipo_pessoa_id: number;
    tipo?: number | null;
};
export type tbl_tipo_pessoaUpdateManyMutationInput = {
    tipo_pessoa_id?: Prisma.IntFieldUpdateOperationsInput | number;
    tipo?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type tbl_tipo_pessoaUncheckedUpdateManyInput = {
    tipo_pessoa_id?: Prisma.IntFieldUpdateOperationsInput | number;
    tipo?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type Tbl_tipo_pessoaNullableScalarRelationFilter = {
    is?: Prisma.tbl_tipo_pessoaWhereInput | null;
    isNot?: Prisma.tbl_tipo_pessoaWhereInput | null;
};
export type tbl_tipo_pessoaCountOrderByAggregateInput = {
    tipo_pessoa_id?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
};
export type tbl_tipo_pessoaAvgOrderByAggregateInput = {
    tipo_pessoa_id?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
};
export type tbl_tipo_pessoaMaxOrderByAggregateInput = {
    tipo_pessoa_id?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
};
export type tbl_tipo_pessoaMinOrderByAggregateInput = {
    tipo_pessoa_id?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
};
export type tbl_tipo_pessoaSumOrderByAggregateInput = {
    tipo_pessoa_id?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
};
export type tbl_tipo_pessoaCreateNestedOneWithoutTbl_clienteInput = {
    create?: Prisma.XOR<Prisma.tbl_tipo_pessoaCreateWithoutTbl_clienteInput, Prisma.tbl_tipo_pessoaUncheckedCreateWithoutTbl_clienteInput>;
    connectOrCreate?: Prisma.tbl_tipo_pessoaCreateOrConnectWithoutTbl_clienteInput;
    connect?: Prisma.tbl_tipo_pessoaWhereUniqueInput;
};
export type tbl_tipo_pessoaUpdateOneWithoutTbl_clienteNestedInput = {
    create?: Prisma.XOR<Prisma.tbl_tipo_pessoaCreateWithoutTbl_clienteInput, Prisma.tbl_tipo_pessoaUncheckedCreateWithoutTbl_clienteInput>;
    connectOrCreate?: Prisma.tbl_tipo_pessoaCreateOrConnectWithoutTbl_clienteInput;
    upsert?: Prisma.tbl_tipo_pessoaUpsertWithoutTbl_clienteInput;
    disconnect?: Prisma.tbl_tipo_pessoaWhereInput | boolean;
    delete?: Prisma.tbl_tipo_pessoaWhereInput | boolean;
    connect?: Prisma.tbl_tipo_pessoaWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.tbl_tipo_pessoaUpdateToOneWithWhereWithoutTbl_clienteInput, Prisma.tbl_tipo_pessoaUpdateWithoutTbl_clienteInput>, Prisma.tbl_tipo_pessoaUncheckedUpdateWithoutTbl_clienteInput>;
};
export type tbl_tipo_pessoaCreateWithoutTbl_clienteInput = {
    tipo_pessoa_id: number;
    tipo?: number | null;
};
export type tbl_tipo_pessoaUncheckedCreateWithoutTbl_clienteInput = {
    tipo_pessoa_id: number;
    tipo?: number | null;
};
export type tbl_tipo_pessoaCreateOrConnectWithoutTbl_clienteInput = {
    where: Prisma.tbl_tipo_pessoaWhereUniqueInput;
    create: Prisma.XOR<Prisma.tbl_tipo_pessoaCreateWithoutTbl_clienteInput, Prisma.tbl_tipo_pessoaUncheckedCreateWithoutTbl_clienteInput>;
};
export type tbl_tipo_pessoaUpsertWithoutTbl_clienteInput = {
    update: Prisma.XOR<Prisma.tbl_tipo_pessoaUpdateWithoutTbl_clienteInput, Prisma.tbl_tipo_pessoaUncheckedUpdateWithoutTbl_clienteInput>;
    create: Prisma.XOR<Prisma.tbl_tipo_pessoaCreateWithoutTbl_clienteInput, Prisma.tbl_tipo_pessoaUncheckedCreateWithoutTbl_clienteInput>;
    where?: Prisma.tbl_tipo_pessoaWhereInput;
};
export type tbl_tipo_pessoaUpdateToOneWithWhereWithoutTbl_clienteInput = {
    where?: Prisma.tbl_tipo_pessoaWhereInput;
    data: Prisma.XOR<Prisma.tbl_tipo_pessoaUpdateWithoutTbl_clienteInput, Prisma.tbl_tipo_pessoaUncheckedUpdateWithoutTbl_clienteInput>;
};
export type tbl_tipo_pessoaUpdateWithoutTbl_clienteInput = {
    tipo_pessoa_id?: Prisma.IntFieldUpdateOperationsInput | number;
    tipo?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type tbl_tipo_pessoaUncheckedUpdateWithoutTbl_clienteInput = {
    tipo_pessoa_id?: Prisma.IntFieldUpdateOperationsInput | number;
    tipo?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
/**
 * Count Type Tbl_tipo_pessoaCountOutputType
 */
export type Tbl_tipo_pessoaCountOutputType = {
    tbl_cliente: number;
};
export type Tbl_tipo_pessoaCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tbl_cliente?: boolean | Tbl_tipo_pessoaCountOutputTypeCountTbl_clienteArgs;
};
/**
 * Tbl_tipo_pessoaCountOutputType without action
 */
export type Tbl_tipo_pessoaCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tbl_tipo_pessoaCountOutputType
     */
    select?: Prisma.Tbl_tipo_pessoaCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * Tbl_tipo_pessoaCountOutputType without action
 */
export type Tbl_tipo_pessoaCountOutputTypeCountTbl_clienteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.tbl_clienteWhereInput;
};
export type tbl_tipo_pessoaSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    tipo_pessoa_id?: boolean;
    tipo?: boolean;
    tbl_cliente?: boolean | Prisma.tbl_tipo_pessoa$tbl_clienteArgs<ExtArgs>;
    _count?: boolean | Prisma.Tbl_tipo_pessoaCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["tbl_tipo_pessoa"]>;
export type tbl_tipo_pessoaSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    tipo_pessoa_id?: boolean;
    tipo?: boolean;
}, ExtArgs["result"]["tbl_tipo_pessoa"]>;
export type tbl_tipo_pessoaSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    tipo_pessoa_id?: boolean;
    tipo?: boolean;
}, ExtArgs["result"]["tbl_tipo_pessoa"]>;
export type tbl_tipo_pessoaSelectScalar = {
    tipo_pessoa_id?: boolean;
    tipo?: boolean;
};
export type tbl_tipo_pessoaOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"tipo_pessoa_id" | "tipo", ExtArgs["result"]["tbl_tipo_pessoa"]>;
export type tbl_tipo_pessoaInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tbl_cliente?: boolean | Prisma.tbl_tipo_pessoa$tbl_clienteArgs<ExtArgs>;
    _count?: boolean | Prisma.Tbl_tipo_pessoaCountOutputTypeDefaultArgs<ExtArgs>;
};
export type tbl_tipo_pessoaIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type tbl_tipo_pessoaIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $tbl_tipo_pessoaPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "tbl_tipo_pessoa";
    objects: {
        tbl_cliente: Prisma.$tbl_clientePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        tipo_pessoa_id: number;
        tipo: number | null;
    }, ExtArgs["result"]["tbl_tipo_pessoa"]>;
    composites: {};
};
export type tbl_tipo_pessoaGetPayload<S extends boolean | null | undefined | tbl_tipo_pessoaDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$tbl_tipo_pessoaPayload, S>;
export type tbl_tipo_pessoaCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<tbl_tipo_pessoaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Tbl_tipo_pessoaCountAggregateInputType | true;
};
export interface tbl_tipo_pessoaDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['tbl_tipo_pessoa'];
        meta: {
            name: 'tbl_tipo_pessoa';
        };
    };
    /**
     * Find zero or one Tbl_tipo_pessoa that matches the filter.
     * @param {tbl_tipo_pessoaFindUniqueArgs} args - Arguments to find a Tbl_tipo_pessoa
     * @example
     * // Get one Tbl_tipo_pessoa
     * const tbl_tipo_pessoa = await prisma.tbl_tipo_pessoa.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tbl_tipo_pessoaFindUniqueArgs>(args: Prisma.SelectSubset<T, tbl_tipo_pessoaFindUniqueArgs<ExtArgs>>): Prisma.Prisma__tbl_tipo_pessoaClient<runtime.Types.Result.GetResult<Prisma.$tbl_tipo_pessoaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Tbl_tipo_pessoa that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tbl_tipo_pessoaFindUniqueOrThrowArgs} args - Arguments to find a Tbl_tipo_pessoa
     * @example
     * // Get one Tbl_tipo_pessoa
     * const tbl_tipo_pessoa = await prisma.tbl_tipo_pessoa.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tbl_tipo_pessoaFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, tbl_tipo_pessoaFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__tbl_tipo_pessoaClient<runtime.Types.Result.GetResult<Prisma.$tbl_tipo_pessoaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Tbl_tipo_pessoa that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_tipo_pessoaFindFirstArgs} args - Arguments to find a Tbl_tipo_pessoa
     * @example
     * // Get one Tbl_tipo_pessoa
     * const tbl_tipo_pessoa = await prisma.tbl_tipo_pessoa.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tbl_tipo_pessoaFindFirstArgs>(args?: Prisma.SelectSubset<T, tbl_tipo_pessoaFindFirstArgs<ExtArgs>>): Prisma.Prisma__tbl_tipo_pessoaClient<runtime.Types.Result.GetResult<Prisma.$tbl_tipo_pessoaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Tbl_tipo_pessoa that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_tipo_pessoaFindFirstOrThrowArgs} args - Arguments to find a Tbl_tipo_pessoa
     * @example
     * // Get one Tbl_tipo_pessoa
     * const tbl_tipo_pessoa = await prisma.tbl_tipo_pessoa.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tbl_tipo_pessoaFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, tbl_tipo_pessoaFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__tbl_tipo_pessoaClient<runtime.Types.Result.GetResult<Prisma.$tbl_tipo_pessoaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Tbl_tipo_pessoas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_tipo_pessoaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tbl_tipo_pessoas
     * const tbl_tipo_pessoas = await prisma.tbl_tipo_pessoa.findMany()
     *
     * // Get first 10 Tbl_tipo_pessoas
     * const tbl_tipo_pessoas = await prisma.tbl_tipo_pessoa.findMany({ take: 10 })
     *
     * // Only select the `tipo_pessoa_id`
     * const tbl_tipo_pessoaWithTipo_pessoa_idOnly = await prisma.tbl_tipo_pessoa.findMany({ select: { tipo_pessoa_id: true } })
     *
     */
    findMany<T extends tbl_tipo_pessoaFindManyArgs>(args?: Prisma.SelectSubset<T, tbl_tipo_pessoaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$tbl_tipo_pessoaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Tbl_tipo_pessoa.
     * @param {tbl_tipo_pessoaCreateArgs} args - Arguments to create a Tbl_tipo_pessoa.
     * @example
     * // Create one Tbl_tipo_pessoa
     * const Tbl_tipo_pessoa = await prisma.tbl_tipo_pessoa.create({
     *   data: {
     *     // ... data to create a Tbl_tipo_pessoa
     *   }
     * })
     *
     */
    create<T extends tbl_tipo_pessoaCreateArgs>(args: Prisma.SelectSubset<T, tbl_tipo_pessoaCreateArgs<ExtArgs>>): Prisma.Prisma__tbl_tipo_pessoaClient<runtime.Types.Result.GetResult<Prisma.$tbl_tipo_pessoaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Tbl_tipo_pessoas.
     * @param {tbl_tipo_pessoaCreateManyArgs} args - Arguments to create many Tbl_tipo_pessoas.
     * @example
     * // Create many Tbl_tipo_pessoas
     * const tbl_tipo_pessoa = await prisma.tbl_tipo_pessoa.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends tbl_tipo_pessoaCreateManyArgs>(args?: Prisma.SelectSubset<T, tbl_tipo_pessoaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Tbl_tipo_pessoas and returns the data saved in the database.
     * @param {tbl_tipo_pessoaCreateManyAndReturnArgs} args - Arguments to create many Tbl_tipo_pessoas.
     * @example
     * // Create many Tbl_tipo_pessoas
     * const tbl_tipo_pessoa = await prisma.tbl_tipo_pessoa.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Tbl_tipo_pessoas and only return the `tipo_pessoa_id`
     * const tbl_tipo_pessoaWithTipo_pessoa_idOnly = await prisma.tbl_tipo_pessoa.createManyAndReturn({
     *   select: { tipo_pessoa_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends tbl_tipo_pessoaCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, tbl_tipo_pessoaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$tbl_tipo_pessoaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Tbl_tipo_pessoa.
     * @param {tbl_tipo_pessoaDeleteArgs} args - Arguments to delete one Tbl_tipo_pessoa.
     * @example
     * // Delete one Tbl_tipo_pessoa
     * const Tbl_tipo_pessoa = await prisma.tbl_tipo_pessoa.delete({
     *   where: {
     *     // ... filter to delete one Tbl_tipo_pessoa
     *   }
     * })
     *
     */
    delete<T extends tbl_tipo_pessoaDeleteArgs>(args: Prisma.SelectSubset<T, tbl_tipo_pessoaDeleteArgs<ExtArgs>>): Prisma.Prisma__tbl_tipo_pessoaClient<runtime.Types.Result.GetResult<Prisma.$tbl_tipo_pessoaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Tbl_tipo_pessoa.
     * @param {tbl_tipo_pessoaUpdateArgs} args - Arguments to update one Tbl_tipo_pessoa.
     * @example
     * // Update one Tbl_tipo_pessoa
     * const tbl_tipo_pessoa = await prisma.tbl_tipo_pessoa.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends tbl_tipo_pessoaUpdateArgs>(args: Prisma.SelectSubset<T, tbl_tipo_pessoaUpdateArgs<ExtArgs>>): Prisma.Prisma__tbl_tipo_pessoaClient<runtime.Types.Result.GetResult<Prisma.$tbl_tipo_pessoaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Tbl_tipo_pessoas.
     * @param {tbl_tipo_pessoaDeleteManyArgs} args - Arguments to filter Tbl_tipo_pessoas to delete.
     * @example
     * // Delete a few Tbl_tipo_pessoas
     * const { count } = await prisma.tbl_tipo_pessoa.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends tbl_tipo_pessoaDeleteManyArgs>(args?: Prisma.SelectSubset<T, tbl_tipo_pessoaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Tbl_tipo_pessoas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_tipo_pessoaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tbl_tipo_pessoas
     * const tbl_tipo_pessoa = await prisma.tbl_tipo_pessoa.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends tbl_tipo_pessoaUpdateManyArgs>(args: Prisma.SelectSubset<T, tbl_tipo_pessoaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Tbl_tipo_pessoas and returns the data updated in the database.
     * @param {tbl_tipo_pessoaUpdateManyAndReturnArgs} args - Arguments to update many Tbl_tipo_pessoas.
     * @example
     * // Update many Tbl_tipo_pessoas
     * const tbl_tipo_pessoa = await prisma.tbl_tipo_pessoa.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Tbl_tipo_pessoas and only return the `tipo_pessoa_id`
     * const tbl_tipo_pessoaWithTipo_pessoa_idOnly = await prisma.tbl_tipo_pessoa.updateManyAndReturn({
     *   select: { tipo_pessoa_id: true },
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
    updateManyAndReturn<T extends tbl_tipo_pessoaUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, tbl_tipo_pessoaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$tbl_tipo_pessoaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Tbl_tipo_pessoa.
     * @param {tbl_tipo_pessoaUpsertArgs} args - Arguments to update or create a Tbl_tipo_pessoa.
     * @example
     * // Update or create a Tbl_tipo_pessoa
     * const tbl_tipo_pessoa = await prisma.tbl_tipo_pessoa.upsert({
     *   create: {
     *     // ... data to create a Tbl_tipo_pessoa
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tbl_tipo_pessoa we want to update
     *   }
     * })
     */
    upsert<T extends tbl_tipo_pessoaUpsertArgs>(args: Prisma.SelectSubset<T, tbl_tipo_pessoaUpsertArgs<ExtArgs>>): Prisma.Prisma__tbl_tipo_pessoaClient<runtime.Types.Result.GetResult<Prisma.$tbl_tipo_pessoaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Tbl_tipo_pessoas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_tipo_pessoaCountArgs} args - Arguments to filter Tbl_tipo_pessoas to count.
     * @example
     * // Count the number of Tbl_tipo_pessoas
     * const count = await prisma.tbl_tipo_pessoa.count({
     *   where: {
     *     // ... the filter for the Tbl_tipo_pessoas we want to count
     *   }
     * })
    **/
    count<T extends tbl_tipo_pessoaCountArgs>(args?: Prisma.Subset<T, tbl_tipo_pessoaCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Tbl_tipo_pessoaCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Tbl_tipo_pessoa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tbl_tipo_pessoaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tbl_tipo_pessoaAggregateArgs>(args: Prisma.Subset<T, Tbl_tipo_pessoaAggregateArgs>): Prisma.PrismaPromise<GetTbl_tipo_pessoaAggregateType<T>>;
    /**
     * Group by Tbl_tipo_pessoa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_tipo_pessoaGroupByArgs} args - Group by arguments.
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
    groupBy<T extends tbl_tipo_pessoaGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: tbl_tipo_pessoaGroupByArgs['orderBy'];
    } : {
        orderBy?: tbl_tipo_pessoaGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, tbl_tipo_pessoaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTbl_tipo_pessoaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the tbl_tipo_pessoa model
     */
    readonly fields: tbl_tipo_pessoaFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for tbl_tipo_pessoa.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__tbl_tipo_pessoaClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    tbl_cliente<T extends Prisma.tbl_tipo_pessoa$tbl_clienteArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.tbl_tipo_pessoa$tbl_clienteArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$tbl_clientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the tbl_tipo_pessoa model
 */
export interface tbl_tipo_pessoaFieldRefs {
    readonly tipo_pessoa_id: Prisma.FieldRef<"tbl_tipo_pessoa", 'Int'>;
    readonly tipo: Prisma.FieldRef<"tbl_tipo_pessoa", 'Int'>;
}
/**
 * tbl_tipo_pessoa findUnique
 */
export type tbl_tipo_pessoaFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_tipo_pessoa
     */
    select?: Prisma.tbl_tipo_pessoaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the tbl_tipo_pessoa
     */
    omit?: Prisma.tbl_tipo_pessoaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.tbl_tipo_pessoaInclude<ExtArgs> | null;
    /**
     * Filter, which tbl_tipo_pessoa to fetch.
     */
    where: Prisma.tbl_tipo_pessoaWhereUniqueInput;
};
/**
 * tbl_tipo_pessoa findUniqueOrThrow
 */
export type tbl_tipo_pessoaFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_tipo_pessoa
     */
    select?: Prisma.tbl_tipo_pessoaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the tbl_tipo_pessoa
     */
    omit?: Prisma.tbl_tipo_pessoaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.tbl_tipo_pessoaInclude<ExtArgs> | null;
    /**
     * Filter, which tbl_tipo_pessoa to fetch.
     */
    where: Prisma.tbl_tipo_pessoaWhereUniqueInput;
};
/**
 * tbl_tipo_pessoa findFirst
 */
export type tbl_tipo_pessoaFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_tipo_pessoa
     */
    select?: Prisma.tbl_tipo_pessoaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the tbl_tipo_pessoa
     */
    omit?: Prisma.tbl_tipo_pessoaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.tbl_tipo_pessoaInclude<ExtArgs> | null;
    /**
     * Filter, which tbl_tipo_pessoa to fetch.
     */
    where?: Prisma.tbl_tipo_pessoaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tbl_tipo_pessoas to fetch.
     */
    orderBy?: Prisma.tbl_tipo_pessoaOrderByWithRelationInput | Prisma.tbl_tipo_pessoaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for tbl_tipo_pessoas.
     */
    cursor?: Prisma.tbl_tipo_pessoaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tbl_tipo_pessoas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tbl_tipo_pessoas.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of tbl_tipo_pessoas.
     */
    distinct?: Prisma.Tbl_tipo_pessoaScalarFieldEnum | Prisma.Tbl_tipo_pessoaScalarFieldEnum[];
};
/**
 * tbl_tipo_pessoa findFirstOrThrow
 */
export type tbl_tipo_pessoaFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_tipo_pessoa
     */
    select?: Prisma.tbl_tipo_pessoaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the tbl_tipo_pessoa
     */
    omit?: Prisma.tbl_tipo_pessoaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.tbl_tipo_pessoaInclude<ExtArgs> | null;
    /**
     * Filter, which tbl_tipo_pessoa to fetch.
     */
    where?: Prisma.tbl_tipo_pessoaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tbl_tipo_pessoas to fetch.
     */
    orderBy?: Prisma.tbl_tipo_pessoaOrderByWithRelationInput | Prisma.tbl_tipo_pessoaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for tbl_tipo_pessoas.
     */
    cursor?: Prisma.tbl_tipo_pessoaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tbl_tipo_pessoas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tbl_tipo_pessoas.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of tbl_tipo_pessoas.
     */
    distinct?: Prisma.Tbl_tipo_pessoaScalarFieldEnum | Prisma.Tbl_tipo_pessoaScalarFieldEnum[];
};
/**
 * tbl_tipo_pessoa findMany
 */
export type tbl_tipo_pessoaFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_tipo_pessoa
     */
    select?: Prisma.tbl_tipo_pessoaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the tbl_tipo_pessoa
     */
    omit?: Prisma.tbl_tipo_pessoaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.tbl_tipo_pessoaInclude<ExtArgs> | null;
    /**
     * Filter, which tbl_tipo_pessoas to fetch.
     */
    where?: Prisma.tbl_tipo_pessoaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tbl_tipo_pessoas to fetch.
     */
    orderBy?: Prisma.tbl_tipo_pessoaOrderByWithRelationInput | Prisma.tbl_tipo_pessoaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing tbl_tipo_pessoas.
     */
    cursor?: Prisma.tbl_tipo_pessoaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tbl_tipo_pessoas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tbl_tipo_pessoas.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of tbl_tipo_pessoas.
     */
    distinct?: Prisma.Tbl_tipo_pessoaScalarFieldEnum | Prisma.Tbl_tipo_pessoaScalarFieldEnum[];
};
/**
 * tbl_tipo_pessoa create
 */
export type tbl_tipo_pessoaCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_tipo_pessoa
     */
    select?: Prisma.tbl_tipo_pessoaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the tbl_tipo_pessoa
     */
    omit?: Prisma.tbl_tipo_pessoaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.tbl_tipo_pessoaInclude<ExtArgs> | null;
    /**
     * The data needed to create a tbl_tipo_pessoa.
     */
    data: Prisma.XOR<Prisma.tbl_tipo_pessoaCreateInput, Prisma.tbl_tipo_pessoaUncheckedCreateInput>;
};
/**
 * tbl_tipo_pessoa createMany
 */
export type tbl_tipo_pessoaCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many tbl_tipo_pessoas.
     */
    data: Prisma.tbl_tipo_pessoaCreateManyInput | Prisma.tbl_tipo_pessoaCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * tbl_tipo_pessoa createManyAndReturn
 */
export type tbl_tipo_pessoaCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_tipo_pessoa
     */
    select?: Prisma.tbl_tipo_pessoaSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the tbl_tipo_pessoa
     */
    omit?: Prisma.tbl_tipo_pessoaOmit<ExtArgs> | null;
    /**
     * The data used to create many tbl_tipo_pessoas.
     */
    data: Prisma.tbl_tipo_pessoaCreateManyInput | Prisma.tbl_tipo_pessoaCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * tbl_tipo_pessoa update
 */
export type tbl_tipo_pessoaUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_tipo_pessoa
     */
    select?: Prisma.tbl_tipo_pessoaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the tbl_tipo_pessoa
     */
    omit?: Prisma.tbl_tipo_pessoaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.tbl_tipo_pessoaInclude<ExtArgs> | null;
    /**
     * The data needed to update a tbl_tipo_pessoa.
     */
    data: Prisma.XOR<Prisma.tbl_tipo_pessoaUpdateInput, Prisma.tbl_tipo_pessoaUncheckedUpdateInput>;
    /**
     * Choose, which tbl_tipo_pessoa to update.
     */
    where: Prisma.tbl_tipo_pessoaWhereUniqueInput;
};
/**
 * tbl_tipo_pessoa updateMany
 */
export type tbl_tipo_pessoaUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update tbl_tipo_pessoas.
     */
    data: Prisma.XOR<Prisma.tbl_tipo_pessoaUpdateManyMutationInput, Prisma.tbl_tipo_pessoaUncheckedUpdateManyInput>;
    /**
     * Filter which tbl_tipo_pessoas to update
     */
    where?: Prisma.tbl_tipo_pessoaWhereInput;
    /**
     * Limit how many tbl_tipo_pessoas to update.
     */
    limit?: number;
};
/**
 * tbl_tipo_pessoa updateManyAndReturn
 */
export type tbl_tipo_pessoaUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_tipo_pessoa
     */
    select?: Prisma.tbl_tipo_pessoaSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the tbl_tipo_pessoa
     */
    omit?: Prisma.tbl_tipo_pessoaOmit<ExtArgs> | null;
    /**
     * The data used to update tbl_tipo_pessoas.
     */
    data: Prisma.XOR<Prisma.tbl_tipo_pessoaUpdateManyMutationInput, Prisma.tbl_tipo_pessoaUncheckedUpdateManyInput>;
    /**
     * Filter which tbl_tipo_pessoas to update
     */
    where?: Prisma.tbl_tipo_pessoaWhereInput;
    /**
     * Limit how many tbl_tipo_pessoas to update.
     */
    limit?: number;
};
/**
 * tbl_tipo_pessoa upsert
 */
export type tbl_tipo_pessoaUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_tipo_pessoa
     */
    select?: Prisma.tbl_tipo_pessoaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the tbl_tipo_pessoa
     */
    omit?: Prisma.tbl_tipo_pessoaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.tbl_tipo_pessoaInclude<ExtArgs> | null;
    /**
     * The filter to search for the tbl_tipo_pessoa to update in case it exists.
     */
    where: Prisma.tbl_tipo_pessoaWhereUniqueInput;
    /**
     * In case the tbl_tipo_pessoa found by the `where` argument doesn't exist, create a new tbl_tipo_pessoa with this data.
     */
    create: Prisma.XOR<Prisma.tbl_tipo_pessoaCreateInput, Prisma.tbl_tipo_pessoaUncheckedCreateInput>;
    /**
     * In case the tbl_tipo_pessoa was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.tbl_tipo_pessoaUpdateInput, Prisma.tbl_tipo_pessoaUncheckedUpdateInput>;
};
/**
 * tbl_tipo_pessoa delete
 */
export type tbl_tipo_pessoaDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_tipo_pessoa
     */
    select?: Prisma.tbl_tipo_pessoaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the tbl_tipo_pessoa
     */
    omit?: Prisma.tbl_tipo_pessoaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.tbl_tipo_pessoaInclude<ExtArgs> | null;
    /**
     * Filter which tbl_tipo_pessoa to delete.
     */
    where: Prisma.tbl_tipo_pessoaWhereUniqueInput;
};
/**
 * tbl_tipo_pessoa deleteMany
 */
export type tbl_tipo_pessoaDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_tipo_pessoas to delete
     */
    where?: Prisma.tbl_tipo_pessoaWhereInput;
    /**
     * Limit how many tbl_tipo_pessoas to delete.
     */
    limit?: number;
};
/**
 * tbl_tipo_pessoa.tbl_cliente
 */
export type tbl_tipo_pessoa$tbl_clienteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_cliente
     */
    select?: Prisma.tbl_clienteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the tbl_cliente
     */
    omit?: Prisma.tbl_clienteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.tbl_clienteInclude<ExtArgs> | null;
    where?: Prisma.tbl_clienteWhereInput;
    orderBy?: Prisma.tbl_clienteOrderByWithRelationInput | Prisma.tbl_clienteOrderByWithRelationInput[];
    cursor?: Prisma.tbl_clienteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Tbl_clienteScalarFieldEnum | Prisma.Tbl_clienteScalarFieldEnum[];
};
/**
 * tbl_tipo_pessoa without action
 */
export type tbl_tipo_pessoaDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_tipo_pessoa
     */
    select?: Prisma.tbl_tipo_pessoaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the tbl_tipo_pessoa
     */
    omit?: Prisma.tbl_tipo_pessoaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.tbl_tipo_pessoaInclude<ExtArgs> | null;
};
//# sourceMappingURL=tbl_tipo_pessoa.d.ts.map