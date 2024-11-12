"use client";
import { trpc } from "@/utils/providers/queryClientProvider";
import RoleList from "./_components/roleList";

const Roles = () => {
  const getRoles = trpc["get-roles"].useQuery(); // every type will automatically infer from backend due to trpc
  return getRoles?.data?.data?.map((item) => (
    <RoleList key={item._id} {...item} />
  ));
};

export default Roles;

//commenting for review
