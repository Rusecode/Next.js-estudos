// pages/_app.tsx

import '../styles/globals.css'; // Ajuste o caminho conforme a estrutura do seu projeto
import type { AppProps } from 'next/app';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
