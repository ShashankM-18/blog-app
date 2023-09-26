import getPost from "@/app/libs/getPost";
import Link from "next/link";

type Params = {
  params: {
    id: string;
  };
};

const page = async ({ params: { id } }: Params) => {
  const postData = await getPost(id);
  return (
    <div className="bg-lblue rounded-xl grid grid-cols-1 lg:w-7/12 w-11/12 mx-auto my-6 gap-6 lg:shadow lg:p-20 px-4">
      <Link href={"/blog"} className="text-lg underline-offset-2 font-bold">
        BACK
      </Link>
      <div className="text-5xl text-white text-center font-bold my-5">
        Blog {postData.id}
      </div>
      <div className="py-10 text-3xl text-white">
        <b>Title:</b>&nbsp;{postData.title}
      </div>
      <div className="text-2xl text-white leading-relaxed">{postData.body}</div>
    </div>
  );
};

export default page;
