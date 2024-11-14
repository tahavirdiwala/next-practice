"use client";
import { trpc } from "@/utils/providers/queryClientProvider";
import React from "react";
import RoleList from "./roleList";

const RolesWrapper = () => {
  const queryClient = trpc.useUtils();

  const getRoles = trpc.role.getall.useQuery(void 0, {
    gcTime: 0, // for removing default api cache
    suspense: true,
  });

  const addRole = trpc.role.add.useMutation({
    onSuccess() {
      queryClient.role.getall.invalidate();
    },
  });

  const handleAdd = () => {
    addRole.mutate({ role: "testing...22" });
  };

  return (
    <React.Fragment>
      <button disabled={addRole.isPending} onClick={handleAdd}>
        {addRole.isPending ? "adding..." : "add"}
      </button>
      {getRoles?.data?.data?.map((item) => (
        <RoleList key={item._id} {...item} />
      ))}
    </React.Fragment>
  );
};

export default RolesWrapper;
