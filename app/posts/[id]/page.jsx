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
        <div>
          <h1>{post.title}</h1>
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
    </>
  );
}
