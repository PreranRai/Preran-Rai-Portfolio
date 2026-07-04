import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  title: "Preran Rai | AI Researcher & Full-Stack Developer",
  description: "Building intelligent systems that bridge research and real-world impact.",
  keywords: ["AI Researcher", "Full-Stack Developer", "Machine Learning", "Computer Vision", "Preran Rai"],
  authors: [{ name: "Preran Rai" }],
  creator: "Preran Rai",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Preran Rai | AI Researcher & Full-Stack Developer",
    description: "Building intelligent systems that bridge research and real-world impact.",
    url: siteUrl,
    siteName: "Preran Rai Portfolio",
    images: [
      {
        url: "/images/og-image.jpg", // [TODO: Create and add og-image.jpg in public/images/]
        width: 1200,
        height: 630,
        alt: "Preran Rai Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Preran Rai | AI Researcher & Full-Stack Developer",
    description: "Building intelligent systems that bridge research and real-world impact.",
    images: ["/images/og-image.jpg"],
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-brand-blue/30 selection:text-white transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SmoothScrollProvider>
            {children}
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
