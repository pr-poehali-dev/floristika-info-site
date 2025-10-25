import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ClassicStyle from "./pages/ClassicStyle";
import ModernStyle from "./pages/ModernStyle";
import MinimalStyle from "./pages/MinimalStyle";
import StyleComparison from "./pages/StyleComparison";
import SeasonalFlowers from "./pages/SeasonalFlowers";
import PopularFlowers from "./pages/PopularFlowers";
import RarePlants from "./pages/RarePlants";
import PlantCare from "./pages/PlantCare";
import CutFlowerCare from "./pages/CutFlowerCare";
import FlowerGallery from "./pages/FlowerGallery";
import BouquetGallery from "./pages/BouquetGallery";
import FloristTools from "./pages/FloristTools";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/styles/classic" element={<ClassicStyle />} />
          <Route path="/styles/modern" element={<ModernStyle />} />
          <Route path="/styles/minimal" element={<MinimalStyle />} />
          <Route path="/styles/comparison" element={<StyleComparison />} />
          <Route path="/encyclopedia/seasonal" element={<SeasonalFlowers />} />
          <Route path="/encyclopedia/popular" element={<PopularFlowers />} />
          <Route path="/encyclopedia/rare" element={<RarePlants />} />
          <Route path="/care/plants" element={<PlantCare />} />
          <Route path="/care/cut-flowers" element={<CutFlowerCare />} />
          <Route path="/gallery/flowers" element={<FlowerGallery />} />
          <Route path="/gallery/bouquets" element={<BouquetGallery />} />
          <Route path="/tools" element={<FloristTools />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
