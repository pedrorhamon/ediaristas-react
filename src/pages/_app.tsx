import '@styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head';
import { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    document.querySelector('#jss-server-side')?.remove();
  }, [])
  return (
    <>
      <Head>
  
      </Head>
      <Component {...pageProps} />
    </>
  )
}
