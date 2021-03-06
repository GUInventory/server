# Migration `20201031115132-basic_schema`

This migration has been generated by Balint.Kiraly1 <balint.kiraly@protonmail.com> at 10/31/2020, 12:51:32 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE `User` DROP PRIMARY KEY,
    ADD COLUMN `globalRole` ENUM('ADMIN', 'EDITOR', 'USER')  NOT NULL DEFAULT 'USER',
    ADD COLUMN `createdAt` datetime(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updatedAt` datetime(3)  NOT NULL ,
    MODIFY `id` int NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`)

CREATE TABLE `Role` (
`id` int  NOT NULL  AUTO_INCREMENT,
`roleType` ENUM('ADMIN', 'EDITOR', 'USER')  NOT NULL ,
`userId` int  ,
`warehouseId` int  NOT NULL ,
PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci

CREATE TABLE `Warehouse` (
`id` int  NOT NULL  AUTO_INCREMENT,
`name` varchar(191)  NOT NULL ,
`sizeX` int  NOT NULL ,
`sizeY` int  NOT NULL ,
`sizeZ` int  NOT NULL ,
`createdAt` datetime(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
`updatedAt` datetime(3)  NOT NULL ,
`userId` int  ,
PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci

CREATE TABLE `Storage` (
`id` int  NOT NULL  AUTO_INCREMENT,
`name` varchar(191)  NOT NULL ,
`poistionX` int  NOT NULL ,
`positionY` int  NOT NULL ,
`sizeX` int  NOT NULL ,
`sizeY` int  NOT NULL ,
`sizeZ` int  NOT NULL ,
`createdAt` datetime(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
`updatedAt` datetime(3)  NOT NULL ,
PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci

CREATE TABLE `Item` (
`id` int  NOT NULL  AUTO_INCREMENT,
`name` varchar(191)  NOT NULL ,
`image` varchar(191)  NOT NULL ,
`value` int  NOT NULL ,
`poistionX` int  NOT NULL ,
`positionY` int  NOT NULL ,
`sizeX` int  NOT NULL ,
`sizeY` int  NOT NULL ,
`sizeZ` int  NOT NULL ,
`createdAt` datetime(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
`updatedAt` datetime(3)  NOT NULL ,
`storageId` int  ,
PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci

CREATE TABLE `Outgoing` (
`id` int  NOT NULL  AUTO_INCREMENT,
`description` varchar(191)  NOT NULL ,
`value` int  NOT NULL ,
`createdAt` datetime(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
`updatedAt` datetime(3)  NOT NULL ,
`itemId` int  ,
PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci

CREATE TABLE `Category` (
`id` int  NOT NULL  AUTO_INCREMENT,
`name` varchar(191)  NOT NULL ,
`color` varchar(191)  NOT NULL ,
`createdAt` datetime(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
`updatedAt` datetime(3)  NOT NULL ,
`categoryId` int  ,
PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci

CREATE TABLE `AttributeType` (
`id` int  NOT NULL  AUTO_INCREMENT,
`type` ENUM('STRING', 'DATE', 'DATETIME', 'NUMBER')  NOT NULL ,
`createdAt` datetime(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
`updatedAt` datetime(3)  NOT NULL ,
`categoryId` int  ,
PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci

CREATE TABLE `Attribute` (
`id` int  NOT NULL  AUTO_INCREMENT,
`type` ENUM('STRING', 'DATE', 'DATETIME', 'NUMBER')  NOT NULL ,
`value` varchar(191)  NOT NULL ,
`createdAt` datetime(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
`updatedAt` datetime(3)  NOT NULL ,
`itemId` int  ,
PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci

ALTER TABLE `Role` ADD FOREIGN KEY (`warehouseId`) REFERENCES `Warehouse`(`id`) ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE `Role` ADD FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE

ALTER TABLE `Warehouse` ADD FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE

ALTER TABLE `Item` ADD FOREIGN KEY (`storageId`) REFERENCES `Storage`(`id`) ON DELETE SET NULL ON UPDATE CASCADE

ALTER TABLE `Outgoing` ADD FOREIGN KEY (`itemId`) REFERENCES `Item`(`id`) ON DELETE SET NULL ON UPDATE CASCADE

ALTER TABLE `Category` ADD FOREIGN KEY (`categoryId`) REFERENCES `Category`(`id`) ON DELETE SET NULL ON UPDATE CASCADE

ALTER TABLE `AttributeType` ADD FOREIGN KEY (`categoryId`) REFERENCES `Category`(`id`) ON DELETE SET NULL ON UPDATE CASCADE

ALTER TABLE `Attribute` ADD FOREIGN KEY (`itemId`) REFERENCES `Item`(`id`) ON DELETE SET NULL ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20201030133402-init..20201031115132-basic_schema
--- datamodel.dml
+++ datamodel.dml
@@ -2,16 +2,116 @@
 // learn more about it in the docs: https://pris.ly/d/prisma-schema
 datasource db {
   provider = "mysql"
-  url = "***"
+  url = "***"
 }
 generator client {
   provider = "prisma-client-js"
 }
+enum RoleType {
+  ADMIN
+  EDITOR
+  USER
+}
+
+enum AttributeTypeEnum {
+  STRING
+  DATE
+  DATETIME
+  NUMBER
+}
+
 model User {
-  id        String  @default(cuid()) @id
-  email     String  @unique
-  password  String
+  id          Int         @id @default(autoincrement())
+  email       String      @unique
+  password    String
+  globalRole  RoleType    @default(USER)
+  roles       Role[]
+  warehouses  Warehouse[]
+  createdAt   DateTime    @default(now())
+  updatedAt   DateTime    @updatedAt
+}
+
+model Role {
+  id          Int         @id @default(autoincrement())
+  warehouse   Warehouse
+  roleType    RoleType
+}
+
+model Warehouse {
+  id          Int         @id @default(autoincrement())
+  name        String
+  sizeX       Int
+  sizeY       Int
+  sizeZ       Int
+  createdAt   DateTime    @default(now())
+  updatedAt   DateTime    @updatedAt
+}
+
+model Storage {
+  id          Int         @id @default(autoincrement())
+  name        String
+
+  poistionX   Int
+  positionY   Int
+  sizeX       Int
+  sizeY       Int
+  sizeZ       Int
+
+  createdAt   DateTime      @default(now())
+  updatedAt   DateTime      @updatedAt
+}
+
+model Item {
+  id          Int           @id @default(autoincrement())
+  name        String
+  image       String
+  storage     Storage?
+  value       Int
+  outgoings   Outgoing[]
+  attributes  Attribute[]
+
+  poistionX   Int
+  positionY   Int
+  sizeX       Int
+  sizeY       Int
+  sizeZ       Int
+
+  createdAt   DateTime       @default(now())
+  updatedAt   DateTime       @updatedAt
+}
+
+model Outgoing {
+  id          Int            @id @default(autoincrement())
+  description String
+  value       Int
+  createdAt   DateTime       @default(now())
+  updatedAt   DateTime       @updatedAt
+}
+
+model Category {
+  id          Int               @id @default(autoincrement())
+  name        String
+  color       String
+  parent      Category?
+  attributes  AttributeType[]
+  createdAt   DateTime          @default(now())
+  updatedAt   DateTime          @updatedAt
+}
+
+model AttributeType {
+  id          Int                @id @default(autoincrement())
+  type        AttributeTypeEnum
+  createdAt   DateTime           @default(now())
+  updatedAt   DateTime           @updatedAt
+}
+
+model Attribute {
+  id          Int                @id @default(autoincrement())
+  type        AttributeTypeEnum
+  value       String
+  createdAt   DateTime           @default(now())
+  updatedAt   DateTime           @updatedAt
 }
```


