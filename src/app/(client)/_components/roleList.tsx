"use client";
import React, { useState } from "react";
import roleService from "../_services/role.service";

export const RoleList = () => {
  const [role, setRole] = useState("");

  const handleSet = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRole(e.target.value);
  };

  const handleAdd = async () => {
    await roleService.add({ role });
  };

  return (
    <React.Fragment>
      <input name="role" placeholder="add role" onChange={handleSet} />
      <button onClick={handleAdd}>add role</button>
    </React.Fragment>
  );
};
