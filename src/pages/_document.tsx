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

          <meta name="google-site-verification" content="jTPacNP2iXSpygKPXKweJ8YUEiP-EZxQjHNUinRvuPw" />

          
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-9CJ15JB804"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-9CJ15JB804');
</script>
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
