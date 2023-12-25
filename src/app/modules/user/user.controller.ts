import { NextFunction, Request, Response } from 'express';
import { UserService } from './user.service';

const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const studentData = req.body;
    const { password } = req.body;
    const result = await UserService.createStudentIntoDB(password, studentData);
    res.status(200).json({
      success: true,
      message: 'Student created successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const UserController = {
  createStudent,
};
