$(document).ready(function () {
    $('.data-table').DataTable({
        paging: false,
        searching: false,
        select: true,
        scrollX: true,
    });
});

$(function(){
    // bind change event to select
    $('#dynamic_select').on('change', function () {
        var url = $(this).val(); // get selected value
        if (url) { // require a URL
            window.location = url; // redirect
        }
        return false;
    });
  });