const dropMenu = function(){
    const dropDownMenuButton = document.querySelector('.dropDownMenuButton');
    const allLinks = document.querySelector('.allLinks');

    // Toggle dropDownMenu
    dropDownMenuButton.addEventListener('click', function(){
        allLinks.classList.toggle('openDropDownMenu');
        dropDownMenuButton.classList.toggle('moveButtonUp');
    });
}

dropMenu();