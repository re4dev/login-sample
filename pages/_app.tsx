
import type { AppProps } from 'next/app'
import { NextUIProvider } from '@nextui-org/react';
import Footer from '../Components/Footer/Footer';
import { SessionProvider } from "next-auth/react"
import Header from '../Components/Login/Header';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <NextUIProvider>
        <Component {...pageProps} />
        <Footer />
      </NextUIProvider>
    </SessionProvider>
  );
}
