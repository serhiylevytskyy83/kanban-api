import User from './Model';

export default function getColumn(req, res) {
  // find({email:"ukr.net"}).limit(1).skip(1)

  User.find()
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json('Columns not created');
    });
}
