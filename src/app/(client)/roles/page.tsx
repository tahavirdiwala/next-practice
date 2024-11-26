import { Suspense } from "react";
import { RoleList } from "../_components/roleList";

export const dynamic = "force-dynamic";

const Roles = () => {
  return (
    <Suspense fallback={"loading.."}>
      <RoleList />
    </Suspense>
  );
};

export default Roles;
