"use client";

import { useRouter } from "next/navigation";
import { Fragment, useEffect, useRef } from "react";
import { Toaster, toast } from "react-hot-toast";

type updateBlogParams = {
  title: string;
  description: string;
  id: string;
};

const updateBlog = async (data: updateBlogParams) => {
  const res = fetch(
    `https://blog-app-zeta-vert.vercel.app/api/blog/${data.id}`,
    {
      method: "PUT",
      body: JSON.stringify({
        title: data.title,
        description: data.description,
      }),
      //@ts-ignore
      "Content-Type": "application/json",
    }
  );
  return (await res).json();
};

const deleteBlog = async (id: string) => {
  const res = fetch(`https://blog-app-zeta-vert.vercel.app/api/blog/${id}`, {
    method: "DELETE",
    //@ts-ignore
    "Content-Type": "application/json",
  });
  return (await res).json();
};

const getBlogById = async (id: string) => {
  const res = await fetch(
    `https://blog-app-zeta-vert.vercel.app/api/blog/${id}`
  );
  const data = await res.json();
  return data.post;
};

const EditBlog = ({ params }: { params: { id: string } }) => {
  const router = useRouter();
  const titleRef = useRef<HTMLInputElement | null>(null);
  const descRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    toast.loading("Fetching blog details", { id: "1" });
    getBlogById(params.id)
      .then((data) => {
        if (titleRef.current && descRef.current) {
          titleRef.current.value = data.title;
          descRef.current.value = data.description;
          toast.success("Fetching complete", { id: "1" });
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Error fetching blog", { id: "1" });
      });
  }, [params.id]);
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (titleRef.current && descRef.current) {
      toast.loading("Sending request", { id: "1" });
      await updateBlog({
        title: titleRef.current?.value,
        description: descRef.current?.value,
        id: params.id,
      });
      toast.success("Blog posted", { id: "1" });
      router.push("/blog");
    }
  };
  const handleDelete = async () => {
    toast.loading("Deleting blog", { id: "2" });
    await deleteBlog(params.id);
    toast.success("Blog deleted", { id: "2" });
    router.push("/blog");
  };
  return (
    <Fragment>
      <Toaster />
      <div className="w-full m-auto flex lg:mt-12 mt-44">
        <div className="flex flex-col justify-center items-center m-auto">
          <p className="mb-4 text-4xl text-[#252B42] font-bold underline">
            Edit the blog
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
            <button className="py-4 px-10 text-white bg-[#23A6F0] text-xl font-bold rounded-md hover:bg-sky-600 m-auto my-2">
              Update Blog
            </button>
          </form>
          <button
            onClick={handleDelete}
            className="font-bold text-xl py-4 px-10 my-2 shadow-xl bg-red-600 text-white hover:bg-red-700 rounded-lg m-auto mt-12"
          >
            Delete Blog
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default EditBlog;
