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
	actionList();
});

function actionList() {
	inquirer.prompt(
		{
			type: "list",
			name: "action",
			message: "What would you like to do?",
			choices: [
				"View Products for Sale",
				"View Low Inventory",
				"Add to Inventory",
				"Add New Product"
			]
	})
	.then(function(answer) {
		switch (answer.action) {
			case "View Products for Sale":
				viewList();
				// nextStep();
				break;

			case "View Low Inventory":
				viewInv();
				// nextStep();
				break;

			case "Add to Inventory":
				addInv();
				// nextStep();
				break;

			case "Add New Product":
				addNew();
				// nextStep();
				break;
		}
	})
}

function nextStep() {
	inquirer.prompt(
		{
			type: "input",
			name: "action",
			message: "Would you like to continue? (yes/no)",
	})
	.then(function(answer) {
		switch (answer.action) {
			case "yes":
				actionList();
				break;

			case "no":
				connection.end();
				break;
			default:
				connection.end();
		}
	})
}

function viewList() {
	let query = "SELECT id, product_name, price, stock_quantity FROM products";
	connection.query(query, function(error, response){
		if (error) throw error;
		console.log(JSON.stringify(response, null, 4));
		nextStep();
	});
}

function viewInv() {
	let query = "SELECT id, product_name, price, stock_quantity FROM products";
	connection.query(query, function(error, response) {
		if (error) throw error;
		for (var i = 0; i < response.length; i++) {
			if (response[i].stock_quantity < 5) {
				console.log("\n" + JSON.stringify(response[i], null, 4));
			}
		}
		console.log("nothing less than 5");
		nextStep();
	})
}

function addInv() {
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
			let query = "SELECT stock_quantity FROM products WHERE id =" + answer.id;
			connection.query(query, function(error, response) {
				if (error) throw error;
				// console.log(response[0].stock_quantity);
				connection.query("UPDATE products SET ? WHERE ?", 
					[{
						stock_quantity: response[0].stock_quantity + parseInt(answer.quantity)
					  },
					  {
					  	id: answer.id
					  }
					],
					function(error, response) {
						// console.log(response);
						console.log(response.affectedRows + " product quantity updated!\n");
						nextStep();
					}
				)
			})
		});
}

function addNew() {
	inquirer
		.prompt([
			{
				type: "input",
				name: "pr_name",
				message: "Please enter name of the product."
			},
			{
				type: "input",
				name: "department",
				message: "Please enter department name.",
			},
			{
				type: "input",
				name: "price",
				message: "Please enter price.",
			},
			{
				type: "input",
				name: "quantity",
				message: "Please enter quantity.",
			}
		])
		.then(function(answer){
			let query = "INSERT INTO products SET ?";
			connection.query(query, 
			{
				product_name: answer.pr_name,
				department_name: answer.department,
				price: answer.price,
				stock_quantity: answer.quantity
			},
			function(error, response) {
				if (error) throw error;
				// console.log(response);
				console.log("product inserted!\n");
				nextStep();
			})
		});
}