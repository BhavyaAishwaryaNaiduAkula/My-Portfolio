import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { personalData } from "@/data/portfolio";

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
        {/* Dynamic Background Effects */}
        <div className="fixed inset-0 z-[-1] pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-purple-900/20 blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-cyan-900/20 blur-[120px]" />
        </div>
        
        {children}
      </body>
    </html>
  );
}
