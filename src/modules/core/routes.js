// import infoRouter from '../info/Routes';
// import homeRouter from '../home/Routes';
const userRouter = require('../user/Routes');
const columnRouter = require('../column/Routes');

function routes(app) {
  // app.use('/info', infoRouter);
  // app.use('/', homeRouter);
  app.use('/user', userRouter);
  app.use('/column', columnRouter);
}

module.exports = routes;
