import { USERS } from "@mock";

const getAllUsers = async () => USERS;

export const userService = {
  getAllUsers,
};
