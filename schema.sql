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
VALUES ("Crimshaw T-shirt", "clothing", 40, 250),
("Crimshaw T-shirt", "clothing", 40, 250),
("Crimshaw T-shirt", "clothing", 40, 250),
("Crimshaw T-shirt", "clothing", 40, 250),
("Crimshaw T-shirt", "clothing", 40, 250),
("Crimshaw T-shirt", "clothing", 40, 250),
("Crimshaw T-shirt", "clothing", 40, 250),
("Crimshaw T-shirt", "clothing", 40, 250),
("Computer Mouse", "electronics", 19, 82); 