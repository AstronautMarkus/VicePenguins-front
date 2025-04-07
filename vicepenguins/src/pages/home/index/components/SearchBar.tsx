import { Search } from 'lucide-react';

export function SearchBar() {
  return (
    <div className="mb-4 flex">
      <div className="flex flex-1 items-center rounded-l bg-[#4c5844] px-3">
        <Search className="h-4 w-4 text-gray-400" />
        <input type="text" placeholder="buscar un mod" className="w-full bg-transparent px-2 py-1 text-sm text-white placeholder-gray-400 focus:outline-none"/>
      </div>
      <button className="rounded-r bg-[#4c6b22] px-4 py-1 text-sm text-white hover:bg-[#5c7e10]">
        Buscar
      </button>
    </div>
  );
}
