"use client";
import { UserType } from "@/types/user";
import { trpc } from "@/utils/providers/queryClientProvider";
import React from "react";

const User = (props: UserType) => {
  const queryClient = trpc.useUtils();

  const deleteUser = trpc.user.delete.useMutation({
    onSuccess() {
      queryClient.user.getall.invalidate();
    },
  });

  const handleDelete = () => {
    deleteUser.mutate({ id: props._id || "" });
  };

  return (
    <div>
      <span>
        {props.name} - has role of {props.role.role}
        <button onClick={handleDelete}>
          {deleteUser.isPending ? "deleting" : "delete"}
        </button>
      </span>
    </div>
  );
};

export default User;
