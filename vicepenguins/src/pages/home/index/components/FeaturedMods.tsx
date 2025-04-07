interface ModCardProps {
  title: string;
  photoUrl: string;
  modLoader: string;
}

function ModCard({ title, photoUrl, modLoader }: ModCardProps) {
  return (
    <div className="overflow-hidden rounded bg-[#4c5844]">
      <img
        src={photoUrl}
        alt={title}
        className="h-[100px] w-full object-cover"
      />
      <div className="p-2">
        <h4 className="text-sm font-medium">{title}</h4>
        <div className="mt-1 text-xs text-gray-400">{modLoader}</div>
      </div>
    </div>
  );
}

export function FeaturedMods() {
  const mods = [
    { title: "Mod Title 1", photoUrl: "/img/helpers/mod.jpg", modLoader: "Forge" },
    { title: "Mod Title 2", photoUrl: "/img/helpers/mod.jpg", modLoader: "Fabric" },
  ];

  return (
    <div className="mb-6">
      <h2 className="mb-2 text-xl font-bold">Mods Destacados</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
        {mods.map((mod, i) => (
          <ModCard
            key={i}
            title={mod.title}
            photoUrl={mod.photoUrl}
            modLoader={mod.modLoader}
          />
        ))}
      </div>
    </div>
  );
}
