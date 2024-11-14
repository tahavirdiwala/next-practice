"use client";
import { trpc } from "@/utils/providers/queryClientProvider";
import { use } from "react";

const GetRole = (props: { params: Promise<{ id: string }> }) => {
  const temp = use(props.params);
  const role = trpc.roles.get.useQuery({ id: temp.id });
  return JSON.stringify(role?.data?.data);
};

export default GetRole;
