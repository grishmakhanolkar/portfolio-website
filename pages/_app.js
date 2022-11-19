import Head from 'next/head';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/react';
import { useEffect } from 'react';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);
  return (
    <>
      {/* Google Analytics */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-B5Y04SM9X7"
      ></Script>
      <Script id="Google Analytics">
        {`window.dataLayer = window.dataLayer || []; function gtag()
        {window.dataLayer.push(arguments);}
        gtag('js', new Date()); gtag('config', 'G-B5Y04SM9X7');`}
      </Script>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp;
