import Image from "next/image";
import Pic from "../../public/product-cover-5.png";

const Grid = () => {
  return (
    <div>
      <div className="mt-40 mb-12 flex flex-col justify-center items-center gap-2">
        <p className="text-[#737373] text-xl">Featured Products</p>
        <p className="text-[#252B42] text-2xl font-bold">BESTSELLER PRODUCTS</p>
        <p className="text-[#737373] text-sm">
          Problems trying to resolve the conflict between
        </p>
      </div>
      <div className="xl:mx-48 lg:mx-[4.1rem] mx-4 flex lg:flex-row flex-col justify-between items-center">
        <div>
          <Image src={Pic} alt="..." />
          <div className="lg:mt-3 lg:mb-12 mt-3 mb-16 flex-col text-center">
            <p className="text-[#252B42] text-base font-bold">Graphic Design</p>
            <p className="text-[#737373] text-sm">English Department</p>
            <p className="text-[#BDBDBD]">
              $16.48{" "}
              <span className="text-[#23856D] ml-1 font-bold">$6.48</span>
            </p>
          </div>
        </div>
        <div>
          <Image src={Pic} alt="..." />
          <div className="lg:mt-3 lg:mb-12 mt-3 mb-16 flex-col text-center">
            <p className="text-[#252B42] text-base font-bold">Graphic Design</p>
            <p className="text-[#737373] text-sm">English Department</p>
            <p className="text-[#BDBDBD]">
              $16.48{" "}
              <span className="text-[#23856D] ml-1 font-bold">$6.48</span>
            </p>
          </div>
        </div>
        <div>
          <Image src={Pic} alt="..." />
          <div className="lg:mt-3 lg:mb-12 mt-3 mb-16 flex-col text-center">
            <p className="text-[#252B42] text-base font-bold">Graphic Design</p>
            <p className="text-[#737373] text-sm">English Department</p>
            <p className="text-[#BDBDBD]">
              $16.48{" "}
              <span className="text-[#23856D] ml-1 font-bold">$6.48</span>
            </p>
          </div>
        </div>
        <div>
          <Image src={Pic} alt="..." />
          <div className="lg:mt-3 lg:mb-12 mt-3 mb-16 flex-col text-center">
            <p className="text-[#252B42] text-base font-bold">Graphic Design</p>
            <p className="text-[#737373] text-sm">English Department</p>
            <p className="text-[#BDBDBD]">
              $16.48{" "}
              <span className="text-[#23856D] ml-1 font-bold">$6.48</span>
            </p>
          </div>
        </div>
        <div>
          <Image src={Pic} alt="..." />
          <div className="lg:mt-3 lg:mb-12 mt-3 mb-16 flex-col text-center">
            <p className="text-[#252B42] text-base font-bold">Graphic Design</p>
            <p className="text-[#737373] text-sm">English Department</p>
            <p className="text-[#BDBDBD]">
              $16.48{" "}
              <span className="text-[#23856D] ml-1 font-bold">$6.48</span>
            </p>
          </div>
        </div>
      </div>
      <div className="mt-4 flex justify-center items-center">
        <button className="bg-transparent text-[#23A6F0] border border-[#23A6F0] px-12 py-4 rounded-lg font-bold hover:bg-[#23A6F0] hover:text-white">
          LOAD MORE PRODUCTS
        </button>
      </div>
    </div>
  );
};

export default Grid;
