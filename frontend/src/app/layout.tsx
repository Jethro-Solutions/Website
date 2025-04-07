import type { Metadata } from "next";
import "./globals.css";
import MainLayout from "@/components/layout/MainLayout";
import { GlobalProvider } from "@/lib/context";

export const metadata: Metadata = {
  title: "Jethro Solutions",
  description: "Technology and Financial Solutions for Modern Businesses",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased bg-background text-text">
        <GlobalProvider>
          <MainLayout>
            {children}
          </MainLayout>
        </GlobalProvider>
      </body>
    </html>
  );
}
