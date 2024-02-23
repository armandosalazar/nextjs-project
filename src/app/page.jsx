import Users from "@/components/Users";
import Link from "next/link";

export const metadata = {
  title: "Home Page",
};

export default function Page() {
  return (
    /* Server component */
    <main className="m-4">
      <h1>Home Page</h1>
      {/* Client component */}
      <Users />
      {/* Client component */}
      <br />
      <ul>
        <li className="list-disc">
          <Link href="/first-project">Primer proyecto</Link>
        </li>
      </ul>
    </main>
    /* Server component */
  );
}
