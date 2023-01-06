import PeopleHero from "../../components/PeopleHero";
import BlogList from "../../components/BlogList";

const TeamMember = ({ blok }) => {
  return (
    <main>
      <PeopleHero blok={blok} />

      {/* This blog list should only show posts from the current author */}
      <BlogList />

      {/* {blok.body.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))} */}
    </main>
  );
};

export default TeamMember;
