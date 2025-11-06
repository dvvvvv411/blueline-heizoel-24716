
export const companyStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "NW-Heizöl",
  "alternateName": "NW Trading und Service GmbH",
  "url": "https://nw-heizoel.de",
  "logo": "/lovable-uploads/treffer-logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "email": "info@nw-heizoel.de",
    "availableLanguage": "German"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Gundhofstr. 9",
    "addressLocality": "Frankfurt a. Main",
    "postalCode": "60528",
    "addressCountry": "DE"
  },
  "foundingDate": "1975",
  "numberOfEmployees": "10-50",
  "description": "Premium Heizöl ab 70 Cent pro Liter mit kostenloser Lieferung ab 2.000L deutschlandweit.",
  "areaServed": {
    "@type": "Country",
    "name": "Germany"
  },
  "makesOffer": {
    "@type": "Offer",
    "itemOffered": {
      "@type": "Product",
      "name": "Heizöl",
      "description": "Premium Heizöl für Privat- und Geschäftskunden"
    },
    "price": "0.70",
    "priceCurrency": "EUR",
    "availability": "https://schema.org/InStock"
  }
};

export const localBusinessStructuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "NW-Heizöl",
  "image": "/lovable-uploads/treffer-logo.png",
  "@id": "https://nw-heizoel.de",
  "url": "https://nw-heizoel.de",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Gundhofstr. 9",
    "addressLocality": "Frankfurt a. Main",
    "postalCode": "60528",
    "addressCountry": "DE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 50.1109,
    "longitude": 8.6821
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday", 
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    "opens": "08:00",
    "closes": "17:00"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "100000"
  }
};
