import { z } from 'zod';
const createAcademicDepartmentValidationSchema = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: 'Academic Deparment must be string',
      required_error: 'Academic Deparment is required',
    }),
    academicFaculty: z.string({
      invalid_type_error: 'Academic Deparment must be string',
      required_error: 'Academic Faculty is not Found',
    }),
  }),
});
const updateAcademicDepartmentValidationSchema = z.object({
  body: z.object({
    name: z
      .string({
        invalid_type_error: 'Academic Deparment must be string',
        required_error: 'Academic Deparment is required',
      })
      .optional(),
    academicFaculty: z
      .string({
        invalid_type_error: 'Academic Deparment must be string',
        required_error: 'Academic Faculty is not Found',
      })
      .optional(),
  }),
});

export const AcademicDepartmentValidation = {
  createAcademicDepartmentValidationSchema,
  updateAcademicDepartmentValidationSchema,
};
