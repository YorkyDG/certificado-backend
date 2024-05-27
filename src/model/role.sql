CREATE TABLE "role" (
    "role_id" varchar PRIMARY KEY NOT NULL,
    "role_title" varchar UNIQUE NOT NULL,
    "role_status" bool DEFAULT true,
    "role_description" varchar
  );