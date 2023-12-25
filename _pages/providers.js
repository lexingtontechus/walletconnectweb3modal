"use client";
import { ThemeProvider } from "next-themes";
import { createWeb3Modal, defaultWagmiConfig } from "@web3modal/wagmi/react";

import { WagmiConfig } from "wagmi";
import { arbitrum, mainnet } from "viem/chains";

const projectId = process.env.projectID || "87491f051df9c49d7834ffc89cfd9dc7";
// 1. Get projectId at https://cloud.walletconnect.com

// 2. Create wagmiConfig
const metadata = {
  name: "Lexington Web3Modal Demo",
  description: "Web3Modal Demo",
  url: "https://web3modal.lexingtontech.us",
  icons: ["/logo_lxt_futuristic_light.svg"],
};

const chains = [mainnet, polygon];
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });

//export default function App({ Component, pageProps }) {
const Providers = ({ children }) => {
  return (
    <>
      <WagmiConfig config={wagmiConfig}>
        <ThemeProvider defaultTheme="dim">{children}</ThemeProvider>
        {/*<Component {...pageProps} />*/}
      </WagmiConfig>

      {/*   themeVariables={{
          "--w3m-background-color": "#0f172a",
          "--w3m-logo-image-url":
            "https://storage.fleek-internal.com/a2d41cff-44ad-49e9-a80a-2d1aafc21231-bucket/lxt-images/logo_lxt_futuristic_light.svg",
        }}
        termsOfServiceUrl="https://lexingtontech.us/terms"
        privacyPolicyUrl="https://lexingtontech.us/privacy"
        // explorerAllowList="1ae92b26df02f0abca6304df07debccd18262fdf5fe82daa81593582dac9a369"
      */}
    </>
  );
};
export default Providers;
