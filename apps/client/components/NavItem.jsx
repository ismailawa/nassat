import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

function NavItem({ direct, title, isActive, setSelected }) {
  const router = useRouter();
  return (
    <Link href={direct}>
      <a
        className={`font-semibold hover:text-red-500 ${
          router.pathname === direct ? 'text-blue-600' : 'text-black'
        } cursor-pointer`}
        onClick={setSelected}
      >
        {title}
      </a>
    </Link>
  );
}

export default NavItem;
