import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Avusturya Sineklik - Üreticiden Kapınıza Teslim",
  description: "Avusturya sineklik, plise sineklik, jaluzi perde üreticiden. 4-8 gün kapınıza teslim. Demonte paket, ölçüye özel üretim. Bayilik imkanı.",
  keywords: "Avusturya sineklik, plise sineklik, jaluzi perde, honeycomb perde, zip perde, sineklik avusturya",
  openGraph: {
    title: "Avusturya Sineklik - Üreticiden Kapınıza Teslim",
    description: "Avusturya sineklik, plise sineklik, jaluzi perde üreticiden. 4-8 gün kapınıza teslim.",
    url: "https://sineklikavusturya.com.tr",
    siteName: "Sineklik Avusturya",
    locale: "tr_TR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
