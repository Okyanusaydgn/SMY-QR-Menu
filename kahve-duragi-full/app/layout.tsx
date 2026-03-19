import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  style: ["normal", "italic"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Kahve Durağı — Dijital Menü",
  description: "El yapımı kahveler, taze sandviçler ve özel tatlılar.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={`${outfit.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased bg-[#faf8f4]">{children}</body>
    </html>
  );
}
