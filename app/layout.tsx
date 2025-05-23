import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const publicSans = Public_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ruk's Portfolio",
  description: "Gathering my skills and applications",
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
