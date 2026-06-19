import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://raphaelbessin.com"),
  title: "Raphaël Bessin - Software Engineer",
  description:
    "Computer Science student at Northeastern University Honors College building well-crafted, genuinely useful software.",
  openGraph: {
    title: "Raphaël Bessin - Software Engineer",
    description:
      "Computer Science student at Northeastern University Honors College building well-crafted, genuinely useful software.",
    siteName: "Raphaël Bessin",
    images: [
      {
        url: "/profile.jpg",
        width: 300,
        height: 300,
        alt: "Raphaël Bessin",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Raphaël Bessin - Software Engineer",
    description:
      "Computer Science student at Northeastern University Honors College building well-crafted, genuinely useful software.",
    images: ["/profile.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
          (function() {
            try {
              var theme = localStorage.getItem('theme');
              if (!theme) {
                theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
              }
              document.documentElement.setAttribute('data-theme', theme);
            } catch (e) {}
          })();
        `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
