CREATE TABLE "role" (
    "role_id" varchar PRIMARY KEY NOT NULL,
    "role_title" varchar UNIQUE NOT NULL,
    "isActivate" bool DEFAULT true,
    "role_description" varchar
  );