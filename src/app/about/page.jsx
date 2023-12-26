"use client";
import { useRouter } from "next/navigation";

export default function AboutPage() {
  const router = useRouter();

  return (
    <main className="m-4">
      <h1 className="text-3xl my-5">About</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
        similique deleniti necessitatibus ducimus voluptatem tenetur error
        cumque reprehenderit odit magnam eos, facilis eum provident aut sequi
        laudantium laboriosam quidem vel.
      </p>

      <button
        className="bg-sky-400 py-2 px-3 rounded-md text-white my-2"
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
