import UserComponent from "@/components/UserComponent";
import Link from "next/link";

export const metadata = {
  title: "Home Page",
};

export default function Page() {
  return (
    /* Server component */
    <main className="container mx-auto my-4 rounded-md bg-white p-8 shadow">
      <h1 className="my-5 text-4xl font-bold">Home Page</h1>
      <section className="px-4">
        <ul className="[&>li]:underline">
          <li className="list-disc">
            <Link href="/first-project">Primer proyecto</Link>
          </li>
          <li className="list-disc">
            <Link href="/prisma">Prisma</Link>
          </li>
        </ul>
      </section>
      {/* Client component */}
      <hr className="my-5" />
      <UserComponent />
      {/* Client component */}
    </main>
    /* Server component */
  );
}
