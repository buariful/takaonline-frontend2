import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu, GiCancel } from "react-icons/gi";

const Navbar = () => {
  const [icon, setIcon] = useState(true);

  return (
    <div>
      {/* mobile navbar */}
      <div className="w-10/12 mx-auto md:hidden block py-2">
        <div className="flex justify-between items-center">
          <Link to="/home" className="font-bold text-xl">
            Taka Online
          </Link>

          <GiHamburgerMenu
            className={`cursor-pointer ${icon ? "block" : "hidden"}`}
            onClick={() => setIcon(false)}
          ></GiHamburgerMenu>
          <GiCancel
            className={`cursor-pointer ${icon ? "hidden" : "block"}`}
            onClick={() => setIcon(true)}
          ></GiCancel>
        </div>

        <div
          className={`${
            icon ? "hidden" : "flex"
          } flex-col bg-red-200 rounded-md`}
        >
          <Link to="/">Home</Link>
          <div>
            <Link
              to="/buy"
              className="bg-[#1e0f12] hover:bg-red-300 hover:text-black text-white font-semibold block px-10 py-2 rounded-lg"
            >
              Buy
            </Link>
          </div>
        </div>
      </div>

      {/*===========  desktop navbar ========== */}
      <div className={`hidden md:flex w-10/12 mx-auto justify-between py-5`}>
        <Link to="/home" className="font-bold text-xl">
          Taka Online
        </Link>
        <div className="flex justify-around md:basis-1/3 font-semibold ">
          <Link to="/">Home</Link>
          <Link
            to="/buy"
            className="bg-[#1e0f12] hover:bg-red-300 hover:text-black text-white font-semibold px-10 py-2 rounded-lg"
          >
            Buy
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
