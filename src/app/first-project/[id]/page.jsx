async function getUser(id) {
  const response = await fetch(`https://reqres.in/api/users/${id}`);
  const { data } = await response.json();

  return data;
}

async function Page({ params: { id }, searchParams: {} }) {
  const user = await getUser(id);

  return (
    <div className="m-5 flex flex-col items-center rounded-md bg-slate-400 p-10">
      <h1 className="text-3xl font-bold">
        {user.first_name} {user.last_name}
      </h1>
      <p className="text-xl">{user.email}</p>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={user.avatar}
        alt={user.first_name}
        className="w-40 rounded-full"
      />
    </div>
  );
}

export default Page;
