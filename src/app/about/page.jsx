"use client";
import { useRouter } from "next/navigation";

export default function AboutPage() {
  const router = useRouter();

  return (
    <main className="container mx-auto my-4 rounded bg-white p-5 shadow">
      <h1 className="my-5 text-3xl font-bold">About</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
        similique deleniti necessitatibus ducimus voluptatem tenetur error
        cumque reprehenderit odit magnam eos, facilis eum provident aut sequi
        laudantium laboriosam quidem vel.
      </p>

      <hr className="my-5" />

      <button
        className="my-2 rounded-md bg-sky-400 px-3 py-2 text-white"
        onClick={() => {
          // Execute logic before leaving the page
          alert("You are leaving the page");
          // Get data from the server
          router.push("/");
        }}
      >
        Go to Home
      </button>
    </main>
  );
}
