CREATE TABLE user (
  id int NOT NULL AUTO_INCREMENT,
  email varchar(255) NOT NULL,
  password varchar(255) NOT NULL,
  first_name varchar(255) NOT NULL,
  last_name varchar(255) NOT NULL,
  role varchar(255) NOT NULL,
  age int NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE bookshelf (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(255) NOT NULL,
  location varchar(255) NOT NULL,
  owner_id int NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (owner_id) REFERENCES user(id)
);

CREATE TABLE book (
  id int NOT NULL AUTO_INCREMENT,
  title varchar(255) NOT NULL,
  author varchar(255) NOT NULL,
  bookshelf_id int NOT NULL,
  customer_id int,
  PRIMARY KEY (id),
  FOREIGN KEY (bookshelf_id) REFERENCES bookshelf(id),
  FOREIGN KEY (customer_id) REFERENCES user(id)
);
