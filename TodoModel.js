const mongoose = require('mongoose')
const appShema = new mongoose.Schema({
    title: {
    type: String,
    required: true
    },

})

module.exports= mongoose.model("TodoList", appShema)
