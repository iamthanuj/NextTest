import React, { Suspense } from "react";
import UserTable from "./UserTable";
import Loading from "../loading"
import Link from "next/link";

interface Props {
  searchParams: { sort: string };
}

async function UserPage({ searchParams: { sort } }: Props) {
  console.log(sort);
  return (
    <div>
      <h1>Users List</h1>
      <Link href="/users/new" className="btn">
        New User
      </Link>
      <Suspense fallback={<Loading/>}>
         <UserTable sortOrder={sort} />
      </Suspense>
    </div>
  );
}

export default UserPage;
