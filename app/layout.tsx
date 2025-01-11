import type { Metadata } from "next";
import "./globals.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

import { SpeedInsights } from "@vercel/speed-insights/next";
import { Quicksand } from "next/font/google";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"], // Add the weights you need
  variable: "--font-roboto",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
  weight: ["300", "400", "500", "600", "700"], // All available weights
});

export const metadata: Metadata = {
  title: "Employ | Jobs",
  description:
    "Jobs & Occupation Service for Afghan people with multiple language versions available for free. Developed by EVEON TEAM",
  openGraph: {
    title: "Employ | Jobs",
    description:
      "Jobs & Occupation Service for Afghan people with multiple language versions available for free. Developed by EVEON TEAM",
    url: "https://www.employ.eveon.io", // Replace with your actual website URL
    type: "website",
  },
  twitter: {
    card: "summary_large_image", // Twitter card type
    title: "Employ | Jobs",
    description:
      "Jobs & Occupation Service for Afghan people with multiple language versions available for free. Developed by EVEON TEAM",
  }, 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="EVEON TEAM" />
        <meta name="description" content={metadata.description} />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&family=Quicksand:wght@400;500&family=Righteous&display=swap"
          rel="stylesheet"
        />
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:type" content={metadata.openGraph.type} />

        {/* Twitter Meta Tags */}
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:card" content={metadata.twitter.card} />
      </head>
      <body
        className={`${roboto.variable} ${quicksand.variable} antialiased overflow-x-hidden`}
      >
        <Header />
        {children}
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
