import React from "react";
import axios from "axios";
import StoreBlock from "@/components/StoreBlock";
import { $axios } from "@/api/api";
import { IProduct } from "@/types/product";

const Page = async () => {
  const response = await fetch(process.env.SERVER_URL + '/api/products?type=men', {next: {revalidate: 10}});
  const data: IProduct[] = await response.json() as IProduct[];

  return (
    <div className="w-full h-full">
      <div className="w-[90%] h-full flex flex-wrap pt-[80px] m-auto">
        {data.map((item, i) => (
          <StoreBlock key={item.id} item={item} delay={0.5 + i * 0.1}/>
        ))}

      </div>
    </div>
  );
};

export default Page;