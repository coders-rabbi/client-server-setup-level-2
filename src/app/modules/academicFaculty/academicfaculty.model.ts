import { Schema, model } from 'mongoose';
import { TAcademicFaculty } from './academicfaculty.interface';
import { AppError } from '../../errors/AppError';

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


academicFacultySchema.pre('save', async function (next) {
  const isFacultyExist = await academicFacultyModel.findOne({
    name: this.name,
  });

  if (isFacultyExist) {
    throw new AppError(404,'Faculty Already exists');
  }
  next();
});

// academicFacultySchema.pre('findOne', async function (next) {
//   const query = this.getQuery();

//   const isDeparmentExist = await academicFacultyModel.findById(query);
//   if (!isDeparmentExist) {
//     throw new Error('Deparment Not Found Exist');
//   }
//   next();
// });

academicFacultySchema.pre('findOneAndUpdate', async function (next) {
  const query = this.getQuery();
  const isFacultyExist = await academicFacultyModel.findOne(query);
  if (!isFacultyExist) {
    throw new AppError(404, 'Faculty does not exist');
  }
  next();
});

export const academicFacultyModel = model<TAcademicFaculty>(
  'academicFaculty',
  academicFacultySchema,
);
