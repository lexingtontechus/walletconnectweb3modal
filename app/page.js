"use client";
import Link from "next/link";
import { Web3Button } from "@web3modal/react";
import ContactForm from "./components/contactform";
export default function Home() {
  return (
    <div className="hero min-h-screen pb-8">
      <div className="hero-content text-center">
        <div className="max-w-full">
          <h1 className="text-5xl font-bold uppercase py-2">
            Lexington WEB3 Demo
          </h1>
          <h2 className="text-2xl uppercase py-2">Wallet Connect Web3Modal</h2>
          <div className="flex flex-wrap gap-4 justify-center mx-auto">
            <div className="text-xl py-2">
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
                    <Web3Button
                      className="btn btn-primary"
                      icon="hide"
                      label="CONNECT"
                      balance="hide"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="text-xl py-2">
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
                  <div className="card-actions justify-end">
                    <button
                      className="btn bg-sky-500 text-slate-50 font-bold text-md uppercase border-lg"
                      onClick={() =>
                        document.getElementById("waitlist").showModal()
                      }
                    >
                      Waitlist
                    </button>
                    <dialog
                      id="waitlist"
                      className="modal modal-bottom sm:modal-middle"
                    >
                      <div className="modal-box">
                        <h3 className="font-bold text-lg uppercase">
                          Web3Inbox Waitlist
                        </h3>
                        <div className="py-4">
                          <ContactForm />
                        </div>
                        <div className="modal-action">
                          <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn uppercase">Close</button>
                          </form>
                        </div>
                      </div>
                    </dialog>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="pt-2 pb-8">
            Wallet Connect makes it easy for you to plug into web3 through
            hundreds of apps, opening the doors to a new world of web3
            experiences.
          </p>
        </div>
      </div>
    </div>
  );
}
