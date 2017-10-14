let mysql = require("mysql");
let inquirer = require("inquirer");

let connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "",
	database: "bamazon"
});

connection.connect(function(error) {
	if (error) throw error;
	console.log("connected as id " + connection.threadId + "\n");
	readData();
});

function readData() {
	let query = "SELECT id, product_name, price FROM products";
	connection.query(query, function(error, response){
		if (error) throw error;
		console.log(JSON.stringify(response, null, 4));
		userQuery();
	});
}

function userQuery() {
	inquirer
		.prompt([
			{
				type: "input",
				name: "id",
				message: "Please enter ID of the product."
			},
			{
				type: "input",
				name: "quantity",
				message: "Please enter quantity.",
			}
		])
		.then(function(answer){
			let query = "SELECT stock_quantity, product_sales FROM products WHERE id =" + answer.id;
			connection.query(query, function(error, response) {
				if (answer.quantity <= response[0].stock_quantity) {
						let query = "SELECT price FROM products WHERE ?";
						connection.query(query, {id: answer.id}, function(error, response) {
							console.log("Your total is: $" + (response[0].price * answer.quantity));
						})
						connection.query("UPDATE products SET ? WHERE ?", 
						[
						  {
							stock_quantity: response[0].stock_quantity - answer.quantity
						  },
						  {
						  	id: answer.id
						  },
						],
						  function(error, response) {
							// console.log("quantity was update");
						  }
						
						);
				}
				else {
					console.log("Insufficient quantity! There're only " + response[0].stock_quantity + " left.");
					
				}
				connection.end();
			})
		})
}





