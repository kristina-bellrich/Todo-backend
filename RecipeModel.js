const mongoose = require('mongoose')


const TodoShema = new mongoose.Schema({
    title: String
})

module.exports= mongoose.model("TodoList", TodoShema)
