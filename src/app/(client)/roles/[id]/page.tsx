import GetRole from "../_components/role";

const RoleById = ({ params }: { params: Promise<{ id: string }> }) => {
  return <GetRole params={params} />;
};

export default RoleById;
