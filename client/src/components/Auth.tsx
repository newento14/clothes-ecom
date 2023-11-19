"use client";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { $axios } from "@/api/api";
import { UserApi } from "@/services/userApi";
import { logIn } from "@/redux/slices/authSlice";
import { AuthResponse } from "@/types/user";

const Auth = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      if (localStorage.getItem('token') !== undefined) {
        const data = await UserApi.auth() as AuthResponse;
        dispatch(logIn(data.user))
      }
    }

    fetchData().catch(console.error);
  }, []);

  return (
    <>
    </>
  );
};

export default Auth;