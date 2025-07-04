
import HomeHeader from "@/components/home/HomeHeader";
import HeroSection from "@/components/home/HeroSection";
import HomeSearchBar from "@/components/home/HomeSearchBar";
import FeatureGrid from "@/components/home/FeatureGrid";
import { features } from "@/data/features";
import { useTheme } from "@/hooks/useTheme";
import { useFeatureSearch } from "@/hooks/useFeatureSearch";

export default function Index() {
  const { isDark, toggleTheme } = useTheme();
  const { search, setSearch, filteredFeatures } = useFeatureSearch(features);

  return (
    <div className="
      min-h-screen transition-colors duration-300
      bg-gradient-to-br from-slate-50 to-blue-100 
      dark:from-gray-900 dark:to-gray-900
    ">
      <div className="container mx-auto px-2 py-8">
        <HomeHeader isDark={isDark} toggleTheme={toggleTheme} />
        <HeroSection />
        
        {/* Section des outils avec ID pour le scroll */}
        <div id="tools-section" className="scroll-mt-8">
          <HomeSearchBar search={search} setSearch={setSearch} />
          <FeatureGrid features={filteredFeatures} />
        </div>
      </div>
    </div>
  );
}
