import { Suspense } from "react";
import RolesWrapper from "./_components/rolesWrapper";

const Roles = () => {
  return (
    <Suspense fallback={"..loading"}>
      <RolesWrapper />
    </Suspense>
  );
};

export default Roles;
