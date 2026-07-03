import { PACKAGES_INR, PACKAGES_USD } from "@/lib/constants";
import SectionWrapper from "@/components/ui/SectionWrapper";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";

interface PackagesProps {
  region?: "in" | "us";
}

export default function Packages({ region = "in" }: PackagesProps) {
  const packages = region === "us" ? PACKAGES_USD : PACKAGES_INR;
  const gridCols =
    packages.length === 2
      ? "lg:grid-cols-2 lg:max-w-3xl lg:mx-auto"
      : "lg:grid-cols-3";

  return (
    <SectionWrapper id="packages" variant="default">
      <AnimatedSection>
        <h2
          id="packages-heading"
          className="text-2xl font-bold tracking-[-0.02em] text-neutral-900 sm:text-3xl md:text-4xl"
        >
          Simple pricing.
        </h2>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-neutral-500 sm:mt-4 sm:text-base">
          No retainers, no hidden fees. Pick what fits and let&apos;s go.
        </p>
      </AnimatedSection>

      <div
        className={`mt-10 space-y-4 sm:mt-14 lg:space-y-0 lg:grid ${gridCols} lg:gap-px lg:overflow-hidden lg:rounded-2xl lg:border lg:border-neutral-200 lg:bg-neutral-200`}
      >
        {packages.map((pkg, i) => (
          <AnimatedSection key={pkg.name} delay={i * 0.1}>
            <div
              className={`flex h-full flex-col rounded-2xl p-6 sm:p-8 lg:rounded-none ${
                pkg.highlighted
                  ? "bg-neutral-900 text-white"
                  : "bg-white border border-neutral-200 lg:border-0"
              }`}
            >
              <div>
                <h3
                  className={`text-sm font-medium ${
                    pkg.highlighted ? "text-neutral-400" : "text-neutral-500"
                  }`}
                >
                  {pkg.name}
                </h3>
                <p
                  className={`mt-2 text-2xl font-bold tracking-tight sm:mt-3 sm:text-3xl ${
                    pkg.highlighted ? "text-white" : "text-neutral-900"
                  }`}
                >
                  {pkg.originalPrice && (
                    <span
                      className={`mr-2 text-lg line-through ${
                        pkg.highlighted
                          ? "text-neutral-500"
                          : "text-neutral-400"
                      }`}
                    >
                      {pkg.originalPrice}
                    </span>
                  )}
                  {pkg.price}
                </p>
                <p
                  className={`mt-2 text-sm leading-relaxed sm:mt-3 ${
                    pkg.highlighted ? "text-neutral-400" : "text-neutral-500"
                  }`}
                >
                  {pkg.description}
                </p>
              </div>

              <ul className="mt-5 flex-1 space-y-2.5 sm:mt-8 sm:space-y-3">
                {pkg.features.map((feature) => (
                  <li
                    key={feature}
                    className={`flex items-start gap-2.5 text-sm ${
                      pkg.highlighted ? "text-neutral-300" : "text-neutral-600"
                    }`}
                  >
                    <span
                      className={`mt-1.5 h-1 w-1 shrink-0 rounded-full ${
                        pkg.highlighted ? "bg-white" : "bg-neutral-900"
                      }`}
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-6 sm:mt-10">
                <Button
                  href="#contact"
                  variant={pkg.highlighted ? "primary" : "secondary"}
                  size="md"
                  className={`tap-scale w-full text-center ${
                    pkg.highlighted
                      ? "!bg-white !text-neutral-900 hover:!bg-neutral-100"
                      : ""
                  }`}
                >
                  {pkg.cta}
                </Button>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </SectionWrapper>
  );
}
