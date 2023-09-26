import Image from "next/image";
import Img from "../../../public/unsplash_Bd7gNnWJBkU.png";

const FirstCard = () => {
  return (
    <div className="relative">
      <Image src={Img} alt="..." className="lg:w-[37.2rem] w-[34.8rem]" />
      <div className="absolute bg-card text-white bottom-0 lg:p-20 p-4">
        <p className="text-2xl font-bold mb-8">Top Product of the Week</p>
        <button className="border-2 font-bold border-white rounded-lg px-12 py-4 hover:bg-white hover:text-lblue">
          Explore Items
        </button>
      </div>
    </div>
  );
};

export default FirstCard;
