import config from '../../config';
import { AcademicSemester } from '../academicSenester/academicSemester.model';
import { TStudent } from '../student/student.interface';
import { StudentModel } from '../student/student.models';
import { TUser } from './user.interface';
import { userModel } from './user.model';
import { generateStudentId } from './user.utils';

const createStudentIntoDB = async (password: string, payload: TStudent) => {
  // console.log(studentData);
  //create a user object
  const userData: Partial<TUser> = {};

  //if password is not given then use default password
  userData.password = password || (config.default_password as string);
  //set student role
  userData.role = 'student';

  //find Academic semester info

  const admissionSemester = await AcademicSemester.findById(
    payload.admissionSemester,
  );

  if (admissionSemester) {
    // Admission semester found, proceed with the rest of the code
    userData.id = await generateStudentId(admissionSemester);

    // Rest of your code...
  } else {
    // Handle the case where admissionSemester is null
    // console.error('Admission semester not found!');
    // You might want to throw an error, return a default value, or handle it in some way.
  }

  //create a user
  const newUser = await userModel.create(userData);
  // console.log(newUser.id);

  // return newUser;
  // create a student
  if (Object.keys(newUser).length) {
    //set id, _id as a user
    payload.id = newUser.id;
    payload.user = newUser._id; //referance id

    const newStudent = await StudentModel.create(payload);
    return newStudent;
  }
  const newStudent = await StudentModel.create(payload);
  return newStudent;
};

export const UserService = {
  createStudentIntoDB,
};
