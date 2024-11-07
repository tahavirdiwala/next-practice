"use client";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import userService from "../services/user.service";
import Link from "next/link";

const Users = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["fetchUsers"],
    queryFn: async () => {
      const { data } = await userService.getAll();
      return data;
    },
  });
  console.log("isLoading", isLoading);

  return (
    <>
      <div style={{ display: "flex", gap: ".5rem" }}>
        <h3 style={{ margin: "1rem" }}>This is Users</h3>
        <Link href={"/products"} style={{ margin: "1rem" }}>
          Back to products
        </Link>
      </div>

      {isLoading ? (
        <p style={{ margin: "1rem" }}> loading users..</p>
      ) : (
        <ul style={{ margin: "2rem" }}>
          {data?.users?.map((item) => {
            return <li key={item?.id}>{item?.firstName}</li>;
          })}
        </ul>
      )}
    </>
  );
};

export default Users;
