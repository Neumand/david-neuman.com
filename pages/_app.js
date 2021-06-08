import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import { Windmill } from '@windmill/react-ui';

function App({ Component, pageProps }) {
  return (
    <Windmill>
      <Component {...pageProps} />
    </Windmill>
  );
}

export default App;
