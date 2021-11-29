import PrivateLayout from 'layouts/PrivateLayout';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import '../styles/globals.css';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  console.log('estoy en el app');
  return (
    <SessionProvider session={session}>
      <PrivateLayout>
        <Component {...pageProps} />
      </PrivateLayout>
    </SessionProvider>
  );
}

export default MyApp;
