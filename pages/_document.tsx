import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin={'true'}
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,400;0,700;1,100;1,400;1,700&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" type="image/png" href="/favicon.png" />
          <meta
            name="description"
            content="Tenkai Academy Discord's Amane Kanata 2022 Birthday Project"
          />
          <meta
            property="og:image"
            content="https://cdn.discordapp.com/attachments/782119945207021622/967019278593302578/halobanner.webp"
          />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:site_name" content="PPTenshi" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="HALO WORLD" />
          <meta property="og:url" content="https://halo-world.vercel.app" />
          <meta
            property="og:description"
            content="Tenkai Academy Discord's Amane Kanata 1 Million Subscribers Project"
          />
          <meta property="og:locale" content="en_US" />
          <meta property="og:locale:alternate" content="ja_JP" />
          <meta property="twitter:card" content="summary_large_image" />
          <link
            rel="alternate"
            hrefLang="x-default"
            href="https://halo-world.vercel.app"
          />
          <link
            rel="alternate"
            hrefLang="ja"
            href="https://halo-world.vercel.app/jp"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
