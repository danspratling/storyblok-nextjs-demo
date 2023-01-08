import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import PeopleHero from "../../components/PeopleHero";
import BlogList from "../../components/BlogList";

const TeamMember = ({ blok, uuid }) => {
  const { blogPosts } = useContext(GlobalContext);

  const postsByAuthor = blogPosts.filter((post) =>
    post.content.authors.includes(uuid)
  );

  return (
    <main>
      <PeopleHero blok={blok} />
      {postsByAuthor ? <BlogList posts={postsByAuthor} /> : null}
      {/* {blok.body.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))} */}
    </main>
  );
};

export default TeamMember;
