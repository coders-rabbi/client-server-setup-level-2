import express from 'express';
import validationRequest from '../../middlewares/validateRequest';
import { AcademicDepartmentValidation } from './academicDeparment.Validation';
import { AcademicDepartmentController } from './academicDeparment.controller';

const router = express.Router();

router.get('/', AcademicDepartmentController.getAllDepartmentFromDB);

router.get(
  '/:deparmentId',
  AcademicDepartmentController.getSingleDeparmentFromDB,
);

router.post(
  '/create-deparment',
  validationRequest(
    AcademicDepartmentValidation.createAcademicDepartmentValidationSchema,
  ),
  AcademicDepartmentController.createDeparment,
);

router.patch(
  '/:deparmentId',
  validationRequest(
    AcademicDepartmentValidation.updateAcademicDepartmentValidationSchema,
  ),
  AcademicDepartmentController.updateDepartmentFromDB,
);

export const AcademicDeparmentRouters = router;
