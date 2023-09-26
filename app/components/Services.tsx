import Image from "next/image";
import Book from "../../public/bx_bxs-book-reader.png";
import Concrete from "../../public/carbon_book.png";
import Arrow from "../../public/uil_arrow-growth.png";

const Services = () => {
  return (
    <div>
      <div className="mt-40 mb-12 flex flex-col justify-center items-center gap-2">
        <p className="text-[#737373] text-xl">Featured Products</p>
        <p className="text-[#252B42] text-2xl font-bold">THE BEST SERVICES</p>
        <p className="text-[#737373] text-sm">
          Problems trying to resolve the conflict between
        </p>
      </div>
      <div className="lg:mx-48 mx-4 flex lg:flex-row flex-col justify-between items-center">
        <div className="w-48">
          <Image src={Book} alt="..." className="m-auto" />
          <div className="lg:mt-3 lg:mb-12 mt-3 mb-16 flex-col text-center">
            <p className="text-[#252B42] text-base font-bold">Easy Wins</p>
            <p className="text-[#737373] text-sm">
              Get your best looking smile now!
            </p>
          </div>
        </div>
        <div className="w-48">
          <Image src={Concrete} alt="..." className="m-auto" />
          <div className="lg:mt-3 lg:mb-12 mt-3 mb-16 flex-col text-center">
            <p className="text-[#252B42] text-base font-bold">Concrete</p>
            <p className="text-[#737373] text-sm">
              Defalcate is most focused in helping you discover your most
              beautiful smile
            </p>
          </div>
        </div>
        <div className="w-48">
          <Image src={Arrow} alt="..." className="m-auto" />
          <div className="lg:mt-3 lg:mb-12 mt-3 mb-16 flex-col text-center">
            <p className="text-[#252B42] text-base font-bold">Hack Growth</p>
            <p className="text-[#737373] text-sm">
              Overcame any hurdle or any other problem.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
