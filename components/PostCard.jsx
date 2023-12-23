"use client";

function PostCard({ post }) {
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <button
        onClick={() => {
          console.log(`Clicked on post ${post.id}`);
        }}
      >
        More
      </button>
    </div>
  );
}

export default PostCard;
