import { NextFunction, Request, RequestHandler, Response } from "express";

//higher order async function
const catchAsync = (fn: RequestHandler) => {
    return (req: Request, res: Response, next: NextFunction) => {
      Promise.resolve(fn(req, res, next)).catch((err) => next(err));
    };
  };

  export default catchAsync;