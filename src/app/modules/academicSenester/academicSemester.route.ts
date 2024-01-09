import express from 'express';
import { AcademicSemesterController } from './academicSemester.controller';
import validationRequest from '../../middlewares/validateRequest';
import { AcademicSemesterValidation } from './academicSemester.validation';

const router = express.Router();

router.post(
  '/create-semester',
  validationRequest(
    AcademicSemesterValidation.createAcademicSemesterValidationSchema,
  ),
  AcademicSemesterController.createAcademicSemester,
);
router.get('/', AcademicSemesterController.findAcademicSemesterController);

router.get(
  '/:semesterId',
  AcademicSemesterController.findSingleAcademicSemesterController,
);
router.patch(
  '/:semesterId',
  validationRequest(
    AcademicSemesterValidation.updateAcademicSemesterValidationSchema,
  ),
  AcademicSemesterController.updateAcademicSemesterController,
);

export const AcademicSemesterRoutes = router;
