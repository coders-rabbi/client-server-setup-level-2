import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { StudentRoutes } from './app/modules/student/student.route';
import { UserRoutes } from './app/modules/user/user.route';
import globalerErrorHandeler from './app/middlewares/globalErrorHangler';
import notFound from './app/middlewares/notfound';
const app: Application = express();

//parser
app.use(express.json());
app.use(cors());

//application routes
app.use('/api/v1/students', StudentRoutes);
app.use('/api/v1/users', UserRoutes);

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
