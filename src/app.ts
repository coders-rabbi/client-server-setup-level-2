import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import globalerErrorHandeler from './app/middlewares/globalErrorHangler';
import notFound from './app/middlewares/notfound';
import router from './app/routes/routers';
const app: Application = express();

//parser
app.use(express.json());
app.use(cors());

//application routes
app.use('/api/v1', router);

const getAController = (req: Request, res: Response) => {
  // const a = 20;
  res.send('Hello World');
};

app.get('/', getAController);

//Global error handler
app.use(globalerErrorHandeler);

//Not found router
app.use(notFound);

export default app;
