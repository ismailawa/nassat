import React, { useState } from 'react';

function ExpandedNavItem({ Icon, items, children }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="flex justify-center items-center w-10 h-10 relative cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex justify-center items-center w-5 h-5 bg-red-600 rounded-full text-white text-sm absolute right-0 top-0">
        {items}
      </div>
      <Icon size={25} />
      {isOpen && children}
    </div>
  );
}

export default ExpandedNavItem;
