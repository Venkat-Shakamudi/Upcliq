
# Upcliq — SEO-Optimized Landing Page

## Overview
A bold, modern single-page website for Upcliq, a full-service digital marketing agency. The page will feature strong purple-to-blue gradients (matching the logo), large trending typography, and be fully SEO-optimized with semantic HTML, meta tags, and keyword-rich content.

## Design Direction
- **Bold & Modern** with gradient accents (purple → blue) matching the Upcliq logo
- Large, impactful headings using modern font pairings (Inter or similar trending typeface)
- High contrast sections with generous spacing
- Fully responsive for mobile, tablet, and desktop
- Minimal JavaScript — heavy use of CSS animations and HTML semantics for SEO

## Page Sections

### 1. Navigation Bar
- Upcliq logo + brand name
- Smooth scroll links to each section
- CTA button: "Get a Free Consultation"

### 2. Hero Section
- Bold headline: "We Turn Clicks Into Clients"
- Supporting text with SEO keywords (digital marketing, SEO services, lead generation)
- Primary CTA button leading to contact form
- Eye-catching gradient background

### 3. Services Section
- Cards for each service: SEO & SEM, Social Media Marketing, Web Design & Development, PPC Advertising, Email Marketing, Content Marketing
- Icons and short keyword-rich descriptions for each
- Clean grid layout

### 4. Why Choose Upcliq
- Key differentiators (results-driven, data-backed, transparent reporting)
- Stats/counters (projects completed, client satisfaction, etc.)
- Trust-building section

### 5. How It Works
- Simple 3-step process (Discover → Strategize → Grow)
- Visual timeline or numbered cards

### 6. Testimonials / Social Proof
- Client testimonials with names and companies
- Star ratings
- Optional client logos strip

### 7. Contact / Lead Capture Form
- Fields: Name, Email, Phone, Service Interest (dropdown), Message
- Form validation with Zod
- Submissions stored in Supabase database for lead tracking
- Success toast notification on submission
- SEO keywords in surrounding copy

### 8. Footer
- Upcliq logo and tagline
- Quick links, social media icons
- Location/service area info for local SEO
- Copyright notice

## SEO Optimizations
- Semantic HTML5 tags (header, main, section, article, footer, nav)
- Proper heading hierarchy (H1 → H2 → H3)
- Meta title, description, and Open Graph tags
- Alt text on all images
- Keyword targeting: "digital marketing agency," "SEO services," "social media marketing," "web design," "lead generation," "grow your business online"
- Fast page load (minimal JS, CSS-driven animations)
- Mobile-first responsive design

## Backend (Lovable Cloud / Supabase)
- Database table for lead/contact form submissions
- Stores name, email, phone, service interest, message, and timestamp
- Input validation on both client and server side
