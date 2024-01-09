import { Schema, model } from 'mongoose';
import { TAcademicFaculty } from './academicfaculty.interface';

const academicFacultySchema = new Schema<TAcademicFaculty>(
  {
    name: {
      type: 'string',
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  },
);

export const academicFacultyModel = model<TAcademicFaculty>(
  'academicFaculty',
  academicFacultySchema,
);
