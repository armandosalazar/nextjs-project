import Posts from "../page";
import { Suspense } from "react";

async function loadPost(id) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
  );

  return await response.json();
}

export default async function PostPage(props) {
  const { params } = props;
  const post = await loadPost(params.id);

  return (
    <main className="contianer mx-auto my-4">
      {Object.keys(post) != 0 ? (
        <div className="">
          <h1 className="text-3xl font-bold">{post.title}</h1>
          <p>{post.body}</p>
        </div>
      ) : (
        <p
          style={{
            color: "red",
            fontWeight: "bold",
          }}
        >
          Post not found!
        </p>
      )}
      <hr />

      <h2 className="m-4 text-2xl font-bold">Others Posts</h2>
      <Suspense
        fallback={
          <article className="flex flex-1 items-center justify-center">
            <p className="text-2xl font-bold">Loading...</p>
          </article>
        }
      >
        <Posts />
      </Suspense>
    </main>
  );
}
