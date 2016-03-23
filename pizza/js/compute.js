//function to create random number between two values
function randoInRange(min, max) {
  var result = Math.floor(Math.random() * ((max-min)+1) + min);
  return result;
}

var pizzaCounter = 0;

//to test randoInRange() fucntion
console.log(randoInRange(1,3));

// function for deliveryInRange()
function deliveryInRange(minD, maxD) {
  var resultDeliveryInRange = Math.floor(Math.random() * ((maxD-minD)+1) + minD);
  return resultDeliveryInRange;
}

//to test deliveryInRange() function
console.log(deliveryInRange(12, 14));

//function for drivers needed based on deliveries given
function driversNeeded(deliveries) {
  var resultDriversNeeded = Math.ceil(deliveries/3);
  return resultDriversNeeded;
}

//testing the driversNeeded function
console.log(driversNeeded(36));

//object of pizzaStores
var pizzaStores = {
  //Objects within object location by store
    locationNames: ["beverton", "hillsboro", "downtown", "northEast", "clackamas", "pdxAirport"],
    colHeadings: ["time", "numberPizzas", "numberDevlieries", "numberOfDrivers"],
    minMaxPizza: [[0,4],[0,4],[0,4],[0,7],[0,7],[0,7],[2,15],[2,15],[2,15], [15,35],[15,35],[15,35],[12,31],[12,31],[12,31],[5,20],[5,20],[5,20]]
}

//arrays for the min and max of pizza and times

var minMaxPizza = [[0,4],[0,4],[0,4],[0,7], [0,7], [0,7],[2,15],[2,15],[2,15], [15,35],[15,35],[15,35],[12,31],[12,31],[12,31],[5,20],[5,20], [5,20]];
var timeStamps = ["8a-9a", "9a-10a","10a-11a", "11a-12p", "12p-1p", "1p-2p", "2p-3p", "3p-4p", "4p-5p", "5p-6p", "6p-7p", "7p-8p", "8p-9p", "9p-10p","10p-11p", "11p-12a","12a-1a", "1a-2a"];

// //testContent added to html to test my randoInRange() and deliveryInRange() functions
// var testRando = document.getElementById("test");
// testRando.textContent = "random number between 1 an 10 is " + randoInRange(1,10);
//
// var testDelivery = document.getElementById("testTwo");
// testDelivery.textContent = "random number between 20 and 30 is " + deliveryInRange(20,30);


//for loop to loop through the pizzaStores array
for (var k = 0; k < pizzaStores.locationNames.length; k++) {
//generateTable() function to generate tables.
  function generateTable() {
      //get the reference for the body
      var body = document.getElementsByTagName("body")[0];

      //creates a <table> element and a <tbody> element
      var tbl = document.createElement("table");
      var tblBody = document.createElement("tbody");

      //TABLEHEAD TITLES!
      //creating a <thead> and puts it in the <table>
      var tblHead = document.createElement("thead");
      tbl.appendChild(tblHead);

      //creates shopHead <tr> and puts it in <thead>
      var shopHead = document.createElement("tr");
      tblHead.appendChild(shopHead);

      //creates the <th> in the shopHead <tr>
      var shopLoc = document.createElement("th");
      //sets the colspan attribute of tbl to 4;
      shopLoc.setAttribute("colspan", "4");
      shopHead.appendChild(shopLoc);

      //pulls the text for the shopLoc <th> from the pizzaStores.locationNames array
      // console.log(r.locationNames[i]);
      var locName = document.createTextNode(pizzaStores.locationNames[k]);
      shopLoc.appendChild(locName);


      //creates the colHead <tr> and puts it in <thead>
      var colHead = document.createElement("tr");
      tblHead.appendChild(colHead);

      //creates the <th>s in the colHead <tr>
        for (var j = 0; j < pizzaStores.colHeadings.length; j++) {
          //creates the <th>s in the colHead <tr>
          var colTitle = document.createElement("th");
          colHead.appendChild(colTitle);

          //pulls the text for the colTitle <th> rom the pizzaStores.colHeadings array
          var colName = document.createTextNode(pizzaStores.colHeadings[j]);
          colTitle.appendChild(colName);

      }

      //creating all cells
      for (var i = 0; i < 18; i++) {
        //creates table row
        var row = document.createElement("tr");
        var timeCell = document.createElement("td");
        var timeCellText = document.createTextNode(timeStamps[i]);
        timeCell.appendChild(timeCellText);
        row.appendChild(timeCell);

        //code to generate number of pizzas
        var cell = document.createElement("td");
        var numberOfPizzas = randoInRange(minMaxPizza[i][0], minMaxPizza[i][1]);
        pizzaCounter = pizzaCounter + numberOfPizzas;
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
      // tbl.setAttribute("border", "10");
  }
  // call generateTable();
  generateTable();
  // my adding to DOM = pizzaCounter
  var counter = document.getElementById("totesPizzaBra");
  counter.textContent = pizzaCounter +  " happy Pizza Odysseys this week!";

}

// var counterIndexPage = document.getElementById('happyPizzaNumber');
// counterIndexPage.textContent = " Happy Pizza Odysseys This Week!";
