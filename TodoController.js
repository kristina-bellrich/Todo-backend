const AppModel = require('./AppModel')

    module.exports.getTodo = async (req, res) =>{
        const myMeal = await TodoModel.find();
        res.send(myTodo)
    }

    module.exports.saveTodo = async (req, res) =>{
        const {title} = req.body;
        AppModel.create({title})
        .then((data)=> {console.log("Todo added")
    res.send(data)
    })
    }


    module.exports.deleteTodo = async (req, res) =>{
        const {_id} = req.body;
        AppModel.findByIdAndDelete(_id)
        .then(()=> res.send("Todo deleted"))
    }



    module.exports.editTodo = async (req, res) =>{
        const {_id, title} = req.body;
        AppModel.findByIdAndUpdate(_id, {title})
        .then(()=> res.send("Edited a Todo"))
    }
