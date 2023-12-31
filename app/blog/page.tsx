import Link from "next/link";

async function fetchBlogs() {
  try {
    const res = await fetch("https://blog-app-zeta-vert.vercel.app/api/blog", {
      next: {
        revalidate: 2,
      },
    });
    if (!res.ok) {
      throw new Error(`API request failed with status: ${res.status}`);
    }
    const data = await res.json();
    return data.posts;
  } catch (err) {
    console.log(err);
  }
}

export default async function Blog() {
  const posts = await fetchBlogs();

  return (
    <div className="w-full h-full">
      <div className="text-center lg:mt-12 mt-44">
        <p className="text-[#252B42] text-4xl font-bold my-12 underline">
          BLOG SECTION
        </p>
      </div>
      <div className="w-full p-5 lg:my-5 mt-44 mx-auto lg:w-8/12 grid lg:grid-cols-2 grid-cols-1 gap-12 lg:p-10 text-lg">
        {posts?.map((post: any) => (
          <Link
            key={post.id}
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
