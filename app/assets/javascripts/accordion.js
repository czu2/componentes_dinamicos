$(document).on('turbolinks:load', function(){

    $('#collapseOne').show();
    $('#collapseTwo').hide();
    $('#collapseThree').hide();

    $('#collapseOne-b').click(function (){
        $('#collapseOne').show('slow');
        $('#collapseTwo').slideUp('slow');
        $('#collapseThree').slideUp('slow');
    })

    $('#collapseTwo-b').click(function (){
        $('#collapseOne').slideUp('slow');
        $('#collapseTwo').show('slow');
        $('#collapseThree').slideUp('slow');
    })

    $('#collapseThree-b').click(function (){
        $('#collapseOne').slideUp('slow');
        $('#collapseTwo').slideUp('slow');
        $('#collapseThree').show('slow');
    })
})