import catchAsync from '../../utilites/catchAsync';
import { AcademicSemesterService } from './academicSemester.service';

//Create Academic Semester controller
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

//Find All Semester Controller
const findAcademicSemesterController = catchAsync(async (req, res) => {
  const result = await AcademicSemesterService.getAllSemseterFromBD();
  res.status(200).json({
    success: true,
    message: 'All Semseter fatched successfully!',
    data: result,
  });
});

export const AcademicSemesterController = {
  createAcademicSemester,
  findAcademicSemesterController,
};
