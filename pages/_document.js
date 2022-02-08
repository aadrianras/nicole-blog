import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                    <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&family=IM+Fell+Double+Pica&family=Montserrat:wght@300;400&display=swap" rel="stylesheet" />
                    <script data-ad-client="ca-pub-3457873907604920" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
                </Head >
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument;