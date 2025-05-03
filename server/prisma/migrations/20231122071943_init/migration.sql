-- CreateEnum
CREATE TYPE "partnerTypeEnum" AS ENUM ('dealership', 'clients', 'projects');

-- CreateTable
CREATE TABLE "users" (
    "userId" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT NOW(),
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "users_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "news" (
    "newsId" TEXT NOT NULL,
    "titleTm" TEXT NOT NULL,
    "contectTm" TEXT NOT NULL,
    "titleRu" TEXT NOT NULL,
    "contectRu" TEXT NOT NULL,
    "titleEn" TEXT NOT NULL,
    "contectEn" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "video" TEXT,
    "published" BOOLEAN NOT NULL,
    "isMain" BOOLEAN NOT NULL DEFAULT false,
    "homeActivity" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT NOW(),
    "deletedAt" TIMESTAMP(3),
    "authorId" TEXT NOT NULL,

    CONSTRAINT "news_pkey" PRIMARY KEY ("newsId")
);

-- CreateTable
CREATE TABLE "categories" (
    "categoryId" TEXT NOT NULL,
    "categoryRu" TEXT NOT NULL,
    "categoryTm" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT NOW(),
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "categories_pkey" PRIMARY KEY ("categoryId")
);

-- CreateTable
CREATE TABLE "projects" (
    "projectId" TEXT NOT NULL,
    "nameTm" TEXT NOT NULL,
    "nameRu" TEXT NOT NULL,
    "nameEn" TEXT NOT NULL,
    "descriptionTm" TEXT NOT NULL,
    "descriptionRu" TEXT NOT NULL,
    "descriptionEn" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "logo" TEXT NOT NULL,
    "workDate" DATE NOT NULL,
    "images" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT NOW(),
    "deletedAt" TIMESTAMP(3),
    "authorId" TEXT NOT NULL,

    CONSTRAINT "projects_pkey" PRIMARY KEY ("projectId")
);

-- CreateTable
CREATE TABLE "partners" (
    "partnerId" TEXT NOT NULL,
    "website" TEXT,
    "fileUrl" TEXT NOT NULL,
    "type" "partnerTypeEnum" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT NOW(),
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "partners_pkey" PRIMARY KEY ("partnerId")
);

-- CreateTable
CREATE TABLE "mails" (
    "mailId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cv" TEXT NOT NULL,
    "comment" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT NOW(),
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "mails_pkey" PRIMARY KEY ("mailId")
);

-- CreateTable
CREATE TABLE "about" (
    "aboutId" TEXT NOT NULL,
    "titleTm" TEXT NOT NULL,
    "contentTm" TEXT NOT NULL,
    "titleRu" TEXT NOT NULL,
    "contentRu" TEXT NOT NULL,
    "titleEn" TEXT NOT NULL,
    "contentEn" TEXT NOT NULL,
    "authorId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT NOW(),
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "about_pkey" PRIMARY KEY ("aboutId")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_userId_key" ON "users"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "news_newsId_key" ON "news"("newsId");

-- CreateIndex
CREATE UNIQUE INDEX "categories_categoryId_key" ON "categories"("categoryId");

-- CreateIndex
CREATE UNIQUE INDEX "projects_projectId_key" ON "projects"("projectId");

-- CreateIndex
CREATE UNIQUE INDEX "partners_partnerId_key" ON "partners"("partnerId");

-- CreateIndex
CREATE UNIQUE INDEX "mails_mailId_key" ON "mails"("mailId");

-- CreateIndex
CREATE UNIQUE INDEX "about_aboutId_key" ON "about"("aboutId");

-- AddForeignKey
ALTER TABLE "news" ADD CONSTRAINT "news_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "users"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "projects" ADD CONSTRAINT "projects_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "users"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "about" ADD CONSTRAINT "about_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "users"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;
