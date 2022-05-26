import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import {
  FaHome,
  FaUserCircle,
  FaBoxOpen,
  FaShoppingCart,
} from "react-icons/fa";

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  const dispatch = useDispatch();
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <nav className="w-full z-50 flex flex-wrap items-center justify-between px-2 py-3 bg-purple-700 ">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="lg:text-xl text-sm select-none font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              href="/"
              exact
            >
              <a className="font-semibold text-xl flex items-center">
                <img
                  src="/foodLogo.png"
                  className="rounded-full object-cover w-7 h-7 mr-2"
                />
                <p className="text-white text-lg">CMUL Kitchen</p>
              </a>
            </Link>
            <button
              className="bg-blue-500  text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              {navbarOpen ? (
                <p className="text-lg font-semibold font-sans">Close</p>
              ) : (
                <div className="font-sans font-semibold text-lg">Open</div>
              )}
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:items-center lg:ml- space-y-3">
              <li className="nav-item cursor-pointer">
                <Link
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="http://localhost:3000/meals"
                  exact
                >
                  <span className="ml-2 select-none text-white text-sm font-semibold">
                    Menue
                  </span>
                </Link>
              </li>

              <li className="nav-item cursor-pointer">
                <Link
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="/signin"
                  exact
                >
                  <div className="space-x-1 flex items-center">
                    <span className="ml-2 select-none text-white text-sm">
                      <FaUserCircle color="white" />
                    </span>
                    <span className="text-sm text-gray-900 font-sans font-semibold">
                      Login
                    </span>
                  </div>
                </Link>
              </li>

              <l1 className='flex items-center nav-item cursor-pointer'>
                <Link href="http://localhost:3000/cart">
                  <div className="select-none ml-2 flex items-center">
                    <span>
                      <FaShoppingCart size={20} />
                    </span>
                    <span className="relative text-white font-semibold font-sans text-xs bottom-2 right-2">
                      {quantity}
                    </span>
                  </div>
                </Link>
              </l1>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
