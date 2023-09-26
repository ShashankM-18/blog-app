async function getPost(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) {
    throw new Error("failed to fetch post");
  }
  return res.json();
}

export default getPost;
