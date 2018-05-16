CREATE TABLE account(
 user_id serial PRIMARY KEY,
 username VARCHAR (50) UNIQUE NOT NULL,
 password VARCHAR (50) NOT NULL,
 created_on TIMESTAMP NOT NULL,
 last_login TIMESTAMP
);

CREATE TABLE trips(
  trip_id serial PRIMARY KEY,
  user_id INTEGER,
  location VARCHAR,
  date TIME,
  casual BOOLEAN,
  packed BOOLEAN,
  temp INTEGER
);

CREATE TABLE default_clothes(
  serial_key serial PRIMARY KEY,
  user_id INTEGER,
  casual BOOLEAN,
  items VARCHAR,
  temp INTEGER
);

CREATE TABLE casual(
  serial_key serial PRIMARY KEY,
  user_id INTEGER,
  items VARCHAR
);