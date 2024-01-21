/* eslint-disable @typescript-eslint/no-explicit-any */
import { z } from 'zod';

// Validation schema for userNameSchema
const userNameValidationSchema = z.object({
  firstName: z.string().min(1).max(20),
  middleName: z.string().optional(),
  lastName: z.string().min(1),
});

// Validation schema for guardianSchema
const guardianValidationSchema = z.object({
  fatherName: z.string().min(1),
  fatherOccupation: z.string().min(1),
  fatherContactNo: z.string().min(1),
  motherName: z.string().min(1),
  motherOccupation: z.string().min(1),
  motherContactNo: z.string().min(1),
});

// Validation schema for localGuardianSchema
const localGuardianValidationSchema = z.object({
  name: z.string().min(1),
  occupation: z.string().min(1),
  contactNo: z.string().min(1),
  address: z.string().min(1),
});

// Validation schema for studentSchema
export const studentValidationSchema = z.object({
  body: z.object({
    name: userNameValidationSchema,
    gender: z.enum(['Male', 'Female', 'Others']),
    dateOfBirth: z.string(),
    contactNo: z.string(),
    email: z.string().email(),
    emergencyNo: z.string(),
    bloodGroup: z.enum(['A+', 'A-', 'B', 'B-', 'AB', 'AB-', 'O', 'O-']),
    presentAddress: z.string(),
    permanentAddress: z.string(),
    guardian: guardianValidationSchema,
    localGuardian: localGuardianValidationSchema,
    profileImage: z.string().optional(),
    admissionSemester: z.string(),
    academicDepartment: z.string(),
  }),
});

export const Studentvalidations = {
  studentValidationSchema,
};
