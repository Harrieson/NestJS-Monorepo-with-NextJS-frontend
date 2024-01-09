-- CreateEnum
CREATE TYPE "AuthProviderType" AS ENUM ('GOOGLE', 'CREDENTIALS');

-- CreateTable
CREATE TABLE "User" (
    "uid" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT,
    "image" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("uid")
);

-- CreateTable
CREATE TABLE "Creddentials" (
    "uid" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "passwordHas" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Creddentials_pkey" PRIMARY KEY ("uid")
);

-- CreateTable
CREATE TABLE "Authprovider" (
    "uid" TEXT NOT NULL,
    "type" "AuthProviderType" NOT NULL,

    CONSTRAINT "Authprovider_pkey" PRIMARY KEY ("uid")
);

-- CreateIndex
CREATE UNIQUE INDEX "Creddentials_email_key" ON "Creddentials"("email");

-- AddForeignKey
ALTER TABLE "Creddentials" ADD CONSTRAINT "Creddentials_uid_fkey" FOREIGN KEY ("uid") REFERENCES "User"("uid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Authprovider" ADD CONSTRAINT "Authprovider_uid_fkey" FOREIGN KEY ("uid") REFERENCES "User"("uid") ON DELETE CASCADE ON UPDATE CASCADE;
