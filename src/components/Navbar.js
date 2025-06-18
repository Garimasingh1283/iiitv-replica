import React from "react";

const Navbar = ({ onAboutClick , onExploreClick , onHomeClick}) => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 mt-4 shadow-md rounded-b-full border mx-auto max-w-7xl bg-white sticky top-0 z-50 cursor-pointer">
      <div className="bg-gradient-to-r from-gray-500 to-gray-800 text-white px-6 py-1 rounded-full font-semibold"
        onClick={onHomeClick}
        >
                Home
      </div>
        <div
          className="bg-gradient-to-r from-gray-500 to-gray-800 text-white px-6 py-1 rounded-full font-semibold cursor-pointer "
          onClick={onExploreClick}
        >
          Explore
        </div>

        <div
          className="bg-gradient-to-r from-gray-500 to-gray-800 text-white px-6 py-1 rounded-full font-semibold cursor-pointer"
          onClick={onAboutClick}
        >
          About Us
        </div>
    </nav>
  );
};

export default Navbar;
