import catchAsync from '../../utilites/catchAsync';
import { UserService } from './user.service';

const createStudent = catchAsync(async (req, res) => {
  const studentData = req.body;
  const { password } = req.body;
  const result = await UserService.createStudentIntoDB(password, studentData);
  res.status(200).json({
    success: true,
    message: 'Student created successfully',
    data: result,
  });
});

export const UserController = {
  createStudent,
};
