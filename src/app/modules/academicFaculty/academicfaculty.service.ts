import { TAcademicFaculty } from './academicfaculty.interface';
import { academicFacultyModel } from './academicfaculty.model';

const createAcademicFacultiesIntoDB = async (payload: TAcademicFaculty) => {
  const result = await academicFacultyModel.create(payload);
  return result;
};

const getAcademicFacultiesFromDB = async () => {
  const result = await academicFacultyModel.find();
  return result;
};

const getSingleAcademicFaculty = async (facultyId: string) => {
  const _id = facultyId;
  const result = await academicFacultyModel.findOne({ _id });
  return result;
};

const updateAcademicFaculty = async (
  facultyId: string,
  payload: Partial<TAcademicFaculty>,
) => {
  const result = await academicFacultyModel.findOneAndUpdate(
    { _id: facultyId },
    payload,
  );
  return result;
};

export const AcademicFacultyService = {
  createAcademicFacultiesIntoDB,
  getAcademicFacultiesFromDB,
  getSingleAcademicFaculty,
  updateAcademicFaculty,
};
