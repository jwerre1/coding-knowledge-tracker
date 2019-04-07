CREATE DATABASE coding_db;
use coding_db;

CREATE TABLE knowledge
(
    id int NOT NULL AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    known BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);
