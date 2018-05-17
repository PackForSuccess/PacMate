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
  climate INTEGER, --fk to climate c_id (need to add)
  occasion INTEGER, --fk to occasion o_id (need to add)
  user_id INTEGER --fk to account user_id
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
  uw_id serial PRIMARY KEY, --fk to account user_id (need to add)
  items INTEGER
);

--insert
INSERT INTO account (username, password, created_on, last_login)
VALUES
 ('firstUser','password1', '2004-10-19 10:23:54', '2017-05-19 10:23:54');

