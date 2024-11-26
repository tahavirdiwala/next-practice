"use client";
import React, { useEffect, useState } from "react";
import roleService from "../_services/role.service";
import { RoleType } from "@/types/role";

export const RoleList = () => {
  const [role, setRole] = useState("");
  const [roleList, setRoleList] = useState<ApiResponse<RoleType[]>>();

  useEffect(() => {
    roleService.getAll().then(setRoleList);
  }, []);

  const handleSetRole = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRole(event.target.value);
  };

  const handleAddRole = async () => {
    await roleService.add({ role });
  };

  return (
    <React.Fragment>
      <input name="role" placeholder="add role" onChange={handleSetRole} />
      <button onClick={handleAddRole}>add role</button>

      {roleList?.data?.map((item) => (
        <li key={item._id}>{item.role}</li>
      ))}
    </React.Fragment>
  );
};
