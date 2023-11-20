import StoreBlock from "@/components/StoreBlock";
import { $axios } from "@/api/api";
import { IProduct } from "@/types/product";
import axios from "axios";

const Page = async () => {
  const response = await fetch(process.env.SERVER_URL + '/api/products?type=woman', {next: {revalidate: 1000}});
  const data: IProduct[] = await response.json() as IProduct[];

  return (
    <div className="w-full h-full">
      <div className="w-[90%] h-full flex flex-wrap pt-[80px] m-auto max-sm:justify-center">
        {data.map((item, i) => (
          <StoreBlock key={item.id} item={item} delay={0.5 + i * 0.1} />
        ))}
      </div>
    </div>
  );
};

export default Page;