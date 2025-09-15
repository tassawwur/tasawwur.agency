# Deployment Guide - tasawwur.agency

This guide covers deploying the tasawwur.agency website to production using Vercel.

## 🚀 Quick Deploy to Vercel

### Option 1: Deploy from GitHub (Recommended)

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your repository
   - Vercel will auto-detect Next.js settings

3. **Configure Environment Variables** (Optional):
   ```env
   SENDGRID_API_KEY=your_sendgrid_key
   CONTACT_EMAIL=tassawwurhussain@tasawwur.agency
   ```

4. **Deploy**:
   - Click "Deploy"
   - Your site will be live at `https://your-project.vercel.app`

### Option 2: Deploy from Local

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel
   ```

4. **Follow prompts**:
   - Link to existing project or create new
   - Confirm settings
   - Deploy

## ⚙️ Configuration

### Custom Domain Setup

1. **Add Domain in Vercel**:
   - Go to Project Settings → Domains
   - Add `tasawwur.agency`
   - Add `www.tasawwur.agency`

2. **Update DNS**:
   ```
   Type: A
   Name: @
   Value: 76.76.19.19

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

### Environment Variables

Create `.env.local` for local development:

```env
# Email Service (Optional)
SENDGRID_API_KEY=your_sendgrid_api_key
CONTACT_EMAIL=tassawwurhussain@tasawwur.agency

# Analytics (Optional)
PLAUSIBLE_DOMAIN=tasawwur.agency
GOOGLE_ANALYTICS_ID=GA_MEASUREMENT_ID

# Contact Form (Optional)
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_recaptcha_key
RECAPTCHA_SECRET_KEY=your_recaptcha_secret
```

## 📊 Performance Optimization

### Image Optimization
- All images are automatically optimized by Next.js
- Use AVIF/WebP formats for better compression
- Implement lazy loading for below-the-fold images

### Bundle Optimization
- Code splitting is automatic with Next.js
- Dynamic imports for heavy components
- Tree shaking removes unused code

### Caching Strategy
- Static pages are cached at CDN level
- API routes use appropriate cache headers
- Images are cached for 1 year

## 🔒 Security Configuration

### Headers (Already Configured)
```javascript
// next.config.js
async headers() {
  return [
    {
      source: '/(.*)',
      headers: [
        {
          key: 'X-Frame-Options',
          value: 'DENY',
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff',
        },
        {
          key: 'Referrer-Policy',
          value: 'origin-when-cross-origin',
        },
      ],
    },
  ]
}
```

### Additional Security
- HTTPS enforced by Vercel
- CSP headers can be added if needed
- Rate limiting on API routes
- Input validation with Zod

## 📈 Analytics Setup

### Option 1: Plausible (Privacy-focused)
```javascript
// Add to layout.tsx
<script defer data-domain="tasawwur.agency" src="https://plausible.io/js/script.js"></script>
```

### Option 2: Google Analytics
```javascript
// Add to layout.tsx
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script
  dangerouslySetInnerHTML={{
    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'GA_MEASUREMENT_ID');
    `,
  }}
/>
```

## 📧 Email Integration

### SendGrid Setup
1. Create SendGrid account
2. Get API key
3. Add to environment variables
4. Update contact API route

### Alternative: Nodemailer
```javascript
// For custom SMTP
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransporter({
  host: 'smtp.your-provider.com',
  port: 587,
  secure: false,
  auth: {
    user: 'your-email@domain.com',
    pass: 'your-password'
  }
});
```

## 🔄 CI/CD with GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - run: npm ci
      - run: npm run lint
      - run: npm run type-check
      - run: npm run build
      
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
          vercel-args: '--prod'
```

## 🧪 Testing Before Deployment

### Local Testing
```bash
# Build and test locally
npm run build
npm run start

# Test on different devices
npm run dev
```

### Performance Testing
```bash
# Install Lighthouse CLI
npm install -g lighthouse

# Test performance
lighthouse http://localhost:3000 --output=html --output-path=./lighthouse-report.html
```

### Accessibility Testing
```bash
# Install axe CLI
npm install -g @axe-core/cli

# Test accessibility
axe http://localhost:3000
```

## 📱 PWA Configuration (Optional)

Add to `next.config.js`:

```javascript
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
})

module.exports = withPWA({
  // existing config
})
```

## 🚨 Monitoring & Alerts

### Vercel Analytics
- Built-in analytics in Vercel dashboard
- Performance monitoring
- Error tracking

### Uptime Monitoring
- Set up UptimeRobot
- Monitor key pages
- Get alerts for downtime

### Error Tracking
```javascript
// Add Sentry for error tracking
import * as Sentry from '@sentry/nextjs'

Sentry.init({
  dsn: 'YOUR_SENTRY_DSN',
})
```

## 📋 Pre-Launch Checklist

- [ ] All pages load correctly
- [ ] Contact form works
- [ ] Images are optimized
- [ ] SEO meta tags are set
- [ ] Analytics is configured
- [ ] SSL certificate is active
- [ ] Performance scores are good
- [ ] Accessibility standards met
- [ ] Mobile responsiveness tested
- [ ] Cross-browser compatibility checked

## 🆘 Troubleshooting

### Common Issues

**Build Errors**:
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

**Image Optimization Issues**:
```bash
# Check image formats and sizes
# Ensure images are in public folder
# Use Next.js Image component
```

**Performance Issues**:
```bash
# Check bundle analyzer
npm install @next/bundle-analyzer
# Add to next.config.js
```

**Deployment Issues**:
```bash
# Check Vercel logs
vercel logs

# Redeploy
vercel --prod
```

## 📞 Support

For deployment issues:
- Check Vercel documentation
- Contact Vercel support
- Review Next.js deployment guide

For project-specific issues:
- Email: tassawwurhussain@tasawwur.agency
- GitHub Issues: Create issue in repository

---

**Happy Deploying! 🚀**
