import { TAcademicDepartment } from './academicDeparment.interface';
import { DeparmentModel } from './academicDepartment.model';

const createAcademicDeparmentIntoBD = async (payload: TAcademicDepartment) => {
  const result = await DeparmentModel.create(payload);
  return result;
};

const getAllDepartmentFromDB = async () => {
  const result = await DeparmentModel.find().populate('academicFaculty');
  return result;
};

const getSingleDepartmentFromDB = async (departmentId: string) => {
  const result = await DeparmentModel.findById(departmentId);
  return result;
};

const updateDepartmentFromDB = async (
  deparmentId: string,
  paload: Partial<TAcademicDepartment>,
) => {
  const result = await DeparmentModel.findOneAndUpdate(
    { _id: deparmentId },
    paload,
  );
  return result;
};

export const AcademicDeparmentService = {
  createAcademicDeparmentIntoBD,
  getAllDepartmentFromDB,
  getSingleDepartmentFromDB,
  updateDepartmentFromDB,
};
