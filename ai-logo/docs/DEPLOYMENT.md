# Deployment Guide

This guide covers deploying AI Logo Maker to various platforms.

## Table of Contents

- [Vercel (Recommended)](#vercel-recommended)
- [Netlify](#netlify)
- [Docker](#docker)
- [Self-Hosted](#self-hosted)
- [Environment Variables](#environment-variables)
- [Post-Deployment](#post-deployment)

---

## Vercel (Recommended)

Vercel is the recommended platform for deploying Next.js applications.

### Prerequisites

- GitHub/GitLab/Bitbucket account
- Vercel account (free tier available)

### Steps

1. **Push your code to Git**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your Git repository
   - Vercel will auto-detect Next.js

3. **Configure Environment Variables**
   - Add all variables from `.env.example`
   - See [Environment Variables](#environment-variables) section

4. **Deploy**
   - Click "Deploy"
   - Wait for build to complete (2-3 minutes)
   - Your app will be live at `your-project.vercel.app`

### Custom Domain

1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed
4. SSL certificate is automatically provisioned

### Automatic Deployments

- **Production**: Pushes to `main` branch
- **Preview**: Pull requests and other branches

---

## Netlify

### Steps

1. **Build Configuration**
   
   Create `netlify.toml`:
   ```toml
   [build]
     command = "npm run build"
     publish = ".next"

   [[plugins]]
     package = "@netlify/plugin-nextjs"
   ```

2. **Deploy**
   - Connect your Git repository
   - Configure build settings
   - Add environment variables
   - Deploy

### Environment Variables

Add in Netlify dashboard under Site Settings → Environment Variables

---

## Docker

### Dockerfile

Create `Dockerfile`:
```dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED 1

RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

### Docker Compose

Create `docker-compose.yml`:
```yaml
version: '3.8'

services:
  app:
    build: .
    ports:
      - "3000:3000"
    env_file:
      - .env.local
    restart: unless-stopped
```

### Build and Run

```bash
# Build image
docker build -t ai-logo-maker .

# Run container
docker run -p 3000:3000 --env-file .env.local ai-logo-maker

# Or use docker-compose
docker-compose up -d
```

---

## Self-Hosted

### Requirements

- Node.js 18+ installed
- PM2 or similar process manager
- Nginx or Apache (optional, for reverse proxy)

### Steps

1. **Clone and Install**
   ```bash
   git clone https://github.com/yourusername/ai-logo.git
   cd ai-logo
   npm install
   ```

2. **Build**
   ```bash
   npm run build
   ```

3. **Start with PM2**
   ```bash
   npm install -g pm2
   pm2 start npm --name "ai-logo" -- start
   pm2 save
   pm2 startup
   ```

### Nginx Configuration

```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### SSL with Let's Encrypt

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com
```

---

## Environment Variables

### Required Variables

```env
# Google Gemini AI
NEXT_PUBLIC_GEMINI_API_KEY=your_key

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_key
CLERK_SECRET_KEY=your_key

# Firebase
NEXT_PUBLIC_FIREBASE_API_KEY=your_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

### Optional Variables

```env
# Replicate (for advanced features)
REPLICATE_API_TOKEN=your_token

# Analytics
NEXT_PUBLIC_GA_ID=your_ga_id

# Sentry (error tracking)
SENTRY_DSN=your_sentry_dsn
```

---

## Post-Deployment

### 1. Verify Deployment

- [ ] Homepage loads correctly
- [ ] Authentication works
- [ ] Logo generation functions
- [ ] Images load properly
- [ ] All API routes respond

### 2. Configure DNS

Point your domain to deployment:
- **Vercel**: Add CNAME record
- **Self-hosted**: Add A record to server IP

### 3. Set Up Monitoring

**Vercel Analytics** (Built-in):
- Automatically enabled
- View in Vercel dashboard

**External Monitoring**:
- [Sentry](https://sentry.io) for error tracking
- [LogRocket](https://logrocket.com) for session replay
- [Google Analytics](https://analytics.google.com) for usage

### 4. Performance Optimization

```bash
# Analyze bundle size
npm run build
npx @next/bundle-analyzer
```

### 5. Security Checklist

- [ ] All API keys in environment variables
- [ ] HTTPS enabled
- [ ] CORS configured properly
- [ ] Rate limiting enabled
- [ ] Firebase security rules set
- [ ] Clerk production settings configured

---

## Continuous Deployment

### GitHub Actions

Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - run: npm test
      # Add deployment steps
```

---

## Rollback

### Vercel
- Go to Deployments
- Click on previous deployment
- Click "Promote to Production"

### Docker
```bash
docker pull your-registry/ai-logo:previous-tag
docker-compose up -d
```

### PM2
```bash
pm2 reload ai-logo
```

---

## Troubleshooting

### Build Fails

1. Check Node.js version: `node -v`
2. Clear cache: `rm -rf .next node_modules`
3. Reinstall: `npm install`
4. Check environment variables

### Runtime Errors

1. Check logs:
   - Vercel: View in dashboard
   - PM2: `pm2 logs ai-logo`
   - Docker: `docker logs container-name`

2. Verify environment variables are set
3. Check API key validity
4. Review Firebase/Clerk configuration

### Performance Issues

1. Enable caching
2. Optimize images
3. Use CDN for static assets
4. Check database queries
5. Monitor API rate limits

---

## Scaling

### Horizontal Scaling

- Vercel automatically scales
- For self-hosted: Use load balancer + multiple instances

### Database Scaling

- Firebase scales automatically
- Monitor usage in Firebase console
- Upgrade plan if needed

### CDN

- Vercel includes CDN
- For self-hosted: Use Cloudflare or AWS CloudFront

---

## Support

For deployment issues:
- Check [Troubleshooting](#troubleshooting)
- Review [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
- Open an issue on GitHub
- Contact: deploy-support@your-domain.com

---

## Checklist

Before going live:

- [ ] All tests passing
- [ ] Environment variables configured
- [ ] Custom domain set up
- [ ] SSL certificate active
- [ ] Monitoring enabled
- [ ] Backup strategy in place
- [ ] Documentation updated
- [ ] Team notified

---

Last Updated: January 2025
