"use client";

import { createWeb3Modal, defaultWagmiConfig } from "@web3modal/wagmi/react";

import { WagmiConfig } from "wagmi";
import { polygon, mainnet } from "viem/chains";

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = "87491f051df9c49d7834ffc89cfd9dc7";

// 2. Create wagmiConfig
const metadata = {
  name: "Lexington WEB3 WalletConnect",
  description: "WalletConnect Web3Modal Demo",
  url: "https://web3modal.lexingtontech.us",
  icons: ["/logo_lxt_futuristic.svg"],
};

const chains = [mainnet, polygon];
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });

// 3. Create modal
createWeb3Modal({
  wagmiConfig,
  projectId,
  chains,
  //themeMode: "light",
  //themeVariables: {
  //  "--w3m-color-mix": "#e879f9",
  //  "--w3m-color-mix-strength": 20,
  //},
  //termsConditionsUrl: "https://www.lexingtontech.us/terms",
  //privacyPolicyUrl: "https://www.lexingtontech.us/privacy",
  //includeWalletIds: [
  //  "1ae92b26df02f0abca6304df07debccd18262fdf5fe82daa81593582dac9a369",
  //  "4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0",
  //  "c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96", //Metamask
  //  "1ae92b26df02f0abca6304df07debccd18262fdf5fe82daa81593582dac9a369", //Rainbow
  //  "8308656f4548bb81b3508afe355cfbb7f0cb6253d1cc7f998080601f838ecee3", //UD
  //],
});

export function Web3Modal({ children }) {
  return <WagmiConfig config={wagmiConfig}>{children}</WagmiConfig>;
}
