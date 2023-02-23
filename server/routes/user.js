const express = require("express");

const router = express.Router();

const userController = require("../controller/userController");

router.post("/signup", userController.signup, (req, res, next) => {
  const cohort = res.locals.cohort;
  const user = res.locals.user;
  res.status(200).json({ cohort: cohort, user: user });
});

router.post("/login", userController.login, (req, res, next) => {
  res.status(200).json(res.locals.user);
});

// this grabs the our user
router.get("/:username",
userController.getUser,
(req,res,next) => {
  res.status(200).json(res.locals.user);
}
)

// a route to handle increment to a particular tracker props
router.patch("/add/:tracker",
userController.addToTracker,
(req,res,next) => {
  res.status(200).json({ trackerStat: res.locals.userTrackerIncremented });
}
)

// this adds the socials of our users
router.patch("/socials",
userController.addSocials,
(req,res,next) => {
  res.status(200).json(res.locals.user);
}
)

// this grabs the socials of our users
router.get("/socials",
userController.getSocials,
(req,res,next) => {
  res.status(200).json(res.locals.userSocials);
}
)

router.delete("/delete/:cohort", userController.delete, (req, res, next) => {
  res.status(200).json(res.locals.cohort);
});

module.exports = router;

// const express = require('express');

// const userController = require('../controller/userController')
// //console.log(userController.signUp)
// const router = express.Router();

// router.post('/signup',
//  userController.signUp,
//   (req, res, next) => {
//     res.status(200).json(res.locals.users)
// })

// router.patch('/addone',
// userController.addOne,
//   (req, res, next)=>{
//   res.status(200).json(res.locals.users)
//  })

// module.exports = router;
