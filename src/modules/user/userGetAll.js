const User = require('./Model');

function userGetAll(req, res) {
  // find({email:"ukr.net"}).limit(1).skip(1)

  User.find()
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json('User not created');
    });
}

module.exports = userGetAll;
