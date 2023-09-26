import Image from "next/image";
import First from "../../public/unsplash_Lks7vei-eAg.png";
import Second from "../../public/unsplash_Lks7vei-eAg (1).png";

const Featured = () => {
  return (
    <div className="lg:mt-40 lg:mx-48 mt-28 mx-4">
      <div className="flex lg:flex-row flex-col-reverse items-center">
        <div className="flex gap-2">
          <Image src={First} alt="..." />
          <Image src={Second} alt="..." />
        </div>
        <div className="flex flex-col justify-center items-start gap-4 lg:ml-16 m-12">
          <p className="text-[#23A6F0] text-base font-bold">
            Featured Products
          </p>
          <p className="text-[#252B42] text-4xl font-bold">
            We love what we do
          </p>
          <p className="text-[#737373] text-sm font-normal">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics.
          </p>
          <p className="text-[#737373] text-sm font-normal">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Featured;
