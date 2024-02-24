"use client";

function Page(props) {
  console.log("props", props);

  return (
    <div className="container m-4 flex justify-center rounded-md border-2 border-solid border-gray-300 p-4">
      <button
        onClick={() => {}}
        className="rounded-md bg-sky-400 px-3 py-2 text-white"
      >
        Create User
      </button>
    </div>
  );
}

export default Page;
