# Migration `20201031152328-add-dates-to-role`

This migration has been generated by Balint.Kiraly1 <balint.kiraly@protonmail.com> at 10/31/2020, 4:23:28 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE `Role` ADD COLUMN `createdAt` datetime(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updatedAt` datetime(3)  NOT NULL 
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20201031151928-add-name-to-attribute-type..20201031152328-add-dates-to-role
--- datamodel.dml
+++ datamodel.dml
@@ -2,9 +2,9 @@
 // learn more about it in the docs: https://pris.ly/d/prisma-schema
 datasource db {
   provider = "mysql"
-  url = "***"
+  url = "***"
 }
 generator client {
   provider = "prisma-client-js"
@@ -38,8 +38,11 @@
 model Role {
   id          Int         @id @default(autoincrement())
   warehouse   Warehouse
   roleType    RoleType
+
+  createdAt   DateTime    @default(now())
+  updatedAt   DateTime    @updatedAt
 }
 model Warehouse {
   id          Int         @id @default(autoincrement())
```

