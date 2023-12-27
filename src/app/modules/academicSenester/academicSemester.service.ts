import { academicSemesterNameCodeMapper } from './academicSemester.constant';
import { TAcademicSemeter } from './academicSemester.interface';
import { AcamdeicSemester } from './academicSemester.model';

const createAcademicSemesterIntoDB = async (payload: TAcademicSemeter) => {
  
  //'Autum' | 'Summar' | 'Fall'
  

  if (academicSemesterNameCodeMapper[payload.name] !== payload.code) {
    throw new Error('Invalid Semseter Code !');
  }
  const result = await AcamdeicSemester.create(payload);
  return result;
};

export const AcademicSemesterService = {
  createAcademicSemesterIntoDB,
};
