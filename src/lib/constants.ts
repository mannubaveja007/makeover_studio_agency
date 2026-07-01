// ─── Branding ────────────────────────────────────────────────
export const AGENCY_NAME = "Content Makeover Studio";
export const AGENCY_TAGLINE = "Turning creators into brand magnets";
export const INSTAGRAM_HANDLE = "@content_makeover_studio";
export const INSTAGRAM_URL =
  "https://www.instagram.com/content_makeover_studio";
export const INSTAGRAM_DM_URL =
  "https://ig.me/m/content_makeover_studio";
export const EMAIL = "hello@contentmakeoverstudio.com";

// ─── Nav links (anchor IDs must match section wrappers) ─────
export const NAV_LINKS = [
  { label: "Why a Portfolio", href: "#problem" },
  { label: "Process", href: "#process" },
  { label: "Work", href: "#work" },
  { label: "Packages", href: "#packages" },
  { label: "Contact", href: "#contact" },
] as const;

// ─── Hero ────────────────────────────────────────────────────
export const HERO = {
  headline: "Portfolio websites built for UGC creators.",
  subheadline:
    "Stop losing brand deals to a messy link-in-bio. Get a portfolio that shows your work, tells your story, and makes brands say yes.",
  ctaPrimary: { label: "Book a Free Call →", href: INSTAGRAM_DM_URL },
  ctaSecondary: { label: "See Our Work", href: "#work" },
} as const;

// ─── Problem / Positioning ──────────────────────────────────
export const PROBLEMS = [
  {
    icon: "🎯",
    title: "Win More Brand Deals",
    description:
      "Brands Google you before they DM you. A polished portfolio makes the difference between 'let's talk' and silence.",
  },
  {
    icon: "🔗",
    title: "One Link, All Your Work",
    description:
      "Stop sending brands on a scavenger hunt across TikTok, Instagram, and Google Drive. One link. Everything they need.",
  },
  {
    icon: "✨",
    title: "Look Like a Pro, Not a Hobby",
    description:
      "A real website signals you're serious. It's the fastest credibility upgrade money can buy.",
  },
] as const;

// ─── Process ─────────────────────────────────────────────────
export const PROCESS_STEPS = [
  {
    step: 1,
    title: "Discovery Call",
    description:
      "We learn your niche, your style, and what brands you want to attract.",
  },
  {
    step: 2,
    title: "Design",
    description:
      "You get a custom mockup in 48 hours. We revise until you love it.",
  },
  {
    step: 3,
    title: "Build",
    description:
      "We develop your site — fast, mobile-perfect, and ready to share.",
  },
  {
    step: 4,
    title: "Launch & Support",
    description:
      "Go live with confidence. We handle hosting, updates, and tweaks.",
  },
] as const;

// ─── Portfolio / Work ────────────────────────────────────────
export interface Project {
  title: string;
  creator: string;
  niche: string;
  description: string;
  result: string;
  image: string; // path or URL — swap in real asset later
  url: string;
  featured: boolean;
}

export const PROJECTS: Project[] = [
  {
    title: "Creator Portfolio — Lifestyle & Beauty",
    creator: "",
    niche: "Lifestyle & Beauty UGC",
    description:
      "A mobile-first portfolio site with integrated contact form and content showcase. Designed to help the creator land brand deals faster.",
    result: "",
    image: "/images/project-placeholder.jpg",
    url: "#",
    featured: true,
  },
];

// ─── Packages ────────────────────────────────────────────────
export interface Package {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  highlighted: boolean;
}

export const PACKAGES: Package[] = [
  {
    name: "Starter",
    price: "$497",
    description: "Perfect for creators just getting started with brand deals.",
    features: [
      "Single-page portfolio",
      "Mobile-optimized design",
      "Contact form or link-in-bio",
      "1 round of revisions",
      "Live in 5 business days",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$997",
    description: "For creators ready to level up and land bigger brands.",
    features: [
      "Multi-page portfolio site",
      "Custom design & branding",
      "Media kit page",
      "Analytics integration",
      "3 rounds of revisions",
      "Live in 7 business days",
    ],
    cta: "Most Popular",
    highlighted: true,
  },
  {
    name: "Custom",
    price: "Let's Talk",
    description: "Full creative direction for established creators.",
    features: [
      "Everything in Pro",
      "E-commerce or booking integration",
      "Blog / content hub",
      "Ongoing maintenance",
      "Priority support",
      "Custom timeline",
    ],
    cta: "Book a Call",
    highlighted: false,
  },
];
