import { asDate } from "@prismicio/helpers";
import { format } from "date-fns";
import { RichText } from "../RichText";
import { Image } from "../Image";
import { Link } from "../Link";

const BlogCard = ({ post, vertical = false }) => {
  const {
    featuredImage,
    title,
    description,
    author,
    publishDate,
    first_publication_date,
    category,
  } = post.data;

  return (
    <div
      className={`grid gap-8 place-content-start ${
        !vertical && "xl:grid-cols-2"
      }`}
    >
      <Link href={post}>
        <Image {...featuredImage} width={456} height={300} />
      </Link>
      <div className="py-4">
        <Link href={post}>
          <RichText
            field={category?.data?.title}
            plainText
            as="p"
            className="mb-2 text-sm text-gray-500 dark:text-gray-400"
          />

          <RichText field={title} plainText as="h2" className="mb-3 text-2xl" />
          <RichText
            field={description}
            plainText
            as="p"
            className="mb-5 text-lg font-light text-gray-700 dark:text-gray-300 line-clamp-3"
          />
        </Link>

        <Link href={author} className="flex items-center gap-3">
          <Image
            {...author.data.avatar}
            width={48}
            height={48}
            className="rounded-full"
          />
          <div>
            <RichText field={author.data.name} plainText as="p" />

            <p className="text-gray-600 dark:text-gray-400">
              {format(
                asDate(publishDate) ?? first_publication_date,
                "d MMMM, yyyy"
              )}
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
