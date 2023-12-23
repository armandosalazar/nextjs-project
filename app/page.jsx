import Link from "next/link";
import Users from "@/components/Users";

export const metadata = {
  title: "Home Page",
};

export default function HomePage() {
  return (
    // Server component
    <section>
      <h1>Home Page</h1>
      {/* Client component */}
      <Users />
    </section>
  );
}
