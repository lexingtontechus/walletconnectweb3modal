"use client";
import { ThemeProvider } from "next-themes";
const Providers = ({ children }) => {
  return <ThemeProvider defaultTheme="dim">{children}</ThemeProvider>;
};
export default Providers;
