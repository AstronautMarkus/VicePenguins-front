"use client"

import type React from "react"
import { useState } from "react"
import { Link } from "react-router-dom"

export default function RegisterPage() {
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [avatar, setAvatar] = useState<File | null>(null)
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Registration attempt:", { email, username, password, avatar })
  }

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    setAvatar(file)
    if (file) {
      const reader = new FileReader()
      reader.onload = () => setAvatarPreview(reader.result as string)
      reader.readAsDataURL(file)
    } else {
      setAvatarPreview(null)
    }
  }

  const clearAvatar = () => {
    setAvatar(null)
    setAvatarPreview(null)
  }

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="mx-auto max-w-lg">
        <div className="rounded bg-[#171a21] p-6">
          <h2 className="mb-6 text-2xl font-bold text-white">Registrarse en VicePenguins</h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="mb-1 block text-sm">
                Correo electrónico
              </label>
              <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full rounded bg-[#32353c] px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#66c0f4]"required />
            </div>

            <div className="mb-4">
              <label htmlFor="username" className="mb-1 block text-sm">
                Elige un nombre de usuario
              </label>
              <input id="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="w-full rounded bg-[#32353c] px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#66c0f4]" required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="mb-1 block text-sm">
                Contraseña
              </label>
              <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full rounded bg-[#32353c] px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#66c0f4]" required/>
            </div>

            <div className="mb-6">
              <label htmlFor="confirm-password" className="mb-1 block text-sm">
                Confirme su contraseña
              </label>
              <input id="confirm-password" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="w-full rounded bg-[#32353c] px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#66c0f4]" required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="avatar" className="mb-1 block text-sm text-center">
                Subir un Avatar (opcional)
              </label>
              <div className="flex flex-col items-center">
                <input id="avatar" type="file" accept="image/*" onChange={handleAvatarChange} className="hidden"/>
                <label htmlFor="avatar" className="cursor-pointer rounded bg-[#32353c] px-3 py-2 text-white hover:bg-[#3a3d44] focus:outline-none focus:ring-2 focus:ring-[#66c0f4]">
                  Subir una imagen
                </label>
                {avatar && (
                  <button type="button" onClick={clearAvatar} className="mt-2 text-xs text-[#66c0f4] hover:underline">
                    Clear
                  </button>
                )}
                {avatarPreview && (
                  <div className="mt-4">
                    <img src={avatarPreview} alt="Avatar Preview" className="h-20 w-20 rounded-full border border-gray-700 object-cover"/>
                  </div>
                )}
              </div>
            </div>

            <button type="submit" className="w-full rounded bg-[#5c7e10] py-2 font-medium text-white hover:bg-[#6d9516]">
              Crear cuenta
            </button>
          </form>

          <div className="mt-6 border-t border-gray-700 pt-4 text-center text-sm">
            <p>
              ¿Ya tienes una cuenta?{" "}
              <Link to="/auth/login" className="text-[#66c0f4] hover:underline">
                Iniciar sesión
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

