async function getUser(id) {
  const response = await fetch(`https://reqres.in/api/users/${id}`);
  const { data } = await response.json();

  return data;
}

async function Page({ params: { id }, searchParams: {} }) {
  const user = await getUser(id);

  return (
    <div className="mx-auto my-4 flex w-fit flex-col items-center rounded bg-white p-10 shadow">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={user.avatar}
        alt={user.first_name}
        className="w-40 rounded-full border-4 border-blue-500"
      />
      <h1 className="text-3xl font-bold">
        {user.first_name} {user.last_name}
      </h1>
      <p className="text-xl">{user.email}</p>
      <hr className="my-5 w-full" />
      <section>
        <button className="mr-4 rounded-md bg-blue-500 px-4 py-2 text-white">
          Contactar
        </button>
        <button className=" rounded-md bg-red-500 px-4 py-2 text-white">
          Eliminar
        </button>
      </section>
    </div>
  );
}

export default Page;
