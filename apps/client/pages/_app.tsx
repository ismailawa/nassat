import { AppProps } from 'next/app';
import Head from 'next/head';
import NavBar from '../components/NavBar';
import './styles.css';
import { SessionProvider } from 'next-auth/react';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

import AppContextProvider from '../context/Provider';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Nasco Direct</title>
      </Head>
      <main>
        <Toaster position="top-right" />
        <Provider store={store}>
          <SessionProvider>
            <AppContextProvider>
              <Component {...pageProps} />
            </AppContextProvider>
          </SessionProvider>
        </Provider>
      </main>
    </>
  );
}

export default CustomApp;
