import PostCard from "@/components/PostCard";

export const metadata = {
  title: "Posts Page",
};

async function loadPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  await new Promise((resolve) => setTimeout(resolve, 3000));

  return await response.json();
}

export default async function Posts() {
  const posts = await loadPosts();

  return (
    <>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </>
  );
}
