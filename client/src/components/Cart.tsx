"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useTypedSelector } from "@/redux/store";
import { FiShoppingCart } from "react-icons/fi";
import { useState } from "react";
import CartItem from "@/components/CartItem";
import { ConvertToCurrency } from "@/utils/convertToCurrency";
import UnderLineText from "@/components/UnderLineText";
import Link from "next/link";

const Cart = () => {
  const cart = useTypedSelector(x => x.cart.cart);
  const isAuth = useTypedSelector(x => x.auth.isAuth)
  const [cartVisible, setCartVisible] = useState(false);

  const cartContent = (
    <motion.div
      initial={{ y: -50, opacity: 0, zIndex: 20 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -50, opacity: 0 }}
      transition={{ ease: "easeOut" }}
      onClick={(e) => e.stopPropagation()}
      className="absolute w-full h-fit left-0 top-[80px] bg-[#131113] max-h-[600px] overflow-x-hidden  overflow-y-auto p-6">
      <p>My cart</p>
      <AnimatePresence>
        {cart.map(x => (
          <CartItem key={x.product.id} item={x} />
        ))}
      </AnimatePresence>
      <p className="mt-4">Total:</p>
      <p
        className="font-semibold text-xl text-white">{ConvertToCurrency(cart.reduce((acc, x) => acc + x.product.price * x.count, 0))}</p>
      <div className="flex justify-center items-center">
        <UnderLineText color="#94221a" height={2}>
          {isAuth ? <p className="text-white">CHECKOUT</p> : <Link href={'/login'} onClick={() => setCartVisible(false)}><p className="text-white">LOGIN TO CHECKOUT</p></Link> }

          <div className="absolute -bottom-1 w-full h-[1px] bg-[#ffffff] z-10" />
        </UnderLineText>
      </div>
    </motion.div>
  );

  return (
    <div onClick={() => setCartVisible(!cartVisible)} className="z-20">
      <div className="bg-[#090909] p-4 hover:bg-[#94221a]">
        <FiShoppingCart color={"white"} />
      </div>
      {cart.length !== 0 && <span
        className="flex justify-center items-center absolute w-[16px] h-[16px] rounded-full bg-[#df2024] top-5 right-24 text-white font-bold text-sm select-none">
        {cart.length}
      </span>}
      <AnimatePresence>
        {cartVisible && (cart.length !== 0 ? cartContent :
          <motion.div
            initial={{ y: -50, opacity: 0, zIndex: 20  }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="absolute w-full h-fit left-0 top-[80px] bg-[#131113] max-h-[600px] overflow-y-auto p-6">
            <p>My cart</p>
            <p className="mt-6 text-center">Cart is empty</p>
          </motion.div>)}
      </AnimatePresence>
    </div>
  );
};

export default Cart;