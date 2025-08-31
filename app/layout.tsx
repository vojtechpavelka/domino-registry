import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { ThemeProvider } from "next-themes";
import { ModeToggle } from "@/components/mode-toggle";
import { RegistrySetup } from "@/components/registry-setup";

import "./globals.css";

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Domino registry",
  description:
    "Domino component registry allows you to distribute Domino components, hooks, pages, and other files to any React project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={`${interSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <header className="max-w-7xl mx-auto flex items-center py-12">
            <div className="flex flex-col gap-1">
              <Link href="/">
                <h1 className="text-3xl font-bold">Domino registry</h1>
              </Link>
              <p className="text-muted-foreground">
                Domino component registry allows you to distribute Domino
                components, hooks, pages, and other files to any React project
              </p>
            </div>
            <div className="ml-auto flex flex-row gap-2">
              <RegistrySetup />
              <ModeToggle />
            </div>
          </header>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
