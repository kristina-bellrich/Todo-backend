const { Router} =require("express");
const { getRecipe, saveRecipe, deleteRecipe, editRecipe } = require("./AppController");
const router= Router();
router.get('/', getRecipe)
router.post('/saveRecipe', saveRecipe)
router.post('/deleteRecipe', deleteRecipe)
router.put('/editRecipe', editRecipe)

router.get("/", getMeal);
router.post("/saveMeals", saveMeals);
router.post("/deleteMeal", deleteMeal);
router.post("/editMeal", editMeal);

module.exports = router
