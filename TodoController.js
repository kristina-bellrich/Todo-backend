const AppModel = require('./AppModel')



    module.exports.getTodo = async (req, res) =>{
        const myMeal = await TodoModel.find();

        res.send(myTodo)
    }

    module.exports.saveTodo = async (req, res) =>{
        const {title} = req.body;
        MealModel.create({title})
        .then((data)=> {console.log("Todo added")
    res.send(data)
    })
    }


    module.exports.deleteTodo = async (req, res) =>{
        const {_id} = req.body;
        TodoModel.findByIdAndDelete(_id)
        .then(()=> res.send("Todo deleted"))
    }



    module.exports.editTodo = async (req, res) =>{
        const {_id, title} = req.body;
        MealModel.findByIdAndUpdate(_id, {title})
        .then(()=> res.send("Edited a Todo"))
    }
