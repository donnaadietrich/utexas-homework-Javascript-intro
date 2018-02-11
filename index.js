// // Get references to the tbody element, input fields and button
var $tbody = document.querySelector("tbody");
var $dateInput = document.querySelector("#date");
var $cityInput = document.querySelector("#city");
var $stateInput = document.querySelector("#state");
var $countryInput = document.querySelector('#country');
var $shapeInput = document.querySelector('#shape');
var $searchBtn = document.querySelector("#search");

// // Add an event listener to the searchButton, call handleSearchButtonClick when clicked
$searchBtn.addEventListener("click", handleSearchButtonClick);

// Set filteredData to ufoData initially
var filteredData = dataSet;

// renderTable renders the filteredData to the tbody
function renderTable() {
  $tbody.innerHTML = "";
  for (var i = 0; i < filteredData.length; i++) {
    // Get get the current ufo object and its fields
    var ufos = filteredData[i];
    var fields = Object.keys(ufos);
    // Create a new row in the tbody, set the index to be i + startingIndex
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      // For every field in the ufo object, create a new cell at set its inner text to be the current value at the current ufo object's field
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = ufos[field];
    }
  }
}

function handleSearchButtonClick() {
  // Format the user's search by removing leading and trailing whitespace, lowercase the string
  var filterState = $stateInput.value.trim().toLowerCase();

  // Set filteredAddresses to an array of all addresses whose "state" matches the filter
  filteredData = dataSet.filter(function(address) {
    var addressState = address.state.toLowerCase();

    // If true, add the address to the filteredAddresses, otherwise don't add it to filteredAddresses
    return addressState === filterState;
  });
  renderTable();
}

// Render the table for the first time on page load
renderTable()
 
// function pageButtons(pageCount,pageNum) {
//     var prevDis = (pageNum == 1)?"disabled":"";
//     var nextDis = (pageNum == pageCount)?"disabled":"";

    
//     if(pageCount <= 10){
//         buttons = "<input type='button' id='id1' value='1' class='nums' onclick='pageTable(1)'>";
//         for (i=2; i<=pageCount;i++){
//             buttons += "<input type='button' class='nums' id='id"+i+"'value='"+i+"' onclick='pageTable("+i+")'>";
//         }
//     } else if (pageNum>=pageCount-9 && pageNum<=pageCount){
//         buttons = "<input type='button' value='First' class='ends' onclick='pageTable(1)'>";
//         buttons += "<input type='button' class='arrows' value='&lt;' onclick='pageTable("+(pageNum - 1)+")' "+prevDis+">";
        
//         for (i=pageCount-9; i<=pageCount;i++){
//             buttons += "<input type='button' class='nums' id='id"+i+"'value='"+i+"' onclick='pageTable("+i+")'>";
//         } 
//     } else {
//         buttons = "<input type='button' value='First' class='ends' background:black; color:lightgreen;' onclick='pageTable(1)'>";
//         buttons += "<input type='button' class='arrows' value='&lt;' onclick='pageTable("+(pageNum - 1)+")' "+prevDis+">";
        
//         for (i=pageNum; i<=pageNum+9; i++){
//             buttons += "<input type='button' class='nums' id='id"+i+"'value='"+i+"' onclick='pageTable("+i+")'>";
//             }

//         buttons += "<input type='button' class='arrows' value='&gt;' onclick='pageTable("+(pageNum + 1)+")' "+nextDis+">";
//         buttons += "<input type='button' class='ends' value='Last' onclick='pageTable("+pageCount+")'>";
//     }

    
    
//     return buttons;
// };