import { UserIcon, ArchiveBoxArrowDownIcon, MapIcon, PhotoIcon } from "@heroicons/vue/24/outline";

export const categories = [
  {
    title: "Mods",
    icon: ArchiveBoxArrowDownIcon,
    url: "/mods",
  },
  {
    title: "Skins",
    icon: UserIcon,
    url: "/skins",
  },
  {
    title: "Maps",
    icon: MapIcon,
    url: "/maps",
  },
  {
    title: "TexturePacks",
    icon: PhotoIcon,
    url: "/texturepacks",
  }
];
