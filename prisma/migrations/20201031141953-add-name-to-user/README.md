# Migration `20201031141953-add-name-to-user`

This migration has been generated by Balint.Kiraly1 <balint.kiraly@protonmail.com> at 10/31/2020, 3:19:53 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE `User` ADD COLUMN `name` varchar(191)  NOT NULL 
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20201031115132-basic_schema..20201031141953-add-name-to-user
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
@@ -26,8 +26,9 @@
 model User {
   id          Int         @id @default(autoincrement())
   email       String      @unique
   password    String
+  name        String
   globalRole  RoleType    @default(USER)
   roles       Role[]
   warehouses  Warehouse[]
   createdAt   DateTime    @default(now())
```


