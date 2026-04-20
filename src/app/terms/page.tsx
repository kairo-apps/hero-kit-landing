import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms and Conditions | HeroKit",
  description: "Terms and Conditions for the HeroKit mobile application.",
};

const appHref = "#";

export default function TermsPage(): JSX.Element {
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
            Terms and Conditions
          </h1>
          <p className="mt-4 text-sm font-medium text-[#ffd700]">Last updated: April 19, 2026</p>

          <div className="mt-10 space-y-6 text-[15px] leading-relaxed text-white/80 md:text-base">
            <p>
              Welcome to <strong className="font-semibold text-white">HeroKit</strong> — the RPG where you level up your
              real life.
            </p>
            <p>
              By downloading, installing, or using the HeroKit mobile application, you agree to these Terms and
              Conditions. If you do not agree, please do not use the app.
            </p>

            <section aria-labelledby="terms-section-1">
              <h2 id="terms-section-1" className="mb-3 text-lg font-bold tracking-[-0.02em] text-white md:text-xl">
                1. General
              </h2>
              <p>
                HeroKit is a gamified habit tracker that turns your real-life actions (workouts, reading, productivity,
                financial habits, etc.) into game progress, levels, and rewards.
              </p>
            </section>

            <section aria-labelledby="terms-section-2">
              <h2 id="terms-section-2" className="mb-3 text-lg font-bold tracking-[-0.02em] text-white md:text-xl">
                2. Eligibility
              </h2>
              <p>
                You must be at least 13 years of age to use HeroKit. If you are under the age of 18, you should review
                these terms with a parent or legal guardian.
              </p>
            </section>

            <section aria-labelledby="terms-section-3">
              <h2 id="terms-section-3" className="mb-3 text-lg font-bold tracking-[-0.02em] text-white md:text-xl">
                3. User Accounts and Progress
              </h2>
              <ul className="list-disc space-y-2 pl-5 marker:text-[#ffd700]">
                <li>No account registration is required.</li>
                <li>All your progress (levels, skills, relics, streaks) is stored locally on your device.</li>
                <li>
                  We are not responsible for any loss of progress if you delete the app, clear data, or change devices.
                </li>
              </ul>
            </section>

            <section aria-labelledby="terms-section-4">
              <h2 id="terms-section-4" className="mb-3 text-lg font-bold tracking-[-0.02em] text-white md:text-xl">
                4. Subscriptions
              </h2>
              <ul className="list-disc space-y-2 pl-5 marker:text-[#ffd700]">
                <li>HeroKit offers a free version and a paid Premium subscription (Weekly and Yearly plans).</li>
                <li>All subscriptions are handled and processed exclusively through the Apple App Store.</li>
                <li>Subscriptions automatically renew unless cancelled through your App Store account.</li>
                <li>Prices are clearly displayed before purchase.</li>
              </ul>
            </section>

            <section aria-labelledby="terms-section-5">
              <h2 id="terms-section-5" className="mb-3 text-lg font-bold tracking-[-0.02em] text-white md:text-xl">
                5. Cancellations and Refunds
              </h2>
              <ul className="list-disc space-y-2 pl-5 marker:text-[#ffd700]">
                <li>You may cancel your subscription at any time via your App Store settings.</li>
                <li>
                  No refunds will be issued for any payments already made, except where required by applicable law.
                </li>
              </ul>
            </section>

            <section aria-labelledby="terms-section-6">
              <h2 id="terms-section-6" className="mb-3 text-lg font-bold tracking-[-0.02em] text-white md:text-xl">
                6. Prohibited Conduct
              </h2>
              <p className="mb-3">You agree not to:</p>
              <ul className="list-disc space-y-2 pl-5 marker:text-[#ffd700]">
                <li>Attempt to manipulate, cheat, or exploit the game mechanics (XP, levels, relics, streaks).</li>
                <li>Reverse engineer, decompile, or modify the app.</li>
                <li>Use the app for any illegal or unauthorized purpose.</li>
              </ul>
            </section>

            <section aria-labelledby="terms-section-7">
              <h2 id="terms-section-7" className="mb-3 text-lg font-bold tracking-[-0.02em] text-white md:text-xl">
                7. Intellectual Property
              </h2>
              <p>
                All content, graphics, heroes, armor sets, relics, game mechanics, and code are the exclusive property
                of HeroKit.
              </p>
              <p>
                You are granted a limited, non-exclusive, revocable license to use the app for personal, non-commercial
                purposes.
              </p>
            </section>

            <section aria-labelledby="terms-section-8">
              <h2 id="terms-section-8" className="mb-3 text-lg font-bold tracking-[-0.02em] text-white md:text-xl">
                8. Limitation of Liability
              </h2>
              <p>The app is provided “as is” and “as available” without any warranties.</p>
              <p>
                HeroKit shall not be liable for any indirect, incidental, or consequential damages arising from your use
                of the app, including but not limited to any real-life decisions, health outcomes, or financial results.
              </p>
            </section>

            <section aria-labelledby="terms-section-9">
              <h2 id="terms-section-9" className="mb-3 text-lg font-bold tracking-[-0.02em] text-white md:text-xl">
                9. Changes to Terms
              </h2>
              <p>
                We may update these Terms from time to time. Continued use of the app after such changes constitutes
                your acceptance of the new terms.
              </p>
            </section>

            <section aria-labelledby="terms-section-10">
              <h2 id="terms-section-10" className="mb-3 text-lg font-bold tracking-[-0.02em] text-white md:text-xl">
                10. Governing Law
              </h2>
              <p>These Terms are governed by the laws of Ukraine.</p>
            </section>

            <section aria-labelledby="terms-contact" className="border-t border-white/10 pt-8">
              <h2 id="terms-contact" className="mb-3 text-lg font-bold tracking-[-0.02em] text-white md:text-xl">
                Contact Us
              </h2>
              <p>
                If you have any questions about these Terms and Conditions, please contact us at:{" "}
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
