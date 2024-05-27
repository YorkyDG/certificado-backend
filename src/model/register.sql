CREATE TABLE "register" (
  "register_id" varchar PRIMARY KEY NOT NULL,
  "user_id" varchar NOT NULL,
  "session_id" varchar NOT NULL,
  "registration_date" timestamp,
  foreign key (user_id) references users(user_id),
  foreign key (session_id) references sessions(session_id)
);