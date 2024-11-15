import React, { Suspense } from "react";
import UserList from "./_components/userList";

export const dynamic = "force-dynamic";

const Users = () => {
  return (
    <Suspense fallback={"loading.."}>
      <UserList />
    </Suspense>
  );
};

export default Users;
