const dropMenu = function(){
    const dropDownMenuButton = document.querySelector('.dropDownMenuButton');
    const allLinks = document.querySelector('.allLinks');
    const overlay = document.querySelector('.overlay');

    // Toggle dropDownMenu
    dropDownMenuButton.addEventListener('click', function(){
        allLinks.classList.toggle('openDropDownMenu');
        dropDownMenuButton.classList.toggle('moveButtonUp');
        overlay.classList.toggle('addOverlay');
    });
}

dropMenu();