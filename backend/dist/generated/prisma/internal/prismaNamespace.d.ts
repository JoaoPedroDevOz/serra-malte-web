import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models.ts";
import { type PrismaClient } from "./class.ts";
export type * from '../models.ts';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
/**
 * Prisma Errors
 */
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
/**
 * Re-export of sql-template-tag
 */
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
/**
 * Decimal.js
 */
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
/**
* Extensions
*/
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
/**
 * Prisma Client JS version: 7.8.0
 * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
 */
export declare const prismaVersion: PrismaVersion;
/**
 * Utility Types
 */
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: runtime.DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: runtime.JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: runtime.AnyNullClass;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
/**
 * From T, pick a set of properties whose keys are in the union K
 */
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
/**
 * Subset
 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
 */
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
/**
 * SelectSubset
 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
 * Additionally, it validates, if both select and include are present. If the case, it errors.
 */
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
/**
 * Subset + Intersection
 * @desc From `T` pick properties that exist in `U` and intersect `K`
 */
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
/**
 * XOR is needed to have a real mutually exclusive union type
 * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
 */
export type XOR<T, U> = T extends object ? U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U : T;
/**
 * Is T a Record?
 */
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
/**
 * If it's T[], return T
 */
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
/**
 * From ts-toolbelt
 */
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
/** Helper Types for "Merge" **/
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
/** End Helper Types for "Merge" **/
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
/**
 * Convert tuple to union
 */
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
/**
 * Like `Pick`, but additionally can also accept an array of keys
 */
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
/**
 * Exclude all keys with underscores
 */
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
export declare const ModelName: {
    readonly rel_fornecedor_ingrediente: "rel_fornecedor_ingrediente";
    readonly rel_fornecedor_produto: "rel_fornecedor_produto";
    readonly rel_pedido_produto: "rel_pedido_produto";
    readonly rel_produto_ingrediente: "rel_produto_ingrediente";
    readonly tbl_cliente: "tbl_cliente";
    readonly tbl_endereco: "tbl_endereco";
    readonly tbl_fornecedor: "tbl_fornecedor";
    readonly tbl_ingrediente: "tbl_ingrediente";
    readonly tbl_pedido: "tbl_pedido";
    readonly tbl_produto: "tbl_produto";
    readonly tbl_status_pedido: "tbl_status_pedido";
    readonly tbl_tipo_ingrediente: "tbl_tipo_ingrediente";
    readonly tbl_tipo_pessoa: "tbl_tipo_pessoa";
    readonly tbl_tipo_produto: "tbl_tipo_produto";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "rel_fornecedor_ingrediente" | "rel_fornecedor_produto" | "rel_pedido_produto" | "rel_produto_ingrediente" | "tbl_cliente" | "tbl_endereco" | "tbl_fornecedor" | "tbl_ingrediente" | "tbl_pedido" | "tbl_produto" | "tbl_status_pedido" | "tbl_tipo_ingrediente" | "tbl_tipo_pessoa" | "tbl_tipo_produto";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        rel_fornecedor_ingrediente: {
            payload: Prisma.$rel_fornecedor_ingredientePayload<ExtArgs>;
            fields: Prisma.rel_fornecedor_ingredienteFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.rel_fornecedor_ingredienteFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rel_fornecedor_ingredientePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.rel_fornecedor_ingredienteFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rel_fornecedor_ingredientePayload>;
                };
                findFirst: {
                    args: Prisma.rel_fornecedor_ingredienteFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rel_fornecedor_ingredientePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.rel_fornecedor_ingredienteFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rel_fornecedor_ingredientePayload>;
                };
                findMany: {
                    args: Prisma.rel_fornecedor_ingredienteFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rel_fornecedor_ingredientePayload>[];
                };
                create: {
                    args: Prisma.rel_fornecedor_ingredienteCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rel_fornecedor_ingredientePayload>;
                };
                createMany: {
                    args: Prisma.rel_fornecedor_ingredienteCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.rel_fornecedor_ingredienteCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rel_fornecedor_ingredientePayload>[];
                };
                delete: {
                    args: Prisma.rel_fornecedor_ingredienteDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rel_fornecedor_ingredientePayload>;
                };
                update: {
                    args: Prisma.rel_fornecedor_ingredienteUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rel_fornecedor_ingredientePayload>;
                };
                deleteMany: {
                    args: Prisma.rel_fornecedor_ingredienteDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.rel_fornecedor_ingredienteUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.rel_fornecedor_ingredienteUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rel_fornecedor_ingredientePayload>[];
                };
                upsert: {
                    args: Prisma.rel_fornecedor_ingredienteUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rel_fornecedor_ingredientePayload>;
                };
                aggregate: {
                    args: Prisma.Rel_fornecedor_ingredienteAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateRel_fornecedor_ingrediente>;
                };
                groupBy: {
                    args: Prisma.rel_fornecedor_ingredienteGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Rel_fornecedor_ingredienteGroupByOutputType>[];
                };
                count: {
                    args: Prisma.rel_fornecedor_ingredienteCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Rel_fornecedor_ingredienteCountAggregateOutputType> | number;
                };
            };
        };
        rel_fornecedor_produto: {
            payload: Prisma.$rel_fornecedor_produtoPayload<ExtArgs>;
            fields: Prisma.rel_fornecedor_produtoFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.rel_fornecedor_produtoFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rel_fornecedor_produtoPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.rel_fornecedor_produtoFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rel_fornecedor_produtoPayload>;
                };
                findFirst: {
                    args: Prisma.rel_fornecedor_produtoFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rel_fornecedor_produtoPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.rel_fornecedor_produtoFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rel_fornecedor_produtoPayload>;
                };
                findMany: {
                    args: Prisma.rel_fornecedor_produtoFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rel_fornecedor_produtoPayload>[];
                };
                create: {
                    args: Prisma.rel_fornecedor_produtoCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rel_fornecedor_produtoPayload>;
                };
                createMany: {
                    args: Prisma.rel_fornecedor_produtoCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.rel_fornecedor_produtoCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rel_fornecedor_produtoPayload>[];
                };
                delete: {
                    args: Prisma.rel_fornecedor_produtoDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rel_fornecedor_produtoPayload>;
                };
                update: {
                    args: Prisma.rel_fornecedor_produtoUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rel_fornecedor_produtoPayload>;
                };
                deleteMany: {
                    args: Prisma.rel_fornecedor_produtoDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.rel_fornecedor_produtoUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.rel_fornecedor_produtoUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rel_fornecedor_produtoPayload>[];
                };
                upsert: {
                    args: Prisma.rel_fornecedor_produtoUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rel_fornecedor_produtoPayload>;
                };
                aggregate: {
                    args: Prisma.Rel_fornecedor_produtoAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateRel_fornecedor_produto>;
                };
                groupBy: {
                    args: Prisma.rel_fornecedor_produtoGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Rel_fornecedor_produtoGroupByOutputType>[];
                };
                count: {
                    args: Prisma.rel_fornecedor_produtoCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Rel_fornecedor_produtoCountAggregateOutputType> | number;
                };
            };
        };
        rel_pedido_produto: {
            payload: Prisma.$rel_pedido_produtoPayload<ExtArgs>;
            fields: Prisma.rel_pedido_produtoFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.rel_pedido_produtoFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rel_pedido_produtoPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.rel_pedido_produtoFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rel_pedido_produtoPayload>;
                };
                findFirst: {
                    args: Prisma.rel_pedido_produtoFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rel_pedido_produtoPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.rel_pedido_produtoFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rel_pedido_produtoPayload>;
                };
                findMany: {
                    args: Prisma.rel_pedido_produtoFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rel_pedido_produtoPayload>[];
                };
                create: {
                    args: Prisma.rel_pedido_produtoCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rel_pedido_produtoPayload>;
                };
                createMany: {
                    args: Prisma.rel_pedido_produtoCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.rel_pedido_produtoCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rel_pedido_produtoPayload>[];
                };
                delete: {
                    args: Prisma.rel_pedido_produtoDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rel_pedido_produtoPayload>;
                };
                update: {
                    args: Prisma.rel_pedido_produtoUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rel_pedido_produtoPayload>;
                };
                deleteMany: {
                    args: Prisma.rel_pedido_produtoDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.rel_pedido_produtoUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.rel_pedido_produtoUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rel_pedido_produtoPayload>[];
                };
                upsert: {
                    args: Prisma.rel_pedido_produtoUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rel_pedido_produtoPayload>;
                };
                aggregate: {
                    args: Prisma.Rel_pedido_produtoAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateRel_pedido_produto>;
                };
                groupBy: {
                    args: Prisma.rel_pedido_produtoGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Rel_pedido_produtoGroupByOutputType>[];
                };
                count: {
                    args: Prisma.rel_pedido_produtoCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Rel_pedido_produtoCountAggregateOutputType> | number;
                };
            };
        };
        rel_produto_ingrediente: {
            payload: Prisma.$rel_produto_ingredientePayload<ExtArgs>;
            fields: Prisma.rel_produto_ingredienteFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.rel_produto_ingredienteFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rel_produto_ingredientePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.rel_produto_ingredienteFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rel_produto_ingredientePayload>;
                };
                findFirst: {
                    args: Prisma.rel_produto_ingredienteFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rel_produto_ingredientePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.rel_produto_ingredienteFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rel_produto_ingredientePayload>;
                };
                findMany: {
                    args: Prisma.rel_produto_ingredienteFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rel_produto_ingredientePayload>[];
                };
                create: {
                    args: Prisma.rel_produto_ingredienteCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rel_produto_ingredientePayload>;
                };
                createMany: {
                    args: Prisma.rel_produto_ingredienteCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.rel_produto_ingredienteCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rel_produto_ingredientePayload>[];
                };
                delete: {
                    args: Prisma.rel_produto_ingredienteDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rel_produto_ingredientePayload>;
                };
                update: {
                    args: Prisma.rel_produto_ingredienteUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rel_produto_ingredientePayload>;
                };
                deleteMany: {
                    args: Prisma.rel_produto_ingredienteDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.rel_produto_ingredienteUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.rel_produto_ingredienteUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rel_produto_ingredientePayload>[];
                };
                upsert: {
                    args: Prisma.rel_produto_ingredienteUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rel_produto_ingredientePayload>;
                };
                aggregate: {
                    args: Prisma.Rel_produto_ingredienteAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateRel_produto_ingrediente>;
                };
                groupBy: {
                    args: Prisma.rel_produto_ingredienteGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Rel_produto_ingredienteGroupByOutputType>[];
                };
                count: {
                    args: Prisma.rel_produto_ingredienteCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Rel_produto_ingredienteCountAggregateOutputType> | number;
                };
            };
        };
        tbl_cliente: {
            payload: Prisma.$tbl_clientePayload<ExtArgs>;
            fields: Prisma.tbl_clienteFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.tbl_clienteFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tbl_clientePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.tbl_clienteFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tbl_clientePayload>;
                };
                findFirst: {
                    args: Prisma.tbl_clienteFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tbl_clientePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.tbl_clienteFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tbl_clientePayload>;
                };
                findMany: {
                    args: Prisma.tbl_clienteFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tbl_clientePayload>[];
                };
                create: {
                    args: Prisma.tbl_clienteCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tbl_clientePayload>;
                };
                createMany: {
                    args: Prisma.tbl_clienteCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.tbl_clienteCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tbl_clientePayload>[];
                };
                delete: {
                    args: Prisma.tbl_clienteDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tbl_clientePayload>;
                };
                update: {
                    args: Prisma.tbl_clienteUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tbl_clientePayload>;
                };
                deleteMany: {
                    args: Prisma.tbl_clienteDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.tbl_clienteUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.tbl_clienteUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tbl_clientePayload>[];
                };
                upsert: {
                    args: Prisma.tbl_clienteUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tbl_clientePayload>;
                };
                aggregate: {
                    args: Prisma.Tbl_clienteAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateTbl_cliente>;
                };
                groupBy: {
                    args: Prisma.tbl_clienteGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Tbl_clienteGroupByOutputType>[];
                };
                count: {
                    args: Prisma.tbl_clienteCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Tbl_clienteCountAggregateOutputType> | number;
                };
            };
        };
        tbl_endereco: {
            payload: Prisma.$tbl_enderecoPayload<ExtArgs>;
            fields: Prisma.tbl_enderecoFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.tbl_enderecoFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tbl_enderecoPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.tbl_enderecoFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tbl_enderecoPayload>;
                };
                findFirst: {
                    args: Prisma.tbl_enderecoFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tbl_enderecoPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.tbl_enderecoFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tbl_enderecoPayload>;
                };
                findMany: {
                    args: Prisma.tbl_enderecoFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tbl_enderecoPayload>[];
                };
                create: {
                    args: Prisma.tbl_enderecoCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tbl_enderecoPayload>;
                };
                createMany: {
                    args: Prisma.tbl_enderecoCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.tbl_enderecoCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tbl_enderecoPayload>[];
                };
                delete: {
                    args: Prisma.tbl_enderecoDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tbl_enderecoPayload>;
                };
                update: {
                    args: Prisma.tbl_enderecoUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tbl_enderecoPayload>;
                };
                deleteMany: {
                    args: Prisma.tbl_enderecoDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.tbl_enderecoUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.tbl_enderecoUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tbl_enderecoPayload>[];
                };
                upsert: {
                    args: Prisma.tbl_enderecoUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tbl_enderecoPayload>;
                };
                aggregate: {
                    args: Prisma.Tbl_enderecoAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateTbl_endereco>;
                };
                groupBy: {
                    args: Prisma.tbl_enderecoGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Tbl_enderecoGroupByOutputType>[];
                };
                count: {
                    args: Prisma.tbl_enderecoCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Tbl_enderecoCountAggregateOutputType> | number;
                };
            };
        };
        tbl_fornecedor: {
            payload: Prisma.$tbl_fornecedorPayload<ExtArgs>;
            fields: Prisma.tbl_fornecedorFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.tbl_fornecedorFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tbl_fornecedorPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.tbl_fornecedorFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tbl_fornecedorPayload>;
                };
                findFirst: {
                    args: Prisma.tbl_fornecedorFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tbl_fornecedorPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.tbl_fornecedorFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tbl_fornecedorPayload>;
                };
                findMany: {
                    args: Prisma.tbl_fornecedorFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tbl_fornecedorPayload>[];
                };
                create: {
                    args: Prisma.tbl_fornecedorCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tbl_fornecedorPayload>;
                };
                createMany: {
                    args: Prisma.tbl_fornecedorCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.tbl_fornecedorCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tbl_fornecedorPayload>[];
                };
                delete: {
                    args: Prisma.tbl_fornecedorDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tbl_fornecedorPayload>;
                };
                update: {
                    args: Prisma.tbl_fornecedorUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tbl_fornecedorPayload>;
                };
                deleteMany: {
                    args: Prisma.tbl_fornecedorDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.tbl_fornecedorUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.tbl_fornecedorUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tbl_fornecedorPayload>[];
                };
                upsert: {
                    args: Prisma.tbl_fornecedorUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tbl_fornecedorPayload>;
                };
                aggregate: {
                    args: Prisma.Tbl_fornecedorAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateTbl_fornecedor>;
                };
                groupBy: {
                    args: Prisma.tbl_fornecedorGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Tbl_fornecedorGroupByOutputType>[];
                };
                count: {
                    args: Prisma.tbl_fornecedorCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Tbl_fornecedorCountAggregateOutputType> | number;
                };
            };
        };
        tbl_ingrediente: {
            payload: Prisma.$tbl_ingredientePayload<ExtArgs>;
            fields: Prisma.tbl_ingredienteFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.tbl_ingredienteFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tbl_ingredientePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.tbl_ingredienteFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tbl_ingredientePayload>;
                };
                findFirst: {
                    args: Prisma.tbl_ingredienteFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tbl_ingredientePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.tbl_ingredienteFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tbl_ingredientePayload>;
                };
                findMany: {
                    args: Prisma.tbl_ingredienteFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tbl_ingredientePayload>[];
                };
                create: {
                    args: Prisma.tbl_ingredienteCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tbl_ingredientePayload>;
                };
                createMany: {
                    args: Prisma.tbl_ingredienteCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.tbl_ingredienteCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tbl_ingredientePayload>[];
                };
                delete: {
                    args: Prisma.tbl_ingredienteDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tbl_ingredientePayload>;
                };
                update: {
                    args: Prisma.tbl_ingredienteUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tbl_ingredientePayload>;
                };
                deleteMany: {
                    args: Prisma.tbl_ingredienteDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.tbl_ingredienteUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.tbl_ingredienteUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tbl_ingredientePayload>[];
                };
                upsert: {
                    args: Prisma.tbl_ingredienteUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tbl_ingredientePayload>;
                };
                aggregate: {
                    args: Prisma.Tbl_ingredienteAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateTbl_ingrediente>;
                };
                groupBy: {
                    args: Prisma.tbl_ingredienteGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Tbl_ingredienteGroupByOutputType>[];
                };
                count: {
                    args: Prisma.tbl_ingredienteCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Tbl_ingredienteCountAggregateOutputType> | number;
                };
            };
        };
        tbl_pedido: {
            payload: Prisma.$tbl_pedidoPayload<ExtArgs>;
            fields: Prisma.tbl_pedidoFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.tbl_pedidoFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tbl_pedidoPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.tbl_pedidoFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tbl_pedidoPayload>;
                };
                findFirst: {
                    args: Prisma.tbl_pedidoFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tbl_pedidoPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.tbl_pedidoFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tbl_pedidoPayload>;
                };
                findMany: {
                    args: Prisma.tbl_pedidoFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tbl_pedidoPayload>[];
                };
                create: {
                    args: Prisma.tbl_pedidoCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tbl_pedidoPayload>;
                };
                createMany: {
                    args: Prisma.tbl_pedidoCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.tbl_pedidoCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tbl_pedidoPayload>[];
                };
                delete: {
                    args: Prisma.tbl_pedidoDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tbl_pedidoPayload>;
                };
                update: {
                    args: Prisma.tbl_pedidoUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tbl_pedidoPayload>;
                };
                deleteMany: {
                    args: Prisma.tbl_pedidoDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.tbl_pedidoUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.tbl_pedidoUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tbl_pedidoPayload>[];
                };
                upsert: {
                    args: Prisma.tbl_pedidoUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tbl_pedidoPayload>;
                };
                aggregate: {
                    args: Prisma.Tbl_pedidoAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateTbl_pedido>;
                };
                groupBy: {
                    args: Prisma.tbl_pedidoGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Tbl_pedidoGroupByOutputType>[];
                };
                count: {
                    args: Prisma.tbl_pedidoCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Tbl_pedidoCountAggregateOutputType> | number;
                };
            };
        };
        tbl_produto: {
            payload: Prisma.$tbl_produtoPayload<ExtArgs>;
            fields: Prisma.tbl_produtoFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.tbl_produtoFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tbl_produtoPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.tbl_produtoFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tbl_produtoPayload>;
                };
                findFirst: {
                    args: Prisma.tbl_produtoFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tbl_produtoPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.tbl_produtoFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tbl_produtoPayload>;
                };
                findMany: {
                    args: Prisma.tbl_produtoFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tbl_produtoPayload>[];
                };
                create: {
                    args: Prisma.tbl_produtoCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tbl_produtoPayload>;
                };
                createMany: {
                    args: Prisma.tbl_produtoCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.tbl_produtoCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tbl_produtoPayload>[];
                };
                delete: {
                    args: Prisma.tbl_produtoDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tbl_produtoPayload>;
                };
                update: {
                    args: Prisma.tbl_produtoUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tbl_produtoPayload>;
                };
                deleteMany: {
                    args: Prisma.tbl_produtoDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.tbl_produtoUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.tbl_produtoUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tbl_produtoPayload>[];
                };
                upsert: {
                    args: Prisma.tbl_produtoUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tbl_produtoPayload>;
                };
                aggregate: {
                    args: Prisma.Tbl_produtoAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateTbl_produto>;
                };
                groupBy: {
                    args: Prisma.tbl_produtoGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Tbl_produtoGroupByOutputType>[];
                };
                count: {
                    args: Prisma.tbl_produtoCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Tbl_produtoCountAggregateOutputType> | number;
                };
            };
        };
        tbl_status_pedido: {
            payload: Prisma.$tbl_status_pedidoPayload<ExtArgs>;
            fields: Prisma.tbl_status_pedidoFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.tbl_status_pedidoFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tbl_status_pedidoPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.tbl_status_pedidoFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tbl_status_pedidoPayload>;
                };
                findFirst: {
                    args: Prisma.tbl_status_pedidoFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tbl_status_pedidoPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.tbl_status_pedidoFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tbl_status_pedidoPayload>;
                };
                findMany: {
                    args: Prisma.tbl_status_pedidoFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tbl_status_pedidoPayload>[];
                };
                create: {
                    args: Prisma.tbl_status_pedidoCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tbl_status_pedidoPayload>;
                };
                createMany: {
                    args: Prisma.tbl_status_pedidoCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.tbl_status_pedidoCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tbl_status_pedidoPayload>[];
                };
                delete: {
                    args: Prisma.tbl_status_pedidoDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tbl_status_pedidoPayload>;
                };
                update: {
                    args: Prisma.tbl_status_pedidoUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tbl_status_pedidoPayload>;
                };
                deleteMany: {
                    args: Prisma.tbl_status_pedidoDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.tbl_status_pedidoUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.tbl_status_pedidoUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tbl_status_pedidoPayload>[];
                };
                upsert: {
                    args: Prisma.tbl_status_pedidoUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tbl_status_pedidoPayload>;
                };
                aggregate: {
                    args: Prisma.Tbl_status_pedidoAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateTbl_status_pedido>;
                };
                groupBy: {
                    args: Prisma.tbl_status_pedidoGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Tbl_status_pedidoGroupByOutputType>[];
                };
                count: {
                    args: Prisma.tbl_status_pedidoCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Tbl_status_pedidoCountAggregateOutputType> | number;
                };
            };
        };
        tbl_tipo_ingrediente: {
            payload: Prisma.$tbl_tipo_ingredientePayload<ExtArgs>;
            fields: Prisma.tbl_tipo_ingredienteFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.tbl_tipo_ingredienteFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tbl_tipo_ingredientePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.tbl_tipo_ingredienteFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tbl_tipo_ingredientePayload>;
                };
                findFirst: {
                    args: Prisma.tbl_tipo_ingredienteFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tbl_tipo_ingredientePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.tbl_tipo_ingredienteFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tbl_tipo_ingredientePayload>;
                };
                findMany: {
                    args: Prisma.tbl_tipo_ingredienteFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tbl_tipo_ingredientePayload>[];
                };
                create: {
                    args: Prisma.tbl_tipo_ingredienteCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tbl_tipo_ingredientePayload>;
                };
                createMany: {
                    args: Prisma.tbl_tipo_ingredienteCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.tbl_tipo_ingredienteCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tbl_tipo_ingredientePayload>[];
                };
                delete: {
                    args: Prisma.tbl_tipo_ingredienteDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tbl_tipo_ingredientePayload>;
                };
                update: {
                    args: Prisma.tbl_tipo_ingredienteUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tbl_tipo_ingredientePayload>;
                };
                deleteMany: {
                    args: Prisma.tbl_tipo_ingredienteDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.tbl_tipo_ingredienteUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.tbl_tipo_ingredienteUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tbl_tipo_ingredientePayload>[];
                };
                upsert: {
                    args: Prisma.tbl_tipo_ingredienteUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tbl_tipo_ingredientePayload>;
                };
                aggregate: {
                    args: Prisma.Tbl_tipo_ingredienteAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateTbl_tipo_ingrediente>;
                };
                groupBy: {
                    args: Prisma.tbl_tipo_ingredienteGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Tbl_tipo_ingredienteGroupByOutputType>[];
                };
                count: {
                    args: Prisma.tbl_tipo_ingredienteCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Tbl_tipo_ingredienteCountAggregateOutputType> | number;
                };
            };
        };
        tbl_tipo_pessoa: {
            payload: Prisma.$tbl_tipo_pessoaPayload<ExtArgs>;
            fields: Prisma.tbl_tipo_pessoaFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.tbl_tipo_pessoaFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tbl_tipo_pessoaPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.tbl_tipo_pessoaFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tbl_tipo_pessoaPayload>;
                };
                findFirst: {
                    args: Prisma.tbl_tipo_pessoaFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tbl_tipo_pessoaPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.tbl_tipo_pessoaFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tbl_tipo_pessoaPayload>;
                };
                findMany: {
                    args: Prisma.tbl_tipo_pessoaFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tbl_tipo_pessoaPayload>[];
                };
                create: {
                    args: Prisma.tbl_tipo_pessoaCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tbl_tipo_pessoaPayload>;
                };
                createMany: {
                    args: Prisma.tbl_tipo_pessoaCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.tbl_tipo_pessoaCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tbl_tipo_pessoaPayload>[];
                };
                delete: {
                    args: Prisma.tbl_tipo_pessoaDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tbl_tipo_pessoaPayload>;
                };
                update: {
                    args: Prisma.tbl_tipo_pessoaUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tbl_tipo_pessoaPayload>;
                };
                deleteMany: {
                    args: Prisma.tbl_tipo_pessoaDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.tbl_tipo_pessoaUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.tbl_tipo_pessoaUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tbl_tipo_pessoaPayload>[];
                };
                upsert: {
                    args: Prisma.tbl_tipo_pessoaUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tbl_tipo_pessoaPayload>;
                };
                aggregate: {
                    args: Prisma.Tbl_tipo_pessoaAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateTbl_tipo_pessoa>;
                };
                groupBy: {
                    args: Prisma.tbl_tipo_pessoaGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Tbl_tipo_pessoaGroupByOutputType>[];
                };
                count: {
                    args: Prisma.tbl_tipo_pessoaCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Tbl_tipo_pessoaCountAggregateOutputType> | number;
                };
            };
        };
        tbl_tipo_produto: {
            payload: Prisma.$tbl_tipo_produtoPayload<ExtArgs>;
            fields: Prisma.tbl_tipo_produtoFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.tbl_tipo_produtoFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tbl_tipo_produtoPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.tbl_tipo_produtoFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tbl_tipo_produtoPayload>;
                };
                findFirst: {
                    args: Prisma.tbl_tipo_produtoFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tbl_tipo_produtoPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.tbl_tipo_produtoFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tbl_tipo_produtoPayload>;
                };
                findMany: {
                    args: Prisma.tbl_tipo_produtoFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tbl_tipo_produtoPayload>[];
                };
                create: {
                    args: Prisma.tbl_tipo_produtoCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tbl_tipo_produtoPayload>;
                };
                createMany: {
                    args: Prisma.tbl_tipo_produtoCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.tbl_tipo_produtoCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tbl_tipo_produtoPayload>[];
                };
                delete: {
                    args: Prisma.tbl_tipo_produtoDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tbl_tipo_produtoPayload>;
                };
                update: {
                    args: Prisma.tbl_tipo_produtoUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tbl_tipo_produtoPayload>;
                };
                deleteMany: {
                    args: Prisma.tbl_tipo_produtoDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.tbl_tipo_produtoUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.tbl_tipo_produtoUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tbl_tipo_produtoPayload>[];
                };
                upsert: {
                    args: Prisma.tbl_tipo_produtoUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tbl_tipo_produtoPayload>;
                };
                aggregate: {
                    args: Prisma.Tbl_tipo_produtoAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateTbl_tipo_produto>;
                };
                groupBy: {
                    args: Prisma.tbl_tipo_produtoGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Tbl_tipo_produtoGroupByOutputType>[];
                };
                count: {
                    args: Prisma.tbl_tipo_produtoCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Tbl_tipo_produtoCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
/**
 * Enums
 */
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const Rel_fornecedor_ingredienteScalarFieldEnum: {
    readonly fornecedor_id: "fornecedor_id";
    readonly ingrediente_id: "ingrediente_id";
    readonly data_hora_fornecimento: "data_hora_fornecimento";
    readonly valor_fornecimento: "valor_fornecimento";
    readonly quantidade: "quantidade";
};
export type Rel_fornecedor_ingredienteScalarFieldEnum = (typeof Rel_fornecedor_ingredienteScalarFieldEnum)[keyof typeof Rel_fornecedor_ingredienteScalarFieldEnum];
export declare const Rel_fornecedor_produtoScalarFieldEnum: {
    readonly fornecedor_id: "fornecedor_id";
    readonly produto_id: "produto_id";
    readonly data_hora_fornecimento: "data_hora_fornecimento";
    readonly valor_fornecimento: "valor_fornecimento";
    readonly quantidade: "quantidade";
};
export type Rel_fornecedor_produtoScalarFieldEnum = (typeof Rel_fornecedor_produtoScalarFieldEnum)[keyof typeof Rel_fornecedor_produtoScalarFieldEnum];
export declare const Rel_pedido_produtoScalarFieldEnum: {
    readonly produto_id: "produto_id";
    readonly pedido_id: "pedido_id";
    readonly valor_unitario: "valor_unitario";
    readonly quantidade: "quantidade";
};
export type Rel_pedido_produtoScalarFieldEnum = (typeof Rel_pedido_produtoScalarFieldEnum)[keyof typeof Rel_pedido_produtoScalarFieldEnum];
export declare const Rel_produto_ingredienteScalarFieldEnum: {
    readonly ingrediente_id: "ingrediente_id";
    readonly produto_id: "produto_id";
    readonly quantidade: "quantidade";
};
export type Rel_produto_ingredienteScalarFieldEnum = (typeof Rel_produto_ingredienteScalarFieldEnum)[keyof typeof Rel_produto_ingredienteScalarFieldEnum];
export declare const Tbl_clienteScalarFieldEnum: {
    readonly cliente_id: "cliente_id";
    readonly tipo_pessoa_id: "tipo_pessoa_id";
    readonly registro_nacional: "registro_nacional";
    readonly nome: "nome";
    readonly sobrenome: "sobrenome";
    readonly nome_fantasia: "nome_fantasia";
    readonly email: "email";
    readonly telefone: "telefone";
};
export type Tbl_clienteScalarFieldEnum = (typeof Tbl_clienteScalarFieldEnum)[keyof typeof Tbl_clienteScalarFieldEnum];
export declare const Tbl_enderecoScalarFieldEnum: {
    readonly endereco_id: "endereco_id";
    readonly cliente_id: "cliente_id";
    readonly pais: "pais";
    readonly uf: "uf";
    readonly complemento: "complemento";
    readonly rua: "rua";
    readonly cod_postal: "cod_postal";
};
export type Tbl_enderecoScalarFieldEnum = (typeof Tbl_enderecoScalarFieldEnum)[keyof typeof Tbl_enderecoScalarFieldEnum];
export declare const Tbl_fornecedorScalarFieldEnum: {
    readonly fornecedor_id: "fornecedor_id";
    readonly email: "email";
    readonly contato: "contato";
    readonly telefone: "telefone";
    readonly nome: "nome";
    readonly registro_nacional: "registro_nacional";
};
export type Tbl_fornecedorScalarFieldEnum = (typeof Tbl_fornecedorScalarFieldEnum)[keyof typeof Tbl_fornecedorScalarFieldEnum];
export declare const Tbl_ingredienteScalarFieldEnum: {
    readonly ingrediente_id: "ingrediente_id";
    readonly tipo_ingrediente_id: "tipo_ingrediente_id";
    readonly nome: "nome";
    readonly valor_unitario: "valor_unitario";
    readonly quantidade_estoque: "quantidade_estoque";
};
export type Tbl_ingredienteScalarFieldEnum = (typeof Tbl_ingredienteScalarFieldEnum)[keyof typeof Tbl_ingredienteScalarFieldEnum];
export declare const Tbl_pedidoScalarFieldEnum: {
    readonly pedido_id: "pedido_id";
    readonly status_pedido_id: "status_pedido_id";
    readonly cliente_id: "cliente_id";
    readonly data_hora_pedido: "data_hora_pedido";
};
export type Tbl_pedidoScalarFieldEnum = (typeof Tbl_pedidoScalarFieldEnum)[keyof typeof Tbl_pedidoScalarFieldEnum];
export declare const Tbl_produtoScalarFieldEnum: {
    readonly produto_id: "produto_id";
    readonly tipo_produto_id: "tipo_produto_id";
    readonly nome: "nome";
    readonly valor_unitario: "valor_unitario";
    readonly ibu: "ibu";
    readonly abv: "abv";
};
export type Tbl_produtoScalarFieldEnum = (typeof Tbl_produtoScalarFieldEnum)[keyof typeof Tbl_produtoScalarFieldEnum];
export declare const Tbl_status_pedidoScalarFieldEnum: {
    readonly status_pedido_id: "status_pedido_id";
    readonly status: "status";
};
export type Tbl_status_pedidoScalarFieldEnum = (typeof Tbl_status_pedidoScalarFieldEnum)[keyof typeof Tbl_status_pedidoScalarFieldEnum];
export declare const Tbl_tipo_ingredienteScalarFieldEnum: {
    readonly tipo_ingrediente_id: "tipo_ingrediente_id";
    readonly tipo: "tipo";
};
export type Tbl_tipo_ingredienteScalarFieldEnum = (typeof Tbl_tipo_ingredienteScalarFieldEnum)[keyof typeof Tbl_tipo_ingredienteScalarFieldEnum];
export declare const Tbl_tipo_pessoaScalarFieldEnum: {
    readonly tipo_pessoa_id: "tipo_pessoa_id";
    readonly tipo: "tipo";
};
export type Tbl_tipo_pessoaScalarFieldEnum = (typeof Tbl_tipo_pessoaScalarFieldEnum)[keyof typeof Tbl_tipo_pessoaScalarFieldEnum];
export declare const Tbl_tipo_produtoScalarFieldEnum: {
    readonly tipo_produto_id: "tipo_produto_id";
    readonly tipo: "tipo";
};
export type Tbl_tipo_produtoScalarFieldEnum = (typeof Tbl_tipo_produtoScalarFieldEnum)[keyof typeof Tbl_tipo_produtoScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
/**
 * Field references
 */
/**
 * Reference to a field of type 'Int'
 */
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
/**
 * Reference to a field of type 'Int[]'
 */
export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;
/**
 * Reference to a field of type 'DateTime'
 */
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
/**
 * Reference to a field of type 'DateTime[]'
 */
export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;
/**
 * Reference to a field of type 'Decimal'
 */
export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>;
/**
 * Reference to a field of type 'Decimal[]'
 */
export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>;
/**
 * Reference to a field of type 'String'
 */
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
/**
 * Reference to a field of type 'String[]'
 */
export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;
/**
 * Reference to a field of type 'Float'
 */
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
/**
 * Reference to a field of type 'Float[]'
 */
export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;
/**
 * Batch Payload for updateMany & deleteMany & createMany
 */
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export type PrismaClientOptions = ({
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-pg`.
     */
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
} | {
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl: string;
    adapter?: never;
}) & {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     *
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     *
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    /**
     * Global configuration for omitting model fields by default.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: GlobalOmitConfig;
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[];
    /**
     * Optional maximum size for the query plan cache. If not provided, a default size will be used.
     * A value of `0` can be used to disable the cache entirely. A higher cache size can improve
     * performance for applications that execute a large number of unique queries, while a smaller
     * cache size can reduce memory usage.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   queryPlanCacheMaxSize: 100,
     * })
     * ```
     */
    queryPlanCacheMaxSize?: number;
};
export type GlobalOmitConfig = {
    rel_fornecedor_ingrediente?: Prisma.rel_fornecedor_ingredienteOmit;
    rel_fornecedor_produto?: Prisma.rel_fornecedor_produtoOmit;
    rel_pedido_produto?: Prisma.rel_pedido_produtoOmit;
    rel_produto_ingrediente?: Prisma.rel_produto_ingredienteOmit;
    tbl_cliente?: Prisma.tbl_clienteOmit;
    tbl_endereco?: Prisma.tbl_enderecoOmit;
    tbl_fornecedor?: Prisma.tbl_fornecedorOmit;
    tbl_ingrediente?: Prisma.tbl_ingredienteOmit;
    tbl_pedido?: Prisma.tbl_pedidoOmit;
    tbl_produto?: Prisma.tbl_produtoOmit;
    tbl_status_pedido?: Prisma.tbl_status_pedidoOmit;
    tbl_tipo_ingrediente?: Prisma.tbl_tipo_ingredienteOmit;
    tbl_tipo_pessoa?: Prisma.tbl_tipo_pessoaOmit;
    tbl_tipo_produto?: Prisma.tbl_tipo_produtoOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
/**
 * `PrismaClient` proxy available in interactive transactions.
 */
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
//# sourceMappingURL=prismaNamespace.d.ts.map