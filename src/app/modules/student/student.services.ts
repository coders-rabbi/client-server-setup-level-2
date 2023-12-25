import { StudentModel } from './student.models';
// import { TStudent } from './student.interface';

const getAllStudentsFromDB = async () => {
  const result = await StudentModel.find();
  return result;
};

const getSingleStudentFromBD = async (id: string) => {
  const result = await StudentModel.findOne({ id });
  return result;
};

export const StudentServices = {
  getAllStudentsFromDB,
  getSingleStudentFromBD,
};
