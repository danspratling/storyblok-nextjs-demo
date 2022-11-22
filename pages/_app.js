import { storyblokInit, apiPlugin } from "@storyblok/react";
import "../styles/globals.css";

import Features from "../components/Features";
import Grid from "../components/Grid";
import Hero from "../components/Hero";
import Logos from "../components/Logos";
import Page from "../components/Page";
import Projects from "../components/Projects";
import Testimonial from "../components/Testimonial";

const components = {
  features: Features,
  grid: Grid,
  hero: Hero,
  logos: Logos,
  page: Page,
  projects: Projects,
  testimonial: Testimonial,
};

storyblokInit({
  accessToken: process.env.storyblokApiToken,
  use: [apiPlugin],
  components,
});

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
