import { storyblokEditable, StoryblokComponent } from '@storyblok/react'
import clsx from 'clsx'
import { Button } from '../components/Button'

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
            <Button {...editable} link={primary_link} style='primary'>
              {primary_link_label}
            </Button>
            <Button {...editable} link={secondary_link} style='secondary'>
              {secondary_link_label}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
