import Link from "next/link";

export default function NavBar() {
  return (
    <div className="gap-4 flex">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
    </div>
  );
}
