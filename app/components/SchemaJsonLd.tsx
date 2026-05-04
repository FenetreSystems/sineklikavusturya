export default function SchemaJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Sineklik Avusturya",
    "description": "Avusturya sineklik, plise sineklik, jaluzi perde üreticiden. 4-8 gün kapınıza teslim.",
    "url": "https://sineklikavusturya.com.tr",
    "telephone": "+90 540 336 3873",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Vienna",
      "addressCountry": "AT"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Austria"
    },
    "priceRange": "$$",
    "openingHours": "Mo-Sa 09:00-18:00",
    "offers": {
      "@type": "Offer",
      "priceCurrency": "EUR",
      "availability": "https://schema.org/InStock",
      "deliveryLeadTime": {
        "@type": "QuantitativeValue",
        "minValue": 4,
        "maxValue": 8,
        "unitCode": "DAY"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127"
    }
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Avusturya Sineklik",
    "description": "Yüksek kaliteli sineklik sistemleri Avusturya'ya üreticiden teslim.",
    "brand": {
      "@type": "Brand",
      "name": "Sineklik Avusturya"
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "EUR",
      "deliveryLeadTime": "4-8 gün"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Avusturya'ya teslimat süresi nedir?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Türkiye'den Avusturya'ya 4-8 gün içinde adrese kapıya teslim ediyoruz."
        }
      },
      {
        "@type": "Question",
        "name": "Sineklikler nasıl paketlenir?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tüm ürünler demonte paketlenmiş şekilde gönderilir, kurulumu kolaydır."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
