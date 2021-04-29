import User from './Model';

export default function userRegister(req, res) {
  const newUser = new User({
    // email: req.body.email,
    // password: req.body.password,
    // name: req.body.name,
    description: req.body.description,
    priority: req.body.priority,
    status: req.body.status,
    id: req.body.id,
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
