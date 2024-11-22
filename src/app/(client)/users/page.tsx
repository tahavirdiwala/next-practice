import { GET } from "@/app/(server)/api/users/route";

export const dynamic = "force-dynamic";

const Users = async () => {
  const usersList = await (await GET()).json();
  return JSON.stringify(usersList, null, 2);
};

export default Users;
