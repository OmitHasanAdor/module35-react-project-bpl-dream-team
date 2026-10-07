import React from "react";
import { motion } from "framer-motion";
import Dollar from "../../assets/dollar 1.png";

const Navbar = ({ coin }) => {
  return (
    <motion.div
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="navbar sticky top-0 z-50 border-b border-base-200 bg-base-100/90 px-4 shadow-sm backdrop-blur-md md:px-8"
    >
      {/* Navbar Start */}
      <div className="navbar-start">
        {/* Mobile Menu */}
        <div className="dropdown">
          <motion.div
            whileTap={{ scale: 0.9 }}
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </motion.div>

          <ul
            tabIndex="-1"
            className="menu dropdown-content z-50 mt-3 w-56 rounded-2xl border border-base-200 bg-base-100 p-3 shadow-xl"
          >
            <li>
              <a className="rounded-xl transition-all hover:translate-x-1">
                Item 1
              </a>
            </li>

            <li>
              <details>
                <summary className="rounded-xl">Parent</summary>

                <ul className="p-2">
                  <li>
                    <a className="rounded-lg transition-all hover:translate-x-1">
                      Submenu 1
                    </a>
                  </li>

                  <li>
                    <a className="rounded-lg transition-all hover:translate-x-1">
                      Submenu 2
                    </a>
                  </li>
                </ul>
              </details>
            </li>

            <li>
              <a className="rounded-xl transition-all hover:translate-x-1">
                Item 3
              </a>
            </li>
          </ul>
        </div>

        {/* Logo */}
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="btn btn-ghost text-xl font-extrabold tracking-tight"
        >
          <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
            daisyUI
          </span>
        </motion.a>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-1 px-1">
          <li>
            <motion.a
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="rounded-xl"
            >
              Item 1
            </motion.a>
          </li>

          <li>
            <details>
              <summary className="rounded-xl">Parent</summary>

              <ul className="z-50 mt-2 w-44 rounded-2xl border border-base-200 bg-base-100 p-2 shadow-xl">
                <li>
                  <a className="rounded-lg transition-all hover:translate-x-1">
                    Submenu 1
                  </a>
                </li>

                <li>
                  <a className="rounded-lg transition-all hover:translate-x-1">
                    Submenu 2
                  </a>
                </li>
              </ul>
            </details>
          </li>

          <li>
            <motion.a
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="rounded-xl"
            >
              Item 3
            </motion.a>
          </li>
        </ul>
      </div>

      {/* Coin Section */}
      <div className="navbar-end">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 8px 25px rgba(0,0,0,0.12)",
          }}
          whileTap={{ scale: 0.95 }}
          className="flex cursor-pointer items-center gap-2 rounded-full border border-base-300 bg-base-200/70 px-4 py-2 shadow-sm backdrop-blur-sm transition-colors hover:bg-base-200"
        >
          {/* Coin Icon */}
          <motion.img
            src={Dollar}
            alt="Dollar"
            className="h-7 w-7 object-contain"
            animate={{
              rotate: [0, 8, -8, 0],
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              repeatDelay: 3,
              ease: "easeInOut",
            }}
          />

          {/* Coin Count */}
          <motion.span
            key={coin}
            initial={{ y: -8, opacity: 0, scale: 0.8 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 15,
            }}
            className="text-lg font-extrabold text-primary"
          >
            {coin}
          </motion.span>

          <span className="text-sm font-semibold text-base-content/80">
            Coin
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Navbar;