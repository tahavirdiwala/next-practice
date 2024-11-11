import React from "react";

const RoleById = ({ params }: { params: { id: string } }) => {
  return <div>role by id - {params.id}</div>;
};

export default RoleById;
