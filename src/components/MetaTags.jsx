import meta_data from "../data/meta.json";

export default function MetaTags() {
  return (
    <head>
      {/* <!-- Standard favicon --> */}
      <link rel="icon" type="image/x-icon" href="/favicon/favicon.ico" />

      {/* <!-- PNG favicons for better quality --> */}
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />

      {/* <!-- Apple touch icon --> */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />

      {/* <!-- Android --> */}
      <link rel="manifest" href="/favicon/site.webmanifest" />

      {/* General Meta Tags */}
      <title>{meta_data.general.title}</title>
      <meta name="title" content={meta_data.general.title} />
      <meta name="description" content={meta_data.general.description} />
      <meta name="keywords" content={meta_data.general.keywords} />
      <meta name="robots" content={meta_data.general.robots} />
      <meta name="language" content={meta_data.general.language} />
      <meta name="author" content={meta_data.general.author} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={meta_data.openGraph.type} />
      <meta property="og:url" content={meta_data.openGraph.url} />
      <meta property="og:title" content={meta_data.openGraph.title} />
      <meta
        property="og:description"
        content={meta_data.openGraph.description}
      />
      <meta property="og:image" content={meta_data.openGraph.image} />
      <meta
        property="og:image:secure_url"
        content={meta_data.openGraph.imageSecureUrl}
      />
      <meta
        property="og:image:width"
        content={meta_data.openGraph.imageWidth}
      />
      <meta
        property="og:image:height"
        content={meta_data.openGraph.imageHeight}
      />
      <meta property="og:site_name" content={meta_data.openGraph.siteName} />
      <meta property="og:locale" content={meta_data.openGraph.locale} />

      {/* Twitter */}
      <meta property="twitter:card" content={meta_data.twitter.card} />
      <meta property="twitter:url" content={meta_data.twitter.url} />
      <meta property="twitter:title" content={meta_data.twitter.title} />
      <meta
        property="twitter:description"
        content={meta_data.twitter.description}
      />
      <meta property="twitter:image" content={meta_data.twitter.image} />
      <meta property="twitter:creator" content={meta_data.twitter.creator} />
      <meta property="twitter:site" content={meta_data.twitter.site} />

      {/* LinkedIn */}
      <meta property="linkedin:owner" content={meta_data.linkedin.owner} />

      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content={meta_data.additionalSEO.themeColor} />
      <meta
        name="msapplication-TileColor"
        content={meta_data.additionalSEO.msapplicationTileColor}
      />
      <meta
        name="msapplication-config"
        content={meta_data.additionalSEO.msapplicationConfig}
      />

      {/* Canonical URL */}
      <link rel="canonical" href={meta_data.canonicalUrl} />

      {/* Preconnect for Performance */}
      {meta_data.preconnectUrls.map((url, index) => (
        <link key={index} rel="preconnect" href={url} />
      ))}
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />

      {/* Schema.org for Google */}
      <script type="application/ld+json">
        {JSON.stringify(meta_data.schemaOrg, null, 2)}
      </script>
    </head>
  );
}
