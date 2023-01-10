import { storyblokEditable } from "@storyblok/react";
import RichText from "../RichText";
import Image from "../Image";

const PeopleHero = ({ blok }) => {
  const { name, role, location, pronouns, profile_picture, bio } = blok;
  const editable = storyblokEditable(blok);

  return (
    <>
      <section
        {...editable}
        className="min-h-[24rem] bg-gradient-to-br from-white to-gray-200 py-12 dark:bg-gradient-to-tr dark:from-gray-900 dark:to-gray-700 md:py-20"
      >
        <div className="container relative">
          <div className="grid-cols-2 md:grid">
            <div>
              <h1
                {...editable}
                className="mb-8 text-5xl font-normal leading-none tracking-tight text-gray-900 dark:text-gray-50 md:text-6xl lg:text-7xl"
              >
                {name}
              </h1>

              <div className="grid gap-4">
                <div className="inline-flex items-baseline gap-4">
                  <p
                    {...editable}
                    className="text-xl font-light text-gray-700 dark:text-gray-200 md:text-2xl lg:text-3xl"
                  >
                    {role}
                  </p>

                  <p
                    {...editable}
                    className="font-light text-gray-700 dark:text-gray-200 lg:text-lg"
                  >
                    {pronouns}
                  </p>
                </div>

                <p
                  {...editable}
                  className="font-light text-gray-700 dark:text-gray-200 md:text-lg lg:text-xl"
                >
                  {location}
                </p>
              </div>
            </div>
            {profile_picture?.filename && (
              <div className="top-0 right-0 mt-4 text-right lg:absolute lg:mt-0">
                <Image
                  {...editable}
                  src={profile_picture.filename}
                  alt={profile_picture.alt}
                  width={420}
                  height={480}
                  className="max-w-full object-cover shadow-2xl sm:max-w-xs xl:max-w-none"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {bio?.content.length && (
        <section className="pt-12 pb-8 md:pt-20">
          <div className="container">
            <RichText
              {...editable}
              data={bio}
              className="prose-lg max-w-3xl font-light text-gray-700 dark:text-gray-200 md:text-xl 2xl:max-w-4xl"
            />
          </div>
        </section>
      )}
    </>
  );
};

export default PeopleHero;
