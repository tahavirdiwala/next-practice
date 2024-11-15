"use client";
import { UserType } from "@/types/user";
import React from "react";

const User = (props: UserType) => {
  return (
    <React.Fragment>
      {props.name} - has role of {props.role.role}
    </React.Fragment>
  );
};

export default User;
