import dynamic from "next/dynamic";

export const components = {
  // Page Sections
  blog_section: dynamic(() => import("./sections/BlogSection")),
  contact_form: dynamic(() => import("./sections/Contact")),
  content_section: dynamic(() => import("./sections/ContentSection")),
  features: dynamic(() => import("./sections/Features")),
  grid: dynamic(() => import("./sections/Grid")),
  hero: dynamic(() => import("./sections/Hero")),
  image_section: dynamic(() => import("./sections/ImageSection")),
  logos: dynamic(() => import("./sections/Logos")),
  newsletter_section: dynamic(() => import("./sections/Newsletter")),
  project_section: dynamic(() => import("./sections/ProjectSection")),
  team: dynamic(() => import("./sections/Team")),
  testimonial_section: null,
  // testimonial_section: dynamic(() => import("./sections/Testimonial")),
  text_section: dynamic(() => import("./sections/TextSection")),

  // Templates
  blog_post: dynamic(() => import("./templates/BlogPost")),
  blog_root: dynamic(() => import("./templates/BlogRoot")),
  page: dynamic(() => import("./templates/Page")),
  project: dynamic(() => import("./templates/Project")),
  team_member: dynamic(() => import("./templates/TeamMember")),
};
