const express = require ('express')
const router = express.Router()
const {createWorkout, getWorkouts, getWorkout, updateWorkout, deleteWorkout}=require("../controller/workout.controller")

//getting all workouts from the database
router.get("/",getWorkouts)
   

//getting a single workouts in the database
router.get("/:id",getWorkout)

//creating a new workout in the database
router.post("/",createWorkout)

//updating a single workout in the database
router.put("/:id",updateWorkout)

//deleting a single workout in the database
router.delete("/:id",deleteWorkout)
  
module.exports = router