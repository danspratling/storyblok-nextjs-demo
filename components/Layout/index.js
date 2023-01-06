import Head from "next/head";
// import { useState, useEffect } from 'react'
// import { useRouter } from 'next/router'
import { GlobalProvider } from "../../context/GlobalContext";
import CallToAction from "../../storyblok/sections/CallToAction";
import { Header } from "../Header";
// import { Footer } from "../Footer";
// import { Seo } from "../SEO";

export const Layout = ({ blok, footerCta, provider, children }) => {
  // const { isPreview } = useRouter();

  //set theme after site mounts
  // const [mounted, setMounted] = useState(false)

  // useEffect(() => {
  //   setMounted(true)
  // }, [])

  // const renderThemechanger = () => {
  //   if (!mounted) return null;
  // };

  return (
    <>
      <GlobalProvider globals={{ ...provider }}>
        {/* <Seo {...seo} /> */}
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header blok={blok} />
        {/* {renderThemechanger()} */}
        {children}

        <CallToAction blok={footerCta} />

        {/* <Footer {...footer.data} /> */}
        {/* {isPreview ? (
        <a
          className="fixed bottom-0 right-0 m-6 bg-white border-2 border-black shadow-lg btn btn-accent hover:bg-black hover:text-white"
          href="/api/exit-preview"
        >
          Exit Preview
        </a>
      ) : null} */}
      </GlobalProvider>
    </>
  );
};
