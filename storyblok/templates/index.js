import dynamic from "next/dynamic";

export const templates = {
  blog_post: dynamic(() => import("./BlogPost")),
  blog_root: dynamic(() => import("./BlogRoot")),
  page: dynamic(() => import("./Page")),
  project: dynamic(() => import("./Project")),
  team_member: dynamic(() => import("./TeamMember")),
};
