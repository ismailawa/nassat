/* eslint-disable @next/next/no-html-link-for-pages */
import React, {useEffect} from 'react';
import { useRouter } from 'next/router'

import {
  FaRegEnvelope,
} from 'react-icons/fa';

import { Toaster, toast} from "react-hot-toast";
import 'react-toastify/dist/ReactToastify.css';

import {BsFillPersonFill, BsFillTelephoneFill} from 'react-icons/bs';
import { MdLockOutline } from 'react-icons/md';
import useForm from '../../hooks/useForm';
import { useRegisterUserMutation } from '../../services/auth';

function Signup() {
  const router = useRouter();
  const handleSignup = async () => {
     await registerUser(formState);
  };

  const [formState, handleChange, handleSubmit] = useForm(handleSignup);

  const [registerUser, { isLoading, isError, isSuccess, error }] = useRegisterUserMutation();

  useEffect(() => {
    if (isError) {
        toast.error(`${error.data.error}`);
    }
    if (isSuccess) {
        router.push('/auth/login');
    }
  }, [ isError, isSuccess]);

  return (
    <>
      <Toaster
        position="top-right"
        autoClose={5000}
        reverseOrder={false}
      />

    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center items-center w-full px-20 text-center bg-gray-100 min-h-screen"
    >
      <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
        <div className=" w-3/5 p-5">
          <div className="text-left font-bold">
            <span className="text-red-500">Welcome</span>
          </div>
          <div className=" py-10">
            <h2 className="text-3xl font-bold text-red-500 mb-2">
              Signup for an account
            </h2>
            <div className="border-2 w-10 border-red-500 inline-block mb-2"></div>
            <div className="flex flex-col items-center">
              <div className=" bg-gray-100 w-96 p-2 flex items-center mb-3">
                <BsFillPersonFill className=" text-gray-400 m-2" />
                <input
                  type="text"
                  name="fullname"
                  value={formState.fullname || ''}
                  onChange={handleChange}
                  placeholder="Enter your fullname"
                  className=" bg-gray-100 outline-none text-sm flex-1"
                />
              </div>
              <div className=" bg-gray-100 w-96 p-2 flex items-center mb-3">
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
              <div className=" bg-gray-100 w-96 p-2 flex items-center mb-3">
                <BsFillTelephoneFill className=" text-gray-400 m-2" />
                <input
                  type="number"
                  name="phone"
                  value={formState.phone || ''}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className=" bg-gray-100 outline-none text-sm flex-1"
                />
              </div>
                <div className=" bg-gray-100 w-96 p-2 flex items-center mb-3">
                <BsFillPersonFill className=" text-gray-400 m-2" />
                  <select className="form-select appearance-none bg-gray-100 outline-none text-sm flex-1"
                          aria-label="Default select example"
                          name="gender"
                          value={formState.gender || ''}
                          defaultValue={"Select Gender"}
                          onChange={handleChange}
                  >
                    <option>Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Others">Others</option>
                  </select>
             </div>

              <div className=" bg-gray-100 w-96 p-2 flex items-center mb-3">
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
              {isLoading ? (
                <button type="button" className="bg-red-500  rounded-full" disabled>
                  <div className="flex items-center">
                    <div className="spinner-border animate-spin inline-block w-6 h-6 border-4 rounded-full my-4 mx-14"
                         role="status">
                    </div>
                  </div>
                </button>
              ) : (
                <input
                  type="submit"
                  value="Signup"
                  className="border-2 border-red-500 text-red-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-red-500 hover:text-white"
                />
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
          <a
            href="/auth/Signup"
            className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-red-500"
          >
            Login
          </a>
        </div>
      </div>
    </form>
    </>
  );
}

export default Signup;
