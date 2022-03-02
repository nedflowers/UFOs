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