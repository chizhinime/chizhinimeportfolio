// pages/_app.tsx
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import type { AppProps } from 'next/app';
import Head from "next/head";
import Loading from '../components/Loading';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Show loading on initial page load
    setLoading(true);

    // Hide loading after initial load
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    // Handle route changes
    const handleStart = () => setLoading(true);
    const handleComplete = () => {
      setTimeout(() => setLoading(false), 800);
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      clearTimeout(timer);
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router]);

  return (
    <>
      <Head>
        <title>Chizhinime Portfolio</title>
        <meta name="description" content="Chizhinime Portfolio"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </Head>
      {loading && <Loading />}
      <div className={`min-h-screen flex flex-col transition-opacity duration-300 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
