import Card from "@/components/Card";
import Layout from "@/components/Layout/Layout";
import { data } from "../utils/data.js";
import React from "react";

const Product = () => {
  return (
    <Layout>
      <div className="w-full bg-black flex flex-wrap flex-col gap-4 py-4 items-center justify-center lg:flex-row lg:gap-6 lg:py-12">
        {data.map((card, index) => (
          <Card data={card} key={index} />
        ))}
      </div>
    </Layout>
  );
};

export default Product;
