const mongoose = require('mongoose')
const appShema = new mongoose.Schema({
    title: String,
 
})

module.exports= mongoose.model("TodoList", appShema)
