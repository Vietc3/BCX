import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta name="description" content="Quoc Viet E-commerce website with Next.js" />
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" />
                    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"></script>
                    <script src="https://kit.fontawesome.com/a076d05399.js"></script>
                    <style>{`
                          #__next { height: 100vh }
                          body {
                            overflow: hidden; /* Hide scrollbars */
                          }
                          /* width */
                            ::-webkit-scrollbar {
                            width: 10px;
                            }

                            /* Track */
                            ::-webkit-scrollbar-track {
                            background:  #f1f1f1; 
                            }
                            
                            /* Handle */
                            ::-webkit-scrollbar-thumb {
                            background: #c1c1c1; 
                            }

                            /* Handle on hover */
                            ::-webkit-scrollbar-thumb:hover {
                            background: #c8c8c8; 
                            }
                     `}
                    </style>
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