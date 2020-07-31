var ingCounter = 1;
var dirCounter = 1;
var limit = 10;

function addIngredient(divName){
    if (ingCounter == limit)  {
          alert("You have reached the add limit");
    }
    else {
          var newdiv = document.createElement('div');
          newdiv.innerHTML = "<div class='ingredientSet'><input class='ingredientInput' type='text' name='ingredients[]'><button class='deleteIngredientButton' type='button' onClick='removeIngredient(this);'>X</button></div>";
          document.getElementById(divName).appendChild(newdiv);
          ingCounter++;
    }
}

function addDirection(divName){
    if (dirCounter == limit)  {
          alert("You have reached the add limit");
    }
    else {
          var newdiv = document.createElement('div');
          newdiv.innerHTML = "<div class='directionSet'><input class='directionInput' type='text' name='directions[]'><button class='deleteDirectionButton' type='button' onClick='removeDirection(this);'>X</button></div>";
          document.getElementById(divName).appendChild(newdiv);
          dirCounter++;
    }
}

function removeIngredient(elementId) {
    // Removes an element from the document
    elementId.parentElement.remove()
    ingCounter--;
}

function removeDirection(elementId) {
    // Removes an element from the document
    elementId.parentElement.remove()
    dirCounter--;
}
