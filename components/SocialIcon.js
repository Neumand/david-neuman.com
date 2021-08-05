export default function SocialIcon({ children, url }) {
  return (
    <a
      className="flex items-center justify-center bg-white w-9 h-9 rounded-full hover:bg-blue-900 hover:text-white transition-colors dark:bg-cool-gray-900 dark:hover:bg-white dark:hover:text-cool-gray-900"
      target="_blank"
      href={url}
    >
      {children}
    </a>
  );
}
