import type { Metadata } from "next";
import { Sora, Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "./components/Header";

const fontSans = Sora({
  variable: "--font-sans",
  weight: ["400", "500", "600"],
  subsets: ["latin", "latin-ext"],
});

const fontDisplay = Space_Grotesk({
  variable: "--font-display",
  weight: ["500", "600", "700"],
  subsets: ["latin", "latin-ext"],
});

const fontMono = Space_Mono({
  variable: "--font-mono",
  weight: ["400", "700"],
  subsets: ["latin", "latin-ext"],
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
      <body
        className={`${fontSans.variable} ${fontDisplay.variable} ${fontMono.variable} font-sans antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
