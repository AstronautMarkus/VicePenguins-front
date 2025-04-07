import { Link } from "react-router-dom"
import { Download, Menu, X } from "lucide-react"
import { useState } from "react"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-[#171a21] px-6 py-2">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <Link to="/">
            <h1 className="text-2xl font-bold uppercase text-white cursor-pointer">VicePenguins</h1>
          </Link>
          <nav className="hidden md:block">
            <ul className="flex space-x-4 text-sm">
              <li className="hover:text-white cursor-pointer">Mods</li>
              <li className="hover:text-white cursor-pointer">Skins</li>
              <li className="hover:text-white cursor-pointer">Mapas</li>
            </ul>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-1 rounded bg-[#5c7e10] px-3 py-1 text-xs text-white hover:bg-[#6d9516]">
            <Download className="h-3 w-3" />
            <span>GitHub Fork</span>
          </button>
            <Link to="/auth/login" className="text-xs cursor-pointer hover:underline hidden md:inline">
            Iniciar sesión
            </Link>
          <span className="text-xs hidden md:inline">|</span>
          <Link to="/auth/register" className="text-xs cursor-pointer hover:underline hidden md:inline">
            Registrarse
          </Link>
          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden mt-2 bg-[#171a21] p-4">
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Mods</li>
            <li className="hover:text-white cursor-pointer">Skins</li>
            <li className="hover:text-white cursor-pointer">Mapas</li>
          </ul>
          <div className="mt-4 space-y-2 text-xs">
            <Link to="/auth/login" className="block cursor-pointer hover:underline">Iniciar sesión</Link>
            <Link to="/auth/register" className="block cursor-pointer hover:underline">Registrarse</Link>
          </div>
        </div>
      )}
    </header>
  )
}

