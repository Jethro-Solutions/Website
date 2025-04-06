import type { Metadata } from "next";
import "./globals.css";
import MainLayout from "@/components/layout/MainLayout";
import { GlobalProvider } from "@/lib/context";

export const metadata: Metadata = {
  title: "Jethro Solutions | Technology & Financial Solutions",
  description: "Professional technology and financial solutions for small-medium businesses. Custom development, financial modeling, and business optimization services.",
  keywords: "technology solutions, financial solutions, business optimization, custom development, financial modeling",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased dark:bg-black">
        <GlobalProvider>
          <MainLayout>
            {children}
          </MainLayout>
        </GlobalProvider>
      </body>
    </html>
  );
}
