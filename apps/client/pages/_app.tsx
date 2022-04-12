import { AppProps } from 'next/app';
import Head from 'next/head';
import NavBar from '../components/NavBar';
import { ToastContainer, toast } from 'react-toastify';
import './styles.css';
import { SessionProvider } from 'next-auth/react';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

import AppContextProvider from '../context/Provider';

function CustomApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/static/favicon.ico" />
        <title>Nasco Direct</title>
      </Head>
      <main>
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
