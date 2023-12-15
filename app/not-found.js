"use client";

import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold uppercase">404 File Not Found</h1>
          <p className="py-6">
            <span className="h-32 loading loading-bars loading-xs"></span>
            <span className="h-32 loading loading-bars loading-sm"></span>
            <span className="h-32 loading loading-bars loading-md"></span>
            <span className="h-32 loading loading-bars loading-lg"></span>
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
