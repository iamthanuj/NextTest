import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {

  const session = await getServerSession(authOptions)

  return (
    <main className="flex min-h-screen flex-col items-center gap-3 p-24">
      <h1>{session && session.user!.name}</h1>
      <Link href="/users">Users</Link>
    </main>
  );
}
