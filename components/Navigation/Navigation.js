import { Button } from '@windmill/react-ui';
import { GiMoon } from 'react-icons/gi';
import NavItem from './NavItem';

export default function Navigation() {
  return (
    <nav className="flex items-center justify-between w-full p-8 sticky-nav bg-white shadow-md">
      <ul className="flex space-x-2">
        <NavItem href="/">
          <span className="text-3xl font-bold">David Neuman</span>
        </NavItem>
      </ul>
      <ul className="flex space-x-4 items-center">
        <NavItem href="/blog">Blog</NavItem>
        <NavItem href="/newsletter">Newsletter</NavItem>
        <NavItem href="/books">Books</NavItem>
        <NavItem href="/now">Now</NavItem>
        <NavItem href="/about">About</NavItem>
        <NavItem href="https://brain-food.vercel.app/" popOut>
          Brain Food
        </NavItem>
        <Button icon={GiMoon} layout="outline" aria-label="Dark mode"></Button>
      </ul>
    </nav>
  );
}
