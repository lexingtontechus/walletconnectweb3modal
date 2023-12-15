"use client";
import Link from "next/link";
import ConnectButton from "./components/connect";
import { Web3Button } from "@web3modal/react";
import {
  useWeb3Modal,
  useWeb3ModalEvents,
  useWeb3ModalState,
  useWeb3ModalTheme,
} from "@web3modal/wagmi/react";

export default function Home() {
  const modal = useWeb3Modal();
  const state = useWeb3ModalState();
  const { themeMode, themeVariables, setThemeMode } = useWeb3ModalTheme();
  const events = useWeb3ModalEvents();
  return (
    <div className="hero min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold uppercase">Lexington WEB3 Demo</h1>
          <h2 className="text-2xl font-bold uppercase">
            Wallet Connect Web3Modal
            <ConnectButton />
          </h2>
          <Web3Button icon="hide" label="CONNECT" balance="hide" />

          <div className="mx-auto px-8 align-center">
            <w3m-button />
            <w3m-network-button />
            <w3m-connect-button />
            <w3m-account-button />
          </div>
          <button className="btn" onClick={() => modal.open()}>
            Connect Wallet
          </button>
          <button
            className="btn"
            onClick={() => modal.open({ view: "Networks" })}
          >
            Choose Network
          </button>
          <button
            className="btn"
            onClick={() =>
              setThemeMode(themeMode === "light" ? "dark" : "light")
            }
          >
            Toggle Theme
          </button>
          <pre>{JSON.stringify(state, null, 2)}</pre>
          <pre>{JSON.stringify({ themeMode, themeVariables }, null, 2)}</pre>
          <pre>{JSON.stringify(events, null, 2)}</pre>
        </div>
      </div>
    </div>
  );
}
