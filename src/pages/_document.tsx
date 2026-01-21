// src/pages/_document.tsx
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {/* AdSense Script with YOUR client ID */}
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1469724692996264"
            crossOrigin="anonymous"
          />
          
          {/* Google AdSense verification */}
          <meta name="google-adsense-account" content="ca-pub-1469724692996264" />
          
          {/* Preconnect for better performance */}
          <link rel="preconnect" href="https://pagead2.googlesyndication.com" />
          <link rel="preconnect" href="https://googleads.g.doubleclick.net" />
          <link rel="preconnect" href="https://tpc.googlesyndication.com" />
        </Head>
        <body>
          <Main />
          <NextScript />
          
          {/* Initialize AdSense */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (adsbygoogle = window.adsbygoogle || []).push({
                  google_ad_client: "ca-pub-1469724692996264",
                  enable_page_level_ads: true
                });
              `
            }}
          />
        </body>
      </Html>
    )
  }
}

export default MyDocument
