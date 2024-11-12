"use client";
import { trpc } from "@/utils/providers/queryClientProvider";
import React from "react";
import RoleList from "./roleList";

const RolesWrapper = () => {
  const getRoles = trpc["get-roles"].useQuery(void 0, {
    gcTime: 0, // for not cachetime
  });
  return getRoles?.data?.data?.map((item) => (
    <RoleList key={item._id} {...item} />
  ));
};

export default RolesWrapper;
