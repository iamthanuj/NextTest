import React from "react";
import UserTable from "./UserTable";
import Link from "next/link";

interface Props{
  searchParams : {sort:string}
}


async function UserPage({searchParams:{sort}}:Props) {

  console.log(sort)
  return (
    <div>
      <h1>Users List</h1>
      <Link href="/users/new" className="btn" >New User</Link>
      <UserTable sortOrder={sort}/>
    </div>
  );
}

export default UserPage;
