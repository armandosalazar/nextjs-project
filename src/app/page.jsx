import UserComponent from "@/components/UserComponent";
import Link from "next/link";

export const metadata = {
  title: "Home Page",
};

export default function Page() {
  return (
    /* Server component */
    <main className="m-4 rounded-md border-2  border-solid border-sky-200 p-5">
      <h1 className="text-4xl font-bold">Home Page</h1>
      <section className="px-4">
        <ul>
          <li className="list-disc">
            <Link href="/first-project">Primer proyecto</Link>
          </li>
          <li className="list-disc">
            <Link href="/prisma">Prisma</Link>
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
