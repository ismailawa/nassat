import React from 'react';
import Link from 'next/link';

function NavItem({ direct, title, isActive, setSelected }) {
  return (
    <Link href={direct}>
      <a
        className={`font-semibold hover:text-red-500 ${
          isActive ? 'text-red-500' : 'text-black'
        } cursor-pointer`}
        onClick={setSelected}
      >
        {title}
      </a>
    </Link>
  );
}

export default NavItem;
