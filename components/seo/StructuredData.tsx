"use client"

import React from 'react'

export function StructuredData() {
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Annota",
    "operatingSystem": "Windows, Linux, Android, iOS",
    "applicationCategory": "NoteTakingApplication",
    "description": "Annota is a secure, local-first note taking and knowledge management tool with end-to-end encryption.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "url": "https://annota.online"
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Annota",
    "url": "https://annota.online",
    "logo": "https://annota.online/assets/logo.png",
    "sameAs": [
      "https://discord.gg/dG5nNJPDAh",
      "https://github.com/iLiranS/Annota"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
    </>
  );
}
