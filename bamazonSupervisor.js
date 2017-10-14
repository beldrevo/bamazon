let mysql = require("mysql");

let inquirer = require("inquirer");

connection.connect(function(error) {
	if (error) throw error;
	console.log("connected as id " + connection.threadId + "\n");
	actionList();
})

function actionList() {
	inquirer
		.prompt(
		{
			type: list,
			name: action,
			message: "What would you like to do?",
			choices: [
				"View Product Sales by Department",
				"Create New Department"
			]
		})
		.then(function(answer){
			switch (answer.action) {
				case "View Product Sales by Department":
					viewPr();
					break;
				case "Create New Department":
					createNewDep();
					break;
			}
		})
}

function viewPr() {
	let query = "SELECT id, product_name, price, stock_quantity FROM products";
	connection.query(query, function(error, response){
		if (error) throw error;
		console.log(JSON.stringify(response, null, 4));
}

function createNewDep() {
	let query = ""

}