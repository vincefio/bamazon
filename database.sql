DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
	item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(50) NOT NULL,
    department_name VARCHAR(50) NOT NULL,
    price INT,
    stock_quantity INT,
    PRIMARY KEY (item_id)
);

SELECT * FROM products;

INSERT INTO product(product_name, department_name, price, stock_quantity)
VALUES ("rubber duck", "toys", 1, 44),
("computer mouse", "electronic", 19, 60),
("nike shoes", "athletic", 100, 50),
("titanium mug", "household", 19, 3),
("e-cig vape", "electronic", 40, 250),
("Crimshaw T-shirt", "clothing", 40, 250),
("Crimshaw T-shirt", "clothing", 40, 250),
("Crimshaw T-shirt", "clothing", 40, 250),
("Computer Mouse", "electronics", 19, 82); 