"use client";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { $axios } from "@/api/api";
import { SERVER_URL } from "@/constants/url";
import { UserApi } from "@/services/userApi";
import { logIn } from "@/redux/slices/authSlice";
import { AuthResponse } from "@/types/user";

const Auth = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const data = await UserApi.auth() as AuthResponse;
      dispatch(logIn(data.user))
    }

    fetchData().catch(console.error);
  }, []);

  return (
    <>
    </>
  );
};

export default Auth;