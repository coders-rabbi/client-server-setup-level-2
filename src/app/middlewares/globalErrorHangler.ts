/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */

import { NextFunction, Request, Response } from 'express';

const globalerErrorHandeler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const statusCode = 500;
  const message = err.message || 'some went wrong';

  return res.status(statusCode).json({
    success: false,
    message: message,
    error: err,
  });
};


export default globalerErrorHandeler;