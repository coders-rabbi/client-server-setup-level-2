import catchAsync from '../../utilites/catchAsync';
import { AcademicSemesterService } from './academicSemester.service';

const createAcademicSemester = catchAsync(async (req, res) => {
  const semesterData = req.body;
  const result =
    await AcademicSemesterService.createAcademicSemesterIntoDB(semesterData);
  res.status(200).json({
    success: true,
    message: 'Academic Semester created successfully',
    data: result,
  });
});

export const AcademicSemesterController = {
  createAcademicSemester,
};
