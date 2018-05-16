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
  items VARCHAR,
  temp INTEGER,
  departure_date DATE,
  return_date DATE
);

CREATE TABLE items(
  items_id serial PRIMARY KEY,
  description VARCHAR,
  climate INTEGER,
  occasion INTEGER
);

CREATE TABLE climate(
  c_id serial PRIMARY KEY,
  description VARCHAR
);

CREATE TABLE occasion(
  o_id serial PRIMARY KEY,
  description VARCHAR
);

CREATE TABLE unwanted(
  uw_id serial PRIMARY KEY,
  items VARCHAR
);