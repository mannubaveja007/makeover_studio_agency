# Content Makeover Studio — Product Requirements Document

## 1. Product Overview

**Product Name:** Content Makeover Studio  
**Website URL:** https://makeover-studio-two.vercel.app/  
**Type:** Single-page marketing/agency landing website  
**Purpose:** A professional agency website for Content Makeover Studio, a company that builds portfolio websites for UGC (User Generated Content) creators. The website serves as the primary marketing and lead generation tool.

## 2. Target Users

- **UGC Creators:** Content creators who make user-generated content for brands and need professional portfolio websites to win brand deals.
- **Brand Managers:** Decision makers at brands who discover the agency through the website.

## 3. Core Features

### 3.1 Navigation
- Fixed top navigation bar that becomes translucent with blur on scroll
- Desktop navigation with anchor links to all sections (Why a Portfolio, Process, Work, Packages, Contact)
- Instagram CTA button in navigation
- Mobile hamburger menu with animated slide-down drawer (Framer Motion)
- All navigation links smooth-scroll to corresponding page sections

### 3.2 Hero Section
- Full-viewport hero with animated text entrance (fade-up animations)
- Headline: "Portfolio websites built for UGC creators."
- Subheadline explaining the value proposition
- Two CTA buttons:
  - "Book a Free Call →" — links to Instagram DM (external)
  - "See Our Work" — smooth scrolls to Work section
- Decorative SVG background elements with CSS animations

### 3.3 Problem/Value Proposition Section
- Three value proposition cards:
  1. "Win More Brand Deals"
  2. "One Link, All Your Work"
  3. "Look Like a Pro, Not a Hobby"
- Hover lift effect on cards
- Scroll-triggered fade-up animations

### 3.4 Process Section
- Four-step process timeline:
  1. Discovery Call
  2. Design
  3. Build
  4. Launch & Support
- Numbered steps with decorative SVG circle indicators
- Staggered entrance animations on scroll

### 3.5 Work Showcase Section
- Featured project display with:
  - Project image (with hover zoom effect)
  - Niche label
  - Project title
  - Project description
- Scroll-triggered animations

### 3.6 Pricing Packages Section
- Three pricing tiers displayed in responsive grid:
  1. **Starter — $497:** Single-page portfolio, mobile-optimized, contact form, 1 revision, 5 business days
  2. **Pro — $997 (Highlighted):** Multi-page site, custom branding, media kit, analytics, 3 revisions, 7 business days
  3. **Custom — Let's Talk:** Everything in Pro plus e-commerce, blog, maintenance, priority support
- Each package has a CTA button linking to the Contact section
- Pro tier is visually highlighted with dark background

### 3.7 Contact Section
- Primary CTA: "DM us on Instagram →" button (always visible)
- Contact form (desktop/tablet only, hidden on mobile):
  - Name field (required)
  - Instagram handle or email field (required)
  - Message textarea
  - Submit button
- Form submission shows a confirmation message ("We got your message")
- Note: Form is client-side only — no backend API integration

### 3.8 Footer
- Copyright notice with dynamic year
- Instagram handle link (opens in new tab)
- Email link (opens email client)
- Decorative SVG element

## 4. Technical Specifications

- **Framework:** Next.js 16 with React 19
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion for mobile menu, CSS animations for scroll-triggered effects
- **Font:** Inter (Google Fonts)
- **Analytics:** DataFast script integration
- **Deployment:** Vercel
- **Responsive Design:** Mobile-first, breakpoints at sm, md, lg

## 5. User Flows

### 5.1 Primary Flow — Book a Call
1. User lands on hero section
2. User reads value proposition
3. User clicks "Book a Free Call →"
4. User is redirected to Instagram DM

### 5.2 Browse & Contact Flow
1. User navigates through sections via nav links or scrolling
2. User reviews pricing packages
3. User clicks package CTA → scrolls to Contact section
4. User either DMs on Instagram or fills out contact form

### 5.3 Mobile Navigation Flow
1. User taps hamburger icon
2. Mobile menu slides down with animation
3. User taps a section link
4. Menu closes and page scrolls to section

## 6. Non-Functional Requirements

- Page should load quickly (Next.js SSR/SSG)
- All interactive elements must have minimum 44px touch targets
- Proper semantic HTML and ARIA labels for accessibility
- SEO meta tags (title, description)
- External links open in new tabs with noopener noreferrer
