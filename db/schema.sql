DROP DATABASE IF EXISTS burger;
CREATE DATABASE burger;


USE burger;
CREATE TABLE burgerList (
    id INT  PRIMARY KEY AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(30) NOT NULL,
    devoured boolean
);


