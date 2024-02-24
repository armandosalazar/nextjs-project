"use client";

import { useEffect, useState } from "react";

function Page(props) {
  const [users, setUsers] = useState([]);

  console.log("props", props);

  useEffect(() => {
    handleGetUsers();

    return () => {};
  }, []);

  async function handleGetUsers() {
    const response = await fetch("/api/first-project", {
      method: "GET",
    });

    const users = await response.json();
    console.log(users);
    setUsers(users);
  }

  async function handleCreateUser(evt) {
    evt.preventDefault();

    const formData = new FormData(evt.target);

    const name = formData.get("name");
    const email = formData.get("email");

    const response = await fetch("/api/first-project", {
      method: "POST",
      body: JSON.stringify({ name, email }),
    });

    console.log(await response.json());

    handleGetUsers();
  }

  return (
    <div className="container m-auto">
      <section className="my-4 rounded-sm border-2 border-solid border-gray-300 px-4 py-6">
        <form onSubmit={handleCreateUser} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="name"
            name="name"
            className="rounded-md border-2 border-solid border-gray-300 p-2 outline-sky-400"
          />
          <input
            type="text"
            placeholder="email"
            name="email"
            className="rounded-md border-2 border-solid border-gray-300 p-2 outline-sky-400"
          />
          <input
            type="submit"
            value={"Create user"}
            className="rounded-md bg-sky-400 px-3 py-2 text-white"
          />
        </form>
      </section>
      <section className="my-4 rounded-md border-2 border-solid border-gray-300 px-4 py-6">
        <pre>
          <code>{JSON.stringify(users, null, 2)}</code>
        </pre>
      </section>
    </div>
  );
}

export default Page;
