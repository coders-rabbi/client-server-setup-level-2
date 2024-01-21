import mongoose from 'mongoose';
import config from '../../config';
import { AcademicSemester } from '../academicSenester/academicSemester.model';
import { TStudent } from '../student/student.interface';
import { StudentModel } from '../student/student.models';
import { TUser } from './user.interface';
import { userModel } from './user.model';
import { generateStudentId } from './user.utils';
import { AppError } from '../../errors/AppError';

const createStudentIntoDB = async (password: string, payload: TStudent) => {
  const userData: Partial<TUser> = {};

  //if password is not given then use default password
  userData.password = password || (config.default_password as string);

  //set student role
  userData.role = 'student';

  //find Academic semester info
  const admissionSemester = await AcademicSemester.findById(
    payload.admissionSemester,
  );

  const session = await mongoose.startSession(); // isolated environmentf

  try {
    session.startTransaction();

    if (admissionSemester) {
      // Admission semester found, proceed with the rest of the code
      userData.id = await generateStudentId(admissionSemester);
      // Rest of your code...
    }

    //transaction 1
    const newUser = await userModel.create([userData], { session });
    // console.log(newUser.id);

    // return newUser;
    // create a student
    if (!newUser.length) {
      throw new AppError(404, 'User create failed');
    }
    //set id, _id as a user
    payload.id = newUser[0].id;
    payload.user = newUser[0]._id; //referance id

    // transaction 2
    const newStudent = await StudentModel.create([payload], { session });

    if (!newStudent.length) {
      throw new AppError(400, 'Student create failed');
    }

    await session.commitTransaction();
    await session.endSession();

    return newStudent;
  } catch (err) {
    session.abortTransaction();
    session.endSession();
  }
};

export const UserService = {
  createStudentIntoDB,
};
