import { userService } from "./user.v2.service";
import { getAllUsers } from "../common/user.common.controller";
import { type RequestWithUserId } from "@types";

const getUserByUserId = async (req: RequestWithUserId) => {
  const { id } = req.params;
  return userService.getUserByUserId(+id);
};

export const userController = {
  getAllUsers,
  getUserByUserId,
};
