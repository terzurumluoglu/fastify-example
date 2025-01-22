import { Tag } from "./tag.type";

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
  tags?: Tag[];
};
