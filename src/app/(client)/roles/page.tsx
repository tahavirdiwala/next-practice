import { RoleInterFace } from "@/types/role";
import RoleList from "./_components/roleList";

const getRoles = async (): GETResponse<RoleInterFace[]> => {
  const data = await fetch(`${process.env.CLIENT_URL}/roles`);
  return data.json();
};

const Roles = async () => {
  const data = await getRoles();
  return data?.data?.map((item) => <RoleList key={item._id} {...item} />);
};

export default Roles;
