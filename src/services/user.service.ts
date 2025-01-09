import { USERS } from "@mock";
import { type User } from "@types";
import { generateResponse } from "@utils";

const getAllUsers = async () => USERS;

const getUserByUserId = async (userId: number) => {
  const result: User | undefined = USERS.find((user) => user.id === userId);
  return result;
  // if (!result) {
  //   return generateResponse({
  //     success: false,
  //     error: `Any users found with Id: ${userId}`,
  //   });
  // }

  // return generateResponse({
  //   success: false,
  //   message: "The user loaded succesfully",
  //   result,
  // });
};

export const userService = {
  getAllUsers,
  getUserByUserId,
};
