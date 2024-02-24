import Link from "next/link";

function UserCard({ user }) {
  return (
    <Link href={`/first-project/${user.id}`}>
      <article className="my-4 flex items-center rounded-sm bg-sky-200 p-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={user.avatar}
          alt={user.first_name}
          className="mr-4 w-20 rounded-full"
        />
        <div>
          <h5 className="font-bold">{user.first_name}</h5>
          <p>{user.email}</p>
        </div>
      </article>
    </Link>
  );
}

export default UserCard;
