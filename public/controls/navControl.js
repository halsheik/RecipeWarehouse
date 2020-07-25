$(document).ready(function(){
    // Closes side menu if screen size is larger than point where drop down menu should be accessible
    $(window).resize(function() {
        if($(window).width() >= 720){
            $("#sideNavContainer").fadeOut();
            $("#overlay").fadeOut();
          }
    });

    // Opens Side Menu when Drop Down Menu Button is Clicked
    $("#dropDownMenuContainer").click(function(){
        $("#sideNavContainer").fadeIn();
        $("#overlay").fadeIn();
    });

    // Closes Side Menu when Drop Down Menu Button is Clicked
    $("#dropDownMenuContainerDup").click(function(){
        $("#sideNavContainer").fadeOut();
        $("#overlay").fadeOut();
    });

    $("#overlay").click(function(){
        $("#sideNavContainer").fadeOut();
        $("#overlay").fadeOut();
    });
});