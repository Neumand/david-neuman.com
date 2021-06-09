import Link from 'next/link';
import { Button } from '@windmill/react-ui';
import { GiMoon } from 'react-icons/gi';

export default function Header() {
  return (
    <nav className="flex items-center justify-between w-full p-8 sticky-nav bg-gray-100 md:mb-8">
      <ul className="flex">
        <li className="mr-2">
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li className="mr-2">
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </li>
        <li className="mr-2">
          <Link href="/now">
            <a>Now</a>
          </Link>
        </li>
        <li className="mr-2">
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li className="mr-2">
          <a target="_blank" href="https://brain-food.vercel.app/">
            Brain Food
          </a>
        </li>
        <li className="mr-2">
          <a>RSS Feed</a>
        </li>
      </ul>
      <Button icon={GiMoon} layout="outline" aria-label="Dark mode"></Button>
    </nav>
  );
}
