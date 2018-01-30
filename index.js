// // Get references to the tbody element, input fields and button
var $tbody = document.querySelector("tbody");
// var $dateInput = document.querySelector("#date");
// var $cityInput = document.querySelector("#city");
var $stateInput = document.querySelector("#state");
// var $countryInput = document.querySelector('#country');
// var $shapeInput = document.querySelector('#shape');
var $searchBtn = document.querySelector("#search");

// // Add an event listener to the searchButton, call handleSearchButtonClick when clicked
$searchBtn.addEventListener("click", handleSearchButtonClick);

// Set filteredData to ufoData initially
var filteredData = ufoData;

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

  // Set filteredData to an array of all ufo objects whose "state" matches the filter
  filteredData = ufoData.filter(function(ufo) {
    var ufoState = ufo.state.toLowerCase();

    // If true, add the address to the filteredData, otherwise don't add it to filteredData
    return ufoState === filteredData;
  });
  renderTable();
}

// Render the table for the first time on page load
renderTable();
