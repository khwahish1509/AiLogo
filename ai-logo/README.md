# 🎨 AI Logo Maker

<div align="center">

![AI Logo Maker](./public/logo2.png)

**An intelligent logo generation platform powered by AI**

[![Next.js](https://img.shields.io/badge/Next.js-15.1.6-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0.0-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Firebase](https://img.shields.io/badge/Firebase-11.2.0-FFCA28?style=for-the-badge&logo=firebase)](https://firebase.google.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.1-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

[Demo](https://your-demo-link.vercel.app) • [Report Bug](https://github.com/yourusername/ai-logo/issues) • [Request Feature](https://github.com/yourusername/ai-logo/issues)

</div>

---

## 📋 Table of Contents

- [About](#-about)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Environment Variables](#-environment-variables)
- [Usage](#-usage)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

---

## 🎯 About

AI Logo Maker is a modern web application that leverages artificial intelligence to generate unique, professional logos for businesses and brands. Built with Next.js 15 and powered by Google's Gemini AI, it provides an intuitive interface for creating custom logos with various design styles and color combinations.

### Why AI Logo Maker?

- **AI-Powered Design**: Utilizes Google Gemini AI for intelligent logo generation
- **Multiple Design Styles**: Choose from modern, mascot, sharp-lined, and more
- **Customizable**: Full control over colors, descriptions, and design elements
- **User Authentication**: Secure authentication with Clerk
- **Real-time Generation**: Fast logo creation with instant previews
- **Responsive Design**: Works seamlessly across all devices

---

## ✨ Features

### Core Features

- 🤖 **AI-Powered Logo Generation** - Generate unique logos using Google Gemini AI
- 🎨 **Multiple Design Styles** - Modern, Mascot, Sharp-Lined, and more
- 🌈 **Custom Color Palettes** - Choose from predefined color combinations or create your own
- 💾 **Save & Manage** - Store your generated logos in Firebase
- 🔐 **Secure Authentication** - User authentication powered by Clerk
- 📱 **Responsive Design** - Optimized for desktop, tablet, and mobile
- 🌙 **Dark Mode Support** - Toggle between light and dark themes
- ⚡ **Fast Performance** - Built with Next.js 15 for optimal speed

### Design Options

- Modern Minimalist Logos
- Mascot Character Logos
- Sharp-Lined Geometric Logos
- Vintage/Retro Style Logos
- Abstract Art Logos
- Typography-Based Logos

---

## 🛠 Tech Stack

### Frontend
- **Framework**: [Next.js 15.1.6](https://nextjs.org/) - React framework with App Router
- **UI Library**: [React 19.0.0](https://reactjs.org/) - Latest React with concurrent features
- **Styling**: [Tailwind CSS 3.4.1](https://tailwindcss.com/) - Utility-first CSS framework
- **Components**: [Radix UI](https://www.radix-ui.com/) - Accessible component primitives
- **Icons**: [Lucide React](https://lucide.dev/) & [Heroicons](https://heroicons.com/)
- **Animations**: [Tailwind Animate](https://github.com/jamiebuilds/tailwindcss-animate)

### Backend & Services
- **AI Model**: [Google Gemini AI](https://ai.google.dev/) - Advanced AI for logo generation
- **Authentication**: [Clerk](https://clerk.com/) - Complete user management
- **Database**: [Firebase](https://firebase.google.com/) - Real-time database and storage
- **Image Generation**: [Replicate](https://replicate.com/) - AI model hosting

### Developer Tools
- **Package Manager**: npm
- **Linting**: ESLint
- **Code Formatting**: Prettier (recommended)

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18.0.0 or higher)
- **npm** or **yarn** or **pnpm**
- **Git**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/ai-logo.git
   cd ai-logo
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```bash
   cp .env.example .env.local
   ```
   
   Fill in your API keys (see [Environment Variables](#-environment-variables))

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
ai-logo/
├── app/                          # Next.js App Router
│   ├── _components/              # Shared components
│   ├── _context/                 # React Context providers
│   ├── _data/                    # Static data and constants
│   ├── api/                      # API routes
│   ├── create/                   # Logo creation page
│   ├── dashboard/                # User dashboard
│   ├── generate-logo/            # Logo generation interface
│   ├── globals.css               # Global styles
│   ├── layout.js                 # Root layout
│   ├── page.js                   # Home page
│   └── provider.jsx              # App providers
├── components/                   # Reusable UI components
│   └── ui/                       # shadcn/ui components
├── configs/                      # Configuration files
│   ├── AiModel.jsx               # AI model configuration
│   └── FirebaseConfig.jsx        # Firebase setup
├── lib/                          # Utility functions
│   └── utils.js                  # Helper utilities
├── public/                       # Static assets
│   ├── design_*.png              # Design templates
│   ├── logo.svg                  # App logo
│   └── ...                       # Other assets
├── .env.example                  # Environment variables template
├── .gitignore                    # Git ignore rules
├── components.json               # shadcn/ui config
├── jsconfig.json                 # JavaScript config
├── middleware.js                 # Next.js middleware
├── next.config.mjs               # Next.js configuration
├── package.json                  # Dependencies
├── postcss.config.mjs            # PostCSS config
├── tailwind.config.mjs           # Tailwind CSS config
└── README.md                     # This file
```

---

## 🔐 Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Google Gemini AI
NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key_here

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_firebase_app_id

# Replicate (Optional - for advanced image generation)
REPLICATE_API_TOKEN=your_replicate_api_token
```

### Getting API Keys

- **Gemini AI**: [Get API Key](https://makersuite.google.com/app/apikey)
- **Clerk**: [Sign up for Clerk](https://clerk.com/)
- **Firebase**: [Create Firebase Project](https://console.firebase.google.com/)
- **Replicate**: [Get Replicate Token](https://replicate.com/account/api-tokens)

---

## 💡 Usage

### Creating Your First Logo

1. **Sign Up/Login** - Create an account or sign in
2. **Navigate to Create** - Click on "Create Logo" button
3. **Enter Details**:
   - Brand name
   - Description
   - Choose design style
   - Select color palette
4. **Generate Ideas** - AI will suggest logo concepts
5. **Select & Generate** - Choose your favorite idea and generate
6. **Download** - Save your logo in high resolution

### Dashboard Features

- View all your generated logos
- Download logos in various formats
- Delete unwanted designs
- Track your usage and credits

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Please read [CONTRIBUTING.md](./CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

---

## 📝 License

Distributed under the MIT License. See [LICENSE](./LICENSE) for more information.

---

## 📧 Contact

Your Name - [@yourtwitter](https://twitter.com/yourtwitter) - your.email@example.com

Project Link: [https://github.com/yourusername/ai-logo](https://github.com/yourusername/ai-logo)

---

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/)
- [Google Gemini AI](https://ai.google.dev/)
- [Clerk](https://clerk.com/)
- [Firebase](https://firebase.google.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Lucide Icons](https://lucide.dev/)

---

<div align="center">

**Made with ❤️**

⭐ Star this repo if you find it helpful!

</div>
