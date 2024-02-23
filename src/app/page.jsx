import UserComponent from "@/components/Users";
import Link from "next/link";

export const metadata = {
  title: "Home Page",
};

export default function Page() {
  return (
    /* Server component */
    <main className="m-4 rounded-sm bg-blue-300 p-5">
      <h1 className="text-4xl font-bold">Home Page</h1>
      <section className="px-4">
        <ul>
          <li className="list-disc">
            <Link href="/first-project">Primer proyecto</Link>
          </li>
        </ul>
      </section>
      {/* Client component */}
      <UserComponent />
      {/* Client component */}
    </main>
    /* Server component */
  );
}
