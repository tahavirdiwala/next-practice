import { GET } from "@/app/(server)/api/users/route";

export const dynamic = "force-dynamic";

const Users = async () => {
  const userList = await (await GET()).json();
  return JSON.stringify(userList, null, 2);
};

export default Users;
