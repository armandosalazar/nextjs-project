import Link from "next/link";

export const metadata = {
  title: "Online Store",
};

export default function Layout({ children }) {
  return (
    <section className="m-4 flex h-fit flex-1 gap-4">
      <nav className="flex w-fit flex-col rounded bg-yellow-50 p-10 shadow">
        <h3 className="text-3xl font-bold">Categories</h3>
        <ul className="list-disc pl-4 [&>li]:underline">
          <li>
            <Link href="/store">Store</Link>
          </li>
          <li>
            <Link href="/store/electronics">Electronics</Link>
          </li>
        </ul>
      </nav>

      {children}
    </section>
  );
}
