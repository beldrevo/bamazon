# Best Buy CLI app

#### Technologies/tools used: JavaScript, MySQL, Inquirer

Best Buy CLI app is a back end command line interface application built with JavaScript. It allows interact with sql database in 3 different modes: Customer, Manager or Supervisor.

### Instructions:

1. Clone github repo

2. Install packages. Mysql package is predefined therefore inside cloned repo install inquirer packege running following command:
```
npm install inquirer
```
3. Run ```node bamazonCustomer.js``` command if you'd like to start Customer mode. Customer mode allows to see products database, select product and quantity. Application counts the total cost and counts down quantity in database.
4. Run ```node bamazonManager.js``` command if you'd like to start Manager mode. Manager mode allows to see list of products, to see low quantity inventory, update product quantity and add new products into database.
5. Supervisor mode is under construction now ...


