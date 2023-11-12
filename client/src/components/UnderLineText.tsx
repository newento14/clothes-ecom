"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

interface Props {
  text: string;
}

const UnderLineText = ({ text }: Props) => {
  const [hover, setHover] = useState(false);

  return (

    <motion.div
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
      className="relative"
    >
      <p>{text}</p>
      <AnimatePresence>
        {hover &&

          <motion.div
            initial={{ width: "0" }}
            animate={{ width: "100%" }}
            exit={{ width: "0" }}
            transition={{ type: "spring", duration: 0.8 }}

            className="absolute -bottom-1 bg-gray-400 w-full h-[3px] rounded-xl"
          />

        }
      </AnimatePresence>
    </motion.div>

  )
    ;
};

export default UnderLineText;