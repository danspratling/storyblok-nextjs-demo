import dynamic from "next/dynamic";

export const components = {
  // Page Sections
  blog_section: dynamic(() => import("./BlogSection")),
  contact_form: dynamic(() => import("./Contact")),
  content_section: dynamic(() => import("./ContentSection")),
  features: dynamic(() => import("./Features")),
  grid: dynamic(() => import("./Grid")),
  hero: dynamic(() => import("./Hero")),
  image_section: dynamic(() => import("./ImageSection")),
  logos: dynamic(() => import("./Logos")),
  newsletter_section: dynamic(() => import("./Newsletter")),
  project_section: dynamic(() => import("./ProjectSection")),
  team: dynamic(() => import("./Team")),
  // testimonial_section: dynamic(() => import("./Testimonial")),
  text_section: dynamic(() => import("./TextSection")),

  // Templates
  blog_root: dynamic(() => import("./BlogRoot")),
  page: dynamic(() => import("./Page")),
  project: dynamic(() => import("./Project")),
  team_member: null, // We have a team_member template but the page is handled directly so no component needed
};
