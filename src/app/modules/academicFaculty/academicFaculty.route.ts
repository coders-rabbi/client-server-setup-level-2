import express from 'express';
import validationRequest from '../../middlewares/validateRequest';
import { AcademicFacultyValidation } from './academicfaculty.validation';
import { AcademicFacultyController } from './academicfaculty.controller';

const router = express.Router();

router.get('/', AcademicFacultyController.findAcademicFaculties);

router.get('/:facultyId', AcademicFacultyController.findSingleAcademicFaculty);

router.post(
  '/create-academic-faculty',
  validationRequest(
    AcademicFacultyValidation.createAcademicFacultyValidationSchema,
  ),
  AcademicFacultyController.createAcademicFaculty,
);

router.patch(
  '/:facultyId',
  validationRequest(
    AcademicFacultyValidation.updateAcademicFacultyValidationSchema,
  ),
  AcademicFacultyController.updateAcademicFaculty,
);

export const AcademicFacultyRoutes = router;
