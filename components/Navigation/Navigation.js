import { useTheme } from 'next-themes';
import { Menu } from '@headlessui/react';
import { MenuIcon } from '@heroicons/react/outline';

import NavItem from './NavItem';

export default function Navigation() {
  const { theme, setTheme } = useTheme();

  const navItems = [
    { name: 'Blog', href: '/blog', popOut: false },
    { name: 'Newsletter', href: '/newsletter', popOut: false },
    { name: 'Books', href: '/books', popOut: false },
    { name: 'Now', href: '/now', popOut: false },
    { name: 'About', href: '/about', popOut: false },
    {
      name: 'Brain Food',
      href: 'https://brain-food.vercel.app/',
      popOut: true,
    },
  ];

  return (
    <nav className="flex items-center justify-between w-full p-8 sticky-nav bg-white shadow-md transition-colors transform ease-linear dark:bg-gray-900">
      <div className="flex space-x-2">
        <NavItem href="/">
          <span className="text-3xl font-bold">David Neuman</span>
        </NavItem>
      </div>
      <div className="flex space-x-4">
        <div className="hidden space-x-4 items-center md:flex">
          {navItems.map(({ name, href, popOut }) => (
            <NavItem key={name} href={href} popOut={popOut}>
              {name}
            </NavItem>
          ))}
        </div>
        <Menu>
          <Menu.Button className="md:hidden py-2 px-2 rounded transition-colors ease-in-out bg-transparent dark:bg-cool-gray-900 dark:hover:bg-cool-gray-800">
            <MenuIcon className="w-6 h-6" />
          </Menu.Button>
          <Menu.Items className="absolute right-8 top-20 w-40 bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            {navItems.map(({ name, href, popOut }) => (
              <Menu.Item>
                {({ active }) => (
                  <NavItem
                    className={`${active && 'bg-black'}`}
                    key={name}
                    href={href}
                    popOut={popOut}
                  >
                    {name}
                  </NavItem>
                )}
              </Menu.Item>
            ))}
          </Menu.Items>
        </Menu>
        <button
          className="py-2 px-2 rounded transition-colors ease-in-out bg-gray-200 hover:bg-gray-300 dark:bg-cool-gray-900 dark:hover:bg-cool-gray-800"
          aria-label="Toggle Dark Mode"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          {theme === 'dark' ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          )}
        </button>
      </div>
    </nav>
  );
}
