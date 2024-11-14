import { Suspense } from "react";
import GetRole from "../_components/role";

const RoleById = ({ params }: { params: Promise<{ id: string }> }) => {
  return (
    <Suspense fallback={"loading.."}>
      <GetRole params={params} />
    </Suspense>
  );
};

export default RoleById;
