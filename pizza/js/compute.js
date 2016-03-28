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

//calculates total pizza count for each store
function pizzaTotalCounter () {
    var totalPizzaCount = 0;
    for (var tt = 0; tt < pizzaArray.length; tt++) {
        totalPizzaCount += pizzaArray[tt].pizzaCount;
    }
    return totalPizzaCount;
}

function weeklyTimeSlotTotals() {
    var results = [];
    for (dd = 0; dd < 18; dd++) {
        results[dd] = 0; // initializing array to zero
    }
    for (ww in pizzaArray) {
        for (zz = 0; zz < 18; zz++) {
            results[zz] += pizzaArray[ww].numPizzaz[zz];
        }
    }
    // console.log(results);
    return results;
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
  this.numPizzaz = [];  // daily count per timeslot.
  // initializing slot pizza count total array to 0;
  for (pp = 0; pp < 18; pp++) {
      this.numPizzaz[pp]=0;
  }
  targetArray.push(this);
}
//constructor for beverton specific store
var bevertonStore = new pizzaStoreConstructor("beverton",

                                [[0,4],[0,4],[0,4], //pizzaRange
                                [0,7],[0,7],[0,7],
                                [2,15],[2,15],[2,15],
                                [15,35],[15,35],[15,35],
                                [12,31],[12,31],[12,31],
                                [5,20],[5,20],[5,20]],

                                [[0,4],[0,4],[0,4], //deliveriesRange
                                [0,4],[0,4],[0,4],
                                [1,4],[1,4],[1,4],
                                [3,8],[3,8],[3,8],
                                [5,12],[5,12],[5,12],
                                [6,11],[6,11],[6,11]],

                                0, //pizzaCount

                                pizzaArray);
//constructor for hillsboro specific store
var hillsboroStore = new pizzaStoreConstructor("hillsboro", [[1,3],[1,3],[1,3],
                                [5,9],[5,9],[5,9],
                                [2,13],[2,13],[2,13],
                                [18,32],[18,32],[18,32],
                                [1,3],[1,3],[1,3],
                                [8,20],[8,20],[8,20]], [[1,7],[1,7],[1,7],
                                [2,8],[2,8],[2,8],
                                [1,6],[1,6],[1,6],
                                [3,9],[3,9],[3,9],
                                [5,12],[5,12],[5,12],
                                [6,16],[6,16],[6,16]], 0, pizzaArray);

//constructor for the downtown specific store
var downtownStore = new pizzaStoreConstructor("downtown", [[0,4],[0,4],[0,4],
                                [0,7],[0,7],[0,7],
                                [2,15],[2,15],[2,15],
                                [10,26],[10,26],[10,26],
                                [8,22],[8,22],[8,22],
                                [0,2],[0,2],[0,2]], [[0,4],[0,4],[0,4],
                                [0,4],[0,4],[0,4],
                                [1,4],[1,4],[1,4],
                                [4,6],[4,6],[4,6],
                                [7,15],[7,15],[7,15],
                                [2,8],[2,8],[2,8]], 0, pizzaArray);
//constructor for the northeast specific store
var northeastStore = new pizzaStoreConstructor("northeast", [[0,4],[0,4],[0,4],
                                [0,7],[0,7],[0,7],
                                [5,15],[5,15],[5,15],
                                [25,39],[25,39],[25,39],
                                [22,36],[22,36],[22,26],
                                [5,21],[5,21],[5,21]], [[0,4],[0,4],[0,4],
                                [0,4],[0,4],[0,4],
                                [0,4],[0,4],[0,4],
                                [13,18],[13,18],[13,18],
                                [5,22],[5,22],[5,22],
                                [16,31],[16,31],[16,31]], 0, pizzaArray);

//constructor for the clackamas specific store
var clackamasStore = new pizzaStoreConstructor("clackamas", [[2,7],[2,7],[2,7],
                                [3,8],[3,8],[3,8],
                                [1,5],[1,5],[1,5],
                                [5,13],[5,13],[5,13],
                                [22,41],[22,41],[22,41],
                                [15,20],[15,20],[15,20]], [[3,5],[3,5],[3,5],
                                [3,9],[3,9],[3,9],
                                [1,4],[1,4],[1,4],
                                [2,4],[2,4],[2,4],
                                [15,42],[15,42],[15,42],
                                [6,21],[6,21],[6,21]], 0, pizzaArray);

//constructor for the pdxAirport specific store
var pdxAirportStore = new pizzaStoreConstructor("pdxAirport", [[2,7],[2,7],[2,7],
                                [3,8],[3,8],[3,8],
                                [1,5],[1,5],[1,5],
                                [5,13],[5,13],[5,13],
                                [22,41],[22,41],[22,41],
                                [15,20],[15,20],[15,20]], [[3,5],[3,5],[3,5],
                                [3,9],[3,9],[3,9],
                                [1,4],[1,4],[1,4],
                                [2,4],[2,4],[2,4],
                                [15,42],[15,42],[15,42],
                                [6,21],[6,21],[6,21]], 0, pizzaArray);

//var pizzaStores and var timeStamps are universal to the tables
//object of pizzaStores
var tableHeading = {
  //colHeadings
    colHeadings: ["time", "numberPizzas", "numberDevlieries", "numberOfDrivers",],

}

//array of times
var timeStamps = ["8a-9a", "9a-10a","10a-11a", "11a-12p", "12p-1p", "1p-2p", "2p-3p", "3p-4p", "4p-5p", "5p-6p", "6p-7p", "7p-8p", "8p-9p", "9p-10p","10p-11p", "11p-12a","12a-1a", "1a-2a"];

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
      shopLoc.setAttribute("colspan", "5");
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
        for (var j = 0; j < tableHeading.colHeadings.length; j++) {
          //creates the <th>s in the colHead <tr>
          var colTitle = document.createElement("th");
          colHead.appendChild(colTitle);

          //pulls the text for the colTitle <th> rom the pizzaStores.colHeadings array
          var colName = document.createTextNode(tableHeading.colHeadings[j]);
          colTitle.appendChild(colName);

      }

        //creating all cells
        for (var i = 0; i < 18; i++) {
            // initializing

          //creates table row

          var row = document.createElement("tr");
          var timeCell = document.createElement("td");
          var timeCellText = document.createTextNode(timeStamps[i]);
          timeCell.appendChild(timeCellText);
          row.appendChild(timeCell);

          //code to generate number of pizzas
          var cell = document.createElement("td");
          var numberOfPizzas = randoInRange(storeObject.minMaxPizza[i][0],storeObject.minMaxPizza[i][1]);
          storeObject.pizzaCount += numberOfPizzas;
          storeObject.numPizzaz[i] += numberOfPizzas;
          // this.numPizzaz.push(numberOfPizzas);
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
      //append the row that shows total

      //put the <tbody> in the <table>
      tbl.appendChild(tblBody);
      //appends <table> into <body>
      body.appendChild(tbl);
      //sets the border attribute of the tbl to 2;
      // tbl.setAttribute("border", "10");

      //append for table footer
      var tblFoot = document.createElement("tfoot"); // creates <thead> and puts it in <table>
      tbl.appendChild(tblFoot);

      var totalFoot = document.createElement("tr"); // creates the shopHead <tr> and puts it in <thead>
      tblFoot.appendChild(totalFoot);

      var storeTotal = document.createElement("th"); // creates the <th> in the shopHead <tr>
      storeTotal.setAttribute("colspan", "4"); // sets the colspan attribute of tbl to 4;
      totalFoot.appendChild(storeTotal);

      var total = document.createTextNode("This Store's Daily Total: " + storeObject.pizzaCount);
      storeTotal.appendChild(total);
  }

for (var qq = 0; qq < pizzaArray.length; qq++) {
  generateTable(pizzaArray[qq]);
}



// my adding to DOM = pizzaCounter
var counter = document.getElementById("totesPizzaBra");
counter.textContent =   pizzaTotalCounter() + " happy Pizza Odysseys this week!";

var weekOfPizza = document.getElementById('weeklies');
weekOfPizza.textContent = weeklyTimeSlotTotals() + " are the weekly time slot total number of pizzas sold";

// weekOfPizza.textContent = weeklyTimeSlotTotals;

//to test pizzaTotalCounter
// console.log('total pizzas == ' ,pizzaTotalCounter());




// var counterB = document.getElementById("beverton");
// counterB.textContent = weeklyTimeSlotTotals

// Event hanlder for the form button
var submitStoreName = document.getElementById('submitButton');

submitStoreName.addEventListener("click", function () {

    //gets new name from the form input
    var newStoreName = document.getElementById('storeName').value;

    //empty array to store in the new store data
    var newStoreArray = [];

    //processing window to then push after eventListener
    newStoreArray.push(newStoreName);    // newStoreArray[0]
    newStoreArray.push(pizzaArray[0].minMaxPizza);    // newStoreArray[1]
    newStoreArray.push(pizzaArray[0].minMaxDeliveries);    // newStoreArray[2]
    newStoreArray.push(pizzaArray[0].pizzaCount);    // newStoreArray[3]
    newStoreArray.push(pizzaArray);    // newStoreArray[4]


    //make new object with data from newStoreArray --> which was stolen from beverton data
    var userInputStore = new pizzaStoreConstructor(newStoreArray[0], newStoreArray[1], newStoreArray[2], newStoreArray[3], newStoreArray[4]);

    pizzaArray.push(userInputStore);

    console.log(newStoreArray);

    generateTable(userInputStore);


    console.log (newStoreArray);
    // generateTable(bevertonStore);
  //call constructor with newStore informtion inside
  //var StJohns = new pizzaStoreConstructor(newStoreArray[0], newStoreArray[1]....);
  //then generateTable(StJohns);
});
