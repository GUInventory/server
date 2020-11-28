# Migration `20201128181918-fix-log-enum`

This migration has been generated by Balint.Kiraly1 <balint.kiraly@protonmail.com> at 11/28/2020, 7:19:18 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
BEGIN;
CREATE TYPE "LogType_new" AS ENUM ('CREATE', 'UPDATE', 'DELETE');
ALTER TABLE "public"."Log" ALTER COLUMN "type" TYPE "LogType_new" USING ("type"::text::"LogType_new");
ALTER TYPE "LogType" RENAME TO "LogType_old";
ALTER TYPE "LogType_new" RENAME TO "LogType";
DROP TYPE "LogType_old";
COMMIT
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20201125201046-add-user-to-log..20201128181918-fix-log-enum
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
@@ -16,9 +16,9 @@
   USER
 }
 enum LogType {
-  EDIT
+  CREATE
   UPDATE
   DELETE
 }
```

