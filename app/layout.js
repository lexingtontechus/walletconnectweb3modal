import { Web3Modal } from "../context/web3modal";
import Providers from "./providers";
import Header from "./components/header";
import Footer from "./components/footer";
import "/styles/global.css";
import "/styles/index.css";

export const metadata = {
  title: "Lexington Wallet Connect WEB3 Modal",
  description: "Wallet Connect WEB3 Modal",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Web3Modal>
          <Providers>
            <Header /> {children}
            <Footer />
          </Providers>
        </Web3Modal>
      </body>
    </html>
  );
}
