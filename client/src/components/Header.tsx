import Image from "next/image";
import logo from "../../public/logo.svg";
import { FiBell, FiSearch, FiShoppingCart } from "react-icons/fi";
import Link from "next/link";
import UnderLineText from "@/components/UnderLineText";

const Header = () => {
  return (
    <nav
      className={`w-full h-[80px] text-[#979797] absolute bg-[#141414] flex justify-between items-center px-12 max-lg:px-2`}>
      <div className="w-full flex justify-center items-center border-r-[3px] border-black max-w-[250px]">
        <div className={`flex items-center justify-center`}>
          <Image className="w-[80px]" src={logo} alt="logo" />
          <div className="flex flex-col">
            <div className="text-lg flex justify-between w-[80px]">
              <p>L</p>
              <p>O</p>
              <p>R</p>
              <p>I</p>
              <p>A</p>
              <p>N</p>
            </div>
            <div className="flex justify-between w-[80px] text-[#525252]">
              <p>S</p>
              <p>T</p>
              <p>O</p>
              <p>R</p>
              <p>E</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center items-center border-r-[3px] border-black h-full">
        <div className={`flex gap-x-6`}>
          <Link href={"/"}>
            <UnderLineText text={"Home"} />
          </Link>
          <Link href={"/shop"}>
            <UnderLineText text={"Shop"} />
          </Link>
          <Link href={"/"}>
            <UnderLineText text={"Categories"} />
          </Link>
          <Link href={"/about"}>
            <UnderLineText text={"About"} />
          </Link>
          <Link href={"/"}>
            <UnderLineText text={"Mentors"} />
          </Link>
        </div>
      </div>
      <div className="w-full flex justify-center items-center border-r-[3px] border-black h-full max-w-[450px]">
        <div className={`flex gap-x-8`}>
          <div className="bg-[#090909] p-4">
            <FiSearch />
          </div>
          <div className="bg-[#090909] p-4">
            <FiBell />
          </div>
          <div className="bg-[#090909] p-4">
            <FiShoppingCart />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center items-center max-w-[350px]">
        <div>
          <UnderLineText text={"Log in"} />
        </div>
      </div>
    </nav>
  );
};

export default Header;