import dynamic from "next/dynamic";

import Features from "./sections/Features";

export const components = {
  // Page Sections
  blog_section: dynamic(() => import("./sections/BlogSection")),
  call_to_action: dynamic(() => import("./sections/CallToAction")),
  contact_form: dynamic(() => import("./sections/Contact")),
  content_section: dynamic(() => import("./sections/ContentSection")),
  features: Features,
  grid: dynamic(() => import("./sections/Grid")),
  hero: dynamic(() => import("./sections/Hero")),
  image_section: dynamic(() => import("./sections/ImageSection")),
  logos: dynamic(() => import("./sections/Logos")),
  newsletter_section: dynamic(() => import("./sections/Newsletter")),
  project_section: dynamic(() => import("./sections/ProjectSection")),
  team: dynamic(() => import("./sections/Team")),
  // testimonial_section: dynamic(() => import("./sections/Testimonial")),
  testimonial_section: () => null,

  // Page Templates
  blog_post: dynamic(() => import("./templates/BlogPost")),
  blog_root: dynamic(() => import("./templates/BlogRoot")),
  page: dynamic(() => import("./templates/Page")),
  project: dynamic(() => import("./templates/Project")),
  team_member: dynamic(() => import("./templates/TeamMember")),
};
