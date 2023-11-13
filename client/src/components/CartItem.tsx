import {motion} from "framer-motion";
import { changeCount, ICart, removeFromCart } from "@/redux/slices/cartSlice";
import { useState } from "react";
import { ConvertToCurrency } from "@/utils/convertToCurrency";
import { AiOutlineDelete, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useDispatch } from "react-redux";

const SERVER_URL = "http://localhost:8899";

interface Props {
  item: ICart;
}

const CartItem = ({ item }: Props) => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(item.count);

  const onCountChangeHandler = (value: number) => {
    if (value < 1) {
      dispatch(removeFromCart(item.product.id));
    }
    setCount(value);
    dispatch(changeCount({ id: item.product.id, count: value }));
  };

  const deleteHandler = () => {
    dispatch(removeFromCart(item.product.id));
  };

  return (
    <motion.div
      // initial={{x: 50, opacity: 0}}
      // animate={{x: 0, opacity: 1}}
      // exit={{x: -50, opacity: 0}}
      // transition={{ease: 'easeOut', delay: 0.1}}
      className="flex items-center text-white border-b-2 border-[#29282a]">
      <div className="w-[150px]">
        <img className="w-[150px] h-[150px]" src={SERVER_URL + item.product.images[0]} alt={item.product.name} />
      </div>
      <div className="flex flex-col">
        <p className="truncate text-xl font-semibold max-w-[150px] text-white/60">{item.product.name}</p>
        <p className="text-xl ">{ConvertToCurrency(item.product.price)}</p>
        <div className="flex items-center">
          <div onClick={() => onCountChangeHandler(count - 1)}
               className="flex justify-center items-center h-[32px] w-[32px]">
            <AiOutlineMinus />
          </div>
          <div className="flex justify-center items-center h-[32px] w-[32px] bg-[#0d0709]">
            {count}
          </div>
          <div onClick={() => onCountChangeHandler(count + 1)}
               className="flex justify-center items-center h-[32px] w-[32px]">
            <AiOutlinePlus />
          </div>
          <div onClick={deleteHandler} className="flex justify-center items-center h-[32px] w-[32px]">
            <AiOutlineDelete color={"red"} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CartItem;