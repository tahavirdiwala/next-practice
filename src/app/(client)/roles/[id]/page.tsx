"use client";
import { trpc } from "@/utils/providers/queryClientProvider";
import { use } from "react";

const RoleById = ({ params }: { params: Promise<{ id: string }> }) => {
  const temp = use(params);
  const role = trpc.roles.get.useQuery({ id: temp.id });
  return JSON.stringify(role?.data?.data);
};

export default RoleById;
