import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Satheesh Siva | QA Automation Engineer & Tech Content Creator",
  description: "I build scalable automation frameworks, modern testing solutions, and AI-powered workflows to deliver reliable, high-quality software.",
  openGraph: {
    title: "Satheesh Siva | QA Automation Engineer",
    description: "Portfolio of Satheesh Siva, QA Automation Engineer, Playwright Expert, and AI Enthusiast.",
    url: "https://satheeshsiva.com", // Replace with real URL
    siteName: "Satheesh Siva Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Satheesh Siva | QA Automation Engineer",
    description: "I build scalable automation frameworks, modern testing solutions, and AI-powered workflows.",
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
      className={`${inter.variable} ${firaCode.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">{children}</body>
    </html>
  );
}
