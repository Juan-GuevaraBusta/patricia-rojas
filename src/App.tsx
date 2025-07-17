import { useEffect } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import About from "./components/portfolio/About";
import Skills from "./components/portfolio/Skills";
import Projects from "./components/portfolio/Projects";
import Experience from "./components/portfolio/Experience";
import Contact from "./components/portfolio/Contact";
import IndividualTherapy from "./pages/IndividualTherapy";
import CouplesTherapy from "./pages/CouplesTherapy";
import TherapeuticApproaches from "./pages/TherapeuticApproaches";
import Header from "./components/portfolio/Header";
import Footer from "./components/portfolio/Footer";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Layout wrapper para las páginas individuales
const PageLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen">
    <Header />
    <main className="pt-20">
      {children}
    </main>
    <Footer />
  </div>
);

// Componente para hacer scroll hacia arriba en cada cambio de ruta
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/sobre-mi" element={<PageLayout><About /></PageLayout>} />
          <Route path="/habilidades" element={<PageLayout><Skills /></PageLayout>} />
          <Route path="/proyectos" element={<PageLayout><Projects /></PageLayout>} />
          <Route path="/experiencia" element={<PageLayout><Experience /></PageLayout>} />
          <Route path="/contacto" element={<PageLayout><Contact /></PageLayout>} />
          <Route path="/enfoques-terapeuticos" element={<PageLayout><TherapeuticApproaches /></PageLayout>} />
          <Route path="/individual-therapy" element={<IndividualTherapy />} />
          <Route path="/couples-therapy" element={<CouplesTherapy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;