DROP DATABASE IF EXISTS cars;
CREATE DATABASE cars;

USE cars;

CREATE TABLE carInfo (
  id int NOT NULL AUTO_INCREMENT,
  companyName varchar(20) NOT NULL,
  carName varchar(50) NOT NULL,
  edition varchar(50) NOT NULL,
  trips int NOT NULL,
  mpg int NOT NULL,
  gas varchar(20) NOT NULL,
  doors int NOT NULL,
  seats int NOT NULL,
  description varchar(1000) NOT NULL,
  business varchar(50) NOT NULL,
  features varchar(30) NOT NULL,
  extras varchar(1000) NOT NULL,
  guidelines varchar(5000) NOT NULL,
  faq varchar(5000) NOT NULL,
  moreD varchar(1000) NOT NULL,
  moreE varchar(1000) NOT NULL,
  sentence varchar(100) NOT NULL,
  PRIMARY KEY (id)
);
