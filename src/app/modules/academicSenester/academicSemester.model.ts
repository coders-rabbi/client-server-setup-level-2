import { Schema, model } from 'mongoose';
import { TAcademicSemeter } from './academicSemester.interface';
import {
  AcademicSemesterNCode,
  AcademicSemesterName,
  Months,
} from './academicSemester.constant';
import { AppError } from '../../errors/AppError';

const academicSemeterSchema = new Schema<TAcademicSemeter>({
  name: {
    type: String,
    enum: AcademicSemesterName,
    required: true,
  },
  year: {
    type: String,
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

academicSemeterSchema.pre('save', async function (next) {
  const isSemseterExsist = await AcademicSemester.findOne({
    year: this.year,
    name: this.name,
  });

  if (isSemseterExsist) {
    throw new AppError(404,'Semseter already exists !');
  }
  next();
});

export const AcademicSemester = model<TAcademicSemeter>(
  'AcademicSemester',
  academicSemeterSchema,
);
