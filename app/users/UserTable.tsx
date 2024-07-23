import Link from "next/link";
import React from "react";


interface User {
  id: number;
  name: string;
  email: string;
}

const UserTable = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await res.json();


  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th><Link href="/users?sort=name">Name</Link></th>
            <th><Link href="/users?sort=email">Email</Link></th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {users.map((user) => (
            <tr>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
          <tr>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
