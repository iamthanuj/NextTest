import React from "react";
import UserTable from "./UserTable";
import { sort } from 'fast-sort';

interface Props{
  searchParams : {sort:string}
}


async function UserPage({searchParams:{sort}}:Props) {

  console.log(sort)
  return (
    <div>
      <h1>Users List</h1>
      <UserTable/>
    </div>
  );
}

export default UserPage;
