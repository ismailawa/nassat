import Layout from '../../components/Layout';
import React, { useState } from 'react';
import { Tab } from '@headlessui/react';
import { Fragment } from 'react';
import { IoMdArrowForward } from 'react-icons/io';

function Checkout() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleNextTab = () => {
    setSelectedIndex(selectedIndex + 1);
  };
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
                    <div className="flex flex-col space-y-2">
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
                    <div className="flex flex-col space-y-2">
                      <div className="flex justify-center items-center space-x-3 cursor-pointer">
                        <div className=" flex justify-center items-center bg-red-500 rounded-full w-6 h-6 text-white">
                          2
                        </div>
                        <div className="">PAYMENT</div>
                      </div>
                      {selected && <div className=" h-1 bg-red-500"></div>}
                    </div>
                  )}
                </Tab>
                <Tab as={Fragment}>
                  {({ selected }) => (
                    <div className="flex flex-col space-y-2">
                      <div className="flex justify-center items-center space-x-3 cursor-pointer">
                        <div className=" flex justify-center items-center bg-red-500 rounded-full w-6 h-6 text-white">
                          3
                        </div>
                        <div className="">REVIEW & CONFIRMATION</div>
                      </div>
                      {selected && <div className=" h-1 bg-red-500"></div>}
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
                          >
                            <option>Barkin Ladi</option>
                            <option>Bassa</option>
                            <option>Bokkos</option>
                            <option>Jos-East</option>
                            <option>Jos-North</option>
                            <option>Jos-South</option>
                            <option>Kanam</option>
                            <option>Kanke</option>
                            <option>Langtang North</option>
                            <option>Langtang South</option>
                            <option>Mangu</option>
                            <option>Mikang</option>
                            <option>Pankshin</option>
                            <option>Quaan Pan</option>
                            <option>Riyom</option>
                            <option>Shendam</option>
                            <option>Wase</option>
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
                          type="password"
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
                <Tab.Panel>payment</Tab.Panel>
                <Tab.Panel>Payments</Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default Checkout;
