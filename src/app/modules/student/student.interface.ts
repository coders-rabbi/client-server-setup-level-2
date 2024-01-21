import { Types } from 'mongoose';

export type TGuardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
};

export type TLocalGuardian = {
  name: string;
  occupation: string;
  contactNo: string;
  address: string;
};

export type TUserName = {
  firstName: string;
  middleName: string;
  lastName: string;
};

export type TStudent = {
  id: string;
  user: Types.ObjectId;
  name: TUserName;
  gender: 'Male' | 'Female' | 'Others';
  dateOfBirth: string;
  contactNo: string;
  email: string;
  emergencyNo: string;
  bloodGroup: 'A' | 'A-' | 'B' | 'B-' | 'AB' | 'AB-' | 'O' | 'O-';
  presentAddress: string;
  permanentAddress: string;
  guardian: TGuardian;
  localGuardian: TLocalGuardian;
  profileImage?: string;
  admissionSemester: Types.ObjectId;
  academicDepartment: Types.ObjectId;
};
