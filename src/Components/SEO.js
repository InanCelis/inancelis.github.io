import React from "react";
import { Helmet } from "react-helmet";
import DefaultPhoto from "../assets/images/Inan Celis with Laptop.png";

const SEO = ({
  title = "Inan Celis - Full Stack Web Developer",
  description = "Full-stack web developer specializing in React, Vue, Laravel, and WordPress. Building scalable web applications with modern technologies and user-centered design.",
  author = "Inan Celis",
  url = "https://inancelis.com/",
  image = `https://inancelis.com${DefaultPhoto}`,
  type = "website",
  structuredData,
  breadcrumbs,
}) => {
  const siteTitle = type === "article" || title.includes("Inan Celis")
    ? title
    : `${title} | Inan Celis`;

  // Ensure canonical URL always ends with / and remove www.
  let canonicalUrl = url.replace('www.', '');
  canonicalUrl = canonicalUrl.endsWith('/') ? canonicalUrl : `${canonicalUrl}/`;

  // Build BreadcrumbList structured data
  const breadcrumbData = breadcrumbs && breadcrumbs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.url,
    })),
  } : null;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="title" content={siteTitle} />
      <meta name="description" content={description} />
      <meta name="author" content={author} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Inan Celis Portfolio" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content="@inancelis" />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}

      {/* Breadcrumb Structured Data */}
      {breadcrumbData && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
