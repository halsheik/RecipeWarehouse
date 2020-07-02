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

// Function to validate for image files
function validateImageFile(file){
    // Valid image extension types
    const validImageFileExtensions = [".jpg", ".jpeg", ".gif", ".png"];

    // Checks for file type 'file'
    if(file.type == "file"){
        // Retrieve file name
        const filename = file.value;

        // Check file for validity
        var invalidFile = true; // For validity check

        // Loops through valid file types array
        for(var i = 0; i < validImageFileExtensions.length; ++i){
            var validFileType = validImageFileExtensions[i]; // Grabs a extension from list of valid extensions
            var fileExtension = substr(filename.length - validFileType.length, validFileType.length); // Grabs last x characters equal in length to each valid extension type

            // Checks for equality
            if(validFileType.toLowerCase() == fileExtension.toLowerCase()){
                invalidFile = false;
                break;
            }
        }

        // Errors if invalid file type
        if(invalidFile){
            file.value = "";
            return false;
        }
    }

    return true;
}