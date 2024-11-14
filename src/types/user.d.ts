import { RoleInterFace } from "./role";

type UserInterFace= {
  _id?: string;
  name: string;
  email: string;
  role: RoleInterFace;
}
