import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProviders";
import NextTopLoader from "nextjs-toploader";
import Navbar from "@/components/Navbar";
const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Online Food Ordering",
  description: "Online Food Ordering",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        {" "}
        <NextTopLoader color="#E11D48" />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
