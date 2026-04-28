import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { personalData } from "@/data/portfolio";
import BackgroundSystem from "@/components/BackgroundSystem";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${personalData.name} - ${personalData.title}`,
  description: personalData.summary,
  keywords: ["AI Engineer", "Software Developer", "Next.js", "React", "Python", "Machine Learning", "Portfolio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} antialiased bg-[#030014] text-white selection:bg-purple-500/30`}>
        <BackgroundSystem />
        
        {children}
      </body>
    </html>
  );
}
