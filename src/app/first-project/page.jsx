import UserCard from "@/components/first-project/UserCard";

async function fetchData() {
  const response = await fetch("https://reqres.in/api/users");

  const { data } = await response.json();

  return data;
}

async function Page() {
  const users = await fetchData();

  return (
    <main className="container m-2">
      <h1 className="text-3xl font-bold">Primer proyecto</h1>
      <section>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </section>
    </main>
  );
}

export default Page;
