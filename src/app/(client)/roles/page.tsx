import { GET } from "@/app/(server)/api/roles/route";
import Link from "next/link";
import React from "react";

const Roles = async () => {
  const data = await (await GET()).json();

  return data?.data?.map((item: { _id: string; role: string }) => (
    <li key={item._id}>
      <Link href={`/roles/${item._id}`}>{item.role}</Link>
    </li>
  ));
};

export default Roles;
