/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Image from 'next/image';
import { Star } from 'react-star';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import { MdAddShoppingCart } from 'react-icons/md';
import { AiOutlineHeart, AiFillHeart, AiOutlineEye } from 'react-icons/ai';

export default function ProductDetail({ open, setOpen, product }) {
  const cancelButtonRef = useRef(null);
  const [productCount, setProductCount] = useState(1);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  const handleSetProductCount = (type) => {
    switch (type) {
      case '+':
        setProductCount(productCount + 1);
        break;
      case '-':
        if (productCount > 1) {
          setProductCount(productCount - 1);
        }
        break;
      default:
        break;
    }
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle lg:max-w-6xl sm:max-w-lg sm:w-full lg:w-full">
              {product && (
                <div className="flex justify-between m-10 ">
                  <div className="flex border-2 border-gray-400 w-[500px]  h-[500px]  rounded-lg">
                    <Image
                      src={product.image[0]}
                      alt=""
                      width="500"
                      height="500"
                    />
                  </div>
                  <div className="flex flex-col flex-1 ml-8 space-y-3">
                    <h1 className=" text-4xl font-bold">{product.name}</h1>
                    <p className="text-2xl">{product.category.name}</p>
                    <h1 className="text-sm text-gray-500">
                      {product.description}
                    </h1>
                    <div className="flex space-x-20 mb-5">
                      <span className="text-xl font-bold">
                        ₦
                        {product.price.toLocaleString(undefined, {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </span>
                      {product?.comparePrice && (
                        <span className="text-sm font-semibold line-through">
                          ₦
                          {product?.comparePrice.toLocaleString(undefined, {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}
                        </span>
                      )}
                    </div>
                    <div className="flex space-x-10">
                      <Star
                        defaultValue={product.rating}
                        fraction={2}
                        readOnly={true}
                        shape="thin"
                      />
                      <div className="flex"> 132 reviews </div>
                    </div>
                    <div>
                      <p className=" text-gray-600 font-extralight">
                        is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industrys standard
                        dummy text ever since the 1500s, when an unknown printer
                        took a galley of type and scrambled it to make a type
                        specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining
                        essentially unchanged. It was popularised in the 1960s
                        with the release of Letraset sheets containing Lorem
                        Ipsum passages, and more recently with desktop
                        publishing software like Aldus PageMaker including
                        versions of Lorem Ipsum.
                      </p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-3">
                        <div
                          className="flex items-center justify-center w-6 h-6 border-2 border-gray-200 rounded-lg cursor-pointer"
                          onClick={() => handleSetProductCount('-')}
                        >
                          <IoIosArrowBack />
                        </div>

                        <div className="">{productCount}</div>
                        <div
                          className="flex items-center justify-center w-6 h-6 border-2 border-gray-200 rounded-lg cursor-pointer"
                          onClick={() => handleSetProductCount('+')}
                        >
                          <IoIosArrowForward />
                        </div>
                      </div>
                      <div className="flex cursor-pointer justify-center items-center bg-red-500 text-white rounded-lg py-1 px-6 space-x-3">
                        <MdAddShoppingCart />
                        <span>ADD TO CART</span>
                      </div>
                      {isLiked ? (
                        <AiFillHeart
                          className=" cursor-pointer"
                          size={25}
                          color="red"
                          onClick={handleLike}
                        />
                      ) : (
                        <AiOutlineHeart
                          className="cursor-pointer"
                          size={25}
                          color="red"
                          onClick={handleLike}
                        />
                      )}
                    </div>
                    <div className="border-2 border-gray-200 my-8"></div>
                    <div className="flex space-x-6 items-center">
                      <div className="text-2xl font-bold">Total:</div>
                      <div className="text-2xl">
                        ₦
                        {(product.price * productCount).toLocaleString(
                          undefined,
                          {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          }
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className=" px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => {
                    setOpen(false);
                    setProductCount(1);
                  }}
                  ref={cancelButtonRef}
                >
                  Close
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
