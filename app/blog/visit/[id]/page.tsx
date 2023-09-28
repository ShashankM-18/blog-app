"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const getBlogById = async (id: string) => {
  const res = await fetch(`http://127.0.0.1:3000/api/blog/${id}`);
  const data = await res.json();
  return data.post;
};

const VisitBlog = ({ params }: { params: { id: string } }) => {
  const [blogData, setBlogData] = useState({ title: "", description: "" });

  useEffect(() => {
    getBlogById(params.id).then((data) => {
      setBlogData(data);
    });
  }, [params.id]);

  return (
    <div className="w-full p-5 lg:mt-12 mt-44 mx-auto lg:w-8/12 grid lg:grid-cols-1 rounded-xl shadow-lg bg-slate-200 lg:p-10 text-lg">
      <h2 className="text-center text-[#252B42] underline pt-12 text-5xl font-bold uppercase">
        {blogData.title}
      </h2>
      <h2 className="p-16 text-xl">{blogData.description}</h2>
      <div className="text-center mt-24">
        <Link
          href={`/blog/edit/${params.id}`}
          className="py-4 px-10 text-white bg-[#23A6F0] text-2xl font-bold rounded-md hover:bg-sky-600"
        >
          Edit Blog
        </Link>
      </div>
    </div>
  );
};

export default VisitBlog;
