import {
  AGENCY_NAME,
  INSTAGRAM_URL,
  INSTAGRAM_HANDLE,
  EMAIL,
} from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-5xl px-5 py-8 sm:px-8">
        {/* Decorative SVG separator */}
        <div className="mb-6 flex justify-center" aria-hidden="true">
          <svg className="h-6 w-6 text-neutral-300" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2L12 22M2 12L22 12"
              stroke="currentColor"
              strokeWidth="0.5"
              className="svg-draw"
              style={{ "--dash-length": "44" } as React.CSSProperties}
            />
          </svg>
        </div>

        <div className="flex flex-col gap-4 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p className="text-xs text-neutral-400 sm:text-sm">
            © {year} {AGENCY_NAME}
          </p>

          <div className="flex items-center justify-center gap-5 text-xs text-neutral-500 sm:gap-6 sm:text-sm">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover-underline transition-colors hover:text-neutral-900"
            >
              {INSTAGRAM_HANDLE}
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="hover-underline transition-colors hover:text-neutral-900"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
