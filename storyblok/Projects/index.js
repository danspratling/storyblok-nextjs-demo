import { storyblokEditable } from "@storyblok/react";
import Link from "next/link";
import { RichText } from "../../components/RichText";
import { Button } from "../../components/Button";

const Projects = ({ blok }) => {
  const editable = storyblokEditable(blok);
  const { title, description, buttons, projects } = blok;

  return (
    <section className="py-12 md:py-20">
      <div className="container">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="mb-8 text-3xl font-normal leading-none tracking-tight text-gray-900 dark:text-gray-50 md:text-4xl lg:text-5xl">
            {title}
          </h2>

          <RichText
            data={description}
            className="mb-12 text-lg font-light text-gray-700 dark:text-gray-200 md:text-xl lg:text-2xl"
          />
        </div>

        <div className="mx-auto my-12 grid max-w-7xl gap-x-12 gap-y-20 md:mt-24 md:mb-20 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        {buttons.length ? (
          <div className="flex flex-wrap justify-center gap-3">
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
        <RichText data={title} className="text-xl" />
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
