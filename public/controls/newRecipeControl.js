const directionsControl = new Vue({
    el: '.directionsContainer',
    data: {
        directions: [
            {
                direction: ''
            }
        ]
    },
    methods: {
        addDirectionForm: function(){
            this.directions.push({
                direction: ''
            })
        },
        deleteDirectionForm: function(directionIndex){
            if(directionIndex)
                this.directions.splice(directionIndex, 1)
        }
    }
})

const ingredientsControl = new Vue({
    el: '.ingredientsContainer',
        data: {
            ingredients: [
                {
                    ingredient: ''
                }
            ]
        },
        methods: {
            addIngredientForm: function(){
                this.ingredients.push({
                    ingredient: ''
                })
            },
            deleteIngredientForm: function(ingredientIndex){
                if(ingredientIndex)
                    this.ingredients.splice(ingredientIndex, 1)
            }
        }
})

const toggleNewRecipeForm = function(){
    const newRecipeButton = document.querySelector('#newRecipeButton');
    const newRecipeContainer = document.querySelector('#newRecipeContainer');
    const closeButton = document.querySelector('#closeButton');
    const overlay = document.querySelector('.overlay');

    // Open dropDownMenu
    newRecipeButton.addEventListener('click', function(){
        newRecipeContainer.style.display = 'block';
        overlay.classList.toggle('addOverlay');
    });

    // Close dropDownMenu
    closeButton.addEventListener('click', function(){
        newRecipeContainer.style.display = 'none';
        overlay.classList.toggle('addOverlay');
    });
}

toggleNewRecipeForm();
