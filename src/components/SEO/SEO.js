import Head from 'next/head';

const SEO = ({ title, description, image }) => {
  const siteName = "Elegant Socks - Текстильная фабрика";
  const siteUrl = "https://www.elegant-socks.kg/";

  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={description} />
      <meta name="keywords" content="Elegant socks, ELEGANT SOCKS, elegant-socks, nosoc, швейная фабрика, Швейная Фабрика, Шамшиев Замирбек, Шамшиев Белек, текстильная фабрика, текстиль, самая лучшая швейная фабрика, швейная фабрика дача-суу" />
      <meta name="author" content="Elegant Socks" />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content="website" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:card" content="summary" />
      <title>{title}</title>
    </Head>
  );
};

export default SEO;
