const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "Enter a exercise type"
            },
            name: {
                type: String,
                trim: true,
                required: "Enter a exercise name"
            },
            duration: {
                type: Number,
                trim: true,
                required: "Enter a duration"
            },
            distance: {
                type: Number,
                trim: true,
            },
            weight: {
                type: Number,
                trim: true,
            },
            reps: {
                type: Number,
                trim: true,
            },
            sets: {
                type: Number,
                trim: true,
            },
        }
    ],

    day: {
        type: Date,
        default: Date.now
    }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
