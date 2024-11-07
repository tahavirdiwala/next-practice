"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Products = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    setLoading(true);
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then(setData)
      .finally(() => {
        setLoading(false);
      });
  };

  console.log("loading", loading);

  return (
    <>
      <div style={{ display: "flex", gap: "0.5" }}>
        <h3 style={{ margin: "1rem" }}>This is Products</h3>
        <Link href={"/users"} style={{ margin: "1rem" }}>
          Back to users
        </Link>
      </div>
      {loading ? (
        <p style={{ margin: "1rem" }}> loading products..</p>
      ) : (
        <ul style={{ margin: "2rem" }}>
          {data?.products?.map((item) => {
            return <li key={item?.id}>{item?.title}</li>;
          })}
        </ul>
      )}
    </>
  );
};

export default Products;
