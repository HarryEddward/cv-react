import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-center bg-gray-100 py-4 py-10 border-b-2 border-b-black">
      <ul className="flex items-center ">
        <li className="lg:mr-12 mr-10">
          <a href="#" className="text-gray-600 hover:text-black font-light text-black text-2xl">
            About
          </a>
        </li>
        <li className="lg2:mr-12">
          <a href="#" className="text-gray-600 hover:text-black font-light text-black text-2xl">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;