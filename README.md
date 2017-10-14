# **bamazon application**

## Bamazon is a back end CLI application built on JavaScript. It allows interract with sql database through the CLI chosing Customer, Manager or Supervisor mode.

You can use this link (https://docs.google.com/presentation/d/1aQXVM0rTNVn2oxEOfi2w8RtwnBDXJE1yIaAGUOmGMGw/edit?usp=sharing) to see presentation how it works.

## Instructions:

1. Clone github repo

2. Install packages. Mysql package is predefined therefore inside cloned repo install inquirer packege running following command in terminal:
```
npm install inquirer
```
3. Run ```node bamazonCustomer.js``` command if you'd like to start Customer mode. Customer mode allows to see products database, select product and quantity. Application counts the total cost and counts down quantity in database.
4. Run ```node bamazonManager.js``` command if you'd like to start Manager mode. Manager mode allows to see list of products, to see low quantity inventory, update product quantity and add new products into database.
5. Supervisor mode is under construction now ...


