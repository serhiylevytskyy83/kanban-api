import Column from './Model';

export default function postColumn(req, res) {
  const newColumns = new Column({
    title: req.body.title,
  });

  newColumns
    .save()
    .then(() => {
      res.status(200).json('Columns created');
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json('Columns not created');
    })
    .finally(() => {
      console.log('END');
    });
}
