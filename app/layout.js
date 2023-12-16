import Providers from "./providers";
import Header from "./components/header";
import Footer from "./components/footer";
import "/styles/global.css";
import "/styles/index.css";
export const metadata = {
  title: "Lexington WEB3 Modal Demo",
  description: "Wallet Connect WEB3 Modal",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
