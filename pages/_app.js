import { storyblokInit, apiPlugin } from '@storyblok/react'
import '../styles/globals.css'

storyblokInit({
  accessToken: process.env.storyblokApiToken,
  use: [apiPlugin],
})

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
