
$(function () {
    $('#helpModal').modal(options);
})

$(function () {
    $('#urgentModal').modal(options);
})

$(document).ready(function(){
    $(window).on("scroll", function(){
       $('[data-toggle="tooltip"]').tooltip().mouseover();
       setTimeout(function(){ $('[data-toggle="tooltip"]').tooltip('hide'); }, 1000);
    });
});
