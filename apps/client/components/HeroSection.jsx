import React from 'react';
import HeroItem from './HeroItem';

function HeroSection() {
  return (
    <div className="w-full h-[500px]  lg:h-[700px] bg-gradient-to-t to-emerald-400 from-blue-600 p-8">
      <HeroItem />
    </div>
  );
}

export default HeroSection;
