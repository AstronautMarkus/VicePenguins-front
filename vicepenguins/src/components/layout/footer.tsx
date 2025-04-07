import { Link } from "react-router-dom"
import { Globe, Users, ShoppingCart, Settings } from "lucide-react"

export default function Footer() {
  return (
    <footer className="mt-8 bg-[#171a21] px-6 py-4 text-xs text-gray-400">
      <div className="container mx-auto">
        <div className="mb-4 flex flex-col md:flex-row items-center justify-between border-b border-gray-700 pb-4">
          <div className="flex flex-wrap justify-center md:justify-start space-x-6 mb-4 md:mb-0">
            <Link to="/" className="flex items-center hover:text-white">
              <Globe className="mr-1 h-4 w-4" />
              <span>Inicio</span>
            </Link>
            <Link to="#" className="flex items-center hover:text-white">
              <Users className="mr-1 h-4 w-4" />
              <span>Mods</span>
            </Link>
            <Link to="#" className="flex items-center hover:text-white">
              <ShoppingCart className="mr-1 h-4 w-4" />
              <span>Skins</span>
            </Link>
            <Link to="#" className="flex items-center hover:text-white">
              <Settings className="mr-1 h-4 w-4" />
              <span>Mapas</span>
            </Link>
          </div>
          <div className="text-center md:text-right">
            © {new Date().getFullYear()} Reyes&Friends, todos los derechos reservados.
          </div>
        </div>
        <p className="text-center md:text-left">
          Este proyecto fue creado sin fines de lucro, cualquier contribución es bienvenida.
        </p>
      </div>
    </footer>
  )
}

