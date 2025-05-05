
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  detectRuntime,
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.6.0
 * Query Engine version: e95e739751f42d8ca026f6b910f5a2dc5adeaeee
 */
Prisma.prismaVersion = {
  client: "5.6.0",
  engine: "e95e739751f42d8ca026f6b910f5a2dc5adeaeee"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  throw new Error(`Extensions.getExtensionContext is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.defineExtension = () => {
  throw new Error(`Extensions.defineExtension is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UsersScalarFieldEnum = {
  userId: 'userId',
  username: 'username',
  password: 'password',
  createdAt: 'createdAt',
  deletedAt: 'deletedAt'
};

exports.Prisma.NewsScalarFieldEnum = {
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

exports.Prisma.ProjectsScalarFieldEnum = {
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

exports.Prisma.PartnersScalarFieldEnum = {
  partnerId: 'partnerId',
  website: 'website',
  fileUrl: 'fileUrl',
  priority: 'priority',
  type: 'type',
  authorId: 'authorId',
  createdAt: 'createdAt',
  deletedAt: 'deletedAt'
};

exports.Prisma.GalleryScalarFieldEnum = {
  galleryId: 'galleryId',
  priority: 'priority',
  image: 'image',
  authorId: 'authorId',
  createdAt: 'createdAt',
  deletedAt: 'deletedAt'
};

exports.Prisma.MailsScalarFieldEnum = {
  mailId: 'mailId',
  name: 'name',
  email: 'email',
  fileUrl: 'fileUrl',
  comment: 'comment',
  readBy: 'readBy',
  createdAt: 'createdAt',
  deletedAt: 'deletedAt'
};

exports.Prisma.AboutScalarFieldEnum = {
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

exports.Prisma.ContactScalarFieldEnum = {
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

exports.Prisma.InformationScalarFieldEnum = {
  infoId: 'infoId',
  info1: 'info1',
  info2: 'info2',
  info3: 'info3',
  info4: 'info4',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.EcologyScalarFieldEnum = {
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

exports.Prisma.ProductServicesScalarFieldEnum = {
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

exports.Prisma.CatalogsScalarFieldEnum = {
  catalogId: 'catalogId',
  catalogType: 'catalogType',
  fileUrl: 'fileUrl',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};
exports.partnerTypeEnum = exports.$Enums.partnerTypeEnum = {
  dealership: 'dealership',
  clients: 'clients',
  projects: 'projects'
};

exports.productServicesTypeEnum = exports.$Enums.productServicesTypeEnum = {
  service: 'service',
  product: 'product'
};

exports.catalogTypeEnum = exports.$Enums.catalogTypeEnum = {
  home: 'home',
  productservices: 'productservices'
};

exports.Prisma.ModelName = {
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

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        const runtime = detectRuntime()
        const edgeRuntimeName = {
          'workerd': 'Cloudflare Workers',
          'deno': 'Deno and Deno Deploy',
          'netlify': 'Netlify Edge Functions',
          'edge-light': 'Vercel Edge Functions',
        }[runtime]

        let message = 'PrismaClient is unable to run in '
        if (edgeRuntimeName !== undefined) {
          message += edgeRuntimeName + '. As an alternative, try Accelerate: https://pris.ly/d/accelerate.'
        } else {
          message += 'this browser environment, or has been bundled for the browser (running in `' + runtime + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://github.com/prisma/prisma/issues`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
