import { Poppins } from "next/font/google";
import "./globals.css";
import Provider from "./provider";
import { ClerkProvider } from "@clerk/nextjs";


const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "700"],  // Specify the desired font weights
});


export const metadata = {
  title: "AI Logo Maker - Generate Professional Logos with AI",
  description: "Create unique, professional logos for your brand using AI. Powered by Google Gemini AI. Fast, easy, and customizable logo generation.",
  keywords: ["AI logo maker", "logo generator", "AI design", "brand identity", "logo creation", "artificial intelligence"],
  authors: [{ name: "Your Name" }],
  creator: "Your Name",
  publisher: "AI Logo Maker",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-domain.vercel.app",
    title: "AI Logo Maker - Generate Professional Logos with AI",
    description: "Create unique, professional logos for your brand using AI",
    siteName: "AI Logo Maker",
    images: [
      {
        url: "/logo2.png",
        width: 1200,
        height: 630,
        alt: "AI Logo Maker",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Logo Maker - Generate Professional Logos with AI",
    description: "Create unique, professional logos for your brand using AI",
    images: ["/logo2.png"],
    creator: "@yourhandle",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
      className={poppins.className}

      >
        <Provider>
        {children}
        </Provider>
      </body>
    </html>
    </ClerkProvider>
  );
}