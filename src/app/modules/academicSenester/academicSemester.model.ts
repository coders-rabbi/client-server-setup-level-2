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
  const isSemseterExsist = await AcamdeicSemester.findOne({
    year: this.year,
    name: this.name,
  });

  if (isSemseterExsist) {
    throw new Error('Semseter already exists !');
  }
  next();
});

export const AcamdeicSemester = model<TAcademicSemeter>(
  'AcamdeicSemester',
  academicSemeterSchema,
);
