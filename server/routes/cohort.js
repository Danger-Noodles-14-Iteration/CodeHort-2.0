const express = require("express");

const router = express.Router();
const cohortController = require("../controller/cohortController");

router.post("/newcohort", cohortController.newCohort, (req, res, next) => {
  res.status(200).json(res.locals.newCohort);
});

// router.patch('/addStudent',
// cohortController.addStudent,
// res.status(200).json(res.locals.cohort)
// )

// this approach requires a change in the the front end patch request functionality, adding a patch request on tracker button clicks
// right now it is activated by chosenUser and increments through the cohortController, we want it to increment through userController

router.patch('/chosenuser/:cohort',
cohortController.chosenUser,
(req,res,next)=>{
  const user = res.locals.user;
  const cohort = res.locals.cohort
    res.status(200).json({cohort: cohort, user:user})
})

router.get("/:cohort", cohortController.getCohort, (req, res, next) => {
  res.status(200).json(res.locals.cohort);
});
router.get("/", cohortController.getAllCohorts, (req, res, next) => {
  res.status(200).json(res.locals.cohorts);
});

router.patch(
  "/resetcohort/:cohort",
  cohortController.resetCohort,
  (req, res, next) => {
    res.status(200).json(res.locals.cohort);
  }
);

module.exports = router;
