"use client";
import Link from "next/link";
import { useParams } from "next/navigation";

function PostCard({ post }) {
  const params = useParams();
  console.log("params", params);

  return (
    <div className="border bg-white p-5">
      <Link href={`/posts/${post.id}`}>
        <h3 className="mb-4 text-xl font-bold">
          {post.id}. {post.title}
        </h3>
      </Link>
      <p>{post.body}</p>
      <hr className="my-5" />
      <Link
        href={`/posts/${post.id}`}
        className=" cursor-pointer font-bold text-green-500"
      >
        More info
      </Link>
    </div>
  );
}

export default PostCard;
