// Create function, pass data variable
function buildTable(data) {
// clear existing data
    tbody.html("");

// for loop, add argument to rep each row
data.forEach((dataRow) => {
// append row to table body
    let row = tbody.append("tr");

// ref one obj,  data  row as arg to add data to tr, for.each(val) is one obj per row
    Object.values(dataRow).forEach((val) => {
// create variable to append data cell (td)
    let cell = row.append("td");
// add vals
    cell.text(val);
            }
        );
    });
}

function handleClick() {
    // Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
  
     // Check to see if a date was entered and filter the
    // data using that date.
    if (date) {
      // Apply `filter` to the table data to only keep the
      // rows where the `datetime` value matches the filter value
      filteredData = filteredData.filter(row => row.datetime === date);
    }
  
     // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
    buildTable(filteredData);
  }
  
  // Attach an event to listen for the form button
  d3.selectAll("#filter-btn").on("click", handleClick);
  
  // Build the table when the page loads
  buildTable(tableData);