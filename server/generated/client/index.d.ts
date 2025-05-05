
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model news
 * 
 */
export type news = $Result.DefaultSelection<Prisma.$newsPayload>
/**
 * Model projects
 * 
 */
export type projects = $Result.DefaultSelection<Prisma.$projectsPayload>
/**
 * Model partners
 * 
 */
export type partners = $Result.DefaultSelection<Prisma.$partnersPayload>
/**
 * Model gallery
 * 
 */
export type gallery = $Result.DefaultSelection<Prisma.$galleryPayload>
/**
 * Model mails
 * 
 */
export type mails = $Result.DefaultSelection<Prisma.$mailsPayload>
/**
 * Model about
 * 
 */
export type about = $Result.DefaultSelection<Prisma.$aboutPayload>
/**
 * Model contact
 * 
 */
export type contact = $Result.DefaultSelection<Prisma.$contactPayload>
/**
 * Model information
 * 
 */
export type information = $Result.DefaultSelection<Prisma.$informationPayload>
/**
 * Model ecology
 * 
 */
export type ecology = $Result.DefaultSelection<Prisma.$ecologyPayload>
/**
 * Model productServices
 * 
 */
export type productServices = $Result.DefaultSelection<Prisma.$productServicesPayload>
/**
 * Model catalogs
 * 
 */
export type catalogs = $Result.DefaultSelection<Prisma.$catalogsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const partnerTypeEnum: {
  dealership: 'dealership',
  clients: 'clients',
  projects: 'projects'
};

export type partnerTypeEnum = (typeof partnerTypeEnum)[keyof typeof partnerTypeEnum]


export const productServicesTypeEnum: {
  service: 'service',
  product: 'product'
};

export type productServicesTypeEnum = (typeof productServicesTypeEnum)[keyof typeof productServicesTypeEnum]


export const catalogTypeEnum: {
  home: 'home',
  productservices: 'productservices'
};

export type catalogTypeEnum = (typeof catalogTypeEnum)[keyof typeof catalogTypeEnum]

}

export type partnerTypeEnum = $Enums.partnerTypeEnum

export const partnerTypeEnum: typeof $Enums.partnerTypeEnum

export type productServicesTypeEnum = $Enums.productServicesTypeEnum

export const productServicesTypeEnum: typeof $Enums.productServicesTypeEnum

export type catalogTypeEnum = $Enums.catalogTypeEnum

export const catalogTypeEnum: typeof $Enums.catalogTypeEnum

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs>;

  /**
   * `prisma.news`: Exposes CRUD operations for the **news** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more News
    * const news = await prisma.news.findMany()
    * ```
    */
  get news(): Prisma.newsDelegate<ExtArgs>;

  /**
   * `prisma.projects`: Exposes CRUD operations for the **projects** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.projects.findMany()
    * ```
    */
  get projects(): Prisma.projectsDelegate<ExtArgs>;

  /**
   * `prisma.partners`: Exposes CRUD operations for the **partners** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Partners
    * const partners = await prisma.partners.findMany()
    * ```
    */
  get partners(): Prisma.partnersDelegate<ExtArgs>;

  /**
   * `prisma.gallery`: Exposes CRUD operations for the **gallery** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Galleries
    * const galleries = await prisma.gallery.findMany()
    * ```
    */
  get gallery(): Prisma.galleryDelegate<ExtArgs>;

  /**
   * `prisma.mails`: Exposes CRUD operations for the **mails** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mails
    * const mails = await prisma.mails.findMany()
    * ```
    */
  get mails(): Prisma.mailsDelegate<ExtArgs>;

  /**
   * `prisma.about`: Exposes CRUD operations for the **about** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Abouts
    * const abouts = await prisma.about.findMany()
    * ```
    */
  get about(): Prisma.aboutDelegate<ExtArgs>;

  /**
   * `prisma.contact`: Exposes CRUD operations for the **contact** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contacts
    * const contacts = await prisma.contact.findMany()
    * ```
    */
  get contact(): Prisma.contactDelegate<ExtArgs>;

  /**
   * `prisma.information`: Exposes CRUD operations for the **information** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Information
    * const information = await prisma.information.findMany()
    * ```
    */
  get information(): Prisma.informationDelegate<ExtArgs>;

  /**
   * `prisma.ecology`: Exposes CRUD operations for the **ecology** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ecologies
    * const ecologies = await prisma.ecology.findMany()
    * ```
    */
  get ecology(): Prisma.ecologyDelegate<ExtArgs>;

  /**
   * `prisma.productServices`: Exposes CRUD operations for the **productServices** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductServices
    * const productServices = await prisma.productServices.findMany()
    * ```
    */
  get productServices(): Prisma.productServicesDelegate<ExtArgs>;

  /**
   * `prisma.catalogs`: Exposes CRUD operations for the **catalogs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Catalogs
    * const catalogs = await prisma.catalogs.findMany()
    * ```
    */
  get catalogs(): Prisma.catalogsDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.6.0
   * Query Engine version: e95e739751f42d8ca026f6b910f5a2dc5adeaeee
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

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
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
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

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    users: 'users',
    news: 'news',
    projects: 'projects',
    partners: 'partners',
    gallery: 'gallery',
    mails: 'mails',
    about: 'about',
    contact: 'contact',
    information: 'information',
    ecology: 'ecology',
    productServices: 'productServices',
    catalogs: 'catalogs'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'users' | 'news' | 'projects' | 'partners' | 'gallery' | 'mails' | 'about' | 'contact' | 'information' | 'ecology' | 'productServices' | 'catalogs'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>,
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      news: {
        payload: Prisma.$newsPayload<ExtArgs>
        fields: Prisma.newsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.newsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$newsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.newsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$newsPayload>
          }
          findFirst: {
            args: Prisma.newsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$newsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.newsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$newsPayload>
          }
          findMany: {
            args: Prisma.newsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$newsPayload>[]
          }
          create: {
            args: Prisma.newsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$newsPayload>
          }
          createMany: {
            args: Prisma.newsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.newsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$newsPayload>
          }
          update: {
            args: Prisma.newsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$newsPayload>
          }
          deleteMany: {
            args: Prisma.newsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.newsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.newsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$newsPayload>
          }
          aggregate: {
            args: Prisma.NewsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateNews>
          }
          groupBy: {
            args: Prisma.newsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<NewsGroupByOutputType>[]
          }
          count: {
            args: Prisma.newsCountArgs<ExtArgs>,
            result: $Utils.Optional<NewsCountAggregateOutputType> | number
          }
        }
      }
      projects: {
        payload: Prisma.$projectsPayload<ExtArgs>
        fields: Prisma.projectsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.projectsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$projectsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.projectsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>
          }
          findFirst: {
            args: Prisma.projectsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$projectsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.projectsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>
          }
          findMany: {
            args: Prisma.projectsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>[]
          }
          create: {
            args: Prisma.projectsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>
          }
          createMany: {
            args: Prisma.projectsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.projectsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>
          }
          update: {
            args: Prisma.projectsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>
          }
          deleteMany: {
            args: Prisma.projectsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.projectsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.projectsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>
          }
          aggregate: {
            args: Prisma.ProjectsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProjects>
          }
          groupBy: {
            args: Prisma.projectsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ProjectsGroupByOutputType>[]
          }
          count: {
            args: Prisma.projectsCountArgs<ExtArgs>,
            result: $Utils.Optional<ProjectsCountAggregateOutputType> | number
          }
        }
      }
      partners: {
        payload: Prisma.$partnersPayload<ExtArgs>
        fields: Prisma.partnersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.partnersFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$partnersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.partnersFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$partnersPayload>
          }
          findFirst: {
            args: Prisma.partnersFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$partnersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.partnersFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$partnersPayload>
          }
          findMany: {
            args: Prisma.partnersFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$partnersPayload>[]
          }
          create: {
            args: Prisma.partnersCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$partnersPayload>
          }
          createMany: {
            args: Prisma.partnersCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.partnersDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$partnersPayload>
          }
          update: {
            args: Prisma.partnersUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$partnersPayload>
          }
          deleteMany: {
            args: Prisma.partnersDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.partnersUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.partnersUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$partnersPayload>
          }
          aggregate: {
            args: Prisma.PartnersAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePartners>
          }
          groupBy: {
            args: Prisma.partnersGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PartnersGroupByOutputType>[]
          }
          count: {
            args: Prisma.partnersCountArgs<ExtArgs>,
            result: $Utils.Optional<PartnersCountAggregateOutputType> | number
          }
        }
      }
      gallery: {
        payload: Prisma.$galleryPayload<ExtArgs>
        fields: Prisma.galleryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.galleryFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$galleryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.galleryFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$galleryPayload>
          }
          findFirst: {
            args: Prisma.galleryFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$galleryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.galleryFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$galleryPayload>
          }
          findMany: {
            args: Prisma.galleryFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$galleryPayload>[]
          }
          create: {
            args: Prisma.galleryCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$galleryPayload>
          }
          createMany: {
            args: Prisma.galleryCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.galleryDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$galleryPayload>
          }
          update: {
            args: Prisma.galleryUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$galleryPayload>
          }
          deleteMany: {
            args: Prisma.galleryDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.galleryUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.galleryUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$galleryPayload>
          }
          aggregate: {
            args: Prisma.GalleryAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateGallery>
          }
          groupBy: {
            args: Prisma.galleryGroupByArgs<ExtArgs>,
            result: $Utils.Optional<GalleryGroupByOutputType>[]
          }
          count: {
            args: Prisma.galleryCountArgs<ExtArgs>,
            result: $Utils.Optional<GalleryCountAggregateOutputType> | number
          }
        }
      }
      mails: {
        payload: Prisma.$mailsPayload<ExtArgs>
        fields: Prisma.mailsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.mailsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$mailsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.mailsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$mailsPayload>
          }
          findFirst: {
            args: Prisma.mailsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$mailsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.mailsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$mailsPayload>
          }
          findMany: {
            args: Prisma.mailsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$mailsPayload>[]
          }
          create: {
            args: Prisma.mailsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$mailsPayload>
          }
          createMany: {
            args: Prisma.mailsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.mailsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$mailsPayload>
          }
          update: {
            args: Prisma.mailsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$mailsPayload>
          }
          deleteMany: {
            args: Prisma.mailsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.mailsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.mailsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$mailsPayload>
          }
          aggregate: {
            args: Prisma.MailsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMails>
          }
          groupBy: {
            args: Prisma.mailsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MailsGroupByOutputType>[]
          }
          count: {
            args: Prisma.mailsCountArgs<ExtArgs>,
            result: $Utils.Optional<MailsCountAggregateOutputType> | number
          }
        }
      }
      about: {
        payload: Prisma.$aboutPayload<ExtArgs>
        fields: Prisma.aboutFieldRefs
        operations: {
          findUnique: {
            args: Prisma.aboutFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$aboutPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.aboutFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$aboutPayload>
          }
          findFirst: {
            args: Prisma.aboutFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$aboutPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.aboutFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$aboutPayload>
          }
          findMany: {
            args: Prisma.aboutFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$aboutPayload>[]
          }
          create: {
            args: Prisma.aboutCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$aboutPayload>
          }
          createMany: {
            args: Prisma.aboutCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.aboutDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$aboutPayload>
          }
          update: {
            args: Prisma.aboutUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$aboutPayload>
          }
          deleteMany: {
            args: Prisma.aboutDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.aboutUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.aboutUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$aboutPayload>
          }
          aggregate: {
            args: Prisma.AboutAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAbout>
          }
          groupBy: {
            args: Prisma.aboutGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AboutGroupByOutputType>[]
          }
          count: {
            args: Prisma.aboutCountArgs<ExtArgs>,
            result: $Utils.Optional<AboutCountAggregateOutputType> | number
          }
        }
      }
      contact: {
        payload: Prisma.$contactPayload<ExtArgs>
        fields: Prisma.contactFieldRefs
        operations: {
          findUnique: {
            args: Prisma.contactFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$contactPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.contactFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$contactPayload>
          }
          findFirst: {
            args: Prisma.contactFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$contactPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.contactFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$contactPayload>
          }
          findMany: {
            args: Prisma.contactFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$contactPayload>[]
          }
          create: {
            args: Prisma.contactCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$contactPayload>
          }
          createMany: {
            args: Prisma.contactCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.contactDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$contactPayload>
          }
          update: {
            args: Prisma.contactUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$contactPayload>
          }
          deleteMany: {
            args: Prisma.contactDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.contactUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.contactUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$contactPayload>
          }
          aggregate: {
            args: Prisma.ContactAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateContact>
          }
          groupBy: {
            args: Prisma.contactGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ContactGroupByOutputType>[]
          }
          count: {
            args: Prisma.contactCountArgs<ExtArgs>,
            result: $Utils.Optional<ContactCountAggregateOutputType> | number
          }
        }
      }
      information: {
        payload: Prisma.$informationPayload<ExtArgs>
        fields: Prisma.informationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.informationFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$informationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.informationFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$informationPayload>
          }
          findFirst: {
            args: Prisma.informationFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$informationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.informationFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$informationPayload>
          }
          findMany: {
            args: Prisma.informationFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$informationPayload>[]
          }
          create: {
            args: Prisma.informationCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$informationPayload>
          }
          createMany: {
            args: Prisma.informationCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.informationDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$informationPayload>
          }
          update: {
            args: Prisma.informationUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$informationPayload>
          }
          deleteMany: {
            args: Prisma.informationDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.informationUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.informationUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$informationPayload>
          }
          aggregate: {
            args: Prisma.InformationAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateInformation>
          }
          groupBy: {
            args: Prisma.informationGroupByArgs<ExtArgs>,
            result: $Utils.Optional<InformationGroupByOutputType>[]
          }
          count: {
            args: Prisma.informationCountArgs<ExtArgs>,
            result: $Utils.Optional<InformationCountAggregateOutputType> | number
          }
        }
      }
      ecology: {
        payload: Prisma.$ecologyPayload<ExtArgs>
        fields: Prisma.ecologyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ecologyFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ecologyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ecologyFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ecologyPayload>
          }
          findFirst: {
            args: Prisma.ecologyFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ecologyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ecologyFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ecologyPayload>
          }
          findMany: {
            args: Prisma.ecologyFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ecologyPayload>[]
          }
          create: {
            args: Prisma.ecologyCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ecologyPayload>
          }
          createMany: {
            args: Prisma.ecologyCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ecologyDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ecologyPayload>
          }
          update: {
            args: Prisma.ecologyUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ecologyPayload>
          }
          deleteMany: {
            args: Prisma.ecologyDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ecologyUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ecologyUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ecologyPayload>
          }
          aggregate: {
            args: Prisma.EcologyAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateEcology>
          }
          groupBy: {
            args: Prisma.ecologyGroupByArgs<ExtArgs>,
            result: $Utils.Optional<EcologyGroupByOutputType>[]
          }
          count: {
            args: Prisma.ecologyCountArgs<ExtArgs>,
            result: $Utils.Optional<EcologyCountAggregateOutputType> | number
          }
        }
      }
      productServices: {
        payload: Prisma.$productServicesPayload<ExtArgs>
        fields: Prisma.productServicesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.productServicesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$productServicesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.productServicesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$productServicesPayload>
          }
          findFirst: {
            args: Prisma.productServicesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$productServicesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.productServicesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$productServicesPayload>
          }
          findMany: {
            args: Prisma.productServicesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$productServicesPayload>[]
          }
          create: {
            args: Prisma.productServicesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$productServicesPayload>
          }
          createMany: {
            args: Prisma.productServicesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.productServicesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$productServicesPayload>
          }
          update: {
            args: Prisma.productServicesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$productServicesPayload>
          }
          deleteMany: {
            args: Prisma.productServicesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.productServicesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.productServicesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$productServicesPayload>
          }
          aggregate: {
            args: Prisma.ProductServicesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProductServices>
          }
          groupBy: {
            args: Prisma.productServicesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ProductServicesGroupByOutputType>[]
          }
          count: {
            args: Prisma.productServicesCountArgs<ExtArgs>,
            result: $Utils.Optional<ProductServicesCountAggregateOutputType> | number
          }
        }
      }
      catalogs: {
        payload: Prisma.$catalogsPayload<ExtArgs>
        fields: Prisma.catalogsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.catalogsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$catalogsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.catalogsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$catalogsPayload>
          }
          findFirst: {
            args: Prisma.catalogsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$catalogsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.catalogsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$catalogsPayload>
          }
          findMany: {
            args: Prisma.catalogsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$catalogsPayload>[]
          }
          create: {
            args: Prisma.catalogsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$catalogsPayload>
          }
          createMany: {
            args: Prisma.catalogsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.catalogsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$catalogsPayload>
          }
          update: {
            args: Prisma.catalogsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$catalogsPayload>
          }
          deleteMany: {
            args: Prisma.catalogsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.catalogsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.catalogsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$catalogsPayload>
          }
          aggregate: {
            args: Prisma.CatalogsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCatalogs>
          }
          groupBy: {
            args: Prisma.catalogsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CatalogsGroupByOutputType>[]
          }
          count: {
            args: Prisma.catalogsCountArgs<ExtArgs>,
            result: $Utils.Optional<CatalogsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    about: number
    news: number
    projects: number
    gallery: number
    partners: number
    readMails: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    about?: boolean | UsersCountOutputTypeCountAboutArgs
    news?: boolean | UsersCountOutputTypeCountNewsArgs
    projects?: boolean | UsersCountOutputTypeCountProjectsArgs
    gallery?: boolean | UsersCountOutputTypeCountGalleryArgs
    partners?: boolean | UsersCountOutputTypeCountPartnersArgs
    readMails?: boolean | UsersCountOutputTypeCountReadMailsArgs
  }

  // Custom InputTypes

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountAboutArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: aboutWhereInput
  }


  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountNewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: newsWhereInput
  }


  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: projectsWhereInput
  }


  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountGalleryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: galleryWhereInput
  }


  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountPartnersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: partnersWhereInput
  }


  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountReadMailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mailsWhereInput
  }



  /**
   * Models
   */

  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    userId: string | null
    username: string | null
    password: string | null
    createdAt: Date | null
    deletedAt: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    userId: string | null
    username: string | null
    password: string | null
    createdAt: Date | null
    deletedAt: Date | null
  }

  export type UsersCountAggregateOutputType = {
    userId: number
    username: number
    password: number
    createdAt: number
    deletedAt: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    userId?: true
    username?: true
    password?: true
    createdAt?: true
    deletedAt?: true
  }

  export type UsersMaxAggregateInputType = {
    userId?: true
    username?: true
    password?: true
    createdAt?: true
    deletedAt?: true
  }

  export type UsersCountAggregateInputType = {
    userId?: true
    username?: true
    password?: true
    createdAt?: true
    deletedAt?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    userId: string
    username: string
    password: string
    createdAt: Date
    deletedAt: Date | null
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    username?: boolean
    password?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    about?: boolean | users$aboutArgs<ExtArgs>
    news?: boolean | users$newsArgs<ExtArgs>
    projects?: boolean | users$projectsArgs<ExtArgs>
    gallery?: boolean | users$galleryArgs<ExtArgs>
    partners?: boolean | users$partnersArgs<ExtArgs>
    readMails?: boolean | users$readMailsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    userId?: boolean
    username?: boolean
    password?: boolean
    createdAt?: boolean
    deletedAt?: boolean
  }

  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    about?: boolean | users$aboutArgs<ExtArgs>
    news?: boolean | users$newsArgs<ExtArgs>
    projects?: boolean | users$projectsArgs<ExtArgs>
    gallery?: boolean | users$galleryArgs<ExtArgs>
    partners?: boolean | users$partnersArgs<ExtArgs>
    readMails?: boolean | users$readMailsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      about: Prisma.$aboutPayload<ExtArgs>[]
      news: Prisma.$newsPayload<ExtArgs>[]
      projects: Prisma.$projectsPayload<ExtArgs>[]
      gallery: Prisma.$galleryPayload<ExtArgs>[]
      partners: Prisma.$partnersPayload<ExtArgs>[]
      readMails: Prisma.$mailsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      username: string
      password: string
      createdAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }


  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends usersFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Users that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends usersFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const usersWithUserIdOnly = await prisma.users.findMany({ select: { userId: true } })
     * 
    **/
    findMany<T extends usersFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
    **/
    create<T extends usersCreateArgs<ExtArgs>>(
      args: SelectSubset<T, usersCreateArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {usersCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const users = await prisma.users.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends usersCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
    **/
    delete<T extends usersDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, usersDeleteArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends usersUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, usersUpdateArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends usersDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends usersUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
    **/
    upsert<T extends usersUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, usersUpsertArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
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
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    about<T extends users$aboutArgs<ExtArgs> = {}>(args?: Subset<T, users$aboutArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$aboutPayload<ExtArgs>, T, 'findMany'> | Null>;

    news<T extends users$newsArgs<ExtArgs> = {}>(args?: Subset<T, users$newsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$newsPayload<ExtArgs>, T, 'findMany'> | Null>;

    projects<T extends users$projectsArgs<ExtArgs> = {}>(args?: Subset<T, users$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, 'findMany'> | Null>;

    gallery<T extends users$galleryArgs<ExtArgs> = {}>(args?: Subset<T, users$galleryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$galleryPayload<ExtArgs>, T, 'findMany'> | Null>;

    partners<T extends users$partnersArgs<ExtArgs> = {}>(args?: Subset<T, users$partnersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$partnersPayload<ExtArgs>, T, 'findMany'> | Null>;

    readMails<T extends users$readMailsArgs<ExtArgs> = {}>(args?: Subset<T, users$readMailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mailsPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the users model
   */ 
  interface usersFieldRefs {
    readonly userId: FieldRef<"users", 'String'>
    readonly username: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly createdAt: FieldRef<"users", 'DateTime'>
    readonly deletedAt: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }


  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }


  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }


  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }


  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }


  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }


  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }


  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
  }


  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }


  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }


  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
  }


  /**
   * users.about
   */
  export type users$aboutArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the about
     */
    select?: aboutSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: aboutInclude<ExtArgs> | null
    where?: aboutWhereInput
    orderBy?: aboutOrderByWithRelationInput | aboutOrderByWithRelationInput[]
    cursor?: aboutWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AboutScalarFieldEnum | AboutScalarFieldEnum[]
  }


  /**
   * users.news
   */
  export type users$newsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the news
     */
    select?: newsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: newsInclude<ExtArgs> | null
    where?: newsWhereInput
    orderBy?: newsOrderByWithRelationInput | newsOrderByWithRelationInput[]
    cursor?: newsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NewsScalarFieldEnum | NewsScalarFieldEnum[]
  }


  /**
   * users.projects
   */
  export type users$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: projectsInclude<ExtArgs> | null
    where?: projectsWhereInput
    orderBy?: projectsOrderByWithRelationInput | projectsOrderByWithRelationInput[]
    cursor?: projectsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectsScalarFieldEnum | ProjectsScalarFieldEnum[]
  }


  /**
   * users.gallery
   */
  export type users$galleryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gallery
     */
    select?: gallerySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: galleryInclude<ExtArgs> | null
    where?: galleryWhereInput
    orderBy?: galleryOrderByWithRelationInput | galleryOrderByWithRelationInput[]
    cursor?: galleryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GalleryScalarFieldEnum | GalleryScalarFieldEnum[]
  }


  /**
   * users.partners
   */
  export type users$partnersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the partners
     */
    select?: partnersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: partnersInclude<ExtArgs> | null
    where?: partnersWhereInput
    orderBy?: partnersOrderByWithRelationInput | partnersOrderByWithRelationInput[]
    cursor?: partnersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PartnersScalarFieldEnum | PartnersScalarFieldEnum[]
  }


  /**
   * users.readMails
   */
  export type users$readMailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mails
     */
    select?: mailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: mailsInclude<ExtArgs> | null
    where?: mailsWhereInput
    orderBy?: mailsOrderByWithRelationInput | mailsOrderByWithRelationInput[]
    cursor?: mailsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MailsScalarFieldEnum | MailsScalarFieldEnum[]
  }


  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
  }



  /**
   * Model news
   */

  export type AggregateNews = {
    _count: NewsCountAggregateOutputType | null
    _avg: NewsAvgAggregateOutputType | null
    _sum: NewsSumAggregateOutputType | null
    _min: NewsMinAggregateOutputType | null
    _max: NewsMaxAggregateOutputType | null
  }

  export type NewsAvgAggregateOutputType = {
    priority: number | null
  }

  export type NewsSumAggregateOutputType = {
    priority: number | null
  }

  export type NewsMinAggregateOutputType = {
    newsId: string | null
    titleTm: string | null
    contentTm: string | null
    titleRu: string | null
    contentRu: string | null
    titleEn: string | null
    contentEn: string | null
    image: string | null
    video: string | null
    published: boolean | null
    isMain: boolean | null
    homeActivity: boolean | null
    priority: number | null
    createdAt: Date | null
    deletedAt: Date | null
    authorId: string | null
  }

  export type NewsMaxAggregateOutputType = {
    newsId: string | null
    titleTm: string | null
    contentTm: string | null
    titleRu: string | null
    contentRu: string | null
    titleEn: string | null
    contentEn: string | null
    image: string | null
    video: string | null
    published: boolean | null
    isMain: boolean | null
    homeActivity: boolean | null
    priority: number | null
    createdAt: Date | null
    deletedAt: Date | null
    authorId: string | null
  }

  export type NewsCountAggregateOutputType = {
    newsId: number
    titleTm: number
    contentTm: number
    titleRu: number
    contentRu: number
    titleEn: number
    contentEn: number
    image: number
    video: number
    published: number
    isMain: number
    homeActivity: number
    priority: number
    createdAt: number
    deletedAt: number
    authorId: number
    _all: number
  }


  export type NewsAvgAggregateInputType = {
    priority?: true
  }

  export type NewsSumAggregateInputType = {
    priority?: true
  }

  export type NewsMinAggregateInputType = {
    newsId?: true
    titleTm?: true
    contentTm?: true
    titleRu?: true
    contentRu?: true
    titleEn?: true
    contentEn?: true
    image?: true
    video?: true
    published?: true
    isMain?: true
    homeActivity?: true
    priority?: true
    createdAt?: true
    deletedAt?: true
    authorId?: true
  }

  export type NewsMaxAggregateInputType = {
    newsId?: true
    titleTm?: true
    contentTm?: true
    titleRu?: true
    contentRu?: true
    titleEn?: true
    contentEn?: true
    image?: true
    video?: true
    published?: true
    isMain?: true
    homeActivity?: true
    priority?: true
    createdAt?: true
    deletedAt?: true
    authorId?: true
  }

  export type NewsCountAggregateInputType = {
    newsId?: true
    titleTm?: true
    contentTm?: true
    titleRu?: true
    contentRu?: true
    titleEn?: true
    contentEn?: true
    image?: true
    video?: true
    published?: true
    isMain?: true
    homeActivity?: true
    priority?: true
    createdAt?: true
    deletedAt?: true
    authorId?: true
    _all?: true
  }

  export type NewsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which news to aggregate.
     */
    where?: newsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of news to fetch.
     */
    orderBy?: newsOrderByWithRelationInput | newsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: newsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` news from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` news.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned news
    **/
    _count?: true | NewsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NewsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NewsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NewsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NewsMaxAggregateInputType
  }

  export type GetNewsAggregateType<T extends NewsAggregateArgs> = {
        [P in keyof T & keyof AggregateNews]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNews[P]>
      : GetScalarType<T[P], AggregateNews[P]>
  }




  export type newsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: newsWhereInput
    orderBy?: newsOrderByWithAggregationInput | newsOrderByWithAggregationInput[]
    by: NewsScalarFieldEnum[] | NewsScalarFieldEnum
    having?: newsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NewsCountAggregateInputType | true
    _avg?: NewsAvgAggregateInputType
    _sum?: NewsSumAggregateInputType
    _min?: NewsMinAggregateInputType
    _max?: NewsMaxAggregateInputType
  }

  export type NewsGroupByOutputType = {
    newsId: string
    titleTm: string
    contentTm: string
    titleRu: string
    contentRu: string
    titleEn: string
    contentEn: string
    image: string
    video: string | null
    published: boolean
    isMain: boolean
    homeActivity: boolean
    priority: number | null
    createdAt: Date
    deletedAt: Date | null
    authorId: string
    _count: NewsCountAggregateOutputType | null
    _avg: NewsAvgAggregateOutputType | null
    _sum: NewsSumAggregateOutputType | null
    _min: NewsMinAggregateOutputType | null
    _max: NewsMaxAggregateOutputType | null
  }

  type GetNewsGroupByPayload<T extends newsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NewsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NewsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NewsGroupByOutputType[P]>
            : GetScalarType<T[P], NewsGroupByOutputType[P]>
        }
      >
    >


  export type newsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    newsId?: boolean
    titleTm?: boolean
    contentTm?: boolean
    titleRu?: boolean
    contentRu?: boolean
    titleEn?: boolean
    contentEn?: boolean
    image?: boolean
    video?: boolean
    published?: boolean
    isMain?: boolean
    homeActivity?: boolean
    priority?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    authorId?: boolean
    author?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["news"]>

  export type newsSelectScalar = {
    newsId?: boolean
    titleTm?: boolean
    contentTm?: boolean
    titleRu?: boolean
    contentRu?: boolean
    titleEn?: boolean
    contentEn?: boolean
    image?: boolean
    video?: boolean
    published?: boolean
    isMain?: boolean
    homeActivity?: boolean
    priority?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    authorId?: boolean
  }

  export type newsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | usersDefaultArgs<ExtArgs>
  }


  export type $newsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "news"
    objects: {
      author: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      newsId: string
      titleTm: string
      contentTm: string
      titleRu: string
      contentRu: string
      titleEn: string
      contentEn: string
      image: string
      video: string | null
      published: boolean
      isMain: boolean
      homeActivity: boolean
      priority: number | null
      createdAt: Date
      deletedAt: Date | null
      authorId: string
    }, ExtArgs["result"]["news"]>
    composites: {}
  }


  type newsGetPayload<S extends boolean | null | undefined | newsDefaultArgs> = $Result.GetResult<Prisma.$newsPayload, S>

  type newsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<newsFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: NewsCountAggregateInputType | true
    }

  export interface newsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['news'], meta: { name: 'news' } }
    /**
     * Find zero or one News that matches the filter.
     * @param {newsFindUniqueArgs} args - Arguments to find a News
     * @example
     * // Get one News
     * const news = await prisma.news.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends newsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, newsFindUniqueArgs<ExtArgs>>
    ): Prisma__newsClient<$Result.GetResult<Prisma.$newsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one News that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {newsFindUniqueOrThrowArgs} args - Arguments to find a News
     * @example
     * // Get one News
     * const news = await prisma.news.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends newsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, newsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__newsClient<$Result.GetResult<Prisma.$newsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first News that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {newsFindFirstArgs} args - Arguments to find a News
     * @example
     * // Get one News
     * const news = await prisma.news.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends newsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, newsFindFirstArgs<ExtArgs>>
    ): Prisma__newsClient<$Result.GetResult<Prisma.$newsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first News that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {newsFindFirstOrThrowArgs} args - Arguments to find a News
     * @example
     * // Get one News
     * const news = await prisma.news.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends newsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, newsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__newsClient<$Result.GetResult<Prisma.$newsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more News that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {newsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all News
     * const news = await prisma.news.findMany()
     * 
     * // Get first 10 News
     * const news = await prisma.news.findMany({ take: 10 })
     * 
     * // Only select the `newsId`
     * const newsWithNewsIdOnly = await prisma.news.findMany({ select: { newsId: true } })
     * 
    **/
    findMany<T extends newsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, newsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$newsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a News.
     * @param {newsCreateArgs} args - Arguments to create a News.
     * @example
     * // Create one News
     * const News = await prisma.news.create({
     *   data: {
     *     // ... data to create a News
     *   }
     * })
     * 
    **/
    create<T extends newsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, newsCreateArgs<ExtArgs>>
    ): Prisma__newsClient<$Result.GetResult<Prisma.$newsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many News.
     *     @param {newsCreateManyArgs} args - Arguments to create many News.
     *     @example
     *     // Create many News
     *     const news = await prisma.news.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends newsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, newsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a News.
     * @param {newsDeleteArgs} args - Arguments to delete one News.
     * @example
     * // Delete one News
     * const News = await prisma.news.delete({
     *   where: {
     *     // ... filter to delete one News
     *   }
     * })
     * 
    **/
    delete<T extends newsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, newsDeleteArgs<ExtArgs>>
    ): Prisma__newsClient<$Result.GetResult<Prisma.$newsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one News.
     * @param {newsUpdateArgs} args - Arguments to update one News.
     * @example
     * // Update one News
     * const news = await prisma.news.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends newsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, newsUpdateArgs<ExtArgs>>
    ): Prisma__newsClient<$Result.GetResult<Prisma.$newsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more News.
     * @param {newsDeleteManyArgs} args - Arguments to filter News to delete.
     * @example
     * // Delete a few News
     * const { count } = await prisma.news.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends newsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, newsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more News.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {newsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many News
     * const news = await prisma.news.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends newsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, newsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one News.
     * @param {newsUpsertArgs} args - Arguments to update or create a News.
     * @example
     * // Update or create a News
     * const news = await prisma.news.upsert({
     *   create: {
     *     // ... data to create a News
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the News we want to update
     *   }
     * })
    **/
    upsert<T extends newsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, newsUpsertArgs<ExtArgs>>
    ): Prisma__newsClient<$Result.GetResult<Prisma.$newsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of News.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {newsCountArgs} args - Arguments to filter News to count.
     * @example
     * // Count the number of News
     * const count = await prisma.news.count({
     *   where: {
     *     // ... the filter for the News we want to count
     *   }
     * })
    **/
    count<T extends newsCountArgs>(
      args?: Subset<T, newsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NewsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a News.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NewsAggregateArgs>(args: Subset<T, NewsAggregateArgs>): Prisma.PrismaPromise<GetNewsAggregateType<T>>

    /**
     * Group by News.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {newsGroupByArgs} args - Group by arguments.
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
    groupBy<
      T extends newsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: newsGroupByArgs['orderBy'] }
        : { orderBy?: newsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, newsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNewsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the news model
   */
  readonly fields: newsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for news.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__newsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    author<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the news model
   */ 
  interface newsFieldRefs {
    readonly newsId: FieldRef<"news", 'String'>
    readonly titleTm: FieldRef<"news", 'String'>
    readonly contentTm: FieldRef<"news", 'String'>
    readonly titleRu: FieldRef<"news", 'String'>
    readonly contentRu: FieldRef<"news", 'String'>
    readonly titleEn: FieldRef<"news", 'String'>
    readonly contentEn: FieldRef<"news", 'String'>
    readonly image: FieldRef<"news", 'String'>
    readonly video: FieldRef<"news", 'String'>
    readonly published: FieldRef<"news", 'Boolean'>
    readonly isMain: FieldRef<"news", 'Boolean'>
    readonly homeActivity: FieldRef<"news", 'Boolean'>
    readonly priority: FieldRef<"news", 'Int'>
    readonly createdAt: FieldRef<"news", 'DateTime'>
    readonly deletedAt: FieldRef<"news", 'DateTime'>
    readonly authorId: FieldRef<"news", 'String'>
  }
    

  // Custom InputTypes

  /**
   * news findUnique
   */
  export type newsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the news
     */
    select?: newsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: newsInclude<ExtArgs> | null
    /**
     * Filter, which news to fetch.
     */
    where: newsWhereUniqueInput
  }


  /**
   * news findUniqueOrThrow
   */
  export type newsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the news
     */
    select?: newsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: newsInclude<ExtArgs> | null
    /**
     * Filter, which news to fetch.
     */
    where: newsWhereUniqueInput
  }


  /**
   * news findFirst
   */
  export type newsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the news
     */
    select?: newsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: newsInclude<ExtArgs> | null
    /**
     * Filter, which news to fetch.
     */
    where?: newsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of news to fetch.
     */
    orderBy?: newsOrderByWithRelationInput | newsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for news.
     */
    cursor?: newsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` news from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` news.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of news.
     */
    distinct?: NewsScalarFieldEnum | NewsScalarFieldEnum[]
  }


  /**
   * news findFirstOrThrow
   */
  export type newsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the news
     */
    select?: newsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: newsInclude<ExtArgs> | null
    /**
     * Filter, which news to fetch.
     */
    where?: newsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of news to fetch.
     */
    orderBy?: newsOrderByWithRelationInput | newsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for news.
     */
    cursor?: newsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` news from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` news.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of news.
     */
    distinct?: NewsScalarFieldEnum | NewsScalarFieldEnum[]
  }


  /**
   * news findMany
   */
  export type newsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the news
     */
    select?: newsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: newsInclude<ExtArgs> | null
    /**
     * Filter, which news to fetch.
     */
    where?: newsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of news to fetch.
     */
    orderBy?: newsOrderByWithRelationInput | newsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing news.
     */
    cursor?: newsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` news from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` news.
     */
    skip?: number
    distinct?: NewsScalarFieldEnum | NewsScalarFieldEnum[]
  }


  /**
   * news create
   */
  export type newsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the news
     */
    select?: newsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: newsInclude<ExtArgs> | null
    /**
     * The data needed to create a news.
     */
    data: XOR<newsCreateInput, newsUncheckedCreateInput>
  }


  /**
   * news createMany
   */
  export type newsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many news.
     */
    data: newsCreateManyInput | newsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * news update
   */
  export type newsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the news
     */
    select?: newsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: newsInclude<ExtArgs> | null
    /**
     * The data needed to update a news.
     */
    data: XOR<newsUpdateInput, newsUncheckedUpdateInput>
    /**
     * Choose, which news to update.
     */
    where: newsWhereUniqueInput
  }


  /**
   * news updateMany
   */
  export type newsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update news.
     */
    data: XOR<newsUpdateManyMutationInput, newsUncheckedUpdateManyInput>
    /**
     * Filter which news to update
     */
    where?: newsWhereInput
  }


  /**
   * news upsert
   */
  export type newsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the news
     */
    select?: newsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: newsInclude<ExtArgs> | null
    /**
     * The filter to search for the news to update in case it exists.
     */
    where: newsWhereUniqueInput
    /**
     * In case the news found by the `where` argument doesn't exist, create a new news with this data.
     */
    create: XOR<newsCreateInput, newsUncheckedCreateInput>
    /**
     * In case the news was found with the provided `where` argument, update it with this data.
     */
    update: XOR<newsUpdateInput, newsUncheckedUpdateInput>
  }


  /**
   * news delete
   */
  export type newsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the news
     */
    select?: newsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: newsInclude<ExtArgs> | null
    /**
     * Filter which news to delete.
     */
    where: newsWhereUniqueInput
  }


  /**
   * news deleteMany
   */
  export type newsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which news to delete
     */
    where?: newsWhereInput
  }


  /**
   * news without action
   */
  export type newsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the news
     */
    select?: newsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: newsInclude<ExtArgs> | null
  }



  /**
   * Model projects
   */

  export type AggregateProjects = {
    _count: ProjectsCountAggregateOutputType | null
    _avg: ProjectsAvgAggregateOutputType | null
    _sum: ProjectsSumAggregateOutputType | null
    _min: ProjectsMinAggregateOutputType | null
    _max: ProjectsMaxAggregateOutputType | null
  }

  export type ProjectsAvgAggregateOutputType = {
    priority: number | null
  }

  export type ProjectsSumAggregateOutputType = {
    priority: number | null
  }

  export type ProjectsMinAggregateOutputType = {
    projectId: string | null
    nameTm: string | null
    nameRu: string | null
    nameEn: string | null
    descriptionTm: string | null
    descriptionRu: string | null
    descriptionEn: string | null
    company: string | null
    logo: string | null
    workDate: Date | null
    cover: string | null
    priority: number | null
    homeActivity: boolean | null
    createdAt: Date | null
    deletedAt: Date | null
    authorId: string | null
  }

  export type ProjectsMaxAggregateOutputType = {
    projectId: string | null
    nameTm: string | null
    nameRu: string | null
    nameEn: string | null
    descriptionTm: string | null
    descriptionRu: string | null
    descriptionEn: string | null
    company: string | null
    logo: string | null
    workDate: Date | null
    cover: string | null
    priority: number | null
    homeActivity: boolean | null
    createdAt: Date | null
    deletedAt: Date | null
    authorId: string | null
  }

  export type ProjectsCountAggregateOutputType = {
    projectId: number
    nameTm: number
    nameRu: number
    nameEn: number
    descriptionTm: number
    descriptionRu: number
    descriptionEn: number
    company: number
    logo: number
    workDate: number
    images: number
    cover: number
    priority: number
    homeActivity: number
    createdAt: number
    deletedAt: number
    authorId: number
    _all: number
  }


  export type ProjectsAvgAggregateInputType = {
    priority?: true
  }

  export type ProjectsSumAggregateInputType = {
    priority?: true
  }

  export type ProjectsMinAggregateInputType = {
    projectId?: true
    nameTm?: true
    nameRu?: true
    nameEn?: true
    descriptionTm?: true
    descriptionRu?: true
    descriptionEn?: true
    company?: true
    logo?: true
    workDate?: true
    cover?: true
    priority?: true
    homeActivity?: true
    createdAt?: true
    deletedAt?: true
    authorId?: true
  }

  export type ProjectsMaxAggregateInputType = {
    projectId?: true
    nameTm?: true
    nameRu?: true
    nameEn?: true
    descriptionTm?: true
    descriptionRu?: true
    descriptionEn?: true
    company?: true
    logo?: true
    workDate?: true
    cover?: true
    priority?: true
    homeActivity?: true
    createdAt?: true
    deletedAt?: true
    authorId?: true
  }

  export type ProjectsCountAggregateInputType = {
    projectId?: true
    nameTm?: true
    nameRu?: true
    nameEn?: true
    descriptionTm?: true
    descriptionRu?: true
    descriptionEn?: true
    company?: true
    logo?: true
    workDate?: true
    images?: true
    cover?: true
    priority?: true
    homeActivity?: true
    createdAt?: true
    deletedAt?: true
    authorId?: true
    _all?: true
  }

  export type ProjectsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which projects to aggregate.
     */
    where?: projectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectsOrderByWithRelationInput | projectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: projectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned projects
    **/
    _count?: true | ProjectsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectsMaxAggregateInputType
  }

  export type GetProjectsAggregateType<T extends ProjectsAggregateArgs> = {
        [P in keyof T & keyof AggregateProjects]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjects[P]>
      : GetScalarType<T[P], AggregateProjects[P]>
  }




  export type projectsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: projectsWhereInput
    orderBy?: projectsOrderByWithAggregationInput | projectsOrderByWithAggregationInput[]
    by: ProjectsScalarFieldEnum[] | ProjectsScalarFieldEnum
    having?: projectsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectsCountAggregateInputType | true
    _avg?: ProjectsAvgAggregateInputType
    _sum?: ProjectsSumAggregateInputType
    _min?: ProjectsMinAggregateInputType
    _max?: ProjectsMaxAggregateInputType
  }

  export type ProjectsGroupByOutputType = {
    projectId: string
    nameTm: string
    nameRu: string
    nameEn: string
    descriptionTm: string
    descriptionRu: string
    descriptionEn: string
    company: string
    logo: string
    workDate: Date
    images: string[]
    cover: string
    priority: number | null
    homeActivity: boolean
    createdAt: Date
    deletedAt: Date | null
    authorId: string
    _count: ProjectsCountAggregateOutputType | null
    _avg: ProjectsAvgAggregateOutputType | null
    _sum: ProjectsSumAggregateOutputType | null
    _min: ProjectsMinAggregateOutputType | null
    _max: ProjectsMaxAggregateOutputType | null
  }

  type GetProjectsGroupByPayload<T extends projectsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectsGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectsGroupByOutputType[P]>
        }
      >
    >


  export type projectsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    projectId?: boolean
    nameTm?: boolean
    nameRu?: boolean
    nameEn?: boolean
    descriptionTm?: boolean
    descriptionRu?: boolean
    descriptionEn?: boolean
    company?: boolean
    logo?: boolean
    workDate?: boolean
    images?: boolean
    cover?: boolean
    priority?: boolean
    homeActivity?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    authorId?: boolean
    author?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projects"]>

  export type projectsSelectScalar = {
    projectId?: boolean
    nameTm?: boolean
    nameRu?: boolean
    nameEn?: boolean
    descriptionTm?: boolean
    descriptionRu?: boolean
    descriptionEn?: boolean
    company?: boolean
    logo?: boolean
    workDate?: boolean
    images?: boolean
    cover?: boolean
    priority?: boolean
    homeActivity?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    authorId?: boolean
  }

  export type projectsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | usersDefaultArgs<ExtArgs>
  }


  export type $projectsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "projects"
    objects: {
      author: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      projectId: string
      nameTm: string
      nameRu: string
      nameEn: string
      descriptionTm: string
      descriptionRu: string
      descriptionEn: string
      company: string
      logo: string
      workDate: Date
      images: string[]
      cover: string
      priority: number | null
      homeActivity: boolean
      createdAt: Date
      deletedAt: Date | null
      authorId: string
    }, ExtArgs["result"]["projects"]>
    composites: {}
  }


  type projectsGetPayload<S extends boolean | null | undefined | projectsDefaultArgs> = $Result.GetResult<Prisma.$projectsPayload, S>

  type projectsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<projectsFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: ProjectsCountAggregateInputType | true
    }

  export interface projectsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['projects'], meta: { name: 'projects' } }
    /**
     * Find zero or one Projects that matches the filter.
     * @param {projectsFindUniqueArgs} args - Arguments to find a Projects
     * @example
     * // Get one Projects
     * const projects = await prisma.projects.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends projectsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, projectsFindUniqueArgs<ExtArgs>>
    ): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Projects that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {projectsFindUniqueOrThrowArgs} args - Arguments to find a Projects
     * @example
     * // Get one Projects
     * const projects = await prisma.projects.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends projectsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, projectsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectsFindFirstArgs} args - Arguments to find a Projects
     * @example
     * // Get one Projects
     * const projects = await prisma.projects.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends projectsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, projectsFindFirstArgs<ExtArgs>>
    ): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Projects that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectsFindFirstOrThrowArgs} args - Arguments to find a Projects
     * @example
     * // Get one Projects
     * const projects = await prisma.projects.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends projectsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, projectsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.projects.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.projects.findMany({ take: 10 })
     * 
     * // Only select the `projectId`
     * const projectsWithProjectIdOnly = await prisma.projects.findMany({ select: { projectId: true } })
     * 
    **/
    findMany<T extends projectsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, projectsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Projects.
     * @param {projectsCreateArgs} args - Arguments to create a Projects.
     * @example
     * // Create one Projects
     * const Projects = await prisma.projects.create({
     *   data: {
     *     // ... data to create a Projects
     *   }
     * })
     * 
    **/
    create<T extends projectsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, projectsCreateArgs<ExtArgs>>
    ): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Projects.
     *     @param {projectsCreateManyArgs} args - Arguments to create many Projects.
     *     @example
     *     // Create many Projects
     *     const projects = await prisma.projects.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends projectsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, projectsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Projects.
     * @param {projectsDeleteArgs} args - Arguments to delete one Projects.
     * @example
     * // Delete one Projects
     * const Projects = await prisma.projects.delete({
     *   where: {
     *     // ... filter to delete one Projects
     *   }
     * })
     * 
    **/
    delete<T extends projectsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, projectsDeleteArgs<ExtArgs>>
    ): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Projects.
     * @param {projectsUpdateArgs} args - Arguments to update one Projects.
     * @example
     * // Update one Projects
     * const projects = await prisma.projects.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends projectsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, projectsUpdateArgs<ExtArgs>>
    ): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Projects.
     * @param {projectsDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.projects.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends projectsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, projectsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const projects = await prisma.projects.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends projectsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, projectsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Projects.
     * @param {projectsUpsertArgs} args - Arguments to update or create a Projects.
     * @example
     * // Update or create a Projects
     * const projects = await prisma.projects.upsert({
     *   create: {
     *     // ... data to create a Projects
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Projects we want to update
     *   }
     * })
    **/
    upsert<T extends projectsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, projectsUpsertArgs<ExtArgs>>
    ): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectsCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.projects.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends projectsCountArgs>(
      args?: Subset<T, projectsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectsAggregateArgs>(args: Subset<T, ProjectsAggregateArgs>): Prisma.PrismaPromise<GetProjectsAggregateType<T>>

    /**
     * Group by Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectsGroupByArgs} args - Group by arguments.
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
    groupBy<
      T extends projectsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: projectsGroupByArgs['orderBy'] }
        : { orderBy?: projectsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, projectsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the projects model
   */
  readonly fields: projectsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for projects.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__projectsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    author<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the projects model
   */ 
  interface projectsFieldRefs {
    readonly projectId: FieldRef<"projects", 'String'>
    readonly nameTm: FieldRef<"projects", 'String'>
    readonly nameRu: FieldRef<"projects", 'String'>
    readonly nameEn: FieldRef<"projects", 'String'>
    readonly descriptionTm: FieldRef<"projects", 'String'>
    readonly descriptionRu: FieldRef<"projects", 'String'>
    readonly descriptionEn: FieldRef<"projects", 'String'>
    readonly company: FieldRef<"projects", 'String'>
    readonly logo: FieldRef<"projects", 'String'>
    readonly workDate: FieldRef<"projects", 'DateTime'>
    readonly images: FieldRef<"projects", 'String[]'>
    readonly cover: FieldRef<"projects", 'String'>
    readonly priority: FieldRef<"projects", 'Int'>
    readonly homeActivity: FieldRef<"projects", 'Boolean'>
    readonly createdAt: FieldRef<"projects", 'DateTime'>
    readonly deletedAt: FieldRef<"projects", 'DateTime'>
    readonly authorId: FieldRef<"projects", 'String'>
  }
    

  // Custom InputTypes

  /**
   * projects findUnique
   */
  export type projectsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: projectsInclude<ExtArgs> | null
    /**
     * Filter, which projects to fetch.
     */
    where: projectsWhereUniqueInput
  }


  /**
   * projects findUniqueOrThrow
   */
  export type projectsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: projectsInclude<ExtArgs> | null
    /**
     * Filter, which projects to fetch.
     */
    where: projectsWhereUniqueInput
  }


  /**
   * projects findFirst
   */
  export type projectsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: projectsInclude<ExtArgs> | null
    /**
     * Filter, which projects to fetch.
     */
    where?: projectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectsOrderByWithRelationInput | projectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for projects.
     */
    cursor?: projectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of projects.
     */
    distinct?: ProjectsScalarFieldEnum | ProjectsScalarFieldEnum[]
  }


  /**
   * projects findFirstOrThrow
   */
  export type projectsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: projectsInclude<ExtArgs> | null
    /**
     * Filter, which projects to fetch.
     */
    where?: projectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectsOrderByWithRelationInput | projectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for projects.
     */
    cursor?: projectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of projects.
     */
    distinct?: ProjectsScalarFieldEnum | ProjectsScalarFieldEnum[]
  }


  /**
   * projects findMany
   */
  export type projectsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: projectsInclude<ExtArgs> | null
    /**
     * Filter, which projects to fetch.
     */
    where?: projectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectsOrderByWithRelationInput | projectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing projects.
     */
    cursor?: projectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    distinct?: ProjectsScalarFieldEnum | ProjectsScalarFieldEnum[]
  }


  /**
   * projects create
   */
  export type projectsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: projectsInclude<ExtArgs> | null
    /**
     * The data needed to create a projects.
     */
    data: XOR<projectsCreateInput, projectsUncheckedCreateInput>
  }


  /**
   * projects createMany
   */
  export type projectsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many projects.
     */
    data: projectsCreateManyInput | projectsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * projects update
   */
  export type projectsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: projectsInclude<ExtArgs> | null
    /**
     * The data needed to update a projects.
     */
    data: XOR<projectsUpdateInput, projectsUncheckedUpdateInput>
    /**
     * Choose, which projects to update.
     */
    where: projectsWhereUniqueInput
  }


  /**
   * projects updateMany
   */
  export type projectsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update projects.
     */
    data: XOR<projectsUpdateManyMutationInput, projectsUncheckedUpdateManyInput>
    /**
     * Filter which projects to update
     */
    where?: projectsWhereInput
  }


  /**
   * projects upsert
   */
  export type projectsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: projectsInclude<ExtArgs> | null
    /**
     * The filter to search for the projects to update in case it exists.
     */
    where: projectsWhereUniqueInput
    /**
     * In case the projects found by the `where` argument doesn't exist, create a new projects with this data.
     */
    create: XOR<projectsCreateInput, projectsUncheckedCreateInput>
    /**
     * In case the projects was found with the provided `where` argument, update it with this data.
     */
    update: XOR<projectsUpdateInput, projectsUncheckedUpdateInput>
  }


  /**
   * projects delete
   */
  export type projectsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: projectsInclude<ExtArgs> | null
    /**
     * Filter which projects to delete.
     */
    where: projectsWhereUniqueInput
  }


  /**
   * projects deleteMany
   */
  export type projectsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which projects to delete
     */
    where?: projectsWhereInput
  }


  /**
   * projects without action
   */
  export type projectsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: projectsInclude<ExtArgs> | null
  }



  /**
   * Model partners
   */

  export type AggregatePartners = {
    _count: PartnersCountAggregateOutputType | null
    _avg: PartnersAvgAggregateOutputType | null
    _sum: PartnersSumAggregateOutputType | null
    _min: PartnersMinAggregateOutputType | null
    _max: PartnersMaxAggregateOutputType | null
  }

  export type PartnersAvgAggregateOutputType = {
    priority: number | null
  }

  export type PartnersSumAggregateOutputType = {
    priority: number | null
  }

  export type PartnersMinAggregateOutputType = {
    partnerId: string | null
    website: string | null
    fileUrl: string | null
    priority: number | null
    type: $Enums.partnerTypeEnum | null
    authorId: string | null
    createdAt: Date | null
    deletedAt: Date | null
  }

  export type PartnersMaxAggregateOutputType = {
    partnerId: string | null
    website: string | null
    fileUrl: string | null
    priority: number | null
    type: $Enums.partnerTypeEnum | null
    authorId: string | null
    createdAt: Date | null
    deletedAt: Date | null
  }

  export type PartnersCountAggregateOutputType = {
    partnerId: number
    website: number
    fileUrl: number
    priority: number
    type: number
    authorId: number
    createdAt: number
    deletedAt: number
    _all: number
  }


  export type PartnersAvgAggregateInputType = {
    priority?: true
  }

  export type PartnersSumAggregateInputType = {
    priority?: true
  }

  export type PartnersMinAggregateInputType = {
    partnerId?: true
    website?: true
    fileUrl?: true
    priority?: true
    type?: true
    authorId?: true
    createdAt?: true
    deletedAt?: true
  }

  export type PartnersMaxAggregateInputType = {
    partnerId?: true
    website?: true
    fileUrl?: true
    priority?: true
    type?: true
    authorId?: true
    createdAt?: true
    deletedAt?: true
  }

  export type PartnersCountAggregateInputType = {
    partnerId?: true
    website?: true
    fileUrl?: true
    priority?: true
    type?: true
    authorId?: true
    createdAt?: true
    deletedAt?: true
    _all?: true
  }

  export type PartnersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which partners to aggregate.
     */
    where?: partnersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of partners to fetch.
     */
    orderBy?: partnersOrderByWithRelationInput | partnersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: partnersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` partners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` partners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned partners
    **/
    _count?: true | PartnersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PartnersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PartnersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PartnersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PartnersMaxAggregateInputType
  }

  export type GetPartnersAggregateType<T extends PartnersAggregateArgs> = {
        [P in keyof T & keyof AggregatePartners]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePartners[P]>
      : GetScalarType<T[P], AggregatePartners[P]>
  }




  export type partnersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: partnersWhereInput
    orderBy?: partnersOrderByWithAggregationInput | partnersOrderByWithAggregationInput[]
    by: PartnersScalarFieldEnum[] | PartnersScalarFieldEnum
    having?: partnersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PartnersCountAggregateInputType | true
    _avg?: PartnersAvgAggregateInputType
    _sum?: PartnersSumAggregateInputType
    _min?: PartnersMinAggregateInputType
    _max?: PartnersMaxAggregateInputType
  }

  export type PartnersGroupByOutputType = {
    partnerId: string
    website: string | null
    fileUrl: string
    priority: number | null
    type: $Enums.partnerTypeEnum
    authorId: string
    createdAt: Date
    deletedAt: Date | null
    _count: PartnersCountAggregateOutputType | null
    _avg: PartnersAvgAggregateOutputType | null
    _sum: PartnersSumAggregateOutputType | null
    _min: PartnersMinAggregateOutputType | null
    _max: PartnersMaxAggregateOutputType | null
  }

  type GetPartnersGroupByPayload<T extends partnersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PartnersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PartnersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PartnersGroupByOutputType[P]>
            : GetScalarType<T[P], PartnersGroupByOutputType[P]>
        }
      >
    >


  export type partnersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    partnerId?: boolean
    website?: boolean
    fileUrl?: boolean
    priority?: boolean
    type?: boolean
    authorId?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    author?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["partners"]>

  export type partnersSelectScalar = {
    partnerId?: boolean
    website?: boolean
    fileUrl?: boolean
    priority?: boolean
    type?: boolean
    authorId?: boolean
    createdAt?: boolean
    deletedAt?: boolean
  }

  export type partnersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | usersDefaultArgs<ExtArgs>
  }


  export type $partnersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "partners"
    objects: {
      author: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      partnerId: string
      website: string | null
      fileUrl: string
      priority: number | null
      type: $Enums.partnerTypeEnum
      authorId: string
      createdAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["partners"]>
    composites: {}
  }


  type partnersGetPayload<S extends boolean | null | undefined | partnersDefaultArgs> = $Result.GetResult<Prisma.$partnersPayload, S>

  type partnersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<partnersFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: PartnersCountAggregateInputType | true
    }

  export interface partnersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['partners'], meta: { name: 'partners' } }
    /**
     * Find zero or one Partners that matches the filter.
     * @param {partnersFindUniqueArgs} args - Arguments to find a Partners
     * @example
     * // Get one Partners
     * const partners = await prisma.partners.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends partnersFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, partnersFindUniqueArgs<ExtArgs>>
    ): Prisma__partnersClient<$Result.GetResult<Prisma.$partnersPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Partners that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {partnersFindUniqueOrThrowArgs} args - Arguments to find a Partners
     * @example
     * // Get one Partners
     * const partners = await prisma.partners.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends partnersFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, partnersFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__partnersClient<$Result.GetResult<Prisma.$partnersPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Partners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {partnersFindFirstArgs} args - Arguments to find a Partners
     * @example
     * // Get one Partners
     * const partners = await prisma.partners.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends partnersFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, partnersFindFirstArgs<ExtArgs>>
    ): Prisma__partnersClient<$Result.GetResult<Prisma.$partnersPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Partners that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {partnersFindFirstOrThrowArgs} args - Arguments to find a Partners
     * @example
     * // Get one Partners
     * const partners = await prisma.partners.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends partnersFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, partnersFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__partnersClient<$Result.GetResult<Prisma.$partnersPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Partners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {partnersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Partners
     * const partners = await prisma.partners.findMany()
     * 
     * // Get first 10 Partners
     * const partners = await prisma.partners.findMany({ take: 10 })
     * 
     * // Only select the `partnerId`
     * const partnersWithPartnerIdOnly = await prisma.partners.findMany({ select: { partnerId: true } })
     * 
    **/
    findMany<T extends partnersFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, partnersFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$partnersPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Partners.
     * @param {partnersCreateArgs} args - Arguments to create a Partners.
     * @example
     * // Create one Partners
     * const Partners = await prisma.partners.create({
     *   data: {
     *     // ... data to create a Partners
     *   }
     * })
     * 
    **/
    create<T extends partnersCreateArgs<ExtArgs>>(
      args: SelectSubset<T, partnersCreateArgs<ExtArgs>>
    ): Prisma__partnersClient<$Result.GetResult<Prisma.$partnersPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Partners.
     *     @param {partnersCreateManyArgs} args - Arguments to create many Partners.
     *     @example
     *     // Create many Partners
     *     const partners = await prisma.partners.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends partnersCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, partnersCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Partners.
     * @param {partnersDeleteArgs} args - Arguments to delete one Partners.
     * @example
     * // Delete one Partners
     * const Partners = await prisma.partners.delete({
     *   where: {
     *     // ... filter to delete one Partners
     *   }
     * })
     * 
    **/
    delete<T extends partnersDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, partnersDeleteArgs<ExtArgs>>
    ): Prisma__partnersClient<$Result.GetResult<Prisma.$partnersPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Partners.
     * @param {partnersUpdateArgs} args - Arguments to update one Partners.
     * @example
     * // Update one Partners
     * const partners = await prisma.partners.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends partnersUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, partnersUpdateArgs<ExtArgs>>
    ): Prisma__partnersClient<$Result.GetResult<Prisma.$partnersPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Partners.
     * @param {partnersDeleteManyArgs} args - Arguments to filter Partners to delete.
     * @example
     * // Delete a few Partners
     * const { count } = await prisma.partners.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends partnersDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, partnersDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Partners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {partnersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Partners
     * const partners = await prisma.partners.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends partnersUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, partnersUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Partners.
     * @param {partnersUpsertArgs} args - Arguments to update or create a Partners.
     * @example
     * // Update or create a Partners
     * const partners = await prisma.partners.upsert({
     *   create: {
     *     // ... data to create a Partners
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Partners we want to update
     *   }
     * })
    **/
    upsert<T extends partnersUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, partnersUpsertArgs<ExtArgs>>
    ): Prisma__partnersClient<$Result.GetResult<Prisma.$partnersPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Partners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {partnersCountArgs} args - Arguments to filter Partners to count.
     * @example
     * // Count the number of Partners
     * const count = await prisma.partners.count({
     *   where: {
     *     // ... the filter for the Partners we want to count
     *   }
     * })
    **/
    count<T extends partnersCountArgs>(
      args?: Subset<T, partnersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PartnersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Partners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PartnersAggregateArgs>(args: Subset<T, PartnersAggregateArgs>): Prisma.PrismaPromise<GetPartnersAggregateType<T>>

    /**
     * Group by Partners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {partnersGroupByArgs} args - Group by arguments.
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
    groupBy<
      T extends partnersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: partnersGroupByArgs['orderBy'] }
        : { orderBy?: partnersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, partnersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPartnersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the partners model
   */
  readonly fields: partnersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for partners.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__partnersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    author<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the partners model
   */ 
  interface partnersFieldRefs {
    readonly partnerId: FieldRef<"partners", 'String'>
    readonly website: FieldRef<"partners", 'String'>
    readonly fileUrl: FieldRef<"partners", 'String'>
    readonly priority: FieldRef<"partners", 'Int'>
    readonly type: FieldRef<"partners", 'partnerTypeEnum'>
    readonly authorId: FieldRef<"partners", 'String'>
    readonly createdAt: FieldRef<"partners", 'DateTime'>
    readonly deletedAt: FieldRef<"partners", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * partners findUnique
   */
  export type partnersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the partners
     */
    select?: partnersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: partnersInclude<ExtArgs> | null
    /**
     * Filter, which partners to fetch.
     */
    where: partnersWhereUniqueInput
  }


  /**
   * partners findUniqueOrThrow
   */
  export type partnersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the partners
     */
    select?: partnersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: partnersInclude<ExtArgs> | null
    /**
     * Filter, which partners to fetch.
     */
    where: partnersWhereUniqueInput
  }


  /**
   * partners findFirst
   */
  export type partnersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the partners
     */
    select?: partnersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: partnersInclude<ExtArgs> | null
    /**
     * Filter, which partners to fetch.
     */
    where?: partnersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of partners to fetch.
     */
    orderBy?: partnersOrderByWithRelationInput | partnersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for partners.
     */
    cursor?: partnersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` partners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` partners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of partners.
     */
    distinct?: PartnersScalarFieldEnum | PartnersScalarFieldEnum[]
  }


  /**
   * partners findFirstOrThrow
   */
  export type partnersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the partners
     */
    select?: partnersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: partnersInclude<ExtArgs> | null
    /**
     * Filter, which partners to fetch.
     */
    where?: partnersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of partners to fetch.
     */
    orderBy?: partnersOrderByWithRelationInput | partnersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for partners.
     */
    cursor?: partnersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` partners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` partners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of partners.
     */
    distinct?: PartnersScalarFieldEnum | PartnersScalarFieldEnum[]
  }


  /**
   * partners findMany
   */
  export type partnersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the partners
     */
    select?: partnersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: partnersInclude<ExtArgs> | null
    /**
     * Filter, which partners to fetch.
     */
    where?: partnersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of partners to fetch.
     */
    orderBy?: partnersOrderByWithRelationInput | partnersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing partners.
     */
    cursor?: partnersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` partners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` partners.
     */
    skip?: number
    distinct?: PartnersScalarFieldEnum | PartnersScalarFieldEnum[]
  }


  /**
   * partners create
   */
  export type partnersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the partners
     */
    select?: partnersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: partnersInclude<ExtArgs> | null
    /**
     * The data needed to create a partners.
     */
    data: XOR<partnersCreateInput, partnersUncheckedCreateInput>
  }


  /**
   * partners createMany
   */
  export type partnersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many partners.
     */
    data: partnersCreateManyInput | partnersCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * partners update
   */
  export type partnersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the partners
     */
    select?: partnersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: partnersInclude<ExtArgs> | null
    /**
     * The data needed to update a partners.
     */
    data: XOR<partnersUpdateInput, partnersUncheckedUpdateInput>
    /**
     * Choose, which partners to update.
     */
    where: partnersWhereUniqueInput
  }


  /**
   * partners updateMany
   */
  export type partnersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update partners.
     */
    data: XOR<partnersUpdateManyMutationInput, partnersUncheckedUpdateManyInput>
    /**
     * Filter which partners to update
     */
    where?: partnersWhereInput
  }


  /**
   * partners upsert
   */
  export type partnersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the partners
     */
    select?: partnersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: partnersInclude<ExtArgs> | null
    /**
     * The filter to search for the partners to update in case it exists.
     */
    where: partnersWhereUniqueInput
    /**
     * In case the partners found by the `where` argument doesn't exist, create a new partners with this data.
     */
    create: XOR<partnersCreateInput, partnersUncheckedCreateInput>
    /**
     * In case the partners was found with the provided `where` argument, update it with this data.
     */
    update: XOR<partnersUpdateInput, partnersUncheckedUpdateInput>
  }


  /**
   * partners delete
   */
  export type partnersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the partners
     */
    select?: partnersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: partnersInclude<ExtArgs> | null
    /**
     * Filter which partners to delete.
     */
    where: partnersWhereUniqueInput
  }


  /**
   * partners deleteMany
   */
  export type partnersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which partners to delete
     */
    where?: partnersWhereInput
  }


  /**
   * partners without action
   */
  export type partnersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the partners
     */
    select?: partnersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: partnersInclude<ExtArgs> | null
  }



  /**
   * Model gallery
   */

  export type AggregateGallery = {
    _count: GalleryCountAggregateOutputType | null
    _avg: GalleryAvgAggregateOutputType | null
    _sum: GallerySumAggregateOutputType | null
    _min: GalleryMinAggregateOutputType | null
    _max: GalleryMaxAggregateOutputType | null
  }

  export type GalleryAvgAggregateOutputType = {
    priority: number | null
  }

  export type GallerySumAggregateOutputType = {
    priority: number | null
  }

  export type GalleryMinAggregateOutputType = {
    galleryId: string | null
    priority: number | null
    image: string | null
    authorId: string | null
    createdAt: Date | null
    deletedAt: Date | null
  }

  export type GalleryMaxAggregateOutputType = {
    galleryId: string | null
    priority: number | null
    image: string | null
    authorId: string | null
    createdAt: Date | null
    deletedAt: Date | null
  }

  export type GalleryCountAggregateOutputType = {
    galleryId: number
    priority: number
    image: number
    authorId: number
    createdAt: number
    deletedAt: number
    _all: number
  }


  export type GalleryAvgAggregateInputType = {
    priority?: true
  }

  export type GallerySumAggregateInputType = {
    priority?: true
  }

  export type GalleryMinAggregateInputType = {
    galleryId?: true
    priority?: true
    image?: true
    authorId?: true
    createdAt?: true
    deletedAt?: true
  }

  export type GalleryMaxAggregateInputType = {
    galleryId?: true
    priority?: true
    image?: true
    authorId?: true
    createdAt?: true
    deletedAt?: true
  }

  export type GalleryCountAggregateInputType = {
    galleryId?: true
    priority?: true
    image?: true
    authorId?: true
    createdAt?: true
    deletedAt?: true
    _all?: true
  }

  export type GalleryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which gallery to aggregate.
     */
    where?: galleryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of galleries to fetch.
     */
    orderBy?: galleryOrderByWithRelationInput | galleryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: galleryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` galleries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` galleries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned galleries
    **/
    _count?: true | GalleryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GalleryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GallerySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GalleryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GalleryMaxAggregateInputType
  }

  export type GetGalleryAggregateType<T extends GalleryAggregateArgs> = {
        [P in keyof T & keyof AggregateGallery]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGallery[P]>
      : GetScalarType<T[P], AggregateGallery[P]>
  }




  export type galleryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: galleryWhereInput
    orderBy?: galleryOrderByWithAggregationInput | galleryOrderByWithAggregationInput[]
    by: GalleryScalarFieldEnum[] | GalleryScalarFieldEnum
    having?: galleryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GalleryCountAggregateInputType | true
    _avg?: GalleryAvgAggregateInputType
    _sum?: GallerySumAggregateInputType
    _min?: GalleryMinAggregateInputType
    _max?: GalleryMaxAggregateInputType
  }

  export type GalleryGroupByOutputType = {
    galleryId: string
    priority: number | null
    image: string
    authorId: string
    createdAt: Date
    deletedAt: Date | null
    _count: GalleryCountAggregateOutputType | null
    _avg: GalleryAvgAggregateOutputType | null
    _sum: GallerySumAggregateOutputType | null
    _min: GalleryMinAggregateOutputType | null
    _max: GalleryMaxAggregateOutputType | null
  }

  type GetGalleryGroupByPayload<T extends galleryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GalleryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GalleryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GalleryGroupByOutputType[P]>
            : GetScalarType<T[P], GalleryGroupByOutputType[P]>
        }
      >
    >


  export type gallerySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    galleryId?: boolean
    priority?: boolean
    image?: boolean
    authorId?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    author?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gallery"]>

  export type gallerySelectScalar = {
    galleryId?: boolean
    priority?: boolean
    image?: boolean
    authorId?: boolean
    createdAt?: boolean
    deletedAt?: boolean
  }

  export type galleryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | usersDefaultArgs<ExtArgs>
  }


  export type $galleryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "gallery"
    objects: {
      author: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      galleryId: string
      priority: number | null
      image: string
      authorId: string
      createdAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["gallery"]>
    composites: {}
  }


  type galleryGetPayload<S extends boolean | null | undefined | galleryDefaultArgs> = $Result.GetResult<Prisma.$galleryPayload, S>

  type galleryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<galleryFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: GalleryCountAggregateInputType | true
    }

  export interface galleryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['gallery'], meta: { name: 'gallery' } }
    /**
     * Find zero or one Gallery that matches the filter.
     * @param {galleryFindUniqueArgs} args - Arguments to find a Gallery
     * @example
     * // Get one Gallery
     * const gallery = await prisma.gallery.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends galleryFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, galleryFindUniqueArgs<ExtArgs>>
    ): Prisma__galleryClient<$Result.GetResult<Prisma.$galleryPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Gallery that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {galleryFindUniqueOrThrowArgs} args - Arguments to find a Gallery
     * @example
     * // Get one Gallery
     * const gallery = await prisma.gallery.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends galleryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, galleryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__galleryClient<$Result.GetResult<Prisma.$galleryPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Gallery that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {galleryFindFirstArgs} args - Arguments to find a Gallery
     * @example
     * // Get one Gallery
     * const gallery = await prisma.gallery.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends galleryFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, galleryFindFirstArgs<ExtArgs>>
    ): Prisma__galleryClient<$Result.GetResult<Prisma.$galleryPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Gallery that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {galleryFindFirstOrThrowArgs} args - Arguments to find a Gallery
     * @example
     * // Get one Gallery
     * const gallery = await prisma.gallery.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends galleryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, galleryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__galleryClient<$Result.GetResult<Prisma.$galleryPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Galleries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {galleryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Galleries
     * const galleries = await prisma.gallery.findMany()
     * 
     * // Get first 10 Galleries
     * const galleries = await prisma.gallery.findMany({ take: 10 })
     * 
     * // Only select the `galleryId`
     * const galleryWithGalleryIdOnly = await prisma.gallery.findMany({ select: { galleryId: true } })
     * 
    **/
    findMany<T extends galleryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, galleryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$galleryPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Gallery.
     * @param {galleryCreateArgs} args - Arguments to create a Gallery.
     * @example
     * // Create one Gallery
     * const Gallery = await prisma.gallery.create({
     *   data: {
     *     // ... data to create a Gallery
     *   }
     * })
     * 
    **/
    create<T extends galleryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, galleryCreateArgs<ExtArgs>>
    ): Prisma__galleryClient<$Result.GetResult<Prisma.$galleryPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Galleries.
     *     @param {galleryCreateManyArgs} args - Arguments to create many Galleries.
     *     @example
     *     // Create many Galleries
     *     const gallery = await prisma.gallery.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends galleryCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, galleryCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Gallery.
     * @param {galleryDeleteArgs} args - Arguments to delete one Gallery.
     * @example
     * // Delete one Gallery
     * const Gallery = await prisma.gallery.delete({
     *   where: {
     *     // ... filter to delete one Gallery
     *   }
     * })
     * 
    **/
    delete<T extends galleryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, galleryDeleteArgs<ExtArgs>>
    ): Prisma__galleryClient<$Result.GetResult<Prisma.$galleryPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Gallery.
     * @param {galleryUpdateArgs} args - Arguments to update one Gallery.
     * @example
     * // Update one Gallery
     * const gallery = await prisma.gallery.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends galleryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, galleryUpdateArgs<ExtArgs>>
    ): Prisma__galleryClient<$Result.GetResult<Prisma.$galleryPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Galleries.
     * @param {galleryDeleteManyArgs} args - Arguments to filter Galleries to delete.
     * @example
     * // Delete a few Galleries
     * const { count } = await prisma.gallery.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends galleryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, galleryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Galleries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {galleryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Galleries
     * const gallery = await prisma.gallery.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends galleryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, galleryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Gallery.
     * @param {galleryUpsertArgs} args - Arguments to update or create a Gallery.
     * @example
     * // Update or create a Gallery
     * const gallery = await prisma.gallery.upsert({
     *   create: {
     *     // ... data to create a Gallery
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Gallery we want to update
     *   }
     * })
    **/
    upsert<T extends galleryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, galleryUpsertArgs<ExtArgs>>
    ): Prisma__galleryClient<$Result.GetResult<Prisma.$galleryPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Galleries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {galleryCountArgs} args - Arguments to filter Galleries to count.
     * @example
     * // Count the number of Galleries
     * const count = await prisma.gallery.count({
     *   where: {
     *     // ... the filter for the Galleries we want to count
     *   }
     * })
    **/
    count<T extends galleryCountArgs>(
      args?: Subset<T, galleryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GalleryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Gallery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GalleryAggregateArgs>(args: Subset<T, GalleryAggregateArgs>): Prisma.PrismaPromise<GetGalleryAggregateType<T>>

    /**
     * Group by Gallery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {galleryGroupByArgs} args - Group by arguments.
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
    groupBy<
      T extends galleryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: galleryGroupByArgs['orderBy'] }
        : { orderBy?: galleryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, galleryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGalleryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the gallery model
   */
  readonly fields: galleryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for gallery.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__galleryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    author<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the gallery model
   */ 
  interface galleryFieldRefs {
    readonly galleryId: FieldRef<"gallery", 'String'>
    readonly priority: FieldRef<"gallery", 'Int'>
    readonly image: FieldRef<"gallery", 'String'>
    readonly authorId: FieldRef<"gallery", 'String'>
    readonly createdAt: FieldRef<"gallery", 'DateTime'>
    readonly deletedAt: FieldRef<"gallery", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * gallery findUnique
   */
  export type galleryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gallery
     */
    select?: gallerySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: galleryInclude<ExtArgs> | null
    /**
     * Filter, which gallery to fetch.
     */
    where: galleryWhereUniqueInput
  }


  /**
   * gallery findUniqueOrThrow
   */
  export type galleryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gallery
     */
    select?: gallerySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: galleryInclude<ExtArgs> | null
    /**
     * Filter, which gallery to fetch.
     */
    where: galleryWhereUniqueInput
  }


  /**
   * gallery findFirst
   */
  export type galleryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gallery
     */
    select?: gallerySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: galleryInclude<ExtArgs> | null
    /**
     * Filter, which gallery to fetch.
     */
    where?: galleryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of galleries to fetch.
     */
    orderBy?: galleryOrderByWithRelationInput | galleryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for galleries.
     */
    cursor?: galleryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` galleries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` galleries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of galleries.
     */
    distinct?: GalleryScalarFieldEnum | GalleryScalarFieldEnum[]
  }


  /**
   * gallery findFirstOrThrow
   */
  export type galleryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gallery
     */
    select?: gallerySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: galleryInclude<ExtArgs> | null
    /**
     * Filter, which gallery to fetch.
     */
    where?: galleryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of galleries to fetch.
     */
    orderBy?: galleryOrderByWithRelationInput | galleryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for galleries.
     */
    cursor?: galleryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` galleries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` galleries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of galleries.
     */
    distinct?: GalleryScalarFieldEnum | GalleryScalarFieldEnum[]
  }


  /**
   * gallery findMany
   */
  export type galleryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gallery
     */
    select?: gallerySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: galleryInclude<ExtArgs> | null
    /**
     * Filter, which galleries to fetch.
     */
    where?: galleryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of galleries to fetch.
     */
    orderBy?: galleryOrderByWithRelationInput | galleryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing galleries.
     */
    cursor?: galleryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` galleries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` galleries.
     */
    skip?: number
    distinct?: GalleryScalarFieldEnum | GalleryScalarFieldEnum[]
  }


  /**
   * gallery create
   */
  export type galleryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gallery
     */
    select?: gallerySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: galleryInclude<ExtArgs> | null
    /**
     * The data needed to create a gallery.
     */
    data: XOR<galleryCreateInput, galleryUncheckedCreateInput>
  }


  /**
   * gallery createMany
   */
  export type galleryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many galleries.
     */
    data: galleryCreateManyInput | galleryCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * gallery update
   */
  export type galleryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gallery
     */
    select?: gallerySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: galleryInclude<ExtArgs> | null
    /**
     * The data needed to update a gallery.
     */
    data: XOR<galleryUpdateInput, galleryUncheckedUpdateInput>
    /**
     * Choose, which gallery to update.
     */
    where: galleryWhereUniqueInput
  }


  /**
   * gallery updateMany
   */
  export type galleryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update galleries.
     */
    data: XOR<galleryUpdateManyMutationInput, galleryUncheckedUpdateManyInput>
    /**
     * Filter which galleries to update
     */
    where?: galleryWhereInput
  }


  /**
   * gallery upsert
   */
  export type galleryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gallery
     */
    select?: gallerySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: galleryInclude<ExtArgs> | null
    /**
     * The filter to search for the gallery to update in case it exists.
     */
    where: galleryWhereUniqueInput
    /**
     * In case the gallery found by the `where` argument doesn't exist, create a new gallery with this data.
     */
    create: XOR<galleryCreateInput, galleryUncheckedCreateInput>
    /**
     * In case the gallery was found with the provided `where` argument, update it with this data.
     */
    update: XOR<galleryUpdateInput, galleryUncheckedUpdateInput>
  }


  /**
   * gallery delete
   */
  export type galleryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gallery
     */
    select?: gallerySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: galleryInclude<ExtArgs> | null
    /**
     * Filter which gallery to delete.
     */
    where: galleryWhereUniqueInput
  }


  /**
   * gallery deleteMany
   */
  export type galleryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which galleries to delete
     */
    where?: galleryWhereInput
  }


  /**
   * gallery without action
   */
  export type galleryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gallery
     */
    select?: gallerySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: galleryInclude<ExtArgs> | null
  }



  /**
   * Model mails
   */

  export type AggregateMails = {
    _count: MailsCountAggregateOutputType | null
    _min: MailsMinAggregateOutputType | null
    _max: MailsMaxAggregateOutputType | null
  }

  export type MailsMinAggregateOutputType = {
    mailId: string | null
    name: string | null
    email: string | null
    fileUrl: string | null
    comment: string | null
    readBy: string | null
    createdAt: Date | null
    deletedAt: Date | null
  }

  export type MailsMaxAggregateOutputType = {
    mailId: string | null
    name: string | null
    email: string | null
    fileUrl: string | null
    comment: string | null
    readBy: string | null
    createdAt: Date | null
    deletedAt: Date | null
  }

  export type MailsCountAggregateOutputType = {
    mailId: number
    name: number
    email: number
    fileUrl: number
    comment: number
    readBy: number
    createdAt: number
    deletedAt: number
    _all: number
  }


  export type MailsMinAggregateInputType = {
    mailId?: true
    name?: true
    email?: true
    fileUrl?: true
    comment?: true
    readBy?: true
    createdAt?: true
    deletedAt?: true
  }

  export type MailsMaxAggregateInputType = {
    mailId?: true
    name?: true
    email?: true
    fileUrl?: true
    comment?: true
    readBy?: true
    createdAt?: true
    deletedAt?: true
  }

  export type MailsCountAggregateInputType = {
    mailId?: true
    name?: true
    email?: true
    fileUrl?: true
    comment?: true
    readBy?: true
    createdAt?: true
    deletedAt?: true
    _all?: true
  }

  export type MailsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mails to aggregate.
     */
    where?: mailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mails to fetch.
     */
    orderBy?: mailsOrderByWithRelationInput | mailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: mailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned mails
    **/
    _count?: true | MailsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MailsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MailsMaxAggregateInputType
  }

  export type GetMailsAggregateType<T extends MailsAggregateArgs> = {
        [P in keyof T & keyof AggregateMails]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMails[P]>
      : GetScalarType<T[P], AggregateMails[P]>
  }




  export type mailsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mailsWhereInput
    orderBy?: mailsOrderByWithAggregationInput | mailsOrderByWithAggregationInput[]
    by: MailsScalarFieldEnum[] | MailsScalarFieldEnum
    having?: mailsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MailsCountAggregateInputType | true
    _min?: MailsMinAggregateInputType
    _max?: MailsMaxAggregateInputType
  }

  export type MailsGroupByOutputType = {
    mailId: string
    name: string
    email: string
    fileUrl: string | null
    comment: string
    readBy: string | null
    createdAt: Date
    deletedAt: Date | null
    _count: MailsCountAggregateOutputType | null
    _min: MailsMinAggregateOutputType | null
    _max: MailsMaxAggregateOutputType | null
  }

  type GetMailsGroupByPayload<T extends mailsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MailsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MailsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MailsGroupByOutputType[P]>
            : GetScalarType<T[P], MailsGroupByOutputType[P]>
        }
      >
    >


  export type mailsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    mailId?: boolean
    name?: boolean
    email?: boolean
    fileUrl?: boolean
    comment?: boolean
    readBy?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    readUser?: boolean | mails$readUserArgs<ExtArgs>
  }, ExtArgs["result"]["mails"]>

  export type mailsSelectScalar = {
    mailId?: boolean
    name?: boolean
    email?: boolean
    fileUrl?: boolean
    comment?: boolean
    readBy?: boolean
    createdAt?: boolean
    deletedAt?: boolean
  }

  export type mailsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    readUser?: boolean | mails$readUserArgs<ExtArgs>
  }


  export type $mailsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "mails"
    objects: {
      readUser: Prisma.$usersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      mailId: string
      name: string
      email: string
      fileUrl: string | null
      comment: string
      readBy: string | null
      createdAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["mails"]>
    composites: {}
  }


  type mailsGetPayload<S extends boolean | null | undefined | mailsDefaultArgs> = $Result.GetResult<Prisma.$mailsPayload, S>

  type mailsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<mailsFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: MailsCountAggregateInputType | true
    }

  export interface mailsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['mails'], meta: { name: 'mails' } }
    /**
     * Find zero or one Mails that matches the filter.
     * @param {mailsFindUniqueArgs} args - Arguments to find a Mails
     * @example
     * // Get one Mails
     * const mails = await prisma.mails.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends mailsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, mailsFindUniqueArgs<ExtArgs>>
    ): Prisma__mailsClient<$Result.GetResult<Prisma.$mailsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Mails that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {mailsFindUniqueOrThrowArgs} args - Arguments to find a Mails
     * @example
     * // Get one Mails
     * const mails = await prisma.mails.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends mailsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, mailsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__mailsClient<$Result.GetResult<Prisma.$mailsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Mails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mailsFindFirstArgs} args - Arguments to find a Mails
     * @example
     * // Get one Mails
     * const mails = await prisma.mails.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends mailsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, mailsFindFirstArgs<ExtArgs>>
    ): Prisma__mailsClient<$Result.GetResult<Prisma.$mailsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Mails that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mailsFindFirstOrThrowArgs} args - Arguments to find a Mails
     * @example
     * // Get one Mails
     * const mails = await prisma.mails.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends mailsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, mailsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__mailsClient<$Result.GetResult<Prisma.$mailsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Mails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mailsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mails
     * const mails = await prisma.mails.findMany()
     * 
     * // Get first 10 Mails
     * const mails = await prisma.mails.findMany({ take: 10 })
     * 
     * // Only select the `mailId`
     * const mailsWithMailIdOnly = await prisma.mails.findMany({ select: { mailId: true } })
     * 
    **/
    findMany<T extends mailsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, mailsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mailsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Mails.
     * @param {mailsCreateArgs} args - Arguments to create a Mails.
     * @example
     * // Create one Mails
     * const Mails = await prisma.mails.create({
     *   data: {
     *     // ... data to create a Mails
     *   }
     * })
     * 
    **/
    create<T extends mailsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, mailsCreateArgs<ExtArgs>>
    ): Prisma__mailsClient<$Result.GetResult<Prisma.$mailsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Mails.
     *     @param {mailsCreateManyArgs} args - Arguments to create many Mails.
     *     @example
     *     // Create many Mails
     *     const mails = await prisma.mails.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends mailsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, mailsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Mails.
     * @param {mailsDeleteArgs} args - Arguments to delete one Mails.
     * @example
     * // Delete one Mails
     * const Mails = await prisma.mails.delete({
     *   where: {
     *     // ... filter to delete one Mails
     *   }
     * })
     * 
    **/
    delete<T extends mailsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, mailsDeleteArgs<ExtArgs>>
    ): Prisma__mailsClient<$Result.GetResult<Prisma.$mailsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Mails.
     * @param {mailsUpdateArgs} args - Arguments to update one Mails.
     * @example
     * // Update one Mails
     * const mails = await prisma.mails.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends mailsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, mailsUpdateArgs<ExtArgs>>
    ): Prisma__mailsClient<$Result.GetResult<Prisma.$mailsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Mails.
     * @param {mailsDeleteManyArgs} args - Arguments to filter Mails to delete.
     * @example
     * // Delete a few Mails
     * const { count } = await prisma.mails.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends mailsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, mailsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mailsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mails
     * const mails = await prisma.mails.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends mailsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, mailsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Mails.
     * @param {mailsUpsertArgs} args - Arguments to update or create a Mails.
     * @example
     * // Update or create a Mails
     * const mails = await prisma.mails.upsert({
     *   create: {
     *     // ... data to create a Mails
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mails we want to update
     *   }
     * })
    **/
    upsert<T extends mailsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, mailsUpsertArgs<ExtArgs>>
    ): Prisma__mailsClient<$Result.GetResult<Prisma.$mailsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Mails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mailsCountArgs} args - Arguments to filter Mails to count.
     * @example
     * // Count the number of Mails
     * const count = await prisma.mails.count({
     *   where: {
     *     // ... the filter for the Mails we want to count
     *   }
     * })
    **/
    count<T extends mailsCountArgs>(
      args?: Subset<T, mailsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MailsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MailsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MailsAggregateArgs>(args: Subset<T, MailsAggregateArgs>): Prisma.PrismaPromise<GetMailsAggregateType<T>>

    /**
     * Group by Mails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mailsGroupByArgs} args - Group by arguments.
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
    groupBy<
      T extends mailsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: mailsGroupByArgs['orderBy'] }
        : { orderBy?: mailsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, mailsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMailsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the mails model
   */
  readonly fields: mailsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for mails.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__mailsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    readUser<T extends mails$readUserArgs<ExtArgs> = {}>(args?: Subset<T, mails$readUserArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the mails model
   */ 
  interface mailsFieldRefs {
    readonly mailId: FieldRef<"mails", 'String'>
    readonly name: FieldRef<"mails", 'String'>
    readonly email: FieldRef<"mails", 'String'>
    readonly fileUrl: FieldRef<"mails", 'String'>
    readonly comment: FieldRef<"mails", 'String'>
    readonly readBy: FieldRef<"mails", 'String'>
    readonly createdAt: FieldRef<"mails", 'DateTime'>
    readonly deletedAt: FieldRef<"mails", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * mails findUnique
   */
  export type mailsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mails
     */
    select?: mailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: mailsInclude<ExtArgs> | null
    /**
     * Filter, which mails to fetch.
     */
    where: mailsWhereUniqueInput
  }


  /**
   * mails findUniqueOrThrow
   */
  export type mailsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mails
     */
    select?: mailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: mailsInclude<ExtArgs> | null
    /**
     * Filter, which mails to fetch.
     */
    where: mailsWhereUniqueInput
  }


  /**
   * mails findFirst
   */
  export type mailsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mails
     */
    select?: mailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: mailsInclude<ExtArgs> | null
    /**
     * Filter, which mails to fetch.
     */
    where?: mailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mails to fetch.
     */
    orderBy?: mailsOrderByWithRelationInput | mailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mails.
     */
    cursor?: mailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mails.
     */
    distinct?: MailsScalarFieldEnum | MailsScalarFieldEnum[]
  }


  /**
   * mails findFirstOrThrow
   */
  export type mailsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mails
     */
    select?: mailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: mailsInclude<ExtArgs> | null
    /**
     * Filter, which mails to fetch.
     */
    where?: mailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mails to fetch.
     */
    orderBy?: mailsOrderByWithRelationInput | mailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mails.
     */
    cursor?: mailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mails.
     */
    distinct?: MailsScalarFieldEnum | MailsScalarFieldEnum[]
  }


  /**
   * mails findMany
   */
  export type mailsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mails
     */
    select?: mailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: mailsInclude<ExtArgs> | null
    /**
     * Filter, which mails to fetch.
     */
    where?: mailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mails to fetch.
     */
    orderBy?: mailsOrderByWithRelationInput | mailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing mails.
     */
    cursor?: mailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mails.
     */
    skip?: number
    distinct?: MailsScalarFieldEnum | MailsScalarFieldEnum[]
  }


  /**
   * mails create
   */
  export type mailsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mails
     */
    select?: mailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: mailsInclude<ExtArgs> | null
    /**
     * The data needed to create a mails.
     */
    data: XOR<mailsCreateInput, mailsUncheckedCreateInput>
  }


  /**
   * mails createMany
   */
  export type mailsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many mails.
     */
    data: mailsCreateManyInput | mailsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * mails update
   */
  export type mailsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mails
     */
    select?: mailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: mailsInclude<ExtArgs> | null
    /**
     * The data needed to update a mails.
     */
    data: XOR<mailsUpdateInput, mailsUncheckedUpdateInput>
    /**
     * Choose, which mails to update.
     */
    where: mailsWhereUniqueInput
  }


  /**
   * mails updateMany
   */
  export type mailsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update mails.
     */
    data: XOR<mailsUpdateManyMutationInput, mailsUncheckedUpdateManyInput>
    /**
     * Filter which mails to update
     */
    where?: mailsWhereInput
  }


  /**
   * mails upsert
   */
  export type mailsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mails
     */
    select?: mailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: mailsInclude<ExtArgs> | null
    /**
     * The filter to search for the mails to update in case it exists.
     */
    where: mailsWhereUniqueInput
    /**
     * In case the mails found by the `where` argument doesn't exist, create a new mails with this data.
     */
    create: XOR<mailsCreateInput, mailsUncheckedCreateInput>
    /**
     * In case the mails was found with the provided `where` argument, update it with this data.
     */
    update: XOR<mailsUpdateInput, mailsUncheckedUpdateInput>
  }


  /**
   * mails delete
   */
  export type mailsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mails
     */
    select?: mailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: mailsInclude<ExtArgs> | null
    /**
     * Filter which mails to delete.
     */
    where: mailsWhereUniqueInput
  }


  /**
   * mails deleteMany
   */
  export type mailsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mails to delete
     */
    where?: mailsWhereInput
  }


  /**
   * mails.readUser
   */
  export type mails$readUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }


  /**
   * mails without action
   */
  export type mailsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mails
     */
    select?: mailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: mailsInclude<ExtArgs> | null
  }



  /**
   * Model about
   */

  export type AggregateAbout = {
    _count: AboutCountAggregateOutputType | null
    _min: AboutMinAggregateOutputType | null
    _max: AboutMaxAggregateOutputType | null
  }

  export type AboutMinAggregateOutputType = {
    aboutId: string | null
    titleTm: string | null
    contentTm: string | null
    titleRu: string | null
    contentRu: string | null
    titleEn: string | null
    contentEn: string | null
    taglineTm: string | null
    taglineRu: string | null
    taglineEn: string | null
    authorId: string | null
    createdAt: Date | null
    deletedAt: Date | null
  }

  export type AboutMaxAggregateOutputType = {
    aboutId: string | null
    titleTm: string | null
    contentTm: string | null
    titleRu: string | null
    contentRu: string | null
    titleEn: string | null
    contentEn: string | null
    taglineTm: string | null
    taglineRu: string | null
    taglineEn: string | null
    authorId: string | null
    createdAt: Date | null
    deletedAt: Date | null
  }

  export type AboutCountAggregateOutputType = {
    aboutId: number
    titleTm: number
    contentTm: number
    titleRu: number
    contentRu: number
    titleEn: number
    contentEn: number
    taglineTm: number
    taglineRu: number
    taglineEn: number
    authorId: number
    createdAt: number
    deletedAt: number
    _all: number
  }


  export type AboutMinAggregateInputType = {
    aboutId?: true
    titleTm?: true
    contentTm?: true
    titleRu?: true
    contentRu?: true
    titleEn?: true
    contentEn?: true
    taglineTm?: true
    taglineRu?: true
    taglineEn?: true
    authorId?: true
    createdAt?: true
    deletedAt?: true
  }

  export type AboutMaxAggregateInputType = {
    aboutId?: true
    titleTm?: true
    contentTm?: true
    titleRu?: true
    contentRu?: true
    titleEn?: true
    contentEn?: true
    taglineTm?: true
    taglineRu?: true
    taglineEn?: true
    authorId?: true
    createdAt?: true
    deletedAt?: true
  }

  export type AboutCountAggregateInputType = {
    aboutId?: true
    titleTm?: true
    contentTm?: true
    titleRu?: true
    contentRu?: true
    titleEn?: true
    contentEn?: true
    taglineTm?: true
    taglineRu?: true
    taglineEn?: true
    authorId?: true
    createdAt?: true
    deletedAt?: true
    _all?: true
  }

  export type AboutAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which about to aggregate.
     */
    where?: aboutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of abouts to fetch.
     */
    orderBy?: aboutOrderByWithRelationInput | aboutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: aboutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` abouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` abouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned abouts
    **/
    _count?: true | AboutCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AboutMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AboutMaxAggregateInputType
  }

  export type GetAboutAggregateType<T extends AboutAggregateArgs> = {
        [P in keyof T & keyof AggregateAbout]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAbout[P]>
      : GetScalarType<T[P], AggregateAbout[P]>
  }




  export type aboutGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: aboutWhereInput
    orderBy?: aboutOrderByWithAggregationInput | aboutOrderByWithAggregationInput[]
    by: AboutScalarFieldEnum[] | AboutScalarFieldEnum
    having?: aboutScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AboutCountAggregateInputType | true
    _min?: AboutMinAggregateInputType
    _max?: AboutMaxAggregateInputType
  }

  export type AboutGroupByOutputType = {
    aboutId: string
    titleTm: string
    contentTm: string
    titleRu: string
    contentRu: string
    titleEn: string
    contentEn: string
    taglineTm: string
    taglineRu: string
    taglineEn: string
    authorId: string
    createdAt: Date
    deletedAt: Date | null
    _count: AboutCountAggregateOutputType | null
    _min: AboutMinAggregateOutputType | null
    _max: AboutMaxAggregateOutputType | null
  }

  type GetAboutGroupByPayload<T extends aboutGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AboutGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AboutGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AboutGroupByOutputType[P]>
            : GetScalarType<T[P], AboutGroupByOutputType[P]>
        }
      >
    >


  export type aboutSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    aboutId?: boolean
    titleTm?: boolean
    contentTm?: boolean
    titleRu?: boolean
    contentRu?: boolean
    titleEn?: boolean
    contentEn?: boolean
    taglineTm?: boolean
    taglineRu?: boolean
    taglineEn?: boolean
    authorId?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    author?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["about"]>

  export type aboutSelectScalar = {
    aboutId?: boolean
    titleTm?: boolean
    contentTm?: boolean
    titleRu?: boolean
    contentRu?: boolean
    titleEn?: boolean
    contentEn?: boolean
    taglineTm?: boolean
    taglineRu?: boolean
    taglineEn?: boolean
    authorId?: boolean
    createdAt?: boolean
    deletedAt?: boolean
  }

  export type aboutInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | usersDefaultArgs<ExtArgs>
  }


  export type $aboutPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "about"
    objects: {
      author: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      aboutId: string
      titleTm: string
      contentTm: string
      titleRu: string
      contentRu: string
      titleEn: string
      contentEn: string
      taglineTm: string
      taglineRu: string
      taglineEn: string
      authorId: string
      createdAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["about"]>
    composites: {}
  }


  type aboutGetPayload<S extends boolean | null | undefined | aboutDefaultArgs> = $Result.GetResult<Prisma.$aboutPayload, S>

  type aboutCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<aboutFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: AboutCountAggregateInputType | true
    }

  export interface aboutDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['about'], meta: { name: 'about' } }
    /**
     * Find zero or one About that matches the filter.
     * @param {aboutFindUniqueArgs} args - Arguments to find a About
     * @example
     * // Get one About
     * const about = await prisma.about.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends aboutFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, aboutFindUniqueArgs<ExtArgs>>
    ): Prisma__aboutClient<$Result.GetResult<Prisma.$aboutPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one About that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {aboutFindUniqueOrThrowArgs} args - Arguments to find a About
     * @example
     * // Get one About
     * const about = await prisma.about.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends aboutFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, aboutFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__aboutClient<$Result.GetResult<Prisma.$aboutPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first About that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aboutFindFirstArgs} args - Arguments to find a About
     * @example
     * // Get one About
     * const about = await prisma.about.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends aboutFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, aboutFindFirstArgs<ExtArgs>>
    ): Prisma__aboutClient<$Result.GetResult<Prisma.$aboutPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first About that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aboutFindFirstOrThrowArgs} args - Arguments to find a About
     * @example
     * // Get one About
     * const about = await prisma.about.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends aboutFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, aboutFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__aboutClient<$Result.GetResult<Prisma.$aboutPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Abouts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aboutFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Abouts
     * const abouts = await prisma.about.findMany()
     * 
     * // Get first 10 Abouts
     * const abouts = await prisma.about.findMany({ take: 10 })
     * 
     * // Only select the `aboutId`
     * const aboutWithAboutIdOnly = await prisma.about.findMany({ select: { aboutId: true } })
     * 
    **/
    findMany<T extends aboutFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, aboutFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$aboutPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a About.
     * @param {aboutCreateArgs} args - Arguments to create a About.
     * @example
     * // Create one About
     * const About = await prisma.about.create({
     *   data: {
     *     // ... data to create a About
     *   }
     * })
     * 
    **/
    create<T extends aboutCreateArgs<ExtArgs>>(
      args: SelectSubset<T, aboutCreateArgs<ExtArgs>>
    ): Prisma__aboutClient<$Result.GetResult<Prisma.$aboutPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Abouts.
     *     @param {aboutCreateManyArgs} args - Arguments to create many Abouts.
     *     @example
     *     // Create many Abouts
     *     const about = await prisma.about.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends aboutCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, aboutCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a About.
     * @param {aboutDeleteArgs} args - Arguments to delete one About.
     * @example
     * // Delete one About
     * const About = await prisma.about.delete({
     *   where: {
     *     // ... filter to delete one About
     *   }
     * })
     * 
    **/
    delete<T extends aboutDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, aboutDeleteArgs<ExtArgs>>
    ): Prisma__aboutClient<$Result.GetResult<Prisma.$aboutPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one About.
     * @param {aboutUpdateArgs} args - Arguments to update one About.
     * @example
     * // Update one About
     * const about = await prisma.about.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends aboutUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, aboutUpdateArgs<ExtArgs>>
    ): Prisma__aboutClient<$Result.GetResult<Prisma.$aboutPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Abouts.
     * @param {aboutDeleteManyArgs} args - Arguments to filter Abouts to delete.
     * @example
     * // Delete a few Abouts
     * const { count } = await prisma.about.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends aboutDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, aboutDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Abouts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aboutUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Abouts
     * const about = await prisma.about.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends aboutUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, aboutUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one About.
     * @param {aboutUpsertArgs} args - Arguments to update or create a About.
     * @example
     * // Update or create a About
     * const about = await prisma.about.upsert({
     *   create: {
     *     // ... data to create a About
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the About we want to update
     *   }
     * })
    **/
    upsert<T extends aboutUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, aboutUpsertArgs<ExtArgs>>
    ): Prisma__aboutClient<$Result.GetResult<Prisma.$aboutPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Abouts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aboutCountArgs} args - Arguments to filter Abouts to count.
     * @example
     * // Count the number of Abouts
     * const count = await prisma.about.count({
     *   where: {
     *     // ... the filter for the Abouts we want to count
     *   }
     * })
    **/
    count<T extends aboutCountArgs>(
      args?: Subset<T, aboutCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AboutCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a About.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AboutAggregateArgs>(args: Subset<T, AboutAggregateArgs>): Prisma.PrismaPromise<GetAboutAggregateType<T>>

    /**
     * Group by About.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aboutGroupByArgs} args - Group by arguments.
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
    groupBy<
      T extends aboutGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: aboutGroupByArgs['orderBy'] }
        : { orderBy?: aboutGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, aboutGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAboutGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the about model
   */
  readonly fields: aboutFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for about.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__aboutClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    author<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the about model
   */ 
  interface aboutFieldRefs {
    readonly aboutId: FieldRef<"about", 'String'>
    readonly titleTm: FieldRef<"about", 'String'>
    readonly contentTm: FieldRef<"about", 'String'>
    readonly titleRu: FieldRef<"about", 'String'>
    readonly contentRu: FieldRef<"about", 'String'>
    readonly titleEn: FieldRef<"about", 'String'>
    readonly contentEn: FieldRef<"about", 'String'>
    readonly taglineTm: FieldRef<"about", 'String'>
    readonly taglineRu: FieldRef<"about", 'String'>
    readonly taglineEn: FieldRef<"about", 'String'>
    readonly authorId: FieldRef<"about", 'String'>
    readonly createdAt: FieldRef<"about", 'DateTime'>
    readonly deletedAt: FieldRef<"about", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * about findUnique
   */
  export type aboutFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the about
     */
    select?: aboutSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: aboutInclude<ExtArgs> | null
    /**
     * Filter, which about to fetch.
     */
    where: aboutWhereUniqueInput
  }


  /**
   * about findUniqueOrThrow
   */
  export type aboutFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the about
     */
    select?: aboutSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: aboutInclude<ExtArgs> | null
    /**
     * Filter, which about to fetch.
     */
    where: aboutWhereUniqueInput
  }


  /**
   * about findFirst
   */
  export type aboutFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the about
     */
    select?: aboutSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: aboutInclude<ExtArgs> | null
    /**
     * Filter, which about to fetch.
     */
    where?: aboutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of abouts to fetch.
     */
    orderBy?: aboutOrderByWithRelationInput | aboutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for abouts.
     */
    cursor?: aboutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` abouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` abouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of abouts.
     */
    distinct?: AboutScalarFieldEnum | AboutScalarFieldEnum[]
  }


  /**
   * about findFirstOrThrow
   */
  export type aboutFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the about
     */
    select?: aboutSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: aboutInclude<ExtArgs> | null
    /**
     * Filter, which about to fetch.
     */
    where?: aboutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of abouts to fetch.
     */
    orderBy?: aboutOrderByWithRelationInput | aboutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for abouts.
     */
    cursor?: aboutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` abouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` abouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of abouts.
     */
    distinct?: AboutScalarFieldEnum | AboutScalarFieldEnum[]
  }


  /**
   * about findMany
   */
  export type aboutFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the about
     */
    select?: aboutSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: aboutInclude<ExtArgs> | null
    /**
     * Filter, which abouts to fetch.
     */
    where?: aboutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of abouts to fetch.
     */
    orderBy?: aboutOrderByWithRelationInput | aboutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing abouts.
     */
    cursor?: aboutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` abouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` abouts.
     */
    skip?: number
    distinct?: AboutScalarFieldEnum | AboutScalarFieldEnum[]
  }


  /**
   * about create
   */
  export type aboutCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the about
     */
    select?: aboutSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: aboutInclude<ExtArgs> | null
    /**
     * The data needed to create a about.
     */
    data: XOR<aboutCreateInput, aboutUncheckedCreateInput>
  }


  /**
   * about createMany
   */
  export type aboutCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many abouts.
     */
    data: aboutCreateManyInput | aboutCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * about update
   */
  export type aboutUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the about
     */
    select?: aboutSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: aboutInclude<ExtArgs> | null
    /**
     * The data needed to update a about.
     */
    data: XOR<aboutUpdateInput, aboutUncheckedUpdateInput>
    /**
     * Choose, which about to update.
     */
    where: aboutWhereUniqueInput
  }


  /**
   * about updateMany
   */
  export type aboutUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update abouts.
     */
    data: XOR<aboutUpdateManyMutationInput, aboutUncheckedUpdateManyInput>
    /**
     * Filter which abouts to update
     */
    where?: aboutWhereInput
  }


  /**
   * about upsert
   */
  export type aboutUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the about
     */
    select?: aboutSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: aboutInclude<ExtArgs> | null
    /**
     * The filter to search for the about to update in case it exists.
     */
    where: aboutWhereUniqueInput
    /**
     * In case the about found by the `where` argument doesn't exist, create a new about with this data.
     */
    create: XOR<aboutCreateInput, aboutUncheckedCreateInput>
    /**
     * In case the about was found with the provided `where` argument, update it with this data.
     */
    update: XOR<aboutUpdateInput, aboutUncheckedUpdateInput>
  }


  /**
   * about delete
   */
  export type aboutDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the about
     */
    select?: aboutSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: aboutInclude<ExtArgs> | null
    /**
     * Filter which about to delete.
     */
    where: aboutWhereUniqueInput
  }


  /**
   * about deleteMany
   */
  export type aboutDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which abouts to delete
     */
    where?: aboutWhereInput
  }


  /**
   * about without action
   */
  export type aboutDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the about
     */
    select?: aboutSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: aboutInclude<ExtArgs> | null
  }



  /**
   * Model contact
   */

  export type AggregateContact = {
    _count: ContactCountAggregateOutputType | null
    _min: ContactMinAggregateOutputType | null
    _max: ContactMaxAggregateOutputType | null
  }

  export type ContactMinAggregateOutputType = {
    contactId: string | null
    phone: string | null
    mobilePhone: string | null
    instagram: string | null
    instagramLink: string | null
    info: string | null
    addressTm: string | null
    addressRu: string | null
    addressEn: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContactMaxAggregateOutputType = {
    contactId: string | null
    phone: string | null
    mobilePhone: string | null
    instagram: string | null
    instagramLink: string | null
    info: string | null
    addressTm: string | null
    addressRu: string | null
    addressEn: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContactCountAggregateOutputType = {
    contactId: number
    phone: number
    mobilePhone: number
    instagram: number
    instagramLink: number
    info: number
    addressTm: number
    addressRu: number
    addressEn: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ContactMinAggregateInputType = {
    contactId?: true
    phone?: true
    mobilePhone?: true
    instagram?: true
    instagramLink?: true
    info?: true
    addressTm?: true
    addressRu?: true
    addressEn?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContactMaxAggregateInputType = {
    contactId?: true
    phone?: true
    mobilePhone?: true
    instagram?: true
    instagramLink?: true
    info?: true
    addressTm?: true
    addressRu?: true
    addressEn?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContactCountAggregateInputType = {
    contactId?: true
    phone?: true
    mobilePhone?: true
    instagram?: true
    instagramLink?: true
    info?: true
    addressTm?: true
    addressRu?: true
    addressEn?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ContactAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which contact to aggregate.
     */
    where?: contactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of contacts to fetch.
     */
    orderBy?: contactOrderByWithRelationInput | contactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: contactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned contacts
    **/
    _count?: true | ContactCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactMaxAggregateInputType
  }

  export type GetContactAggregateType<T extends ContactAggregateArgs> = {
        [P in keyof T & keyof AggregateContact]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContact[P]>
      : GetScalarType<T[P], AggregateContact[P]>
  }




  export type contactGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: contactWhereInput
    orderBy?: contactOrderByWithAggregationInput | contactOrderByWithAggregationInput[]
    by: ContactScalarFieldEnum[] | ContactScalarFieldEnum
    having?: contactScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactCountAggregateInputType | true
    _min?: ContactMinAggregateInputType
    _max?: ContactMaxAggregateInputType
  }

  export type ContactGroupByOutputType = {
    contactId: string
    phone: string
    mobilePhone: string
    instagram: string | null
    instagramLink: string | null
    info: string
    addressTm: string
    addressRu: string
    addressEn: string
    createdAt: Date
    updatedAt: Date
    _count: ContactCountAggregateOutputType | null
    _min: ContactMinAggregateOutputType | null
    _max: ContactMaxAggregateOutputType | null
  }

  type GetContactGroupByPayload<T extends contactGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactGroupByOutputType[P]>
            : GetScalarType<T[P], ContactGroupByOutputType[P]>
        }
      >
    >


  export type contactSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    contactId?: boolean
    phone?: boolean
    mobilePhone?: boolean
    instagram?: boolean
    instagramLink?: boolean
    info?: boolean
    addressTm?: boolean
    addressRu?: boolean
    addressEn?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["contact"]>

  export type contactSelectScalar = {
    contactId?: boolean
    phone?: boolean
    mobilePhone?: boolean
    instagram?: boolean
    instagramLink?: boolean
    info?: boolean
    addressTm?: boolean
    addressRu?: boolean
    addressEn?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $contactPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "contact"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      contactId: string
      phone: string
      mobilePhone: string
      instagram: string | null
      instagramLink: string | null
      info: string
      addressTm: string
      addressRu: string
      addressEn: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["contact"]>
    composites: {}
  }


  type contactGetPayload<S extends boolean | null | undefined | contactDefaultArgs> = $Result.GetResult<Prisma.$contactPayload, S>

  type contactCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<contactFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: ContactCountAggregateInputType | true
    }

  export interface contactDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['contact'], meta: { name: 'contact' } }
    /**
     * Find zero or one Contact that matches the filter.
     * @param {contactFindUniqueArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends contactFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, contactFindUniqueArgs<ExtArgs>>
    ): Prisma__contactClient<$Result.GetResult<Prisma.$contactPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Contact that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {contactFindUniqueOrThrowArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends contactFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, contactFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__contactClient<$Result.GetResult<Prisma.$contactPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Contact that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contactFindFirstArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends contactFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, contactFindFirstArgs<ExtArgs>>
    ): Prisma__contactClient<$Result.GetResult<Prisma.$contactPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Contact that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contactFindFirstOrThrowArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends contactFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, contactFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__contactClient<$Result.GetResult<Prisma.$contactPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Contacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contactFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contacts
     * const contacts = await prisma.contact.findMany()
     * 
     * // Get first 10 Contacts
     * const contacts = await prisma.contact.findMany({ take: 10 })
     * 
     * // Only select the `contactId`
     * const contactWithContactIdOnly = await prisma.contact.findMany({ select: { contactId: true } })
     * 
    **/
    findMany<T extends contactFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, contactFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$contactPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Contact.
     * @param {contactCreateArgs} args - Arguments to create a Contact.
     * @example
     * // Create one Contact
     * const Contact = await prisma.contact.create({
     *   data: {
     *     // ... data to create a Contact
     *   }
     * })
     * 
    **/
    create<T extends contactCreateArgs<ExtArgs>>(
      args: SelectSubset<T, contactCreateArgs<ExtArgs>>
    ): Prisma__contactClient<$Result.GetResult<Prisma.$contactPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Contacts.
     *     @param {contactCreateManyArgs} args - Arguments to create many Contacts.
     *     @example
     *     // Create many Contacts
     *     const contact = await prisma.contact.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends contactCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, contactCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Contact.
     * @param {contactDeleteArgs} args - Arguments to delete one Contact.
     * @example
     * // Delete one Contact
     * const Contact = await prisma.contact.delete({
     *   where: {
     *     // ... filter to delete one Contact
     *   }
     * })
     * 
    **/
    delete<T extends contactDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, contactDeleteArgs<ExtArgs>>
    ): Prisma__contactClient<$Result.GetResult<Prisma.$contactPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Contact.
     * @param {contactUpdateArgs} args - Arguments to update one Contact.
     * @example
     * // Update one Contact
     * const contact = await prisma.contact.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends contactUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, contactUpdateArgs<ExtArgs>>
    ): Prisma__contactClient<$Result.GetResult<Prisma.$contactPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Contacts.
     * @param {contactDeleteManyArgs} args - Arguments to filter Contacts to delete.
     * @example
     * // Delete a few Contacts
     * const { count } = await prisma.contact.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends contactDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, contactDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contactUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contacts
     * const contact = await prisma.contact.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends contactUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, contactUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Contact.
     * @param {contactUpsertArgs} args - Arguments to update or create a Contact.
     * @example
     * // Update or create a Contact
     * const contact = await prisma.contact.upsert({
     *   create: {
     *     // ... data to create a Contact
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contact we want to update
     *   }
     * })
    **/
    upsert<T extends contactUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, contactUpsertArgs<ExtArgs>>
    ): Prisma__contactClient<$Result.GetResult<Prisma.$contactPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contactCountArgs} args - Arguments to filter Contacts to count.
     * @example
     * // Count the number of Contacts
     * const count = await prisma.contact.count({
     *   where: {
     *     // ... the filter for the Contacts we want to count
     *   }
     * })
    **/
    count<T extends contactCountArgs>(
      args?: Subset<T, contactCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContactAggregateArgs>(args: Subset<T, ContactAggregateArgs>): Prisma.PrismaPromise<GetContactAggregateType<T>>

    /**
     * Group by Contact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contactGroupByArgs} args - Group by arguments.
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
    groupBy<
      T extends contactGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: contactGroupByArgs['orderBy'] }
        : { orderBy?: contactGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, contactGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the contact model
   */
  readonly fields: contactFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for contact.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__contactClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the contact model
   */ 
  interface contactFieldRefs {
    readonly contactId: FieldRef<"contact", 'String'>
    readonly phone: FieldRef<"contact", 'String'>
    readonly mobilePhone: FieldRef<"contact", 'String'>
    readonly instagram: FieldRef<"contact", 'String'>
    readonly instagramLink: FieldRef<"contact", 'String'>
    readonly info: FieldRef<"contact", 'String'>
    readonly addressTm: FieldRef<"contact", 'String'>
    readonly addressRu: FieldRef<"contact", 'String'>
    readonly addressEn: FieldRef<"contact", 'String'>
    readonly createdAt: FieldRef<"contact", 'DateTime'>
    readonly updatedAt: FieldRef<"contact", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * contact findUnique
   */
  export type contactFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contact
     */
    select?: contactSelect<ExtArgs> | null
    /**
     * Filter, which contact to fetch.
     */
    where: contactWhereUniqueInput
  }


  /**
   * contact findUniqueOrThrow
   */
  export type contactFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contact
     */
    select?: contactSelect<ExtArgs> | null
    /**
     * Filter, which contact to fetch.
     */
    where: contactWhereUniqueInput
  }


  /**
   * contact findFirst
   */
  export type contactFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contact
     */
    select?: contactSelect<ExtArgs> | null
    /**
     * Filter, which contact to fetch.
     */
    where?: contactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of contacts to fetch.
     */
    orderBy?: contactOrderByWithRelationInput | contactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for contacts.
     */
    cursor?: contactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of contacts.
     */
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }


  /**
   * contact findFirstOrThrow
   */
  export type contactFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contact
     */
    select?: contactSelect<ExtArgs> | null
    /**
     * Filter, which contact to fetch.
     */
    where?: contactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of contacts to fetch.
     */
    orderBy?: contactOrderByWithRelationInput | contactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for contacts.
     */
    cursor?: contactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of contacts.
     */
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }


  /**
   * contact findMany
   */
  export type contactFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contact
     */
    select?: contactSelect<ExtArgs> | null
    /**
     * Filter, which contacts to fetch.
     */
    where?: contactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of contacts to fetch.
     */
    orderBy?: contactOrderByWithRelationInput | contactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing contacts.
     */
    cursor?: contactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` contacts.
     */
    skip?: number
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }


  /**
   * contact create
   */
  export type contactCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contact
     */
    select?: contactSelect<ExtArgs> | null
    /**
     * The data needed to create a contact.
     */
    data: XOR<contactCreateInput, contactUncheckedCreateInput>
  }


  /**
   * contact createMany
   */
  export type contactCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many contacts.
     */
    data: contactCreateManyInput | contactCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * contact update
   */
  export type contactUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contact
     */
    select?: contactSelect<ExtArgs> | null
    /**
     * The data needed to update a contact.
     */
    data: XOR<contactUpdateInput, contactUncheckedUpdateInput>
    /**
     * Choose, which contact to update.
     */
    where: contactWhereUniqueInput
  }


  /**
   * contact updateMany
   */
  export type contactUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update contacts.
     */
    data: XOR<contactUpdateManyMutationInput, contactUncheckedUpdateManyInput>
    /**
     * Filter which contacts to update
     */
    where?: contactWhereInput
  }


  /**
   * contact upsert
   */
  export type contactUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contact
     */
    select?: contactSelect<ExtArgs> | null
    /**
     * The filter to search for the contact to update in case it exists.
     */
    where: contactWhereUniqueInput
    /**
     * In case the contact found by the `where` argument doesn't exist, create a new contact with this data.
     */
    create: XOR<contactCreateInput, contactUncheckedCreateInput>
    /**
     * In case the contact was found with the provided `where` argument, update it with this data.
     */
    update: XOR<contactUpdateInput, contactUncheckedUpdateInput>
  }


  /**
   * contact delete
   */
  export type contactDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contact
     */
    select?: contactSelect<ExtArgs> | null
    /**
     * Filter which contact to delete.
     */
    where: contactWhereUniqueInput
  }


  /**
   * contact deleteMany
   */
  export type contactDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which contacts to delete
     */
    where?: contactWhereInput
  }


  /**
   * contact without action
   */
  export type contactDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contact
     */
    select?: contactSelect<ExtArgs> | null
  }



  /**
   * Model information
   */

  export type AggregateInformation = {
    _count: InformationCountAggregateOutputType | null
    _min: InformationMinAggregateOutputType | null
    _max: InformationMaxAggregateOutputType | null
  }

  export type InformationMinAggregateOutputType = {
    infoId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InformationMaxAggregateOutputType = {
    infoId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InformationCountAggregateOutputType = {
    infoId: number
    info1: number
    info2: number
    info3: number
    info4: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InformationMinAggregateInputType = {
    infoId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InformationMaxAggregateInputType = {
    infoId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InformationCountAggregateInputType = {
    infoId?: true
    info1?: true
    info2?: true
    info3?: true
    info4?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InformationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which information to aggregate.
     */
    where?: informationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of information to fetch.
     */
    orderBy?: informationOrderByWithRelationInput | informationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: informationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` information from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` information.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned information
    **/
    _count?: true | InformationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InformationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InformationMaxAggregateInputType
  }

  export type GetInformationAggregateType<T extends InformationAggregateArgs> = {
        [P in keyof T & keyof AggregateInformation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInformation[P]>
      : GetScalarType<T[P], AggregateInformation[P]>
  }




  export type informationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: informationWhereInput
    orderBy?: informationOrderByWithAggregationInput | informationOrderByWithAggregationInput[]
    by: InformationScalarFieldEnum[] | InformationScalarFieldEnum
    having?: informationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InformationCountAggregateInputType | true
    _min?: InformationMinAggregateInputType
    _max?: InformationMaxAggregateInputType
  }

  export type InformationGroupByOutputType = {
    infoId: string
    info1: JsonValue | null
    info2: JsonValue | null
    info3: JsonValue | null
    info4: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: InformationCountAggregateOutputType | null
    _min: InformationMinAggregateOutputType | null
    _max: InformationMaxAggregateOutputType | null
  }

  type GetInformationGroupByPayload<T extends informationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InformationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InformationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InformationGroupByOutputType[P]>
            : GetScalarType<T[P], InformationGroupByOutputType[P]>
        }
      >
    >


  export type informationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    infoId?: boolean
    info1?: boolean
    info2?: boolean
    info3?: boolean
    info4?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["information"]>

  export type informationSelectScalar = {
    infoId?: boolean
    info1?: boolean
    info2?: boolean
    info3?: boolean
    info4?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $informationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "information"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      infoId: string
      info1: Prisma.JsonValue | null
      info2: Prisma.JsonValue | null
      info3: Prisma.JsonValue | null
      info4: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["information"]>
    composites: {}
  }


  type informationGetPayload<S extends boolean | null | undefined | informationDefaultArgs> = $Result.GetResult<Prisma.$informationPayload, S>

  type informationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<informationFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: InformationCountAggregateInputType | true
    }

  export interface informationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['information'], meta: { name: 'information' } }
    /**
     * Find zero or one Information that matches the filter.
     * @param {informationFindUniqueArgs} args - Arguments to find a Information
     * @example
     * // Get one Information
     * const information = await prisma.information.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends informationFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, informationFindUniqueArgs<ExtArgs>>
    ): Prisma__informationClient<$Result.GetResult<Prisma.$informationPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Information that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {informationFindUniqueOrThrowArgs} args - Arguments to find a Information
     * @example
     * // Get one Information
     * const information = await prisma.information.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends informationFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, informationFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__informationClient<$Result.GetResult<Prisma.$informationPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Information that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {informationFindFirstArgs} args - Arguments to find a Information
     * @example
     * // Get one Information
     * const information = await prisma.information.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends informationFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, informationFindFirstArgs<ExtArgs>>
    ): Prisma__informationClient<$Result.GetResult<Prisma.$informationPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Information that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {informationFindFirstOrThrowArgs} args - Arguments to find a Information
     * @example
     * // Get one Information
     * const information = await prisma.information.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends informationFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, informationFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__informationClient<$Result.GetResult<Prisma.$informationPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Information that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {informationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Information
     * const information = await prisma.information.findMany()
     * 
     * // Get first 10 Information
     * const information = await prisma.information.findMany({ take: 10 })
     * 
     * // Only select the `infoId`
     * const informationWithInfoIdOnly = await prisma.information.findMany({ select: { infoId: true } })
     * 
    **/
    findMany<T extends informationFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, informationFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$informationPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Information.
     * @param {informationCreateArgs} args - Arguments to create a Information.
     * @example
     * // Create one Information
     * const Information = await prisma.information.create({
     *   data: {
     *     // ... data to create a Information
     *   }
     * })
     * 
    **/
    create<T extends informationCreateArgs<ExtArgs>>(
      args: SelectSubset<T, informationCreateArgs<ExtArgs>>
    ): Prisma__informationClient<$Result.GetResult<Prisma.$informationPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Information.
     *     @param {informationCreateManyArgs} args - Arguments to create many Information.
     *     @example
     *     // Create many Information
     *     const information = await prisma.information.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends informationCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, informationCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Information.
     * @param {informationDeleteArgs} args - Arguments to delete one Information.
     * @example
     * // Delete one Information
     * const Information = await prisma.information.delete({
     *   where: {
     *     // ... filter to delete one Information
     *   }
     * })
     * 
    **/
    delete<T extends informationDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, informationDeleteArgs<ExtArgs>>
    ): Prisma__informationClient<$Result.GetResult<Prisma.$informationPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Information.
     * @param {informationUpdateArgs} args - Arguments to update one Information.
     * @example
     * // Update one Information
     * const information = await prisma.information.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends informationUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, informationUpdateArgs<ExtArgs>>
    ): Prisma__informationClient<$Result.GetResult<Prisma.$informationPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Information.
     * @param {informationDeleteManyArgs} args - Arguments to filter Information to delete.
     * @example
     * // Delete a few Information
     * const { count } = await prisma.information.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends informationDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, informationDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Information.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {informationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Information
     * const information = await prisma.information.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends informationUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, informationUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Information.
     * @param {informationUpsertArgs} args - Arguments to update or create a Information.
     * @example
     * // Update or create a Information
     * const information = await prisma.information.upsert({
     *   create: {
     *     // ... data to create a Information
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Information we want to update
     *   }
     * })
    **/
    upsert<T extends informationUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, informationUpsertArgs<ExtArgs>>
    ): Prisma__informationClient<$Result.GetResult<Prisma.$informationPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Information.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {informationCountArgs} args - Arguments to filter Information to count.
     * @example
     * // Count the number of Information
     * const count = await prisma.information.count({
     *   where: {
     *     // ... the filter for the Information we want to count
     *   }
     * })
    **/
    count<T extends informationCountArgs>(
      args?: Subset<T, informationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InformationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Information.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InformationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InformationAggregateArgs>(args: Subset<T, InformationAggregateArgs>): Prisma.PrismaPromise<GetInformationAggregateType<T>>

    /**
     * Group by Information.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {informationGroupByArgs} args - Group by arguments.
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
    groupBy<
      T extends informationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: informationGroupByArgs['orderBy'] }
        : { orderBy?: informationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, informationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInformationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the information model
   */
  readonly fields: informationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for information.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__informationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the information model
   */ 
  interface informationFieldRefs {
    readonly infoId: FieldRef<"information", 'String'>
    readonly info1: FieldRef<"information", 'Json'>
    readonly info2: FieldRef<"information", 'Json'>
    readonly info3: FieldRef<"information", 'Json'>
    readonly info4: FieldRef<"information", 'Json'>
    readonly createdAt: FieldRef<"information", 'DateTime'>
    readonly updatedAt: FieldRef<"information", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * information findUnique
   */
  export type informationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the information
     */
    select?: informationSelect<ExtArgs> | null
    /**
     * Filter, which information to fetch.
     */
    where: informationWhereUniqueInput
  }


  /**
   * information findUniqueOrThrow
   */
  export type informationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the information
     */
    select?: informationSelect<ExtArgs> | null
    /**
     * Filter, which information to fetch.
     */
    where: informationWhereUniqueInput
  }


  /**
   * information findFirst
   */
  export type informationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the information
     */
    select?: informationSelect<ExtArgs> | null
    /**
     * Filter, which information to fetch.
     */
    where?: informationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of information to fetch.
     */
    orderBy?: informationOrderByWithRelationInput | informationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for information.
     */
    cursor?: informationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` information from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` information.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of information.
     */
    distinct?: InformationScalarFieldEnum | InformationScalarFieldEnum[]
  }


  /**
   * information findFirstOrThrow
   */
  export type informationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the information
     */
    select?: informationSelect<ExtArgs> | null
    /**
     * Filter, which information to fetch.
     */
    where?: informationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of information to fetch.
     */
    orderBy?: informationOrderByWithRelationInput | informationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for information.
     */
    cursor?: informationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` information from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` information.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of information.
     */
    distinct?: InformationScalarFieldEnum | InformationScalarFieldEnum[]
  }


  /**
   * information findMany
   */
  export type informationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the information
     */
    select?: informationSelect<ExtArgs> | null
    /**
     * Filter, which information to fetch.
     */
    where?: informationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of information to fetch.
     */
    orderBy?: informationOrderByWithRelationInput | informationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing information.
     */
    cursor?: informationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` information from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` information.
     */
    skip?: number
    distinct?: InformationScalarFieldEnum | InformationScalarFieldEnum[]
  }


  /**
   * information create
   */
  export type informationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the information
     */
    select?: informationSelect<ExtArgs> | null
    /**
     * The data needed to create a information.
     */
    data: XOR<informationCreateInput, informationUncheckedCreateInput>
  }


  /**
   * information createMany
   */
  export type informationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many information.
     */
    data: informationCreateManyInput | informationCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * information update
   */
  export type informationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the information
     */
    select?: informationSelect<ExtArgs> | null
    /**
     * The data needed to update a information.
     */
    data: XOR<informationUpdateInput, informationUncheckedUpdateInput>
    /**
     * Choose, which information to update.
     */
    where: informationWhereUniqueInput
  }


  /**
   * information updateMany
   */
  export type informationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update information.
     */
    data: XOR<informationUpdateManyMutationInput, informationUncheckedUpdateManyInput>
    /**
     * Filter which information to update
     */
    where?: informationWhereInput
  }


  /**
   * information upsert
   */
  export type informationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the information
     */
    select?: informationSelect<ExtArgs> | null
    /**
     * The filter to search for the information to update in case it exists.
     */
    where: informationWhereUniqueInput
    /**
     * In case the information found by the `where` argument doesn't exist, create a new information with this data.
     */
    create: XOR<informationCreateInput, informationUncheckedCreateInput>
    /**
     * In case the information was found with the provided `where` argument, update it with this data.
     */
    update: XOR<informationUpdateInput, informationUncheckedUpdateInput>
  }


  /**
   * information delete
   */
  export type informationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the information
     */
    select?: informationSelect<ExtArgs> | null
    /**
     * Filter which information to delete.
     */
    where: informationWhereUniqueInput
  }


  /**
   * information deleteMany
   */
  export type informationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which information to delete
     */
    where?: informationWhereInput
  }


  /**
   * information without action
   */
  export type informationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the information
     */
    select?: informationSelect<ExtArgs> | null
  }



  /**
   * Model ecology
   */

  export type AggregateEcology = {
    _count: EcologyCountAggregateOutputType | null
    _min: EcologyMinAggregateOutputType | null
    _max: EcologyMaxAggregateOutputType | null
  }

  export type EcologyMinAggregateOutputType = {
    ecologyId: string | null
    titleTm: string | null
    titleRu: string | null
    titleEn: string | null
    contentTm: string | null
    contentRu: string | null
    contentEn: string | null
    video: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EcologyMaxAggregateOutputType = {
    ecologyId: string | null
    titleTm: string | null
    titleRu: string | null
    titleEn: string | null
    contentTm: string | null
    contentRu: string | null
    contentEn: string | null
    video: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EcologyCountAggregateOutputType = {
    ecologyId: number
    images: number
    titleTm: number
    titleRu: number
    titleEn: number
    contentTm: number
    contentRu: number
    contentEn: number
    video: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EcologyMinAggregateInputType = {
    ecologyId?: true
    titleTm?: true
    titleRu?: true
    titleEn?: true
    contentTm?: true
    contentRu?: true
    contentEn?: true
    video?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EcologyMaxAggregateInputType = {
    ecologyId?: true
    titleTm?: true
    titleRu?: true
    titleEn?: true
    contentTm?: true
    contentRu?: true
    contentEn?: true
    video?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EcologyCountAggregateInputType = {
    ecologyId?: true
    images?: true
    titleTm?: true
    titleRu?: true
    titleEn?: true
    contentTm?: true
    contentRu?: true
    contentEn?: true
    video?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EcologyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ecology to aggregate.
     */
    where?: ecologyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ecologies to fetch.
     */
    orderBy?: ecologyOrderByWithRelationInput | ecologyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ecologyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ecologies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ecologies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ecologies
    **/
    _count?: true | EcologyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EcologyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EcologyMaxAggregateInputType
  }

  export type GetEcologyAggregateType<T extends EcologyAggregateArgs> = {
        [P in keyof T & keyof AggregateEcology]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEcology[P]>
      : GetScalarType<T[P], AggregateEcology[P]>
  }




  export type ecologyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ecologyWhereInput
    orderBy?: ecologyOrderByWithAggregationInput | ecologyOrderByWithAggregationInput[]
    by: EcologyScalarFieldEnum[] | EcologyScalarFieldEnum
    having?: ecologyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EcologyCountAggregateInputType | true
    _min?: EcologyMinAggregateInputType
    _max?: EcologyMaxAggregateInputType
  }

  export type EcologyGroupByOutputType = {
    ecologyId: string
    images: string[]
    titleTm: string
    titleRu: string
    titleEn: string
    contentTm: string
    contentRu: string
    contentEn: string
    video: string | null
    createdAt: Date
    updatedAt: Date
    _count: EcologyCountAggregateOutputType | null
    _min: EcologyMinAggregateOutputType | null
    _max: EcologyMaxAggregateOutputType | null
  }

  type GetEcologyGroupByPayload<T extends ecologyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EcologyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EcologyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EcologyGroupByOutputType[P]>
            : GetScalarType<T[P], EcologyGroupByOutputType[P]>
        }
      >
    >


  export type ecologySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ecologyId?: boolean
    images?: boolean
    titleTm?: boolean
    titleRu?: boolean
    titleEn?: boolean
    contentTm?: boolean
    contentRu?: boolean
    contentEn?: boolean
    video?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["ecology"]>

  export type ecologySelectScalar = {
    ecologyId?: boolean
    images?: boolean
    titleTm?: boolean
    titleRu?: boolean
    titleEn?: boolean
    contentTm?: boolean
    contentRu?: boolean
    contentEn?: boolean
    video?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $ecologyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ecology"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      ecologyId: string
      images: string[]
      titleTm: string
      titleRu: string
      titleEn: string
      contentTm: string
      contentRu: string
      contentEn: string
      video: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["ecology"]>
    composites: {}
  }


  type ecologyGetPayload<S extends boolean | null | undefined | ecologyDefaultArgs> = $Result.GetResult<Prisma.$ecologyPayload, S>

  type ecologyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ecologyFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: EcologyCountAggregateInputType | true
    }

  export interface ecologyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ecology'], meta: { name: 'ecology' } }
    /**
     * Find zero or one Ecology that matches the filter.
     * @param {ecologyFindUniqueArgs} args - Arguments to find a Ecology
     * @example
     * // Get one Ecology
     * const ecology = await prisma.ecology.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ecologyFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ecologyFindUniqueArgs<ExtArgs>>
    ): Prisma__ecologyClient<$Result.GetResult<Prisma.$ecologyPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Ecology that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ecologyFindUniqueOrThrowArgs} args - Arguments to find a Ecology
     * @example
     * // Get one Ecology
     * const ecology = await prisma.ecology.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ecologyFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ecologyFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ecologyClient<$Result.GetResult<Prisma.$ecologyPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Ecology that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ecologyFindFirstArgs} args - Arguments to find a Ecology
     * @example
     * // Get one Ecology
     * const ecology = await prisma.ecology.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ecologyFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ecologyFindFirstArgs<ExtArgs>>
    ): Prisma__ecologyClient<$Result.GetResult<Prisma.$ecologyPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Ecology that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ecologyFindFirstOrThrowArgs} args - Arguments to find a Ecology
     * @example
     * // Get one Ecology
     * const ecology = await prisma.ecology.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ecologyFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ecologyFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ecologyClient<$Result.GetResult<Prisma.$ecologyPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Ecologies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ecologyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ecologies
     * const ecologies = await prisma.ecology.findMany()
     * 
     * // Get first 10 Ecologies
     * const ecologies = await prisma.ecology.findMany({ take: 10 })
     * 
     * // Only select the `ecologyId`
     * const ecologyWithEcologyIdOnly = await prisma.ecology.findMany({ select: { ecologyId: true } })
     * 
    **/
    findMany<T extends ecologyFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ecologyFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ecologyPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Ecology.
     * @param {ecologyCreateArgs} args - Arguments to create a Ecology.
     * @example
     * // Create one Ecology
     * const Ecology = await prisma.ecology.create({
     *   data: {
     *     // ... data to create a Ecology
     *   }
     * })
     * 
    **/
    create<T extends ecologyCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ecologyCreateArgs<ExtArgs>>
    ): Prisma__ecologyClient<$Result.GetResult<Prisma.$ecologyPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Ecologies.
     *     @param {ecologyCreateManyArgs} args - Arguments to create many Ecologies.
     *     @example
     *     // Create many Ecologies
     *     const ecology = await prisma.ecology.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ecologyCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ecologyCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Ecology.
     * @param {ecologyDeleteArgs} args - Arguments to delete one Ecology.
     * @example
     * // Delete one Ecology
     * const Ecology = await prisma.ecology.delete({
     *   where: {
     *     // ... filter to delete one Ecology
     *   }
     * })
     * 
    **/
    delete<T extends ecologyDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ecologyDeleteArgs<ExtArgs>>
    ): Prisma__ecologyClient<$Result.GetResult<Prisma.$ecologyPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Ecology.
     * @param {ecologyUpdateArgs} args - Arguments to update one Ecology.
     * @example
     * // Update one Ecology
     * const ecology = await prisma.ecology.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ecologyUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ecologyUpdateArgs<ExtArgs>>
    ): Prisma__ecologyClient<$Result.GetResult<Prisma.$ecologyPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Ecologies.
     * @param {ecologyDeleteManyArgs} args - Arguments to filter Ecologies to delete.
     * @example
     * // Delete a few Ecologies
     * const { count } = await prisma.ecology.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ecologyDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ecologyDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ecologies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ecologyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ecologies
     * const ecology = await prisma.ecology.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ecologyUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ecologyUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ecology.
     * @param {ecologyUpsertArgs} args - Arguments to update or create a Ecology.
     * @example
     * // Update or create a Ecology
     * const ecology = await prisma.ecology.upsert({
     *   create: {
     *     // ... data to create a Ecology
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ecology we want to update
     *   }
     * })
    **/
    upsert<T extends ecologyUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ecologyUpsertArgs<ExtArgs>>
    ): Prisma__ecologyClient<$Result.GetResult<Prisma.$ecologyPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Ecologies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ecologyCountArgs} args - Arguments to filter Ecologies to count.
     * @example
     * // Count the number of Ecologies
     * const count = await prisma.ecology.count({
     *   where: {
     *     // ... the filter for the Ecologies we want to count
     *   }
     * })
    **/
    count<T extends ecologyCountArgs>(
      args?: Subset<T, ecologyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EcologyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ecology.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EcologyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EcologyAggregateArgs>(args: Subset<T, EcologyAggregateArgs>): Prisma.PrismaPromise<GetEcologyAggregateType<T>>

    /**
     * Group by Ecology.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ecologyGroupByArgs} args - Group by arguments.
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
    groupBy<
      T extends ecologyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ecologyGroupByArgs['orderBy'] }
        : { orderBy?: ecologyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ecologyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEcologyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ecology model
   */
  readonly fields: ecologyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ecology.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ecologyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ecology model
   */ 
  interface ecologyFieldRefs {
    readonly ecologyId: FieldRef<"ecology", 'String'>
    readonly images: FieldRef<"ecology", 'String[]'>
    readonly titleTm: FieldRef<"ecology", 'String'>
    readonly titleRu: FieldRef<"ecology", 'String'>
    readonly titleEn: FieldRef<"ecology", 'String'>
    readonly contentTm: FieldRef<"ecology", 'String'>
    readonly contentRu: FieldRef<"ecology", 'String'>
    readonly contentEn: FieldRef<"ecology", 'String'>
    readonly video: FieldRef<"ecology", 'String'>
    readonly createdAt: FieldRef<"ecology", 'DateTime'>
    readonly updatedAt: FieldRef<"ecology", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * ecology findUnique
   */
  export type ecologyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ecology
     */
    select?: ecologySelect<ExtArgs> | null
    /**
     * Filter, which ecology to fetch.
     */
    where: ecologyWhereUniqueInput
  }


  /**
   * ecology findUniqueOrThrow
   */
  export type ecologyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ecology
     */
    select?: ecologySelect<ExtArgs> | null
    /**
     * Filter, which ecology to fetch.
     */
    where: ecologyWhereUniqueInput
  }


  /**
   * ecology findFirst
   */
  export type ecologyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ecology
     */
    select?: ecologySelect<ExtArgs> | null
    /**
     * Filter, which ecology to fetch.
     */
    where?: ecologyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ecologies to fetch.
     */
    orderBy?: ecologyOrderByWithRelationInput | ecologyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ecologies.
     */
    cursor?: ecologyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ecologies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ecologies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ecologies.
     */
    distinct?: EcologyScalarFieldEnum | EcologyScalarFieldEnum[]
  }


  /**
   * ecology findFirstOrThrow
   */
  export type ecologyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ecology
     */
    select?: ecologySelect<ExtArgs> | null
    /**
     * Filter, which ecology to fetch.
     */
    where?: ecologyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ecologies to fetch.
     */
    orderBy?: ecologyOrderByWithRelationInput | ecologyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ecologies.
     */
    cursor?: ecologyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ecologies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ecologies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ecologies.
     */
    distinct?: EcologyScalarFieldEnum | EcologyScalarFieldEnum[]
  }


  /**
   * ecology findMany
   */
  export type ecologyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ecology
     */
    select?: ecologySelect<ExtArgs> | null
    /**
     * Filter, which ecologies to fetch.
     */
    where?: ecologyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ecologies to fetch.
     */
    orderBy?: ecologyOrderByWithRelationInput | ecologyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ecologies.
     */
    cursor?: ecologyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ecologies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ecologies.
     */
    skip?: number
    distinct?: EcologyScalarFieldEnum | EcologyScalarFieldEnum[]
  }


  /**
   * ecology create
   */
  export type ecologyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ecology
     */
    select?: ecologySelect<ExtArgs> | null
    /**
     * The data needed to create a ecology.
     */
    data: XOR<ecologyCreateInput, ecologyUncheckedCreateInput>
  }


  /**
   * ecology createMany
   */
  export type ecologyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ecologies.
     */
    data: ecologyCreateManyInput | ecologyCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ecology update
   */
  export type ecologyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ecology
     */
    select?: ecologySelect<ExtArgs> | null
    /**
     * The data needed to update a ecology.
     */
    data: XOR<ecologyUpdateInput, ecologyUncheckedUpdateInput>
    /**
     * Choose, which ecology to update.
     */
    where: ecologyWhereUniqueInput
  }


  /**
   * ecology updateMany
   */
  export type ecologyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ecologies.
     */
    data: XOR<ecologyUpdateManyMutationInput, ecologyUncheckedUpdateManyInput>
    /**
     * Filter which ecologies to update
     */
    where?: ecologyWhereInput
  }


  /**
   * ecology upsert
   */
  export type ecologyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ecology
     */
    select?: ecologySelect<ExtArgs> | null
    /**
     * The filter to search for the ecology to update in case it exists.
     */
    where: ecologyWhereUniqueInput
    /**
     * In case the ecology found by the `where` argument doesn't exist, create a new ecology with this data.
     */
    create: XOR<ecologyCreateInput, ecologyUncheckedCreateInput>
    /**
     * In case the ecology was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ecologyUpdateInput, ecologyUncheckedUpdateInput>
  }


  /**
   * ecology delete
   */
  export type ecologyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ecology
     */
    select?: ecologySelect<ExtArgs> | null
    /**
     * Filter which ecology to delete.
     */
    where: ecologyWhereUniqueInput
  }


  /**
   * ecology deleteMany
   */
  export type ecologyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ecologies to delete
     */
    where?: ecologyWhereInput
  }


  /**
   * ecology without action
   */
  export type ecologyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ecology
     */
    select?: ecologySelect<ExtArgs> | null
  }



  /**
   * Model productServices
   */

  export type AggregateProductServices = {
    _count: ProductServicesCountAggregateOutputType | null
    _avg: ProductServicesAvgAggregateOutputType | null
    _sum: ProductServicesSumAggregateOutputType | null
    _min: ProductServicesMinAggregateOutputType | null
    _max: ProductServicesMaxAggregateOutputType | null
  }

  export type ProductServicesAvgAggregateOutputType = {
    priority: number | null
  }

  export type ProductServicesSumAggregateOutputType = {
    priority: number | null
  }

  export type ProductServicesMinAggregateOutputType = {
    id: string | null
    nameTm: string | null
    nameEn: string | null
    nameRu: string | null
    logo: string | null
    contentTm: string | null
    contentRu: string | null
    contentEn: string | null
    type: $Enums.productServicesTypeEnum | null
    priority: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type ProductServicesMaxAggregateOutputType = {
    id: string | null
    nameTm: string | null
    nameEn: string | null
    nameRu: string | null
    logo: string | null
    contentTm: string | null
    contentRu: string | null
    contentEn: string | null
    type: $Enums.productServicesTypeEnum | null
    priority: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type ProductServicesCountAggregateOutputType = {
    id: number
    nameTm: number
    nameEn: number
    nameRu: number
    logo: number
    contentTm: number
    contentRu: number
    contentEn: number
    images: number
    type: number
    priority: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type ProductServicesAvgAggregateInputType = {
    priority?: true
  }

  export type ProductServicesSumAggregateInputType = {
    priority?: true
  }

  export type ProductServicesMinAggregateInputType = {
    id?: true
    nameTm?: true
    nameEn?: true
    nameRu?: true
    logo?: true
    contentTm?: true
    contentRu?: true
    contentEn?: true
    type?: true
    priority?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type ProductServicesMaxAggregateInputType = {
    id?: true
    nameTm?: true
    nameEn?: true
    nameRu?: true
    logo?: true
    contentTm?: true
    contentRu?: true
    contentEn?: true
    type?: true
    priority?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type ProductServicesCountAggregateInputType = {
    id?: true
    nameTm?: true
    nameEn?: true
    nameRu?: true
    logo?: true
    contentTm?: true
    contentRu?: true
    contentEn?: true
    images?: true
    type?: true
    priority?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type ProductServicesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which productServices to aggregate.
     */
    where?: productServicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productServices to fetch.
     */
    orderBy?: productServicesOrderByWithRelationInput | productServicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: productServicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned productServices
    **/
    _count?: true | ProductServicesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductServicesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductServicesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductServicesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductServicesMaxAggregateInputType
  }

  export type GetProductServicesAggregateType<T extends ProductServicesAggregateArgs> = {
        [P in keyof T & keyof AggregateProductServices]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductServices[P]>
      : GetScalarType<T[P], AggregateProductServices[P]>
  }




  export type productServicesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productServicesWhereInput
    orderBy?: productServicesOrderByWithAggregationInput | productServicesOrderByWithAggregationInput[]
    by: ProductServicesScalarFieldEnum[] | ProductServicesScalarFieldEnum
    having?: productServicesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductServicesCountAggregateInputType | true
    _avg?: ProductServicesAvgAggregateInputType
    _sum?: ProductServicesSumAggregateInputType
    _min?: ProductServicesMinAggregateInputType
    _max?: ProductServicesMaxAggregateInputType
  }

  export type ProductServicesGroupByOutputType = {
    id: string
    nameTm: string
    nameEn: string
    nameRu: string
    logo: string
    contentTm: string
    contentRu: string
    contentEn: string
    images: string[]
    type: $Enums.productServicesTypeEnum
    priority: number | null
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: ProductServicesCountAggregateOutputType | null
    _avg: ProductServicesAvgAggregateOutputType | null
    _sum: ProductServicesSumAggregateOutputType | null
    _min: ProductServicesMinAggregateOutputType | null
    _max: ProductServicesMaxAggregateOutputType | null
  }

  type GetProductServicesGroupByPayload<T extends productServicesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductServicesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductServicesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductServicesGroupByOutputType[P]>
            : GetScalarType<T[P], ProductServicesGroupByOutputType[P]>
        }
      >
    >


  export type productServicesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nameTm?: boolean
    nameEn?: boolean
    nameRu?: boolean
    logo?: boolean
    contentTm?: boolean
    contentRu?: boolean
    contentEn?: boolean
    images?: boolean
    type?: boolean
    priority?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["productServices"]>

  export type productServicesSelectScalar = {
    id?: boolean
    nameTm?: boolean
    nameEn?: boolean
    nameRu?: boolean
    logo?: boolean
    contentTm?: boolean
    contentRu?: boolean
    contentEn?: boolean
    images?: boolean
    type?: boolean
    priority?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }


  export type $productServicesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "productServices"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nameTm: string
      nameEn: string
      nameRu: string
      logo: string
      contentTm: string
      contentRu: string
      contentEn: string
      images: string[]
      type: $Enums.productServicesTypeEnum
      priority: number | null
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["productServices"]>
    composites: {}
  }


  type productServicesGetPayload<S extends boolean | null | undefined | productServicesDefaultArgs> = $Result.GetResult<Prisma.$productServicesPayload, S>

  type productServicesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<productServicesFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: ProductServicesCountAggregateInputType | true
    }

  export interface productServicesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['productServices'], meta: { name: 'productServices' } }
    /**
     * Find zero or one ProductServices that matches the filter.
     * @param {productServicesFindUniqueArgs} args - Arguments to find a ProductServices
     * @example
     * // Get one ProductServices
     * const productServices = await prisma.productServices.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends productServicesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, productServicesFindUniqueArgs<ExtArgs>>
    ): Prisma__productServicesClient<$Result.GetResult<Prisma.$productServicesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ProductServices that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {productServicesFindUniqueOrThrowArgs} args - Arguments to find a ProductServices
     * @example
     * // Get one ProductServices
     * const productServices = await prisma.productServices.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends productServicesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, productServicesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__productServicesClient<$Result.GetResult<Prisma.$productServicesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ProductServices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productServicesFindFirstArgs} args - Arguments to find a ProductServices
     * @example
     * // Get one ProductServices
     * const productServices = await prisma.productServices.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends productServicesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, productServicesFindFirstArgs<ExtArgs>>
    ): Prisma__productServicesClient<$Result.GetResult<Prisma.$productServicesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ProductServices that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productServicesFindFirstOrThrowArgs} args - Arguments to find a ProductServices
     * @example
     * // Get one ProductServices
     * const productServices = await prisma.productServices.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends productServicesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, productServicesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__productServicesClient<$Result.GetResult<Prisma.$productServicesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ProductServices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productServicesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductServices
     * const productServices = await prisma.productServices.findMany()
     * 
     * // Get first 10 ProductServices
     * const productServices = await prisma.productServices.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productServicesWithIdOnly = await prisma.productServices.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends productServicesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, productServicesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productServicesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ProductServices.
     * @param {productServicesCreateArgs} args - Arguments to create a ProductServices.
     * @example
     * // Create one ProductServices
     * const ProductServices = await prisma.productServices.create({
     *   data: {
     *     // ... data to create a ProductServices
     *   }
     * })
     * 
    **/
    create<T extends productServicesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, productServicesCreateArgs<ExtArgs>>
    ): Prisma__productServicesClient<$Result.GetResult<Prisma.$productServicesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ProductServices.
     *     @param {productServicesCreateManyArgs} args - Arguments to create many ProductServices.
     *     @example
     *     // Create many ProductServices
     *     const productServices = await prisma.productServices.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends productServicesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, productServicesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProductServices.
     * @param {productServicesDeleteArgs} args - Arguments to delete one ProductServices.
     * @example
     * // Delete one ProductServices
     * const ProductServices = await prisma.productServices.delete({
     *   where: {
     *     // ... filter to delete one ProductServices
     *   }
     * })
     * 
    **/
    delete<T extends productServicesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, productServicesDeleteArgs<ExtArgs>>
    ): Prisma__productServicesClient<$Result.GetResult<Prisma.$productServicesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ProductServices.
     * @param {productServicesUpdateArgs} args - Arguments to update one ProductServices.
     * @example
     * // Update one ProductServices
     * const productServices = await prisma.productServices.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends productServicesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, productServicesUpdateArgs<ExtArgs>>
    ): Prisma__productServicesClient<$Result.GetResult<Prisma.$productServicesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ProductServices.
     * @param {productServicesDeleteManyArgs} args - Arguments to filter ProductServices to delete.
     * @example
     * // Delete a few ProductServices
     * const { count } = await prisma.productServices.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends productServicesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, productServicesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productServicesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductServices
     * const productServices = await prisma.productServices.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends productServicesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, productServicesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProductServices.
     * @param {productServicesUpsertArgs} args - Arguments to update or create a ProductServices.
     * @example
     * // Update or create a ProductServices
     * const productServices = await prisma.productServices.upsert({
     *   create: {
     *     // ... data to create a ProductServices
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductServices we want to update
     *   }
     * })
    **/
    upsert<T extends productServicesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, productServicesUpsertArgs<ExtArgs>>
    ): Prisma__productServicesClient<$Result.GetResult<Prisma.$productServicesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ProductServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productServicesCountArgs} args - Arguments to filter ProductServices to count.
     * @example
     * // Count the number of ProductServices
     * const count = await prisma.productServices.count({
     *   where: {
     *     // ... the filter for the ProductServices we want to count
     *   }
     * })
    **/
    count<T extends productServicesCountArgs>(
      args?: Subset<T, productServicesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductServicesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductServicesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductServicesAggregateArgs>(args: Subset<T, ProductServicesAggregateArgs>): Prisma.PrismaPromise<GetProductServicesAggregateType<T>>

    /**
     * Group by ProductServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productServicesGroupByArgs} args - Group by arguments.
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
    groupBy<
      T extends productServicesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: productServicesGroupByArgs['orderBy'] }
        : { orderBy?: productServicesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, productServicesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductServicesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the productServices model
   */
  readonly fields: productServicesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for productServices.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__productServicesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the productServices model
   */ 
  interface productServicesFieldRefs {
    readonly id: FieldRef<"productServices", 'String'>
    readonly nameTm: FieldRef<"productServices", 'String'>
    readonly nameEn: FieldRef<"productServices", 'String'>
    readonly nameRu: FieldRef<"productServices", 'String'>
    readonly logo: FieldRef<"productServices", 'String'>
    readonly contentTm: FieldRef<"productServices", 'String'>
    readonly contentRu: FieldRef<"productServices", 'String'>
    readonly contentEn: FieldRef<"productServices", 'String'>
    readonly images: FieldRef<"productServices", 'String[]'>
    readonly type: FieldRef<"productServices", 'productServicesTypeEnum'>
    readonly priority: FieldRef<"productServices", 'Int'>
    readonly createdAt: FieldRef<"productServices", 'DateTime'>
    readonly updatedAt: FieldRef<"productServices", 'DateTime'>
    readonly deletedAt: FieldRef<"productServices", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * productServices findUnique
   */
  export type productServicesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productServices
     */
    select?: productServicesSelect<ExtArgs> | null
    /**
     * Filter, which productServices to fetch.
     */
    where: productServicesWhereUniqueInput
  }


  /**
   * productServices findUniqueOrThrow
   */
  export type productServicesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productServices
     */
    select?: productServicesSelect<ExtArgs> | null
    /**
     * Filter, which productServices to fetch.
     */
    where: productServicesWhereUniqueInput
  }


  /**
   * productServices findFirst
   */
  export type productServicesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productServices
     */
    select?: productServicesSelect<ExtArgs> | null
    /**
     * Filter, which productServices to fetch.
     */
    where?: productServicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productServices to fetch.
     */
    orderBy?: productServicesOrderByWithRelationInput | productServicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for productServices.
     */
    cursor?: productServicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of productServices.
     */
    distinct?: ProductServicesScalarFieldEnum | ProductServicesScalarFieldEnum[]
  }


  /**
   * productServices findFirstOrThrow
   */
  export type productServicesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productServices
     */
    select?: productServicesSelect<ExtArgs> | null
    /**
     * Filter, which productServices to fetch.
     */
    where?: productServicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productServices to fetch.
     */
    orderBy?: productServicesOrderByWithRelationInput | productServicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for productServices.
     */
    cursor?: productServicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of productServices.
     */
    distinct?: ProductServicesScalarFieldEnum | ProductServicesScalarFieldEnum[]
  }


  /**
   * productServices findMany
   */
  export type productServicesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productServices
     */
    select?: productServicesSelect<ExtArgs> | null
    /**
     * Filter, which productServices to fetch.
     */
    where?: productServicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productServices to fetch.
     */
    orderBy?: productServicesOrderByWithRelationInput | productServicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing productServices.
     */
    cursor?: productServicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productServices.
     */
    skip?: number
    distinct?: ProductServicesScalarFieldEnum | ProductServicesScalarFieldEnum[]
  }


  /**
   * productServices create
   */
  export type productServicesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productServices
     */
    select?: productServicesSelect<ExtArgs> | null
    /**
     * The data needed to create a productServices.
     */
    data: XOR<productServicesCreateInput, productServicesUncheckedCreateInput>
  }


  /**
   * productServices createMany
   */
  export type productServicesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many productServices.
     */
    data: productServicesCreateManyInput | productServicesCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * productServices update
   */
  export type productServicesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productServices
     */
    select?: productServicesSelect<ExtArgs> | null
    /**
     * The data needed to update a productServices.
     */
    data: XOR<productServicesUpdateInput, productServicesUncheckedUpdateInput>
    /**
     * Choose, which productServices to update.
     */
    where: productServicesWhereUniqueInput
  }


  /**
   * productServices updateMany
   */
  export type productServicesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update productServices.
     */
    data: XOR<productServicesUpdateManyMutationInput, productServicesUncheckedUpdateManyInput>
    /**
     * Filter which productServices to update
     */
    where?: productServicesWhereInput
  }


  /**
   * productServices upsert
   */
  export type productServicesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productServices
     */
    select?: productServicesSelect<ExtArgs> | null
    /**
     * The filter to search for the productServices to update in case it exists.
     */
    where: productServicesWhereUniqueInput
    /**
     * In case the productServices found by the `where` argument doesn't exist, create a new productServices with this data.
     */
    create: XOR<productServicesCreateInput, productServicesUncheckedCreateInput>
    /**
     * In case the productServices was found with the provided `where` argument, update it with this data.
     */
    update: XOR<productServicesUpdateInput, productServicesUncheckedUpdateInput>
  }


  /**
   * productServices delete
   */
  export type productServicesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productServices
     */
    select?: productServicesSelect<ExtArgs> | null
    /**
     * Filter which productServices to delete.
     */
    where: productServicesWhereUniqueInput
  }


  /**
   * productServices deleteMany
   */
  export type productServicesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which productServices to delete
     */
    where?: productServicesWhereInput
  }


  /**
   * productServices without action
   */
  export type productServicesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productServices
     */
    select?: productServicesSelect<ExtArgs> | null
  }



  /**
   * Model catalogs
   */

  export type AggregateCatalogs = {
    _count: CatalogsCountAggregateOutputType | null
    _min: CatalogsMinAggregateOutputType | null
    _max: CatalogsMaxAggregateOutputType | null
  }

  export type CatalogsMinAggregateOutputType = {
    catalogId: string | null
    catalogType: $Enums.catalogTypeEnum | null
    fileUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CatalogsMaxAggregateOutputType = {
    catalogId: string | null
    catalogType: $Enums.catalogTypeEnum | null
    fileUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CatalogsCountAggregateOutputType = {
    catalogId: number
    catalogType: number
    fileUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CatalogsMinAggregateInputType = {
    catalogId?: true
    catalogType?: true
    fileUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CatalogsMaxAggregateInputType = {
    catalogId?: true
    catalogType?: true
    fileUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CatalogsCountAggregateInputType = {
    catalogId?: true
    catalogType?: true
    fileUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CatalogsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which catalogs to aggregate.
     */
    where?: catalogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of catalogs to fetch.
     */
    orderBy?: catalogsOrderByWithRelationInput | catalogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: catalogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` catalogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` catalogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned catalogs
    **/
    _count?: true | CatalogsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CatalogsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CatalogsMaxAggregateInputType
  }

  export type GetCatalogsAggregateType<T extends CatalogsAggregateArgs> = {
        [P in keyof T & keyof AggregateCatalogs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCatalogs[P]>
      : GetScalarType<T[P], AggregateCatalogs[P]>
  }




  export type catalogsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: catalogsWhereInput
    orderBy?: catalogsOrderByWithAggregationInput | catalogsOrderByWithAggregationInput[]
    by: CatalogsScalarFieldEnum[] | CatalogsScalarFieldEnum
    having?: catalogsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CatalogsCountAggregateInputType | true
    _min?: CatalogsMinAggregateInputType
    _max?: CatalogsMaxAggregateInputType
  }

  export type CatalogsGroupByOutputType = {
    catalogId: string
    catalogType: $Enums.catalogTypeEnum
    fileUrl: string
    createdAt: Date
    updatedAt: Date
    _count: CatalogsCountAggregateOutputType | null
    _min: CatalogsMinAggregateOutputType | null
    _max: CatalogsMaxAggregateOutputType | null
  }

  type GetCatalogsGroupByPayload<T extends catalogsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CatalogsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CatalogsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CatalogsGroupByOutputType[P]>
            : GetScalarType<T[P], CatalogsGroupByOutputType[P]>
        }
      >
    >


  export type catalogsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    catalogId?: boolean
    catalogType?: boolean
    fileUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["catalogs"]>

  export type catalogsSelectScalar = {
    catalogId?: boolean
    catalogType?: boolean
    fileUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $catalogsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "catalogs"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      catalogId: string
      catalogType: $Enums.catalogTypeEnum
      fileUrl: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["catalogs"]>
    composites: {}
  }


  type catalogsGetPayload<S extends boolean | null | undefined | catalogsDefaultArgs> = $Result.GetResult<Prisma.$catalogsPayload, S>

  type catalogsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<catalogsFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: CatalogsCountAggregateInputType | true
    }

  export interface catalogsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['catalogs'], meta: { name: 'catalogs' } }
    /**
     * Find zero or one Catalogs that matches the filter.
     * @param {catalogsFindUniqueArgs} args - Arguments to find a Catalogs
     * @example
     * // Get one Catalogs
     * const catalogs = await prisma.catalogs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends catalogsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, catalogsFindUniqueArgs<ExtArgs>>
    ): Prisma__catalogsClient<$Result.GetResult<Prisma.$catalogsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Catalogs that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {catalogsFindUniqueOrThrowArgs} args - Arguments to find a Catalogs
     * @example
     * // Get one Catalogs
     * const catalogs = await prisma.catalogs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends catalogsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, catalogsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__catalogsClient<$Result.GetResult<Prisma.$catalogsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Catalogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {catalogsFindFirstArgs} args - Arguments to find a Catalogs
     * @example
     * // Get one Catalogs
     * const catalogs = await prisma.catalogs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends catalogsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, catalogsFindFirstArgs<ExtArgs>>
    ): Prisma__catalogsClient<$Result.GetResult<Prisma.$catalogsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Catalogs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {catalogsFindFirstOrThrowArgs} args - Arguments to find a Catalogs
     * @example
     * // Get one Catalogs
     * const catalogs = await prisma.catalogs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends catalogsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, catalogsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__catalogsClient<$Result.GetResult<Prisma.$catalogsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Catalogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {catalogsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Catalogs
     * const catalogs = await prisma.catalogs.findMany()
     * 
     * // Get first 10 Catalogs
     * const catalogs = await prisma.catalogs.findMany({ take: 10 })
     * 
     * // Only select the `catalogId`
     * const catalogsWithCatalogIdOnly = await prisma.catalogs.findMany({ select: { catalogId: true } })
     * 
    **/
    findMany<T extends catalogsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, catalogsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$catalogsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Catalogs.
     * @param {catalogsCreateArgs} args - Arguments to create a Catalogs.
     * @example
     * // Create one Catalogs
     * const Catalogs = await prisma.catalogs.create({
     *   data: {
     *     // ... data to create a Catalogs
     *   }
     * })
     * 
    **/
    create<T extends catalogsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, catalogsCreateArgs<ExtArgs>>
    ): Prisma__catalogsClient<$Result.GetResult<Prisma.$catalogsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Catalogs.
     *     @param {catalogsCreateManyArgs} args - Arguments to create many Catalogs.
     *     @example
     *     // Create many Catalogs
     *     const catalogs = await prisma.catalogs.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends catalogsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, catalogsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Catalogs.
     * @param {catalogsDeleteArgs} args - Arguments to delete one Catalogs.
     * @example
     * // Delete one Catalogs
     * const Catalogs = await prisma.catalogs.delete({
     *   where: {
     *     // ... filter to delete one Catalogs
     *   }
     * })
     * 
    **/
    delete<T extends catalogsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, catalogsDeleteArgs<ExtArgs>>
    ): Prisma__catalogsClient<$Result.GetResult<Prisma.$catalogsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Catalogs.
     * @param {catalogsUpdateArgs} args - Arguments to update one Catalogs.
     * @example
     * // Update one Catalogs
     * const catalogs = await prisma.catalogs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends catalogsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, catalogsUpdateArgs<ExtArgs>>
    ): Prisma__catalogsClient<$Result.GetResult<Prisma.$catalogsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Catalogs.
     * @param {catalogsDeleteManyArgs} args - Arguments to filter Catalogs to delete.
     * @example
     * // Delete a few Catalogs
     * const { count } = await prisma.catalogs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends catalogsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, catalogsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Catalogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {catalogsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Catalogs
     * const catalogs = await prisma.catalogs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends catalogsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, catalogsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Catalogs.
     * @param {catalogsUpsertArgs} args - Arguments to update or create a Catalogs.
     * @example
     * // Update or create a Catalogs
     * const catalogs = await prisma.catalogs.upsert({
     *   create: {
     *     // ... data to create a Catalogs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Catalogs we want to update
     *   }
     * })
    **/
    upsert<T extends catalogsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, catalogsUpsertArgs<ExtArgs>>
    ): Prisma__catalogsClient<$Result.GetResult<Prisma.$catalogsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Catalogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {catalogsCountArgs} args - Arguments to filter Catalogs to count.
     * @example
     * // Count the number of Catalogs
     * const count = await prisma.catalogs.count({
     *   where: {
     *     // ... the filter for the Catalogs we want to count
     *   }
     * })
    **/
    count<T extends catalogsCountArgs>(
      args?: Subset<T, catalogsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CatalogsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Catalogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CatalogsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CatalogsAggregateArgs>(args: Subset<T, CatalogsAggregateArgs>): Prisma.PrismaPromise<GetCatalogsAggregateType<T>>

    /**
     * Group by Catalogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {catalogsGroupByArgs} args - Group by arguments.
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
    groupBy<
      T extends catalogsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: catalogsGroupByArgs['orderBy'] }
        : { orderBy?: catalogsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, catalogsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCatalogsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the catalogs model
   */
  readonly fields: catalogsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for catalogs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__catalogsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the catalogs model
   */ 
  interface catalogsFieldRefs {
    readonly catalogId: FieldRef<"catalogs", 'String'>
    readonly catalogType: FieldRef<"catalogs", 'catalogTypeEnum'>
    readonly fileUrl: FieldRef<"catalogs", 'String'>
    readonly createdAt: FieldRef<"catalogs", 'DateTime'>
    readonly updatedAt: FieldRef<"catalogs", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * catalogs findUnique
   */
  export type catalogsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the catalogs
     */
    select?: catalogsSelect<ExtArgs> | null
    /**
     * Filter, which catalogs to fetch.
     */
    where: catalogsWhereUniqueInput
  }


  /**
   * catalogs findUniqueOrThrow
   */
  export type catalogsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the catalogs
     */
    select?: catalogsSelect<ExtArgs> | null
    /**
     * Filter, which catalogs to fetch.
     */
    where: catalogsWhereUniqueInput
  }


  /**
   * catalogs findFirst
   */
  export type catalogsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the catalogs
     */
    select?: catalogsSelect<ExtArgs> | null
    /**
     * Filter, which catalogs to fetch.
     */
    where?: catalogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of catalogs to fetch.
     */
    orderBy?: catalogsOrderByWithRelationInput | catalogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for catalogs.
     */
    cursor?: catalogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` catalogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` catalogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of catalogs.
     */
    distinct?: CatalogsScalarFieldEnum | CatalogsScalarFieldEnum[]
  }


  /**
   * catalogs findFirstOrThrow
   */
  export type catalogsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the catalogs
     */
    select?: catalogsSelect<ExtArgs> | null
    /**
     * Filter, which catalogs to fetch.
     */
    where?: catalogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of catalogs to fetch.
     */
    orderBy?: catalogsOrderByWithRelationInput | catalogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for catalogs.
     */
    cursor?: catalogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` catalogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` catalogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of catalogs.
     */
    distinct?: CatalogsScalarFieldEnum | CatalogsScalarFieldEnum[]
  }


  /**
   * catalogs findMany
   */
  export type catalogsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the catalogs
     */
    select?: catalogsSelect<ExtArgs> | null
    /**
     * Filter, which catalogs to fetch.
     */
    where?: catalogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of catalogs to fetch.
     */
    orderBy?: catalogsOrderByWithRelationInput | catalogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing catalogs.
     */
    cursor?: catalogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` catalogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` catalogs.
     */
    skip?: number
    distinct?: CatalogsScalarFieldEnum | CatalogsScalarFieldEnum[]
  }


  /**
   * catalogs create
   */
  export type catalogsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the catalogs
     */
    select?: catalogsSelect<ExtArgs> | null
    /**
     * The data needed to create a catalogs.
     */
    data: XOR<catalogsCreateInput, catalogsUncheckedCreateInput>
  }


  /**
   * catalogs createMany
   */
  export type catalogsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many catalogs.
     */
    data: catalogsCreateManyInput | catalogsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * catalogs update
   */
  export type catalogsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the catalogs
     */
    select?: catalogsSelect<ExtArgs> | null
    /**
     * The data needed to update a catalogs.
     */
    data: XOR<catalogsUpdateInput, catalogsUncheckedUpdateInput>
    /**
     * Choose, which catalogs to update.
     */
    where: catalogsWhereUniqueInput
  }


  /**
   * catalogs updateMany
   */
  export type catalogsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update catalogs.
     */
    data: XOR<catalogsUpdateManyMutationInput, catalogsUncheckedUpdateManyInput>
    /**
     * Filter which catalogs to update
     */
    where?: catalogsWhereInput
  }


  /**
   * catalogs upsert
   */
  export type catalogsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the catalogs
     */
    select?: catalogsSelect<ExtArgs> | null
    /**
     * The filter to search for the catalogs to update in case it exists.
     */
    where: catalogsWhereUniqueInput
    /**
     * In case the catalogs found by the `where` argument doesn't exist, create a new catalogs with this data.
     */
    create: XOR<catalogsCreateInput, catalogsUncheckedCreateInput>
    /**
     * In case the catalogs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<catalogsUpdateInput, catalogsUncheckedUpdateInput>
  }


  /**
   * catalogs delete
   */
  export type catalogsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the catalogs
     */
    select?: catalogsSelect<ExtArgs> | null
    /**
     * Filter which catalogs to delete.
     */
    where: catalogsWhereUniqueInput
  }


  /**
   * catalogs deleteMany
   */
  export type catalogsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which catalogs to delete
     */
    where?: catalogsWhereInput
  }


  /**
   * catalogs without action
   */
  export type catalogsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the catalogs
     */
    select?: catalogsSelect<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsersScalarFieldEnum: {
    userId: 'userId',
    username: 'username',
    password: 'password',
    createdAt: 'createdAt',
    deletedAt: 'deletedAt'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const NewsScalarFieldEnum: {
    newsId: 'newsId',
    titleTm: 'titleTm',
    contentTm: 'contentTm',
    titleRu: 'titleRu',
    contentRu: 'contentRu',
    titleEn: 'titleEn',
    contentEn: 'contentEn',
    image: 'image',
    video: 'video',
    published: 'published',
    isMain: 'isMain',
    homeActivity: 'homeActivity',
    priority: 'priority',
    createdAt: 'createdAt',
    deletedAt: 'deletedAt',
    authorId: 'authorId'
  };

  export type NewsScalarFieldEnum = (typeof NewsScalarFieldEnum)[keyof typeof NewsScalarFieldEnum]


  export const ProjectsScalarFieldEnum: {
    projectId: 'projectId',
    nameTm: 'nameTm',
    nameRu: 'nameRu',
    nameEn: 'nameEn',
    descriptionTm: 'descriptionTm',
    descriptionRu: 'descriptionRu',
    descriptionEn: 'descriptionEn',
    company: 'company',
    logo: 'logo',
    workDate: 'workDate',
    images: 'images',
    cover: 'cover',
    priority: 'priority',
    homeActivity: 'homeActivity',
    createdAt: 'createdAt',
    deletedAt: 'deletedAt',
    authorId: 'authorId'
  };

  export type ProjectsScalarFieldEnum = (typeof ProjectsScalarFieldEnum)[keyof typeof ProjectsScalarFieldEnum]


  export const PartnersScalarFieldEnum: {
    partnerId: 'partnerId',
    website: 'website',
    fileUrl: 'fileUrl',
    priority: 'priority',
    type: 'type',
    authorId: 'authorId',
    createdAt: 'createdAt',
    deletedAt: 'deletedAt'
  };

  export type PartnersScalarFieldEnum = (typeof PartnersScalarFieldEnum)[keyof typeof PartnersScalarFieldEnum]


  export const GalleryScalarFieldEnum: {
    galleryId: 'galleryId',
    priority: 'priority',
    image: 'image',
    authorId: 'authorId',
    createdAt: 'createdAt',
    deletedAt: 'deletedAt'
  };

  export type GalleryScalarFieldEnum = (typeof GalleryScalarFieldEnum)[keyof typeof GalleryScalarFieldEnum]


  export const MailsScalarFieldEnum: {
    mailId: 'mailId',
    name: 'name',
    email: 'email',
    fileUrl: 'fileUrl',
    comment: 'comment',
    readBy: 'readBy',
    createdAt: 'createdAt',
    deletedAt: 'deletedAt'
  };

  export type MailsScalarFieldEnum = (typeof MailsScalarFieldEnum)[keyof typeof MailsScalarFieldEnum]


  export const AboutScalarFieldEnum: {
    aboutId: 'aboutId',
    titleTm: 'titleTm',
    contentTm: 'contentTm',
    titleRu: 'titleRu',
    contentRu: 'contentRu',
    titleEn: 'titleEn',
    contentEn: 'contentEn',
    taglineTm: 'taglineTm',
    taglineRu: 'taglineRu',
    taglineEn: 'taglineEn',
    authorId: 'authorId',
    createdAt: 'createdAt',
    deletedAt: 'deletedAt'
  };

  export type AboutScalarFieldEnum = (typeof AboutScalarFieldEnum)[keyof typeof AboutScalarFieldEnum]


  export const ContactScalarFieldEnum: {
    contactId: 'contactId',
    phone: 'phone',
    mobilePhone: 'mobilePhone',
    instagram: 'instagram',
    instagramLink: 'instagramLink',
    info: 'info',
    addressTm: 'addressTm',
    addressRu: 'addressRu',
    addressEn: 'addressEn',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ContactScalarFieldEnum = (typeof ContactScalarFieldEnum)[keyof typeof ContactScalarFieldEnum]


  export const InformationScalarFieldEnum: {
    infoId: 'infoId',
    info1: 'info1',
    info2: 'info2',
    info3: 'info3',
    info4: 'info4',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type InformationScalarFieldEnum = (typeof InformationScalarFieldEnum)[keyof typeof InformationScalarFieldEnum]


  export const EcologyScalarFieldEnum: {
    ecologyId: 'ecologyId',
    images: 'images',
    titleTm: 'titleTm',
    titleRu: 'titleRu',
    titleEn: 'titleEn',
    contentTm: 'contentTm',
    contentRu: 'contentRu',
    contentEn: 'contentEn',
    video: 'video',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EcologyScalarFieldEnum = (typeof EcologyScalarFieldEnum)[keyof typeof EcologyScalarFieldEnum]


  export const ProductServicesScalarFieldEnum: {
    id: 'id',
    nameTm: 'nameTm',
    nameEn: 'nameEn',
    nameRu: 'nameRu',
    logo: 'logo',
    contentTm: 'contentTm',
    contentRu: 'contentRu',
    contentEn: 'contentEn',
    images: 'images',
    type: 'type',
    priority: 'priority',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type ProductServicesScalarFieldEnum = (typeof ProductServicesScalarFieldEnum)[keyof typeof ProductServicesScalarFieldEnum]


  export const CatalogsScalarFieldEnum: {
    catalogId: 'catalogId',
    catalogType: 'catalogType',
    fileUrl: 'fileUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CatalogsScalarFieldEnum = (typeof CatalogsScalarFieldEnum)[keyof typeof CatalogsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'partnerTypeEnum'
   */
  export type EnumpartnerTypeEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'partnerTypeEnum'>
    


  /**
   * Reference to a field of type 'partnerTypeEnum[]'
   */
  export type ListEnumpartnerTypeEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'partnerTypeEnum[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'productServicesTypeEnum'
   */
  export type EnumproductServicesTypeEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'productServicesTypeEnum'>
    


  /**
   * Reference to a field of type 'productServicesTypeEnum[]'
   */
  export type ListEnumproductServicesTypeEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'productServicesTypeEnum[]'>
    


  /**
   * Reference to a field of type 'catalogTypeEnum'
   */
  export type EnumcatalogTypeEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'catalogTypeEnum'>
    


  /**
   * Reference to a field of type 'catalogTypeEnum[]'
   */
  export type ListEnumcatalogTypeEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'catalogTypeEnum[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    userId?: StringFilter<"users"> | string
    username?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    createdAt?: DateTimeFilter<"users"> | Date | string
    deletedAt?: DateTimeNullableFilter<"users"> | Date | string | null
    about?: AboutListRelationFilter
    news?: NewsListRelationFilter
    projects?: ProjectsListRelationFilter
    gallery?: GalleryListRelationFilter
    partners?: PartnersListRelationFilter
    readMails?: MailsListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    userId?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    about?: aboutOrderByRelationAggregateInput
    news?: newsOrderByRelationAggregateInput
    projects?: projectsOrderByRelationAggregateInput
    gallery?: galleryOrderByRelationAggregateInput
    partners?: partnersOrderByRelationAggregateInput
    readMails?: mailsOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    userId?: string
    username?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    password?: StringFilter<"users"> | string
    createdAt?: DateTimeFilter<"users"> | Date | string
    deletedAt?: DateTimeNullableFilter<"users"> | Date | string | null
    about?: AboutListRelationFilter
    news?: NewsListRelationFilter
    projects?: ProjectsListRelationFilter
    gallery?: GalleryListRelationFilter
    partners?: PartnersListRelationFilter
    readMails?: MailsListRelationFilter
  }, "userId" | "userId" | "username">

  export type usersOrderByWithAggregationInput = {
    userId?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"users"> | string
    username?: StringWithAggregatesFilter<"users"> | string
    password?: StringWithAggregatesFilter<"users"> | string
    createdAt?: DateTimeWithAggregatesFilter<"users"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
  }

  export type newsWhereInput = {
    AND?: newsWhereInput | newsWhereInput[]
    OR?: newsWhereInput[]
    NOT?: newsWhereInput | newsWhereInput[]
    newsId?: StringFilter<"news"> | string
    titleTm?: StringFilter<"news"> | string
    contentTm?: StringFilter<"news"> | string
    titleRu?: StringFilter<"news"> | string
    contentRu?: StringFilter<"news"> | string
    titleEn?: StringFilter<"news"> | string
    contentEn?: StringFilter<"news"> | string
    image?: StringFilter<"news"> | string
    video?: StringNullableFilter<"news"> | string | null
    published?: BoolFilter<"news"> | boolean
    isMain?: BoolFilter<"news"> | boolean
    homeActivity?: BoolFilter<"news"> | boolean
    priority?: IntNullableFilter<"news"> | number | null
    createdAt?: DateTimeFilter<"news"> | Date | string
    deletedAt?: DateTimeNullableFilter<"news"> | Date | string | null
    authorId?: StringFilter<"news"> | string
    author?: XOR<UsersRelationFilter, usersWhereInput>
  }

  export type newsOrderByWithRelationInput = {
    newsId?: SortOrder
    titleTm?: SortOrder
    contentTm?: SortOrder
    titleRu?: SortOrder
    contentRu?: SortOrder
    titleEn?: SortOrder
    contentEn?: SortOrder
    image?: SortOrder
    video?: SortOrderInput | SortOrder
    published?: SortOrder
    isMain?: SortOrder
    homeActivity?: SortOrder
    priority?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    authorId?: SortOrder
    author?: usersOrderByWithRelationInput
  }

  export type newsWhereUniqueInput = Prisma.AtLeast<{
    newsId?: string
    priority?: number
    AND?: newsWhereInput | newsWhereInput[]
    OR?: newsWhereInput[]
    NOT?: newsWhereInput | newsWhereInput[]
    titleTm?: StringFilter<"news"> | string
    contentTm?: StringFilter<"news"> | string
    titleRu?: StringFilter<"news"> | string
    contentRu?: StringFilter<"news"> | string
    titleEn?: StringFilter<"news"> | string
    contentEn?: StringFilter<"news"> | string
    image?: StringFilter<"news"> | string
    video?: StringNullableFilter<"news"> | string | null
    published?: BoolFilter<"news"> | boolean
    isMain?: BoolFilter<"news"> | boolean
    homeActivity?: BoolFilter<"news"> | boolean
    createdAt?: DateTimeFilter<"news"> | Date | string
    deletedAt?: DateTimeNullableFilter<"news"> | Date | string | null
    authorId?: StringFilter<"news"> | string
    author?: XOR<UsersRelationFilter, usersWhereInput>
  }, "newsId" | "newsId" | "priority">

  export type newsOrderByWithAggregationInput = {
    newsId?: SortOrder
    titleTm?: SortOrder
    contentTm?: SortOrder
    titleRu?: SortOrder
    contentRu?: SortOrder
    titleEn?: SortOrder
    contentEn?: SortOrder
    image?: SortOrder
    video?: SortOrderInput | SortOrder
    published?: SortOrder
    isMain?: SortOrder
    homeActivity?: SortOrder
    priority?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    authorId?: SortOrder
    _count?: newsCountOrderByAggregateInput
    _avg?: newsAvgOrderByAggregateInput
    _max?: newsMaxOrderByAggregateInput
    _min?: newsMinOrderByAggregateInput
    _sum?: newsSumOrderByAggregateInput
  }

  export type newsScalarWhereWithAggregatesInput = {
    AND?: newsScalarWhereWithAggregatesInput | newsScalarWhereWithAggregatesInput[]
    OR?: newsScalarWhereWithAggregatesInput[]
    NOT?: newsScalarWhereWithAggregatesInput | newsScalarWhereWithAggregatesInput[]
    newsId?: StringWithAggregatesFilter<"news"> | string
    titleTm?: StringWithAggregatesFilter<"news"> | string
    contentTm?: StringWithAggregatesFilter<"news"> | string
    titleRu?: StringWithAggregatesFilter<"news"> | string
    contentRu?: StringWithAggregatesFilter<"news"> | string
    titleEn?: StringWithAggregatesFilter<"news"> | string
    contentEn?: StringWithAggregatesFilter<"news"> | string
    image?: StringWithAggregatesFilter<"news"> | string
    video?: StringNullableWithAggregatesFilter<"news"> | string | null
    published?: BoolWithAggregatesFilter<"news"> | boolean
    isMain?: BoolWithAggregatesFilter<"news"> | boolean
    homeActivity?: BoolWithAggregatesFilter<"news"> | boolean
    priority?: IntNullableWithAggregatesFilter<"news"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"news"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"news"> | Date | string | null
    authorId?: StringWithAggregatesFilter<"news"> | string
  }

  export type projectsWhereInput = {
    AND?: projectsWhereInput | projectsWhereInput[]
    OR?: projectsWhereInput[]
    NOT?: projectsWhereInput | projectsWhereInput[]
    projectId?: StringFilter<"projects"> | string
    nameTm?: StringFilter<"projects"> | string
    nameRu?: StringFilter<"projects"> | string
    nameEn?: StringFilter<"projects"> | string
    descriptionTm?: StringFilter<"projects"> | string
    descriptionRu?: StringFilter<"projects"> | string
    descriptionEn?: StringFilter<"projects"> | string
    company?: StringFilter<"projects"> | string
    logo?: StringFilter<"projects"> | string
    workDate?: DateTimeFilter<"projects"> | Date | string
    images?: StringNullableListFilter<"projects">
    cover?: StringFilter<"projects"> | string
    priority?: IntNullableFilter<"projects"> | number | null
    homeActivity?: BoolFilter<"projects"> | boolean
    createdAt?: DateTimeFilter<"projects"> | Date | string
    deletedAt?: DateTimeNullableFilter<"projects"> | Date | string | null
    authorId?: StringFilter<"projects"> | string
    author?: XOR<UsersRelationFilter, usersWhereInput>
  }

  export type projectsOrderByWithRelationInput = {
    projectId?: SortOrder
    nameTm?: SortOrder
    nameRu?: SortOrder
    nameEn?: SortOrder
    descriptionTm?: SortOrder
    descriptionRu?: SortOrder
    descriptionEn?: SortOrder
    company?: SortOrder
    logo?: SortOrder
    workDate?: SortOrder
    images?: SortOrder
    cover?: SortOrder
    priority?: SortOrderInput | SortOrder
    homeActivity?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    authorId?: SortOrder
    author?: usersOrderByWithRelationInput
  }

  export type projectsWhereUniqueInput = Prisma.AtLeast<{
    projectId?: string
    priority?: number
    AND?: projectsWhereInput | projectsWhereInput[]
    OR?: projectsWhereInput[]
    NOT?: projectsWhereInput | projectsWhereInput[]
    nameTm?: StringFilter<"projects"> | string
    nameRu?: StringFilter<"projects"> | string
    nameEn?: StringFilter<"projects"> | string
    descriptionTm?: StringFilter<"projects"> | string
    descriptionRu?: StringFilter<"projects"> | string
    descriptionEn?: StringFilter<"projects"> | string
    company?: StringFilter<"projects"> | string
    logo?: StringFilter<"projects"> | string
    workDate?: DateTimeFilter<"projects"> | Date | string
    images?: StringNullableListFilter<"projects">
    cover?: StringFilter<"projects"> | string
    homeActivity?: BoolFilter<"projects"> | boolean
    createdAt?: DateTimeFilter<"projects"> | Date | string
    deletedAt?: DateTimeNullableFilter<"projects"> | Date | string | null
    authorId?: StringFilter<"projects"> | string
    author?: XOR<UsersRelationFilter, usersWhereInput>
  }, "projectId" | "projectId" | "priority">

  export type projectsOrderByWithAggregationInput = {
    projectId?: SortOrder
    nameTm?: SortOrder
    nameRu?: SortOrder
    nameEn?: SortOrder
    descriptionTm?: SortOrder
    descriptionRu?: SortOrder
    descriptionEn?: SortOrder
    company?: SortOrder
    logo?: SortOrder
    workDate?: SortOrder
    images?: SortOrder
    cover?: SortOrder
    priority?: SortOrderInput | SortOrder
    homeActivity?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    authorId?: SortOrder
    _count?: projectsCountOrderByAggregateInput
    _avg?: projectsAvgOrderByAggregateInput
    _max?: projectsMaxOrderByAggregateInput
    _min?: projectsMinOrderByAggregateInput
    _sum?: projectsSumOrderByAggregateInput
  }

  export type projectsScalarWhereWithAggregatesInput = {
    AND?: projectsScalarWhereWithAggregatesInput | projectsScalarWhereWithAggregatesInput[]
    OR?: projectsScalarWhereWithAggregatesInput[]
    NOT?: projectsScalarWhereWithAggregatesInput | projectsScalarWhereWithAggregatesInput[]
    projectId?: StringWithAggregatesFilter<"projects"> | string
    nameTm?: StringWithAggregatesFilter<"projects"> | string
    nameRu?: StringWithAggregatesFilter<"projects"> | string
    nameEn?: StringWithAggregatesFilter<"projects"> | string
    descriptionTm?: StringWithAggregatesFilter<"projects"> | string
    descriptionRu?: StringWithAggregatesFilter<"projects"> | string
    descriptionEn?: StringWithAggregatesFilter<"projects"> | string
    company?: StringWithAggregatesFilter<"projects"> | string
    logo?: StringWithAggregatesFilter<"projects"> | string
    workDate?: DateTimeWithAggregatesFilter<"projects"> | Date | string
    images?: StringNullableListFilter<"projects">
    cover?: StringWithAggregatesFilter<"projects"> | string
    priority?: IntNullableWithAggregatesFilter<"projects"> | number | null
    homeActivity?: BoolWithAggregatesFilter<"projects"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"projects"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"projects"> | Date | string | null
    authorId?: StringWithAggregatesFilter<"projects"> | string
  }

  export type partnersWhereInput = {
    AND?: partnersWhereInput | partnersWhereInput[]
    OR?: partnersWhereInput[]
    NOT?: partnersWhereInput | partnersWhereInput[]
    partnerId?: StringFilter<"partners"> | string
    website?: StringNullableFilter<"partners"> | string | null
    fileUrl?: StringFilter<"partners"> | string
    priority?: IntNullableFilter<"partners"> | number | null
    type?: EnumpartnerTypeEnumFilter<"partners"> | $Enums.partnerTypeEnum
    authorId?: StringFilter<"partners"> | string
    createdAt?: DateTimeFilter<"partners"> | Date | string
    deletedAt?: DateTimeNullableFilter<"partners"> | Date | string | null
    author?: XOR<UsersRelationFilter, usersWhereInput>
  }

  export type partnersOrderByWithRelationInput = {
    partnerId?: SortOrder
    website?: SortOrderInput | SortOrder
    fileUrl?: SortOrder
    priority?: SortOrderInput | SortOrder
    type?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    author?: usersOrderByWithRelationInput
  }

  export type partnersWhereUniqueInput = Prisma.AtLeast<{
    partnerId?: string
    AND?: partnersWhereInput | partnersWhereInput[]
    OR?: partnersWhereInput[]
    NOT?: partnersWhereInput | partnersWhereInput[]
    website?: StringNullableFilter<"partners"> | string | null
    fileUrl?: StringFilter<"partners"> | string
    priority?: IntNullableFilter<"partners"> | number | null
    type?: EnumpartnerTypeEnumFilter<"partners"> | $Enums.partnerTypeEnum
    authorId?: StringFilter<"partners"> | string
    createdAt?: DateTimeFilter<"partners"> | Date | string
    deletedAt?: DateTimeNullableFilter<"partners"> | Date | string | null
    author?: XOR<UsersRelationFilter, usersWhereInput>
  }, "partnerId" | "partnerId">

  export type partnersOrderByWithAggregationInput = {
    partnerId?: SortOrder
    website?: SortOrderInput | SortOrder
    fileUrl?: SortOrder
    priority?: SortOrderInput | SortOrder
    type?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: partnersCountOrderByAggregateInput
    _avg?: partnersAvgOrderByAggregateInput
    _max?: partnersMaxOrderByAggregateInput
    _min?: partnersMinOrderByAggregateInput
    _sum?: partnersSumOrderByAggregateInput
  }

  export type partnersScalarWhereWithAggregatesInput = {
    AND?: partnersScalarWhereWithAggregatesInput | partnersScalarWhereWithAggregatesInput[]
    OR?: partnersScalarWhereWithAggregatesInput[]
    NOT?: partnersScalarWhereWithAggregatesInput | partnersScalarWhereWithAggregatesInput[]
    partnerId?: StringWithAggregatesFilter<"partners"> | string
    website?: StringNullableWithAggregatesFilter<"partners"> | string | null
    fileUrl?: StringWithAggregatesFilter<"partners"> | string
    priority?: IntNullableWithAggregatesFilter<"partners"> | number | null
    type?: EnumpartnerTypeEnumWithAggregatesFilter<"partners"> | $Enums.partnerTypeEnum
    authorId?: StringWithAggregatesFilter<"partners"> | string
    createdAt?: DateTimeWithAggregatesFilter<"partners"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"partners"> | Date | string | null
  }

  export type galleryWhereInput = {
    AND?: galleryWhereInput | galleryWhereInput[]
    OR?: galleryWhereInput[]
    NOT?: galleryWhereInput | galleryWhereInput[]
    galleryId?: StringFilter<"gallery"> | string
    priority?: IntNullableFilter<"gallery"> | number | null
    image?: StringFilter<"gallery"> | string
    authorId?: StringFilter<"gallery"> | string
    createdAt?: DateTimeFilter<"gallery"> | Date | string
    deletedAt?: DateTimeNullableFilter<"gallery"> | Date | string | null
    author?: XOR<UsersRelationFilter, usersWhereInput>
  }

  export type galleryOrderByWithRelationInput = {
    galleryId?: SortOrder
    priority?: SortOrderInput | SortOrder
    image?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    author?: usersOrderByWithRelationInput
  }

  export type galleryWhereUniqueInput = Prisma.AtLeast<{
    galleryId?: string
    priority?: number
    AND?: galleryWhereInput | galleryWhereInput[]
    OR?: galleryWhereInput[]
    NOT?: galleryWhereInput | galleryWhereInput[]
    image?: StringFilter<"gallery"> | string
    authorId?: StringFilter<"gallery"> | string
    createdAt?: DateTimeFilter<"gallery"> | Date | string
    deletedAt?: DateTimeNullableFilter<"gallery"> | Date | string | null
    author?: XOR<UsersRelationFilter, usersWhereInput>
  }, "galleryId" | "galleryId" | "priority">

  export type galleryOrderByWithAggregationInput = {
    galleryId?: SortOrder
    priority?: SortOrderInput | SortOrder
    image?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: galleryCountOrderByAggregateInput
    _avg?: galleryAvgOrderByAggregateInput
    _max?: galleryMaxOrderByAggregateInput
    _min?: galleryMinOrderByAggregateInput
    _sum?: gallerySumOrderByAggregateInput
  }

  export type galleryScalarWhereWithAggregatesInput = {
    AND?: galleryScalarWhereWithAggregatesInput | galleryScalarWhereWithAggregatesInput[]
    OR?: galleryScalarWhereWithAggregatesInput[]
    NOT?: galleryScalarWhereWithAggregatesInput | galleryScalarWhereWithAggregatesInput[]
    galleryId?: StringWithAggregatesFilter<"gallery"> | string
    priority?: IntNullableWithAggregatesFilter<"gallery"> | number | null
    image?: StringWithAggregatesFilter<"gallery"> | string
    authorId?: StringWithAggregatesFilter<"gallery"> | string
    createdAt?: DateTimeWithAggregatesFilter<"gallery"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"gallery"> | Date | string | null
  }

  export type mailsWhereInput = {
    AND?: mailsWhereInput | mailsWhereInput[]
    OR?: mailsWhereInput[]
    NOT?: mailsWhereInput | mailsWhereInput[]
    mailId?: StringFilter<"mails"> | string
    name?: StringFilter<"mails"> | string
    email?: StringFilter<"mails"> | string
    fileUrl?: StringNullableFilter<"mails"> | string | null
    comment?: StringFilter<"mails"> | string
    readBy?: StringNullableFilter<"mails"> | string | null
    createdAt?: DateTimeFilter<"mails"> | Date | string
    deletedAt?: DateTimeNullableFilter<"mails"> | Date | string | null
    readUser?: XOR<UsersNullableRelationFilter, usersWhereInput> | null
  }

  export type mailsOrderByWithRelationInput = {
    mailId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    fileUrl?: SortOrderInput | SortOrder
    comment?: SortOrder
    readBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    readUser?: usersOrderByWithRelationInput
  }

  export type mailsWhereUniqueInput = Prisma.AtLeast<{
    mailId?: string
    AND?: mailsWhereInput | mailsWhereInput[]
    OR?: mailsWhereInput[]
    NOT?: mailsWhereInput | mailsWhereInput[]
    name?: StringFilter<"mails"> | string
    email?: StringFilter<"mails"> | string
    fileUrl?: StringNullableFilter<"mails"> | string | null
    comment?: StringFilter<"mails"> | string
    readBy?: StringNullableFilter<"mails"> | string | null
    createdAt?: DateTimeFilter<"mails"> | Date | string
    deletedAt?: DateTimeNullableFilter<"mails"> | Date | string | null
    readUser?: XOR<UsersNullableRelationFilter, usersWhereInput> | null
  }, "mailId" | "mailId">

  export type mailsOrderByWithAggregationInput = {
    mailId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    fileUrl?: SortOrderInput | SortOrder
    comment?: SortOrder
    readBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: mailsCountOrderByAggregateInput
    _max?: mailsMaxOrderByAggregateInput
    _min?: mailsMinOrderByAggregateInput
  }

  export type mailsScalarWhereWithAggregatesInput = {
    AND?: mailsScalarWhereWithAggregatesInput | mailsScalarWhereWithAggregatesInput[]
    OR?: mailsScalarWhereWithAggregatesInput[]
    NOT?: mailsScalarWhereWithAggregatesInput | mailsScalarWhereWithAggregatesInput[]
    mailId?: StringWithAggregatesFilter<"mails"> | string
    name?: StringWithAggregatesFilter<"mails"> | string
    email?: StringWithAggregatesFilter<"mails"> | string
    fileUrl?: StringNullableWithAggregatesFilter<"mails"> | string | null
    comment?: StringWithAggregatesFilter<"mails"> | string
    readBy?: StringNullableWithAggregatesFilter<"mails"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"mails"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"mails"> | Date | string | null
  }

  export type aboutWhereInput = {
    AND?: aboutWhereInput | aboutWhereInput[]
    OR?: aboutWhereInput[]
    NOT?: aboutWhereInput | aboutWhereInput[]
    aboutId?: StringFilter<"about"> | string
    titleTm?: StringFilter<"about"> | string
    contentTm?: StringFilter<"about"> | string
    titleRu?: StringFilter<"about"> | string
    contentRu?: StringFilter<"about"> | string
    titleEn?: StringFilter<"about"> | string
    contentEn?: StringFilter<"about"> | string
    taglineTm?: StringFilter<"about"> | string
    taglineRu?: StringFilter<"about"> | string
    taglineEn?: StringFilter<"about"> | string
    authorId?: StringFilter<"about"> | string
    createdAt?: DateTimeFilter<"about"> | Date | string
    deletedAt?: DateTimeNullableFilter<"about"> | Date | string | null
    author?: XOR<UsersRelationFilter, usersWhereInput>
  }

  export type aboutOrderByWithRelationInput = {
    aboutId?: SortOrder
    titleTm?: SortOrder
    contentTm?: SortOrder
    titleRu?: SortOrder
    contentRu?: SortOrder
    titleEn?: SortOrder
    contentEn?: SortOrder
    taglineTm?: SortOrder
    taglineRu?: SortOrder
    taglineEn?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    author?: usersOrderByWithRelationInput
  }

  export type aboutWhereUniqueInput = Prisma.AtLeast<{
    aboutId?: string
    AND?: aboutWhereInput | aboutWhereInput[]
    OR?: aboutWhereInput[]
    NOT?: aboutWhereInput | aboutWhereInput[]
    titleTm?: StringFilter<"about"> | string
    contentTm?: StringFilter<"about"> | string
    titleRu?: StringFilter<"about"> | string
    contentRu?: StringFilter<"about"> | string
    titleEn?: StringFilter<"about"> | string
    contentEn?: StringFilter<"about"> | string
    taglineTm?: StringFilter<"about"> | string
    taglineRu?: StringFilter<"about"> | string
    taglineEn?: StringFilter<"about"> | string
    authorId?: StringFilter<"about"> | string
    createdAt?: DateTimeFilter<"about"> | Date | string
    deletedAt?: DateTimeNullableFilter<"about"> | Date | string | null
    author?: XOR<UsersRelationFilter, usersWhereInput>
  }, "aboutId" | "aboutId">

  export type aboutOrderByWithAggregationInput = {
    aboutId?: SortOrder
    titleTm?: SortOrder
    contentTm?: SortOrder
    titleRu?: SortOrder
    contentRu?: SortOrder
    titleEn?: SortOrder
    contentEn?: SortOrder
    taglineTm?: SortOrder
    taglineRu?: SortOrder
    taglineEn?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: aboutCountOrderByAggregateInput
    _max?: aboutMaxOrderByAggregateInput
    _min?: aboutMinOrderByAggregateInput
  }

  export type aboutScalarWhereWithAggregatesInput = {
    AND?: aboutScalarWhereWithAggregatesInput | aboutScalarWhereWithAggregatesInput[]
    OR?: aboutScalarWhereWithAggregatesInput[]
    NOT?: aboutScalarWhereWithAggregatesInput | aboutScalarWhereWithAggregatesInput[]
    aboutId?: StringWithAggregatesFilter<"about"> | string
    titleTm?: StringWithAggregatesFilter<"about"> | string
    contentTm?: StringWithAggregatesFilter<"about"> | string
    titleRu?: StringWithAggregatesFilter<"about"> | string
    contentRu?: StringWithAggregatesFilter<"about"> | string
    titleEn?: StringWithAggregatesFilter<"about"> | string
    contentEn?: StringWithAggregatesFilter<"about"> | string
    taglineTm?: StringWithAggregatesFilter<"about"> | string
    taglineRu?: StringWithAggregatesFilter<"about"> | string
    taglineEn?: StringWithAggregatesFilter<"about"> | string
    authorId?: StringWithAggregatesFilter<"about"> | string
    createdAt?: DateTimeWithAggregatesFilter<"about"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"about"> | Date | string | null
  }

  export type contactWhereInput = {
    AND?: contactWhereInput | contactWhereInput[]
    OR?: contactWhereInput[]
    NOT?: contactWhereInput | contactWhereInput[]
    contactId?: StringFilter<"contact"> | string
    phone?: StringFilter<"contact"> | string
    mobilePhone?: StringFilter<"contact"> | string
    instagram?: StringNullableFilter<"contact"> | string | null
    instagramLink?: StringNullableFilter<"contact"> | string | null
    info?: StringFilter<"contact"> | string
    addressTm?: StringFilter<"contact"> | string
    addressRu?: StringFilter<"contact"> | string
    addressEn?: StringFilter<"contact"> | string
    createdAt?: DateTimeFilter<"contact"> | Date | string
    updatedAt?: DateTimeFilter<"contact"> | Date | string
  }

  export type contactOrderByWithRelationInput = {
    contactId?: SortOrder
    phone?: SortOrder
    mobilePhone?: SortOrder
    instagram?: SortOrderInput | SortOrder
    instagramLink?: SortOrderInput | SortOrder
    info?: SortOrder
    addressTm?: SortOrder
    addressRu?: SortOrder
    addressEn?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type contactWhereUniqueInput = Prisma.AtLeast<{
    contactId?: string
    AND?: contactWhereInput | contactWhereInput[]
    OR?: contactWhereInput[]
    NOT?: contactWhereInput | contactWhereInput[]
    phone?: StringFilter<"contact"> | string
    mobilePhone?: StringFilter<"contact"> | string
    instagram?: StringNullableFilter<"contact"> | string | null
    instagramLink?: StringNullableFilter<"contact"> | string | null
    info?: StringFilter<"contact"> | string
    addressTm?: StringFilter<"contact"> | string
    addressRu?: StringFilter<"contact"> | string
    addressEn?: StringFilter<"contact"> | string
    createdAt?: DateTimeFilter<"contact"> | Date | string
    updatedAt?: DateTimeFilter<"contact"> | Date | string
  }, "contactId" | "contactId">

  export type contactOrderByWithAggregationInput = {
    contactId?: SortOrder
    phone?: SortOrder
    mobilePhone?: SortOrder
    instagram?: SortOrderInput | SortOrder
    instagramLink?: SortOrderInput | SortOrder
    info?: SortOrder
    addressTm?: SortOrder
    addressRu?: SortOrder
    addressEn?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: contactCountOrderByAggregateInput
    _max?: contactMaxOrderByAggregateInput
    _min?: contactMinOrderByAggregateInput
  }

  export type contactScalarWhereWithAggregatesInput = {
    AND?: contactScalarWhereWithAggregatesInput | contactScalarWhereWithAggregatesInput[]
    OR?: contactScalarWhereWithAggregatesInput[]
    NOT?: contactScalarWhereWithAggregatesInput | contactScalarWhereWithAggregatesInput[]
    contactId?: StringWithAggregatesFilter<"contact"> | string
    phone?: StringWithAggregatesFilter<"contact"> | string
    mobilePhone?: StringWithAggregatesFilter<"contact"> | string
    instagram?: StringNullableWithAggregatesFilter<"contact"> | string | null
    instagramLink?: StringNullableWithAggregatesFilter<"contact"> | string | null
    info?: StringWithAggregatesFilter<"contact"> | string
    addressTm?: StringWithAggregatesFilter<"contact"> | string
    addressRu?: StringWithAggregatesFilter<"contact"> | string
    addressEn?: StringWithAggregatesFilter<"contact"> | string
    createdAt?: DateTimeWithAggregatesFilter<"contact"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"contact"> | Date | string
  }

  export type informationWhereInput = {
    AND?: informationWhereInput | informationWhereInput[]
    OR?: informationWhereInput[]
    NOT?: informationWhereInput | informationWhereInput[]
    infoId?: StringFilter<"information"> | string
    info1?: JsonNullableFilter<"information">
    info2?: JsonNullableFilter<"information">
    info3?: JsonNullableFilter<"information">
    info4?: JsonNullableFilter<"information">
    createdAt?: DateTimeFilter<"information"> | Date | string
    updatedAt?: DateTimeFilter<"information"> | Date | string
  }

  export type informationOrderByWithRelationInput = {
    infoId?: SortOrder
    info1?: SortOrderInput | SortOrder
    info2?: SortOrderInput | SortOrder
    info3?: SortOrderInput | SortOrder
    info4?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type informationWhereUniqueInput = Prisma.AtLeast<{
    infoId?: string
    AND?: informationWhereInput | informationWhereInput[]
    OR?: informationWhereInput[]
    NOT?: informationWhereInput | informationWhereInput[]
    info1?: JsonNullableFilter<"information">
    info2?: JsonNullableFilter<"information">
    info3?: JsonNullableFilter<"information">
    info4?: JsonNullableFilter<"information">
    createdAt?: DateTimeFilter<"information"> | Date | string
    updatedAt?: DateTimeFilter<"information"> | Date | string
  }, "infoId" | "infoId">

  export type informationOrderByWithAggregationInput = {
    infoId?: SortOrder
    info1?: SortOrderInput | SortOrder
    info2?: SortOrderInput | SortOrder
    info3?: SortOrderInput | SortOrder
    info4?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: informationCountOrderByAggregateInput
    _max?: informationMaxOrderByAggregateInput
    _min?: informationMinOrderByAggregateInput
  }

  export type informationScalarWhereWithAggregatesInput = {
    AND?: informationScalarWhereWithAggregatesInput | informationScalarWhereWithAggregatesInput[]
    OR?: informationScalarWhereWithAggregatesInput[]
    NOT?: informationScalarWhereWithAggregatesInput | informationScalarWhereWithAggregatesInput[]
    infoId?: StringWithAggregatesFilter<"information"> | string
    info1?: JsonNullableWithAggregatesFilter<"information">
    info2?: JsonNullableWithAggregatesFilter<"information">
    info3?: JsonNullableWithAggregatesFilter<"information">
    info4?: JsonNullableWithAggregatesFilter<"information">
    createdAt?: DateTimeWithAggregatesFilter<"information"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"information"> | Date | string
  }

  export type ecologyWhereInput = {
    AND?: ecologyWhereInput | ecologyWhereInput[]
    OR?: ecologyWhereInput[]
    NOT?: ecologyWhereInput | ecologyWhereInput[]
    ecologyId?: StringFilter<"ecology"> | string
    images?: StringNullableListFilter<"ecology">
    titleTm?: StringFilter<"ecology"> | string
    titleRu?: StringFilter<"ecology"> | string
    titleEn?: StringFilter<"ecology"> | string
    contentTm?: StringFilter<"ecology"> | string
    contentRu?: StringFilter<"ecology"> | string
    contentEn?: StringFilter<"ecology"> | string
    video?: StringNullableFilter<"ecology"> | string | null
    createdAt?: DateTimeFilter<"ecology"> | Date | string
    updatedAt?: DateTimeFilter<"ecology"> | Date | string
  }

  export type ecologyOrderByWithRelationInput = {
    ecologyId?: SortOrder
    images?: SortOrder
    titleTm?: SortOrder
    titleRu?: SortOrder
    titleEn?: SortOrder
    contentTm?: SortOrder
    contentRu?: SortOrder
    contentEn?: SortOrder
    video?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ecologyWhereUniqueInput = Prisma.AtLeast<{
    ecologyId?: string
    AND?: ecologyWhereInput | ecologyWhereInput[]
    OR?: ecologyWhereInput[]
    NOT?: ecologyWhereInput | ecologyWhereInput[]
    images?: StringNullableListFilter<"ecology">
    titleTm?: StringFilter<"ecology"> | string
    titleRu?: StringFilter<"ecology"> | string
    titleEn?: StringFilter<"ecology"> | string
    contentTm?: StringFilter<"ecology"> | string
    contentRu?: StringFilter<"ecology"> | string
    contentEn?: StringFilter<"ecology"> | string
    video?: StringNullableFilter<"ecology"> | string | null
    createdAt?: DateTimeFilter<"ecology"> | Date | string
    updatedAt?: DateTimeFilter<"ecology"> | Date | string
  }, "ecologyId" | "ecologyId">

  export type ecologyOrderByWithAggregationInput = {
    ecologyId?: SortOrder
    images?: SortOrder
    titleTm?: SortOrder
    titleRu?: SortOrder
    titleEn?: SortOrder
    contentTm?: SortOrder
    contentRu?: SortOrder
    contentEn?: SortOrder
    video?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ecologyCountOrderByAggregateInput
    _max?: ecologyMaxOrderByAggregateInput
    _min?: ecologyMinOrderByAggregateInput
  }

  export type ecologyScalarWhereWithAggregatesInput = {
    AND?: ecologyScalarWhereWithAggregatesInput | ecologyScalarWhereWithAggregatesInput[]
    OR?: ecologyScalarWhereWithAggregatesInput[]
    NOT?: ecologyScalarWhereWithAggregatesInput | ecologyScalarWhereWithAggregatesInput[]
    ecologyId?: StringWithAggregatesFilter<"ecology"> | string
    images?: StringNullableListFilter<"ecology">
    titleTm?: StringWithAggregatesFilter<"ecology"> | string
    titleRu?: StringWithAggregatesFilter<"ecology"> | string
    titleEn?: StringWithAggregatesFilter<"ecology"> | string
    contentTm?: StringWithAggregatesFilter<"ecology"> | string
    contentRu?: StringWithAggregatesFilter<"ecology"> | string
    contentEn?: StringWithAggregatesFilter<"ecology"> | string
    video?: StringNullableWithAggregatesFilter<"ecology"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ecology"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ecology"> | Date | string
  }

  export type productServicesWhereInput = {
    AND?: productServicesWhereInput | productServicesWhereInput[]
    OR?: productServicesWhereInput[]
    NOT?: productServicesWhereInput | productServicesWhereInput[]
    id?: StringFilter<"productServices"> | string
    nameTm?: StringFilter<"productServices"> | string
    nameEn?: StringFilter<"productServices"> | string
    nameRu?: StringFilter<"productServices"> | string
    logo?: StringFilter<"productServices"> | string
    contentTm?: StringFilter<"productServices"> | string
    contentRu?: StringFilter<"productServices"> | string
    contentEn?: StringFilter<"productServices"> | string
    images?: StringNullableListFilter<"productServices">
    type?: EnumproductServicesTypeEnumFilter<"productServices"> | $Enums.productServicesTypeEnum
    priority?: IntNullableFilter<"productServices"> | number | null
    createdAt?: DateTimeFilter<"productServices"> | Date | string
    updatedAt?: DateTimeFilter<"productServices"> | Date | string
    deletedAt?: DateTimeNullableFilter<"productServices"> | Date | string | null
  }

  export type productServicesOrderByWithRelationInput = {
    id?: SortOrder
    nameTm?: SortOrder
    nameEn?: SortOrder
    nameRu?: SortOrder
    logo?: SortOrder
    contentTm?: SortOrder
    contentRu?: SortOrder
    contentEn?: SortOrder
    images?: SortOrder
    type?: SortOrder
    priority?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
  }

  export type productServicesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: productServicesWhereInput | productServicesWhereInput[]
    OR?: productServicesWhereInput[]
    NOT?: productServicesWhereInput | productServicesWhereInput[]
    nameTm?: StringFilter<"productServices"> | string
    nameEn?: StringFilter<"productServices"> | string
    nameRu?: StringFilter<"productServices"> | string
    logo?: StringFilter<"productServices"> | string
    contentTm?: StringFilter<"productServices"> | string
    contentRu?: StringFilter<"productServices"> | string
    contentEn?: StringFilter<"productServices"> | string
    images?: StringNullableListFilter<"productServices">
    type?: EnumproductServicesTypeEnumFilter<"productServices"> | $Enums.productServicesTypeEnum
    priority?: IntNullableFilter<"productServices"> | number | null
    createdAt?: DateTimeFilter<"productServices"> | Date | string
    updatedAt?: DateTimeFilter<"productServices"> | Date | string
    deletedAt?: DateTimeNullableFilter<"productServices"> | Date | string | null
  }, "id" | "id">

  export type productServicesOrderByWithAggregationInput = {
    id?: SortOrder
    nameTm?: SortOrder
    nameEn?: SortOrder
    nameRu?: SortOrder
    logo?: SortOrder
    contentTm?: SortOrder
    contentRu?: SortOrder
    contentEn?: SortOrder
    images?: SortOrder
    type?: SortOrder
    priority?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: productServicesCountOrderByAggregateInput
    _avg?: productServicesAvgOrderByAggregateInput
    _max?: productServicesMaxOrderByAggregateInput
    _min?: productServicesMinOrderByAggregateInput
    _sum?: productServicesSumOrderByAggregateInput
  }

  export type productServicesScalarWhereWithAggregatesInput = {
    AND?: productServicesScalarWhereWithAggregatesInput | productServicesScalarWhereWithAggregatesInput[]
    OR?: productServicesScalarWhereWithAggregatesInput[]
    NOT?: productServicesScalarWhereWithAggregatesInput | productServicesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"productServices"> | string
    nameTm?: StringWithAggregatesFilter<"productServices"> | string
    nameEn?: StringWithAggregatesFilter<"productServices"> | string
    nameRu?: StringWithAggregatesFilter<"productServices"> | string
    logo?: StringWithAggregatesFilter<"productServices"> | string
    contentTm?: StringWithAggregatesFilter<"productServices"> | string
    contentRu?: StringWithAggregatesFilter<"productServices"> | string
    contentEn?: StringWithAggregatesFilter<"productServices"> | string
    images?: StringNullableListFilter<"productServices">
    type?: EnumproductServicesTypeEnumWithAggregatesFilter<"productServices"> | $Enums.productServicesTypeEnum
    priority?: IntNullableWithAggregatesFilter<"productServices"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"productServices"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"productServices"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"productServices"> | Date | string | null
  }

  export type catalogsWhereInput = {
    AND?: catalogsWhereInput | catalogsWhereInput[]
    OR?: catalogsWhereInput[]
    NOT?: catalogsWhereInput | catalogsWhereInput[]
    catalogId?: StringFilter<"catalogs"> | string
    catalogType?: EnumcatalogTypeEnumFilter<"catalogs"> | $Enums.catalogTypeEnum
    fileUrl?: StringFilter<"catalogs"> | string
    createdAt?: DateTimeFilter<"catalogs"> | Date | string
    updatedAt?: DateTimeFilter<"catalogs"> | Date | string
  }

  export type catalogsOrderByWithRelationInput = {
    catalogId?: SortOrder
    catalogType?: SortOrder
    fileUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type catalogsWhereUniqueInput = Prisma.AtLeast<{
    catalogId?: string
    catalogType?: $Enums.catalogTypeEnum
    AND?: catalogsWhereInput | catalogsWhereInput[]
    OR?: catalogsWhereInput[]
    NOT?: catalogsWhereInput | catalogsWhereInput[]
    fileUrl?: StringFilter<"catalogs"> | string
    createdAt?: DateTimeFilter<"catalogs"> | Date | string
    updatedAt?: DateTimeFilter<"catalogs"> | Date | string
  }, "catalogId" | "catalogId" | "catalogType">

  export type catalogsOrderByWithAggregationInput = {
    catalogId?: SortOrder
    catalogType?: SortOrder
    fileUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: catalogsCountOrderByAggregateInput
    _max?: catalogsMaxOrderByAggregateInput
    _min?: catalogsMinOrderByAggregateInput
  }

  export type catalogsScalarWhereWithAggregatesInput = {
    AND?: catalogsScalarWhereWithAggregatesInput | catalogsScalarWhereWithAggregatesInput[]
    OR?: catalogsScalarWhereWithAggregatesInput[]
    NOT?: catalogsScalarWhereWithAggregatesInput | catalogsScalarWhereWithAggregatesInput[]
    catalogId?: StringWithAggregatesFilter<"catalogs"> | string
    catalogType?: EnumcatalogTypeEnumWithAggregatesFilter<"catalogs"> | $Enums.catalogTypeEnum
    fileUrl?: StringWithAggregatesFilter<"catalogs"> | string
    createdAt?: DateTimeWithAggregatesFilter<"catalogs"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"catalogs"> | Date | string
  }

  export type usersCreateInput = {
    userId?: string
    username: string
    password: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    about?: aboutCreateNestedManyWithoutAuthorInput
    news?: newsCreateNestedManyWithoutAuthorInput
    projects?: projectsCreateNestedManyWithoutAuthorInput
    gallery?: galleryCreateNestedManyWithoutAuthorInput
    partners?: partnersCreateNestedManyWithoutAuthorInput
    readMails?: mailsCreateNestedManyWithoutReadUserInput
  }

  export type usersUncheckedCreateInput = {
    userId?: string
    username: string
    password: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    about?: aboutUncheckedCreateNestedManyWithoutAuthorInput
    news?: newsUncheckedCreateNestedManyWithoutAuthorInput
    projects?: projectsUncheckedCreateNestedManyWithoutAuthorInput
    gallery?: galleryUncheckedCreateNestedManyWithoutAuthorInput
    partners?: partnersUncheckedCreateNestedManyWithoutAuthorInput
    readMails?: mailsUncheckedCreateNestedManyWithoutReadUserInput
  }

  export type usersUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    about?: aboutUpdateManyWithoutAuthorNestedInput
    news?: newsUpdateManyWithoutAuthorNestedInput
    projects?: projectsUpdateManyWithoutAuthorNestedInput
    gallery?: galleryUpdateManyWithoutAuthorNestedInput
    partners?: partnersUpdateManyWithoutAuthorNestedInput
    readMails?: mailsUpdateManyWithoutReadUserNestedInput
  }

  export type usersUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    about?: aboutUncheckedUpdateManyWithoutAuthorNestedInput
    news?: newsUncheckedUpdateManyWithoutAuthorNestedInput
    projects?: projectsUncheckedUpdateManyWithoutAuthorNestedInput
    gallery?: galleryUncheckedUpdateManyWithoutAuthorNestedInput
    partners?: partnersUncheckedUpdateManyWithoutAuthorNestedInput
    readMails?: mailsUncheckedUpdateManyWithoutReadUserNestedInput
  }

  export type usersCreateManyInput = {
    userId?: string
    username: string
    password: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type usersUpdateManyMutationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type newsCreateInput = {
    newsId?: string
    titleTm: string
    contentTm: string
    titleRu: string
    contentRu: string
    titleEn: string
    contentEn: string
    image: string
    video?: string | null
    published: boolean
    isMain?: boolean
    homeActivity?: boolean
    priority?: number | null
    createdAt?: Date | string
    deletedAt?: Date | string | null
    author: usersCreateNestedOneWithoutNewsInput
  }

  export type newsUncheckedCreateInput = {
    newsId?: string
    titleTm: string
    contentTm: string
    titleRu: string
    contentRu: string
    titleEn: string
    contentEn: string
    image: string
    video?: string | null
    published: boolean
    isMain?: boolean
    homeActivity?: boolean
    priority?: number | null
    createdAt?: Date | string
    deletedAt?: Date | string | null
    authorId: string
  }

  export type newsUpdateInput = {
    newsId?: StringFieldUpdateOperationsInput | string
    titleTm?: StringFieldUpdateOperationsInput | string
    contentTm?: StringFieldUpdateOperationsInput | string
    titleRu?: StringFieldUpdateOperationsInput | string
    contentRu?: StringFieldUpdateOperationsInput | string
    titleEn?: StringFieldUpdateOperationsInput | string
    contentEn?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    video?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    isMain?: BoolFieldUpdateOperationsInput | boolean
    homeActivity?: BoolFieldUpdateOperationsInput | boolean
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    author?: usersUpdateOneRequiredWithoutNewsNestedInput
  }

  export type newsUncheckedUpdateInput = {
    newsId?: StringFieldUpdateOperationsInput | string
    titleTm?: StringFieldUpdateOperationsInput | string
    contentTm?: StringFieldUpdateOperationsInput | string
    titleRu?: StringFieldUpdateOperationsInput | string
    contentRu?: StringFieldUpdateOperationsInput | string
    titleEn?: StringFieldUpdateOperationsInput | string
    contentEn?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    video?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    isMain?: BoolFieldUpdateOperationsInput | boolean
    homeActivity?: BoolFieldUpdateOperationsInput | boolean
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    authorId?: StringFieldUpdateOperationsInput | string
  }

  export type newsCreateManyInput = {
    newsId?: string
    titleTm: string
    contentTm: string
    titleRu: string
    contentRu: string
    titleEn: string
    contentEn: string
    image: string
    video?: string | null
    published: boolean
    isMain?: boolean
    homeActivity?: boolean
    priority?: number | null
    createdAt?: Date | string
    deletedAt?: Date | string | null
    authorId: string
  }

  export type newsUpdateManyMutationInput = {
    newsId?: StringFieldUpdateOperationsInput | string
    titleTm?: StringFieldUpdateOperationsInput | string
    contentTm?: StringFieldUpdateOperationsInput | string
    titleRu?: StringFieldUpdateOperationsInput | string
    contentRu?: StringFieldUpdateOperationsInput | string
    titleEn?: StringFieldUpdateOperationsInput | string
    contentEn?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    video?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    isMain?: BoolFieldUpdateOperationsInput | boolean
    homeActivity?: BoolFieldUpdateOperationsInput | boolean
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type newsUncheckedUpdateManyInput = {
    newsId?: StringFieldUpdateOperationsInput | string
    titleTm?: StringFieldUpdateOperationsInput | string
    contentTm?: StringFieldUpdateOperationsInput | string
    titleRu?: StringFieldUpdateOperationsInput | string
    contentRu?: StringFieldUpdateOperationsInput | string
    titleEn?: StringFieldUpdateOperationsInput | string
    contentEn?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    video?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    isMain?: BoolFieldUpdateOperationsInput | boolean
    homeActivity?: BoolFieldUpdateOperationsInput | boolean
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    authorId?: StringFieldUpdateOperationsInput | string
  }

  export type projectsCreateInput = {
    projectId?: string
    nameTm: string
    nameRu: string
    nameEn: string
    descriptionTm: string
    descriptionRu: string
    descriptionEn: string
    company: string
    logo: string
    workDate: Date | string
    images?: projectsCreateimagesInput | string[]
    cover: string
    priority?: number | null
    homeActivity?: boolean
    createdAt?: Date | string
    deletedAt?: Date | string | null
    author: usersCreateNestedOneWithoutProjectsInput
  }

  export type projectsUncheckedCreateInput = {
    projectId?: string
    nameTm: string
    nameRu: string
    nameEn: string
    descriptionTm: string
    descriptionRu: string
    descriptionEn: string
    company: string
    logo: string
    workDate: Date | string
    images?: projectsCreateimagesInput | string[]
    cover: string
    priority?: number | null
    homeActivity?: boolean
    createdAt?: Date | string
    deletedAt?: Date | string | null
    authorId: string
  }

  export type projectsUpdateInput = {
    projectId?: StringFieldUpdateOperationsInput | string
    nameTm?: StringFieldUpdateOperationsInput | string
    nameRu?: StringFieldUpdateOperationsInput | string
    nameEn?: StringFieldUpdateOperationsInput | string
    descriptionTm?: StringFieldUpdateOperationsInput | string
    descriptionRu?: StringFieldUpdateOperationsInput | string
    descriptionEn?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    workDate?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: projectsUpdateimagesInput | string[]
    cover?: StringFieldUpdateOperationsInput | string
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    homeActivity?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    author?: usersUpdateOneRequiredWithoutProjectsNestedInput
  }

  export type projectsUncheckedUpdateInput = {
    projectId?: StringFieldUpdateOperationsInput | string
    nameTm?: StringFieldUpdateOperationsInput | string
    nameRu?: StringFieldUpdateOperationsInput | string
    nameEn?: StringFieldUpdateOperationsInput | string
    descriptionTm?: StringFieldUpdateOperationsInput | string
    descriptionRu?: StringFieldUpdateOperationsInput | string
    descriptionEn?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    workDate?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: projectsUpdateimagesInput | string[]
    cover?: StringFieldUpdateOperationsInput | string
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    homeActivity?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    authorId?: StringFieldUpdateOperationsInput | string
  }

  export type projectsCreateManyInput = {
    projectId?: string
    nameTm: string
    nameRu: string
    nameEn: string
    descriptionTm: string
    descriptionRu: string
    descriptionEn: string
    company: string
    logo: string
    workDate: Date | string
    images?: projectsCreateimagesInput | string[]
    cover: string
    priority?: number | null
    homeActivity?: boolean
    createdAt?: Date | string
    deletedAt?: Date | string | null
    authorId: string
  }

  export type projectsUpdateManyMutationInput = {
    projectId?: StringFieldUpdateOperationsInput | string
    nameTm?: StringFieldUpdateOperationsInput | string
    nameRu?: StringFieldUpdateOperationsInput | string
    nameEn?: StringFieldUpdateOperationsInput | string
    descriptionTm?: StringFieldUpdateOperationsInput | string
    descriptionRu?: StringFieldUpdateOperationsInput | string
    descriptionEn?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    workDate?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: projectsUpdateimagesInput | string[]
    cover?: StringFieldUpdateOperationsInput | string
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    homeActivity?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type projectsUncheckedUpdateManyInput = {
    projectId?: StringFieldUpdateOperationsInput | string
    nameTm?: StringFieldUpdateOperationsInput | string
    nameRu?: StringFieldUpdateOperationsInput | string
    nameEn?: StringFieldUpdateOperationsInput | string
    descriptionTm?: StringFieldUpdateOperationsInput | string
    descriptionRu?: StringFieldUpdateOperationsInput | string
    descriptionEn?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    workDate?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: projectsUpdateimagesInput | string[]
    cover?: StringFieldUpdateOperationsInput | string
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    homeActivity?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    authorId?: StringFieldUpdateOperationsInput | string
  }

  export type partnersCreateInput = {
    partnerId?: string
    website?: string | null
    fileUrl: string
    priority?: number | null
    type: $Enums.partnerTypeEnum
    createdAt?: Date | string
    deletedAt?: Date | string | null
    author: usersCreateNestedOneWithoutPartnersInput
  }

  export type partnersUncheckedCreateInput = {
    partnerId?: string
    website?: string | null
    fileUrl: string
    priority?: number | null
    type: $Enums.partnerTypeEnum
    authorId: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type partnersUpdateInput = {
    partnerId?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: StringFieldUpdateOperationsInput | string
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    type?: EnumpartnerTypeEnumFieldUpdateOperationsInput | $Enums.partnerTypeEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    author?: usersUpdateOneRequiredWithoutPartnersNestedInput
  }

  export type partnersUncheckedUpdateInput = {
    partnerId?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: StringFieldUpdateOperationsInput | string
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    type?: EnumpartnerTypeEnumFieldUpdateOperationsInput | $Enums.partnerTypeEnum
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type partnersCreateManyInput = {
    partnerId?: string
    website?: string | null
    fileUrl: string
    priority?: number | null
    type: $Enums.partnerTypeEnum
    authorId: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type partnersUpdateManyMutationInput = {
    partnerId?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: StringFieldUpdateOperationsInput | string
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    type?: EnumpartnerTypeEnumFieldUpdateOperationsInput | $Enums.partnerTypeEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type partnersUncheckedUpdateManyInput = {
    partnerId?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: StringFieldUpdateOperationsInput | string
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    type?: EnumpartnerTypeEnumFieldUpdateOperationsInput | $Enums.partnerTypeEnum
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type galleryCreateInput = {
    galleryId?: string
    priority?: number | null
    image: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    author: usersCreateNestedOneWithoutGalleryInput
  }

  export type galleryUncheckedCreateInput = {
    galleryId?: string
    priority?: number | null
    image: string
    authorId: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type galleryUpdateInput = {
    galleryId?: StringFieldUpdateOperationsInput | string
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    author?: usersUpdateOneRequiredWithoutGalleryNestedInput
  }

  export type galleryUncheckedUpdateInput = {
    galleryId?: StringFieldUpdateOperationsInput | string
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    image?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type galleryCreateManyInput = {
    galleryId?: string
    priority?: number | null
    image: string
    authorId: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type galleryUpdateManyMutationInput = {
    galleryId?: StringFieldUpdateOperationsInput | string
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type galleryUncheckedUpdateManyInput = {
    galleryId?: StringFieldUpdateOperationsInput | string
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    image?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type mailsCreateInput = {
    mailId?: string
    name: string
    email: string
    fileUrl?: string | null
    comment: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    readUser?: usersCreateNestedOneWithoutReadMailsInput
  }

  export type mailsUncheckedCreateInput = {
    mailId?: string
    name: string
    email: string
    fileUrl?: string | null
    comment: string
    readBy?: string | null
    createdAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type mailsUpdateInput = {
    mailId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    readUser?: usersUpdateOneWithoutReadMailsNestedInput
  }

  export type mailsUncheckedUpdateInput = {
    mailId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: StringFieldUpdateOperationsInput | string
    readBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type mailsCreateManyInput = {
    mailId?: string
    name: string
    email: string
    fileUrl?: string | null
    comment: string
    readBy?: string | null
    createdAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type mailsUpdateManyMutationInput = {
    mailId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type mailsUncheckedUpdateManyInput = {
    mailId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: StringFieldUpdateOperationsInput | string
    readBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type aboutCreateInput = {
    aboutId?: string
    titleTm: string
    contentTm: string
    titleRu: string
    contentRu: string
    titleEn: string
    contentEn: string
    taglineTm: string
    taglineRu: string
    taglineEn: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    author: usersCreateNestedOneWithoutAboutInput
  }

  export type aboutUncheckedCreateInput = {
    aboutId?: string
    titleTm: string
    contentTm: string
    titleRu: string
    contentRu: string
    titleEn: string
    contentEn: string
    taglineTm: string
    taglineRu: string
    taglineEn: string
    authorId: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type aboutUpdateInput = {
    aboutId?: StringFieldUpdateOperationsInput | string
    titleTm?: StringFieldUpdateOperationsInput | string
    contentTm?: StringFieldUpdateOperationsInput | string
    titleRu?: StringFieldUpdateOperationsInput | string
    contentRu?: StringFieldUpdateOperationsInput | string
    titleEn?: StringFieldUpdateOperationsInput | string
    contentEn?: StringFieldUpdateOperationsInput | string
    taglineTm?: StringFieldUpdateOperationsInput | string
    taglineRu?: StringFieldUpdateOperationsInput | string
    taglineEn?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    author?: usersUpdateOneRequiredWithoutAboutNestedInput
  }

  export type aboutUncheckedUpdateInput = {
    aboutId?: StringFieldUpdateOperationsInput | string
    titleTm?: StringFieldUpdateOperationsInput | string
    contentTm?: StringFieldUpdateOperationsInput | string
    titleRu?: StringFieldUpdateOperationsInput | string
    contentRu?: StringFieldUpdateOperationsInput | string
    titleEn?: StringFieldUpdateOperationsInput | string
    contentEn?: StringFieldUpdateOperationsInput | string
    taglineTm?: StringFieldUpdateOperationsInput | string
    taglineRu?: StringFieldUpdateOperationsInput | string
    taglineEn?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type aboutCreateManyInput = {
    aboutId?: string
    titleTm: string
    contentTm: string
    titleRu: string
    contentRu: string
    titleEn: string
    contentEn: string
    taglineTm: string
    taglineRu: string
    taglineEn: string
    authorId: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type aboutUpdateManyMutationInput = {
    aboutId?: StringFieldUpdateOperationsInput | string
    titleTm?: StringFieldUpdateOperationsInput | string
    contentTm?: StringFieldUpdateOperationsInput | string
    titleRu?: StringFieldUpdateOperationsInput | string
    contentRu?: StringFieldUpdateOperationsInput | string
    titleEn?: StringFieldUpdateOperationsInput | string
    contentEn?: StringFieldUpdateOperationsInput | string
    taglineTm?: StringFieldUpdateOperationsInput | string
    taglineRu?: StringFieldUpdateOperationsInput | string
    taglineEn?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type aboutUncheckedUpdateManyInput = {
    aboutId?: StringFieldUpdateOperationsInput | string
    titleTm?: StringFieldUpdateOperationsInput | string
    contentTm?: StringFieldUpdateOperationsInput | string
    titleRu?: StringFieldUpdateOperationsInput | string
    contentRu?: StringFieldUpdateOperationsInput | string
    titleEn?: StringFieldUpdateOperationsInput | string
    contentEn?: StringFieldUpdateOperationsInput | string
    taglineTm?: StringFieldUpdateOperationsInput | string
    taglineRu?: StringFieldUpdateOperationsInput | string
    taglineEn?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type contactCreateInput = {
    contactId?: string
    phone: string
    mobilePhone: string
    instagram?: string | null
    instagramLink?: string | null
    info: string
    addressTm: string
    addressRu: string
    addressEn: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type contactUncheckedCreateInput = {
    contactId?: string
    phone: string
    mobilePhone: string
    instagram?: string | null
    instagramLink?: string | null
    info: string
    addressTm: string
    addressRu: string
    addressEn: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type contactUpdateInput = {
    contactId?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    mobilePhone?: StringFieldUpdateOperationsInput | string
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    instagramLink?: NullableStringFieldUpdateOperationsInput | string | null
    info?: StringFieldUpdateOperationsInput | string
    addressTm?: StringFieldUpdateOperationsInput | string
    addressRu?: StringFieldUpdateOperationsInput | string
    addressEn?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type contactUncheckedUpdateInput = {
    contactId?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    mobilePhone?: StringFieldUpdateOperationsInput | string
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    instagramLink?: NullableStringFieldUpdateOperationsInput | string | null
    info?: StringFieldUpdateOperationsInput | string
    addressTm?: StringFieldUpdateOperationsInput | string
    addressRu?: StringFieldUpdateOperationsInput | string
    addressEn?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type contactCreateManyInput = {
    contactId?: string
    phone: string
    mobilePhone: string
    instagram?: string | null
    instagramLink?: string | null
    info: string
    addressTm: string
    addressRu: string
    addressEn: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type contactUpdateManyMutationInput = {
    contactId?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    mobilePhone?: StringFieldUpdateOperationsInput | string
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    instagramLink?: NullableStringFieldUpdateOperationsInput | string | null
    info?: StringFieldUpdateOperationsInput | string
    addressTm?: StringFieldUpdateOperationsInput | string
    addressRu?: StringFieldUpdateOperationsInput | string
    addressEn?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type contactUncheckedUpdateManyInput = {
    contactId?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    mobilePhone?: StringFieldUpdateOperationsInput | string
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    instagramLink?: NullableStringFieldUpdateOperationsInput | string | null
    info?: StringFieldUpdateOperationsInput | string
    addressTm?: StringFieldUpdateOperationsInput | string
    addressRu?: StringFieldUpdateOperationsInput | string
    addressEn?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type informationCreateInput = {
    infoId?: string
    info1?: NullableJsonNullValueInput | InputJsonValue
    info2?: NullableJsonNullValueInput | InputJsonValue
    info3?: NullableJsonNullValueInput | InputJsonValue
    info4?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type informationUncheckedCreateInput = {
    infoId?: string
    info1?: NullableJsonNullValueInput | InputJsonValue
    info2?: NullableJsonNullValueInput | InputJsonValue
    info3?: NullableJsonNullValueInput | InputJsonValue
    info4?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type informationUpdateInput = {
    infoId?: StringFieldUpdateOperationsInput | string
    info1?: NullableJsonNullValueInput | InputJsonValue
    info2?: NullableJsonNullValueInput | InputJsonValue
    info3?: NullableJsonNullValueInput | InputJsonValue
    info4?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type informationUncheckedUpdateInput = {
    infoId?: StringFieldUpdateOperationsInput | string
    info1?: NullableJsonNullValueInput | InputJsonValue
    info2?: NullableJsonNullValueInput | InputJsonValue
    info3?: NullableJsonNullValueInput | InputJsonValue
    info4?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type informationCreateManyInput = {
    infoId?: string
    info1?: NullableJsonNullValueInput | InputJsonValue
    info2?: NullableJsonNullValueInput | InputJsonValue
    info3?: NullableJsonNullValueInput | InputJsonValue
    info4?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type informationUpdateManyMutationInput = {
    infoId?: StringFieldUpdateOperationsInput | string
    info1?: NullableJsonNullValueInput | InputJsonValue
    info2?: NullableJsonNullValueInput | InputJsonValue
    info3?: NullableJsonNullValueInput | InputJsonValue
    info4?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type informationUncheckedUpdateManyInput = {
    infoId?: StringFieldUpdateOperationsInput | string
    info1?: NullableJsonNullValueInput | InputJsonValue
    info2?: NullableJsonNullValueInput | InputJsonValue
    info3?: NullableJsonNullValueInput | InputJsonValue
    info4?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ecologyCreateInput = {
    ecologyId?: string
    images?: ecologyCreateimagesInput | string[]
    titleTm: string
    titleRu: string
    titleEn: string
    contentTm: string
    contentRu: string
    contentEn: string
    video?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ecologyUncheckedCreateInput = {
    ecologyId?: string
    images?: ecologyCreateimagesInput | string[]
    titleTm: string
    titleRu: string
    titleEn: string
    contentTm: string
    contentRu: string
    contentEn: string
    video?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ecologyUpdateInput = {
    ecologyId?: StringFieldUpdateOperationsInput | string
    images?: ecologyUpdateimagesInput | string[]
    titleTm?: StringFieldUpdateOperationsInput | string
    titleRu?: StringFieldUpdateOperationsInput | string
    titleEn?: StringFieldUpdateOperationsInput | string
    contentTm?: StringFieldUpdateOperationsInput | string
    contentRu?: StringFieldUpdateOperationsInput | string
    contentEn?: StringFieldUpdateOperationsInput | string
    video?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ecologyUncheckedUpdateInput = {
    ecologyId?: StringFieldUpdateOperationsInput | string
    images?: ecologyUpdateimagesInput | string[]
    titleTm?: StringFieldUpdateOperationsInput | string
    titleRu?: StringFieldUpdateOperationsInput | string
    titleEn?: StringFieldUpdateOperationsInput | string
    contentTm?: StringFieldUpdateOperationsInput | string
    contentRu?: StringFieldUpdateOperationsInput | string
    contentEn?: StringFieldUpdateOperationsInput | string
    video?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ecologyCreateManyInput = {
    ecologyId?: string
    images?: ecologyCreateimagesInput | string[]
    titleTm: string
    titleRu: string
    titleEn: string
    contentTm: string
    contentRu: string
    contentEn: string
    video?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ecologyUpdateManyMutationInput = {
    ecologyId?: StringFieldUpdateOperationsInput | string
    images?: ecologyUpdateimagesInput | string[]
    titleTm?: StringFieldUpdateOperationsInput | string
    titleRu?: StringFieldUpdateOperationsInput | string
    titleEn?: StringFieldUpdateOperationsInput | string
    contentTm?: StringFieldUpdateOperationsInput | string
    contentRu?: StringFieldUpdateOperationsInput | string
    contentEn?: StringFieldUpdateOperationsInput | string
    video?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ecologyUncheckedUpdateManyInput = {
    ecologyId?: StringFieldUpdateOperationsInput | string
    images?: ecologyUpdateimagesInput | string[]
    titleTm?: StringFieldUpdateOperationsInput | string
    titleRu?: StringFieldUpdateOperationsInput | string
    titleEn?: StringFieldUpdateOperationsInput | string
    contentTm?: StringFieldUpdateOperationsInput | string
    contentRu?: StringFieldUpdateOperationsInput | string
    contentEn?: StringFieldUpdateOperationsInput | string
    video?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type productServicesCreateInput = {
    id?: string
    nameTm: string
    nameEn: string
    nameRu: string
    logo: string
    contentTm: string
    contentRu: string
    contentEn: string
    images?: productServicesCreateimagesInput | string[]
    type: $Enums.productServicesTypeEnum
    priority?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type productServicesUncheckedCreateInput = {
    id?: string
    nameTm: string
    nameEn: string
    nameRu: string
    logo: string
    contentTm: string
    contentRu: string
    contentEn: string
    images?: productServicesCreateimagesInput | string[]
    type: $Enums.productServicesTypeEnum
    priority?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type productServicesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nameTm?: StringFieldUpdateOperationsInput | string
    nameEn?: StringFieldUpdateOperationsInput | string
    nameRu?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    contentTm?: StringFieldUpdateOperationsInput | string
    contentRu?: StringFieldUpdateOperationsInput | string
    contentEn?: StringFieldUpdateOperationsInput | string
    images?: productServicesUpdateimagesInput | string[]
    type?: EnumproductServicesTypeEnumFieldUpdateOperationsInput | $Enums.productServicesTypeEnum
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type productServicesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nameTm?: StringFieldUpdateOperationsInput | string
    nameEn?: StringFieldUpdateOperationsInput | string
    nameRu?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    contentTm?: StringFieldUpdateOperationsInput | string
    contentRu?: StringFieldUpdateOperationsInput | string
    contentEn?: StringFieldUpdateOperationsInput | string
    images?: productServicesUpdateimagesInput | string[]
    type?: EnumproductServicesTypeEnumFieldUpdateOperationsInput | $Enums.productServicesTypeEnum
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type productServicesCreateManyInput = {
    id?: string
    nameTm: string
    nameEn: string
    nameRu: string
    logo: string
    contentTm: string
    contentRu: string
    contentEn: string
    images?: productServicesCreateimagesInput | string[]
    type: $Enums.productServicesTypeEnum
    priority?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type productServicesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nameTm?: StringFieldUpdateOperationsInput | string
    nameEn?: StringFieldUpdateOperationsInput | string
    nameRu?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    contentTm?: StringFieldUpdateOperationsInput | string
    contentRu?: StringFieldUpdateOperationsInput | string
    contentEn?: StringFieldUpdateOperationsInput | string
    images?: productServicesUpdateimagesInput | string[]
    type?: EnumproductServicesTypeEnumFieldUpdateOperationsInput | $Enums.productServicesTypeEnum
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type productServicesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nameTm?: StringFieldUpdateOperationsInput | string
    nameEn?: StringFieldUpdateOperationsInput | string
    nameRu?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    contentTm?: StringFieldUpdateOperationsInput | string
    contentRu?: StringFieldUpdateOperationsInput | string
    contentEn?: StringFieldUpdateOperationsInput | string
    images?: productServicesUpdateimagesInput | string[]
    type?: EnumproductServicesTypeEnumFieldUpdateOperationsInput | $Enums.productServicesTypeEnum
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type catalogsCreateInput = {
    catalogId?: string
    catalogType: $Enums.catalogTypeEnum
    fileUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type catalogsUncheckedCreateInput = {
    catalogId?: string
    catalogType: $Enums.catalogTypeEnum
    fileUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type catalogsUpdateInput = {
    catalogId?: StringFieldUpdateOperationsInput | string
    catalogType?: EnumcatalogTypeEnumFieldUpdateOperationsInput | $Enums.catalogTypeEnum
    fileUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type catalogsUncheckedUpdateInput = {
    catalogId?: StringFieldUpdateOperationsInput | string
    catalogType?: EnumcatalogTypeEnumFieldUpdateOperationsInput | $Enums.catalogTypeEnum
    fileUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type catalogsCreateManyInput = {
    catalogId?: string
    catalogType: $Enums.catalogTypeEnum
    fileUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type catalogsUpdateManyMutationInput = {
    catalogId?: StringFieldUpdateOperationsInput | string
    catalogType?: EnumcatalogTypeEnumFieldUpdateOperationsInput | $Enums.catalogTypeEnum
    fileUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type catalogsUncheckedUpdateManyInput = {
    catalogId?: StringFieldUpdateOperationsInput | string
    catalogType?: EnumcatalogTypeEnumFieldUpdateOperationsInput | $Enums.catalogTypeEnum
    fileUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type AboutListRelationFilter = {
    every?: aboutWhereInput
    some?: aboutWhereInput
    none?: aboutWhereInput
  }

  export type NewsListRelationFilter = {
    every?: newsWhereInput
    some?: newsWhereInput
    none?: newsWhereInput
  }

  export type ProjectsListRelationFilter = {
    every?: projectsWhereInput
    some?: projectsWhereInput
    none?: projectsWhereInput
  }

  export type GalleryListRelationFilter = {
    every?: galleryWhereInput
    some?: galleryWhereInput
    none?: galleryWhereInput
  }

  export type PartnersListRelationFilter = {
    every?: partnersWhereInput
    some?: partnersWhereInput
    none?: partnersWhereInput
  }

  export type MailsListRelationFilter = {
    every?: mailsWhereInput
    some?: mailsWhereInput
    none?: mailsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type aboutOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type newsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type projectsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type galleryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type partnersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type mailsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    userId?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    userId?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    userId?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UsersRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type newsCountOrderByAggregateInput = {
    newsId?: SortOrder
    titleTm?: SortOrder
    contentTm?: SortOrder
    titleRu?: SortOrder
    contentRu?: SortOrder
    titleEn?: SortOrder
    contentEn?: SortOrder
    image?: SortOrder
    video?: SortOrder
    published?: SortOrder
    isMain?: SortOrder
    homeActivity?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
    authorId?: SortOrder
  }

  export type newsAvgOrderByAggregateInput = {
    priority?: SortOrder
  }

  export type newsMaxOrderByAggregateInput = {
    newsId?: SortOrder
    titleTm?: SortOrder
    contentTm?: SortOrder
    titleRu?: SortOrder
    contentRu?: SortOrder
    titleEn?: SortOrder
    contentEn?: SortOrder
    image?: SortOrder
    video?: SortOrder
    published?: SortOrder
    isMain?: SortOrder
    homeActivity?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
    authorId?: SortOrder
  }

  export type newsMinOrderByAggregateInput = {
    newsId?: SortOrder
    titleTm?: SortOrder
    contentTm?: SortOrder
    titleRu?: SortOrder
    contentRu?: SortOrder
    titleEn?: SortOrder
    contentEn?: SortOrder
    image?: SortOrder
    video?: SortOrder
    published?: SortOrder
    isMain?: SortOrder
    homeActivity?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
    authorId?: SortOrder
  }

  export type newsSumOrderByAggregateInput = {
    priority?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type projectsCountOrderByAggregateInput = {
    projectId?: SortOrder
    nameTm?: SortOrder
    nameRu?: SortOrder
    nameEn?: SortOrder
    descriptionTm?: SortOrder
    descriptionRu?: SortOrder
    descriptionEn?: SortOrder
    company?: SortOrder
    logo?: SortOrder
    workDate?: SortOrder
    images?: SortOrder
    cover?: SortOrder
    priority?: SortOrder
    homeActivity?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
    authorId?: SortOrder
  }

  export type projectsAvgOrderByAggregateInput = {
    priority?: SortOrder
  }

  export type projectsMaxOrderByAggregateInput = {
    projectId?: SortOrder
    nameTm?: SortOrder
    nameRu?: SortOrder
    nameEn?: SortOrder
    descriptionTm?: SortOrder
    descriptionRu?: SortOrder
    descriptionEn?: SortOrder
    company?: SortOrder
    logo?: SortOrder
    workDate?: SortOrder
    cover?: SortOrder
    priority?: SortOrder
    homeActivity?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
    authorId?: SortOrder
  }

  export type projectsMinOrderByAggregateInput = {
    projectId?: SortOrder
    nameTm?: SortOrder
    nameRu?: SortOrder
    nameEn?: SortOrder
    descriptionTm?: SortOrder
    descriptionRu?: SortOrder
    descriptionEn?: SortOrder
    company?: SortOrder
    logo?: SortOrder
    workDate?: SortOrder
    cover?: SortOrder
    priority?: SortOrder
    homeActivity?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
    authorId?: SortOrder
  }

  export type projectsSumOrderByAggregateInput = {
    priority?: SortOrder
  }

  export type EnumpartnerTypeEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.partnerTypeEnum | EnumpartnerTypeEnumFieldRefInput<$PrismaModel>
    in?: $Enums.partnerTypeEnum[] | ListEnumpartnerTypeEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.partnerTypeEnum[] | ListEnumpartnerTypeEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumpartnerTypeEnumFilter<$PrismaModel> | $Enums.partnerTypeEnum
  }

  export type partnersCountOrderByAggregateInput = {
    partnerId?: SortOrder
    website?: SortOrder
    fileUrl?: SortOrder
    priority?: SortOrder
    type?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type partnersAvgOrderByAggregateInput = {
    priority?: SortOrder
  }

  export type partnersMaxOrderByAggregateInput = {
    partnerId?: SortOrder
    website?: SortOrder
    fileUrl?: SortOrder
    priority?: SortOrder
    type?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type partnersMinOrderByAggregateInput = {
    partnerId?: SortOrder
    website?: SortOrder
    fileUrl?: SortOrder
    priority?: SortOrder
    type?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type partnersSumOrderByAggregateInput = {
    priority?: SortOrder
  }

  export type EnumpartnerTypeEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.partnerTypeEnum | EnumpartnerTypeEnumFieldRefInput<$PrismaModel>
    in?: $Enums.partnerTypeEnum[] | ListEnumpartnerTypeEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.partnerTypeEnum[] | ListEnumpartnerTypeEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumpartnerTypeEnumWithAggregatesFilter<$PrismaModel> | $Enums.partnerTypeEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumpartnerTypeEnumFilter<$PrismaModel>
    _max?: NestedEnumpartnerTypeEnumFilter<$PrismaModel>
  }

  export type galleryCountOrderByAggregateInput = {
    galleryId?: SortOrder
    priority?: SortOrder
    image?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type galleryAvgOrderByAggregateInput = {
    priority?: SortOrder
  }

  export type galleryMaxOrderByAggregateInput = {
    galleryId?: SortOrder
    priority?: SortOrder
    image?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type galleryMinOrderByAggregateInput = {
    galleryId?: SortOrder
    priority?: SortOrder
    image?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type gallerySumOrderByAggregateInput = {
    priority?: SortOrder
  }

  export type UsersNullableRelationFilter = {
    is?: usersWhereInput | null
    isNot?: usersWhereInput | null
  }

  export type mailsCountOrderByAggregateInput = {
    mailId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    fileUrl?: SortOrder
    comment?: SortOrder
    readBy?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type mailsMaxOrderByAggregateInput = {
    mailId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    fileUrl?: SortOrder
    comment?: SortOrder
    readBy?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type mailsMinOrderByAggregateInput = {
    mailId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    fileUrl?: SortOrder
    comment?: SortOrder
    readBy?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type aboutCountOrderByAggregateInput = {
    aboutId?: SortOrder
    titleTm?: SortOrder
    contentTm?: SortOrder
    titleRu?: SortOrder
    contentRu?: SortOrder
    titleEn?: SortOrder
    contentEn?: SortOrder
    taglineTm?: SortOrder
    taglineRu?: SortOrder
    taglineEn?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type aboutMaxOrderByAggregateInput = {
    aboutId?: SortOrder
    titleTm?: SortOrder
    contentTm?: SortOrder
    titleRu?: SortOrder
    contentRu?: SortOrder
    titleEn?: SortOrder
    contentEn?: SortOrder
    taglineTm?: SortOrder
    taglineRu?: SortOrder
    taglineEn?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type aboutMinOrderByAggregateInput = {
    aboutId?: SortOrder
    titleTm?: SortOrder
    contentTm?: SortOrder
    titleRu?: SortOrder
    contentRu?: SortOrder
    titleEn?: SortOrder
    contentEn?: SortOrder
    taglineTm?: SortOrder
    taglineRu?: SortOrder
    taglineEn?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type contactCountOrderByAggregateInput = {
    contactId?: SortOrder
    phone?: SortOrder
    mobilePhone?: SortOrder
    instagram?: SortOrder
    instagramLink?: SortOrder
    info?: SortOrder
    addressTm?: SortOrder
    addressRu?: SortOrder
    addressEn?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type contactMaxOrderByAggregateInput = {
    contactId?: SortOrder
    phone?: SortOrder
    mobilePhone?: SortOrder
    instagram?: SortOrder
    instagramLink?: SortOrder
    info?: SortOrder
    addressTm?: SortOrder
    addressRu?: SortOrder
    addressEn?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type contactMinOrderByAggregateInput = {
    contactId?: SortOrder
    phone?: SortOrder
    mobilePhone?: SortOrder
    instagram?: SortOrder
    instagramLink?: SortOrder
    info?: SortOrder
    addressTm?: SortOrder
    addressRu?: SortOrder
    addressEn?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type informationCountOrderByAggregateInput = {
    infoId?: SortOrder
    info1?: SortOrder
    info2?: SortOrder
    info3?: SortOrder
    info4?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type informationMaxOrderByAggregateInput = {
    infoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type informationMinOrderByAggregateInput = {
    infoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type ecologyCountOrderByAggregateInput = {
    ecologyId?: SortOrder
    images?: SortOrder
    titleTm?: SortOrder
    titleRu?: SortOrder
    titleEn?: SortOrder
    contentTm?: SortOrder
    contentRu?: SortOrder
    contentEn?: SortOrder
    video?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ecologyMaxOrderByAggregateInput = {
    ecologyId?: SortOrder
    titleTm?: SortOrder
    titleRu?: SortOrder
    titleEn?: SortOrder
    contentTm?: SortOrder
    contentRu?: SortOrder
    contentEn?: SortOrder
    video?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ecologyMinOrderByAggregateInput = {
    ecologyId?: SortOrder
    titleTm?: SortOrder
    titleRu?: SortOrder
    titleEn?: SortOrder
    contentTm?: SortOrder
    contentRu?: SortOrder
    contentEn?: SortOrder
    video?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumproductServicesTypeEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.productServicesTypeEnum | EnumproductServicesTypeEnumFieldRefInput<$PrismaModel>
    in?: $Enums.productServicesTypeEnum[] | ListEnumproductServicesTypeEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.productServicesTypeEnum[] | ListEnumproductServicesTypeEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumproductServicesTypeEnumFilter<$PrismaModel> | $Enums.productServicesTypeEnum
  }

  export type productServicesCountOrderByAggregateInput = {
    id?: SortOrder
    nameTm?: SortOrder
    nameEn?: SortOrder
    nameRu?: SortOrder
    logo?: SortOrder
    contentTm?: SortOrder
    contentRu?: SortOrder
    contentEn?: SortOrder
    images?: SortOrder
    type?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type productServicesAvgOrderByAggregateInput = {
    priority?: SortOrder
  }

  export type productServicesMaxOrderByAggregateInput = {
    id?: SortOrder
    nameTm?: SortOrder
    nameEn?: SortOrder
    nameRu?: SortOrder
    logo?: SortOrder
    contentTm?: SortOrder
    contentRu?: SortOrder
    contentEn?: SortOrder
    type?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type productServicesMinOrderByAggregateInput = {
    id?: SortOrder
    nameTm?: SortOrder
    nameEn?: SortOrder
    nameRu?: SortOrder
    logo?: SortOrder
    contentTm?: SortOrder
    contentRu?: SortOrder
    contentEn?: SortOrder
    type?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type productServicesSumOrderByAggregateInput = {
    priority?: SortOrder
  }

  export type EnumproductServicesTypeEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.productServicesTypeEnum | EnumproductServicesTypeEnumFieldRefInput<$PrismaModel>
    in?: $Enums.productServicesTypeEnum[] | ListEnumproductServicesTypeEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.productServicesTypeEnum[] | ListEnumproductServicesTypeEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumproductServicesTypeEnumWithAggregatesFilter<$PrismaModel> | $Enums.productServicesTypeEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumproductServicesTypeEnumFilter<$PrismaModel>
    _max?: NestedEnumproductServicesTypeEnumFilter<$PrismaModel>
  }

  export type EnumcatalogTypeEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.catalogTypeEnum | EnumcatalogTypeEnumFieldRefInput<$PrismaModel>
    in?: $Enums.catalogTypeEnum[] | ListEnumcatalogTypeEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.catalogTypeEnum[] | ListEnumcatalogTypeEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumcatalogTypeEnumFilter<$PrismaModel> | $Enums.catalogTypeEnum
  }

  export type catalogsCountOrderByAggregateInput = {
    catalogId?: SortOrder
    catalogType?: SortOrder
    fileUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type catalogsMaxOrderByAggregateInput = {
    catalogId?: SortOrder
    catalogType?: SortOrder
    fileUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type catalogsMinOrderByAggregateInput = {
    catalogId?: SortOrder
    catalogType?: SortOrder
    fileUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumcatalogTypeEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.catalogTypeEnum | EnumcatalogTypeEnumFieldRefInput<$PrismaModel>
    in?: $Enums.catalogTypeEnum[] | ListEnumcatalogTypeEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.catalogTypeEnum[] | ListEnumcatalogTypeEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumcatalogTypeEnumWithAggregatesFilter<$PrismaModel> | $Enums.catalogTypeEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumcatalogTypeEnumFilter<$PrismaModel>
    _max?: NestedEnumcatalogTypeEnumFilter<$PrismaModel>
  }

  export type aboutCreateNestedManyWithoutAuthorInput = {
    create?: XOR<aboutCreateWithoutAuthorInput, aboutUncheckedCreateWithoutAuthorInput> | aboutCreateWithoutAuthorInput[] | aboutUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: aboutCreateOrConnectWithoutAuthorInput | aboutCreateOrConnectWithoutAuthorInput[]
    createMany?: aboutCreateManyAuthorInputEnvelope
    connect?: aboutWhereUniqueInput | aboutWhereUniqueInput[]
  }

  export type newsCreateNestedManyWithoutAuthorInput = {
    create?: XOR<newsCreateWithoutAuthorInput, newsUncheckedCreateWithoutAuthorInput> | newsCreateWithoutAuthorInput[] | newsUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: newsCreateOrConnectWithoutAuthorInput | newsCreateOrConnectWithoutAuthorInput[]
    createMany?: newsCreateManyAuthorInputEnvelope
    connect?: newsWhereUniqueInput | newsWhereUniqueInput[]
  }

  export type projectsCreateNestedManyWithoutAuthorInput = {
    create?: XOR<projectsCreateWithoutAuthorInput, projectsUncheckedCreateWithoutAuthorInput> | projectsCreateWithoutAuthorInput[] | projectsUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: projectsCreateOrConnectWithoutAuthorInput | projectsCreateOrConnectWithoutAuthorInput[]
    createMany?: projectsCreateManyAuthorInputEnvelope
    connect?: projectsWhereUniqueInput | projectsWhereUniqueInput[]
  }

  export type galleryCreateNestedManyWithoutAuthorInput = {
    create?: XOR<galleryCreateWithoutAuthorInput, galleryUncheckedCreateWithoutAuthorInput> | galleryCreateWithoutAuthorInput[] | galleryUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: galleryCreateOrConnectWithoutAuthorInput | galleryCreateOrConnectWithoutAuthorInput[]
    createMany?: galleryCreateManyAuthorInputEnvelope
    connect?: galleryWhereUniqueInput | galleryWhereUniqueInput[]
  }

  export type partnersCreateNestedManyWithoutAuthorInput = {
    create?: XOR<partnersCreateWithoutAuthorInput, partnersUncheckedCreateWithoutAuthorInput> | partnersCreateWithoutAuthorInput[] | partnersUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: partnersCreateOrConnectWithoutAuthorInput | partnersCreateOrConnectWithoutAuthorInput[]
    createMany?: partnersCreateManyAuthorInputEnvelope
    connect?: partnersWhereUniqueInput | partnersWhereUniqueInput[]
  }

  export type mailsCreateNestedManyWithoutReadUserInput = {
    create?: XOR<mailsCreateWithoutReadUserInput, mailsUncheckedCreateWithoutReadUserInput> | mailsCreateWithoutReadUserInput[] | mailsUncheckedCreateWithoutReadUserInput[]
    connectOrCreate?: mailsCreateOrConnectWithoutReadUserInput | mailsCreateOrConnectWithoutReadUserInput[]
    createMany?: mailsCreateManyReadUserInputEnvelope
    connect?: mailsWhereUniqueInput | mailsWhereUniqueInput[]
  }

  export type aboutUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<aboutCreateWithoutAuthorInput, aboutUncheckedCreateWithoutAuthorInput> | aboutCreateWithoutAuthorInput[] | aboutUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: aboutCreateOrConnectWithoutAuthorInput | aboutCreateOrConnectWithoutAuthorInput[]
    createMany?: aboutCreateManyAuthorInputEnvelope
    connect?: aboutWhereUniqueInput | aboutWhereUniqueInput[]
  }

  export type newsUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<newsCreateWithoutAuthorInput, newsUncheckedCreateWithoutAuthorInput> | newsCreateWithoutAuthorInput[] | newsUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: newsCreateOrConnectWithoutAuthorInput | newsCreateOrConnectWithoutAuthorInput[]
    createMany?: newsCreateManyAuthorInputEnvelope
    connect?: newsWhereUniqueInput | newsWhereUniqueInput[]
  }

  export type projectsUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<projectsCreateWithoutAuthorInput, projectsUncheckedCreateWithoutAuthorInput> | projectsCreateWithoutAuthorInput[] | projectsUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: projectsCreateOrConnectWithoutAuthorInput | projectsCreateOrConnectWithoutAuthorInput[]
    createMany?: projectsCreateManyAuthorInputEnvelope
    connect?: projectsWhereUniqueInput | projectsWhereUniqueInput[]
  }

  export type galleryUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<galleryCreateWithoutAuthorInput, galleryUncheckedCreateWithoutAuthorInput> | galleryCreateWithoutAuthorInput[] | galleryUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: galleryCreateOrConnectWithoutAuthorInput | galleryCreateOrConnectWithoutAuthorInput[]
    createMany?: galleryCreateManyAuthorInputEnvelope
    connect?: galleryWhereUniqueInput | galleryWhereUniqueInput[]
  }

  export type partnersUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<partnersCreateWithoutAuthorInput, partnersUncheckedCreateWithoutAuthorInput> | partnersCreateWithoutAuthorInput[] | partnersUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: partnersCreateOrConnectWithoutAuthorInput | partnersCreateOrConnectWithoutAuthorInput[]
    createMany?: partnersCreateManyAuthorInputEnvelope
    connect?: partnersWhereUniqueInput | partnersWhereUniqueInput[]
  }

  export type mailsUncheckedCreateNestedManyWithoutReadUserInput = {
    create?: XOR<mailsCreateWithoutReadUserInput, mailsUncheckedCreateWithoutReadUserInput> | mailsCreateWithoutReadUserInput[] | mailsUncheckedCreateWithoutReadUserInput[]
    connectOrCreate?: mailsCreateOrConnectWithoutReadUserInput | mailsCreateOrConnectWithoutReadUserInput[]
    createMany?: mailsCreateManyReadUserInputEnvelope
    connect?: mailsWhereUniqueInput | mailsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type aboutUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<aboutCreateWithoutAuthorInput, aboutUncheckedCreateWithoutAuthorInput> | aboutCreateWithoutAuthorInput[] | aboutUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: aboutCreateOrConnectWithoutAuthorInput | aboutCreateOrConnectWithoutAuthorInput[]
    upsert?: aboutUpsertWithWhereUniqueWithoutAuthorInput | aboutUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: aboutCreateManyAuthorInputEnvelope
    set?: aboutWhereUniqueInput | aboutWhereUniqueInput[]
    disconnect?: aboutWhereUniqueInput | aboutWhereUniqueInput[]
    delete?: aboutWhereUniqueInput | aboutWhereUniqueInput[]
    connect?: aboutWhereUniqueInput | aboutWhereUniqueInput[]
    update?: aboutUpdateWithWhereUniqueWithoutAuthorInput | aboutUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: aboutUpdateManyWithWhereWithoutAuthorInput | aboutUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: aboutScalarWhereInput | aboutScalarWhereInput[]
  }

  export type newsUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<newsCreateWithoutAuthorInput, newsUncheckedCreateWithoutAuthorInput> | newsCreateWithoutAuthorInput[] | newsUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: newsCreateOrConnectWithoutAuthorInput | newsCreateOrConnectWithoutAuthorInput[]
    upsert?: newsUpsertWithWhereUniqueWithoutAuthorInput | newsUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: newsCreateManyAuthorInputEnvelope
    set?: newsWhereUniqueInput | newsWhereUniqueInput[]
    disconnect?: newsWhereUniqueInput | newsWhereUniqueInput[]
    delete?: newsWhereUniqueInput | newsWhereUniqueInput[]
    connect?: newsWhereUniqueInput | newsWhereUniqueInput[]
    update?: newsUpdateWithWhereUniqueWithoutAuthorInput | newsUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: newsUpdateManyWithWhereWithoutAuthorInput | newsUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: newsScalarWhereInput | newsScalarWhereInput[]
  }

  export type projectsUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<projectsCreateWithoutAuthorInput, projectsUncheckedCreateWithoutAuthorInput> | projectsCreateWithoutAuthorInput[] | projectsUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: projectsCreateOrConnectWithoutAuthorInput | projectsCreateOrConnectWithoutAuthorInput[]
    upsert?: projectsUpsertWithWhereUniqueWithoutAuthorInput | projectsUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: projectsCreateManyAuthorInputEnvelope
    set?: projectsWhereUniqueInput | projectsWhereUniqueInput[]
    disconnect?: projectsWhereUniqueInput | projectsWhereUniqueInput[]
    delete?: projectsWhereUniqueInput | projectsWhereUniqueInput[]
    connect?: projectsWhereUniqueInput | projectsWhereUniqueInput[]
    update?: projectsUpdateWithWhereUniqueWithoutAuthorInput | projectsUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: projectsUpdateManyWithWhereWithoutAuthorInput | projectsUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: projectsScalarWhereInput | projectsScalarWhereInput[]
  }

  export type galleryUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<galleryCreateWithoutAuthorInput, galleryUncheckedCreateWithoutAuthorInput> | galleryCreateWithoutAuthorInput[] | galleryUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: galleryCreateOrConnectWithoutAuthorInput | galleryCreateOrConnectWithoutAuthorInput[]
    upsert?: galleryUpsertWithWhereUniqueWithoutAuthorInput | galleryUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: galleryCreateManyAuthorInputEnvelope
    set?: galleryWhereUniqueInput | galleryWhereUniqueInput[]
    disconnect?: galleryWhereUniqueInput | galleryWhereUniqueInput[]
    delete?: galleryWhereUniqueInput | galleryWhereUniqueInput[]
    connect?: galleryWhereUniqueInput | galleryWhereUniqueInput[]
    update?: galleryUpdateWithWhereUniqueWithoutAuthorInput | galleryUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: galleryUpdateManyWithWhereWithoutAuthorInput | galleryUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: galleryScalarWhereInput | galleryScalarWhereInput[]
  }

  export type partnersUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<partnersCreateWithoutAuthorInput, partnersUncheckedCreateWithoutAuthorInput> | partnersCreateWithoutAuthorInput[] | partnersUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: partnersCreateOrConnectWithoutAuthorInput | partnersCreateOrConnectWithoutAuthorInput[]
    upsert?: partnersUpsertWithWhereUniqueWithoutAuthorInput | partnersUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: partnersCreateManyAuthorInputEnvelope
    set?: partnersWhereUniqueInput | partnersWhereUniqueInput[]
    disconnect?: partnersWhereUniqueInput | partnersWhereUniqueInput[]
    delete?: partnersWhereUniqueInput | partnersWhereUniqueInput[]
    connect?: partnersWhereUniqueInput | partnersWhereUniqueInput[]
    update?: partnersUpdateWithWhereUniqueWithoutAuthorInput | partnersUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: partnersUpdateManyWithWhereWithoutAuthorInput | partnersUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: partnersScalarWhereInput | partnersScalarWhereInput[]
  }

  export type mailsUpdateManyWithoutReadUserNestedInput = {
    create?: XOR<mailsCreateWithoutReadUserInput, mailsUncheckedCreateWithoutReadUserInput> | mailsCreateWithoutReadUserInput[] | mailsUncheckedCreateWithoutReadUserInput[]
    connectOrCreate?: mailsCreateOrConnectWithoutReadUserInput | mailsCreateOrConnectWithoutReadUserInput[]
    upsert?: mailsUpsertWithWhereUniqueWithoutReadUserInput | mailsUpsertWithWhereUniqueWithoutReadUserInput[]
    createMany?: mailsCreateManyReadUserInputEnvelope
    set?: mailsWhereUniqueInput | mailsWhereUniqueInput[]
    disconnect?: mailsWhereUniqueInput | mailsWhereUniqueInput[]
    delete?: mailsWhereUniqueInput | mailsWhereUniqueInput[]
    connect?: mailsWhereUniqueInput | mailsWhereUniqueInput[]
    update?: mailsUpdateWithWhereUniqueWithoutReadUserInput | mailsUpdateWithWhereUniqueWithoutReadUserInput[]
    updateMany?: mailsUpdateManyWithWhereWithoutReadUserInput | mailsUpdateManyWithWhereWithoutReadUserInput[]
    deleteMany?: mailsScalarWhereInput | mailsScalarWhereInput[]
  }

  export type aboutUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<aboutCreateWithoutAuthorInput, aboutUncheckedCreateWithoutAuthorInput> | aboutCreateWithoutAuthorInput[] | aboutUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: aboutCreateOrConnectWithoutAuthorInput | aboutCreateOrConnectWithoutAuthorInput[]
    upsert?: aboutUpsertWithWhereUniqueWithoutAuthorInput | aboutUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: aboutCreateManyAuthorInputEnvelope
    set?: aboutWhereUniqueInput | aboutWhereUniqueInput[]
    disconnect?: aboutWhereUniqueInput | aboutWhereUniqueInput[]
    delete?: aboutWhereUniqueInput | aboutWhereUniqueInput[]
    connect?: aboutWhereUniqueInput | aboutWhereUniqueInput[]
    update?: aboutUpdateWithWhereUniqueWithoutAuthorInput | aboutUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: aboutUpdateManyWithWhereWithoutAuthorInput | aboutUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: aboutScalarWhereInput | aboutScalarWhereInput[]
  }

  export type newsUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<newsCreateWithoutAuthorInput, newsUncheckedCreateWithoutAuthorInput> | newsCreateWithoutAuthorInput[] | newsUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: newsCreateOrConnectWithoutAuthorInput | newsCreateOrConnectWithoutAuthorInput[]
    upsert?: newsUpsertWithWhereUniqueWithoutAuthorInput | newsUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: newsCreateManyAuthorInputEnvelope
    set?: newsWhereUniqueInput | newsWhereUniqueInput[]
    disconnect?: newsWhereUniqueInput | newsWhereUniqueInput[]
    delete?: newsWhereUniqueInput | newsWhereUniqueInput[]
    connect?: newsWhereUniqueInput | newsWhereUniqueInput[]
    update?: newsUpdateWithWhereUniqueWithoutAuthorInput | newsUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: newsUpdateManyWithWhereWithoutAuthorInput | newsUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: newsScalarWhereInput | newsScalarWhereInput[]
  }

  export type projectsUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<projectsCreateWithoutAuthorInput, projectsUncheckedCreateWithoutAuthorInput> | projectsCreateWithoutAuthorInput[] | projectsUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: projectsCreateOrConnectWithoutAuthorInput | projectsCreateOrConnectWithoutAuthorInput[]
    upsert?: projectsUpsertWithWhereUniqueWithoutAuthorInput | projectsUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: projectsCreateManyAuthorInputEnvelope
    set?: projectsWhereUniqueInput | projectsWhereUniqueInput[]
    disconnect?: projectsWhereUniqueInput | projectsWhereUniqueInput[]
    delete?: projectsWhereUniqueInput | projectsWhereUniqueInput[]
    connect?: projectsWhereUniqueInput | projectsWhereUniqueInput[]
    update?: projectsUpdateWithWhereUniqueWithoutAuthorInput | projectsUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: projectsUpdateManyWithWhereWithoutAuthorInput | projectsUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: projectsScalarWhereInput | projectsScalarWhereInput[]
  }

  export type galleryUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<galleryCreateWithoutAuthorInput, galleryUncheckedCreateWithoutAuthorInput> | galleryCreateWithoutAuthorInput[] | galleryUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: galleryCreateOrConnectWithoutAuthorInput | galleryCreateOrConnectWithoutAuthorInput[]
    upsert?: galleryUpsertWithWhereUniqueWithoutAuthorInput | galleryUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: galleryCreateManyAuthorInputEnvelope
    set?: galleryWhereUniqueInput | galleryWhereUniqueInput[]
    disconnect?: galleryWhereUniqueInput | galleryWhereUniqueInput[]
    delete?: galleryWhereUniqueInput | galleryWhereUniqueInput[]
    connect?: galleryWhereUniqueInput | galleryWhereUniqueInput[]
    update?: galleryUpdateWithWhereUniqueWithoutAuthorInput | galleryUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: galleryUpdateManyWithWhereWithoutAuthorInput | galleryUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: galleryScalarWhereInput | galleryScalarWhereInput[]
  }

  export type partnersUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<partnersCreateWithoutAuthorInput, partnersUncheckedCreateWithoutAuthorInput> | partnersCreateWithoutAuthorInput[] | partnersUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: partnersCreateOrConnectWithoutAuthorInput | partnersCreateOrConnectWithoutAuthorInput[]
    upsert?: partnersUpsertWithWhereUniqueWithoutAuthorInput | partnersUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: partnersCreateManyAuthorInputEnvelope
    set?: partnersWhereUniqueInput | partnersWhereUniqueInput[]
    disconnect?: partnersWhereUniqueInput | partnersWhereUniqueInput[]
    delete?: partnersWhereUniqueInput | partnersWhereUniqueInput[]
    connect?: partnersWhereUniqueInput | partnersWhereUniqueInput[]
    update?: partnersUpdateWithWhereUniqueWithoutAuthorInput | partnersUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: partnersUpdateManyWithWhereWithoutAuthorInput | partnersUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: partnersScalarWhereInput | partnersScalarWhereInput[]
  }

  export type mailsUncheckedUpdateManyWithoutReadUserNestedInput = {
    create?: XOR<mailsCreateWithoutReadUserInput, mailsUncheckedCreateWithoutReadUserInput> | mailsCreateWithoutReadUserInput[] | mailsUncheckedCreateWithoutReadUserInput[]
    connectOrCreate?: mailsCreateOrConnectWithoutReadUserInput | mailsCreateOrConnectWithoutReadUserInput[]
    upsert?: mailsUpsertWithWhereUniqueWithoutReadUserInput | mailsUpsertWithWhereUniqueWithoutReadUserInput[]
    createMany?: mailsCreateManyReadUserInputEnvelope
    set?: mailsWhereUniqueInput | mailsWhereUniqueInput[]
    disconnect?: mailsWhereUniqueInput | mailsWhereUniqueInput[]
    delete?: mailsWhereUniqueInput | mailsWhereUniqueInput[]
    connect?: mailsWhereUniqueInput | mailsWhereUniqueInput[]
    update?: mailsUpdateWithWhereUniqueWithoutReadUserInput | mailsUpdateWithWhereUniqueWithoutReadUserInput[]
    updateMany?: mailsUpdateManyWithWhereWithoutReadUserInput | mailsUpdateManyWithWhereWithoutReadUserInput[]
    deleteMany?: mailsScalarWhereInput | mailsScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutNewsInput = {
    create?: XOR<usersCreateWithoutNewsInput, usersUncheckedCreateWithoutNewsInput>
    connectOrCreate?: usersCreateOrConnectWithoutNewsInput
    connect?: usersWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type usersUpdateOneRequiredWithoutNewsNestedInput = {
    create?: XOR<usersCreateWithoutNewsInput, usersUncheckedCreateWithoutNewsInput>
    connectOrCreate?: usersCreateOrConnectWithoutNewsInput
    upsert?: usersUpsertWithoutNewsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutNewsInput, usersUpdateWithoutNewsInput>, usersUncheckedUpdateWithoutNewsInput>
  }

  export type projectsCreateimagesInput = {
    set: string[]
  }

  export type usersCreateNestedOneWithoutProjectsInput = {
    create?: XOR<usersCreateWithoutProjectsInput, usersUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: usersCreateOrConnectWithoutProjectsInput
    connect?: usersWhereUniqueInput
  }

  export type projectsUpdateimagesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type usersUpdateOneRequiredWithoutProjectsNestedInput = {
    create?: XOR<usersCreateWithoutProjectsInput, usersUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: usersCreateOrConnectWithoutProjectsInput
    upsert?: usersUpsertWithoutProjectsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutProjectsInput, usersUpdateWithoutProjectsInput>, usersUncheckedUpdateWithoutProjectsInput>
  }

  export type usersCreateNestedOneWithoutPartnersInput = {
    create?: XOR<usersCreateWithoutPartnersInput, usersUncheckedCreateWithoutPartnersInput>
    connectOrCreate?: usersCreateOrConnectWithoutPartnersInput
    connect?: usersWhereUniqueInput
  }

  export type EnumpartnerTypeEnumFieldUpdateOperationsInput = {
    set?: $Enums.partnerTypeEnum
  }

  export type usersUpdateOneRequiredWithoutPartnersNestedInput = {
    create?: XOR<usersCreateWithoutPartnersInput, usersUncheckedCreateWithoutPartnersInput>
    connectOrCreate?: usersCreateOrConnectWithoutPartnersInput
    upsert?: usersUpsertWithoutPartnersInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutPartnersInput, usersUpdateWithoutPartnersInput>, usersUncheckedUpdateWithoutPartnersInput>
  }

  export type usersCreateNestedOneWithoutGalleryInput = {
    create?: XOR<usersCreateWithoutGalleryInput, usersUncheckedCreateWithoutGalleryInput>
    connectOrCreate?: usersCreateOrConnectWithoutGalleryInput
    connect?: usersWhereUniqueInput
  }

  export type usersUpdateOneRequiredWithoutGalleryNestedInput = {
    create?: XOR<usersCreateWithoutGalleryInput, usersUncheckedCreateWithoutGalleryInput>
    connectOrCreate?: usersCreateOrConnectWithoutGalleryInput
    upsert?: usersUpsertWithoutGalleryInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutGalleryInput, usersUpdateWithoutGalleryInput>, usersUncheckedUpdateWithoutGalleryInput>
  }

  export type usersCreateNestedOneWithoutReadMailsInput = {
    create?: XOR<usersCreateWithoutReadMailsInput, usersUncheckedCreateWithoutReadMailsInput>
    connectOrCreate?: usersCreateOrConnectWithoutReadMailsInput
    connect?: usersWhereUniqueInput
  }

  export type usersUpdateOneWithoutReadMailsNestedInput = {
    create?: XOR<usersCreateWithoutReadMailsInput, usersUncheckedCreateWithoutReadMailsInput>
    connectOrCreate?: usersCreateOrConnectWithoutReadMailsInput
    upsert?: usersUpsertWithoutReadMailsInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutReadMailsInput, usersUpdateWithoutReadMailsInput>, usersUncheckedUpdateWithoutReadMailsInput>
  }

  export type usersCreateNestedOneWithoutAboutInput = {
    create?: XOR<usersCreateWithoutAboutInput, usersUncheckedCreateWithoutAboutInput>
    connectOrCreate?: usersCreateOrConnectWithoutAboutInput
    connect?: usersWhereUniqueInput
  }

  export type usersUpdateOneRequiredWithoutAboutNestedInput = {
    create?: XOR<usersCreateWithoutAboutInput, usersUncheckedCreateWithoutAboutInput>
    connectOrCreate?: usersCreateOrConnectWithoutAboutInput
    upsert?: usersUpsertWithoutAboutInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutAboutInput, usersUpdateWithoutAboutInput>, usersUncheckedUpdateWithoutAboutInput>
  }

  export type ecologyCreateimagesInput = {
    set: string[]
  }

  export type ecologyUpdateimagesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type productServicesCreateimagesInput = {
    set: string[]
  }

  export type productServicesUpdateimagesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EnumproductServicesTypeEnumFieldUpdateOperationsInput = {
    set?: $Enums.productServicesTypeEnum
  }

  export type EnumcatalogTypeEnumFieldUpdateOperationsInput = {
    set?: $Enums.catalogTypeEnum
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumpartnerTypeEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.partnerTypeEnum | EnumpartnerTypeEnumFieldRefInput<$PrismaModel>
    in?: $Enums.partnerTypeEnum[] | ListEnumpartnerTypeEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.partnerTypeEnum[] | ListEnumpartnerTypeEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumpartnerTypeEnumFilter<$PrismaModel> | $Enums.partnerTypeEnum
  }

  export type NestedEnumpartnerTypeEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.partnerTypeEnum | EnumpartnerTypeEnumFieldRefInput<$PrismaModel>
    in?: $Enums.partnerTypeEnum[] | ListEnumpartnerTypeEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.partnerTypeEnum[] | ListEnumpartnerTypeEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumpartnerTypeEnumWithAggregatesFilter<$PrismaModel> | $Enums.partnerTypeEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumpartnerTypeEnumFilter<$PrismaModel>
    _max?: NestedEnumpartnerTypeEnumFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumproductServicesTypeEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.productServicesTypeEnum | EnumproductServicesTypeEnumFieldRefInput<$PrismaModel>
    in?: $Enums.productServicesTypeEnum[] | ListEnumproductServicesTypeEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.productServicesTypeEnum[] | ListEnumproductServicesTypeEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumproductServicesTypeEnumFilter<$PrismaModel> | $Enums.productServicesTypeEnum
  }

  export type NestedEnumproductServicesTypeEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.productServicesTypeEnum | EnumproductServicesTypeEnumFieldRefInput<$PrismaModel>
    in?: $Enums.productServicesTypeEnum[] | ListEnumproductServicesTypeEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.productServicesTypeEnum[] | ListEnumproductServicesTypeEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumproductServicesTypeEnumWithAggregatesFilter<$PrismaModel> | $Enums.productServicesTypeEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumproductServicesTypeEnumFilter<$PrismaModel>
    _max?: NestedEnumproductServicesTypeEnumFilter<$PrismaModel>
  }

  export type NestedEnumcatalogTypeEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.catalogTypeEnum | EnumcatalogTypeEnumFieldRefInput<$PrismaModel>
    in?: $Enums.catalogTypeEnum[] | ListEnumcatalogTypeEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.catalogTypeEnum[] | ListEnumcatalogTypeEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumcatalogTypeEnumFilter<$PrismaModel> | $Enums.catalogTypeEnum
  }

  export type NestedEnumcatalogTypeEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.catalogTypeEnum | EnumcatalogTypeEnumFieldRefInput<$PrismaModel>
    in?: $Enums.catalogTypeEnum[] | ListEnumcatalogTypeEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.catalogTypeEnum[] | ListEnumcatalogTypeEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumcatalogTypeEnumWithAggregatesFilter<$PrismaModel> | $Enums.catalogTypeEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumcatalogTypeEnumFilter<$PrismaModel>
    _max?: NestedEnumcatalogTypeEnumFilter<$PrismaModel>
  }

  export type aboutCreateWithoutAuthorInput = {
    aboutId?: string
    titleTm: string
    contentTm: string
    titleRu: string
    contentRu: string
    titleEn: string
    contentEn: string
    taglineTm: string
    taglineRu: string
    taglineEn: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type aboutUncheckedCreateWithoutAuthorInput = {
    aboutId?: string
    titleTm: string
    contentTm: string
    titleRu: string
    contentRu: string
    titleEn: string
    contentEn: string
    taglineTm: string
    taglineRu: string
    taglineEn: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type aboutCreateOrConnectWithoutAuthorInput = {
    where: aboutWhereUniqueInput
    create: XOR<aboutCreateWithoutAuthorInput, aboutUncheckedCreateWithoutAuthorInput>
  }

  export type aboutCreateManyAuthorInputEnvelope = {
    data: aboutCreateManyAuthorInput | aboutCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type newsCreateWithoutAuthorInput = {
    newsId?: string
    titleTm: string
    contentTm: string
    titleRu: string
    contentRu: string
    titleEn: string
    contentEn: string
    image: string
    video?: string | null
    published: boolean
    isMain?: boolean
    homeActivity?: boolean
    priority?: number | null
    createdAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type newsUncheckedCreateWithoutAuthorInput = {
    newsId?: string
    titleTm: string
    contentTm: string
    titleRu: string
    contentRu: string
    titleEn: string
    contentEn: string
    image: string
    video?: string | null
    published: boolean
    isMain?: boolean
    homeActivity?: boolean
    priority?: number | null
    createdAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type newsCreateOrConnectWithoutAuthorInput = {
    where: newsWhereUniqueInput
    create: XOR<newsCreateWithoutAuthorInput, newsUncheckedCreateWithoutAuthorInput>
  }

  export type newsCreateManyAuthorInputEnvelope = {
    data: newsCreateManyAuthorInput | newsCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type projectsCreateWithoutAuthorInput = {
    projectId?: string
    nameTm: string
    nameRu: string
    nameEn: string
    descriptionTm: string
    descriptionRu: string
    descriptionEn: string
    company: string
    logo: string
    workDate: Date | string
    images?: projectsCreateimagesInput | string[]
    cover: string
    priority?: number | null
    homeActivity?: boolean
    createdAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type projectsUncheckedCreateWithoutAuthorInput = {
    projectId?: string
    nameTm: string
    nameRu: string
    nameEn: string
    descriptionTm: string
    descriptionRu: string
    descriptionEn: string
    company: string
    logo: string
    workDate: Date | string
    images?: projectsCreateimagesInput | string[]
    cover: string
    priority?: number | null
    homeActivity?: boolean
    createdAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type projectsCreateOrConnectWithoutAuthorInput = {
    where: projectsWhereUniqueInput
    create: XOR<projectsCreateWithoutAuthorInput, projectsUncheckedCreateWithoutAuthorInput>
  }

  export type projectsCreateManyAuthorInputEnvelope = {
    data: projectsCreateManyAuthorInput | projectsCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type galleryCreateWithoutAuthorInput = {
    galleryId?: string
    priority?: number | null
    image: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type galleryUncheckedCreateWithoutAuthorInput = {
    galleryId?: string
    priority?: number | null
    image: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type galleryCreateOrConnectWithoutAuthorInput = {
    where: galleryWhereUniqueInput
    create: XOR<galleryCreateWithoutAuthorInput, galleryUncheckedCreateWithoutAuthorInput>
  }

  export type galleryCreateManyAuthorInputEnvelope = {
    data: galleryCreateManyAuthorInput | galleryCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type partnersCreateWithoutAuthorInput = {
    partnerId?: string
    website?: string | null
    fileUrl: string
    priority?: number | null
    type: $Enums.partnerTypeEnum
    createdAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type partnersUncheckedCreateWithoutAuthorInput = {
    partnerId?: string
    website?: string | null
    fileUrl: string
    priority?: number | null
    type: $Enums.partnerTypeEnum
    createdAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type partnersCreateOrConnectWithoutAuthorInput = {
    where: partnersWhereUniqueInput
    create: XOR<partnersCreateWithoutAuthorInput, partnersUncheckedCreateWithoutAuthorInput>
  }

  export type partnersCreateManyAuthorInputEnvelope = {
    data: partnersCreateManyAuthorInput | partnersCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type mailsCreateWithoutReadUserInput = {
    mailId?: string
    name: string
    email: string
    fileUrl?: string | null
    comment: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type mailsUncheckedCreateWithoutReadUserInput = {
    mailId?: string
    name: string
    email: string
    fileUrl?: string | null
    comment: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type mailsCreateOrConnectWithoutReadUserInput = {
    where: mailsWhereUniqueInput
    create: XOR<mailsCreateWithoutReadUserInput, mailsUncheckedCreateWithoutReadUserInput>
  }

  export type mailsCreateManyReadUserInputEnvelope = {
    data: mailsCreateManyReadUserInput | mailsCreateManyReadUserInput[]
    skipDuplicates?: boolean
  }

  export type aboutUpsertWithWhereUniqueWithoutAuthorInput = {
    where: aboutWhereUniqueInput
    update: XOR<aboutUpdateWithoutAuthorInput, aboutUncheckedUpdateWithoutAuthorInput>
    create: XOR<aboutCreateWithoutAuthorInput, aboutUncheckedCreateWithoutAuthorInput>
  }

  export type aboutUpdateWithWhereUniqueWithoutAuthorInput = {
    where: aboutWhereUniqueInput
    data: XOR<aboutUpdateWithoutAuthorInput, aboutUncheckedUpdateWithoutAuthorInput>
  }

  export type aboutUpdateManyWithWhereWithoutAuthorInput = {
    where: aboutScalarWhereInput
    data: XOR<aboutUpdateManyMutationInput, aboutUncheckedUpdateManyWithoutAuthorInput>
  }

  export type aboutScalarWhereInput = {
    AND?: aboutScalarWhereInput | aboutScalarWhereInput[]
    OR?: aboutScalarWhereInput[]
    NOT?: aboutScalarWhereInput | aboutScalarWhereInput[]
    aboutId?: StringFilter<"about"> | string
    titleTm?: StringFilter<"about"> | string
    contentTm?: StringFilter<"about"> | string
    titleRu?: StringFilter<"about"> | string
    contentRu?: StringFilter<"about"> | string
    titleEn?: StringFilter<"about"> | string
    contentEn?: StringFilter<"about"> | string
    taglineTm?: StringFilter<"about"> | string
    taglineRu?: StringFilter<"about"> | string
    taglineEn?: StringFilter<"about"> | string
    authorId?: StringFilter<"about"> | string
    createdAt?: DateTimeFilter<"about"> | Date | string
    deletedAt?: DateTimeNullableFilter<"about"> | Date | string | null
  }

  export type newsUpsertWithWhereUniqueWithoutAuthorInput = {
    where: newsWhereUniqueInput
    update: XOR<newsUpdateWithoutAuthorInput, newsUncheckedUpdateWithoutAuthorInput>
    create: XOR<newsCreateWithoutAuthorInput, newsUncheckedCreateWithoutAuthorInput>
  }

  export type newsUpdateWithWhereUniqueWithoutAuthorInput = {
    where: newsWhereUniqueInput
    data: XOR<newsUpdateWithoutAuthorInput, newsUncheckedUpdateWithoutAuthorInput>
  }

  export type newsUpdateManyWithWhereWithoutAuthorInput = {
    where: newsScalarWhereInput
    data: XOR<newsUpdateManyMutationInput, newsUncheckedUpdateManyWithoutAuthorInput>
  }

  export type newsScalarWhereInput = {
    AND?: newsScalarWhereInput | newsScalarWhereInput[]
    OR?: newsScalarWhereInput[]
    NOT?: newsScalarWhereInput | newsScalarWhereInput[]
    newsId?: StringFilter<"news"> | string
    titleTm?: StringFilter<"news"> | string
    contentTm?: StringFilter<"news"> | string
    titleRu?: StringFilter<"news"> | string
    contentRu?: StringFilter<"news"> | string
    titleEn?: StringFilter<"news"> | string
    contentEn?: StringFilter<"news"> | string
    image?: StringFilter<"news"> | string
    video?: StringNullableFilter<"news"> | string | null
    published?: BoolFilter<"news"> | boolean
    isMain?: BoolFilter<"news"> | boolean
    homeActivity?: BoolFilter<"news"> | boolean
    priority?: IntNullableFilter<"news"> | number | null
    createdAt?: DateTimeFilter<"news"> | Date | string
    deletedAt?: DateTimeNullableFilter<"news"> | Date | string | null
    authorId?: StringFilter<"news"> | string
  }

  export type projectsUpsertWithWhereUniqueWithoutAuthorInput = {
    where: projectsWhereUniqueInput
    update: XOR<projectsUpdateWithoutAuthorInput, projectsUncheckedUpdateWithoutAuthorInput>
    create: XOR<projectsCreateWithoutAuthorInput, projectsUncheckedCreateWithoutAuthorInput>
  }

  export type projectsUpdateWithWhereUniqueWithoutAuthorInput = {
    where: projectsWhereUniqueInput
    data: XOR<projectsUpdateWithoutAuthorInput, projectsUncheckedUpdateWithoutAuthorInput>
  }

  export type projectsUpdateManyWithWhereWithoutAuthorInput = {
    where: projectsScalarWhereInput
    data: XOR<projectsUpdateManyMutationInput, projectsUncheckedUpdateManyWithoutAuthorInput>
  }

  export type projectsScalarWhereInput = {
    AND?: projectsScalarWhereInput | projectsScalarWhereInput[]
    OR?: projectsScalarWhereInput[]
    NOT?: projectsScalarWhereInput | projectsScalarWhereInput[]
    projectId?: StringFilter<"projects"> | string
    nameTm?: StringFilter<"projects"> | string
    nameRu?: StringFilter<"projects"> | string
    nameEn?: StringFilter<"projects"> | string
    descriptionTm?: StringFilter<"projects"> | string
    descriptionRu?: StringFilter<"projects"> | string
    descriptionEn?: StringFilter<"projects"> | string
    company?: StringFilter<"projects"> | string
    logo?: StringFilter<"projects"> | string
    workDate?: DateTimeFilter<"projects"> | Date | string
    images?: StringNullableListFilter<"projects">
    cover?: StringFilter<"projects"> | string
    priority?: IntNullableFilter<"projects"> | number | null
    homeActivity?: BoolFilter<"projects"> | boolean
    createdAt?: DateTimeFilter<"projects"> | Date | string
    deletedAt?: DateTimeNullableFilter<"projects"> | Date | string | null
    authorId?: StringFilter<"projects"> | string
  }

  export type galleryUpsertWithWhereUniqueWithoutAuthorInput = {
    where: galleryWhereUniqueInput
    update: XOR<galleryUpdateWithoutAuthorInput, galleryUncheckedUpdateWithoutAuthorInput>
    create: XOR<galleryCreateWithoutAuthorInput, galleryUncheckedCreateWithoutAuthorInput>
  }

  export type galleryUpdateWithWhereUniqueWithoutAuthorInput = {
    where: galleryWhereUniqueInput
    data: XOR<galleryUpdateWithoutAuthorInput, galleryUncheckedUpdateWithoutAuthorInput>
  }

  export type galleryUpdateManyWithWhereWithoutAuthorInput = {
    where: galleryScalarWhereInput
    data: XOR<galleryUpdateManyMutationInput, galleryUncheckedUpdateManyWithoutAuthorInput>
  }

  export type galleryScalarWhereInput = {
    AND?: galleryScalarWhereInput | galleryScalarWhereInput[]
    OR?: galleryScalarWhereInput[]
    NOT?: galleryScalarWhereInput | galleryScalarWhereInput[]
    galleryId?: StringFilter<"gallery"> | string
    priority?: IntNullableFilter<"gallery"> | number | null
    image?: StringFilter<"gallery"> | string
    authorId?: StringFilter<"gallery"> | string
    createdAt?: DateTimeFilter<"gallery"> | Date | string
    deletedAt?: DateTimeNullableFilter<"gallery"> | Date | string | null
  }

  export type partnersUpsertWithWhereUniqueWithoutAuthorInput = {
    where: partnersWhereUniqueInput
    update: XOR<partnersUpdateWithoutAuthorInput, partnersUncheckedUpdateWithoutAuthorInput>
    create: XOR<partnersCreateWithoutAuthorInput, partnersUncheckedCreateWithoutAuthorInput>
  }

  export type partnersUpdateWithWhereUniqueWithoutAuthorInput = {
    where: partnersWhereUniqueInput
    data: XOR<partnersUpdateWithoutAuthorInput, partnersUncheckedUpdateWithoutAuthorInput>
  }

  export type partnersUpdateManyWithWhereWithoutAuthorInput = {
    where: partnersScalarWhereInput
    data: XOR<partnersUpdateManyMutationInput, partnersUncheckedUpdateManyWithoutAuthorInput>
  }

  export type partnersScalarWhereInput = {
    AND?: partnersScalarWhereInput | partnersScalarWhereInput[]
    OR?: partnersScalarWhereInput[]
    NOT?: partnersScalarWhereInput | partnersScalarWhereInput[]
    partnerId?: StringFilter<"partners"> | string
    website?: StringNullableFilter<"partners"> | string | null
    fileUrl?: StringFilter<"partners"> | string
    priority?: IntNullableFilter<"partners"> | number | null
    type?: EnumpartnerTypeEnumFilter<"partners"> | $Enums.partnerTypeEnum
    authorId?: StringFilter<"partners"> | string
    createdAt?: DateTimeFilter<"partners"> | Date | string
    deletedAt?: DateTimeNullableFilter<"partners"> | Date | string | null
  }

  export type mailsUpsertWithWhereUniqueWithoutReadUserInput = {
    where: mailsWhereUniqueInput
    update: XOR<mailsUpdateWithoutReadUserInput, mailsUncheckedUpdateWithoutReadUserInput>
    create: XOR<mailsCreateWithoutReadUserInput, mailsUncheckedCreateWithoutReadUserInput>
  }

  export type mailsUpdateWithWhereUniqueWithoutReadUserInput = {
    where: mailsWhereUniqueInput
    data: XOR<mailsUpdateWithoutReadUserInput, mailsUncheckedUpdateWithoutReadUserInput>
  }

  export type mailsUpdateManyWithWhereWithoutReadUserInput = {
    where: mailsScalarWhereInput
    data: XOR<mailsUpdateManyMutationInput, mailsUncheckedUpdateManyWithoutReadUserInput>
  }

  export type mailsScalarWhereInput = {
    AND?: mailsScalarWhereInput | mailsScalarWhereInput[]
    OR?: mailsScalarWhereInput[]
    NOT?: mailsScalarWhereInput | mailsScalarWhereInput[]
    mailId?: StringFilter<"mails"> | string
    name?: StringFilter<"mails"> | string
    email?: StringFilter<"mails"> | string
    fileUrl?: StringNullableFilter<"mails"> | string | null
    comment?: StringFilter<"mails"> | string
    readBy?: StringNullableFilter<"mails"> | string | null
    createdAt?: DateTimeFilter<"mails"> | Date | string
    deletedAt?: DateTimeNullableFilter<"mails"> | Date | string | null
  }

  export type usersCreateWithoutNewsInput = {
    userId?: string
    username: string
    password: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    about?: aboutCreateNestedManyWithoutAuthorInput
    projects?: projectsCreateNestedManyWithoutAuthorInput
    gallery?: galleryCreateNestedManyWithoutAuthorInput
    partners?: partnersCreateNestedManyWithoutAuthorInput
    readMails?: mailsCreateNestedManyWithoutReadUserInput
  }

  export type usersUncheckedCreateWithoutNewsInput = {
    userId?: string
    username: string
    password: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    about?: aboutUncheckedCreateNestedManyWithoutAuthorInput
    projects?: projectsUncheckedCreateNestedManyWithoutAuthorInput
    gallery?: galleryUncheckedCreateNestedManyWithoutAuthorInput
    partners?: partnersUncheckedCreateNestedManyWithoutAuthorInput
    readMails?: mailsUncheckedCreateNestedManyWithoutReadUserInput
  }

  export type usersCreateOrConnectWithoutNewsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutNewsInput, usersUncheckedCreateWithoutNewsInput>
  }

  export type usersUpsertWithoutNewsInput = {
    update: XOR<usersUpdateWithoutNewsInput, usersUncheckedUpdateWithoutNewsInput>
    create: XOR<usersCreateWithoutNewsInput, usersUncheckedCreateWithoutNewsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutNewsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutNewsInput, usersUncheckedUpdateWithoutNewsInput>
  }

  export type usersUpdateWithoutNewsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    about?: aboutUpdateManyWithoutAuthorNestedInput
    projects?: projectsUpdateManyWithoutAuthorNestedInput
    gallery?: galleryUpdateManyWithoutAuthorNestedInput
    partners?: partnersUpdateManyWithoutAuthorNestedInput
    readMails?: mailsUpdateManyWithoutReadUserNestedInput
  }

  export type usersUncheckedUpdateWithoutNewsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    about?: aboutUncheckedUpdateManyWithoutAuthorNestedInput
    projects?: projectsUncheckedUpdateManyWithoutAuthorNestedInput
    gallery?: galleryUncheckedUpdateManyWithoutAuthorNestedInput
    partners?: partnersUncheckedUpdateManyWithoutAuthorNestedInput
    readMails?: mailsUncheckedUpdateManyWithoutReadUserNestedInput
  }

  export type usersCreateWithoutProjectsInput = {
    userId?: string
    username: string
    password: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    about?: aboutCreateNestedManyWithoutAuthorInput
    news?: newsCreateNestedManyWithoutAuthorInput
    gallery?: galleryCreateNestedManyWithoutAuthorInput
    partners?: partnersCreateNestedManyWithoutAuthorInput
    readMails?: mailsCreateNestedManyWithoutReadUserInput
  }

  export type usersUncheckedCreateWithoutProjectsInput = {
    userId?: string
    username: string
    password: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    about?: aboutUncheckedCreateNestedManyWithoutAuthorInput
    news?: newsUncheckedCreateNestedManyWithoutAuthorInput
    gallery?: galleryUncheckedCreateNestedManyWithoutAuthorInput
    partners?: partnersUncheckedCreateNestedManyWithoutAuthorInput
    readMails?: mailsUncheckedCreateNestedManyWithoutReadUserInput
  }

  export type usersCreateOrConnectWithoutProjectsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutProjectsInput, usersUncheckedCreateWithoutProjectsInput>
  }

  export type usersUpsertWithoutProjectsInput = {
    update: XOR<usersUpdateWithoutProjectsInput, usersUncheckedUpdateWithoutProjectsInput>
    create: XOR<usersCreateWithoutProjectsInput, usersUncheckedCreateWithoutProjectsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutProjectsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutProjectsInput, usersUncheckedUpdateWithoutProjectsInput>
  }

  export type usersUpdateWithoutProjectsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    about?: aboutUpdateManyWithoutAuthorNestedInput
    news?: newsUpdateManyWithoutAuthorNestedInput
    gallery?: galleryUpdateManyWithoutAuthorNestedInput
    partners?: partnersUpdateManyWithoutAuthorNestedInput
    readMails?: mailsUpdateManyWithoutReadUserNestedInput
  }

  export type usersUncheckedUpdateWithoutProjectsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    about?: aboutUncheckedUpdateManyWithoutAuthorNestedInput
    news?: newsUncheckedUpdateManyWithoutAuthorNestedInput
    gallery?: galleryUncheckedUpdateManyWithoutAuthorNestedInput
    partners?: partnersUncheckedUpdateManyWithoutAuthorNestedInput
    readMails?: mailsUncheckedUpdateManyWithoutReadUserNestedInput
  }

  export type usersCreateWithoutPartnersInput = {
    userId?: string
    username: string
    password: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    about?: aboutCreateNestedManyWithoutAuthorInput
    news?: newsCreateNestedManyWithoutAuthorInput
    projects?: projectsCreateNestedManyWithoutAuthorInput
    gallery?: galleryCreateNestedManyWithoutAuthorInput
    readMails?: mailsCreateNestedManyWithoutReadUserInput
  }

  export type usersUncheckedCreateWithoutPartnersInput = {
    userId?: string
    username: string
    password: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    about?: aboutUncheckedCreateNestedManyWithoutAuthorInput
    news?: newsUncheckedCreateNestedManyWithoutAuthorInput
    projects?: projectsUncheckedCreateNestedManyWithoutAuthorInput
    gallery?: galleryUncheckedCreateNestedManyWithoutAuthorInput
    readMails?: mailsUncheckedCreateNestedManyWithoutReadUserInput
  }

  export type usersCreateOrConnectWithoutPartnersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutPartnersInput, usersUncheckedCreateWithoutPartnersInput>
  }

  export type usersUpsertWithoutPartnersInput = {
    update: XOR<usersUpdateWithoutPartnersInput, usersUncheckedUpdateWithoutPartnersInput>
    create: XOR<usersCreateWithoutPartnersInput, usersUncheckedCreateWithoutPartnersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutPartnersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutPartnersInput, usersUncheckedUpdateWithoutPartnersInput>
  }

  export type usersUpdateWithoutPartnersInput = {
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    about?: aboutUpdateManyWithoutAuthorNestedInput
    news?: newsUpdateManyWithoutAuthorNestedInput
    projects?: projectsUpdateManyWithoutAuthorNestedInput
    gallery?: galleryUpdateManyWithoutAuthorNestedInput
    readMails?: mailsUpdateManyWithoutReadUserNestedInput
  }

  export type usersUncheckedUpdateWithoutPartnersInput = {
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    about?: aboutUncheckedUpdateManyWithoutAuthorNestedInput
    news?: newsUncheckedUpdateManyWithoutAuthorNestedInput
    projects?: projectsUncheckedUpdateManyWithoutAuthorNestedInput
    gallery?: galleryUncheckedUpdateManyWithoutAuthorNestedInput
    readMails?: mailsUncheckedUpdateManyWithoutReadUserNestedInput
  }

  export type usersCreateWithoutGalleryInput = {
    userId?: string
    username: string
    password: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    about?: aboutCreateNestedManyWithoutAuthorInput
    news?: newsCreateNestedManyWithoutAuthorInput
    projects?: projectsCreateNestedManyWithoutAuthorInput
    partners?: partnersCreateNestedManyWithoutAuthorInput
    readMails?: mailsCreateNestedManyWithoutReadUserInput
  }

  export type usersUncheckedCreateWithoutGalleryInput = {
    userId?: string
    username: string
    password: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    about?: aboutUncheckedCreateNestedManyWithoutAuthorInput
    news?: newsUncheckedCreateNestedManyWithoutAuthorInput
    projects?: projectsUncheckedCreateNestedManyWithoutAuthorInput
    partners?: partnersUncheckedCreateNestedManyWithoutAuthorInput
    readMails?: mailsUncheckedCreateNestedManyWithoutReadUserInput
  }

  export type usersCreateOrConnectWithoutGalleryInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutGalleryInput, usersUncheckedCreateWithoutGalleryInput>
  }

  export type usersUpsertWithoutGalleryInput = {
    update: XOR<usersUpdateWithoutGalleryInput, usersUncheckedUpdateWithoutGalleryInput>
    create: XOR<usersCreateWithoutGalleryInput, usersUncheckedCreateWithoutGalleryInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutGalleryInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutGalleryInput, usersUncheckedUpdateWithoutGalleryInput>
  }

  export type usersUpdateWithoutGalleryInput = {
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    about?: aboutUpdateManyWithoutAuthorNestedInput
    news?: newsUpdateManyWithoutAuthorNestedInput
    projects?: projectsUpdateManyWithoutAuthorNestedInput
    partners?: partnersUpdateManyWithoutAuthorNestedInput
    readMails?: mailsUpdateManyWithoutReadUserNestedInput
  }

  export type usersUncheckedUpdateWithoutGalleryInput = {
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    about?: aboutUncheckedUpdateManyWithoutAuthorNestedInput
    news?: newsUncheckedUpdateManyWithoutAuthorNestedInput
    projects?: projectsUncheckedUpdateManyWithoutAuthorNestedInput
    partners?: partnersUncheckedUpdateManyWithoutAuthorNestedInput
    readMails?: mailsUncheckedUpdateManyWithoutReadUserNestedInput
  }

  export type usersCreateWithoutReadMailsInput = {
    userId?: string
    username: string
    password: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    about?: aboutCreateNestedManyWithoutAuthorInput
    news?: newsCreateNestedManyWithoutAuthorInput
    projects?: projectsCreateNestedManyWithoutAuthorInput
    gallery?: galleryCreateNestedManyWithoutAuthorInput
    partners?: partnersCreateNestedManyWithoutAuthorInput
  }

  export type usersUncheckedCreateWithoutReadMailsInput = {
    userId?: string
    username: string
    password: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    about?: aboutUncheckedCreateNestedManyWithoutAuthorInput
    news?: newsUncheckedCreateNestedManyWithoutAuthorInput
    projects?: projectsUncheckedCreateNestedManyWithoutAuthorInput
    gallery?: galleryUncheckedCreateNestedManyWithoutAuthorInput
    partners?: partnersUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type usersCreateOrConnectWithoutReadMailsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutReadMailsInput, usersUncheckedCreateWithoutReadMailsInput>
  }

  export type usersUpsertWithoutReadMailsInput = {
    update: XOR<usersUpdateWithoutReadMailsInput, usersUncheckedUpdateWithoutReadMailsInput>
    create: XOR<usersCreateWithoutReadMailsInput, usersUncheckedCreateWithoutReadMailsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutReadMailsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutReadMailsInput, usersUncheckedUpdateWithoutReadMailsInput>
  }

  export type usersUpdateWithoutReadMailsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    about?: aboutUpdateManyWithoutAuthorNestedInput
    news?: newsUpdateManyWithoutAuthorNestedInput
    projects?: projectsUpdateManyWithoutAuthorNestedInput
    gallery?: galleryUpdateManyWithoutAuthorNestedInput
    partners?: partnersUpdateManyWithoutAuthorNestedInput
  }

  export type usersUncheckedUpdateWithoutReadMailsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    about?: aboutUncheckedUpdateManyWithoutAuthorNestedInput
    news?: newsUncheckedUpdateManyWithoutAuthorNestedInput
    projects?: projectsUncheckedUpdateManyWithoutAuthorNestedInput
    gallery?: galleryUncheckedUpdateManyWithoutAuthorNestedInput
    partners?: partnersUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type usersCreateWithoutAboutInput = {
    userId?: string
    username: string
    password: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    news?: newsCreateNestedManyWithoutAuthorInput
    projects?: projectsCreateNestedManyWithoutAuthorInput
    gallery?: galleryCreateNestedManyWithoutAuthorInput
    partners?: partnersCreateNestedManyWithoutAuthorInput
    readMails?: mailsCreateNestedManyWithoutReadUserInput
  }

  export type usersUncheckedCreateWithoutAboutInput = {
    userId?: string
    username: string
    password: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    news?: newsUncheckedCreateNestedManyWithoutAuthorInput
    projects?: projectsUncheckedCreateNestedManyWithoutAuthorInput
    gallery?: galleryUncheckedCreateNestedManyWithoutAuthorInput
    partners?: partnersUncheckedCreateNestedManyWithoutAuthorInput
    readMails?: mailsUncheckedCreateNestedManyWithoutReadUserInput
  }

  export type usersCreateOrConnectWithoutAboutInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutAboutInput, usersUncheckedCreateWithoutAboutInput>
  }

  export type usersUpsertWithoutAboutInput = {
    update: XOR<usersUpdateWithoutAboutInput, usersUncheckedUpdateWithoutAboutInput>
    create: XOR<usersCreateWithoutAboutInput, usersUncheckedCreateWithoutAboutInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutAboutInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutAboutInput, usersUncheckedUpdateWithoutAboutInput>
  }

  export type usersUpdateWithoutAboutInput = {
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    news?: newsUpdateManyWithoutAuthorNestedInput
    projects?: projectsUpdateManyWithoutAuthorNestedInput
    gallery?: galleryUpdateManyWithoutAuthorNestedInput
    partners?: partnersUpdateManyWithoutAuthorNestedInput
    readMails?: mailsUpdateManyWithoutReadUserNestedInput
  }

  export type usersUncheckedUpdateWithoutAboutInput = {
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    news?: newsUncheckedUpdateManyWithoutAuthorNestedInput
    projects?: projectsUncheckedUpdateManyWithoutAuthorNestedInput
    gallery?: galleryUncheckedUpdateManyWithoutAuthorNestedInput
    partners?: partnersUncheckedUpdateManyWithoutAuthorNestedInput
    readMails?: mailsUncheckedUpdateManyWithoutReadUserNestedInput
  }

  export type aboutCreateManyAuthorInput = {
    aboutId?: string
    titleTm: string
    contentTm: string
    titleRu: string
    contentRu: string
    titleEn: string
    contentEn: string
    taglineTm: string
    taglineRu: string
    taglineEn: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type newsCreateManyAuthorInput = {
    newsId?: string
    titleTm: string
    contentTm: string
    titleRu: string
    contentRu: string
    titleEn: string
    contentEn: string
    image: string
    video?: string | null
    published: boolean
    isMain?: boolean
    homeActivity?: boolean
    priority?: number | null
    createdAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type projectsCreateManyAuthorInput = {
    projectId?: string
    nameTm: string
    nameRu: string
    nameEn: string
    descriptionTm: string
    descriptionRu: string
    descriptionEn: string
    company: string
    logo: string
    workDate: Date | string
    images?: projectsCreateimagesInput | string[]
    cover: string
    priority?: number | null
    homeActivity?: boolean
    createdAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type galleryCreateManyAuthorInput = {
    galleryId?: string
    priority?: number | null
    image: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type partnersCreateManyAuthorInput = {
    partnerId?: string
    website?: string | null
    fileUrl: string
    priority?: number | null
    type: $Enums.partnerTypeEnum
    createdAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type mailsCreateManyReadUserInput = {
    mailId?: string
    name: string
    email: string
    fileUrl?: string | null
    comment: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type aboutUpdateWithoutAuthorInput = {
    aboutId?: StringFieldUpdateOperationsInput | string
    titleTm?: StringFieldUpdateOperationsInput | string
    contentTm?: StringFieldUpdateOperationsInput | string
    titleRu?: StringFieldUpdateOperationsInput | string
    contentRu?: StringFieldUpdateOperationsInput | string
    titleEn?: StringFieldUpdateOperationsInput | string
    contentEn?: StringFieldUpdateOperationsInput | string
    taglineTm?: StringFieldUpdateOperationsInput | string
    taglineRu?: StringFieldUpdateOperationsInput | string
    taglineEn?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type aboutUncheckedUpdateWithoutAuthorInput = {
    aboutId?: StringFieldUpdateOperationsInput | string
    titleTm?: StringFieldUpdateOperationsInput | string
    contentTm?: StringFieldUpdateOperationsInput | string
    titleRu?: StringFieldUpdateOperationsInput | string
    contentRu?: StringFieldUpdateOperationsInput | string
    titleEn?: StringFieldUpdateOperationsInput | string
    contentEn?: StringFieldUpdateOperationsInput | string
    taglineTm?: StringFieldUpdateOperationsInput | string
    taglineRu?: StringFieldUpdateOperationsInput | string
    taglineEn?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type aboutUncheckedUpdateManyWithoutAuthorInput = {
    aboutId?: StringFieldUpdateOperationsInput | string
    titleTm?: StringFieldUpdateOperationsInput | string
    contentTm?: StringFieldUpdateOperationsInput | string
    titleRu?: StringFieldUpdateOperationsInput | string
    contentRu?: StringFieldUpdateOperationsInput | string
    titleEn?: StringFieldUpdateOperationsInput | string
    contentEn?: StringFieldUpdateOperationsInput | string
    taglineTm?: StringFieldUpdateOperationsInput | string
    taglineRu?: StringFieldUpdateOperationsInput | string
    taglineEn?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type newsUpdateWithoutAuthorInput = {
    newsId?: StringFieldUpdateOperationsInput | string
    titleTm?: StringFieldUpdateOperationsInput | string
    contentTm?: StringFieldUpdateOperationsInput | string
    titleRu?: StringFieldUpdateOperationsInput | string
    contentRu?: StringFieldUpdateOperationsInput | string
    titleEn?: StringFieldUpdateOperationsInput | string
    contentEn?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    video?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    isMain?: BoolFieldUpdateOperationsInput | boolean
    homeActivity?: BoolFieldUpdateOperationsInput | boolean
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type newsUncheckedUpdateWithoutAuthorInput = {
    newsId?: StringFieldUpdateOperationsInput | string
    titleTm?: StringFieldUpdateOperationsInput | string
    contentTm?: StringFieldUpdateOperationsInput | string
    titleRu?: StringFieldUpdateOperationsInput | string
    contentRu?: StringFieldUpdateOperationsInput | string
    titleEn?: StringFieldUpdateOperationsInput | string
    contentEn?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    video?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    isMain?: BoolFieldUpdateOperationsInput | boolean
    homeActivity?: BoolFieldUpdateOperationsInput | boolean
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type newsUncheckedUpdateManyWithoutAuthorInput = {
    newsId?: StringFieldUpdateOperationsInput | string
    titleTm?: StringFieldUpdateOperationsInput | string
    contentTm?: StringFieldUpdateOperationsInput | string
    titleRu?: StringFieldUpdateOperationsInput | string
    contentRu?: StringFieldUpdateOperationsInput | string
    titleEn?: StringFieldUpdateOperationsInput | string
    contentEn?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    video?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    isMain?: BoolFieldUpdateOperationsInput | boolean
    homeActivity?: BoolFieldUpdateOperationsInput | boolean
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type projectsUpdateWithoutAuthorInput = {
    projectId?: StringFieldUpdateOperationsInput | string
    nameTm?: StringFieldUpdateOperationsInput | string
    nameRu?: StringFieldUpdateOperationsInput | string
    nameEn?: StringFieldUpdateOperationsInput | string
    descriptionTm?: StringFieldUpdateOperationsInput | string
    descriptionRu?: StringFieldUpdateOperationsInput | string
    descriptionEn?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    workDate?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: projectsUpdateimagesInput | string[]
    cover?: StringFieldUpdateOperationsInput | string
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    homeActivity?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type projectsUncheckedUpdateWithoutAuthorInput = {
    projectId?: StringFieldUpdateOperationsInput | string
    nameTm?: StringFieldUpdateOperationsInput | string
    nameRu?: StringFieldUpdateOperationsInput | string
    nameEn?: StringFieldUpdateOperationsInput | string
    descriptionTm?: StringFieldUpdateOperationsInput | string
    descriptionRu?: StringFieldUpdateOperationsInput | string
    descriptionEn?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    workDate?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: projectsUpdateimagesInput | string[]
    cover?: StringFieldUpdateOperationsInput | string
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    homeActivity?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type projectsUncheckedUpdateManyWithoutAuthorInput = {
    projectId?: StringFieldUpdateOperationsInput | string
    nameTm?: StringFieldUpdateOperationsInput | string
    nameRu?: StringFieldUpdateOperationsInput | string
    nameEn?: StringFieldUpdateOperationsInput | string
    descriptionTm?: StringFieldUpdateOperationsInput | string
    descriptionRu?: StringFieldUpdateOperationsInput | string
    descriptionEn?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    workDate?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: projectsUpdateimagesInput | string[]
    cover?: StringFieldUpdateOperationsInput | string
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    homeActivity?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type galleryUpdateWithoutAuthorInput = {
    galleryId?: StringFieldUpdateOperationsInput | string
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type galleryUncheckedUpdateWithoutAuthorInput = {
    galleryId?: StringFieldUpdateOperationsInput | string
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type galleryUncheckedUpdateManyWithoutAuthorInput = {
    galleryId?: StringFieldUpdateOperationsInput | string
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type partnersUpdateWithoutAuthorInput = {
    partnerId?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: StringFieldUpdateOperationsInput | string
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    type?: EnumpartnerTypeEnumFieldUpdateOperationsInput | $Enums.partnerTypeEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type partnersUncheckedUpdateWithoutAuthorInput = {
    partnerId?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: StringFieldUpdateOperationsInput | string
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    type?: EnumpartnerTypeEnumFieldUpdateOperationsInput | $Enums.partnerTypeEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type partnersUncheckedUpdateManyWithoutAuthorInput = {
    partnerId?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: StringFieldUpdateOperationsInput | string
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    type?: EnumpartnerTypeEnumFieldUpdateOperationsInput | $Enums.partnerTypeEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type mailsUpdateWithoutReadUserInput = {
    mailId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type mailsUncheckedUpdateWithoutReadUserInput = {
    mailId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type mailsUncheckedUpdateManyWithoutReadUserInput = {
    mailId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UsersCountOutputTypeDefaultArgs instead
     */
    export type UsersCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsersCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use usersDefaultArgs instead
     */
    export type usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = usersDefaultArgs<ExtArgs>
    /**
     * @deprecated Use newsDefaultArgs instead
     */
    export type newsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = newsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use projectsDefaultArgs instead
     */
    export type projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = projectsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use partnersDefaultArgs instead
     */
    export type partnersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = partnersDefaultArgs<ExtArgs>
    /**
     * @deprecated Use galleryDefaultArgs instead
     */
    export type galleryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = galleryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use mailsDefaultArgs instead
     */
    export type mailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = mailsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use aboutDefaultArgs instead
     */
    export type aboutArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = aboutDefaultArgs<ExtArgs>
    /**
     * @deprecated Use contactDefaultArgs instead
     */
    export type contactArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = contactDefaultArgs<ExtArgs>
    /**
     * @deprecated Use informationDefaultArgs instead
     */
    export type informationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = informationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ecologyDefaultArgs instead
     */
    export type ecologyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ecologyDefaultArgs<ExtArgs>
    /**
     * @deprecated Use productServicesDefaultArgs instead
     */
    export type productServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = productServicesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use catalogsDefaultArgs instead
     */
    export type catalogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = catalogsDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}