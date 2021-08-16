export default function Header({ children, textAlign = 'center' }) {
  return (
    <header className={`text-${textAlign}`}>
      {children}
    </header>
  );
}
