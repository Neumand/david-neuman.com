import Link from 'next/link';

export default function NavItem({ children, href = null, popOut }) {
  if (!href) {
    return <span className="cursor-pointer hover:font-bold">{children}</span>;
  }

  return (
    <div>
      {popOut ? (
        <a className="nav-item" href={href} target="_blank">
          {children}
        </a>
      ) : (
        <Link href={href}>
          <a className="nav-item">{children}</a>
        </Link>
      )}
    </div>
  );
}
