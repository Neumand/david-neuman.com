import { DefaultSeo } from 'next-seo';
import SEO from 'next-seo.config';
import { ThemeProvider } from 'next-themes';
import 'styles/globals.css';
import 'styles/prism.css';
import 'tailwindcss/tailwind.css';

function App({ Component, pageProps }) {
  // TODO: Validate how Twitter cards are shared without customizing Twitter card info on blog post pages.
  return (
    <ThemeProvider attribute="class">
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
