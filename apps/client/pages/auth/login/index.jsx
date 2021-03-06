/* eslint-disable @next/next/no-html-link-for-pages */
import React, {useContext, useEffect} from 'react';
import useForm from '../../../hooks/useForm';
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGoogle,
  FaRegEnvelope,
} from 'react-icons/fa';
import { MdLockOutline } from 'react-icons/md';
import { useLoginUserMutation } from '../../../services/auth';
import {toast} from "react-hot-toast";
import { useRouter } from 'next/router'
import {AppContext} from "../../../context/Provider";
import {SET_AUTH_TOKEN, SET_USER} from "../../../constants/actionTypes";

function Login() {
  const router = useRouter();
  const { authDispatch} = useContext(AppContext);
  const handleLogin = async () => {
   const result = await loginUser(formState);
   if (result.data.success) {
     localStorage.setItem('token', result.data.token);
     localStorage.setItem('user', JSON.stringify(result.data.user));
     authDispatch({type: SET_AUTH_TOKEN, payload: result.data.token});
     authDispatch({type: SET_USER, payload: result.data.user});

   }

  };
  const [formState, handleChange, handleSubmit] = useForm(handleLogin);
  const [ loginUser, { isError, isSuccess, isLoading, error} ] = useLoginUserMutation();

  useEffect(() => {
    if (isError) {
      toast.error(`${error.data.error}`);
    }
    if (isSuccess) {
      router.back();
    }
  }, [ isError, isSuccess]);

  return (
    <div className="flex flex-col justify-center items-center w-full px-20 text-center bg-gray-100 min-h-screen">
      <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
        <div className=" w-3/5 p-5">
          <div className="text-left font-bold">
            <span className="text-red-500">Welcome</span> back!!
          </div>
          <div className=" py-10">
            <h2 className="text-3xl font-bold text-red-500 mb-2">
              Sign in to account
            </h2>
            <div className="border-2 w-10 border-red-500 inline-block mb-2"></div>
            <div className="flex justify-center my-10">
              <a
                href="#"
                className="border-2 border-gray-200 rounded-full p-3 mx-1"
              >
                <FaFacebookF className="text-sm" />
              </a>
              <a
                href="#"
                className="border-2 border-gray-200 rounded-full p-3 mx-1"
              >
                <FaLinkedinIn className="text-sm" />
              </a>
              <a
                href="#"
                className="border-2 border-gray-200 rounded-full p-3 mx-1"
              >
                <FaGoogle className="text-sm" />
              </a>
            </div>
            <p className=" text-gray-400 my-3">or use your email account</p>
            <div className="flex flex-col items-center">
              <div className=" bg-gray-100 w-64 p-2 flex items-center mb-3">
                <FaRegEnvelope className=" text-gray-400 m-2" />
                <input
                  type="email"
                  name="email"
                  value={formState.email || ''}
                  onChange={handleChange}
                  placeholder="Enter Email"
                  className=" bg-gray-100 outline-none text-sm flex-1"
                />
              </div>
              <div className=" bg-gray-100 w-64 p-2 flex items-center mb-3">
                <MdLockOutline className=" text-gray-400 m-2" />
                <input
                  type="password"
                  name="password"
                  value={formState.password || ''}
                  onChange={handleChange}
                  placeholder="Enter Password"
                  className=" bg-gray-100 outline-none text-sm flex-1"
                />
              </div>
              <div className="flex justify-between w-64 mb-5">
                <label className="flex items-center text-sm">
                  <input type="checkbox" name="remembe" className="mr-1" />
                  Remember me
                </label>
                <a href="#" className=" text-xs">
                  Forgot Pasword?
                </a>
              </div>
              {isLoading ? (
                  <div
                    className="border-2 border-red-500 text-red-500 rounded-full px-12 py-2 inline-block font-semibold"
                  >
                    <div className="flex items-center">
                      <div className="spinner-border animate-spin inline-block w-6 h-6 border-4 rounded-full"
                           role="status">
                      </div>
                    </div>
                  </div>

              ) : (
                <div
                  onClick={handleSubmit}
                  className="border-2 border-red-500 text-red-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-red-500 hover:text-white cursor-pointer"
                >
                  Login
                </div>
              )}

            </div>
          </div>
        </div>
        <div className=" w-2/5 bg-red-500 rounded-tr-2xl rounded-br-2xl py-40 px-12 text-white">
          <h2 className="text-3xl font-bold ml-2">Nasco Direct</h2>
          <div className="border-2 w-10 border-white inline-block mb-2"></div>
          <p className="mb-10">
            Provide your personal information to start your journey with us.
          </p>
          <div className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-red-500">
            Signup
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
