CREATE DATABASE IF NOT EXISTS party_db;
USE party_db;

# If the table already exists, remove it before trying to create the table again
DROP TABLE IF EXISTS playlist;

# Create the playlist table
CREATE TABLE user (
id int NOT NULL AUTO_INCREMENT,
firstname varchar(255) NOT NULL,
lastname varchar(255) NOT NULL,
email varchar(255) NOT NULL,
username varchar(255) NOT NULL,
password varchar(255) NOT NULL,
created_at DATETIME,
PRIMARY KEY (id)
);