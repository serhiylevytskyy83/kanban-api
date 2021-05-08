// import infoRouter from '../info/Routes';
const homeRouter = require('../home/Routes'),
  userRouter = require('../user/Routes'),
  columnRouter = require('../column/Routes'),
  loginRouter = require('../login/Routes');

function routes(app) {
  // app.use('/info', infoRouter);
  app.use('/', homeRouter);
  app.use('/user', userRouter);
  app.use('/column', columnRouter);
  app.use('/login', loginRouter);
}

module.exports = routes;
