"use client";
import Link from "next/link";
import { Web3Button } from "@web3modal/react";

export default function IndexPage() {
  return (
    <div>
      <div>
        <h1>Wallet Connect Web3Modal</h1>
      </div>
      <div>
        <Web3Button icon="hide" label="CONNECT" balance="hide" />
      </div>
    </div>
  );
}
