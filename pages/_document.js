import { Html, Head, Main, NextScript } from 'next/document'


export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="stylesheet" href="/css/nicepage.css" media="screen"/>
        <link rel="stylesheet" href="/css/Accueil.css" media="screen"/>
        <link id="u-theme-google-font" rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i|Open+Sans:300,300i,400,400i,500,500i,600,600i,700,700i,800,800i"/>
      </Head>
      <body>
        <Main />
        <NextScript/>
      </body>
    </Html>
  )
}
