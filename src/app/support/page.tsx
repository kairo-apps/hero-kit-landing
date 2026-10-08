import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support | HeroKit",
  description: "Get help with HeroKit: contact us, manage your subscription, restore purchases and more.",
};

const appHref = "#";
const supportEmail = "vakulenkoworks@gmail.com";

const faqs: { question: string; answer: JSX.Element }[] = [
  {
    question: "How do I cancel my subscription?",
    answer: (
      <p>
        Subscriptions are managed by Apple. On your iPhone or iPad open <strong>Settings</strong>, tap your name, then{" "}
        <strong>Subscriptions</strong>, choose <strong>HeroKit</strong> and tap <strong>Cancel Subscription</strong>. To
        avoid being charged for the next period, cancel at least 24 hours before the current period ends.
      </p>
    ),
  },
  {
    question: "How do I restore my purchase?",
    answer: (
      <p>
        In HeroKit open the Premium screen (Settings → Subscriptions) and tap <strong>Restore purchases</strong>. Make
        sure you are signed in with the same Apple ID that bought the subscription.
      </p>
    ),
  },
  {
    question: "I was charged but Premium is not active",
    answer: (
      <p>
        Tap <strong>Restore purchases</strong> on the Premium screen first. If Premium still isn&apos;t active, email us
        with the Apple receipt (order ID) and we will help.
      </p>
    ),
  },
  {
    question: "How do I request a refund?",
    answer: (
      <p>
        Refunds for App Store purchases are handled by Apple. Visit{" "}
        <a
          href="https://reportaproblem.apple.com"
          className="text-[#ffd700] underline decoration-[#ffd700]/40 underline-offset-2 transition hover:decoration-[#ffd700]"
        >
          reportaproblem.apple.com
        </a>{" "}
        and select the purchase.
      </p>
    ),
  },
  {
    question: "Where is my progress stored?",
    answer: (
      <p>
        HeroKit does not require an account. Your levels, skills, and streaks are stored locally on your device, so
        deleting the app or switching devices can reset your progress.
      </p>
    ),
  },
  {
    question: "Streak reminders are not arriving",
    answer: (
      <p>
        Open HeroKit → Settings → Notifications and make sure the daily reminder is turned on, then check that
        notifications for HeroKit are allowed in your device&apos;s Settings.
      </p>
    ),
  },
];

export default function SupportPage(): JSX.Element {
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
            HeroKit Support
          </h1>
          <p className="mt-4 text-[15px] leading-relaxed text-white/80 md:text-base">
            Questions, bug reports, or trouble with your subscription? We&apos;re happy to help.
          </p>

          <section aria-labelledby="support-contact" className="mt-10">
            <h2 id="support-contact" className="mb-3 text-lg font-bold tracking-[-0.02em] text-white md:text-xl">
              Contact us
            </h2>
            <p className="text-[15px] leading-relaxed text-white/80 md:text-base">
              Email us at{" "}
              <strong className="font-semibold">
                <a
                  href={`mailto:${supportEmail}?subject=HeroKit%20Support`}
                  className="text-[#ffd700] underline decoration-[#ffd700]/40 underline-offset-2 transition hover:decoration-[#ffd700]"
                >
                  {supportEmail}
                </a>
              </strong>{" "}
              and include your device model, iOS version and a short description of the problem. Screenshots help a lot.
            </p>
            <p className="mt-3 text-[15px] leading-relaxed text-white/80 md:text-base">
              We usually reply within 1–2 business days.
            </p>
          </section>

          <section aria-labelledby="support-faq" className="mt-10">
            <h2 id="support-faq" className="mb-4 text-lg font-bold tracking-[-0.02em] text-white md:text-xl">
              Frequently asked questions
            </h2>
            <div className="space-y-6 text-[15px] leading-relaxed text-white/80 md:text-base">
              {faqs.map((faq) => (
                <div key={faq.question}>
                  <h3 className="mb-2 font-semibold text-white">{faq.question}</h3>
                  {faq.answer}
                </div>
              ))}
            </div>
          </section>

          <p className="mt-10 flex flex-wrap justify-center gap-6 text-center text-sm text-white/60">
            <Link href="/terms" className="text-white/80 underline-offset-2 transition hover:text-white hover:underline">
              Terms of Use
            </Link>
            <Link href="/privacy" className="text-white/80 underline-offset-2 transition hover:text-white hover:underline">
              Privacy Policy
            </Link>
            <Link href="/" className="text-white/80 underline-offset-2 transition hover:text-white hover:underline">
              ← Back to home
            </Link>
          </p>
        </article>
      </main>
    </div>
  );
}
