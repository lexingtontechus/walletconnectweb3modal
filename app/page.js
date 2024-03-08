"use client";
import Link from "next/link";
import WEB3Inbox from "./components/web3inbox";

import ContactForm from "./components/contactform";
export default function Home() {
  // const { open } = useWeb3Modal();
  return (
    <div className="hero min-h-screen pb-8">
      <div className="hero-content text-center">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold uppercase py-2">
            Lexington WEB3 Demo
          </h1>
          <h2 className="text-2xl uppercase py-2">Wallet Connect Web3Modal</h2>
          <div className="w-full">
            <div className="flex flex-wrap gap-4 justify-center mx-auto text-pretty">
              <div className="card w-96 bg-base-200 shadow-xl">
                <figure className="image-full p-2">
                  <img
                    src="/logo_wc.svg"
                    alt="Wallet Connect"
                    className="h-16"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-accent">Wallet Connect</h2>
                  <p className="text-sm">
                    The communications protocol for web3, WalletConnect brings
                    the ecosystem together by enabling wallets and apps to
                    securely connect and interact.
                  </p>
                  <div className="card-actions justify-end">
                    <w3m-button balance="hide" />
                  </div>
                </div>
              </div>

              <div className="card w-96 bg-base-200 shadow-xl">
                <figure className="p-2">
                  <img
                    src="/logo_w3inbox.png"
                    alt="Web3 Inbox"
                    className="h-16"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-accent">Web3Inbox</h2>
                  <p className="text-sm">
                    Get notifications from the apps you love From DAO proposals
                    to NFT drops, social updates to game requests — get
                    real-time notifications from your favorite apps.
                  </p>
                  <WEB3Inbox />
                </div>
              </div>
            </div>
          </div>
          <p className="py-4">
            Wallet Connect makes it easy for you to plug into web3 through
            hundreds of apps, opening the doors to a new world of web3
            experiences.
          </p>
        </div>
      </div>
    </div>
  );
}
