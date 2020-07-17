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