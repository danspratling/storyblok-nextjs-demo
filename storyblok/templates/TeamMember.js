import PeopleHero from "../../components/PeopleHero";
import BlogList from "../../components/BlogList";

const TeamMember = ({ blok }) => {
  return (
    <main>
      <PeopleHero blok={blok} />

      <BlogList />

      {/* {blok.body.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))} */}
    </main>
  );
};

export default TeamMember;
