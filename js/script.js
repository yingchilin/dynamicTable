/*
File: script.js
GUI Assignment: Get user inputs from the form and use them to generate the multiplication table.
Yingchi Lin, UMass Lowell Computer Science, yingchi_Lin@student.uml.edu
Copyright (c) 2022 by Yingchi. All rights reserved. May be freely copied or excerpted for educational purposes with credit to the author.
June 15, 2022
*/

function multiplicationTable() {
    var table = "<table>";
    table='<table id="mtable">';
    table = table + "<tr><th></th>";
    
    // Get the input values
    var min_col= +document.getElementById("min_col").value;
    var max_col= +document.getElementById("max_col").value;
    var min_row= +document.getElementById("min_row").value;
    var max_row= +document.getElementById("max_row").value;

    const MASSAGE = "Please enter an interger between -50 to 50"
    
    // Unexpected input handling
    if (min_col==""|| min_col>50 || min_col< -50 || min_col % 1 != 0){
        document.getElementById("min_col_error").innerHTML = MASSAGE;
        return 0;
    } else if (max_col==""|| max_col>50 || max_col< -50 || max_col % 1 != 0){
        document.getElementById("max_col_error").innerHTML = MASSAGE;
        return 0;
    } else if (min_row==""|| min_row>50 || min_row< -50 || min_row % 1 != 0){
        document.getElementById("min_row_error").innerHTML = MASSAGE;
        return 0;
    } else if (max_row==""|| max_row>50 || max_row< -50 || max_row % 1 != 0){
        document.getElementById("max_row_error").innerHTML = MASSAGE;
        return 0;
    } else if (max_col < min_col) {
        document.getElementById("min_col_error").innerHTML = "The value of minimun column should be less than maximum column value.";
        return 0;
    } else if (max_row < min_row) {
        document.getElementById("min_row_error").innerHTML = "The value of minimun row should be less than maximum row value.";
        return 0;
    }

   
    // The header row
    for (var x=min_col; x<=max_col; x++) {
        table = table + "<th>" + x + "</th>";
    }
    table = table + "</tr>";

    // The body of the table
    for (y=min_row; y<=max_row; y++) {
         table = table + "<tr>"; // New row
         table = table + "<th>" + y + "</th>"; // Row index

    // The table cells
    for (x=min_col; x<=max_col; x++) {
        table = table + "<td>" + (x*y) + "</td>";
        }

    // The row ending tag
    table = table + "</tr>"; 
    }
    
    // Add the table to html
    table+='</table>';
    document.getElementById("result").innerHTML = table;
}
