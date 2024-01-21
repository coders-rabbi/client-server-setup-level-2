import { AppError } from '../../errors/AppError';
import { academicSemesterNameCodeMapper } from './academicSemester.constant';
import { TAcademicSemeter } from './academicSemester.interface';
import { AcademicSemester } from './academicSemester.model';

//Semester create router
const createAcademicSemesterIntoDB = async (payload: TAcademicSemeter) => {
  if (academicSemesterNameCodeMapper[payload.name] !== payload.code) {
    throw new AppError(404,'Invalid Semseter Code !');
  }
  const result = await AcademicSemester.create(payload);
  return result;
};

//All Semester find router
const getAllSemseterFromBD = async () => {
  const result = await AcademicSemester.find();
  return result;
};

//Single Semester find Service
const getSingleSemseterFromBD = async (_id: string) => {
  // console.log(_id);
  const result = await AcademicSemester.findById(_id);
  return result;
};

const updateSingleSemseterFromBD = async (
  id: string,
  payload: Partial<TAcademicSemeter>,
) => {
  if (
    payload.name &&
    payload.code &&
    academicSemesterNameCodeMapper[payload.name] !== payload.code
  ) {
    throw new AppError(404,'Invalid Semester Code');
  }
  const result = await AcademicSemester.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

export const AcademicSemesterService = {
  createAcademicSemesterIntoDB,
  getAllSemseterFromBD,
  getSingleSemseterFromBD,
  updateSingleSemseterFromBD,
};
