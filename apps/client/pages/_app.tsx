import { AppProps } from 'next/app';
import Head from 'next/head';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import './styles.css';
import { SessionProvider } from 'next-auth/react';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Nasco Direct</title>
      </Head>
      <main>
        <SessionProvider>
          <Component {...pageProps} />
        </SessionProvider>
      </main>
    </>
  );
}

export default CustomApp;
