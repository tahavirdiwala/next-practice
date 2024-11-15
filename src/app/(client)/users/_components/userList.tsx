"use client";
import { trpc } from "@/utils/providers/queryClientProvider";
import React from "react";
import User from "./user";
import { UserType } from "@/types/user";

const UserList = () => {
  const { data: userData } = trpc.user.getall.useQuery(void 0, {
    suspense: true,
  });

  return userData?.data?.map((item) => (
    <User key={item._id} {...(item as UserType)} />
  ));
};

export default UserList;
