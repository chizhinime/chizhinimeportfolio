import { Html, Head, Main, NextScript, DocumentContext } from "next/document";
import Script from 'next/script'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps}
}

render(){
  return (
    <Html lang="en">
      <Head>
        <meta name="google-adsense-account" content="ca-pub-1469724692996264">
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1469724692996264"
     crossorigin="anonymous"
          />
      </body>
    </Html>
  );
}

export default MyDocument
