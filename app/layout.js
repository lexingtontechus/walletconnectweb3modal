//WEB3Modal
import { headers } from "next/headers";
import { cookieToInitialState } from "wagmi";
import { config } from "../config";
import { ContextProvider } from "../context";

//WEB3Inbox
import { initWeb3InboxClient } from "@web3inbox/react";

// The project ID and domain you setup in the Domain Setup section
const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;
const appDomain = process.env.NEXT_PUBLIC_APP_DOMAIN;

initWeb3InboxClient({
  projectId,
  domain: appDomain,
  allApps: process.env.NODE_ENV !== "production",
});

import Providers from "./providers";
import Header from "./components/header";
import Footer from "./components/footer";
import "/styles/global.css";
import "/styles/index.css";
export const metadata = {
  title: "Lexington WalletConnect Web3Modal Demo",
  description: "Lexington WalletConnect Web3Modal",
};
export default function RootLayout({ children }) {
  const initialState = cookieToInitialState(config, headers().get("cookie"));
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ContextProvider initialState={initialState}>
          <Providers>
            <Header />
            {children}
            <Footer />
          </Providers>
        </ContextProvider>
      </body>
    </html>
  );
}
