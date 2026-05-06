import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { FeaturedCatalog } from "./components/FeaturedCatalog";

export default function App() {
  return (
    <div className="min-h-screen bg-[#2a0f17]">
      <div className="mx-auto max-w-[1200px]">
        <Navigation />
        <Hero />
        <FeaturedCatalog />
      </div>
    </div>
  );
}
