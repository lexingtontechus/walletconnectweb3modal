"use client";
import { ThemeProvider } from "next-themes";
import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { mainnet, polygon } from "wagmi/chains";

const chains = [mainnet, polygon];
const projectId = process.env.projectID || "87491f051df9c49d7834ffc89cfd9dc7";

const { provider } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiClient = createClient({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, version: 1, chains }),
  provider,

  //walletConnectVersion: 2,
});
const ethereumClient = new EthereumClient(wagmiClient, chains);

//export default function App({ Component, pageProps }) {
const Providers = ({ children }) => {
  return (
    <>
      <WagmiConfig client={wagmiClient}>
        <ThemeProvider defaultTheme="dim">{children}</ThemeProvider>
        {/*<Component {...pageProps} />*/}
      </WagmiConfig>

      <Web3Modal
        projectId={projectId}
        ethereumClient={ethereumClient}
        themeVariables={{
          "--w3m-background-color": "#0f172a",
          "--w3m-logo-image-url":
            "https://storage.fleek-internal.com/a2d41cff-44ad-49e9-a80a-2d1aafc21231-bucket/lxt-images/logo_lxt_futuristic_light.svg",
        }}
        termsOfServiceUrl="https://lexingtontech.us/terms"
        privacyPolicyUrl="https://lexingtontech.us/privacy"
        // explorerAllowList="1ae92b26df02f0abca6304df07debccd18262fdf5fe82daa81593582dac9a369"
      />
    </>
  );
};
export default Providers;
