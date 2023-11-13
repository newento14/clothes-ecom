"use client";
import { useTypedSelector } from "@/redux/store";
import { FiShoppingCart } from "react-icons/fi";
import { useState } from "react";
import CartItem from "@/components/CartItem";
import { ConvertToCurrency } from "@/utils/convertToCurrency";
import UnderLineText from "@/components/UnderLineText";

const Cart = () => {
  const cart = useTypedSelector(x => x.cart.cart);
  const [cartVisible, setCartVisible] = useState(false);

  const cartContent = (
    <div onClick={(e) => e.stopPropagation()} className="absolute w-full h-fit left-0 top-[80px] bg-[#131113] max-h-[600px] overflow-y-auto p-6">
      <p>My cart</p>
      {cart.map(x => (
        <CartItem key={x.product.id} item={x} />
      ))}
      <p className="mt-4">Total:</p>
      <p
        className="font-semibold text-xl text-white">{ConvertToCurrency(cart.reduce((acc, x) => acc + x.product.price * x.count, 0))}</p>
      <div className="flex justify-center items-center">
        <UnderLineText color="#94221a" height={2}>
          <p className="text-white">PAYMENT</p>
          <div className="absolute -bottom-1 w-full h-[1px] bg-[#ffffff] z-10" />
        </UnderLineText>
      </div>
    </div>
  );

  return (
    <div onClick={() => setCartVisible(!cartVisible)} className="bg-[#090909] p-4 hover:bg-[#94221a]">
      <FiShoppingCart color={"white"} />
      {cartVisible && (cart.length !== 0 ? cartContent :
        <div onClick={(e) => e.stopPropagation()} className="absolute w-full h-fit left-0 top-[80px] bg-[#131113] max-h-[600px] overflow-y-auto p-6">
          <p>My cart</p>
          <p className="mt-6 text-center">Cart is empty</p>
        </div>)}
    </div>
  );
};

export default Cart;