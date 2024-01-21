import { Schema, model } from 'mongoose';
import { TAcademicDepartment } from './academicDeparment.interface';
import { AppError } from '../../errors/AppError';

const academicDepartmentSchema = new Schema<TAcademicDepartment>(
  {
    name: {
      type: 'string',
      required: true,
      unique: true,
    },
    academicFaculty: {
      type: Schema.ObjectId,
      ref: 'academicFaculty',
    },
  },
  { timestamps: true },
);

academicDepartmentSchema.pre('save', async function (next) {
  const isDeparmentExist = await DeparmentModel.findOne({ name: this.name });
  if (isDeparmentExist) {
    throw new AppError(404,'Deparment Has already Exist');
  }
  next();
});

academicDepartmentSchema.pre('findOneAndUpdate', async function (next) {
  const query = this.getQuery();

  const isDeparmentExist = await DeparmentModel.findOne(query);
  if (!isDeparmentExist) {
    throw new AppError(404,'Deparment Not Found Exist');
  }
  next();
});

export const DeparmentModel = model<TAcademicDepartment>(
  'academicDeparment',
  academicDepartmentSchema,
);
