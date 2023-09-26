import Image from "next/image";
import Img from "../../../public/unsplash_MKvjc2kar7Q.png";

const ThirdCard = () => {
  return (
    <div className="relative">
      <Image src={Img} alt="..." />
      <div className="absolute bg-card text-white bottom-0 lg:px-12 lg:py-8 px-4 py-2">
        <p className="text-xl font-base mb-8">Top Product of the Week</p>
        <button className="border-2 font-bold border-white rounded-lg px-12 py-4 hover:bg-white hover:text-lblue">
          Explore Items
        </button>
      </div>
    </div>
  );
};

export default ThirdCard;
