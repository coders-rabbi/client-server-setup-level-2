import catchAsync from '../../utilites/catchAsync';
import { AcademicFacultyService } from './academicfaculty.service';

//Create Academic Semester controller
const createAcademicFaculty = catchAsync(async (req, res) => {
  const facultyData = req.body;
  const result =
    await AcademicFacultyService.createAcademicFacultiesIntoDB(facultyData);
  res.status(200).json({
    success: true,
    message: 'Academic Faculty successfully created',
    data: result,
  });
});

const findAcademicFaculties = catchAsync(async (req, res) => {
  const result = await AcademicFacultyService.getAcademicFacultiesFromDB();
  res.status(200).json({
    success: true,
    message: 'AcademicFaculty fetched successfully',
    data: result,
  });
});

const findSingleAcademicFaculty = catchAsync(async (req, res) => {
  const { facultyId } = req.params;
  const result =
    await AcademicFacultyService.getSingleAcademicFaculty(facultyId);
  res.status(200).json({
    success: true,
    messange: 'Academic Faculty Fetched Successfully',
    data: result,
  });
});

const updateAcademicFaculty = catchAsync(async (req, res) => {
  const { facultyId } = req.params;
  const result = await AcademicFacultyService.updateAcademicFaculty(
    facultyId,
    req.body,
  );
  res.status(200).json({
    success: true,
    message: 'AcademicFaculty updated successfully',
    data: result,
  });
});

export const AcademicFacultyController = {
  createAcademicFaculty,
  findAcademicFaculties,
  findSingleAcademicFaculty,
  updateAcademicFaculty,
};
