import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { PiTwitterLogoFill } from "react-icons/pi";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

const Header = () => {
  return (
    <ul className="lg:flex bg-[#252B42] font-bold lg:w-screen lg:h-[3.625rem] text-white lg:items-center lg:justify-around hidden">
      <li className="flex items-center cursor-pointer gap-1">
        <BsTelephone />
        (225) 555-0118
      </li>
      <li className="flex items-center cursor-pointer gap-1">
        <AiOutlineMail />
        michelle.rivera@example.com
      </li>
      <li className="cursor-pointer">
        Follow Us and get a chance to win 80% off
      </li>
      <div className="flex items-center justify-between w-[16%]">
        <p>Follow Us:</p>
        <li className="cursor-pointer text-lg">
          <AiOutlineInstagram />
        </li>
        <li className="cursor-pointer text-lg">
          <AiFillYoutube />
        </li>
        <li className="cursor-pointer text-lg">
          <BsFacebook />
        </li>
        <li className="cursor-pointer text-lg">
          <PiTwitterLogoFill />
        </li>
      </div>
    </ul>
  );
};

export default Header;
