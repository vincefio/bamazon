var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Superman1",
  database: "bamazon"
});

connection.connect(function(err) {
  // console.log('working');
  if (err) throw err;
  // console.log("connected as id " + connection.threadId);

  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    // console.log(res);
      console.log("Items For Sale");
      displayItems(res);
      firstPrompt(res);
      //function to display all information about product picked
    
  });

});


function displayItems(res){
   for(var i = 0; i < res.length; i++){
        // console.log("ID: " + res[i].item_id + " Product: " + res[i].product_name + "   Price: " + res[i].price);
        console.log("ID: " + res[i].item_id);
        console.log("Product: " + res[i].product_name);
        console.log("Price: " + res[i].price);
      }
}

function firstPrompt(res){
  inquirer.prompt([
      {
        type: "input",
        name: "cartID",
        message: "ENTER ID OF DESIRED ITEM?"
      },
    ]).then(function(user){
        console.log('You have selected: ' + res[user.cartID - 1].product_name);
        // var userChoice = res[user.cartID - 1].product_name;
        var userChoice = res[user.cartID - 1];
        // console.log('user choice is ' + userChoice);
        secondPrompt(userChoice, res);
    });
}

function secondPrompt(input, res){
  inquirer.prompt([
    {
      type: "input",
      name: "userQuantity",
      message: "How many units of " + input.product_name + " would you like to purchase?"
    }
  ]).then(function(user){
    // console.log(user.userQuantity);
    var userQuantity = user.userQuantity;
    // console.log(userQuantity);
    // console.log(res[input].stock_quantity);
    // console.log(input.stock_quantity);
    if(userQuantity > input.stock_quantity){
      console.log('We do not have that many in stock');
      secondPrompt(input, res);
    }

    else{
      
      var newQuantity = input.stock_quantity - userQuantity;
      var totalPrice = userQuantity * input.price;
      console.log('You have purchased ' + userQuantity + ' ' + input.product_name + ' at a price of $' + totalPrice);
      // console.log('new quantity is ' + newQuantity);
      // console.log('user choice is ' + input.item_id);
       connection.query(
            "UPDATE products SET ? WHERE ?",
            [
              {
                stock_quantity: newQuantity
              },
              {
                item_id: input.item_id
              }
            ],
            function(error) {
              if (error) throw error;
              // console.log("Bid placed successfully!");
            }
          );
    }
  });
}