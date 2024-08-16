import { useState } from "react";
import { FaLeaf } from "react-icons/fa";
import { PiShoppingCart } from "react-icons/pi";
import NavItem from "./NavItem";
import { motion } from "framer-motion";

function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="flex justify-between items-center md:max-w-7xl mx-auto my-9 px-5 md:px-0"
      >
        {/* logo */}
        <div className="uppercase text-2xl font-bold font-poppins flex gap-2">
          <p className="text-red-500">fruit</p>
          <p className="text-amber-500">store</p>
          <div className="text-green-500">
            <FaLeaf />
          </div>
        </div>
        {/* menu */}
        <div className="hidden md:flex justify-between items-center gap-6 capitalize text-gray-600 font-semibold">
          <a
            className="hover:text-red-500 hover:shadow-[0_2px_0_0] px-2 duration-500"
            href="#"
          >
            home
          </a>
          <a
            className="hover:text-red-500 hover:shadow-[0_2px_0_0] px-2 duration-500"
            href="#"
          >
            products
          </a>
          <a
            className="hover:text-red-500 hover:shadow-[0_2px_0_0] px-2 duration-500"
            href="#"
          >
            about
          </a>
          <a
            className="hover:text-red-500 hover:shadow-[0_2px_0_0] px-2 duration-500"
            href="#"
          >
            shop
          </a>
          <a
            className="hover:text-red-500 hover:shadow-[0_2px_0_0] px-2 duration-500"
            href="#"
          >
            contacts
          </a>
          {/* cartbutton */}
          <div className="text-2xl hover:bg-red-500 p-2 rounded-full hover:text-white duration-500 ">
            <PiShoppingCart />
          </div>
        </div>
        {/* hamburger menu */}
        <div
          className="md:hidden flex flex-col cursor-pointer"
          onClick={() => setOpen((value) => !value)}
        >
          <span
            className={`h-[3px] w-6 mb-[2px] bg-gray-700 duration-500 ${
              open ? "bar-1" : null
            }`}
          ></span>
          <span
            className={`h-[3px] w-6 my-[2px] bg-gray-700 duration-500 ${
              open ? "bar-2" : ""
            }`}
          ></span>
          <span
            className={`h-[3px] w-6 my-[2px] bg-gray-700 duration-500 ${
              open ? "bar-3" : ""
            }`}
          ></span>
        </div>
      </motion.div>

      <NavItem open={open} />
    </>
  );
}

export default NavBar;
