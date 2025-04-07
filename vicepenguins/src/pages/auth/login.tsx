import type React from "react"
import { useState } from "react"
import { Link } from "react-router-dom"


export default function LoginPage() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    console.log("Login attempt:", { username, password, rememberMe })
  }

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="mx-auto max-w-md">
        <div className="rounded bg-[#171a21] p-6">
          <h2 className="mb-6 text-2xl font-bold text-white">Iniciar sesión</h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="username" className="mb-1 block text-sm">
                Correo electrónico
              </label>
              <input id="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="w-full rounded bg-[#32353c] px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#66c0f4]" required />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="mb-1 block text-sm">
                Contraseña
              </label>
              <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full rounded bg-[#32353c] px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#66c0f4]" required />
            </div>

            <div className="mb-6 flex items-center">
              <input id="remember" type="checkbox" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} className="h-4 w-4 rounded border-gray-300 bg-[#32353c]"
              />
              <label htmlFor="remember" className="ml-2 block text-sm">
                Recuérdame
              </label>
            </div>

            <button type="submit" className="w-full rounded bg-[#5c7e10] py-2 font-medium text-white hover:bg-[#6d9516]">
              Iniciar sesión
            </button>
          </form>

          <div className="mt-6 border-t border-gray-700 pt-4 text-center text-sm">
            <p className="mb-2">
              <Link to="#" className="text-[#66c0f4] hover:underline">
                Olvidé mi contraseña
              </Link>
            </p>
            <p>
              ¿No tienes cuenta?{" "}
              <Link to="/auth/register" className="text-[#66c0f4] hover:underline">
                Regístrate aquí
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

