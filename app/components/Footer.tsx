import { BsFacebook } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import { PiTwitterLogoFill } from "react-icons/pi";

const Footer = () => {
  return (
    <div className="w-full bg-[#FAFAFA] shadow-md">
      <div className="mt-20 lg:mx-48 mx-8 py-10 flex lg:flex-row justify-between">
        <p className="text-[#252B42] text-2xl font-bold">Bandage</p>
        <div className="flex lg:flex-row gap-4 text-2xl text-[#23A6F0] cursor-pointer">
          <BsFacebook />
          <AiOutlineInstagram />
          <PiTwitterLogoFill />
        </div>
      </div>
    </div>
  );
};

export default Footer;
