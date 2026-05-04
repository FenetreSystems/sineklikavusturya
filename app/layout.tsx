import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Avusturya Sineklik | Üreticiden Kapıya Teslim",
  description: "Avusturya sineklik, plise sineklik, jaluzi perde üreticiden al. 4-8 gün kapıya teslim. Ölçüye özel üretim, demonte paket.",
  keywords: "Avusturya sineklik, plise sineklik, jaluzi perde, Viyana sineklik, Graz sineklik",
  authors: [{ name: "Sineklik Avusturya" }],
  openGraph: {
    title: "Avusturya Sineklik | Üreticiden Kapıya Teslim",
    description: "Avusturya sineklik, plise sineklik, jaluzi perde üreticiden al. 4-8 gün kapıya teslim.",
    url: "https://sineklikavusturya.com.tr",
    siteName: "Sineklik Avusturya",
    locale: "tr_TR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Avusturya Sineklik",
  "description": "Avusturya sineklik, plise sineklik, jaluzi perde üreticiden al. 4-8 gün kapıya teslim.",
  "url": "https://sineklikavusturya.com.tr",
  "telephone": "+905403363873",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Mariahilfer Straße 123",
    "addressLocality": "Viyana",
    "postalCode": "1060",
    "addressCountry": "AT"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 48.1951,
    "longitude": 16.3664
  },
  "areaServed": [
    "Viyana",
    "Graz",
    "Linz",
    "Salzburg",
    "Innsbruck",
    "Klagenfurt"
  ],
  "priceRange": "€€",
  "openingHours": "Mo-Sa 09:00-18:00",
  "sameAs": [
    "https://wa.me/905403363873"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="h-full antialiased">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
