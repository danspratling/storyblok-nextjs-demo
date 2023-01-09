// import { useState, useEffect } from 'react'
// import { useRouter } from 'next/router'
import { GlobalProvider } from "../../context/GlobalContext";
import CallToAction from "../../storyblok/sections/CallToAction";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { Seo } from "../SEO";

export const Layout = ({ story, blok, footerCta, provider, children }) => {
  const author = story.content?.authors?.[0]
    ? provider.teamMembers.find((t) => story.content.authors[0] === t.uuid)
    : null;

  const seo = {
    title: story.content.seo_title || blok.seo_title,
    description: story.content.seo_description || blok.seo_description,
    image: story.content.seo_image || blok.seo_image,
    url: story.full_slug !== "home" ? story.full_slug : "/",
    published: story.first_published_at,
    updated: story.published_at,
    author: author?.content.name,
    lang: story.lang !== "default" ? story.lang : "en",
    article: story.content.component === "blog_post",
  };

  const socials = {
    twitter: blok.twitter,
    // facebook: blok.facebook,
    instagram: blok.instagram,
    linkedin: blok.linkedin,
    github: blok.github,
    dribbble: blok.dribbble,
  };

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
      <GlobalProvider globals={{ ...provider, socials }}>
        <Seo seo={seo} />

        <Header blok={blok} />
        {/* {renderThemechanger()} */}
        {children}

        {footerCta ? <CallToAction blok={footerCta} /> : null}

        <Footer blok={blok} />
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
