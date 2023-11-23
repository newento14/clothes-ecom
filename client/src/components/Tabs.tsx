"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/mentors", label: "Mentors" }
];


const Tabs = () => {
  const path = usePathname();

  const classes = ['flex', 'gap-x-6', 'px-2'];

  return (
    <div className={classes.join(' ')}>
      {links.map(link => (
        <Link key={link.href} className="relative" href={link.href}>
          {((path.includes(link.href) && link.href !== '/') || (path === '/' && link.href === '/')) &&
            <motion.span layoutId="undreline" className="absolute left-0 -bottom-1 block h-[2px] w-full bg-[#94221a] rounded-xl" />}

          {link.label}
        </Link>
      ))}
    </div>
  );
};

export default Tabs;