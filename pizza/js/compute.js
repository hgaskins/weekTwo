function randoInRange(min, max) {
  var result = Math.floor(Math.random() * ((max-min)+1) + min);
  return result;

}

var minMaxPizza = [[0,4],[0,7]];
var timeStamps = ["8a-9a", "9a-10a"];


var testRando = document.getElementById("test");
testRando.textContent = "random number between 1 an 10 is " + randoInRange(1,10);

function generateTable() {
  //get the reference for the body
  var body = document.getElementsByTagName("body")[0];

  //creates a <table> element and a <tbody> element
  var tbl = document.createElement("table");
  var tblBody = document.createElement("tbody");
  // var tblHead = document.createElement("th");

  //creating all cells
  for (var i = 0; i < 2; i++) {
    //creates table row
    var row = document.createElement("tr");
    var timeCell = document.createElement("td");
    var timeCellText = document.createTextNode(timeStamps[i]);
    timeCell.appendChild(timeCellText);
    row.appendChild(timeCell);

    for (var j = 0; j < 2; j++) {
      //Create a <td> element and a text node, make the text
      //node the contents of the <td>, and put the <td> at
      //the end of the table row
      var cell = document.createElement("td");
      var cellText = document.createTextNode(randoInRange(minMaxPizza[0][0], minMaxPizza[0][1]));
      cell.appendChild(cellText);
      row.appendChild(cell);
    }

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
