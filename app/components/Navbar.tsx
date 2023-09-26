"use client";
import Link from "next/link";
import { AiOutlineUser } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex w-full h-[3.625rem] lg:mt-3 mt-0 items-center flex-wrap">
      <p className="text-2xl pl-[2.37rem] pr-24 text-[#252B42] font-bold">
        Bandage
      </p>
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
        <button className="lg:flex items-center gap-1 hidden">
          <AiOutlineUser />
          Login / Register
        </button>
        <button className="flex items-center">
          <BsSearch />
        </button>
        <button className="flex items-center">
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
        <ul className="flex flex-col gap-4 my-4 basis-full items-center bg-white text-[#737373] text-2xl cursor-pointer">
          <li>Home</li>
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
