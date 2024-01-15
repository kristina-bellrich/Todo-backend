const mongoose = require('mongoose')
const appShema = new mongoose.Schema({
    title: {
    type: String,
    required: true
    },
    description: {
        type: String
        },
    image: {
        type: String
        }
})

module.exports= mongoose.model("FamilyApp", appShema)




const TodoShema = new mongoose.Schema({
    title: String,
    ingredients: String,
    dayOfWeek : String,
    typeOfMeal : String
})

module.exports= mongoose.model("TodoList", TodoShema)
