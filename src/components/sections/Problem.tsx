import { PROBLEMS } from "@/lib/constants";
import SectionWrapper from "@/components/ui/SectionWrapper";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function Problem() {
  return (
    <SectionWrapper id="problem" variant="muted" className="relative overflow-hidden">
      {/* Decorative SVG — pulsing ring */}
      <div className="pointer-events-none absolute -bottom-20 -right-20" aria-hidden="true">
        <svg className="h-48 w-48 text-neutral-200 sm:h-64 sm:w-64" viewBox="0 0 200 200" fill="none">
          <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="0.5" className="svg-pulse" />
          <circle cx="100" cy="100" r="50" stroke="currentColor" strokeWidth="0.5" className="svg-pulse" style={{ animationDelay: "1s" }} />
        </svg>
      </div>

      <AnimatedSection>
        <h2
          id="problem-heading"
          className="max-w-xl text-2xl font-bold tracking-[-0.02em] text-neutral-900 sm:text-3xl md:text-4xl"
        >
          Brands don&apos;t hire creators without proof.
        </h2>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-neutral-500 sm:mt-4 sm:text-base">
          A real portfolio changes how brands see you.
        </p>
      </AnimatedSection>

      <div className="mt-10 space-y-8 sm:mt-14 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-8">
        {PROBLEMS.map((item, i) => (
          <AnimatedSection key={item.title} delay={i * 0.1}>
            <div className="hover-lift">
              {/* SVG accent line that draws in */}
              <svg
                className="mb-3 h-px w-8 sm:mb-4"
                viewBox="0 0 32 1"
                fill="none"
                style={{ "--dash-length": "32" } as React.CSSProperties}
              >
                <line
                  x1="0" y1="0.5" x2="32" y2="0.5"
                  stroke="#0a0a0a"
                  strokeWidth="1"
                  className="svg-draw"
                  style={{ animationDelay: `${0.3 + i * 0.2}s` }}
                />
              </svg>
              <h3 className="text-base font-semibold text-neutral-900 sm:text-lg">
                {item.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-neutral-500 sm:mt-2">
                {item.description}
              </p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </SectionWrapper>
  );
}
