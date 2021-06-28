export default function Header({ children, textAlign = 'center' }) {
  return (
    <header className={`text-${textAlign} mb-12`}>
      {children}
    </header>
  );
}
