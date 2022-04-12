import React, {useContext, useEffect} from 'react';
import HeroItem from './HeroItem';
import {AppContext} from "../context/Provider";
import {GET_TO_FROM_CART} from "../constants/actionTypes";
import Image from "next/image";

function HeroSection() {

  const {cartState,  cartDispatch } = useContext(AppContext);

  useEffect(() => {
    cartDispatch({type: GET_TO_FROM_CART});
  },[]);

  return (
    <div className="">
      <Image src={"https://nassat.ng/wp-content/uploads/2022/02/order-and-deliver-new-mobile.gif"} alt={"fill page"} layout={'fill'} objectFit={"cover"} />
    </div>
  );
}

export default HeroSection;
