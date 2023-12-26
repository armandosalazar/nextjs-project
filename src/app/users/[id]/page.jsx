"use client";
import { useParams } from "next/navigation";

function User({ params: { id } }) {
  const params = useParams();
  console.log("params", params);

  return (
    <main className="m-4">
      <h1 className="text-2xl font-bold">User {id}</h1>
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded mt-2"
        onClick={() => {
          console.log("Go to /users: " + id);
        }}
      >
        Go to
      </button>
    </main>
  );
}

export default User;
