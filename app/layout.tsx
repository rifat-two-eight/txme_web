import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "TxMe - Your All-in-One Solution for Appointments & Payments",
  description: "Book professionals, manage appointments, and handle transactions securely—all from your pocket. Download TxMe today.",
  keywords: ["appointments", "payments", "booking", "service providers", "wallet", "video consultation"],
  authors: [{ name: "TxMe Inc" }],
  openGraph: {
    title: "TxMe - Your All-in-One Solution for Appointments & Payments",
    description: "Book professionals, manage appointments, and handle transactions securely—all from your pocket.",
    type: "website",
    locale: "en_US",
    siteName: "TxMe",
  },
  twitter: {
    card: "summary_large_image",
    title: "TxMe - Your All-in-One Solution for Appointments & Payments",
    description: "Book professionals, manage appointments, and handle transactions securely—all from your pocket.",
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
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}