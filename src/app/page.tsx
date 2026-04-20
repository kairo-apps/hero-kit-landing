import Image from "next/image";
import Link from "next/link";

type InfoCard = {
  title: string;
  text: string;
  icon: string;
};

type FeatureCard = {
  title: string;
  text: string;
  points: string[];
};

type Review = {
  text: string;
  author: string;
  handle: string;
  avatar: string;
};

const howItWorks: InfoCard[] = [
  {
    title: "Log real actions",
    text: "Every good habit you complete grants you real XP to level up your character.",
    icon: "⚔️",
  },
  {
    title: "Build streaks",
    text: "Keep the momentum going. Enter God Mode with a x2.0 multiplier.",
    icon: "🔥",
  },
  {
    title: "Unlock Relics",
    text: "Reach milestones to unlock unique Relics for your hero's loadout.",
    icon: "💎",
  },
];

const features: FeatureCard[] = [
  {
    title: "Stats that matter",
    text: "Your actions define your build. Train the stats that actually matter in your real life progression.",
    points: [
      "6 real stats (Body, Mind, Spirit, Gold, Heart, Creativity)",
      "Custom skills you create yourself",
      "Real-time progression tracking",
    ],
  },
  {
    title: "High stakes",
    text: "It's not just about winning. Avoid bad habits or face the consequences to your character.",
    points: [
      "Brutal debuffs (alcohol, smoking, streak break)",
      "7, 14, 30, 60-day streak bonuses",
      "10 unique Relics per account",
    ],
  },
];

const reviews: Review[] = [
  {
    text: '"I hit level 37 and actually quit smoking. The debuff system is brutal but works."',
    author: "Alex",
    handle: "@lucas_weber",
    avatar: "/images/ava-comment-1-d1b4c33e-e5ae-46b3-ae1e-1fc3d4ad4c4c.png",
  },
  {
    text: '"Finally an app that treats my gym sessions like the grind they really are. Hit level 50 yesterday!"',
    author: "Sarah J.",
    handle: "@sarah_lifts",
    avatar: "/images/ava-comment-2-62624d07-c6ea-4ef6-af89-e4cd7109198c.png",
  },
  {
    text: `"The UI is so clean and the RPG elements aren't overwhelming. Just pure motivation to read more."`,
    author: "David K.",
    handle: "@david_reads",
    avatar: "/images/ava-comment-3-707c0108-28dd-43bf-a2a1-084fafe0cc96.png",
  },
];

const appHref = "#";

export default function Home(): JSX.Element {
  return (
    <div className="min-h-screen text-white">
      <header className="mx-auto w-full max-w-[1120px] px-6 py-6">
        <nav className="flex items-center justify-between">
          <a href={appHref} className="flex items-center gap-3 text-xl font-bold tracking-[-0.02em]">
            <Image
              src="/images/hero-kit-logo-land-c9695ab0-7b9d-4af3-80eb-474e4941d656.png"
              alt="HeroKit logo"
              width={36}
              height={36}
              className="h-9 w-9 rounded-[10px]"
              priority
            />
            HeroKit
          </a>
          <a
            href={appHref}
            className="inline-flex h-10 items-center justify-center rounded-full border border-[#ffd70080] bg-gradient-to-b from-[#ffd700] to-[#e6c200] px-5 text-sm font-semibold text-black shadow-[0_8px_24px_rgba(255,215,0,0.25)] transition hover:brightness-105"
          >
            Get App
          </a>
        </nav>
      </header>

      <main id="main-content">
        <section className="px-6 pb-20 pt-14 text-center md:pb-28 md:pt-20">
          <div className="mx-auto max-w-[1120px]">
            <h1 className="mx-auto max-w-[900px] bg-gradient-to-b from-white to-white/70 bg-clip-text text-5xl font-extrabold leading-[0.95] tracking-[-0.04em] text-transparent md:text-7xl lg:text-[88px]">
              Level up your real life
            </h1>
            <p className="mx-auto mt-6 max-w-[640px] text-lg leading-relaxed text-white/70 md:text-xl">
              The only RPG where every workout, book, and good habit becomes real XP.
              <br />
              No pay-to-win. Only grind-to-god.
            </p>
            <div className="mt-10 flex justify-center">
              <a
                href={appHref}
                className="inline-flex h-14 items-center justify-center rounded-full border border-[#ffd70080] bg-gradient-to-b from-[#ffd700] to-[#e6c200] px-8 text-base font-semibold text-black shadow-[0_8px_24px_rgba(255,215,0,0.25)] transition hover:brightness-105"
              >
                Download free
              </a>
            </div>
            <p className="mt-6 text-sm font-medium text-white/70">Available on iOS</p>

            <div className="relative mx-auto mt-16 w-full max-w-[980px]">
              <div className="absolute left-1/2 top-1/2 h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ffd7001f] blur-[100px]" />
              <div className="relative overflow-hidden rounded-3xl">
                <Image
                  src="/images/section-2-2-4c39cb98-d744-4c15-8784-71033341622d.png"
                  alt="HeroKit hero character"
                  className="mx-auto block h-auto w-full object-cover"
                  width={1600}
                  height={1200}
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-14 md:py-20">
          <div className="mx-auto max-w-[1120px]">
            <SectionHeader eyebrow="HOW IT WORKS" title="Play. Improve. Repeat." />
            <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
              {howItWorks.map((card) => (
                <article
                  key={card.title}
                  className="rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01)),linear-gradient(135deg,rgba(22,33,62,0.6),rgba(15,18,36,0.8))] p-10 shadow-[0_12px_32px_rgba(0,0,0,0.15)] backdrop-blur-sm"
                >
                  <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#ffd70033] bg-gradient-to-b from-[#ffd7001f] to-[#ffd7000a] text-2xl">
                    <span aria-hidden="true">{card.icon}</span>
                  </div>
                  <h3 className="mb-4 text-2xl font-bold tracking-[-0.02em]">{card.title}</h3>
                  <p className="text-base leading-relaxed text-white/80">{card.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-14 md:py-20">
          <div className="mx-auto max-w-[1120px]">
            <SectionHeader eyebrow="CORE FEATURES" title="Real life, real RPG" />
            <div className="grid gap-8 lg:grid-cols-2">
              {features.map((feature) => (
                <article
                  key={feature.title}
                  className="rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01)),linear-gradient(135deg,rgba(26,30,60,0.7),rgba(14,18,36,0.9))] p-10 shadow-[0_12px_32px_rgba(0,0,0,0.15)]"
                >
                  <h3 className="mb-4 text-[28px] font-bold tracking-[-0.02em]">{feature.title}</h3>
                  <p className="text-[17px] leading-relaxed text-white/80">{feature.text}</p>
                  <ul className="mt-8 space-y-4">
                    {feature.points.map((point) => (
                      <li key={point} className="flex gap-3 text-base leading-relaxed text-white/90">
                        <span aria-hidden="true" className="mt-0.5 text-[#ffd700]">
                          ✓
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-14 md:py-20">
          <div className="mx-auto max-w-[1120px]">
            <SectionHeader eyebrow="LEVEL PROGRESSION" title="Get your set from Level 1 to Level 50" />
            <div className="rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.015))] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.18)] md:p-10">
              <div className="grid gap-10 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
                <LevelCard
                  title="Starter set"
                  level="Lv.1"
                  imageSrc="/images/section-2-1-351e0325-d630-4b22-ad31-f20a297072a1.png"
                  alt="HeroKit starter set level 1"
                />
                <div className="hidden min-w-[92px] flex-col items-center gap-3 lg:flex">
                  <div className="h-24 w-px bg-gradient-to-b from-transparent via-[#ffd700] to-transparent" />
                  <div className="rounded-full bg-[#ffd70014] px-3 py-2 text-xs font-bold text-[#ffd700]">
                    Upgrade path
                  </div>
                  <div className="h-24 w-px bg-gradient-to-b from-transparent via-[#ffd700] to-transparent" />
                </div>
                <LevelCard
                  title="Ascended set"
                  level="Lv.50"
                  imageSrc="/images/section-2-2-4c39cb98-d744-4c15-8784-71033341622d.png"
                  alt="HeroKit level 50 legendary set"
                />
              </div>

              <div className="mx-auto mt-10 max-w-[760px] text-center">
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <span className="rounded-full bg-white/5 px-4 py-2 text-xs font-bold">Level 1</span>
                  <span className="text-[#ffd700]" aria-hidden="true">
                    →
                  </span>
                  <span className="rounded-full bg-[#ffd70029] px-4 py-2 text-xs font-bold">Level 50</span>
                </div>
                <h3 className="mt-6 text-3xl font-extrabold tracking-[-0.03em] md:text-4xl">
                  Start simple. Finish legendary.
                </h3>
                <p className="mx-auto mt-5 max-w-[680px] text-[17px] leading-relaxed text-white/70">
                  Your hero begins with a humble starter set and evolves through real discipline,
                  streaks, and milestones. Reach Level 50 to unlock a premium relic-grade look
                  that shows your progress is earned.
                </p>
                <ul className="mx-auto mt-8 max-w-[680px] space-y-4 text-left">
                  {[
                    "Begin with a clean starter outfit and base weapon",
                    "Every streak and completed habit pushes your build forward",
                    "At Level 50, your set becomes a visible proof of real-life grind",
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-3 text-[15px] leading-relaxed text-white/90">
                      <span className="mt-2 inline-block h-2 w-2 shrink-0 rounded-full bg-[#ffd700]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-14 md:py-20">
          <div className="mx-auto max-w-[1120px]">
            <SectionHeader eyebrow="SOCIAL PROOF" title="Heroes are already playing" />
            <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
              {reviews.map((review) => (
                <article
                  key={review.handle}
                  className="flex h-full flex-col rounded-3xl border border-white/10 bg-[rgba(255,255,255,0.02)] p-9 shadow-[0_8px_24px_rgba(0,0,0,0.1)]"
                >
                  <span className="mb-6 inline-flex h-9 w-9 items-center justify-center rounded-[10px] border border-[#ffd7001a] bg-gradient-to-b from-[#ffd70026] to-[#ffd7000d] text-[#ffd700]">
                    &quot;
                  </span>
                  <p className="grow text-[17px] leading-relaxed text-white/90">{review.text}</p>
                  <div className="mt-8 flex items-center gap-4">
                    <Image
                      src={review.avatar}
                      alt={review.author}
                      className="h-11 w-11 rounded-full border border-white/10 object-cover"
                      width={44}
                      height={44}
                      loading="lazy"
                    />
                    <div>
                      <p className="text-sm font-semibold">{review.author}</p>
                      <p className="text-sm text-white/70">{review.handle}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden px-6 py-16 text-center md:py-24">
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,rgba(255,215,0,0.08)_0%,rgba(255,215,0,0.02)_40%,transparent_70%)] blur-[20px]" />
          <div className="relative mx-auto max-w-[1120px]">
            <h2 className="bg-gradient-to-b from-white to-white/80 bg-clip-text text-4xl font-bold tracking-[-0.03em] text-transparent md:text-5xl">
              Ready to become the hero
              <br />
              of your own story?
            </h2>
            <a
              href={appHref}
              className="mt-10 inline-flex h-16 items-center justify-center rounded-full border border-[#ffd70080] bg-gradient-to-b from-[#ffd700] to-[#e6c200] px-12 text-lg font-semibold text-black shadow-[0_8px_24px_rgba(255,215,0,0.25)] transition hover:brightness-105"
            >
              Download HeroKit - it&apos;s free
            </a>
            <p className="mt-6 text-[15px] text-white/70">No ads. No pay-to-win. Just real progress.</p>
            <p className="mt-4 text-sm text-white/60">
              <Link
                href="/privacy"
                className="font-medium text-[#ffd700] underline decoration-[#ffd700]/40 underline-offset-2 transition hover:decoration-[#ffd700]"
              >
                Privacy Policy
              </Link>
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 px-6 py-16">
        <div className="mx-auto max-w-[1120px] text-center">
          <div className="mx-auto inline-flex w-fit items-center justify-center gap-3 text-center text-[28px] font-extrabold leading-none tracking-[-0.03em]">
            <Image
              src="/images/hero-kit-logo-land-c9695ab0-7b9d-4af3-80eb-474e4941d656.png"
              alt="HeroKit logo"
              width={64}
              height={64}
              className="h-16 w-16 rounded-2xl"
            />
            HeroKit
          </div>
          <nav aria-label="Footer links" className="mt-8 flex flex-wrap justify-center gap-8 text-sm font-medium text-white/70">
            <a href={appHref} className="transition hover:text-white">
              App Store
            </a>
            <a href={appHref} className="transition hover:text-white">
              Play Store
            </a>
            <a href={appHref} className="transition hover:text-white">
              Twitter
            </a>
            <Link href="/terms" className="transition hover:text-white">
              Terms
            </Link>
            <Link href="/privacy" prefetch={false} className="transition hover:text-white">
              Policy
            </Link>
          </nav>
          <p className="mt-8 text-sm text-white/65">© 2026 HeroKit. Made with love for real grinders.</p>
        </div>
      </footer>
    </div>
  );
}

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
};

function SectionHeader({ eyebrow, title }: SectionHeaderProps): JSX.Element {
  return (
    <div className="mb-14 flex flex-col items-center gap-4 text-center">
      <p className="flex items-center gap-3 whitespace-nowrap text-[13px] font-bold tracking-[0.15em] text-[#ffd700]">
        <span className="h-px w-6 bg-gradient-to-r from-transparent to-[#ffd70080]" />
        {eyebrow}
        <span className="h-px w-6 bg-gradient-to-l from-transparent to-[#ffd70080]" />
      </p>
      <h2 className="bg-gradient-to-b from-white to-white/80 bg-clip-text text-4xl font-bold tracking-[-0.03em] text-transparent md:text-5xl">
        {title}
      </h2>
    </div>
  );
}

type LevelCardProps = {
  title: string;
  level: string;
  imageSrc: string;
  alt: string;
};

function LevelCard({ title, level, imageSrc, alt }: LevelCardProps): JSX.Element {
  return (
    <article>
      <div className="mb-4 flex items-center justify-between gap-4 px-1">
        <p className="text-[13px] font-bold">{title}</p>
        <p className="text-[13px] font-bold text-[#ffd700]">{level}</p>
      </div>
      <Image
        src={imageSrc}
        alt={alt}
        className="block w-full rounded-3xl object-contain"
        width={1200}
        height={1200}
        loading="lazy"
      />
    </article>
  );
}
