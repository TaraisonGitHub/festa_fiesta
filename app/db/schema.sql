CREATE DATABASE IF NOT EXISTS party_db;
USE party_db;

# If the table already exists, remove it before trying to create the table again
DROP TABLE IF EXISTS playlist;

# Create the playlist table
CREATE TABLE playlist (
id int NOT NULL AUTO_INCREMENT,
title varchar(255) NOT NULL,
artist varchar(255) NOT NULL,
album varchar(255) NOT NULL,
created_at CURRENT_TIMESTAMP,
PRIMARY KEY (id)
);


# If the table already exists, remove it before trying to create the table again
DROP TABLE IF EXISTS rsvp;

# Create the rsvp table
CREATE TABLE rsvp (
id int NOT NULL AUTO_INCREMENT,
name varchar(255) NOT NULL,
created_at CURRENT_TIMESTAMP,
PRIMARY KEY (id)
);

# If the table already exists, remove it before trying to create the table again
DROP TABLE IF EXISTS games;

# Create the games table
CREATE TABLE games (
id int NOT NULL AUTO_INCREMENT,
game varchar(255) NOT NULL,
description varchar(255) NOT NULL,
created_at CURRENT_TIMESTAMP,
PRIMARY KEY (id)
);

# If the table already exists, remove it before trying to create the table again
DROP TABLE IF EXISTS rsvp;

# Create the food table
CREATE TABLE food (
id int NOT NULL AUTO_INCREMENT,
food varchar(255) NOT NULL,
cost INT(11),
guest varchar(255) NOT NULL,
created_at CURRENT_TIMESTAMP,
PRIMARY KEY (id)
);

# If the table already exists, remove it before trying to create the table again
DROP TABLE IF EXISTS games;

# Create the decorations table
CREATE TABLE decor (
id int NOT NULL AUTO_INCREMENT,
decorations varchar(255) NOT NULL,
description varchar(255) NOT NULL,
cost INT(11) NOT NULL,
created_at CURRENT_TIMESTAMP,
PRIMARY KEY (id)
);