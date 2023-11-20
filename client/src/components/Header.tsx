"use client";
import Image from "next/image";
import logo from "../../public/logo.svg";
import { FiBell, FiSearch } from "react-icons/fi";
import Link from "next/link";
import UnderLineText from "@/components/UnderLineText";
import Cart from "@/components/Cart";
import Tabs from "@/components/Tabs";
import { useTypedSelector } from "@/redux/store";
import { RxAvatar } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { logOut } from "@/redux/slices/authSlice";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import NavbarModal from "@/components/NavbarModal";
import { white } from "next/dist/lib/picocolors";

const isClientSide = () => typeof window !== "undefined";

const getWindowSize = () => {
  if (isClientSide()) {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  } else {
    return { innerWidth: 0, innerHeight: 0 };
  }
};

const Header = () => {
  const auth = useTypedSelector(x => x.auth);
  const dispatch = useDispatch();

  const [windowDimensions, setWindowDimensions] = useState({ innerWidth: 0, innerHeight: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setWindowDimensions(getWindowSize());

    function handleResize(e: Event) {
      // @ts-ignore
      setWindowDimensions({ innerHeight: e.target.innerHeight, innerWidth: e.target.innerWidth });
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLogOut = () => {
    dispatch(logOut());
    localStorage.removeItem("token");
  };

  return (
    <nav
      className={`w-full h-[80px] text-[#979797] fixed bg-[#141414] flex justify-between items-center px-12 max-lg:px-2 z-30`}>
      {windowDimensions.innerWidth < 940 && windowDimensions.innerWidth !== 0 ?
        <div className="w-[100px] px-2 h-full flex justify-center items-center border-r-[3px] border-black">
        <button onClick={() => setVisible(!visible)}><img className="w-[64px]"
                                                          src="https://www.svgrepo.com/show/506800/burger-menu.svg"
                                                          color={'white'}
                                                          alt="open side menu" /></button></div> : (
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
        )}
      <AnimatePresence>
        {visible && <NavbarModal setVisible={setVisible} value={true} />}
      </AnimatePresence>
      {!(windowDimensions.innerWidth < 940 && windowDimensions.innerWidth !== 0) &&
        <div className="w-full flex justify-center items-center border-r-[3px] border-black h-full">
          <Tabs />
        </div>}
      <div
        className="w-full flex justify-center items-center border-r-[3px] border-black h-full max-w-[400px] relative">
        <div className={`flex gap-x-8 max-xl:gap-x-3 max-xl:px-6`}>
          <div className="bg-[#090909] p-4 hover:bg-[#94221a]">
            <FiSearch color={"white"} />
          </div>
          <div className="bg-[#090909] p-4 hover:bg-[#94221a]">
            <FiBell color={"white"} />
          </div>
          <Cart />
        </div>
      </div>
      <div className="w-full flex justify-center items-center max-w-[300px]">
        <div>
          {auth.isAuth ? <div className="flex items-center gap-x-4">
            <RxAvatar size={35} />
            <div className="flex flex-col">
              <p className="text-white/60 font-semibold w-full max-w-[100px] truncate">{auth.user.email}</p>
              <div className="w-fit">
                <UnderLineText color="#94221a" height={2}>
                  <p onClick={handleLogOut} className="text-sm w-fit">Log out</p>
                  <div className="absolute -bottom-1 left-[1px] w-[95%] h-[1px] bg-[#ffffff] z-10" />
                </UnderLineText>
              </div>
            </div>

          </div> : (
            <Link href={"/login"}>
              <UnderLineText color="#94221a" height={2}>
                <p>Log in</p>
              </UnderLineText>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;