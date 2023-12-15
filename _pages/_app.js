import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { arbitrum, mainnet, polygon } from "wagmi/chains";

const chains = [mainnet, polygon];
const projectId = "8bc78d25d0d8a616d7d8a3ddad523708";

const { provider } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiClient = createClient({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, version: 1, chains }),
  provider,

  //walletConnectVersion: 2,
});
const ethereumClient = new EthereumClient(wagmiClient, chains);

export default function App({ Component, pageProps }) {
  return (
    <>
      <WagmiConfig client={wagmiClient}>
        <Component {...pageProps} />
      </WagmiConfig>

      <Web3Modal
        projectId={projectId}
        ethereumClient={ethereumClient}
        themeVariables={{
          "--w3m-font-family": "Inter",
          "--w3m-accent-color": "#F5841F",
          "--w3m-background-color": "#18181b",
          "--w3m-logo-image-url":
            "https://93vrlm-3000.csb.app/img/logo-4mobeers.svg",
        }}
        termsOfServiceUrl="https://example.com/terms-and-conditions"
        // explorerAllowList="1ae92b26df02f0abca6304df07debccd18262fdf5fe82daa81593582dac9a369"
      />
    </>
  );
}
