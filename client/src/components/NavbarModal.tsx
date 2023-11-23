'use client'
import * as React from 'react';
import {motion} from "framer-motion";
import Modal from '@mui/material/Modal';
import { IoIosClose } from "react-icons/io";
import Link from "next/link";
import { usePathname } from "next/navigation";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const links = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/mentors", label: "Mentors" }
];

interface NavbarProps {
  value: boolean,
  setVisible: (x: boolean) => void,
}

export default function NavbarModal({value, setVisible}:NavbarProps) {
  const handleClose = () => setVisible(false);
  const path = usePathname();

  return (
    <div>
      <Modal
        open={value}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{y: 0, opacity: 1}}
          exit={{y: 100, opacity: 0}}
          transition={{type: 'tween'}}
          className="flex relative justify-center items-center w-[100vw] h-[100vh] ">
          <span className="absolute top-0 right-0" onClick={handleClose}>
            <IoIosClose size={100} color={'white'} />
          </span>
          <div className="h-full w-full flex flex-col justify-center items-center border-r-[3px] border-black bg-[#282828] text-5xl text-white/70 gap-y-4">
            {links.map(link => (
              <Link key={link.href} className="relative" href={link.href}>
                {((path.includes(link.href) && link.href !== '/') || (path === '/' && link.href === '/')) &&
                  <motion.span layoutId="undreline" className="absolute left-0 -bottom-1 block h-[2px] w-full bg-[#94221a] rounded-xl" />}

                {link.label}
              </Link>
            ))}
          </div>
        </motion.div>
      </Modal>
    </div>
  );
}