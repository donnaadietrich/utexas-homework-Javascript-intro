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
      return data.date === Filter;
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

renderTable()
}

// Render the table for the first time on page load
renderTable()

// // get the table element
// var $table = document.getElementById("myTable"),
// // number of rows per page
// $n = 100,
// // number of rows of the table
// $rowCount = $table.rows.length,
// // get the first cell's tag name (in the first row)
// $firstRow = $table.rows[0].firstElementChild.tagName,
// // boolean var to check if table has a head row
// $hasHead = ($firstRow === "TH"),
// // an array to hold each row
// $tr = [],
// // loop counters, to start count from rows[1] (2nd row) if the first row has a head tag
// $i,$ii,$j = ($hasHead)?1:0,
// // holds the first row if it has a (<TH>) & nothing if (<TD>)
// $th = ($hasHead?$table.rows[(0)].outerHTML:"");
// // count the number of pages
// var $pageCount = Math.ceil($rowCount / $n);
// // if we had one page only, then we have nothing to do ..
// if ($pageCount > 1) {
// 	// assign each row outHTML (tag name & innerHTML) to the array
// 	for ($i = $j,$ii = 0; $i < $rowCount; $i++, $ii++)
// 		$tr[$ii] = $table.rows[$i].outerHTML;
// 	// create a div block to hold the buttons
// 	$table.insertAdjacentHTML("afterend","<div id='buttons'></div");
// 	// the first sort, default page is the first one
// 	sort(1);
// }

// // ($p) is the selected page number. it will be generated when a user clicks a button
// function sort($p) {
// 	/* create ($rows) a variable to hold the group of rows
// 	** to be displayed on the selected page,
// 	** ($s) the start point .. the first row in each page, Do The Math
// 	*/
// 	var $rows = $th,$s = (($n * $p)-$n);
// 	for ($i = $s; $i < ($s+$n) && $i < $tr.length; $i++)
// 		$rows += $tr[$i];
	
// 	// now the table has a processed group of rows ..
// 	$table.innerHTML = $rows;
// 	// create the pagination buttons
// 	document.getElementById("buttons").innerHTML = pageButtons($pageCount,$p);
// 	// CSS Stuff
// 	document.getElementById("id"+$p).setAttribute("class","active");
// }


// // ($pCount) : number of pages,($cur) : current page, the selected one ..
// function pageButtons($pCount,$cur) {
// 	/* this variables will disable the "Prev" button on 1st page
// 	   and "next" button on the last one */
// 	var	$prevDis = ($cur == 1)?"disabled":"",
// 		$nextDis = ($cur == $pCount)?"disabled":"",
// 		/* this ($buttons) will hold every single button needed
// 		** it will creates each button and sets the onclick attribute
// 		** to the "sort" function with a special ($p) number..
// 		*/
// 		$buttons = "<input type='button' value='&lt;&lt; Prev' onclick='sort("+($cur - 1)+")' "+$prevDis+">";
// 	for ($i=1; $i<=$pCount;$i++)
// 		$buttons += "<input type='button' id='id"+$i+"'value='"+$i+"' onclick='sort("+$i+")'>";
// 	$buttons += "<input type='button' value='Next &gt;&gt;' onclick='sort("+($cur + 1)+")' "+$nextDis+">";
// 	return $buttons;
// }
