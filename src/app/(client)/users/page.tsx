import React, { Suspense } from "react";
import UserList from "./_components/userList";

const Users = () => {
  return (
    <Suspense fallback={"loading.."}>
      <UserList />
    </Suspense>
  );
};

export default Users;
