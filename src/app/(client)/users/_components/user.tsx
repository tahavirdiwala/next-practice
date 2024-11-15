"use client";
import { UserType } from "@/types/user";
import React from "react";

const User = (props: UserType) => {
  return (
    <li>
      {props.name} - has role of {props.role.role}
    </li>
  );
};

export default User;
