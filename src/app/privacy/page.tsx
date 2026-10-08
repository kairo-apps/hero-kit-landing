import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | HeroKit",
  description: "Privacy Policy for the HeroKit mobile application.",
};

const appHref = "#";

export default function PrivacyPage(): JSX.Element {
  return (
    <div className="min-h-screen text-white">
      <header className="mx-auto w-full max-w-[1120px] px-6 py-6">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 text-xl font-bold tracking-[-0.02em]">
            <Image
              src="/images/hero-kit-logo-land-c9695ab0-7b9d-4af3-80eb-474e4941d656.png"
              alt="HeroKit logo"
              width={36}
              height={36}
              className="h-9 w-9 rounded-[10px]"
              priority
            />
            HeroKit
          </Link>
          <a
            href={appHref}
            className="inline-flex h-10 items-center justify-center rounded-full border border-[#ffd70080] bg-gradient-to-b from-[#ffd700] to-[#e6c200] px-5 text-sm font-semibold text-black shadow-[0_8px_24px_rgba(255,215,0,0.25)] transition hover:brightness-105"
          >
            Get App
          </a>
        </nav>
      </header>

      <main id="main-content" className="px-6 pb-20 pt-2">
        <article className="mx-auto max-w-[720px] rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))] p-8 shadow-[0_12px_32px_rgba(0,0,0,0.15)] md:p-12">
          <h1 className="bg-gradient-to-b from-white to-white/80 bg-clip-text text-3xl font-extrabold tracking-[-0.03em] text-transparent md:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm font-medium text-[#ffd700]">Last updated: April 19, 2026</p>

          <div className="mt-10 space-y-6 text-[15px] leading-relaxed text-white/80 md:text-base">
            <p>
              HeroKit respects your privacy. This Privacy Policy explains what information we collect and how we use it
              when you use the HeroKit mobile application.
            </p>

            <section aria-labelledby="privacy-section-1">
              <h2 id="privacy-section-1" className="mb-3 text-lg font-bold tracking-[-0.02em] text-white md:text-xl">
                1. Information We Collect
              </h2>
              <ul className="list-disc space-y-2 pl-5 marker:text-[#ffd700]">
                <li>
                  <strong className="font-semibold text-white">Local Data</strong>: All your skills, habits, levels,
                  relics, streaks, and progress are stored <strong className="font-semibold text-white">only on your device</strong>. We do not have access to this data.
                </li>
                <li>
                  <strong className="font-semibold text-white">Anonymous Analytics</strong>: We may collect limited
                  anonymous usage data (such as session duration, features used, and app crashes) to improve the
                  application.
                </li>
                <li>
                  <strong className="font-semibold text-white">Subscription Information</strong>: All billing and
                  subscription data is handled exclusively by Apple App Store. We do not receive or store your payment
                  information.
                </li>
              </ul>
              <p className="pt-2">
                We do <strong className="font-semibold text-white">not</strong> collect personal information such as your
                name, email address, phone number, or location.
              </p>
            </section>

            <section aria-labelledby="privacy-section-2">
              <h2 id="privacy-section-2" className="mb-3 text-lg font-bold tracking-[-0.02em] text-white md:text-xl">
                2. How We Use the Information
              </h2>
              <p className="mb-3">We use the collected anonymous data solely to:</p>
              <ul className="list-disc space-y-2 pl-5 marker:text-[#ffd700]">
                <li>Improve app performance and user experience</li>
                <li>Fix bugs and technical issues</li>
                <li>Understand how users interact with gamification features</li>
              </ul>
            </section>

            <section aria-labelledby="privacy-section-3">
              <h2 id="privacy-section-3" className="mb-3 text-lg font-bold tracking-[-0.02em] text-white md:text-xl">
                3. Data Sharing
              </h2>
              <p>We do not sell, trade, or rent your personal data to third parties.</p>
              <p>
                Anonymous analytics data may be shared with trusted service providers (such as Firebase) under strict
                confidentiality agreements.
              </p>
            </section>

            <section aria-labelledby="privacy-section-4">
              <h2 id="privacy-section-4" className="mb-3 text-lg font-bold tracking-[-0.02em] text-white md:text-xl">
                4. Data Storage and Deletion
              </h2>
              <ul className="list-disc space-y-2 pl-5 marker:text-[#ffd700]">
                <li>Your game progress exists only on your device.</li>
                <li>If you delete the app or clear its data, all progress will be permanently lost.</li>
                <li>Anonymous analytics data is retained for a maximum of 12 months.</li>
              </ul>
            </section>

            <section aria-labelledby="privacy-section-5">
              <h2 id="privacy-section-5" className="mb-3 text-lg font-bold tracking-[-0.02em] text-white md:text-xl">
                5. Children&apos;s Privacy
              </h2>
              <p>
                HeroKit is intended for users aged 13 and older. We do not knowingly collect data from children under 13
                years of age.
              </p>
            </section>

            <section aria-labelledby="privacy-section-6">
              <h2 id="privacy-section-6" className="mb-3 text-lg font-bold tracking-[-0.02em] text-white md:text-xl">
                6. Your Rights
              </h2>
              <p>You can delete all your data at any time by uninstalling the app or clearing its data.</p>
              <p>If you have any questions about data we may hold, please contact us.</p>
            </section>

            <section aria-labelledby="privacy-section-7">
              <h2 id="privacy-section-7" className="mb-3 text-lg font-bold tracking-[-0.02em] text-white md:text-xl">
                7. Changes to This Privacy Policy
              </h2>
              <p>
                We may update this Privacy Policy occasionally. We will notify users of any material changes through the
                app or our website.
              </p>
            </section>

            <section aria-labelledby="privacy-contact" className="border-t border-white/10 pt-8">
              <h2 id="privacy-contact" className="mb-3 text-lg font-bold tracking-[-0.02em] text-white md:text-xl">
                Contact Us
              </h2>
              <p>
                If you have any questions or concerns about this Privacy Policy, please contact us at:{" "}
                <strong className="font-semibold">
                  <a
                    href="mailto:vakulenkoworks@gmail.com"
                    className="text-[#ffd700] underline decoration-[#ffd700]/40 underline-offset-2 transition hover:decoration-[#ffd700]"
                  >
                    vakulenkoworks@gmail.com
                  </a>
                </strong>
              </p>
            </section>
          </div>

          <p className="mt-10 text-center text-sm text-white/60">
            <Link href="/" className="text-white/80 underline-offset-2 transition hover:text-white hover:underline">
              ← Back to home
            </Link>
          </p>
        </article>
      </main>
    </div>
  );
}
