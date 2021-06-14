import { useState } from 'react';
import Link from 'next/link';
import { Button, Dropdown, DropdownItem } from '@windmill/react-ui';
import { GiMoon } from 'react-icons/gi';

export default function Header({ tags }) {
  const [isTopicMenuOpen, setIsTopicMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsTopicMenuOpen(!isTopicMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between w-full p-8 sticky-nav bg-gray-100 md:mb-8">
      <ul className="flex">
        <li className="mr-2">
          <Link href="/">
            <a className="hover:font-bold">Home</a>
          </Link>
        </li>
        <li className="mr-2">
          <Link href="/blog">
            <a className="hover:font-bold">Blog</a>
          </Link>
        </li>
        <li className="mr-2">
          <div className="relative">
            <span className="cursor-pointer hover:font-bold" onClick={toggleMenu}>
              Topics
            </span>
            <Dropdown
              isOpen={isTopicMenuOpen}
              onClose={() => setIsTopicMenuOpen(false)}
            >
              {tags &&
                tags.map((tag) => (
                  <Link key={tag.id} href={`/tags/${tag.slug}`}>
                    <DropdownItem
                      tag="a"
                      href={`/tags/${tag.slug}`}
                      className="justify-between"
                    >
                      <span>{tag.name}</span>
                    </DropdownItem>
                  </Link>
                ))}
            </Dropdown>
          </div>
        </li>
        <li className="mr-2">
          <Link href="/now">
            <a className="hover:font-bold">Now</a>
          </Link>
        </li>
        <li className="mr-2">
          <Link href="/about">
            <a className="hover:font-bold">About</a>
          </Link>
        </li>
        <li className="mr-2">
          <a className="hover:font-bold" target="_blank" href="https://brain-food.vercel.app/">
            Brain Food
          </a>
        </li>
      </ul>
      <Button icon={GiMoon} layout="outline" aria-label="Dark mode"></Button>
    </nav>
  );
}
