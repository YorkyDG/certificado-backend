CREATE TABLE "users" (
  "user_id" varchar PRIMARY KEY NOT NULL,
  "user_username" varchar UNIQUE NOT NULL,
  "user_fullname" varchar NOT NULL,
  "user_cedula" numeric NOT NULL,
  "user_email" varchar NOT NULL,
  "hash_password" varchar NOT NULL,
  "user_phone" numeric NOT NULL,
  "role_id" varchar NOT NULL,
  "department_id" varchar NOT NULL,
  foreign key (role_id) references role(role_id),
  foreign key (department_id) references department(department_id)
);