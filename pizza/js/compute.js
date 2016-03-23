//function to create random number between two values
function randoInRange(min, max) {
  var result = Math.floor(Math.random() * ((max-min)+1) + min);
  return result;
}

// function for deliveryInRange
function deliveryInRange(minD, maxD) {
  var result = Math.floor(Math.random() * ((maxD-minD)+1) + minD);
  return result;
}

//function for drivers needed based on deliveries given
function driversNeeded(deliveries) {
  var result = Math.ceil(deliveries/3);
  return result;
}
//testing the driversNeeded function
console.log(driversNeeded(36));

// //Objects by store
// var beverton = {
//   //generate heading
//   generateTable(beverton);
//
// }
//
// var hillsboro = {
//
// }
//
// var downtown = {
//
// }
//
// var northEast = {
//
// }
//
// var clackamas = {
//
// }
//
// var pdxAirport = {
//
// }

//arrays for the min and max of pizza and times

var minMaxPizza = [[0,4],[0,4],[0,4],[0,7], [0,7], [0,7],[2,15],[2,15],[2,15], [15,35],[15,35],[15,35],[12,31],[12,31],[12,31],[5,20],[5,20], [5,20]];
var timeStamps = ["8a-9a", "9a-10a","10a-11a", "11a-12p", "12p-1p", "1p-2p", "2p-3p", "3p-4p", "4p-5p", "5p-6p", "6p-7p", "7p-8p", "8p-9p", "9p-10p","10p-11p", "11p-12a","12a-1a", "1a-2a"];

//testContent added to html to test my randoInRange() and deliveryInRange() functions
var testRando = document.getElementById("test");
testRando.textContent = "random number between 1 an 10 is " + randoInRange(1,10);

var testDelivery = document.getElementById("testTwo");
testDelivery.textContent = "random number between 20 and 30 is " + deliveryInRange(20,30);

//generateTable() function to generate tables.
function generateTable() {
  //get the reference for the body
  var body = document.getElementsByTagName("body")[0];

  //creates a <table> element and a <tbody> element
  var tbl = document.createElement("table");
  var tblBody = document.createElement("tbody");
  // var tblHead = document.createElement("th");

  //creating all cells
  for (var i = 0; i < 18; i++) {
    //creates table row
    var row = document.createElement("tr");
    var timeCell = document.createElement("td");
    var timeCellText = document.createTextNode(timeStamps[i]);
    timeCell.appendChild(timeCellText);
    row.appendChild(timeCell);

    // for (var j = 0; j < 3; j++) {
    //   //Create a <td> element and a text node, make the text
    //   //node the contents of the <td>, and put the <td> at
    //   //the end of the table row
    //   var cell = document.createElement("td");
    //   var cellText = document.createTextNode(randoInRange(minMaxPizza[j][0], minMaxPizza[j][1]));
    //   cell.appendChild(cellText);
    //   row.appendChild(cell);
    // }

    //code to generate number of pizzas
    var cell = document.createElement("td");
    var numberOfPizzas = randoInRange(minMaxPizza[i][0], minMaxPizza[i][1]);
    var cellText = document.createTextNode(numberOfPizzas);
    cell.appendChild(cellText);
    row.appendChild(cell);


    //code to generate number of deliveries
    var cell = document.createElement("td");
    var numberOfDeliveries = randoInRange(0, numberOfPizzas);
    var cellText = document.createTextNode(numberOfDeliveries);
    cell.appendChild(cellText);
    row.appendChild(cell);

    //code to generate number of drivers
    var cell = document.createElement("td");
    var cellText = document.createTextNode(driversNeeded(numberOfDeliveries));
    cell.appendChild(cellText);
    row.appendChild(cell);

    //add the row to the end of the table body
    tblBody.appendChild(row);
}
  // //add in my table headers to do later
  // tblHead = document.createElement();
  //put the <tbody> in the <table>
  tbl.appendChild(tblBody);
  //appends <table> into <body>
  body.appendChild(tbl);
  //sets the border attribute of the tbl to 2;
  tbl.setAttribute("border", "2");
}
generateTable();
