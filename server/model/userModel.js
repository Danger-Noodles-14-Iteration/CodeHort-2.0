

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// adding trackers and a socials prop which will contain strings on the links in an array
const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  participation: { type: Number, default: 0 },
  cohort: { type: Number, required: true },
  raisedHand: { type: Number, default: 0 },
  codeOfConduct: { type: Number, default: 0 },
  powerClap: { type: Number, default: 0 },
  burged: { type: Number, default: 0 },
  stretches: { type: Number, default: 0 },
  calledOn: { type: Number, default: 0 },
  hourTracker: { type: Number, default: 0 },
  // ?
  socials: { type: Object, default: {} },
  isAdmin: { type: String, default: "" }
})

UserSchema.pre("save", async function (next) {
  const saltRounds = 10;
  this.password = await bcrypt.hash(this.password, saltRounds);
  return next();
});

const Userdb = mongoose.model("userdb", UserSchema);

module.exports = Userdb;

// const mongoose = require('mongoose');

// const CohortSchema = new mongoose.Scheme({
//     cohortNumber: {type: String, required: true},
//     residents: {type: Array}
// });

// const Cohortdb = mongoose.model('cohortdb', CohortSchema);

// module.exports = Cohortdb;

// const bcrypt = require('bcrypt');
// // const { stringify } = require('postcss');

// const Schema = mongoose.Schema;

// const UserSchema = new Schema({
//     username: { type: String, required: true },
//     password: { type: String, required: true },
//     cohortNumber: { type: String, required: true },
//     participation: { Number, default: 0 }

// });

// UserSchema.pre('save', async function (next) {
//     const saltRounds = 10;
//     this.password = await bcrypt.hash(this.password, saltRounds);
//     return next()
// })

// const User = mongoose.model('User', UserSchema);

// module.exports = User;
