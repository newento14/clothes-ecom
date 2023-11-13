"use client";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

interface Props {
  children: React.ReactNode;
  color: string;
  height: number;
}

const UnderLineText = ({ children, color, height }: Props) => {
  const [hover, setHover] = useState(false);

  return (

    <motion.div
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
      className="relative"
    >
      {children}
      <AnimatePresence>
        {hover &&

          <motion.div
            initial={{ width: "0", zIndex: 111 }}
            animate={{ width: "100%" }}
            exit={{ width: "0" }}
            transition={{ type: "spring", duration: 0.8 }}

            className={`absolute -bottom-1 bg-[${color}] w-full h-[${height}px] rounded-xl`}
          />

        }
      </AnimatePresence>
    </motion.div>

  )
    ;
};

export default UnderLineText;