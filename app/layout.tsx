import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "./components/Header";
import { ParticlesBackground } from "./components/ParticlesBackground";

const fontSans = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Andjelko Cvjetkovic",
  description: "Frontend Developer with over 3 years of experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontSans.variable} font-sans antialiased min-h-screen flex flex-col`}>
        <ParticlesBackground />
        <Header />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
