$(document).on('turbolinks:load', function(){
    
    $('#button-alert').click(function(){
        $('#button-alert').fadeTo(150,0.5).fadeOut(1000);
    });

})