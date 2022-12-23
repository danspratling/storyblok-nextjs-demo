import { storyblokInit, apiPlugin } from "@storyblok/react";
import "../styles/globals.css";

import Features from "../components/Features";
import Grid from "../components/Grid";
import Hero from "../components/Hero";
import ImageSection from "../components/ImageSection";
import Logos from "../components/Logos";
import Page from "../components/Page";
import Projects from "../components/Projects";
import Testimonial from "../components/Testimonial";
import TextSection from "../components/TextSection";

const components = {
  // Sections
  features: Features,
  grid: Grid,
  hero: Hero,
  image_section: ImageSection,
  logos: Logos,
  projects: Projects,
  project: Page,
  testimonial_section: Testimonial,
  text_section: TextSection,

  // Templates
  page: Page,
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
