import {ConnectionProvider, WalletProvider} from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import {PhantomWalletAdapter} from '@solana/wallet-adapter-wallets';
import { useMemo } from 'react';

// const connection = "https://morning-smart-general.solana-devnet.discover.quiknode.pro/6c0d14f89ae227569dc27b66db18806108c24c42/";

const WalletConnectionProvider = ({children}) => {
    const endpoint = useMemo(()=> 'http://api.devnet.solana.com', []); //connect to quicknode

    const wallets = useMemo(() => [new PhantomWalletAdapter()], []);

    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} autoConnect>
                <WalletModalProvider >
                    {children}
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    )
}

export default WalletConnectionProvider;