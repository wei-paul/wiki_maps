-- Drop and recreate Widgets table (Example)
DROP TABLE IF EXISTS users, maps, pins;
CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL
);

CREATE TABLE pins (
  id SERIAL PRIMARY KEY NOT NULL,
  map_id INTEGER REFERENCES maps(id),
  user_id INTEGER REFERENCES users(id),
  image_url VARCHAR(255),
  description VARCHAR(255),
  lat INTEGER,
  long INTEGER,
);

CREATE TABLE maps (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id),
  title VARCHAR(255) NOT NULL,
  category_name VARCHAR(255)
);
