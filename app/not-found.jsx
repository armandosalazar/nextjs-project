import Link from "next/link";

export default function NotFoundPage() {
  return (
    <>
      <h1>404</h1>
      <h3>Not Found</h3>
      <Link href="/">Go to Home</Link>
    </>
  );
}
