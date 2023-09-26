import Image from "next/image";
import Girl from "../../public/hero-cover-1.png";

const Card = () => {
  return (
    <div className="lg:mt-12 lg:mx-12 mx-4 mt-44 h-full bg-gradient-to-r from-[#96E9FB] to-[#ABECD6] rounded-2xl flex lg:flex-row items-center flex-col justify-between">
      <div className="flex flex-col lg:items-start justify-center gap-y-8 lg:pl-24 p-16 lg:text-left text-center">
        <p className="text-[#2A7CC7] text-base font-bold">SUMMER 2020</p>
        <p className="text-[#252B42] xl:text-6xl text-4xl font-bold">
          NEW COLLECTION
        </p>
        <p className="text-[#737373] text-xl font-normal">
          We know how large objects will act, but things on a small scale.
        </p>
        <button className="py-4 px-10 text-white bg-[#23A6F0] text-2xl font-bold rounded-md hover:bg-sky-600">
          SHOP NOW
        </button>
      </div>
      <Image src={Girl} alt="..." />
    </div>
  );
};

export default Card;
