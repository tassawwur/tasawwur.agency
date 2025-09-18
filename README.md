# tasawwur.agency

A premium agency website for software engineering, web development, LLM engineering, AI/ML, app development, and architecture. Built with the latest tech stack for optimal performance and user experience.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14, TypeScript, Tailwind CSS v4.1, Framer Motion
- **Ultra Smooth Scrolling**: Lenis integration for buttery smooth scroll experience
- **Three Design Palettes**: 
  - Celestial Light (Homepage)
  - Ruby and Musk (Services)
  - Gardens of Paradise (Work/Portfolio)
- **Performance Optimized**: Lighthouse scores 95+ desktop, 90+ mobile
- **Accessibility Compliant**: WCAG AA standards
- **SEO Optimized**: Complete meta tags, schema.org markup, sitemap
- **Responsive Design**: Mobile-first approach with perfect scaling

## 🛠 Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS v4.1** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **Lenis** - Smooth scrolling library
- **Radix UI + shadcn/ui** - Accessible component primitives

### Backend & API
- **Next.js API Routes** - Serverless API endpoints
- **React Query** - Data fetching and caching
- **Zod** - Schema validation
- **React Hook Form** - Form handling

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Jest + React Testing Library** - Unit testing
- **Playwright** - E2E testing

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── privacy/           # Privacy policy
│   ├── services/          # Services pages
│   ├── terms/             # Terms of service
│   └── work/              # Work/portfolio pages
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── Header.tsx        # Navigation header
│   ├── Footer.tsx        # Site footer
│   ├── Hero.tsx          # Hero section
│   └── ContactForm.tsx   # Contact form
├── data/                 # Static data files
│   ├── projects.json     # Project case studies
│   ├── services.json     # Service offerings
│   └── courses.json      # Course information
├── lib/                  # Utility functions
│   ├── utils.ts          # Common utilities
│   └── smooth-scroll.ts  # Smooth scrolling setup
└── styles/               # Styling
    └── globals.css       # Global styles and CSS variables
```

## 🎨 Design System

### Color Palettes

#### Celestial Light (Homepage)
- Background: `#FCF9F6` (off-white cream)
- Muted: `#F3EFEC`
- Pearl: `#EEF0F1`
- Text: `#1E293B` (dark slate)
- Accent Teal: `#3CA6B1`
- Accent Blue: `#67A8F5`
- Gold: `#C9A15A`

#### Ruby and Musk (Services)
- Maroon: `#6B0F1A`
- Musk: `#CBB39A`
- Musk Dark: `#A47C5A`
- White: `#FFFFFF`
- Gold Strong: `#D8B65A`

#### Gardens of Paradise (Work)
- Sage: `#EAF3EC`
- Emerald: `#0F7A4A`
- Leaf: `#2E8B57`
- Pure White: `#FFFFFF`
- Silver: `#BFC9C4`
- Gold Subtle: `#D4AF6E`

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/tasawwur/tasawwur-agency.git
cd tasawwur-agency
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking
- `npm test` - Run unit tests
- `npm run test:e2e` - Run E2E tests

## 🌐 Deployment

The site is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

### Environment Variables

Create a `.env.local` file for environment-specific variables:

```env
# Email service (optional)
SENDGRID_API_KEY=your_sendgrid_key

# Analytics (optional)
PLAUSIBLE_DOMAIN=your_domain

# Contact form (optional)
CONTACT_EMAIL=your_contact_email
```

## 📊 Performance

- **Lighthouse Performance**: 95+ desktop, 90+ mobile
- **Core Web Vitals**: Optimized for LCP, FID, CLS
- **Bundle Size**: < 150KB gzipped initial JS
- **Image Optimization**: AVIF/WebP formats with Next/Image
- **Smooth Scrolling**: 60 FPS with Lenis

## ♿ Accessibility

- **WCAG AA Compliance**: Meets accessibility standards
- **Keyboard Navigation**: Full keyboard support
- **Screen Reader Support**: Proper ARIA labels
- **Color Contrast**: 4.5:1 minimum ratio
- **Reduced Motion**: Respects user preferences

## 🔒 Security

- **HTTPS Everywhere**: Secure connections
- **CSP Headers**: Content Security Policy
- **Rate Limiting**: API endpoint protection
- **Input Validation**: Zod schema validation
- **File Upload Security**: Type and size validation

## 📈 SEO

- **Meta Tags**: Complete meta information
- **Schema.org**: Structured data markup
- **Sitemap**: Auto-generated XML sitemap
- **Robots.txt**: Search engine directives
- **Social Cards**: Open Graph and Twitter cards

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **Email**: tassawwurhussain@tasawwur.agency
- **Website**: https://tasawwur.agency
- **WhatsApp**: +92 315 629 3975

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [Lenis](https://github.com/studio-freight/lenis) for smooth scrolling
- [shadcn/ui](https://ui.shadcn.com/) for beautiful components
- [Vercel](https://vercel.com/) for seamless deployment

---

Built with ❤️ by [tasawwur.agency](https://tasawwur.agency)

