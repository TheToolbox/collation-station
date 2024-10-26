CREATE TABLE "Accounts" (
  "id" integer PRIMARY KEY,
  "type" varchar
);

CREATE TABLE "Imports" (
  "id" integer PRIMARY KEY,
  "run_at" timestamp,
  "account" integer
);

CREATE TABLE "Conversations" (
  "id" string PRIMARY KEY,
  "account" integer
);

CREATE TABLE "Messages" (
  "sender" integer,
  "created_at" timestamp,
  "conversation" string,
  "type" string,
  "unparsed" string
);

ALTER TABLE "Imports" ADD FOREIGN KEY ("account") REFERENCES "Accounts" ("id");

ALTER TABLE "Conversations" ADD FOREIGN KEY ("account") REFERENCES "Accounts" ("id");

ALTER TABLE "Messages" ADD FOREIGN KEY ("conversation") REFERENCES "Conversations" ("id");
