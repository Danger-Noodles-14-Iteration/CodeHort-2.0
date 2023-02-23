const bcrypt = require("bcrypt");
const User = require("../model/userModel");
const Cohort = require("../model/cohortModel");
const { findOneAndUpdate } = require("../model/cohortModel");

const userController = {
  async signup(req, res, next) {
    try {
      const user = await new User({
        username: req.body.username,
        password: req.body.password,
        cohort: req.body.cohort,
        isAdmin: req.body.isAdmin,
      });

      user.save();
      const cohort = await Cohort.findOneAndUpdate(
        { cohort: req.body.cohort },
        { $push: { students: user } },
        { new: true }
      );
      res.locals.user = user;
      res.locals.cohort = cohort;
      return next();
    } catch (err) {
      return next({
        log: `err: ${err}`,
        status: 500,
        message: { err: "error in usercontroller.signup middleware" },
      });
    }
  },

  async login(req, res, next) {
    const { username, password } = req.body;
    const user = await User.findOne({ username: username });
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      res.locals.user = user;
      next();
    } else {
      next({ error: "try again" });
    }
  },

    async getUser(req, res, next) {
        // we find our user from the collection
        const username = req.params.username;
        const user = await User.findOne({ username: username });
        // pass user in locals
        res.locals.user = user;
        return next();
    },
    
    // removed the addpoint method
    // will add patch request to front end to pass username in body from profile(rn profile has access to current user)
    // we will send a request to what will be passed into the func sending this request(ex: onClick:{() => handleTrackerIncr(burged)} /user/add/${arg} )
    async addToTracker(req, res, next) {
      try {
          // define our tracker given to params
          const tracker = req.params.tracker;
          // find doc of our user, username will be passed in body, we increment the tracker
          const user = await User.findOneAndUpdate({ username: req.body.username},
              { $inc: { [tracker]: 1 } },
              { new: true }
          );
          // we pass the user to locals to respond with it
          console.log(user[tracker])
          res.locals.userTrackerIncremented = user[tracker];
          return next()
      // here we error handle incase there is a wrong input to our collection
      } catch (err) {
          return next({
              log: `err: ${err}`,
              status: 500,
              message: { err: 'error in usercontroller.signup middleware' }
          })
      }
  },

    async addSocials(req, res, next) {
        try{
            // we define our socials, the links are sent in an object
            const socials = req.body.socials;
            // we find our user and update their socials
            const user = await User.findAndUpdate({ username: req.body.username },
                { socials: socials},
                { new: true });
            // we presist our user to locals to respond w user obj
            res.locals.user = user;
            return next();
        } catch (err) {
            return next({
                log: `err: ${err}`,
                status: 500,
                message: { err: 'error in usercontroller.addSocials middleware' }
            })
        }
    },

    async getSocials(req, res, next) {
        try{
            // we find our user and grab their socials
            const user = await User.findOne({ username: req.body.username });
            const socials = user.socials;
            // we presist our user to locals to respond w user obj
            res.locals.userSocials = socials;
            return next();
        } catch (err) {
            return next({
                log: `err: ${err}`,
                status: 500,
                message: { err: 'error in usercontroller.addSocials middleware' }
            })
        }
    },

  async delete(req, res, next) {
    const cohort = await Cohort.findOneAndUpdate(
      { cohort: req.params.cohort },
      {
        $pull: {
          students: { username: req.body.username },
          chosen: { username: req.body.username },
        },
      },

      { new: true }
    );
    await User.deleteOne({ username: req.body.username });

    res.locals.cohort = cohort;
    console.log(`user: ${req.body.username} has been deleted`);
    return next();
  },
};

module.exports = userController;

// const User = require('../model/userModel');

// const userController = {}

// userController.signUp = async function (req, res, err, next){
//     const { username, password } = req.body;
//     if (!username || !password) (err) => next(err);
//     const user = await new User({
//         username: req.body.username,
//         password: req.body.password,
//         cohortNumber: req.body.cohortNumber

//     });
//     await user.save()
//     res.locals.user = user

//     return next()
// }

// userController.addOne = async function(req, res, next) {
//     const user = await User.findOneAndUpdate(
//         { username: req.body.username },
//         { $inc: { participation: 1 } },
//         { new: true }
//     )
//     res.locals.user = user
//     return next()
// }

// module.exports = userController;
