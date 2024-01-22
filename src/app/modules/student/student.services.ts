import mongoose from 'mongoose';
import { StudentModel } from './student.models';
import { AppError } from '../../errors/AppError';
import { userModel } from '../user/user.model';
// import { TStudent } from './student.interface';

const getAllStudentsFromDB = async () => {
  const result = await StudentModel.find()
    .populate('admissionSemester')
    .populate({
      path: 'academicDepartment',
      populate: {
        path: 'academicFaculty',
      },
    });
  return result;
};

const getSingleStudentFromBD = async (id: string) => {
  const result = await StudentModel.findOne({ id })
    .populate('admissionSemester')
    .populate({
      path: 'academicDepartment',
      populate: {
        path: 'academicFaculty',
      },
    });
  return result;
};

const deleteStudentFromBD = async (id: string) => {
  const session = await mongoose.startSession();

  try {
    session.startTransaction();
    const studentDelete = await StudentModel.findOneAndUpdate(
      { id },
      { isDeleted: true },
      { new: true, session },
    );

    if (!studentDelete) {
      throw new AppError(404, 'Student not found');
    }

    const userDelete = await userModel.findOneAndUpdate(
      { id },
      { isDeleted: true },
      { new: true, session },
    );

    if (!userDelete) {
      throw new AppError(404, 'User not found');
    }

    await session.commitTransaction();
    await session.endSession();

    return studentDelete;
  } catch {
    await session.abortTransaction();
    await session.endSession();
  }
};

export const StudentServices = {
  getAllStudentsFromDB,
  getSingleStudentFromBD,
  deleteStudentFromBD,
};
