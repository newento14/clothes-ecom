import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { Providers } from "@/redux/provider";


const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lorian Store",
  description: "Clothes store"
};

export default function RootLayout({
                                     children
                                   }: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body className={manrope.className}>
    <Providers>
      <Header />
      {children}
    </Providers>
    </body>
    </html>
  );
}
