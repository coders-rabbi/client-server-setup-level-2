import { Schema, model } from 'mongoose';
import { TAcademicSemeter } from './academicSemester.interface';
import {
  AcademicSemesterNCode,
  AcademicSemesterName,
  Months,
} from './academicSemester.constant';

const academicSemeterSchema = new Schema<TAcademicSemeter>({
  name: {
    type: String,
    enum: AcademicSemesterName,
    required: true,
  },
  year: {
    type: Date,
    readonly: true,
  },
  code: {
    type: String,
    enum: AcademicSemesterNCode,
    required: true,
  },
  startMonth: {
    type: String,
    enum: Months,
    require: true,
  },
  endMonth: {
    type: String,
    enum: Months,
    require: true,
  },
});

export const AcamdeicSemester = model<TAcademicSemeter>(
  'AcamdeicSemester',
  academicSemeterSchema,
);
