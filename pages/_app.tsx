
import type { AppProps } from 'next/app'
import { NextUIProvider } from '@nextui-org/react';
import Footer from '../Components/Footer/Footer';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <Component {...pageProps} />
      <Footer />
    </NextUIProvider>
  );
}
