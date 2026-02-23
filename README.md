# gunawanDev Portfolio

A modern, responsive developer portfolio built with Next.js 15, TypeScript, and Tailwind CSS. Features a beautiful glassmorphism design with dark/light mode support and comprehensive SEO optimization.

## Features

- **Modern Design**: Beautiful glassmorphism effects with smooth animations
- **Dark/Light Mode**: Seamless theme switching using next-themes
- **Responsive**: Mobile-first design that works on all devices
- **SEO Optimized**: Complete metadata, Open Graph tags, JSON-LD schema, sitemap, and robots.txt
- **Performance**: Optimized images, code splitting, and lazy loading
- **Accessibility**: Semantic HTML, ARIA labels, and keyboard navigation
- **Sections**:
  - Hero section with call-to-action
  - Featured projects grid
  - Work experience timeline
  - Skills and certifications
  - Blog and T.I.L. cards
  - Contact form with validation

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.2
- **Theme**: next-themes
- **Icons**: lucide-react
- **Forms**: react-hook-form with Zod validation
- **UI Components**: shadcn/ui

## Getting Started

### Installation

Using the shadcn/ui CLI:

```bash
npm run shadcn-ui init

# Or with npx:
npx shadcn-ui@latest init
```

Then install dependencies:

```bash
npm install
# or
pnpm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the portfolio.

### Building

Build for production:

```bash
npm run build
npm run start
```

## Project Structure

```
├── app/
│   ├── page.tsx              # Main portfolio page
│   ├── layout.tsx            # Root layout with theme provider
│   ├── globals.css           # Global styles and design tokens
│   ├── sitemap.ts            # SEO sitemap
│   └── robots.ts             # SEO robots.txt
├── components/
│   ├── navbar.tsx            # Navigation with theme toggle
│   ├── hero-section.tsx      # Hero section
│   ├── projects-section.tsx  # Projects grid
│   ├── experience-section.tsx # Work experience timeline
│   ├── skills-section.tsx    # Skills and certifications
│   ├── blog-section.tsx      # Blog and T.I.L. sections
│   ├── contact-section.tsx   # Contact form
│   ├── footer.tsx            # Footer
│   ├── theme-provider.tsx    # Theme provider wrapper
│   └── ui/                   # shadcn/ui components
├── lib/
│   ├── constants.ts          # Site configuration
│   └── utils.ts              # Utility functions
├── public/
│   ├── og-image.jpg          # OpenGraph image
│   └── schema.json           # JSON-LD schema
├── tailwind.config.ts        # Tailwind configuration
└── next.config.mjs           # Next.js configuration
```

## Customization

### Update Personal Information

Edit `/lib/constants.ts` to update:
- Site name and title
- Email, phone, and location
- Social media links

### Modify Color Scheme

The color system is defined in `/app/globals.css` using CSS custom properties:

```css
:root {
  --primary: #7c3aed;
  --accent: #6366f1;
  --background: #faf9f7;
  --foreground: #1a1a1a;
}

.dark {
  --primary: #a855f7;
  --accent: #818cf8;
  --background: #0f0f12;
  --foreground: #f5f5f5;
}
```

### Update Sections

Each major section is its own component in `/components/`:
- Update content and data
- Modify styling using Tailwind classes
- Add new sections by creating a new component

## SEO Optimization

The portfolio includes:
- ✅ Comprehensive metadata in `layout.tsx`
- ✅ Open Graph and Twitter card support
- ✅ JSON-LD structured data in `schema.json`
- ✅ Dynamic sitemap generation
- ✅ robots.txt for search engines
- ✅ Semantic HTML with proper heading hierarchy
- ✅ Alt text for images
- ✅ Mobile viewport optimization

## Deployment

### Deploy to Vercel

The easiest way to deploy is using [Vercel](https://vercel.com):

```bash
npx vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

## Performance

- Optimized images and static assets
- Code splitting for faster initial load
- CSS-in-JS for smaller bundle size
- Prefetching for smooth navigation
- Web fonts optimized with next/font

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This project is open source and available under the MIT License.

## Support

For questions or issues, please open an issue on GitHub or contact hello@gunawandev.com.
