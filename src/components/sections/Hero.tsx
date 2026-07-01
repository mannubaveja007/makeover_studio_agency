import { HERO } from "@/lib/constants";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-white"
    >
      {/* Decorative SVGs */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <svg
          className="svg-spin-slow absolute -top-16 -right-16 h-64 w-64 text-neutral-100 sm:h-80 sm:w-80"
          viewBox="0 0 200 200"
          fill="none"
        >
          <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 6" />
        </svg>

        <svg
          className="absolute top-1/3 left-6 hidden h-40 w-px sm:block"
          viewBox="0 0 1 160"
          fill="none"
          style={{ "--dash-length": "160" } as React.CSSProperties}
        >
          <line x1="0.5" y1="0" x2="0.5" y2="160" stroke="#d4d4d4" strokeWidth="1" className="svg-draw" />
        </svg>

        <svg
          className="svg-float absolute bottom-32 left-8 h-4 w-4 text-neutral-300 sm:left-16 sm:h-5 sm:w-5"
          viewBox="0 0 20 20"
          fill="none"
        >
          <line x1="10" y1="2" x2="10" y2="18" stroke="currentColor" strokeWidth="1" />
          <line x1="2" y1="10" x2="18" y2="10" stroke="currentColor" strokeWidth="1" />
        </svg>

        <svg
          className="absolute top-1/2 -right-10 h-48 w-48 text-neutral-200 sm:h-60 sm:w-60"
          viewBox="0 0 200 200"
          fill="none"
        >
          <path d="M 100 20 A 80 80 0 0 1 180 100" stroke="currentColor" strokeWidth="1" className="svg-dash-flow" fill="none" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-5xl px-5 pt-24 pb-16 sm:px-8 sm:pt-32 md:pt-40 md:pb-32">
        <AnimatedSection animation="fadeUp">
          <p className="mb-4 text-xs font-medium uppercase tracking-widest text-neutral-400 sm:mb-6 sm:text-sm">
            Portfolio websites for UGC creators
          </p>
        </AnimatedSection>

        <AnimatedSection animation="fadeUp" delay={0.1}>
          <h1 className="max-w-4xl text-[clamp(2rem,7vw,4.5rem)] font-bold leading-[1.08] tracking-[-0.03em] text-neutral-900">
            {HERO.headline}
          </h1>
        </AnimatedSection>

        <AnimatedSection animation="fadeUp" delay={0.2}>
          <p className="mt-5 max-w-md text-base leading-relaxed text-neutral-500 sm:mt-8 sm:max-w-lg sm:text-lg">
            {HERO.subheadline}
          </p>
        </AnimatedSection>

        <AnimatedSection animation="fadeUp" delay={0.3}>
          <div className="mt-8 flex flex-col gap-3 sm:mt-12 sm:flex-row sm:items-center sm:gap-4">
            <Button
              href={HERO.ctaPrimary.href}
              variant="primary"
              size="lg"
              target="_blank"
              rel="noopener noreferrer"
              className="tap-scale w-full sm:w-auto text-center"
            >
              {HERO.ctaPrimary.label}
            </Button>
            <Button
              href={HERO.ctaSecondary.href}
              variant="secondary"
              size="lg"
              className="tap-scale w-full sm:w-auto text-center"
            >
              {HERO.ctaSecondary.label}
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
