import { Button } from '@windmill/react-ui';
import { GiMoon } from 'react-icons/gi';
import NavItem from './NavItem';

export default function Navigation() {
  return (
    <nav className="flex items-center justify-between w-full p-8 sticky-nav bg-gray-100">
      <ul className="flex space-x-2">
        <NavItem href="/">
          <span className="text-3xl font-bold">D</span>
        </NavItem>
        <NavItem href="/blog">Blog</NavItem>
        <NavItem href="/now">Now</NavItem>
        <NavItem href="/about">About</NavItem>
        <NavItem href="https://brain-food.vercel.app/" popOut>
          Brain Food
        </NavItem>
      </ul>
      <Button icon={GiMoon} layout="outline" aria-label="Dark mode"></Button>
    </nav>
  );
}
