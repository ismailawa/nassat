import React, { useState } from 'react';
import { MdDashboard } from 'react-icons/md';
import { menu } from '../config/menu';

function SideBar() {
  const [active, setActive] = useState(menu[0].name);

  const handleClick = (name) => {
    setActive(name);
  };
  return (
    <div className="flex flex-col items-center gap-y-4 py-8 w-24 bg-gray-900">
      <button className="p-2 bg-opacity-20 rounded-xl bg-primary">
        <MdDashboard color="#EB966A" />
      </button>
      <div className="flex flex-col gap-y-4 items-end self-end">
        {menu.map((item, index) => (
          <div
            key={index}
            className={` ${
              active === item.name
                ? ' bg-gray-800 rounded-l-xl relative before:absolute before:w-4 before:h-8 before:-top-8 before:rounded-br-xl before:right-0 before:shadow-inverset after:absolute  after:w-4 after:h-8 after:-bottom-8 after:rounded-tr-xl after:right-0 after:shadow-inverseb'
                : ''
            }`}
          >
            <button
              className={`p-4 my-4 mr-4 ml-3 rounded-xl ${
                active === item.name
                  ? 'text-white shadow-primary bg-primary'
                  : 'text-primary'
              }`}
              onClick={() => handleClick(item.name)}
            >
              <item.Icon className="w-6 h-6 fill-current" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SideBar;
