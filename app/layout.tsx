import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "TxMe",
  description: "Book professionals, manage appointments, and handle transactions securely—all from your pocket. Download TxMe today.",
  keywords: ["appointments", "payments", "booking", "service providers", "wallet", "video consultation"],
  authors: [{ name: "TxMe Inc" }],
  
  // Added favicon (using txme.svg from public/ folder)
  icons: {
    icon: "/txme.svg",                    // Default favicon (used in most places)
    shortcut: "/txme.svg",
    apple: "/txme.svg",                   // For iOS devices
  },
  
  
  openGraph: {
    title: "TxMe",
    description: "Book professionals, manage appointments, and handle transactions securely—all from your pocket.",
    type: "website",
    locale: "en_US",
    siteName: "TxMe",
    // Optional: add image later if you have OG image
    // images: "/og-image.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "TxMe - Your All-in-One Solution for Appointments & Payments",
    description: "Book professionals, manage appointments, and handle transactions securely—all from your pocket.",
    // Optional: twitter:image later
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Optional: You can also add it here for extra compatibility */}
        <link rel="icon" href="/txme.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/txme.svg" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}