export function HeroSection() {
  return (
    <div className="mb-6">
      <h2 className="mb-2 text-xl font-bold">Bienvenido a VicePenguins</h2>
      <div className="relative h-[300px] overflow-hidden rounded">
        <img src="/img/home/header.png" alt="Header" className="h-full w-full object-cover"/>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
          <h3 className="text-lg font-bold text-white">Tu sitio web para Minecraft</h3>
          <div className="mt-2 flex items-center justify-between">
            <div className="rounded bg-[#4c6b22] px-2 py-1 text-sm text-white">Mods, Skins, lo que quieras!</div>
          </div>
        </div>
      </div>
    </div>
  );
}
