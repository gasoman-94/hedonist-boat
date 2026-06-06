import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

interface SEOProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
}

export function SEO({ title, description, canonicalUrl }: SEOProps) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language || "en";

  const siteName = "Hedonist Yachting Poreč";
  const defaultTitle = `${siteName} | Boat Rentals & Private Excursions`;
  const defaultDesc = t(
    "hero.subtitle",
    "Exclusive fleet. Unforgettable excursions. Discover the raw beauty of the Istrian coast from our base in Poreč, with absolute luxury and a bespoke approach to maritime exploration.",
  );

  const finalTitle = title ? `${title} | ${siteName}` : defaultTitle;
  const finalDesc = description || defaultDesc;

  // Use the canonical production domain for all SEO tags
  const origin = "https://hedonistboat.com";
  const url = canonicalUrl ? `${origin}${canonicalUrl}` : `${origin}/${lang}`;

  // JSON-LD structured data for local business / boat rental
  const schema = {
    "@context": "https://schema.org",
    "@type": "BoatRental",
    name: siteName,
    description: finalDesc,
    url: origin,
    email: "hedonistboat@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Poreč",
      addressRegion: "Istria",
      addressCountry: "HR",
    },
  };

  const languages = ["en", "de", "hr", "it", "nl", "sl"];

  return (
    <Helmet>
      <html lang={lang} />
      <title>{finalTitle}</title>
      <meta name="description" content={finalDesc} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDesc} />
      <meta property="og:image" content={`${origin}/images/Hedonist_final-38.webp`} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDesc} />
      <meta name="twitter:image" content={`${origin}/images/Hedonist_final-38.webp`} />

      {/* Canonical Link */}
      <link rel="canonical" href={url} />

      {/* Hreflang alternates for Multilingual SEO */}
      {languages.map((l) => (
        <link key={l} rel="alternate" hrefLang={l} href={`${origin}/${l}`} />
      ))}
      <link rel="alternate" hrefLang="x-default" href={`${origin}/en`} />

      {/* Structured Data */}
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}
