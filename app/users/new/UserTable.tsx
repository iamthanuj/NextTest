import React from "react";

interface User {
  id: number;
  name: string;
}

const UserTable = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await res.json();
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id} className="text-white">
          {user.name}
        </li>
      ))}
    </ul>
  );
};

export default UserTable;
