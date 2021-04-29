import User from './Model';

export default function userUpdateById(req, res) {
  // find({email:"ukr.net"}).limit(1).skip(1)
  const userId = req.params.userId;
  delete req.body.password;
  // User.findByIdAndUpdate(userId, req.body)
  User.updateOne({ _id: userId }, req.body)
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json('User not created');
    });
}
