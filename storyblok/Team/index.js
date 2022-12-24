import { useContext } from "react";
import { storyblokEditable } from "@storyblok/react";
import { GlobalContext } from "../../context/GlobalContext";
import { Button } from "../../components/Button";
import TeamMember from "../../components/TeamMember";

const Team = ({ blok }) => {
  const { title, description, buttons } = blok;
  const editable = storyblokEditable(blok);
  const { teamMembers } = useContext(GlobalContext);

  return (
    <section className="py-12 md:py-20">
      <div className="container">
        <div className="flex flex-wrap justify-between gap-12 md:flex-nowrap">
          <div className="mb-6 mr-auto max-w-5xl lg:mb-12">
            <h2 {...editable} className="mb-5 text-3xl leading-10 lg:text-4xl">
              {title}
            </h2>

            <p
              {...editable}
              className="mb-8 text-xl font-light leading-8 text-gray-500 dark:text-gray-300 lg:text-2xl"
            >
              {description}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:gap-8 xl:grid-cols-5">
          {teamMembers.map((teamMember, index) => (
            <TeamMember key={index} {...teamMember} />
          ))}
        </div>

        {buttons.length ? (
          <div className="justify-baseline flex shrink-0 flex-col items-center gap-3">
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

export default Team;
