import UserCard from "@/components/first-project/UserCard";

async function fetchData() {
  const response = await fetch("https://reqres.in/api/users");

  const { data } = await response.json();

  return data;
}

async function Page() {
  const users = await fetchData();

  return (
    <main className="container mx-auto my-4 rounded-md bg-white p-5 shadow">
      <h1 className="my-5 text-center text-4xl font-bold">Primer proyecto</h1>
      <hr className="my-5" />
      <section className="grid grid-cols-3 gap-4">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </section>
    </main>
  );
}

export default Page;
