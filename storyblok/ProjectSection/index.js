import { storyblokEditable } from "@storyblok/react";
import Link from "next/link";
import RichText from "../../components/RichText";
import { Button } from "../../components/Button";

const Projects = ({ blok }) => {
  const editable = storyblokEditable(blok);
  const { title, description, buttons, projects } = blok;

  const projectsChunks = [
    projects.slice(0, Math.ceil(projects.length / 2)), // array of items from index 0 -> half
    projects.slice(Math.ceil(projects.length / 2)), // array of items from index half -> end
  ];

  return (
    <section {...editable} className="py-12 md:py-20">
      <div className="container">
        {title || description.content[0].content ? (
          <div className="mx-auto mb-12 max-w-5xl text-center lg:mb-20">
            <h2
              {...editable}
              className="mb-8 text-3xl font-normal leading-none tracking-tight text-gray-900 dark:text-gray-50 md:text-4xl lg:text-5xl"
            >
              {title}
            </h2>

            <RichText
              {...editable}
              data={description}
              className="mb-12 text-lg font-light text-gray-700 dark:text-gray-200 md:text-xl lg:text-2xl"
            />
          </div>
        ) : null}

        <div className="mx-auto mb-12 flex max-w-7xl flex-wrap gap-16 md:flex-nowrap md:items-center lg:mb-20 lg:gap-24">
          {projectsChunks.map((items, chunkIndex) => (
            <div
              key={chunkIndex}
              className="grid w-full gap-16 md:w-1/2 md:gap-48"
            >
              {items.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          ))}
        </div>

        {buttons.length ? (
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {buttons.map((button, index) => (
              <Button key={index} link={button.link} style={button.style}>
                {button.label}
              </Button>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default Projects;

const ProjectCard = ({ project }) => {
  if (!project.content) return null;
  const { title, showcase_image } = project.content;

  return (
    <div className="grid gap-6">
      <img
        src={showcase_image.filename}
        alt={showcase_image.alt}
        width={720}
        height={680}
      />

      <div className="flex items-center justify-between gap-6">
        <p className="text-xl">{title}</p>
        <Link
          href={project.full_slug}
          className="btn btn-secondary btn-lg flex-min"
        >
          Case Study
        </Link>
      </div>
    </div>
  );
};
