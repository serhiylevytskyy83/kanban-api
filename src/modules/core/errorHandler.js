function apiNotFound(req, res) {
  res.status(400).send('Api not found');
}

export default function errorHandler(app) {
  app.use(apiNotFound);
}
