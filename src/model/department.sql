CREATE TABLE "department" (
  "department_id" varchar PRIMARY KEY,
  "department_name" varchar NOT NULL,
  "department_description" varchar
);
SELECT department_id, department_name, department_description	FROM public.department;