import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "./prismaNamespace.ts";
export type LogOptions<ClientOptions extends Prisma.PrismaClientOptions> = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never;
export interface PrismaClientConstructor {
    /**
   * ## Prisma Client
   *
   * Type-safe database client for TypeScript
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Rel_fornecedor_ingredientes
   * const rel_fornecedor_ingredientes = await prisma.rel_fornecedor_ingrediente.findMany()
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */
    new <Options extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions, LogOpts extends LogOptions<Options> = LogOptions<Options>, OmitOpts extends Prisma.PrismaClientOptions['omit'] = Options extends {
        omit: infer U;
    } ? U : Prisma.PrismaClientOptions['omit'], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs>(options: Prisma.Subset<Options, Prisma.PrismaClientOptions>): PrismaClient<LogOpts, OmitOpts, ExtArgs>;
}
/**
 * ## Prisma Client
 *
 * Type-safe database client for TypeScript
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Rel_fornecedor_ingredientes
 * const rel_fornecedor_ingredientes = await prisma.rel_fornecedor_ingrediente.findMany()
 * ```
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export interface PrismaClient<in LogOpts extends Prisma.LogLevel = never, in out OmitOpts extends Prisma.PrismaClientOptions['omit'] = undefined, in out ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['other'];
    };
    $on<V extends LogOpts>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;
    /**
     * Connect with the database
     */
    $connect(): runtime.Types.Utils.JsPromise<void>;
    /**
     * Disconnect from the database
     */
    $disconnect(): runtime.Types.Utils.JsPromise<void>;
    /**
       * Executes a prepared raw query and returns the number of affected rows.
       * @example
       * ```
       * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
       * ```
       *
       * Read more in our [docs](https://pris.ly/d/raw-queries).
       */
    $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;
    /**
     * Executes a raw query and returns the number of affected rows.
     * Susceptible to SQL injections, see documentation.
     * @example
     * ```
     * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
     * ```
     *
     * Read more in our [docs](https://pris.ly/d/raw-queries).
     */
    $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;
    /**
     * Performs a prepared raw query and returns the `SELECT` data.
     * @example
     * ```
     * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
     * ```
     *
     * Read more in our [docs](https://pris.ly/d/raw-queries).
     */
    $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;
    /**
     * Performs a raw query and returns the `SELECT` data.
     * Susceptible to SQL injections, see documentation.
     * @example
     * ```
     * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
     * ```
     *
     * Read more in our [docs](https://pris.ly/d/raw-queries).
     */
    $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;
    /**
     * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
     * @example
     * ```
     * const [george, bob, alice] = await prisma.$transaction([
     *   prisma.user.create({ data: { name: 'George' } }),
     *   prisma.user.create({ data: { name: 'Bob' } }),
     *   prisma.user.create({ data: { name: 'Alice' } }),
     * ])
     * ```
     *
     * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
     */
    $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;
    $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => runtime.Types.Utils.JsPromise<R>, options?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<R>;
    $extends: runtime.Types.Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<OmitOpts>, ExtArgs, runtime.Types.Utils.Call<Prisma.TypeMapCb<OmitOpts>, {
        extArgs: ExtArgs;
    }>>;
    /**
 * `prisma.rel_fornecedor_ingrediente`: Exposes CRUD operations for the **rel_fornecedor_ingrediente** model.
  * Example usage:
  * ```ts
  * // Fetch zero or more Rel_fornecedor_ingredientes
  * const rel_fornecedor_ingredientes = await prisma.rel_fornecedor_ingrediente.findMany()
  * ```
  */
    get rel_fornecedor_ingrediente(): Prisma.rel_fornecedor_ingredienteDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.rel_fornecedor_produto`: Exposes CRUD operations for the **rel_fornecedor_produto** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Rel_fornecedor_produtos
      * const rel_fornecedor_produtos = await prisma.rel_fornecedor_produto.findMany()
      * ```
      */
    get rel_fornecedor_produto(): Prisma.rel_fornecedor_produtoDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.rel_pedido_produto`: Exposes CRUD operations for the **rel_pedido_produto** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Rel_pedido_produtos
      * const rel_pedido_produtos = await prisma.rel_pedido_produto.findMany()
      * ```
      */
    get rel_pedido_produto(): Prisma.rel_pedido_produtoDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.rel_produto_ingrediente`: Exposes CRUD operations for the **rel_produto_ingrediente** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Rel_produto_ingredientes
      * const rel_produto_ingredientes = await prisma.rel_produto_ingrediente.findMany()
      * ```
      */
    get rel_produto_ingrediente(): Prisma.rel_produto_ingredienteDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.tbl_cliente`: Exposes CRUD operations for the **tbl_cliente** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Tbl_clientes
      * const tbl_clientes = await prisma.tbl_cliente.findMany()
      * ```
      */
    get tbl_cliente(): Prisma.tbl_clienteDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.tbl_endereco`: Exposes CRUD operations for the **tbl_endereco** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Tbl_enderecos
      * const tbl_enderecos = await prisma.tbl_endereco.findMany()
      * ```
      */
    get tbl_endereco(): Prisma.tbl_enderecoDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.tbl_fornecedor`: Exposes CRUD operations for the **tbl_fornecedor** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Tbl_fornecedors
      * const tbl_fornecedors = await prisma.tbl_fornecedor.findMany()
      * ```
      */
    get tbl_fornecedor(): Prisma.tbl_fornecedorDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.tbl_ingrediente`: Exposes CRUD operations for the **tbl_ingrediente** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Tbl_ingredientes
      * const tbl_ingredientes = await prisma.tbl_ingrediente.findMany()
      * ```
      */
    get tbl_ingrediente(): Prisma.tbl_ingredienteDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.tbl_pedido`: Exposes CRUD operations for the **tbl_pedido** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Tbl_pedidos
      * const tbl_pedidos = await prisma.tbl_pedido.findMany()
      * ```
      */
    get tbl_pedido(): Prisma.tbl_pedidoDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.tbl_produto`: Exposes CRUD operations for the **tbl_produto** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Tbl_produtos
      * const tbl_produtos = await prisma.tbl_produto.findMany()
      * ```
      */
    get tbl_produto(): Prisma.tbl_produtoDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.tbl_status_pedido`: Exposes CRUD operations for the **tbl_status_pedido** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Tbl_status_pedidos
      * const tbl_status_pedidos = await prisma.tbl_status_pedido.findMany()
      * ```
      */
    get tbl_status_pedido(): Prisma.tbl_status_pedidoDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.tbl_tipo_ingrediente`: Exposes CRUD operations for the **tbl_tipo_ingrediente** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Tbl_tipo_ingredientes
      * const tbl_tipo_ingredientes = await prisma.tbl_tipo_ingrediente.findMany()
      * ```
      */
    get tbl_tipo_ingrediente(): Prisma.tbl_tipo_ingredienteDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.tbl_tipo_pessoa`: Exposes CRUD operations for the **tbl_tipo_pessoa** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Tbl_tipo_pessoas
      * const tbl_tipo_pessoas = await prisma.tbl_tipo_pessoa.findMany()
      * ```
      */
    get tbl_tipo_pessoa(): Prisma.tbl_tipo_pessoaDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.tbl_tipo_produto`: Exposes CRUD operations for the **tbl_tipo_produto** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Tbl_tipo_produtos
      * const tbl_tipo_produtos = await prisma.tbl_tipo_produto.findMany()
      * ```
      */
    get tbl_tipo_produto(): Prisma.tbl_tipo_produtoDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
}
export declare function getPrismaClientClass(): PrismaClientConstructor;
//# sourceMappingURL=class.d.ts.map