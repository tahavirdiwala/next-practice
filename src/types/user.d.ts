import { RoleType } from "./role";

type UserType<T = unknown> = {
  _id?: string;
  name: string;
  email: string;
  role: T extends "add" ? string : RoleType;
};
