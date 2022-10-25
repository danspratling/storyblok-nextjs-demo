import Link from 'next/link'
import { storyblokEditable, StoryblokComponent } from '@storyblok/react'
import clsx from 'clsx'

// import { Link } from '../../../../components/Link'
// import { RichText } from '../../../../components/RichText'

const Hero = ({ blok }) => {
  const { title, description, primary_link, primary_link_label, secondary_link, secondary_link_label, alignment } = blok
  const editable = storyblokEditable(blok)
  const isLeftAligned = alignment === 'left'

  return (
    <section {...editable} className='py-12 md:py-20'>
      <div className='container'>
        <div className={clsx('max-w-5xl', isLeftAligned ? 'mx-auto' : 'text-center')}>
          <h1
            {...editable}
            className='mb-8 text-5xl font-normal leading-none tracking-tight text-gray-900 md:text-6xl lg:text-7xl dark:text-gray-50'
          >
            {title}
          </h1>

          <p {...editable} className='text-lg font-light text-gray-700 md:text-xl lg:text-2xl dark:text-gray-200'>
            {description}
          </p>

          <div className={clsx('flex flex-wrap mt-12 gap-3', !isLeftAligned && 'justify-center')}>
            {primary_link.url && (
              <Link {...editable} href={primary_link}>
                <a className='btn btn-primary btn-xl'>{primary_link_label}</a>
              </Link>
            )}

            {secondary_link.url && (
              <Link {...editable} href={blok.secondary_link}>
                <a className='btn btn-secondary btn-xl'>{secondary_link_label}</a>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
