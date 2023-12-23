import Posts from "../page";
import { Suspense } from "react";

async function loadPost(id) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  return await response.json();
}

export default async function PostPage(props) {
  const { params } = props;
  const post = await loadPost(params.id);

  return (
    <>
      {Object.keys(post) != 0 ? (
        <div className="m-4 p-5 bg-slate-950">
          <h1 className="text-3xl font-bold pb-8">{post.title}</h1>
          <p className="text-slate-400">{post.body}</p>
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
      <Suspense fallback={<p>Loading...</p>}>
        <Posts />
      </Suspense>
    </>
  );
}
