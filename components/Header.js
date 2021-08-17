export default function Header({ children, textAlign = 'center' }) {
  return (
    <header className={`text-${textAlign} mt-4 md:mt-8`}>
      {children}
    </header>
  );
}
