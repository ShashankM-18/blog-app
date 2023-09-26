import Image from "next/image";
import First from "../../public/unsplash_75EFpyXu3Wg.png";
import Second from "../../public/unsplash_ruJm3dBXCqw.png";

const Posts = () => {
  return (
    <div>
      <div className="mt-40 mb-12 flex flex-col justify-center items-center gap-2">
        <p className="text-[#23A6F0] text-sm font-bold">Practice Advice</p>
        <p className="text-[#252B42] text-4xl font-bold">Featured Posts</p>
      </div>
      <div className="lg:mx-48 lg:mt-24 mx-[3.8rem] mt-4 flex gap-4 lg:flex-row flex-col">
        <div className="flex flex-col lg:max-w-xl lg:flex-row lg:border-0 lg:shadow-none border-2 shadow-xl">
          <Image
            src={First}
            alt="..."
            className="h-96 w-full lg:object-cover object-bottom lg:h-auto"
          />
          <div className="flex flex-col gap-8 justify-start p-6">
            <p className="text-[#23A6F0] text-sm font-bold">
              English Department
            </p>
            <p className="text-[#252B42] text-base font-bold">Graphic Design</p>
            <p className="text-[#737373] text-sm">
              We focus on ergonomics and meeting you where you work. It&apos;s
              only a keystroke away.
            </p>
            <p className="text-[#737373]">15 Sales</p>
            <p className="text-[#BDBDBD]">
              $16.48{" "}
              <span className="text-[#23856D] ml-1 font-bold">$6.48</span>
            </p>
            <button className="w-3/4 bg-transparent text-[#23A6F0] border border-[#23A6F0] px-5 py-2 rounded-3xl hover:bg-[#23A6F0] hover:text-white">
              Learn More
            </button>
          </div>
        </div>
        <div className="flex flex-col lg:max-w-xl lg:flex-row lg:border-0 lg:shadow-none border-2 shadow-xl">
          <Image
            src={Second}
            alt="..."
            className="h-96 w-full lg:object-cover object-bottom lg:h-auto"
          />
          <div className="flex flex-col gap-8 justify-start p-6">
            <p className="text-[#23A6F0] text-sm font-bold">
              English Department
            </p>
            <p className="text-[#252B42] text-base font-bold">Graphic Design</p>
            <p className="text-[#737373] text-sm">
              We focus on ergonomics and meeting you where you work. It&apos;s
              only a keystroke away.
            </p>
            <p className="text-[#737373]">15 Sales</p>
            <p className="text-[#BDBDBD]">
              $16.48{" "}
              <span className="text-[#23856D] ml-1 font-bold">$6.48</span>
            </p>
            <button className="w-3/4 bg-transparent text-[#23A6F0] border border-[#23A6F0] px-5 py-2 rounded-3xl hover:bg-[#23A6F0] hover:text-white">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
