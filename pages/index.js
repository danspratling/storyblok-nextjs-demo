import Head from 'next/head'
import styles from '../styles/Home.module.css'

import { useStoryblokState, getStoryblokApi, StoryblokComponent } from '@storyblok/react'

export default function Home({ story }) {
  story = useStoryblokState(story)

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <StoryblokComponent blok={story.content} />
    </div>
  )
}

export async function getStaticProps() {
  // home is the default slug for the homepage in Storyblok
  let slug = 'home'

  // load the draft version
  let sbParams = {
    version: 'draft', // or 'published'
  }

  const storyblokApi = getStoryblokApi()
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams)

  console.log(data)

  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
    },
    revalidate: 3600, // revalidate every hour
  }
}
