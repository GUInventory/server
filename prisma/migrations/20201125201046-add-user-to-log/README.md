# Migration `20201125201046-add-user-to-log`

This migration has been generated by Balint.Kiraly1 <balint.kiraly@protonmail.com> at 11/25/2020, 9:10:46 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "Log" ADD FOREIGN KEY("userId")REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20201114180927-add-log..20201125201046-add-user-to-log
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
@@ -38,8 +38,9 @@
   roles      Role[]
   warehouses Warehouse[]
   createdAt  DateTime    @default(now())
   updatedAt  DateTime    @updatedAt
+  Log        Log[]
 }
 model ResetPasswordToken {
   email     String   @id
@@ -158,8 +159,9 @@
 model Log {
   id         Int      @id @default(autoincrement())
   entityName String
   entityId   Int
+  user       User     @relation(fields: [userId], references: [id])
   userId     Int
   type       LogType
   oldValues  Json
   newValues  Json
```

