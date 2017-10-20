DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
    id int PRIMARY KEY AUTO_INCREMENT not null,
    product_name VARCHAR(50) not null,
    department_name VARCHAR(50) not null,
    price int not null,
    stock_quantity int(10) not null,
    product_sales int null
);

CREATE TABLE departments (
    department_id int PRIMARY KEY AUTO_INCREMENT not null,
    department_name VARCHAR(50) not null,
    over_head_costs int not null,
    product_sales int null
);
    
    INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("iMAC 21.5IN 2.3GHZ 1TB", "electronics", 1099, 4);
    INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("iMAC 21.5IN 3.0GHZ 1TB", "electronics", 1299, 5);
    INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("iMAC 27IN 3.5GHZ 1TB", "electronics", 1799, 5);
    INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("iMAC 27IN 3.8GHZ 2TB", "electronics", 2299, 5);
    INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("MB Air 1.8GHZ 128Gb", "sales", 999, 4);
    INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("MB Air 2.3GHZ 256Gb", "sales", 1199, 5);
    INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("MB Pro 13IN 2,3GHZ 128Gb", "sales", 1299, 5);
    INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("MB Pro 13IN 2,3GHZ 256Gb", "sales", 1499, 5);
    INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("MB Pro 15IN 2,8GHZ 256Gb", "sales", 2399, 6);
    INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("MB Pro 15IN 2,9GHZ 512Gb", "sales", 2799, 7);
    INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("MB 12IN 1.2GHz 256Gb", "refurbished", 1299, 3);
    INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("MB 12IN 1.9GHz 512Gb", "refurbished", 1299, 2);
    
    INSERT INTO departments (department_name, over_head_costs, product_sales) VALUES ("sales", 30000, 0);
    INSERT INTO departments (department_name, over_head_costs, product_sales) VALUES ("electronics", 30000, 0);
    INSERT INTO departments (department_name, over_head_costs, product_sales) VALUES ("refurbished", 7000, 0);
    
