"use client";

import { useRouter } from "next/navigation";

export default function Error() {
  const router = useRouter();

  return (
    <div className="hero min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold uppercase">Error</h1>
          <p className="py-6">
            <span className="loading loading-infinity loading-lg text-primary"></span>
            <span className="loading loading-infinity loading-lg text-secondary"></span>
            <span className="loading loading-infinity loading-lg text-accent"></span>
            <span className="loading loading-infinity loading-lg text-neutral"></span>
            <span className="loading loading-infinity loading-lg text-info"></span>
            <span className="loading loading-infinity loading-lg text-success"></span>
            <span className="loading loading-infinity loading-lg text-warning"></span>
            <span className="loading loading-infinity loading-lg text-error"></span>
          </p>
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => router.push("/")}
          >
            Home
          </button>
        </div>
      </div>
    </div>
  );
}
