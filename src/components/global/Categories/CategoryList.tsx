import { genNumber } from "@/mocks/files";
import CategoryItem from "./CategoryItem";

const CategoryList = () => {
  const items = genNumber({ min: 3, max: 5 });

  return (
    <>
      {Array.from({ length: items }).map((_, i) => (
        <CategoryItem key={i} />
      ))}
    </>
  );
};

export default CategoryList;
