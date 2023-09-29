"use client";

import { useRouter } from "next/navigation";
import { Fragment, useRef } from "react";
import { Toaster, toast } from "react-hot-toast";

const postBlog = async ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  const res = fetch("https://blog-app-zeta-vert.vercel.app/api/blog", {
    method: "POST",
    body: JSON.stringify({ title, description }),
    //@ts-ignore
    "Content-Type": "application/json",
  });
  return (await res).json();
};

const AddBlog = () => {
  const router = useRouter();
  const titleRef = useRef<HTMLInputElement | null>(null);
  const descRef = useRef<HTMLTextAreaElement | null>(null);
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (titleRef.current && descRef.current) {
      toast.loading("Sending request", { id: "1" });
      await postBlog({
        title: titleRef.current?.value,
        description: descRef.current?.value,
      });
      toast.success("Blog posted", { id: "1" });
      router.push("/blog");
    }
  };
  return (
    <Fragment>
      <Toaster />
      <div className="w-full m-auto flex lg:mt-12 mt-44">
        <div className="flex flex-col justify-center items-center m-auto">
          <p className="text-4xl mb-4 text-[#252B42] font-bold underline">
            Add a blog
          </p>
          <form onSubmit={handleSubmit}>
            <input
              ref={titleRef}
              placeholder="Enter title"
              type="text"
              className="rounded-md border border-[#23A6F0] w-full py-4 px-10 my-2"
            />
            <textarea
              ref={descRef}
              rows={10}
              placeholder="Enter description"
              className="rounded-md border border-[#23A6F0] py-4 px-10 w-full my-2"
            ></textarea>
            <button className="py-4 px-10 text-white bg-[#23A6F0] text-2xl font-bold rounded-md hover:bg-sky-600 m-auto">
              Submit
            </button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default AddBlog;
