import dynamic from "next/dynamic";

export const sections = {
  // Page Sections
  blog_section: dynamic(() => import("./BlogSection")),
  call_to_action: dynamic(() => import("./CallToAction")),
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
  testimonial_section: () => null,
  text_section: dynamic(() => import("./TextSection")),
};
