import type { Metadata } from "next";
import { Outfit, Fira_Code } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";
import { Navbar } from "./components/Navbar";
import { MusicPlayer } from "./components/MusicPlayer";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const firaCode = Fira_Code({
  weight: ["400", "700"],
  variable: "--font-fira-code",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Raffat Hammed Issaka | Full Stack & Mobile Developer",
  description: "Portfolio of Raffat Hammed Issaka — Full Stack & Mobile Developer specializing in Flutter, FastAPI, React, and scalable multi-platform systems.",
  keywords: ["Raffat Hammed Issaka", "Full Stack Developer", "Flutter Developer", "FastAPI", "React", "Next.js", "Ghana", "Portfolio"],
  authors: [{ name: "Raffat Hammed Issaka" }],
  creator: "Raffat Hammed Issaka",
  openGraph: {
    type: "website",
    title: "Raffat Hammed Issaka | Full Stack & Mobile Developer",
    description: "Portfolio of Raffat Hammed Issaka — Full Stack & Mobile Developer specializing in Flutter, FastAPI, React, and scalable multi-platform systems.",
    siteName: "Raffat's Portfolio",
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${outfit.variable} ${firaCode.variable} antialiased selection:bg-primary selection:text-primary-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="noise" />
          <Navbar />
          <MusicPlayer />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
