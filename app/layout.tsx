import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const publicSans = Public_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ruk Keosung | Web Developer Portfolio",
  description:
    "Explore the portfolio of Ruk Keosung, a full-stack web developer specializing in Next.js, React, Node.js, and modern web technologies. View projects, skills, and contact information.",
  keywords:
    "Ruk Keosung, web developer, full-stack developer, Next.js, React, JavaScript, portfolio, frontend, backend, software engineer",
  authors: [{ name: "Ruk Keosung", url: "https://ruknakub.com" }],
  creator: "Ruk Keosung",
  openGraph: {
    title: "Ruk Keosung | Web Developer Portfolio",
    description:
      "Discover Ruk Keosung’s web development projects and skills. Expert in building scalable and modern web applications.",
    url: "https://ruknakub.com",
    siteName: "Ruk Keosung Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${publicSans.variable} antialiased`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
