import { GET } from "@/app/(server)/api/roles/route";
import React from "react";
import RoleList from "./_components/roleList";

const Roles = async () => {
  const data = await (await GET()).json();

  return data?.data?.map((item: { _id: string; role: string }) => (
    <RoleList key={item._id} {...item} />
  ));
};

export default Roles;
