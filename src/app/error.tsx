"use client";

import { useEffect } from "react";
import Link from "next/link";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps): JSX.Element {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#080a12] px-6 text-center text-white">
      <h1 className="text-2xl font-bold tracking-tight">Something went wrong</h1>
      <p className="mt-4 max-w-md text-sm text-white/70">
        {error.message || "An unexpected error occurred."}
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => reset()}
          className="inline-flex h-11 items-center justify-center rounded-full border border-[#ffd70080] bg-gradient-to-b from-[#ffd700] to-[#e6c200] px-6 text-sm font-semibold text-black transition hover:brightness-105"
        >
          Try again
        </button>
        <Link href="/" className="text-sm font-medium text-[#ffd700] underline-offset-2 hover:underline">
          Back to home
        </Link>
      </div>
    </div>
  );
}
