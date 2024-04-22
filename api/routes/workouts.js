const express = require('express')
const Workout = require('../models/WorkoutModels')
const {createWorkout,getWorkouts,getWorkout,deleteWorkout,updateWorkout,} = require('../controllers/workoutController')
const router = express.Router()


//Get all workouts
router.get('/', getWorkouts)

//Get single workout
router.get('/:id', getWorkout)

//POST a workout
router.post('/', createWorkout)

//DELETE
router.delete('/:id', deleteWorkout)


router.patch('/:id', updateWorkout)

module.exports = router