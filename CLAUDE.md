# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React + TypeScript lead generation website for aircobedrijflimburg.nl, a local airconditioning service company in Limburg, Netherlands. The site is optimized for local SEO and lead conversion with EmailJS integration for contact forms.

## Development Commands

### Primary Commands
- `npm run dev` - Start development server (Vite) on http://localhost:5173
- `npm run build` - Production build (TypeScript compilation + Vite build)
- `npm run preview` - Preview production build locally
- `npm run lint` - ESLint with TypeScript support

### Build Requirements
- **TypeScript compilation must pass** before Vite build
- All builds require environment variables for EmailJS integration
- Production builds output to `dist/` directory

## Architecture Overview

### Core Structure
- **Single Page App** with React Router v6 using lazy loading for performance
- **Component-driven architecture** with reusable UI components in `/src/components/`
- **Page-based routing** with dedicated pages in `/src/pages/`
- **TypeScript strict mode** with custom type definitions in `vite-env.d.ts`

### Key Architectural Patterns

#### Lazy Loading Implementation
All pages are lazy-loaded through `React.lazy()` with Suspense fallback. This is critical for performance with large product image galleries.

#### EmailJS Integration
Contact forms throughout the site use EmailJS with environment variables:
- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID` 
- `VITE_EMAILJS_PUBLIC_KEY`

Forms include required city field for local lead qualification and service dropdown with predefined options.

#### SEO Architecture
- **Helmet Async** for dynamic meta tags per page
- **Structured data** (LocalBusiness schema) embedded in HomePage
- **Custom canonical URLs** for all pages
- **Optimized heading hierarchy** (H1/H2/H3) with local keywords

### Styling System
- **Tailwind CSS** with custom design system in `tailwind.config.js`
- **Custom CSS components** defined in `index.css` using Tailwind's `@layer` directives
- **Design tokens** for consistent orange/blue brand colors and Inter font family
- **Responsive-first approach** with mobile breakpoints

### Product Data Structure
Product information is statically defined in `ProductsPage.tsx` with:
- Brand logos stored in `/public/images/brands/`
- Product images in `/public/images/products/[brand]/`
- Image carousel state management using React hooks
- No pricing displayed (lead generation focus)

### Form Handling
- **React Hook Form** for validation and submission
- **Consistent field validation** across all contact forms
- **Error handling** with user-friendly messages
- **Required fields**: name, email, phone, city, service type

## Environment Configuration

### Local Development
Copy `.env.example` to `.env` - contains working EmailJS credentials for development.

### Production (Netlify)
Environment variables must be configured in Netlify dashboard:
```
VITE_EMAILJS_SERVICE_ID=service_1rruujp
VITE_EMAILJS_TEMPLATE_ID=template_rkcpzhg
VITE_EMAILJS_PUBLIC_KEY=sjJ8kK6U9wFjY0zX9
```

### Build Configuration
- **Node.js**: 18.x or higher required
- **Build command**: `npm run build`
- **Publish directory**: `dist`

## Component Integration Patterns

### Contact Forms
Two main contact forms with identical EmailJS integration:
1. **HeroOptimized**: Simplified lead capture form in hero section
2. **Contact**: Full contact form with message field

Both send to the same EmailJS template with structured data including service type mapping.

### Product Galleries
- **ProductGallery**: Homepage featured products carousel
- **ProductsPage**: Full product catalog with image carousels per model
- Images use lazy loading and are optimized for web (webp format)

### Navigation
- **Navbar**: Responsive navigation with scroll detection and route-based styling
- **Footer**: Company information and local service area links

## Local SEO Focus

The site targets Limburg region with specific cities:
- Heerlen, Sittard, Geleen, Maastricht, Roermond, Kerkrade, Brunssum, Landgraaf

Content strategy emphasizes local keywords and service area coverage without 24/7 availability claims (business hours only).

## Performance Considerations

- **Lazy loading** for pages and images
- **Code splitting** via React.lazy()
- **Optimized images** in webp format
- **Minimal dependencies** focused on core functionality
- **Tailwind CSS purging** removes unused styles in production