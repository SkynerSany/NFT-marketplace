import Link from "next/link";

export default function Navigation() {
  
  return (
    <nav className="navigation">
      <Link href={'/'}>Home</Link>
      <Link href={'/explore'}>Explore</Link>
      <Link href={'/creators'}>Creators</Link>
      <Link href={'/collectors'}>Collectors</Link>
      <Link href={'/product'}>Product</Link>
      <Link href={'/all-pages'}>All Pages</Link>
      <Link href={'/blog'}>Blog</Link>
    </nav>
  )
};
