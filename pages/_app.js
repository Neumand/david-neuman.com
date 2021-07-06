import { Windmill } from '@windmill/react-ui';
import { ThemeProvider } from 'next-themes';

import 'styles/globals.css';
import 'tailwindcss/tailwind.css';
import 'styles/prism.css';

function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
    <Windmill>
      <Component {...pageProps} />
    </Windmill>
    </ThemeProvider>
  );
}

export default App;
