$(document).ready(function(){
    $(".secondaryContainer").hover(function(){
        $(this).find(".deleteButton").fadeIn();        
    }, function(){
        $(this).find(".deleteButton").hide();        
    });

    $('.deleteButton').on('click', function(event){
        $target = $(event.target);
        const id = $(this).parent().attr('data-id');

        $.ajax({
            type:'DELETE',
            url: '/recipes/' + id,
            success: function(res){
                window.location.href='/recipes/myRecipes'
            },
            error: function(err){
                console.log(err);
            }
        });
      });
});