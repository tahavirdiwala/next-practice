import { Suspense } from "react";
import RolesWrapper from "./_components/rolesWrapper";

export const dynamic = "force-dynamic";
// export const fetchCache = "force-no-store";

const Roles = () => {
  return (
    <Suspense fallback={<p>Loading..</p>}>
      <RolesWrapper />
    </Suspense>
  );
};

export default Roles;
