import path from "path";
import Head from "next/head";

export const Seo = ({ seo }) => {
  const {
    title,
    description,
    image,
    url,
    article,
    published,
    updated,
    author,
    lang,
    cardType,
  } = seo;
  const absoluteUrl = path.join("https://skyward.digital", url ? url : "");

  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta lang={lang} />
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      <link rel="canonical" href={absoluteUrl} />

      {/* OpenGraph */}
      {lang && <meta property="og:locale" content={lang} />}
      <meta property="og:type" content={article ? "article" : "website"} />
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      <meta property="og:url" content={absoluteUrl} />
      <meta property="og:site_name" content="Skyward" />
      {/* <meta property="article:publisher" content="https://www.facebook.com/skywarddigital" /> */}
      {updated && <meta property="og:updated_time" content={updated} />}
      {image?.url && <meta property="og:image" content={image.url} />}
      {image?.url && (
        <meta property="og:image:secure_url" content={image.url} />
      )}
      {image?.url && title && <meta property="og:image:alt" content={title} />}
      {image?.url && (
        <meta property="og:image:width" content={image.dimensions.width} /> //1200 preferred
      )}
      {image?.url && (
        <meta property="og:image:height" content={image.dimensions.height} /> // 630 preferred
      )}
      {image?.url && <meta property="og:image:type" content="image/jpeg" />}
      {published && (
        <meta property="article:published_time" content={published} />
      )}
      {updated && <meta property="article:modified_time" content={updated} />}

      {/* Twitter */}
      <meta name="twitter:card" content={cardType ?? "summary_large_image"} />
      {title && <meta name="twitter:title" content={title} />}
      {description && <meta name="twitter:description" content={description} />}
      {author && <meta name="twitter:site" content="@SkywardAgency" />}
      {author && (
        <meta name="twitter:creator" content={author || "@SkywardAgency"} />
      )}
      {image?.url && <meta name="twitter:image" content={image.url} />}
      {image?.url && title && <meta name="twitter:image:alt" content={title} />}
    </Head>
  );
};
