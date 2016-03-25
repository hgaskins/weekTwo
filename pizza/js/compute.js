//function to create random number between two values
function randoInRange(min, max) {
  var result = Math.floor(Math.random() * ((max-min)+1) + min);
  return result;
}

//function for drivers needed based on deliveries given
function driversNeeded(deliveries) {
  var resultDriversNeeded = Math.ceil(deliveries/3);
  return resultDriversNeeded;
}



//testing the driversNeeded function
console.log(driversNeeded(36));

//code block to add in constructor function along with
//store constructors
//empty Array
var pizzaArray = [];

//contructor function to create a pizzaStores template
function pizzaStoreConstructor(loc, pizzaRange, deliveriesRange, pizzaCount, targetArray) {
  this.loc = loc;
  this.minMaxPizza = pizzaRange;
  this.minMaxDeliveries = deliveriesRange;
  this.pizzaCount = 0;
  targetArray.push(this);
}
//constructor for beverton specific store
var bevertonStore = new pizzaStoreConstructor("beverton", [[0,4],[0,4],[0,4],
                                [0,7],[0,7],[0,7],
                                [2,15],[2,15],[2,15],
                                [15,35],[15,35],[15,35],
                                [12,31],[12,31],[12,31],
                                [5,20],[5,20],[5,20]], [[0,4],[0,4],[0,4],
                                [0,4],[0,4],[0,4],
                                [1,4],[1,4],[1,4],
                                [3,8],[3,8],[3,8],
                                [5,12],[5,12],[5,12],
                                [6,11],[6,11],[6,11]], 0, pizzaArray);
// //constructor for hillsboro specific store
// var hillsboroStore = new pizzaStoreConstructor("hillsboro", [[1,3],[1,3],[1,3],
//                                 [5,9],[5,9],[5,9],
//                                 [2,13],[2,13],[2,13],
//                                 [18,32],[18,32],[18,32],
//                                 [1,3],[1,3],[1,3],
//                                 [8,20],[8,20],[8,20]], [[1,7],[1,7],[1,7],
//                                 [2,8],[2,8],[2,8],
//                                 [1,6],[1,6],[1,6],
//                                 [3,9],[3,9],[3,9],
//                                 [5,12],[5,12],[5,12],
//                                 [6,16],[6,16],[6,16]], 0, pizzaArray);
//
// //constructor for the downtown specific store
// var downtownStore = new pizzaStoreConstructor("downtown", [[0,4],[0,4],[0,4],
//                                 [0,7],[0,7],[0,7],
//                                 [2,15],[2,15],[2,15],
//                                 [10,26],[10,26],[10,26],
//                                 [8,22],[8,22],[8,22],
//                                 [0,2],[0,2],[0,2]], [[0,4],[0,4],[0,4],
//                                 [0,4],[0,4],[0,4],
//                                 [1,4],[1,4],[1,4],
//                                 [4,6],[4,6],[4,6],
//                                 [7,15],[7,15],[7,15],
//                                 [2,8],[2,8],[2,8]], 0, pizzaArray);
// //constructor for the northeast specific store
// var northeastStore = new pizzaStoreConstructor("northeast", [[0,4],[0,4],[0,4],
//                                 [0,7],[0,7],[0,7],
//                                 [5,15],[5,15],[5,15],
//                                 [25,39],[25,39],[25,39],
//                                 [22,36],[22,36],[22,26],
//                                 [5,21],[5,21],[5,21]], [[0,4],[0,4],[0,4],
//                                 [0,4],[0,4],[0,4],
//                                 [0,4],[0,4],[0,4],
//                                 [13,18],[13,18],[13,18],
//                                 [5,22],[5,22],[5,22],
//                                 [16,31],[16,31],[16,31]], 0, pizzaArray);
//
// //constructor for the clackamas specific store
// var clackamasStore = new pizzaStoreConstructor("clackamas", [[2,7],[2,7],[2,7],
//                                 [3,8],[3,8],[3,8],
//                                 [1,5],[1,5],[1,5],
//                                 [5,13],[5,13],[5,13],
//                                 [22,41],[22,41],[22,41],
//                                 [15,20],[15,20],[15,20]], [[3,5],[3,5],[3,5],
//                                 [3,9],[3,9],[3,9],
//                                 [1,4],[1,4],[1,4],
//                                 [2,4],[2,4],[2,4],
//                                 [15,42],[15,42],[15,42],
//                                 [6,21],[6,21],[6,21]], 0, pizzaArray);
//
// //constructor for the pdxAirport specific store
// var pdxAirportStore = new pizzaStoreConstructor("pdxAirport", [[2,7],[2,7],[2,7],
//                                 [3,8],[3,8],[3,8],
//                                 [1,5],[1,5],[1,5],
//                                 [5,13],[5,13],[5,13],
//                                 [22,41],[22,41],[22,41],
//                                 [15,20],[15,20],[15,20]], [[3,5],[3,5],[3,5],
//                                 [3,9],[3,9],[3,9],
//                                 [1,4],[1,4],[1,4],
//                                 [2,4],[2,4],[2,4],
//                                 [15,42],[15,42],[15,42],
//                                 [6,21],[6,21],[6,21]], 0, pizzaArray);


//object of pizzaStores
var pizzaStores = {
  //Objects within object location by store
    locationNames: ["beverton", "hillsboro", "downtown", "northEast", "clackamas", "pdxAirport"],
    colHeadings: ["time", "numberPizzas", "numberDevlieries", "numberOfDrivers"],
    //initial minMaxPizza array.... not sure if I need this anymore....
    // minMaxPizza: [[0,4],[0,4],[0,4],
    //               [0,7],[0,7],[0,7],
    //               [2,15],[2,15],[2,15],
    //               [15,35],[15,35],[15,35],
    //               [12,31],[12,31],[12,31],
    //               [5,20],[5,20],[5,20]]
}

//arrays for the min and max of pizza and times
//previous static array for pizza ranges
// var minMaxPizza = [[0,4],[0,4],[0,4],
//                     [0,7],[0,7],[0,7],
//                     [2,15],[2,15],[2,15],
//                     [15,35],[15,35],[15,35],
//                     [12,31],[12,31],[12,31],
//                     [5,20],[5,20], [5,20]];
var timeStamps = ["8a-9a", "9a-10a","10a-11a", "11a-12p", "12p-1p", "1p-2p", "2p-3p", "3p-4p", "4p-5p", "5p-6p", "6p-7p", "7p-8p", "8p-9p", "9p-10p","10p-11p", "11p-12a","12a-1a", "1a-2a"];

// //testContent added to html to test my randoInRange() and randoInRange() functions
// var testRando = document.getElementById("test");
// testRando.textContent = "random number between 1 an 10 is " + randoInRange(1,10);
//
// var testDelivery = document.getElementById("testTwo");
// testDelivery.textContent = "random number between 20 and 30 is " + randoInRange(20,30);



//generateTable() function to generate tables.
function generateTable(storeObject) {
      var pizzaCount = 0;

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
      // // console.log(r.locationNames[i]);
      var locName = document.createTextNode(storeObject.loc);
      shopLoc.appendChild(locName);
      //test for storeObject.loc display
      console.log(storeObject.loc);


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
          var numberOfPizzas = randoInRange(storeObject.minMaxPizza[i][0],storeObject.minMaxPizza[i][1]);
          storeObject.pizzaCount = storeObject.pizzaCount + numberOfPizzas;
          console.log(storeObject.pizzaCount);
          var cellText = document.createTextNode(numberOfPizzas);
          cell.appendChild(cellText);
          row.appendChild(cell);


          //code to generate number of deliveries
          var cell = document.createElement("td");
          var numberOfDeliveries = randoInRange(storeObject.minMaxDeliveries[i][0], storeObject.minMaxDeliveries[i][1]);
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


//for loop to loop through the pizzaStores array---> now unnecessary??
// for (var k = 0; k < pizzaStores.locationNames.length; k++) {
//   //to test pizzaArray[k]
//   // console.log(pizzaArray[k].loc);
//
//   // call generateTable();
// }



// my adding to DOM = pizzaCounter
var counter = document.getElementById("totesPizzaBra");
counter.textContent = pizzaStoreConstructor.pizzaCount + " happy Pizza Odysseys this week!";




// for (var zz = 0; zz < pizzaArray.length; zz++) {
//     console.log(pizzaArray[zz].loc);
//   for (var ii = 0; ii < pizzaArray[zz].minMaxPizza.length; ii++) {
//     console.log('min = ' +    pizzaArray[zz].minMaxPizza[ii][0] + '  max = ' + pizzaArray[zz].minMaxPizza[ii][1]);
//   }
//   generateTable(pizzaArray[zz].minMaxPizza[0][0],pizzaArray[zz].minMaxPizza[0][1]);
// }

for (var qq = 0; qq < pizzaArray.length; qq++) {
  generateTable(pizzaArray[qq]);
}
