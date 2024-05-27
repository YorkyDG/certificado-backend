CREATE TABLE "sessions" (
  "session_id" varchar PRIMARY KEY NOT NULL,
  "activity_id" varchar NOT NULL,
  "teacher_id" varchar NOT NULL,
  "schedule" varchar,
  "activity_startDate" varchar NOT NULL,
  "activity_endDate" varchar NOT NULL,
   foreign key (activity_id) references activity(activity_id),
   foreign key (teacher_id) references users(user_id)
);

