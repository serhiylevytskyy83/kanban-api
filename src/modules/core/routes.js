import infoRouter from '../info/Routes';
import homeRouter from '../home/Routes';
import userRouter from '../user/Routes';
import columnRouter from '../column/Routes';

export default function routes(app) {
  app.use('/info', infoRouter);
  app.use('/', homeRouter);
  app.use('/user', userRouter);
  app.use('/column', columnRouter);
}
