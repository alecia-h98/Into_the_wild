-------------------------------------------------------
--------------------------------------------------
-- START FROM SCRATCH:
DROP TRIGGER IF EXISTS "on_user_update" ON "user";
DROP TABLE IF EXISTS "user";


-------------------------------------------------------
--------------------------------------------------
-- TABLE SCHEMAS:
CREATE TABLE "user" (
  "id" SERIAL PRIMARY KEY,
  "username" VARCHAR (80) UNIQUE NOT NULL,
  "password" VARCHAR (1000) NOT NULL,
  "inserted_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
  "updated_at" TIMESTAMPTZ NOT NULL DEFAULT now()
);


-------------------------------------------------------
--------------------------------------------------
-- SEED DATA:
--   You'll need to actually register users via the application in order to get hashed
--   passwords. Once you've done that, you can modify this INSERT statement to include
--   your dummy users. Be sure to copy/paste their hashed passwords, as well.
--   This is only for development purposes! Here's a commented-out example:
-- INSERT INTO "user"
--   ("username", "password")
--   VALUES
--   ('unicorn10', '$2a$10$oGi81qjXmTh/slGzYOr2fu6NGuCwB4kngsiWQPToNrZf5X8hxkeNG'), --pw: 123
--   ('cactusfox', '$2a$10$8./c/6fB2BkzdIrAUMWOxOlR75kgmbx/JMrMA5gA70c9IAobVZquW'); --pw: 123


-------------------------------------------------------
--------------------------------------------------
-- AUTOMAGIC UPDATED_AT:

-- Did you know that you can make and execute functions
-- in PostgresQL? Wild, right!? I'm not making this up. Here
-- is proof that I am not making this up:
  -- https://x-team.com/blog/automatic-timestamps-with-postgresql/

-- Create a function that sets a row's updated_at column
-- to NOW():
CREATE OR REPLACE FUNCTION set_updated_at_to_now() -- 👈
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create a trigger on the user table that will execute
-- the set_update_at_to_now function on any rows that
-- have been touched by an UPDATE query:
CREATE TRIGGER on_user_update
BEFORE UPDATE ON "user"
FOR EACH ROW
EXECUTE PROCEDURE set_updated_at_to_now();



---My database code---
 
-- OPPS STARTING OVER...
--DROP TABLE "user" CASCADE;
--DROP TABLE "item" CASCADE;
--DROP TABLE "found" CASCADE;
 
CREATE TABLE "user"(
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "username" VARCHAR(80) NOT NULL,
    "password" VARCHAR(1000) NOT NULL,
    "inserted_at" TIMESTAMP(0) WITH
        TIME zone NOT NULL DEFAULT 'now()',
        "updated_at" TIMESTAMP(0)
    WITH
        TIME zone NOT NULL DEFAULT 'now()',
        "is_admin" BOOLEAN NOT NULL DEFAULT '0'
);
ALTER TABLE
    "user" ADD PRIMARY KEY("id");
ALTER TABLE
    "user" ADD CONSTRAINT "user_username_unique" UNIQUE("username");
CREATE TABLE "item"(
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" VARCHAR(500) NOT NULL,
    "found" VARCHAR(350) NOT NULL,
    "season" VARCHAR(255) NOT NULL,
    "uses" VARCHAR(350) NOT NULL,
    "photo" VARCHAR(255) NOT NULL,
    "nutrition" VARCHAR(350) NOT NULL,
    "shelf_life" VARCHAR(350) NOT NULL,
    "harvesting" VARCHAR(450) NOT NULL,
    "imposters" VARCHAR(65) NOT NULL,
    "category" VARCHAR(25) NOT NULL
);
ALTER TABLE
    "item" ADD PRIMARY KEY("id");
CREATE TABLE "found"(
    "id" SERIAL NOT NULL,
    "item_id" INTEGER NOT NULL,
    "found_date" DATE NOT NULL,
    "location" VARCHAR(255) NOT NULL,
    "description" VARCHAR(1500) NOT NULL,
    "photo" VARCHAR(1500) NOT NULL,
    "user_id" INTEGER NOT NULL,
    "lat" DECIMAL(8, 6) NOT NULL,
    "long" DECIMAL(9, 6) NOT NULL
);
ALTER TABLE
    "found" ADD PRIMARY KEY("id");
CREATE TABLE "user_item"(
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "item_id" INTEGER NOT NULL,
    "is_favorited" BOOLEAN NOT NULL DEFAULT '0'
);
ALTER TABLE
    "user_item" ADD PRIMARY KEY("id");
ALTER TABLE
    "user_item" ADD CONSTRAINT "user_item_user_id_foreign" FOREIGN KEY("user_id") REFERENCES "user"("id");
ALTER TABLE
    "found" ADD CONSTRAINT "found_item_id_foreign" FOREIGN KEY("item_id") REFERENCES "item"("id");
ALTER TABLE
    "user_item" ADD CONSTRAINT "user_item_item_id_foreign" FOREIGN KEY("item_id") REFERENCES "item"("id");
ALTER TABLE
    "found" ADD CONSTRAINT "found_user_id_foreign" FOREIGN KEY("user_id") REFERENCES "user"("id");