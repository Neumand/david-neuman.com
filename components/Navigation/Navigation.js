import { useTheme } from 'next-themes';

import NavItem from './NavItem';

export default function Navigation() {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="flex items-center justify-between w-full p-8 sticky-nav bg-white shadow-md transition-colors transform ease-linear dark:bg-gray-900">
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
      </ul>
    </nav>
  );
}
