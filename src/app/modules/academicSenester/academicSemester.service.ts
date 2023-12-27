import { academicSemesterNameCodeMapper } from './academicSemester.constant';
import { TAcademicSemeter } from './academicSemester.interface';
import { AcamdeicSemester } from './academicSemester.model';

//Semester create router
const createAcademicSemesterIntoDB = async (payload: TAcademicSemeter) => {
  if (academicSemesterNameCodeMapper[payload.name] !== payload.code) {
    throw new Error('Invalid Semseter Code !');
  }
  const result = await AcamdeicSemester.create(payload);
  return result;
};

//All Semester find router
const getAllSemseterFromBD = async () => {
  const result = await AcamdeicSemester.find();
  return result;
};

export const AcademicSemesterService = {
  createAcademicSemesterIntoDB,
  getAllSemseterFromBD,
};
