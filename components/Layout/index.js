// import { useState, useEffect } from 'react'
// import { useRouter } from 'next/router'
// import { GlobalProvider } from "../../context/GlobalContext";
import { Header } from '../Header'
// import { Footer } from "../Footer";
// import { Seo } from "../SEO";

export const Layout = ({ children, ...props }) => {
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
      {/* <GlobalProvider globals={{ socials, ...provider }}> */}
      {/* <Seo {...seo} /> */}
      <Header logo={props.header_logo} nav={props.header_nav} buttons={props.header_buttons} />
      {/* {renderThemechanger()} */}
      {children}
      {/* <Footer {...footer.data} /> */}
      {/* {isPreview ? (
        <a
          className="fixed bottom-0 right-0 m-6 bg-white border-2 border-black shadow-lg btn btn-accent hover:bg-black hover:text-white"
          href="/api/exit-preview"
        >
          Exit Preview
        </a>
      ) : null} */}

      {/* </GlobalProvider> */}
    </>
  )
}
