import Link from "next/link";
import React from "react";

interface User {
  id: string;
  name: string;
}

const UsersPage = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/users",
    { cache: 'no-store'});
  const users: User[] = await res.json();

  return (
    <>
    <h1 className="font-bold">Users</h1>
      <ul>
        {users.map(user => <li key={user.id}>{user.name}</li>)}
      </ul> 

      <Link href={'/'}><div className="font-bold">{''} ← </div></Link>
    </>
  )
};

export default UsersPage;
