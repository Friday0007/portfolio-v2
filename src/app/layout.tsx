import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vaibhav.Labs - Full Stack Developer & Designer",
  description:
    "Portfolio of Vaibhav.Labs - Full Stack Developer crafting purposeful digital experiences with clean code and beautiful design.",
  keywords: [
    "portfolio",
    "web developer",
    "full stack",
    "react",
    "next.js",
    "designer",
  ],
  authors: [{ name: "Vaibhav" }],
  icons: {
    icon: "/Favicon.png",
    shortcut: "/Favicon.png",
    apple: "/Favicon.png",
  },
  openGraph: {
    title: "Vaibhav.Labs - Full Stack Developer & Designer",
    description:
      "Crafting purposeful digital experiences with clean code and beautiful design.",
    type: "website",
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
        <link
          href="https://api.fontshare.com/v2/css?f[]=general-sans@200,201,300,301,400,401,500,501,600,601,700,701&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://api.fontshare.com/v2/css?f[]=alpino@300,400,500,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
