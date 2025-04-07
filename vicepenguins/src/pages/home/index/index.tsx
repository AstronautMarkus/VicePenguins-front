import { SearchBar } from './components/SearchBar';
import { NavigationBar } from './components/NavigationBar';
import { Sidebar } from './components/Sidebar';
import { HeroSection } from './components/HeroSection';
import { FeaturedMods } from './components/FeaturedMods';
import { CategoriesSection } from './components/CategoriesSection';

export default function Index() {
  return (
    <div className="container mx-auto px-6 py-4">
      <SearchBar />
      <NavigationBar />
      <div className="grid grid-cols-12 gap-4">
        <Sidebar />
        <div className="col-span-12 md:col-span-9">
          <HeroSection />
          <FeaturedMods />
          <CategoriesSection />
        </div>
      </div>
    </div>
  );
}

