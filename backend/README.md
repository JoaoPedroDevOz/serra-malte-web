Prisma

npx prisma db pull

mkdir prisma/migrations/<migration_folder_name>

npx prisma migrate diff --from-empty --to-schema-datamodel prisma/schema.prisma --script > prisma/migrations/<migration_folder_name>/migration.sql

npx prisma migrate diff \
--from-empty \
--to-schema prisma/schema.prisma \
--script > prisma/migrations/20260523002219_init/migration.sql

npx prisma generate