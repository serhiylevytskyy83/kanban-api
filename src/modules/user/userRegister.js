const User = require('./Model');

function userRegister(req, res) {
  const newUser = new User({
    description: req.body.description,
    priority: req.body.priority,
    status: req.body.status,
    name: req.body.name,
  });
  newUser
    .save()
    .then(() => {
      res.status(200).json('User created');
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json('User not created');
    })
    .finally(() => {
      console.log('END');
    });
}

module.exports = userRegister;
