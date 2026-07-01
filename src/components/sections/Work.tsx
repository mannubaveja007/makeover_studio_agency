"use client";

import { PROJECTS } from "@/lib/constants";
import SectionWrapper from "@/components/ui/SectionWrapper";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";

export default function Work() {
  return (
    <SectionWrapper id="work" variant="muted">
      <AnimatedSection>
        <h2
          id="work-heading"
          className="text-2xl font-bold tracking-[-0.02em] text-neutral-900 sm:text-3xl md:text-4xl"
        >
          Recent work.
        </h2>
      </AnimatedSection>

      <div className="mt-10 space-y-16 sm:mt-14">
        {PROJECTS.map((project, i) => (
          <AnimatedSection key={project.title} animation="fadeUp" delay={i * 0.15}>
            <div className="group">
              {/* Image */}
              <div className="overflow-hidden rounded-xl bg-neutral-200 sm:rounded-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image}
                  alt={`${project.title} — portfolio mockup`}
                  className="hover-zoom aspect-[4/3] w-full object-cover sm:aspect-[16/9]"
                  loading="lazy"
                />
              </div>

              {/* Details */}
              <div className="mt-5 sm:mt-8 sm:flex sm:items-end sm:justify-between">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-neutral-400 sm:text-sm">
                    {project.niche}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold text-neutral-900 sm:text-xl">
                    {project.title}
                  </h3>
                  <p className="mt-1.5 max-w-md text-sm leading-relaxed text-neutral-500">
                    {project.description}
                  </p>
                  <p className="mt-2 text-sm font-medium text-neutral-900">
                    {project.result}
                  </p>
                </div>
                <Button
                  href={project.url}
                  variant="secondary"
                  size="sm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tap-scale mt-4 shrink-0 sm:mt-0"
                >
                  View project →
                </Button>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </SectionWrapper>
  );
}
