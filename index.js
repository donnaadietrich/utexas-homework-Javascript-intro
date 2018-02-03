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

function handleSearchButtonClick(event) {
  // prevent page from refreshing
  event.preventDefault();

  var dateFilter = d3.select("#dateInput").node().value;
  d3.select("dateInput").html("");
  if  (dateFilter){
    filteredData = filteredData.filter(function(data) {
      return data.country === countryFilter;
    });

  var cityFilter = d3.select("#cityInput").node().value;
  d3.select("cityInput").html("");
  if  (cityFilter){
    filteredData = filteredData.filter(function(data) {
      return data.city === cityFilter;
    });
 
  var stateFilter = d3.select("#stateInput").node().value;
  d3.select("stateInput").html("");
  if  (stateFilter){
    filteredData = filteredData.filter(function(data) {
      return data.state === stateFilter;
    });

  var countryFilter = d3.select("#countryInput").node().value;
  d3.select("countryInput").html("");
  if  (countryFilter) {
    filteredData = filteredData.filter(function(data){
      return data.country === countryFilter;
    });

  var shapeFilter = d3.select("#shapeInput").node().value;
  d3.select("shapeInput").html("");
  if  (shapeFilter) {
    filteredData = filteredData.filter(function(data){
      return data.shape === shapeFilter;
    });
  };

renderTable();
}

// Render the table for the first time on page load
renderTable();