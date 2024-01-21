import catchAsync from '../../utilites/catchAsync';
import { AcademicDeparmentService } from './academicDeparment.service';

const createDeparment = catchAsync(async (req, res) => {
  const result = await AcademicDeparmentService.createAcademicDeparmentIntoBD(
    req.body,
  );
  res.status(200).json({
    success: true,
    message: 'Academic department created successfully',
    data: result,
  });
});

const getAllDepartmentFromDB = catchAsync(async (req, res) => {
  const result = await AcademicDeparmentService.getAllDepartmentFromDB();
  res.status(200).json({
    success: true,
    message: 'Academic departmentes fetched successfully',
    data: result,
  });
});

const getSingleDeparmentFromDB = catchAsync(async (req, res) => {
  const { deparmentId } = req.params;
  const result =
    await AcademicDeparmentService.getSingleDepartmentFromDB(deparmentId);
  res.status(200).json({
    success: true,
    message: 'Academic department fetched successfully',
    data: result,
  });
});

const updateDepartmentFromDB = catchAsync(async (req, res) => {
  const { deparmentId } = req.params;
  const result = await AcademicDeparmentService.updateDepartmentFromDB(
    deparmentId,
    req.body,
  );
  res.status(200).json({
    success: true,
    message: 'Academic department updated successfully',
    data: result,
  });
});

export const AcademicDepartmentController = {
  createDeparment,
  getAllDepartmentFromDB,
  getSingleDeparmentFromDB,
  updateDepartmentFromDB,
};
