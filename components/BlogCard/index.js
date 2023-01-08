import { useContext } from "react";
import { format } from "date-fns";
import Link from "next/link";
import { GlobalContext } from "../../context/GlobalContext";
import Image from "../Image";

const BlogCard = ({ post, vertical = false }) => {
  const { content, first_published_at, full_slug } = post;
  const { title, description, featured_image, category } = content;
  const { teamMembers } = useContext(GlobalContext);
  const authors = teamMembers.filter((t) => content.authors.includes(t.uuid));

  return (
    <div
      className={`grid place-content-start gap-8 ${
        !vertical && "xl:grid-cols-2"
      }`}
    >
      <Link href={full_slug}>
        <Image
          src={featured_image.filename}
          alt={featured_image.alt}
          width={456}
          height={300}
        />
      </Link>
      <div className="py-4">
        <Link href={full_slug}>
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
            {category}
          </p>

          <h2 className="mb-3 text-2xl">{title}</h2>
          <p className="mb-5 text-lg font-light text-gray-700 line-clamp-3 dark:text-gray-300">
            {description}
          </p>
        </Link>

        <div className="flex items-center gap-3">
          <Image
            src={authors[0].content.avatar.filename}
            alt={authors[0].content.avatar.alt}
            width={48}
            height={48}
            className="rounded-full"
          />
          <div>
            {authors[0].content.name}

            {first_published_at && (
              <p className="text-gray-600 dark:text-gray-400">
                {format(
                  new Date(first_published_at), // ?? first_publication_date,
                  "d MMMM, yyyy"
                )}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
