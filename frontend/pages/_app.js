import dynamic from 'next/dynamic'
import Head from 'next/head'
import '../styles/globals.css'

const WalletConnectionProvider = dynamic(() => import('../context/WalletConnectionProvider'), {
    ssr: false,
})

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Airbnb Clone</title>
            </Head>
            <WalletConnectionProvider>
            {/* The component links to the index.js */}
                <Component {...pageProps} /> 
            </WalletConnectionProvider>
        </>
    )
}

export default MyApp
