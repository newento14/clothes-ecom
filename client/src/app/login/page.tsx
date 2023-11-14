"use client";
import { useState } from "react";
import UnderLineText from "@/components/UnderLineText";
import { useDispatch } from "react-redux";
import { logIn } from "@/redux/slices/authSlice";
import { UserApi } from "@/services/userApi";
import { AuthResponse } from "@/types/user";
import { useTypedSelector } from "@/redux/store";

export interface IEmailPassword {
  email: string;
  password: string;
}

const Page = () => {
  const dispatch = useDispatch();
  const isAuth = useTypedSelector(x => x.auth.isAuth);

  const [inputData, setInputDate] = useState<IEmailPassword>({
    email: "",
    password: ""
  });

  const handleSignIn = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const response = await UserApi.login(inputData) as AuthResponse;
    console.log(response);
    dispatch(logIn(response.user));
  };

  const handleSignUp = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    UserApi.registration(inputData);
  };

  return (
    <div className="flex justify-center items-center w-[100vw] h-[100vh]">
      {isAuth ? <p className="text-white/70 font-semibold">You successfully logged in to your account</p> : (
        <form className="text-white/60">
          <p className="text-xl text-white/60 font-semibold text-center mb-4">SIGN IN / SIGN UP</p>
          <input
            placeholder="Enter your email"
            onChange={e =>
              setInputDate({ ...inputData, email: e.target.value })
            }
            className="px-4 py-2 bg-[#5c5b5c] block mb-3 outline-none"
            value={inputData.email}
          />
          <input
            placeholder="Enter your password"
            type="password"
            onChange={e =>
              setInputDate({ ...inputData, password: e.target.value })
            }
            className="px-4 py-2 bg-[#5c5b5c] block mb-5 outline-none"
            value={inputData.password}
          />
          <div className="flex items-center justify-center">
            <button onClick={handleSignIn} className="text-white/60 mr-5">
              <UnderLineText color="#94221a" height={2}>
                <p>Sign In</p>
                <div className="absolute -bottom-1 w-[95%] left-[1px] h-[2px] bg-[#ffffff] z-10" />
              </UnderLineText>
            </button>
            <button onClick={handleSignUp} className="text-white/60">
              <UnderLineText color="#94221a" height={2}>
                <p>Sign Up</p>
                <div className="absolute -bottom-1 w-[95%] left-[1px] h-[2px] bg-[#ffffff] z-10" />
              </UnderLineText>
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Page;