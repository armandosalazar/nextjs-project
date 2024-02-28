import PostCard from "@/components/PostCard";

export const metadata = {
  title: "Posts Page",
};

async function loadPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  await new Promise((resolve) => setTimeout(resolve, 1000));

  return await response.json();
}

export default async function Posts() {
  const posts = await loadPosts();

  return (
    <main className="container mx-auto my-4 grid grid-cols-3 gap-4">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </main>
  );
}
