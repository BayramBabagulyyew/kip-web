
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
} = require('./runtime/edge')


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

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

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
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/home/b/Desktop/Projects/kip/kip-website/server/generated/client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "debian-openssl-3.0.x",
        "native": true
      },
      {
        "fromEnvVar": null,
        "value": "debian-openssl-3.0.x"
      },
      {
        "fromEnvVar": null,
        "value": "debian-openssl-1.1.x"
      }
    ],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../.env",
    "schemaEnvPath": "../../.env"
  },
  "relativePath": "../../prisma",
  "clientVersion": "5.6.0",
  "engineVersion": "e95e739751f42d8ca026f6b910f5a2dc5adeaeee",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "Z2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgPSAicHJpc21hLWNsaWVudC1qcyIKICBvdXRwdXQgICA9ICIuLi9nZW5lcmF0ZWQvY2xpZW50IgogIGJpbmFyeVRhcmdldHMgICA9IFsibmF0aXZlIiwgImRlYmlhbi1vcGVuc3NsLTMuMC54IiwgImRlYmlhbi1vcGVuc3NsLTEuMS54Il0KfQoKZGF0YXNvdXJjZSBkYiB7CiAgcHJvdmlkZXIgPSAicG9zdGdyZXNxbCIKICB1cmwgICAgICA9IGVudigiREFUQUJBU0VfVVJMIikKfQoKZW51bSBwYXJ0bmVyVHlwZUVudW0gewogIGRlYWxlcnNoaXAKICBjbGllbnRzCiAgcHJvamVjdHMKfQoKbW9kZWwgdXNlcnMgewogIHVzZXJJZCAgICBTdHJpbmcgICAgIEBpZCBAdW5pcXVlIEBkZWZhdWx0KGN1aWQoKSkKICB1c2VybmFtZSAgU3RyaW5nICAgICBAdW5pcXVlCiAgcGFzc3dvcmQgIFN0cmluZwogIGFib3V0ICAgICBhYm91dFtdCiAgbmV3cyAgICAgIG5ld3NbXQogIHByb2plY3RzICBwcm9qZWN0c1tdCiAgZ2FsbGVyeSAgIGdhbGxlcnlbXQogIHBhcnRuZXJzICBwYXJ0bmVyc1tdCiAgcmVhZE1haWxzIG1haWxzW10KICBjcmVhdGVkQXQgRGF0ZVRpbWUgICBAZGVmYXVsdChkYmdlbmVyYXRlZCgiTk9XKCkiKSkKICBkZWxldGVkQXQgRGF0ZVRpbWU/Cn0KCm1vZGVsIG5ld3MgewogIG5ld3NJZCAgICAgICBTdHJpbmcgICAgQGlkIEB1bmlxdWUgQGRlZmF1bHQoY3VpZCgpKQogIHRpdGxlVG0gICAgICBTdHJpbmcKICBjb250ZW50VG0gICAgU3RyaW5nICAgIEBkYi5UZXh0CiAgdGl0bGVSdSAgICAgIFN0cmluZwogIGNvbnRlbnRSdSAgICBTdHJpbmcgICAgQGRiLlRleHQKICB0aXRsZUVuICAgICAgU3RyaW5nCiAgY29udGVudEVuICAgIFN0cmluZyAgICBAZGIuVGV4dAogIGltYWdlICAgICAgICBTdHJpbmcKICB2aWRlbyAgICAgICAgU3RyaW5nPwogIHB1Ymxpc2hlZCAgICBCb29sZWFuCiAgaXNNYWluICAgICAgIEJvb2xlYW4gICBAZGVmYXVsdChmYWxzZSkKICBob21lQWN0aXZpdHkgQm9vbGVhbiAgIEBkZWZhdWx0KGZhbHNlKQogIHByaW9yaXR5ICAgICBJbnQ/ICAgICAgQHVuaXF1ZQogIGNyZWF0ZWRBdCAgICBEYXRlVGltZSAgQGRlZmF1bHQoZGJnZW5lcmF0ZWQoIk5PVygpIikpCiAgZGVsZXRlZEF0ICAgIERhdGVUaW1lPwogIGF1dGhvcklkICAgICBTdHJpbmcKICBhdXRob3IgICAgICAgdXNlcnMgICAgIEByZWxhdGlvbihmaWVsZHM6IFthdXRob3JJZF0sIHJlZmVyZW5jZXM6IFt1c2VySWRdKQp9Cgptb2RlbCBwcm9qZWN0cyB7CiAgcHJvamVjdElkICAgICBTdHJpbmcgICAgQGlkIEB1bmlxdWUgQGRlZmF1bHQoY3VpZCgpKQogIG5hbWVUbSAgICAgICAgU3RyaW5nCiAgbmFtZVJ1ICAgICAgICBTdHJpbmcKICBuYW1lRW4gICAgICAgIFN0cmluZwogIGRlc2NyaXB0aW9uVG0gU3RyaW5nICAgIEBkYi5UZXh0CiAgZGVzY3JpcHRpb25SdSBTdHJpbmcgICAgQGRiLlRleHQKICBkZXNjcmlwdGlvbkVuIFN0cmluZyAgICBAZGIuVGV4dAogIGNvbXBhbnkgICAgICAgU3RyaW5nCiAgbG9nbyAgICAgICAgICBTdHJpbmcKICB3b3JrRGF0ZSAgICAgIERhdGVUaW1lICBAZGIuRGF0ZSgpCiAgaW1hZ2VzICAgICAgICBTdHJpbmdbXQogIGNvdmVyICAgICAgICAgU3RyaW5nCiAgcHJpb3JpdHkgICAgICBJbnQ/ICAgICAgQHVuaXF1ZQogIGhvbWVBY3Rpdml0eSAgQm9vbGVhbiAgIEBkZWZhdWx0KGZhbHNlKQogIGNyZWF0ZWRBdCAgICAgRGF0ZVRpbWUgIEBkZWZhdWx0KGRiZ2VuZXJhdGVkKCJOT1coKSIpKQogIGRlbGV0ZWRBdCAgICAgRGF0ZVRpbWU/CiAgYXV0aG9ySWQgICAgICBTdHJpbmcKICBhdXRob3IgICAgICAgIHVzZXJzICAgICBAcmVsYXRpb24oZmllbGRzOiBbYXV0aG9ySWRdLCByZWZlcmVuY2VzOiBbdXNlcklkXSkKfQoKbW9kZWwgcGFydG5lcnMgewogIHBhcnRuZXJJZCBTdHJpbmcgICAgICAgICAgQGlkIEB1bmlxdWUgQGRlZmF1bHQoY3VpZCgpKQogIHdlYnNpdGUgICBTdHJpbmc/CiAgZmlsZVVybCAgIFN0cmluZwogIHByaW9yaXR5ICBJbnQ/CiAgdHlwZSAgICAgIHBhcnRuZXJUeXBlRW51bQogIGF1dGhvcklkICBTdHJpbmcKICBhdXRob3IgICAgdXNlcnMgICAgICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFthdXRob3JJZF0sIHJlZmVyZW5jZXM6IFt1c2VySWRdKQogIGNyZWF0ZWRBdCBEYXRlVGltZSAgICAgICAgQGRlZmF1bHQoZGJnZW5lcmF0ZWQoIk5PVygpIikpCiAgZGVsZXRlZEF0IERhdGVUaW1lPwp9Cgptb2RlbCBnYWxsZXJ5IHsKICBnYWxsZXJ5SWQgU3RyaW5nICAgIEBpZCBAdW5pcXVlIEBkZWZhdWx0KGN1aWQoKSkKICBwcmlvcml0eSAgSW50PyAgICAgIEB1bmlxdWUKICBpbWFnZSAgICAgU3RyaW5nCiAgYXV0aG9ySWQgIFN0cmluZwogIGF1dGhvciAgICB1c2VycyAgICAgQHJlbGF0aW9uKGZpZWxkczogW2F1dGhvcklkXSwgcmVmZXJlbmNlczogW3VzZXJJZF0pCiAgY3JlYXRlZEF0IERhdGVUaW1lICBAZGVmYXVsdChkYmdlbmVyYXRlZCgiTk9XKCkiKSkKICBkZWxldGVkQXQgRGF0ZVRpbWU/Cn0KCm1vZGVsIG1haWxzIHsKICBtYWlsSWQgICAgU3RyaW5nICAgIEBpZCBAdW5pcXVlIEBkZWZhdWx0KGN1aWQoKSkKICBuYW1lICAgICAgU3RyaW5nCiAgZW1haWwgICAgIFN0cmluZwogIGZpbGVVcmwgICBTdHJpbmc/CiAgY29tbWVudCAgIFN0cmluZyAgICBAZGIuVGV4dAogIHJlYWRCeSAgICBTdHJpbmc/CiAgcmVhZFVzZXIgIHVzZXJzPyAgICBAcmVsYXRpb24oZmllbGRzOiBbcmVhZEJ5XSwgcmVmZXJlbmNlczogW3VzZXJJZF0pCiAgY3JlYXRlZEF0IERhdGVUaW1lICBAZGVmYXVsdChkYmdlbmVyYXRlZCgiTk9XKCkiKSkKICBkZWxldGVkQXQgRGF0ZVRpbWU/Cn0KCm1vZGVsIGFib3V0IHsKICBhYm91dElkICAgU3RyaW5nICAgIEBpZCBAdW5pcXVlIEBkZWZhdWx0KGN1aWQoKSkKICB0aXRsZVRtICAgU3RyaW5nCiAgY29udGVudFRtIFN0cmluZyAgICBAZGIuVGV4dAogIHRpdGxlUnUgICBTdHJpbmcKICBjb250ZW50UnUgU3RyaW5nICAgIEBkYi5UZXh0CiAgdGl0bGVFbiAgIFN0cmluZwogIGNvbnRlbnRFbiBTdHJpbmcgICAgQGRiLlRleHQKICB0YWdsaW5lVG0gU3RyaW5nCiAgdGFnbGluZVJ1IFN0cmluZwogIHRhZ2xpbmVFbiBTdHJpbmcKICBhdXRob3JJZCAgU3RyaW5nCiAgYXV0aG9yICAgIHVzZXJzICAgICBAcmVsYXRpb24oZmllbGRzOiBbYXV0aG9ySWRdLCByZWZlcmVuY2VzOiBbdXNlcklkXSkKICBjcmVhdGVkQXQgRGF0ZVRpbWUgIEBkZWZhdWx0KGRiZ2VuZXJhdGVkKCJOT1coKSIpKQogIGRlbGV0ZWRBdCBEYXRlVGltZT8KfQoKbW9kZWwgY29udGFjdCB7CiAgY29udGFjdElkICAgICBTdHJpbmcgICBAaWQgQHVuaXF1ZSBAZGVmYXVsdChjdWlkKCkpCiAgcGhvbmUgICAgICAgICBTdHJpbmcKICBtb2JpbGVQaG9uZSAgIFN0cmluZwogIGluc3RhZ3JhbSAgICAgU3RyaW5nPwogIGluc3RhZ3JhbUxpbmsgU3RyaW5nPwogIGluZm8gICAgICAgICAgU3RyaW5nCiAgYWRkcmVzc1RtICAgICBTdHJpbmcKICBhZGRyZXNzUnUgICAgIFN0cmluZwogIGFkZHJlc3NFbiAgICAgU3RyaW5nCiAgY3JlYXRlZEF0ICAgICBEYXRlVGltZSBAZGVmYXVsdChkYmdlbmVyYXRlZCgiTk9XKCkiKSkKICB1cGRhdGVkQXQgICAgIERhdGVUaW1lIEB1cGRhdGVkQXQKfQoKbW9kZWwgaW5mb3JtYXRpb24gewogIGluZm9JZCAgICBTdHJpbmcgICBAaWQgQHVuaXF1ZSBAZGVmYXVsdChjdWlkKCkpCiAgaW5mbzEgICAgIEpzb24/ICAgIEBkYi5Kc29uQgogIGluZm8yICAgICBKc29uPyAgICBAZGIuSnNvbkIKICBpbmZvMyAgICAgSnNvbj8gICAgQGRiLkpzb25CCiAgaW5mbzQgICAgIEpzb24/ICAgIEBkYi5Kc29uQgogIGNyZWF0ZWRBdCBEYXRlVGltZSBAZGVmYXVsdChkYmdlbmVyYXRlZCgiTk9XKCkiKSkKICB1cGRhdGVkQXQgRGF0ZVRpbWUgQHVwZGF0ZWRBdAp9Cgptb2RlbCBlY29sb2d5IHsKICBlY29sb2d5SWQgU3RyaW5nICAgQGlkIEB1bmlxdWUgQGRlZmF1bHQoY3VpZCgpKQogIGltYWdlcyAgICBTdHJpbmdbXSBAZGVmYXVsdChbXSkKICB0aXRsZVRtICAgU3RyaW5nCiAgdGl0bGVSdSAgIFN0cmluZwogIHRpdGxlRW4gICBTdHJpbmcKICBjb250ZW50VG0gU3RyaW5nICAgQGRiLlRleHQoKQogIGNvbnRlbnRSdSBTdHJpbmcgICBAZGIuVGV4dCgpCiAgY29udGVudEVuIFN0cmluZyAgIEBkYi5UZXh0KCkKICB2aWRlbyAgICAgU3RyaW5nPwogIGNyZWF0ZWRBdCBEYXRlVGltZSBAZGVmYXVsdChkYmdlbmVyYXRlZCgiTk9XKCkiKSkKICB1cGRhdGVkQXQgRGF0ZVRpbWUgQHVwZGF0ZWRBdAp9Cgptb2RlbCBwcm9kdWN0U2VydmljZXMgewogIGlkICAgICAgICBTdHJpbmcgICAgICAgICAgICAgICAgICBAaWQgQHVuaXF1ZSBAZGVmYXVsdChjdWlkKCkpCiAgbmFtZVRtICAgIFN0cmluZwogIG5hbWVFbiAgICBTdHJpbmcKICBuYW1lUnUgICAgU3RyaW5nCiAgbG9nbyAgICAgIFN0cmluZwogIGNvbnRlbnRUbSBTdHJpbmcKICBjb250ZW50UnUgU3RyaW5nCiAgY29udGVudEVuIFN0cmluZwogIGltYWdlcyAgICBTdHJpbmdbXQogIHR5cGUgICAgICBwcm9kdWN0U2VydmljZXNUeXBlRW51bQogIHByaW9yaXR5ICBJbnQ/CiAgY3JlYXRlZEF0IERhdGVUaW1lICAgICAgICAgICAgICAgIEBkZWZhdWx0KGRiZ2VuZXJhdGVkKCJOT1coKSIpKQogIHVwZGF0ZWRBdCBEYXRlVGltZSAgICAgICAgICAgICAgICBAdXBkYXRlZEF0CiAgZGVsZXRlZEF0IERhdGVUaW1lPwp9Cgptb2RlbCBjYXRhbG9ncyB7CiAgY2F0YWxvZ0lkICAgU3RyaW5nICAgICAgICAgIEBpZCBAdW5pcXVlIEBkZWZhdWx0KGN1aWQoKSkKICBjYXRhbG9nVHlwZSBjYXRhbG9nVHlwZUVudW0gQHVuaXF1ZQogIGZpbGVVcmwgICAgIFN0cmluZwogIGNyZWF0ZWRBdCAgIERhdGVUaW1lICAgICAgICBAZGVmYXVsdChkYmdlbmVyYXRlZCgiTk9XKCkiKSkKICB1cGRhdGVkQXQgICBEYXRlVGltZSAgICAgICAgQHVwZGF0ZWRBdAp9CgplbnVtIHByb2R1Y3RTZXJ2aWNlc1R5cGVFbnVtIHsKICBzZXJ2aWNlCiAgcHJvZHVjdAogIC8vIHR5cGUxIEBtYXAoInNlcnZpY2UiKQogIC8vIHR5cGUyIEBtYXAoInByb2R1Y3QiKQp9CgplbnVtIGNhdGFsb2dUeXBlRW51bSB7CiAgaG9tZQogIHByb2R1Y3RzZXJ2aWNlcwp9Cg==",
  "inlineSchemaHash": "849affdcdf93b3f97529adec32fe6c09653d81aeee44202f6aa7725a3a1df5c3"
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"users\":{\"dbName\":null,\"fields\":[{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"username\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"about\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"about\",\"relationName\":\"aboutTousers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"news\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"news\",\"relationName\":\"newsTousers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"projects\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"projects\",\"relationName\":\"projectsTousers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gallery\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"gallery\",\"relationName\":\"galleryTousers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"partners\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"partners\",\"relationName\":\"partnersTousers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"readMails\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"mails\",\"relationName\":\"mailsTousers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"dbgenerated\",\"args\":[\"NOW()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deletedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"news\":{\"dbName\":null,\"fields\":[{\"name\":\"newsId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"titleTm\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"contentTm\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"titleRu\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"contentRu\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"titleEn\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"contentEn\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"image\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"video\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"published\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isMain\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"homeActivity\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"priority\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"dbgenerated\",\"args\":[\"NOW()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deletedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"authorId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"author\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"users\",\"relationName\":\"newsTousers\",\"relationFromFields\":[\"authorId\"],\"relationToFields\":[\"userId\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"projects\":{\"dbName\":null,\"fields\":[{\"name\":\"projectId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nameTm\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nameRu\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nameEn\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"descriptionTm\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"descriptionRu\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"descriptionEn\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"company\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"logo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"workDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"images\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cover\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"priority\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"homeActivity\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"dbgenerated\",\"args\":[\"NOW()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deletedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"authorId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"author\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"users\",\"relationName\":\"projectsTousers\",\"relationFromFields\":[\"authorId\"],\"relationToFields\":[\"userId\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"partners\":{\"dbName\":null,\"fields\":[{\"name\":\"partnerId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"website\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fileUrl\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"priority\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"partnerTypeEnum\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"authorId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"author\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"users\",\"relationName\":\"partnersTousers\",\"relationFromFields\":[\"authorId\"],\"relationToFields\":[\"userId\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"dbgenerated\",\"args\":[\"NOW()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deletedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"gallery\":{\"dbName\":null,\"fields\":[{\"name\":\"galleryId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"priority\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"image\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"authorId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"author\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"users\",\"relationName\":\"galleryTousers\",\"relationFromFields\":[\"authorId\"],\"relationToFields\":[\"userId\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"dbgenerated\",\"args\":[\"NOW()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deletedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"mails\":{\"dbName\":null,\"fields\":[{\"name\":\"mailId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fileUrl\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"comment\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"readBy\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"readUser\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"users\",\"relationName\":\"mailsTousers\",\"relationFromFields\":[\"readBy\"],\"relationToFields\":[\"userId\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"dbgenerated\",\"args\":[\"NOW()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deletedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"about\":{\"dbName\":null,\"fields\":[{\"name\":\"aboutId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"titleTm\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"contentTm\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"titleRu\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"contentRu\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"titleEn\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"contentEn\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"taglineTm\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"taglineRu\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"taglineEn\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"authorId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"author\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"users\",\"relationName\":\"aboutTousers\",\"relationFromFields\":[\"authorId\"],\"relationToFields\":[\"userId\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"dbgenerated\",\"args\":[\"NOW()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deletedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"contact\":{\"dbName\":null,\"fields\":[{\"name\":\"contactId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mobilePhone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"instagram\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"instagramLink\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"info\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"addressTm\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"addressRu\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"addressEn\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"dbgenerated\",\"args\":[\"NOW()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"information\":{\"dbName\":null,\"fields\":[{\"name\":\"infoId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"info1\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"info2\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"info3\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"info4\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"dbgenerated\",\"args\":[\"NOW()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ecology\":{\"dbName\":null,\"fields\":[{\"name\":\"ecologyId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"images\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"titleTm\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"titleRu\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"titleEn\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"contentTm\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"contentRu\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"contentEn\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"video\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"dbgenerated\",\"args\":[\"NOW()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"productServices\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nameTm\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nameEn\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nameRu\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"logo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"contentTm\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"contentRu\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"contentEn\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"images\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"productServicesTypeEnum\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"priority\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"dbgenerated\",\"args\":[\"NOW()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"deletedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"catalogs\":{\"dbName\":null,\"fields\":[{\"name\":\"catalogId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"catalogType\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"catalogTypeEnum\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fileUrl\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"dbgenerated\",\"args\":[\"NOW()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"partnerTypeEnum\":{\"values\":[{\"name\":\"dealership\",\"dbName\":null},{\"name\":\"clients\",\"dbName\":null},{\"name\":\"projects\",\"dbName\":null}],\"dbName\":null},\"productServicesTypeEnum\":{\"values\":[{\"name\":\"service\",\"dbName\":null},{\"name\":\"product\",\"dbName\":null}],\"dbName\":null},\"catalogTypeEnum\":{\"values\":[{\"name\":\"home\",\"dbName\":null},{\"name\":\"productservices\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.getQueryEngineWasmModule = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

