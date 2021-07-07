import { ThemeProvider } from 'next-themes';

import 'styles/globals.css';
import 'tailwindcss/tailwind.css';
import 'styles/prism.css';

function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
