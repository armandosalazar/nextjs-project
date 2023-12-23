"use client";
import Link from "next/link";

function PostCard({ post }) {
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <Link href={`/posts/${post.id}`}>More</Link>
      <br />
      <button
        onClick={() => {
          console.log(`Clicked on post ${post.id}`);
        }}
      >
        Emmit event
      </button>
    </div>
  );
}

export default PostCard;
