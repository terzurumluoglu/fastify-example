import { userService } from "../services";
import { type RequestWithUserId } from "../types";

const getAllUsers = async () => userService.getAllUsers();

const getUserByUserId = async (req: RequestWithUserId) => {
  const { id } = req.params;
  return userService.getUserByUserId(+id);
};

export const userController = {
  getAllUsers,
  getUserByUserId,
};
