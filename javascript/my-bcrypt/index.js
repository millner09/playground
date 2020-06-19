const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/mongo-test", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const User = mongoose.model("User", {
  username: String,
  hashedPassword: String,
  email: String,
});

const bcrypt = require("bcrypt");
const saltRounds = 10;

let hashedPassword = "";
const myPassword = "password12345";
const myWrongPassword = "Password12345";

bcrypt.hash(myPassword, saltRounds, (err, hash) => {
  hashedPassword = hash;

  const user = new User({
    username: "amillner",
    hashedPassword: hash,
  });
  //   user.save().then(() => console.log("user saved"));
  const myUser = User.findOne({ username: "amillner" }, (err, user) => {
    console.log(user);
    // Load hash from your password DB.
    bcrypt.compare(myPassword, user.hashedPassword, (err, result) => {
      // result == true
      console.log(result);
    });

    bcrypt.compare(myWrongPassword, user.hashedPassword, (err, result) => {
      // result == false
      console.log(result);
    });
  });
});

const res = User.updateOne(
  { username: "amillner" },
  { $set: { email: "adam.millner@gmail.com" } },
  { upsert: true },
  (err, numEffected) => {
    console.log(numEffected);
  }
);
res.n; // Number of documents matched
res.nModified; // Number of documents modified