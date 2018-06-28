// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {

// Your code goes here!
      $('#sizePicker').submit(function(e){
        // prevent this form from being submitted
        e.preventDefault(e);

        // get grid height
        const height = $('#inputHeight').val();

        // get grid width
        const width = $('#inputWeight').val();

        // build table rows from grid width
        let table_row = '<tr>' + '<td class="cell"></td>'.repeat(width) + '</tr>';

        // build table height from table row  and grid height
        let table_size = table_row.repeat(height);

        // insert table content into table element with ID of pixelCanvas
        $('#pixelCanvas').html(table_size);
    });
}

$(document).ready(function(){

   // jQuery methods go here...
   makeGrid();
   $('#pixelCanvas').on('click', '.cell', function() {
     let current_cell_style =   $(this).css("background-color");
     const colorPicker = $('#colorPicker').val();
     if( current_cell_style  == 'rgba(0, 0, 0, 0)') {
       $(this).css("background-color", colorPicker);
     }
     else {
       $(this).css("background-color", 'transparent');
     }
    });

});
