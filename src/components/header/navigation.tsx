import Link from "next/link";
import { usePathname } from 'next/navigation';
const NAV_LINKS = [
  {
    href: '/',
    name: 'Home'
  },
  {
    href: '/explore',
    name: 'Explore'
  },
  {
    href: '/creators',
    name: 'Creators'
  },
  {
    href: '/collectors',
    name: 'Collectors'
  },
  {
    href: '/product',
    name: 'Product'
  },
  {
    href: '/all-pages',
    name: 'All Pages'
  },
  {
    href: '/blog',
    name: 'Blog'
  },
]

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="navigation">
      {
        NAV_LINKS.map((link) => {
          const isActive = pathname === link.href;
          return <Link 
            href={link.href} 
            className={ isActive ? 'active' : '' }
            key={link.name}
          >
            {link.name}
          </Link>
        })
      }
    </nav>
  )
};
