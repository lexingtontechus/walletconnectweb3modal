import { Inter } from "next/font/google";
import Providers from "./providers";
// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});
export const metadata = {
  title: "Home",
  description: "Wallet Connect WEB3 Modal",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <header />
      <Providers>
        <body>{children}</body>
      </Providers>
    </html>
  );
}
