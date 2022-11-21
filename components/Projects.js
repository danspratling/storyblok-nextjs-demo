import Link from 'next/link'
import { RichText } from './RichText'
import { Button } from './Button'

const Projects = ({ blok }) => {
  const { title, description, buttons, projects } = blok
  console.log(blok)

  return (
    <section className='py-12 md:py-20'>
      <div className='container'>
        <div className='max-w-5xl mx-auto text-center'>
          <h2 className='mb-8 text-3xl font-normal leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-gray-50'>
            {title}
          </h2>

          <RichText
            data={description}
            className='mb-12 text-lg font-light text-gray-700 md:text-xl lg:text-2xl dark:text-gray-200'
          />
        </div>

        <div className='mx-auto my-12 md:mt-24 md:mb-20 max-w-7xl grid md:grid-cols-2 gap-x-12 gap-y-20'>
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        {buttons.length && (
          <div className='flex flex-wrap justify-center gap-3'>
            {buttons.map((button, index) => (
              <Button key={index} link={button.link} style={button.style}>
                {button.label}
              </Button>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects

const ProjectCard = ({ project }) => {
  console.log(project)

  return (
    <div className='grid gap-6'>
      <img
        src={project.content.showcase_image.filename}
        alt={project.content.showcase_image.alt}
        width={720}
        height={680}
      />

      <div className='flex items-center justify-between gap-6'>
        <RichText field={project.content.title} plainText as='p' className='text-xl' />
        <Link href={project.full_slug} className='btn btn-secondary btn-lg flex-min'>
          Case Study
        </Link>
      </div>
    </div>
  )
}
