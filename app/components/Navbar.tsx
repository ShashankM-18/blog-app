"use client";
import Link from "next/link";
import { BsSearch } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import Login from "./Login";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex w-full h-[3.625rem] lg:mt-3 mt-0 items-center flex-wrap">
      <Link
        href={"/"}
        className="text-2xl pl-[2.37rem] pr-24 text-[#252B42] font-bold"
      >
        Bandage
      </Link>
      <ul className="lg:flex w-1/3 justify-between text-[#737373] font-bold cursor-pointer hidden">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>Shop</li>
        <li>About</li>
        <li>
          <Link href={"/blog"}>Blog</Link>
        </li>
        <li>Contact</li>
        <li>Pages</li>
      </ul>
      <div className="ml-auto flex lg:justify-evenly justify-around w-1/3 text-[#23A6F0]">
        <button className="lg:flex items-center lg:gap-1 flex gap-2">
          <Login />
        </button>
        <button className="lg:flex items-center hidden">
          <BsSearch />
        </button>
        <button className="lg:flex items-center hidden">
          <AiOutlineShoppingCart />
        </button>
        <button className="lg:flex items-center hidden">
          <AiOutlineHeart />
        </button>
        <button onClick={toggleNavBar} className="lg:hidden">
          {isOpen ? <AiOutlineClose /> : <BiMenuAltRight />}
        </button>
      </div>
      {isOpen && (
        <ul className="flex flex-col gap-4 my-3 basis-full items-center bg-white text-[#737373] text-xl cursor-pointer">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>Product</li>
          <li>
            <Link href={"/blog"}>Blog</Link>
          </li>
          <li>Contact</li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
