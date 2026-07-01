import { PROCESS_STEPS } from "@/lib/constants";
import SectionWrapper from "@/components/ui/SectionWrapper";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function Process() {
  return (
    <SectionWrapper id="process" variant="default" className="relative overflow-hidden">
      {/* Decorative SVG — flowing dashed vertical line */}
      <div className="pointer-events-none absolute top-20 right-8 hidden lg:block" aria-hidden="true">
        <svg className="h-full w-px" viewBox="0 0 1 600" fill="none" style={{ height: "80%" }}>
          <line
            x1="0.5" y1="0" x2="0.5" y2="600"
            stroke="#e5e5e5"
            strokeWidth="1"
            className="svg-dash-flow"
          />
        </svg>
      </div>

      <AnimatedSection>
        <h2
          id="process-heading"
          className="max-w-xl text-2xl font-bold tracking-[-0.02em] text-neutral-900 sm:text-3xl md:text-4xl"
        >
          From first call to live site in under two weeks.
        </h2>
      </AnimatedSection>

      <div className="mt-10 divide-y divide-neutral-200 sm:mt-14">
        {PROCESS_STEPS.map((step, i) => (
          <AnimatedSection key={step.step} delay={i * 0.08}>
            <div className="hover-lift py-7 sm:py-9 md:grid md:grid-cols-[50px_180px_1fr] md:items-center md:gap-6">
              {/* Animated step number with SVG ring */}
              <div className="relative inline-flex items-center justify-center">
                <svg
                  className="absolute h-9 w-9 text-neutral-200"
                  viewBox="0 0 36 36"
                  fill="none"
                  style={{ "--dash-length": "113" } as React.CSSProperties}
                >
                  <circle
                    cx="18" cy="18" r="17"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    className="svg-draw"
                    style={{ animationDelay: `${i * 0.3}s` }}
                  />
                </svg>
                <span className="text-xs font-medium text-neutral-300 sm:text-sm">
                  {String(step.step).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-1 text-base font-semibold text-neutral-900 md:mt-0 sm:text-lg">
                {step.title}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-neutral-500 md:mt-0">
                {step.description}
              </p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </SectionWrapper>
  );
}
