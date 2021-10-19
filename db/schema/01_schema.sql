-- Drop and recreate Widgets table (Example)
DROP TABLE IF EXISTS users, maps, pins, CASCADE;
CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL
);

CREATE TABLE maps (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id),
  title VARCHAR(255) NOT NULL,
  pins_id INTEGER REFERENCES pins(id) ON DELETE CASCADE,
  category_name VARCHAR(255)
);

CREATE TABLE pins (
  id SERIAL PRIMARY KEY NOT NULL,
  json_name TEXT
);


