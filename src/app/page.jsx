import Users from "@/components/Users";

export const metadata = {
  title: "Home Page",
};

export default function HomePage() {
  return (
    // Server component
    <main className="m-4">
      <h1>Home Page</h1>
      {/* Client component */}
      <Users />
    </main>
  );
}
