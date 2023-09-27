import Link from "next/link";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Blog = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10"
  );
  const posts: Post[] = await res.json();
  return (
    <>
      <div className="w-full p-5 lg:my-5 mt-44 mx-auto lg:w-8/12 grid lg:grid-cols-2 grid-cols-1 gap-12 lg:p-10 text-lg">
        {posts.map((post) => (
          <Link
            href={`/blog/${post.id}`}
            className="w-full py-6 px-4 lg:px-10 text-center border border-gray-50 hover:border-[#23A6F0] shadow hover:scale-110 lg:hover:bg-[#23A6F0] transition delay-150 duration-300 ease-in-out rounded-xl"
            key={post.id}
          >
            <div className="text-4xl py-4 text-[#252B42] font-bold">
              Blog {post.id}
            </div>
            <div key={post.id} className="text-[#737373]">
              {post.title}
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Blog;
