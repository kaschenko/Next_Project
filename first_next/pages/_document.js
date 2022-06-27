import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap" rel="stylesheet"/>
                <link href="path/to/node_modules/normalize.css/normalize.css" rel="stylesheet" />

            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}