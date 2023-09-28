import Link from "next/link";

async function fetchBlogs() {
  const res = await fetch("https://blog-app-zeta-vert.vercel.app/api/blog", {
    next: {
      revalidate: 5,
    },
  });
  const data = await res.json();
  return data.posts;
}

export default async function Blog() {
  const posts = await fetchBlogs();

  return (
    <div className="w-full h-full">
      <div className="text-center lg:mt-12 mt-44">
        <p className="text-[#252B42] text-4xl font-bold my-12 underline">BLOG SECTION</p>
        <Link
          href={"/blog/add"}
          className="rounded-md py-4 px-10 text-xl bg-transparent border border-[#23A6F0] text-[#23A6F0] hover:bg-[#23A6F0] hover:text-white font-semibold"
        >
          Add New Blog
        </Link>
      </div>

      <div className="w-full p-5 lg:my-5 mt-44 mx-auto lg:w-8/12 grid lg:grid-cols-2 grid-cols-1 gap-12 lg:p-10 text-lg">
        {posts?.map((post: any) => (
          <Link
            href={`blog/visit/${post.id}`}
            className="w-full py-16 px-4 lg:px-10 text-center border border-gray-50 hover:border-[#23A6F0] shadow-lg hover:scale-110 lg:hover:bg-[#23A6F0] transition delay-150 duration-300 ease-in-out rounded-xl"
          >
            <div className="text-4xl py-4 text-[#252B42] font-bold">
              {post.title}
            </div>
            <div key={post.id} className="text-[#737373] font-semibold">
              {new Date(post.date).toDateString()}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}


