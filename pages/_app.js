import { ThemeProvider } from 'next-themes';
import { Toaster } from 'react-hot-toast';

import 'styles/globals.css';
import 'tailwindcss/tailwind.css';
import 'styles/prism.css';

function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
      <Toaster position="bottom-center" />
    </ThemeProvider>
  );
}

export default App;
