import Link from "next/link";

function UserCard({ user }) {
  return (
    <Link href={`/first-project/${user.id}`}>
      <article className="bg-slate-400 flex">
        <img
          src={user.avatar}
          alt={user.first_name}
          className="rounded-full w-20"
        />
        <h5 className="font-bold">{user.first_name}</h5>
        <p>{user.email}</p>
      </article>
    </Link>
  );
}

export default UserCard;
