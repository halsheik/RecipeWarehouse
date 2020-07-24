$(document).ready(function(){
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