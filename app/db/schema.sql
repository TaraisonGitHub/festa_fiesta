CREATE DATABASE IF NOT EXISTS party_db;
USE party_db;

# If the table already exists, remove it before trying to create the table again
DROP TABLE IF EXISTS playlist;

# Create the playlist table
CREATE TABLE playlist (
id int NOT NULL AUTO_INCREMENT,
name varchar(255) NOT NULL,
created_by DATE,
PRIMARY KEY (id)
);
