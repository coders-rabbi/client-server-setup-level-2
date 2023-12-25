import express from 'express';
import { UserController } from './user.controller';
import { studentValidationSchema } from '../student/student.validation';
import validationRequest from '../../middlewares/validateRequest';

const router = express.Router();

router.post(
  '/create-student',
  validationRequest(studentValidationSchema),
  UserController.createStudent,
);

export const UserRoutes = router;
