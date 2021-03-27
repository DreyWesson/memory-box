// // AUTH.MIDDLEWARE HAS BEEN PUBLISHED IN THE NPM MODULE TO IMPORT DIRECTLY

// import jwt from "jsonwebtoken";
// // import User from "../models/users.schema.js";
// // import { Comment } from "../models/comments.schema.js";
// import ErrorHandler from "../utils/errorHandler.utils.js";

// export const postId = async (req, res, next) => {
//   console.log("REQUEST PARAMS", req.params);
//   try {
//     const { id } = req.params;
//     req.postId = id ? id : console.log("No user with id");
//     next();
//   } catch (error) {
//     console.log("Comment middleware error", error);
//     return next(new ErrorHandler("You don't have access to this route", 401));
//   }
// };
