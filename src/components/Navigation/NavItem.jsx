export default function NavItem({ children, href = null, popOut }) {
  if (!href) {
    return <span className='cursor-pointer hover:font-bold'>{children}</span>;
  }

  return (
    <div>
      {popOut ? (
        <a className='nav-item' href={href} target='_blank'>
          {children}
        </a>
      ) : (
        <a href={href} className='nav-item'>
          {children}
        </a>
      )}
    </div>
  );
}
