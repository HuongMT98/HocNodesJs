/* eslint-disable no-unused-vars */
/* File chứa các middleware dùng để xử lý lỗi tập trung */
import { StatusCodes } from "http-status-codes"
import env from "../configs/environment.js"

const errorMiddleware = (err, req, res, next) => {
  res.statusCode = err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR
  res.json({
    message: err.message || "Internal Server Error",
    stack: err.stack,
  })

  if (env.BUILD_MODE !== "dev") delete errorMiddleware.stack
}

export default errorMiddleware
