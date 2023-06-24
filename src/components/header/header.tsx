import Link from "next/link";

export default function Header() {
  
  return (
    <header>
      <Link href={'/'}>Home</Link>
      <Link href={'/creators'}>Creators</Link>
      <Link href={'/explore'}>Explore</Link>
    </header>
  )
};
