import Link from 'next/link';

export default function NavItem({ children, href = null, popOut }) {
  if (!href) {
    return <span className="cursor-pointer hover:font-bold">{children}</span>;
  }

  return (
    <div>
      {popOut ? (
        <a href={href} target="_blank">
          {children}
        </a>
      ) : (
        <Link href={href}>
          <a>{children}</a>
        </Link>
      )}
    </div>
  );
}
