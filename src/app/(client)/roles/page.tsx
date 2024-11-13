import { Suspense } from "react";
import RolesWrapper from "./_components/rolesWrapper";

const Roles = () => {
  return (
    <Suspense fallback={<p>Loading..</p>}>
      <RolesWrapper />
    </Suspense>
  );
};

export default Roles;
