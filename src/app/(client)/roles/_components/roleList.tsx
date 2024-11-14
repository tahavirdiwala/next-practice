"use client";
import Link from "next/link";
import React from "react";

const RoleList = (props: { _id?: string; role: string }) => {
  return (
    <li>
      <Link href={`roles/${props._id}`}>{props.role}</Link>
    </li>
  );
};

export default RoleList;
