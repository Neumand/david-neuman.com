export default function SocialIcon({ children, url }) {
  return (
    <a
      className="flex items-center justify-center bg-white w-9 h-9 rounded-full hover:bg-blue-900 hover:text-white transition-colors"
      target="_blank"
      href={url}
    >
      {children}
    </a>
  );
}
