import React from 'react';
import Image from 'next/image';
import flash from '../assets/images/flash.png';

function Offer() {
  return (
   <div className=" w-full  overflow-hidden rounded-xl mt-8 mb-6 shadow-xl">
     <Image src={flash} alt="flash screen" layout={'responsive'}  height={2000} />
   </div>
  );
}

export default Offer;
