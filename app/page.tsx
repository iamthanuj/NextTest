import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-3 p-24">
      <h1>Hello World</h1>
      <Link href="/users">Users</Link>
    </main>
  );
}
