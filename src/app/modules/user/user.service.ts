import config from '../../config';
import { TStudent } from '../student/student.interface';
import { StudentModel } from '../student/student.models';
import { TUser } from './user.interface';
import { userModel } from './user.model';

const createStudentIntoDB = async (password: string, studentData: TStudent) => {

  // console.log(studentData);
  //create a user object
  const userData: Partial<TUser> = {};

  //if password is not given then use default password
  userData.password = password || (config.default_password as string);
  //set student role
  userData.role = 'student';

  //set manually created Id
  userData.id = '19502004717';

  //create a user
  const newUser = await userModel.create(userData);
  console.log(newUser.id);

  // return newUser;
  // create a student
  if (Object.keys(newUser).length) {
    //set id, _id as a user
    studentData.id = newUser.id;
    studentData.user = newUser._id; //referance id

    const newStudent = await StudentModel.create(studentData);
    return newStudent;
  }
  const newStudent = await StudentModel.create(studentData);
  return newStudent;

};

export const UserService = {
  createStudentIntoDB,
};
