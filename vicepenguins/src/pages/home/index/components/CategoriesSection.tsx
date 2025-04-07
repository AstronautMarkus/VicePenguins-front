import { ChevronRight } from 'lucide-react';

export function CategoriesSection() {
  const categories = ["Lorem", "Ipsum", "Dolor", "Sit", "Amet", "Consectetur"];

  return (
    <div>
      <h2 className="mb-2 text-xl font-bold">Buscar mods por categoría</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {categories.map((category) => (
          <div
            key={category}
            className="flex items-center justify-between rounded bg-[#4c5844] p-3 hover:bg-[#394233] cursor-pointer"
          >
            <span>{category}</span>
            <ChevronRight className="h-4 w-4" />
          </div>
        ))}
      </div>
    </div>
  );
}
