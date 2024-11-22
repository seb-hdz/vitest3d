import { genNumber } from "@/mocks/files";

const CategoryItem = () => {
  const items = genNumber({ min: 2, max: 5 });

  return (
    <div className="category">
      <h3 className="text-typography mt-6 mb-4 font-bold ml-4">Categoría 1</h3>
      <div className="flex flex-row gap-x-4 w-full overflow-auto">
        <div />
        {Array.from({ length: items }, (_, i) => (
          <div key={i} className="flex flex-col items-center justify-center">
            <div className="object h-32 w-32 bg-surface-3 rounded-xl" />
            <p className="text-typography text-sm">item {i}</p>
          </div>
        ))}
        <div />
      </div>
    </div>
  );
};

export default CategoryItem;
