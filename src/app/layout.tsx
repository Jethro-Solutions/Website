import type { Metadata } from "next";
import { ibmPlexMono, seasonSerif, aeonik } from "./fonts";
import "./globals.css";
import { ThemeProvider } from "@/lib/theme-provider";

export const metadata: Metadata = {
  title: "Jethro Solutions",
  description: "Financial technology solutions for the modern world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${ibmPlexMono.variable} ${seasonSerif.variable} ${aeonik.variable} font-sans antialiased`}
      >
        <ThemeProvider defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
