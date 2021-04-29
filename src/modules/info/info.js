let count = [];
export default function info(req, res) {
  // const a = req.body.a;
  // const b = req.body.b;
  // const c = a + b;
  //
  // res.send(a + ' ' + req.body.operation + ' ' + b + ' ' + req.body.equal + ' ' + c);
  count.push(req.body.name);
  res.status(200).json(count);
}
