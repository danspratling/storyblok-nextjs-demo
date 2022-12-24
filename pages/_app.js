import { storyblokInit, apiPlugin } from "@storyblok/react";
import "../styles/globals.css";

import { components } from "../storyblok";

storyblokInit({
  accessToken: process.env.storyblokApiToken,
  use: [apiPlugin],
  components,
});

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
