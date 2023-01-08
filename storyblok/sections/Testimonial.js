import { storyblokEditable } from "@storyblok/react";
import Link from "next/link";
import Image from "../../components/Image";
import RichText from "../../components/RichText";

const Testimonial = ({ blok }) => {
  const editable = storyblokEditable(blok);
  const { testimonial } = blok;

  const { quote, author, avatar, role, project } = testimonial[0].content;

  return (
    <section {...editable} className="py-12 md:py-20">
      <div className="container">
        <div className="px-8 py-10 mx-auto bg-gray-100 dark:bg-gray-700 md:p-12">
          <RichText
            data={quote}
            className="text-lg italic font-light text-center md:text-xl"
          />

          <div className="flex flex-wrap items-center justify-center mt-8 text-center gap-4 sm:text-left">
            <div className="flex justify-center w-full sm:w-auto">
              {/* <img
                src={project.content.logo_square.filename}
                alt={project.content.logo_square.alt}
                width={48}
                height={48}
                className="rounded-full bg-white dark:bg-black"
              /> */}
              <Image
                src={avatar.filename}
                alt={avatar.alt}
                width={48}
                height={48}
                className="-ml-3 bg-white rounded-full dark:bg-black"
              />
            </div>

            <div>
              <p className="text-lg font-bold">{author}</p>
              <p className="text-gray-500 dark:text-gray-300">
                {role} at{" "}
                <Link href={project.full_slug}>{project.content.name}</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
