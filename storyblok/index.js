import dynamic from "next/dynamic";

export const components = {
  // Sections
  blog_section: dynamic(() => import("./BlogSection")),
  features: dynamic(() => import("./Features")),
  grid: dynamic(() => import("./Grid")),
  hero: dynamic(() => import("./Hero")),
  image_section: dynamic(() => import("./ImageSection")),
  logos: dynamic(() => import("./Logos")),
  projects: dynamic(() => import("./Projects")),
  team: dynamic(() => import("./Team")),
  // testimonial_section: Testimonial,
  text_section: dynamic(() => import("./TextSection")),

  // Templates
  page: dynamic(() => import("./Page")),
  team_member: null, // We have a team_member template but the page is handled directly so no component needed
};
