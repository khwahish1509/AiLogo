# Complete Setup Guide

This guide will walk you through setting up AI Logo Maker from scratch.

## Prerequisites

Before you begin, ensure you have:

- **Node.js** 18.0.0 or higher ([Download](https://nodejs.org/))
- **npm** 9.0.0 or higher (comes with Node.js)
- **Git** ([Download](https://git-scm.com/))
- A code editor (VS Code recommended)
- A GitHub account
- A Google account (for Gemini AI)

---

## Step 1: Clone the Repository

```bash
# Clone the repository
git clone https://github.com/yourusername/ai-logo.git

# Navigate to project directory
cd ai-logo

# Install dependencies
npm install
```

---

## Step 2: Get API Keys

### 2.1 Google Gemini AI

1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy the API key

### 2.2 Clerk Authentication

1. Go to [Clerk Dashboard](https://dashboard.clerk.com/)
2. Sign up or log in
3. Click "Add Application"
4. Name your application (e.g., "AI Logo Maker")
5. Choose authentication methods (Email, Google, GitHub)
6. Copy the following keys:
   - Publishable Key
   - Secret Key

### 2.3 Firebase

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add Project"
3. Name your project (e.g., "ai-logo-maker")
4. Disable Google Analytics (optional)
5. Click "Create Project"

#### Enable Firestore Database

1. In Firebase Console, go to "Firestore Database"
2. Click "Create Database"
3. Choose "Start in test mode"
4. Select a location
5. Click "Enable"

#### Enable Storage

1. Go to "Storage"
2. Click "Get Started"
3. Choose "Start in test mode"
4. Click "Done"

#### Get Firebase Config

1. Go to Project Settings (gear icon)
2. Scroll to "Your apps"
3. Click web icon (</>)
4. Register your app
5. Copy the config values:
   - apiKey
   - authDomain
   - projectId
   - storageBucket
   - messagingSenderId
   - appId

### 2.4 Replicate (Optional)

1. Go to [Replicate](https://replicate.com/)
2. Sign up or log in
3. Go to [Account Settings](https://replicate.com/account/api-tokens)
4. Copy your API token

---

## Step 3: Configure Environment Variables

1. **Copy the example file**
   ```bash
   cp .env.example .env.local
   ```

2. **Edit `.env.local`** with your API keys:

```env
# Google Gemini AI
NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key_here

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_xxxxx
CLERK_SECRET_KEY=sk_test_xxxxx
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789012
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789012:web:xxxxx

# Replicate (Optional)
REPLICATE_API_TOKEN=r8_xxxxx
```

---

## Step 4: Configure Clerk

### 4.1 Set Up Redirect URLs

In Clerk Dashboard:

1. Go to "Paths"
2. Set the following:
   - Sign-in URL: `/sign-in`
   - Sign-up URL: `/sign-up`
   - After sign-in URL: `/dashboard`
   - After sign-up URL: `/dashboard`

### 4.2 Enable Authentication Methods

1. Go to "User & Authentication" → "Email, Phone, Username"
2. Enable desired methods:
   - ✅ Email address
   - ✅ Google
   - ✅ GitHub (optional)

---

## Step 5: Configure Firebase Security Rules

### Firestore Rules

1. Go to Firestore Database → Rules
2. Replace with:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // User logos
    match /users/{userId}/logos/{logoId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    // User data
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

### Storage Rules

1. Go to Storage → Rules
2. Replace with:

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /logos/{userId}/{allPaths=**} {
      allow read: if request.auth != null;
      allow write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

---

## Step 6: Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Step 7: Test the Application

### 7.1 Test Authentication

1. Click "Sign Up"
2. Create an account
3. Verify email (if required)
4. Sign in

### 7.2 Test Logo Generation

1. Navigate to "Create Logo"
2. Enter:
   - Brand name: "Test Brand"
   - Description: "Tech startup"
   - Choose a design style
   - Select a color palette
3. Click "Generate Ideas"
4. Select an idea
5. Click "Generate Logo"
6. Verify logo appears

### 7.3 Test Dashboard

1. Go to Dashboard
2. Verify your generated logo appears
3. Test download functionality
4. Test delete functionality

---

## Step 8: Build for Production

```bash
# Build the application
npm run build

# Test production build locally
npm start
```

---

## Troubleshooting

### Issue: "Module not found"

**Solution**:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Issue: "API key invalid"

**Solution**:
- Verify API keys in `.env.local`
- Ensure no extra spaces
- Restart development server

### Issue: "Firebase permission denied"

**Solution**:
- Check Firebase security rules
- Verify user is authenticated
- Check Firebase console for errors

### Issue: "Clerk authentication not working"

**Solution**:
- Verify Clerk keys in `.env.local`
- Check redirect URLs in Clerk dashboard
- Clear browser cookies and try again

### Issue: "Build fails"

**Solution**:
```bash
# Clear Next.js cache
rm -rf .next

# Rebuild
npm run build
```

---

## Next Steps

1. **Customize the app**
   - Update branding in `app/layout.js`
   - Modify colors in `tailwind.config.mjs`
   - Add your logo to `public/`

2. **Deploy to Vercel**
   - See [Deployment Guide](./DEPLOYMENT.md)

3. **Set up monitoring**
   - Add error tracking (Sentry)
   - Set up analytics (Google Analytics)

4. **Contribute**
   - Read [Contributing Guide](../CONTRIBUTING.md)
   - Check open issues
   - Submit pull requests

---

## Useful Commands

```bash
# Development
npm run dev              # Start dev server
npm run build            # Build for production
npm start                # Start production server

# Code Quality
npm run lint             # Run ESLint
npm run lint:fix         # Fix linting errors
npm run format           # Format code with Prettier

# Maintenance
npm update               # Update dependencies
npm audit                # Check for vulnerabilities
npm audit fix            # Fix vulnerabilities
```

---

## Getting Help

If you encounter issues:

1. Check [FAQ](./FAQ.md)
2. Search [GitHub Issues](https://github.com/yourusername/ai-logo/issues)
3. Ask in [Discussions](https://github.com/yourusername/ai-logo/discussions)
4. Email: support@your-domain.com

---

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Clerk Documentation](https://clerk.com/docs)
- [Firebase Documentation](https://firebase.google.com/docs)
- [Gemini AI Documentation](https://ai.google.dev/docs)

---

**Congratulations! 🎉**

You've successfully set up AI Logo Maker. Start creating amazing logos!
