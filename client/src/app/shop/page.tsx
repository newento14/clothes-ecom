"use client";
import {motion} from "framer-motion";
import Link from "next/link";

const Page = () => {
  return (
    <main className="h-[100vh]">
      <div className="flex items-start justify-between w-full h-full bg-[#151515] text-white/60">
        <Link href={"shop/men"}
              className="flex-1 border-r-[4px] border-t-[4px] border-black h-full">
          <motion.div
            initial={{x: -50, opacity: 0}}
            animate={{x: 0, opacity: 1}}
            transition={{duration: 0.8, ease: "easeIn"}}
            className="w-full h-full flex justify-center items-center">
            <p className="tracking-widest">MEN</p>
          </motion.div>
        </Link>
        <Link href={"shop/women"}
              className="flex-1 h-full border-t-[4px] border-black">
          <motion.div
            initial={{x: 50, opacity: 0}}
            animate={{x: 0, opacity: 1}}
            transition={{duration: 0.8, ease: "easeIn"}}
            className="w-full h-full flex justify-center items-center">
            <p className="tracking-widest">WOMEN</p>
          </motion.div>
        </Link>
      </div>
    </main>
  );
};

export default Page;