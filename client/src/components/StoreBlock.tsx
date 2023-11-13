import { IProduct } from "@/types/product";
import { ConvertToCurrency } from "@/utils/convertToCurrency";
import AddToCart from "@/components/AddToCart";

interface Props {
  item: IProduct;
  delay: number;
}

const StoreBlock = ({ item, delay }: Props) => {
  return (
    <div
      style={{
        backgroundBlendMode: "multiply",
        backgroundImage: "url(/texture3.jpg)"
      }} className="flex flex-col justify-center items-center w-[300px] h-[300px] text-white/70 bg-[#94221a] border-2 border-black">
      <img className="w-[180px] h-[180px]" src={process.env.SERVER_URL + item.images[0]} alt={item.name} />
      <p className="font-serif mb-2">{item.name}</p>
      <p>{ConvertToCurrency(item.price)}</p>
      <AddToCart item={item} />
    </div>
  );
};

export default StoreBlock;