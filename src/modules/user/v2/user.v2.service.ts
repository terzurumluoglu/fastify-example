import { USERS } from "@mock";

const getUserByUserId = async (userId: number) => {
  return USERS.find((user) => user.id === userId);
};

export const userService = {
  getUserByUserId,
};
