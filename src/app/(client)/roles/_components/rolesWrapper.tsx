"use client";
import { trpc } from "@/utils/providers/queryClientProvider";
import React from "react";
import RoleList from "./roleList";

const RolesWrapper = () => {
  const getRoles = trpc["get-roles"].useQuery(); // every type will automatically infer from backend due to trpc
  return getRoles?.data?.data?.map((item) => (
    <RoleList key={item._id} {...item} />
  ));
};

export default RolesWrapper;
