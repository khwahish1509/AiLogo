# ⚡ Quick Start Guide

Get AI Logo Maker running in 5 minutes!

## Prerequisites

- Node.js 18+ installed
- npm installed
- Git installed

## 🚀 Fast Setup

### 1. Clone & Install (1 minute)

```bash
git clone https://github.com/yourusername/ai-logo.git
cd ai-logo
npm install
```

### 2. Get API Keys (2 minutes)

**Gemini AI** (Required):
- Visit: https://makersuite.google.com/app/apikey
- Click "Create API Key"
- Copy the key

**Clerk** (Required):
- Visit: https://dashboard.clerk.com/
- Create new application
- Copy Publishable Key and Secret Key

**Firebase** (Required):
- Visit: https://console.firebase.google.com/
- Create new project
- Enable Firestore and Storage
- Copy config from Project Settings

### 3. Configure Environment (1 minute)

```bash
cp .env.example .env.local
```

Edit `.env.local` and paste your keys:

```env
NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_key
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_key
CLERK_SECRET_KEY=your_clerk_secret
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_key
# ... (add other Firebase config)
```

### 4. Run (30 seconds)

```bash
npm run dev
```

Open http://localhost:3000 🎉

## 🎯 First Logo

1. Click "Sign Up" and create account
2. Go to "Create Logo"
3. Enter:
   - Brand: "My Startup"
   - Description: "Tech company"
   - Style: "Modern"
   - Colors: "Blue Ocean"
4. Click "Generate Ideas"
5. Select an idea
6. Click "Generate Logo"
7. Download your logo!

## 📚 Need More Help?

- **Detailed Setup**: See [SETUP_GUIDE.md](./docs/SETUP_GUIDE.md)
- **Deployment**: See [DEPLOYMENT.md](./docs/DEPLOYMENT.md)
- **API Docs**: See [API.md](./docs/API.md)
- **FAQ**: See [FAQ.md](./docs/FAQ.md)

## 🐛 Common Issues

**"Module not found"**
```bash
rm -rf node_modules package-lock.json
npm install
```

**"API key invalid"**
- Check `.env.local` for typos
- Restart dev server: `npm run dev`

**"Firebase permission denied"**
- Enable Firestore and Storage in Firebase Console
- Check security rules

## 🎓 Next Steps

- [ ] Customize branding in `app/layout.js`
- [ ] Deploy to Vercel (see [DEPLOYMENT.md](./docs/DEPLOYMENT.md))
- [ ] Read [CONTRIBUTING.md](./CONTRIBUTING.md) to contribute
- [ ] Star the repo ⭐

## 💬 Get Help

- GitHub Issues: https://github.com/yourusername/ai-logo/issues
- Email: support@your-domain.com

---

**Happy Logo Making! 🎨**
