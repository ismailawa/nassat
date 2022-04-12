import Layout from '../../components/Layout';
import React, {useContext, useEffect, useState} from 'react';
import { Tab } from '@headlessui/react';
import { Fragment } from 'react';
import { IoMdArrowForward } from 'react-icons/io';
import {useRouter} from "next/router";
import useForm from "../../hooks/useForm";
import {useRegisterUserMutation} from "../../services/auth";
import {AppContext} from "../../context/Provider";
import MiniCartItem from "../../components/MiniCartItem";
import Link from "next/link";
import {useCreateOtherMutation} from "../../services/orders";
import {CLEAR_CART} from "../../constants/actionTypes";

function Checkout() {

  const handleSignup = async () => {
    const result = await createOther({
      firstName:formState.firstName,
        lastName:formState.lastName,
        country:"nigeria",
        address:formState.address,
        city:formState.localGovt,
        state:formState.state,
        postCode:"00000",
        phone:formState.phone,
        email:formState.email,
        additionalInfo:formState.additionalInfo,
        longitude:123.232,
        latitude:123.322,
        products:cartState.cart.map(item => ({
          productId:item.product._id,
          productName:item.product.name,
          quantityOrdered :item.product.quantity,
          productPrice:item.product.price,
          totalPricePurchase:item.totalPrice,
          productImage:item.product.image[0]})),
        total:subTotal+shipping,
    });
   console.log(result);
    if(result.data){
      window.location = result.data.link;
    }
    cartDispatch({type: CLEAR_CART});
  };
  const { cartState, cartDispatch } = useContext(AppContext);
  const [subTotal, setSubTotal] = useState(0);
  const [shipping, setShipping] = useState(0);
  const [formState, handleChange] = useForm(handleSignup);
  const [createOther, { isLoading, isError, isSuccess, error }] = useCreateOtherMutation();

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [user, setUser] = useState(null);
  const handleNextTab = () => {
    setSelectedIndex(selectedIndex + 1);
  };

  useEffect(()=>{

      if(user){

        formState.firstName = user?.fullname.split(' ')[0];
        formState.lastName = user?.fullname.split(' ')[1];
        formState.state = user?.addAddress[0]?.state;
        formState.localGovt =  user?.addAddress[0]?.localGovt;
        formState.address =  user?.addAddress[0]?.address;
        formState.phone =  user?.phone;
        formState.email =  user?.email;
      }
  },[user]);

  useEffect(()=>{
    const sub = cartState.cart.reduce((acc, item) => acc + item.totalPrice, 0);
    const ship = 1500 + ((cartState.cart.reduce((acc, item) => acc + item.quantity, 0)-1)* 100);
    setSubTotal(sub);
    setShipping(ship);
  }, [cartState.cart]);

  useEffect(()=>{
    const localUser = localStorage.getItem('user');
    if(localUser){
      setUser(JSON.parse(localUser));
    }
  }, [localStorage]);


  return (
    <Layout>
      <div className="min-h-screen container mx-auto p-20">
        <div className=" bg-white p-10 mt-10">
          <form className="w-full min-h-[400px]">
            <Tab.Group
              selectedIndex={selectedIndex}
              onChange={setSelectedIndex}
            >
              <Tab.List className="flex justify-between">
                <Tab as={Fragment}>
                  {({ selected }) => (
                    <div className="flex flex-col space-y-2 w-1/2">
                      <div className="flex justify-center items-center space-x-3 cursor-pointer">
                        <div className=" flex justify-center items-center bg-red-500 rounded-full w-6 h-6 text-white">
                          1
                        </div>
                        <div className="">SHIPPING</div>
                      </div>
                      {selected && <div className=" h-1 bg-red-500"></div>}
                    </div>
                  )}
                </Tab>
                <Tab as={Fragment}>
                  {({ selected }) => (
                    <div className="flex flex-col space-y-2 w-1/2">
                      <div className="flex justify-center items-center space-x-3 cursor-pointer">
                        <div className=" flex justify-center items-center bg-red-500 rounded-full w-6 h-6 text-white">
                          2
                        </div>
                        <div className="">REVIEW & CONFIRMATION</div>
                      </div>
                      {selected && <div className=" h-1 bg-red-500">

                      </div>}
                    </div>
                  )}
                </Tab>
              </Tab.List>
              <Tab.Panels className="p-6">
                <Tab.Panel>
                  <div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label
                          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-first-name"
                        >
                          First Name
                        </label>
                        <input
                          className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                          id="grid-first-name"
                          type="text"
                          name="firstName"
                          value={formState.firstName  || ''}
                          onChange={handleChange}
                          placeholder="Jane"
                        />
                        {/* <p className="text-red-500 text-xs italic">
                          Please fill out this field.
                        </p> */}
                      </div>
                      <div className="w-full md:w-1/2 px-3">
                        <label
                          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-last-name"
                        >
                          Last Name
                        </label>
                        <input
                          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          id="grid-last-name"
                          type="text"
                          name="lastName"
                          onChange={handleChange}
                          value={formState.lastName || ''}
                          placeholder="Doe"
                        />
                      </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label
                          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-state"
                        >
                          State
                        </label>
                        <div className="relative">
                          <select
                            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-state"
                            name="state"
                            value={formState.state || ''}
                            defaultValue={"Select State"}
                            onChange={handleChange}
                          >
                            <option>Plateau</option>
                          </select>
                          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg
                              className="fill-current h-4 w-4"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="w-full md:w-1/2 px-3">
                        <label
                          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-state"
                        >
                          LGA
                        </label>
                        <div className="relative">
                          <select
                            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-state"
                            name="lga"
                            value={formState.localGovt || ''}
                            defaultValue={"Select LGA"}
                            onChange={handleChange}
                          >
                            <option>Jos-North</option>
                            <option>Jos-South</option>
                          </select>
                          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg
                              className="fill-current h-4 w-4"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                      <div className="w-full px-3">
                        <label
                          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Address
                        </label>
                        <input
                          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          id="grid-password"
                          type="text"
                          name="address"
                          value={formState.address || ''}
                          onChange={handleChange}
                          placeholder="Enter your house address"
                        />
                      </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-2">
                      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label
                          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-city"
                        >
                          Phone
                        </label>
                        <input
                          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          id="grid-city"
                          type="text"
                          name="phone"
                          value={formState.phone ||  ''}
                          onChange={handleChange}
                          placeholder="+23490XXXXXX54"
                        />
                      </div>

                      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label
                          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-zip"
                        >
                          Email
                        </label>
                        <input
                          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          id="grid-zip"
                          type="email"
                          name="email"
                          value={formState.email ||  user?.email}
                          onChange={handleChange}
                          placeholder="example@email.com"
                        />
                      </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                      <div className="w-full px-3 mt-3">
                        <h1 className="my-2 text-xl font-bold">
                          Additional information
                        </h1>
                        <label
                          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Order notes
                        </label>
                        <textarea
                          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          id="grid-password"
                          type="text"
                          name="additionalInfo"
                          value={formState.additionalInfo || ""}
                          onChange={handleChange}
                          rows="6"
                          placeholder="Note about your order, e.g. special note for delivery"
                        ></textarea>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <div
                        className=" flex justify-center items-center text-red-500 py-2 px-5 rounded-2xl cursor-pointer space-x-2"
                        onClick={handleNextTab}
                      >
                        <span className="text-2xl font-bold">Next</span>
                        <IoMdArrowForward size={30} />
                      </div>
                    </div>
                  </div>
                </Tab.Panel>
                {/*<Tab.Panel>payment</Tab.Panel>*/}
                <Tab.Panel>
                  <div className="flex w-full justify-between space-x-1">
                    <div className="flex flex-col w-1/2 m-3 bg-gray-100 p-8 rounded-xl space-y-3 h-96">
                      <h1 className="text-red-500 font-bold text-2xl mb-2">Shipping Address</h1>
                      <div className="flex justify-between">
                        <h1>Full Name</h1>
                        <p>{formState.firstName} {formState.lastName}</p>
                      </div>
                      <div className="flex justify-between">
                        <h1>State</h1>
                        <p>{formState.state}</p>
                      </div>
                      <div className="flex justify-between">
                        <h1>City</h1>
                        <p>{formState.localGovt}</p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Address</h1>
                        <p>{formState.address}</p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Phone</h1>
                        <p>{formState.phone}</p>
                      </div>
                    </div>
                    <div className="flex flex-col w-1/2 m-3 bg-gray-100 p-8 rounded-xl">
                      <h1 className="text-red-500 font-bold text-2xl mb-2">Summary</h1>
                      {cartState.cart.map(item => (
                        <MiniCartItem key={item.product._id} item={item} visible={false} />
                      ))}
                      <div className="h-0.5 bg-black my-3"></div>
                      <div className="flex justify-between">
                        <span className="text-xl">Subtotal</span>
                        <span className="text-xl"> ₦ {subTotal.toLocaleString(undefined, {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-xl">Shipping</span>
                        <span className="text-xl"> ₦ {shipping.toLocaleString(undefined, {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-xl">Tax</span>
                        <span className="text-xl"> ₦ 0</span>
                      </div>
                      <div className="h-0.5 bg-black my-3"></div>
                      <div className="flex justify-between">
                        <span className="text-xl">Grand Total</span>
                        <span className="text-xl"> ₦ {(shipping + subTotal).toLocaleString(undefined, {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}</span>
                      </div>

                        <div className="flex items-center justify-center space-x-3 cursor-pointer text-white bg-red-500 rounded-full py-2 px-5 hover:bg-red-700 mt-3" onClick={handleSignup}>
                          <span className="text-xl">Order Now</span>
                        </div>

                    </div>
                  </div>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default Checkout;
