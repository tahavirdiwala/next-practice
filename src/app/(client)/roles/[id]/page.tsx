import React from "react";

const RoleById = async ({ params }: { params: Promise<{ id: string }> }) => {
  const temp = await params;
  return <div>role by id - {temp.id}</div>;
};

export default RoleById;
