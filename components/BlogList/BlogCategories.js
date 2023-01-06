/**
 * A list of category filter buttons that the user can select
 * @param categories
 * @param currentCategory
 * @param setCurrentCategory
 * @param posts
 */
const BlogCategories = ({
  categories,
  currentCategory,
  setCurrentCategory,
  posts,
}) => {
  // Only show categories which have active posts
  const filteredCategories = categories
    .filter((category) =>
      posts.some((post) => post.content.category === category.value)
    )
    .sort((a, b) => {
      if (a.value < b.value) return -1;
      if (a.value > b.value) return 1;
      return 0;
    });

  return (
    <ul className="flex flex-wrap items-center gap-4 lg:flex-nowrap">
      <li>
        <CategoryButton
          active={currentCategory === ""}
          onClick={() => setCurrentCategory("")}
        >
          View All
          <span className="text-gray-500">{posts.length}</span>
        </CategoryButton>
      </li>
      {filteredCategories.map((category) => (
        <li key={category.value}>
          <CategoryButton
            active={currentCategory === category}
            onClick={() => setCurrentCategory(category)}
          >
            {category.name}
            <span className="text-gray-500">
              {
                posts.filter((post) => post.content.category === category.value)
                  .length
              }
            </span>
          </CategoryButton>
        </li>
      ))}
    </ul>
  );
};

export default BlogCategories;

const CategoryButton = ({ active, ...props }) => (
  <button
    className={`btn btn-tertiary whitespace-nowrap rounded-md text-sm ${
      active
        ? "bg-gray-100 dark:bg-gray-800"
        : "text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800"
    }`}
    {...props}
  />
);
