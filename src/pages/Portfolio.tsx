import Header from '@/components/portfolio/Header';
import Hero from '@/components/portfolio/Hero';
import Footer from '@/components/portfolio/Footer';

const Portfolio = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        {/* Solo mostramos el Hero inicialmente */}
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;