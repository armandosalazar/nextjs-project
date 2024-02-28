import Link from "next/link";

function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-white p-5 shadow">
      <Link href="/">
        <h1 className="text-3xl font-bold">Proyecto NextJS</h1>
      </Link>
      <ul className="flex [&>li]:mr-2">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/store">Store</Link>
        </li>
        <li>
          <Link href="/posts">Posts</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
