import { TAcademicSemeter } from '../academicSenester/academicSemester.interface';
import { userModel } from './user.model';

const findLastStudentId = async () => {
  const lastStudentId = await userModel
    .findOne(
      {
        role: 'student',
      },
      {
        id: 1,
        _id: 0,
      },
    )
    .sort({
      createdAt: -1,
    })
    .lean();
  // console.log(lastStudentId?.id);
  return lastStudentId?.id ? lastStudentId.id : undefined;
};

//set userId automatically
export const generateStudentId = async (payload: TAcademicSemeter) => {
  // ID Format year, semesterCode studentId
  // console.log(await findLastStudentId());

  let currentId = (0).toString();

  const lastStudentId = await findLastStudentId();

  //lastStudent Semester Year
  const lastStudentSemesterYear = lastStudentId?.substring(0, 4);

  //lastStudent Semester Code
  const lastStudentSemesterCode = lastStudentId?.substring(4, 6);

  const currentSemesterYear = payload.year;
  const currentSemesterCode = payload.code;

  if (
    lastStudentId &&
    lastStudentSemesterYear === currentSemesterYear &&
    lastStudentSemesterCode === currentSemesterCode
  ) {
    currentId = lastStudentId.substring(6);
  }

  let incrementId = (Number(currentId) + 1).toString().padStart(4, '0');
  incrementId = `${payload.year}${payload.code}${incrementId}`;
  return incrementId;
};
