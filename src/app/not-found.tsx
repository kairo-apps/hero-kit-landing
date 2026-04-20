import Link from "next/link";

export default function NotFound(): JSX.Element {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#080a12] px-6 text-center text-white">
      <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#ffd700]">404</p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight">Page not found</h1>
      <p className="mt-4 max-w-md text-sm text-white/70">The page you are looking for does not exist or was moved.</p>
      <Link
        href="/"
        className="mt-8 inline-flex h-11 items-center justify-center rounded-full border border-[#ffd70080] bg-gradient-to-b from-[#ffd700] to-[#e6c200] px-8 text-sm font-semibold text-black transition hover:brightness-105"
      >
        Back to home
      </Link>
    </div>
  );
}
