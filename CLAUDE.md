# CLAUDE.md - Complete Repository Documentation

## Project Overview
**Ben's Portfolio Website** - A modern, responsive portfolio website for Ben (Si Ben Tran), a Data Scientist/Data Analyst/Data Engineer. This is a static GitHub Pages website built with cutting-edge frontend technologies.

**Live URLs**: 
- **Primary**: `https://sibentran.ch` (Custom Domain)
- **Fallback**: `https://7ben18.github.io` (GitHub Pages)
**Repository**: `https://github.com/7ben18/7ben18.github.io`

## Tech Stack & Dependencies

### Core Framework
- **Vite 5.4.20** - Modern build tool and dev server (fast HMR, optimized builds)
- **React 18** - Component-based UI library
- **TypeScript** - Type safety and better development experience

### Styling & UI
- **Tailwind CSS 3** - Utility-first CSS framework
- **PostCSS** - CSS processing pipeline
- **Framer Motion** - Advanced animations and micro-interactions
- **Lucide React** - Modern icon library (replaces Feather icons)

### Build & Development Tools
- **TypeScript Compiler** - Type checking and compilation
- **Vite Dev Server** - Hot module replacement during development
- **ESLint** - Code quality and consistency
- **PostCSS + Autoprefixer** - CSS processing and vendor prefixes

## Project Structure

```
7ben18.github.io/
├── src/
│   ├── components/           # React components
│   │   ├── Navigation.tsx    # Top navigation with auth (centered menu)
│   │   ├── Hero.tsx         # Landing section with animated titles (no hover effects)
│   │   ├── About.tsx        # Personal information and CV download
│   │   ├── Portfolio.tsx    # Project showcase with clickable GitHub images
│   │   ├── Certificates.tsx # Education and certifications (no password text)
│   │   ├── Testimonials.tsx # Rotating testimonials carousel (no quote icons)
│   │   ├── Contact.tsx      # Contact methods and CTA (equal card sizes)
│   │   ├── Footer.tsx       # Social links and copyright (no divider line)
│   │   └── AuthProvider.tsx # Authentication system (with password visibility toggle)
│   ├── data/
│   │   └── portfolio.ts     # All content data (projects, testimonials, etc.)
│   ├── types/
│   │   └── index.ts         # TypeScript type definitions
│   ├── App.tsx              # Main app component with global bubble animation (40 bubbles)
│   ├── index.css            # Global styles and Tailwind imports (instant hover effects)
│   └── main.tsx             # React app entry point
├── public/
│   ├── images/              # Static assets (project images, testimonials, etc.)
│   └── CNAME                # Custom domain configuration (sibentran.ch)
├── dist/                    # Build output (auto-generated)
├── .gitignore              # Git ignore rules
├── package.json             # Dependencies and scripts
├── README.md               # Setup and usage instructions
├── tailwind.config.js       # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
├── vite.config.ts          # Vite build configuration
└── CLAUDE.md               # This documentation file
```

## Key Features & Functionality

### 1. Authentication System
- **Client-side password protection** using Web Crypto API
- Master password hash: `835f38340c098c754be745116f02d4c2c88a990221bc1cc9ab9a5d142ae1564f`
- **Password visibility toggle**: Eye/EyeOff icon for showing/hiding password input
- Encrypted document URLs for secure CV/certificate access
- Session-based authentication (persists during browser session)
- Rate limiting: 3 failed attempts then lockout
- **No password protection text**: Clean UI without security warnings

### 2. Animations & Interactions
- **Global bubble background**: 40 floating bubbles with varying sizes (1x1, 2x2, 3x3px) across entire page
- **Instant hover effects**: All interactions use 75ms duration for responsive feel
- **Framer Motion animations**: Page transitions, smooth scroll-triggered animations
- **Smooth scrolling navigation** between sections (centered menu)
- **Animated title switching** in hero section with AnimatePresence (4 titles rotating every 3 seconds)
- **Testimonials carousel** with auto-play and manual controls (no quote icons)
- **Hero buttons**: Color-only hover effects (no scaling/lifting animations)

### 3. Content Management
- **Centralized data structure** in `src/data/portfolio.ts`
- **TypeScript interfaces** for type safety
- **Modular content sections**: Easy to update without touching components

### 4. Responsive Design
- **Mobile-first approach** with Tailwind breakpoints
- **Adaptive navigation**: Hamburger menu on mobile
- **Flexible grid layouts**: Portfolio grid, testimonials, contact cards
- **Optimized images**: All images properly sized and optimized

### 5. Performance Optimizations
- **Vite optimizations**: Fast builds, tree shaking, code splitting
- **Lazy loading**: Animations trigger on scroll into view
- **Optimized bundle**: ~380 kB total (gzipped: ~116 kB)
- **Static generation**: No runtime JavaScript dependencies for content
- **Instant interactions**: 75ms hover effects eliminate perceived lag

### 6. Domain Configuration
- **Custom Domain**: `sibentran.ch` (primary)
- **CNAME File**: Located at `public/CNAME` with domain configuration
- **DNS Setup**: A records pointing to GitHub Pages (185.199.108-111.153)
- **HTTPS**: Automatic SSL certificate through GitHub Pages
- **Fallback**: `7ben18.github.io` always available

## Content Structure

### Personal Information
- **Name**: Ben (Si Ben Tran)
- **Current Role**: Risk Data Analyst/Engineer @ Baloise Asset Management
- **Education**: Data Science Bachelor @ FHNW
- **Contact**: si_ben_tran@hotmail.com
- **Social**: LinkedIn, GitHub profiles

### Sections
1. **Hero**: Animated title rotation, CTA buttons (no hover animations, unified white text)
2. **About**: Personal info cards, CV download (password protected, no emoji)
3. **Portfolio**: 15+ projects with clickable GitHub images, status indicators, NDA badges (no technology tags)
4. **Certificates**: Work certificates, bachelor degree, apprenticeship (encrypted, no password text or lock icons)
5. **Testimonials**: 5 testimonials with categories and auto-carousel (no quote icons, clean design)
6. **Contact**: Multiple contact methods with animations (equal card sizes, removed strategic/consulting text)

### Project Categories
- **Data Analysis**: Risk analytics, dashboards, business intelligence
- **Deep Learning**: Adversarial attacks, temperature prediction, image captioning
- **Machine Learning**: Stock prediction, NLP, classification projects
- **Web Development**: Full-stack applications, ETL pipelines

## Design System

### Color Palette
- **Primary**: Gray-900 (#111827) - Dark backgrounds
- **Secondary**: Gray-800 (#1f2937) - Card backgrounds
- **Accent**: Blue-500 (#3b82f6) - Interactive elements, highlights
- **Text**: White (#ffffff) for headings, Gray-300 (#d1d5db) for content
- **Surfaces**: Gray-800/50 with backdrop blur for glass effects

### Typography
- **Primary Font**: Inter (400, 500, 600, 700 weights)
- **Monospace**: JetBrains Mono (for code)
- **Scale**: 4xl-5xl for headings, xl-2xl for subheadings, base-lg for content

### Layout Patterns
- **Container**: `max-w-7xl mx-auto` (1280px max width)
- **Section Padding**: `py-16 px-4 sm:py-24 sm:px-6 lg:px-8`
- **Card Pattern**: `bg-gray-800 border border-gray-700 rounded-xl`
- **Glass Effect**: `backdrop-blur-sm bg-gray-800/50`

### Animation Patterns
- **Page Entry**: Fade up (opacity 0→1, y 50→0)
- **Stagger**: 0.1-0.2s delays for sequential elements
- **Hover Effects**: 75ms duration for instant responsiveness (no scaling on hero buttons)
- **Scroll Triggers**: `whileInView` with `viewport={{ once: true }}`
- **Bubble Animation**: Continuous floating animation across entire page
- **Title Switching**: Smooth AnimatePresence transitions in hero

## Development Workflow

### Available Scripts
```bash
npm run dev          # Start dev server (port 3000/3001)
npm run build        # Build for production
npm run preview      # Preview built site locally
npm run lint         # Run ESLint
```

### Development Server
- **Dev URL**: `http://localhost:3001/` (auto-increments if 3000 taken)
- **HMR**: Instant updates on file changes
- **Network Access**: Available on local network for mobile testing

### Build Process
1. **TypeScript compilation** (`tsc -b`)
2. **Vite bundling** with optimizations
3. **Asset optimization**: Images, fonts, CSS
4. **Output**: `dist/` folder ready for deployment

### Code Quality
- **TypeScript strict mode** enabled
- **Unused imports** flagged as errors
- **Type safety** enforced throughout
- **ESLint rules** for consistency

## Deployment

### GitHub Pages Configuration
- **Branch**: Main branch
- **Build**: Manual builds committed to repository
- **Static files**: All assets in `dist/` folder
- **Domain**: Custom domain `7ben18.github.io`

### Build Output
- **HTML**: Single `index.html` with asset references
- **CSS**: Bundled and minified Tailwind styles (~25 kB)
- **JS**: React app bundle (~215 kB), Framer Motion (~117 kB)
- **Assets**: Icons, fonts, and vendor libraries
- **Total Size**: ~380 kB uncompressed, ~116 kB gzipped

## Authentication & Security

### Document Protection
- **Client-side encryption**: Documents encrypted with AES
- **Password verification**: SHA-256 hashing
- **No server dependency**: All handled in browser
- **Session persistence**: Auth state maintained during session

### Security Features
- **Rate limiting**: Prevents brute force attempts
- **Secure document URLs**: Encrypted paths to sensitive files
- **No credential storage**: Passwords never stored, only hashed
- **External link security**: `rel="noopener noreferrer"` on all external links

## Recent UX Improvements

### User Experience Enhancements (Latest Updates)
- **Instant Hover Effects**: Reduced all hover transitions from 300ms to 75ms for immediate responsiveness
- **Hero Button Optimization**: Removed scaling/lifting animations, kept only color changes for cleaner interaction
- **Global Bubble Background**: Moved from hero-only to entire page coverage with 40 floating bubbles
- **Navigation Centering**: Changed from left-aligned to centered navigation menu
- **Portfolio Interactivity**: Made project images directly clickable to GitHub (not just overlay buttons)
- **Authentication UX**: Added password visibility toggle with eye icon for better usability
- **Clean Design**: Removed unnecessary visual elements (quote icons, divider lines, password warnings)
- **Typography Consistency**: Unified "Hallo Ich bin Ben" as all-white text (removed blue gradient)
- **Contact Form Alignment**: Made contact cards equal size for better visual balance
- **Footer Simplification**: Removed tech stack attribution and white divider line

### Design Philosophy Updates
- **Minimalist Approach**: Removed decorative elements that don't add functional value
- **Performance First**: Instant feedback for all user interactions
- **Accessibility**: Better contrast, cleaner focus states, keyboard navigation
- **Mobile Optimization**: Touch-friendly interactions, proper spacing

## Content Management

### Adding New Projects
1. Open `src/data/portfolio.ts`
2. Add project object to `projects` array
3. Include: id, title, description, image, github, status, category, technologies
4. Add project image to `public/images/projekte/`
5. Build and deploy

### Updating Testimonials
1. Add testimonial to `testimonials` array in `src/data/portfolio.ts`
2. Include: id, name, role, company, image, quote, category, icon
3. Add profile image to `public/images/testimonials/`

### Certificate Management
1. Add certificate to `certificates` array
2. Each certificate has documents array with encrypted URLs
3. Use authentication system for access control

## Technical Decisions & Rationale

### Why Vite over Create React App
- **Faster development**: ESBuild-powered bundling
- **Better DX**: Native ES modules, faster HMR
- **Modern tooling**: Built for current web standards
- **Smaller bundles**: Better tree shaking and optimization

### Why Tailwind CSS
- **Rapid development**: Utility classes for quick styling
- **Consistency**: Design system baked into CSS classes
- **Performance**: Purged CSS, only used classes included
- **Responsive design**: Mobile-first breakpoint system

### Why Framer Motion
- **Advanced animations**: Spring physics, gesture support
- **Performance**: Optimized for 60fps animations
- **Developer experience**: Declarative animation API
- **Bundle size**: Tree-shakeable, only used features included

### Why Client-side Authentication
- **Static hosting**: No server required for GitHub Pages
- **Security**: Document URLs encrypted, no backend to compromise
- **Performance**: No API calls, instant verification
- **Cost**: Free hosting with full functionality

## Performance Optimizations

### Bundle Size Management
- **Tree shaking**: Unused code eliminated
- **Code splitting**: Vendor libraries separated
- **Import optimization**: Specific icon imports from Lucide
- **CSS purging**: Unused Tailwind classes removed

### Runtime Performance
- **Lazy animations**: Only trigger when elements visible
- **Memoized components**: Prevent unnecessary re-renders
- **Optimized images**: WebP format, proper sizing
- **Bubble animation**: GPU-accelerated transforms

### SEO & Accessibility
- **Semantic HTML**: Proper heading hierarchy, ARIA labels
- **Alt text**: All images have descriptive alt attributes
- **Keyboard navigation**: Focus states, tab order
- **Screen reader friendly**: Proper labeling, skip links

## Maintenance Notes

### Regular Updates
- **Dependencies**: Keep React, TypeScript, Vite updated
- **Security patches**: Monitor for vulnerabilities
- **Browser compatibility**: Test in latest browsers
- **Performance monitoring**: Check bundle size growth

### Content Updates
- **Projects**: Add new work, update GitHub links
- **Testimonials**: Collect and add new recommendations
- **Personal info**: Update role, contact information
- **Certificates**: Add new qualifications

### Common Issues
- **Node version**: Requires Node 18+ for current dependencies
- **Port conflicts**: Dev server auto-increments ports
- **Build failures**: Usually TypeScript errors or missing imports
- **Animation performance**: Monitor on lower-end devices

## Future Enhancements

### Potential Features
- **Blog section**: Technical articles, project deep-dives
- **Theme switching**: Light/dark mode toggle
- **Internationalization**: English/German language support
- **Analytics**: Visitor tracking, popular content metrics
- **PWA features**: Offline support, app-like experience

### Technical Improvements
- **Image optimization**: WebP conversion, lazy loading
- **Bundle splitting**: Route-based code splitting
- **CDN integration**: Faster asset delivery
- **Service worker**: Caching strategy for repeat visits

---

## Quick Reference Commands

```bash
# Development
npm run dev                    # Start dev server (http://localhost:3000)
npm run build                  # Production build
npm run preview                # Preview production build locally
npm run lint                   # Code quality check

# Deployment (manual)
npm run build                  # Build site
git add .                      # Stage all changes (including CNAME)
git commit -m "Deploy: description"  # Commit build
git push origin main          # Deploy to GitHub Pages & sibentran.ch

# Domain Management
cat public/CNAME              # Check custom domain configuration
nslookup sibentran.ch         # Verify DNS resolution
curl -I https://sibentran.ch  # Check HTTPS certificate

# Maintenance
npm audit                     # Check for vulnerabilities
npm update                    # Update dependencies
rm -rf node_modules && npm install  # Clean reinstall
```

## Live URLs
- **Primary**: [sibentran.ch](https://sibentran.ch)
- **Fallback**: [7ben18.github.io](https://7ben18.github.io)

## Contact & Support
For any technical issues or questions about this codebase, contact Ben at: si_ben_tran@hotmail.com

---
*Last Updated: January 2025*
*Claude AI Assistant Documentation*