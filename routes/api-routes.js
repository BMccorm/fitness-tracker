const router = require("express").Router();
const Workout = require("../models/workout.js");

router.put("/api/workouts/:id", (req, res) => {
    Workout.findOneAndUpdate({ _id: req.params.id }, req.body, function (err, dbWorkout) {
        res.send(dbWorkout);
    });
});

// router.post("/api/transaction/bulk", ({ body }, res) => {
//     Workout.insertMany(body)
//         .then(dbTransaction => {
//             res.json(dbTransaction);
//         })
//         .catch(err => {
//             res.status(400).json(err);
//         });
// });

router.get("/api/workouts/range", (req, res) => {
    Workout.find({})
        .sort({ day: -1 })
        .limit(7)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});


router.get("/api/workouts", (req, res) => {
    Workout.find({})

        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

module.exports = router;
