import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  // Detectar si estamos en la página de inicio
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Inicio', href: '/' },
    { label: 'Sobre Mí', href: '/sobre-mi' },
    { label: 'Enfoque', href: '/habilidades' },
    { label: 'Testimonios', href: '/experiencia' },
    { label: 'Terapia Individual', href: '/individual-therapy' },
    { label: 'Terapia de Pareja', href: '/couples-therapy' },
    { label: 'Preguntas Frecuentes', href: '/contacto' },
  ];

  // Función para obtener las clases de color según la página y estado de scroll
  const getTextColorClasses = () => {
    if (isHomePage && !isScrolled) {
      // En home y sin scroll: texto azul steel-blue más grueso
      return 'text-steel-blue hover:text-steel-blue/80 font-semibold';
    } else {
      // En otras páginas o con scroll: colores originales
      return 'text-foreground hover:text-steel-blue';
    }
  };

  const getLogoColorClasses = () => {
    if (isHomePage && !isScrolled) {
      // En home y sin scroll: texto azul steel-blue
      return 'text-steel-blue font-bold';
    } else {
      // En otras páginas o con scroll: gradiente original
      return 'bg-gradient-primary bg-clip-text text-transparent';
    }
  };

  const getMenuIconColorClasses = () => {
    if (isHomePage && !isScrolled) {
      return 'text-steel-blue hover:text-steel-blue/80';
    } else {
      return 'text-foreground hover:text-steel-blue';
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-md shadow-elegant border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo with Butterfly */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <Link to="/" className="flex items-center space-x-2">
              {/* Butterfly SVG - color dinámico */}
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 100 100" 
                className={isHomePage && !isScrolled ? 'text-steel-blue' : 'text-steel-blue'}
              >
                <path d="M50 20 C30 10, 10 30, 30 50 C10 70, 30 90, 50 80 C70 90, 90 70, 70 50 C90 30, 70 10, 50 20 Z" fill="currentColor"/>
                <circle cx="50" cy="50" r="3" fill="currentColor"/>
              </svg>
              <span className={`text-2xl font-bold ${getLogoColorClasses()}`}>
                Patricia Rojas
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                <Link
                  to={item.href}
                  className={`font-medium transition-colors duration-300 ${
                    location.pathname === item.href
                      ? (isHomePage && !isScrolled ? 'text-steel-blue font-semibold' : 'text-steel-blue')
                      : getTextColorClasses()
                  }`}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className={`md:hidden ${getMenuIconColorClasses()}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4"
          >
            <div className="flex flex-col space-y-4 bg-background/95 backdrop-blur-md rounded-lg p-4 shadow-elegant">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`font-medium py-2 transition-colors duration-300 ${
                    location.pathname === item.href
                      ? 'text-steel-blue'
                      : 'text-foreground hover:text-steel-blue'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button variant="default" className="bg-sage hover:bg-sage/90 text-white mt-4">
                Descargar CV
              </Button>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};

export default Header;