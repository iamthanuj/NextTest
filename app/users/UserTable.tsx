import Link from "next/link";
import React from "react";
import { sort } from "fast-sort";


interface User {
  id: number;
  name: string;
  email: string;
}


interface props{
  sortOrder:string;
}


const UserTable = async ({sortOrder}:props) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/xusers");
  const users: User[] = await res.json();

  const sortedUsers = sort(users).asc(sortOrder === "email" ? user => user.email : user=>user.name);


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
          {sortedUsers.map((user) => (
            <tr key={user.id}>
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
