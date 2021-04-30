const User = require('./Model');

function userDeleteAll(req, res) {
  // find({email:"ukr.net"}).limit(1).skip(1)
  // const userId = req.params.userId;
  // delete req.body.password;

  User.deleteMany()
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json('User delete error');
    });
}

module.exports = userDeleteAll;
