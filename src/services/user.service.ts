import { USERS } from "../mock";

const getAllUsers = async () => USERS;

const getUserByUserId = async (userId: number) => {
  return USERS.find((user) => user.id === userId);
};

export const userService = {
  getAllUsers,
  getUserByUserId,
};
