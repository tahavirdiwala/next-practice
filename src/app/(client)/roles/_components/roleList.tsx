"use client";
import { RoleInterFace } from "@/types/role";
import Link from "next/link";
import React from "react";

const RoleList = (props: Pick<RoleInterFace, "_id" | "role">) => {
  return (
    <li>
      <Link href={`roles/${props._id}`}>{props.role}</Link>
    </li>
  );
};

export default RoleList;
