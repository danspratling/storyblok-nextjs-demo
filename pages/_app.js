import { storyblokInit, apiPlugin } from '@storyblok/react'
import '../styles/globals.css'

import Hero from '../components/Hero'
import Features from '../components/Features'
import Grid from '../components/Grid'
import Page from '../components/Page'
import Projects from '../components/Projects'
import Teaser from '../components/Teaser'

const components = {
  features: Features,
  grid: Grid,
  teaser: Teaser,
  page: Page,
  projects: Projects,
  hero: Hero,
}

storyblokInit({
  accessToken: process.env.storyblokApiToken,
  use: [apiPlugin],
  components,
})

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
