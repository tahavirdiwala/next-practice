"use client";
import { RoleType } from "@/types/role";
import Link from "next/link";
import React from "react";

const RoleList = (props: Pick<RoleType, "_id" | "role">) => {
  return (
    <li>
      <Link href={`roles/${props._id}`}>{props.role}</Link>
    </li>
  );
};

export default RoleList;
