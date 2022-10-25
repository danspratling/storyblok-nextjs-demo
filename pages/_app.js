import { storyblokInit, apiPlugin } from '@storyblok/react'
import '../styles/globals.css'

import Hero from '../components/Hero'
import Feature from '../components/Feature'
import Grid from '../components/Grid'
import Page from '../components/Page'
import Teaser from '../components/Teaser'

const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
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
