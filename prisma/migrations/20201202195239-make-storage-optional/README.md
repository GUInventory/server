# Migration `20201202195239-make-storage-optional`

This migration has been generated by Balint.Kiraly1 <balint.kiraly@protonmail.com> at 12/2/2020, 8:52:39 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "Item" ALTER COLUMN "storageId" DROP NOT NULL
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20201202180631-add-warehouse-item-relation..20201202195239-make-storage-optional
--- datamodel.dml
+++ datamodel.dml
@@ -2,9 +2,9 @@
 // learn more about it in the docs: https://pris.ly/d/prisma-schema
 datasource db {
   provider = "postgresql"
-  url = "***"
+  url = "***"
 }
 generator client {
   provider = "prisma-client-js"
@@ -95,9 +95,9 @@
 model Item {
   id          Int         @id @default(autoincrement())
   name        String
   image       String
-  storage     Storage     @relation("StorageToItem", fields: [storageId], references: [id])
+  storage     Storage?    @relation("StorageToItem", fields: [storageId], references: [id])
   value       Int
   outgoings   Outgoing[]
   attributes  Attribute[]
   categories  Category[]  @relation("CategoryToItem")
@@ -112,9 +112,9 @@
   sizeZ     Int
   createdAt DateTime @default(now())
   updatedAt DateTime @updatedAt
-  storageId Int
+  storageId Int?
 }
 model Outgoing {
   id          Int      @id @default(autoincrement())
```


