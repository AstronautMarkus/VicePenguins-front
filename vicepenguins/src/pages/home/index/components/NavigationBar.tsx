import { Link } from "react-router-dom";

export function NavigationBar() {
  return (
    <div className="mb-6 flex space-x-1 rounded bg-[#4c5844] p-1 text-sm overflow-x-auto">
      <Link className="rounded hover:bg-[#394233] px-4 py-2 whitespace-nowrap" to="/mods">Últimos mods</Link>
      <Link className="rounded hover:bg-[#394233] px-4 py-2 whitespace-nowrap" to="/skins">Últimas skins</Link>
      <Link className="rounded hover:bg-[#394233] px-4 py-2 whitespace-nowrap" to="/about">Sobre el proyecto</Link>
      <Link className="rounded hover:bg-[#394233] px-4 py-2 whitespace-nowrap" to="/faq">FAQ</Link>
      <Link className="rounded hover:bg-[#394233] px-4 py-2 whitespace-nowrap" to="/contact">Contáctanos</Link>
      <Link className="rounded hover:bg-[#394233] px-4 py-2 whitespace-nowrap" to="/donate">Donar</Link>
      <Link className="rounded hover:bg-[#394233] px-4 py-2 whitespace-nowrap" to="/discord">Discord</Link>
    </div>
  );
}
