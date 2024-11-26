"use client";

import { RoleType } from "@/types/role";
import roleService from "../_services/role.service";

export const RoleList = () => {
  const handleAdd = async (payload) => {
    console.log("payload", payload);

    // await roleService.add(payload);
  };

  return (
    <form onSubmit={handleAdd}>
      <input name="role" placeholder="add role" />
    </form>
  );
};
