"use client";
import { UserInterFace } from "@/types/user";
import React from "react";

const User = (props: UserInterFace) => {
  return (
    <React.Fragment>
      {props.name} - has role of {props.role.role}
    </React.Fragment>
  );
};

export default User;
