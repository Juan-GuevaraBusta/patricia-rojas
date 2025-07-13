import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Heart, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Inicio', href: '/' },
    { label: 'Sobre Mí', href: '/#sobre-mi' },
    { label: 'Habilidades', href: '/#habilidades' },
    { label: 'Proyectos', href: '/#proyectos' },
    { label: 'Experiencia', href: '/#experiencia' },
    { label: 'Contacto', href: '/#contacto' },
  ];

  const handleNavigation = (href) => {
    if (href.startsWith('/#')) {
      // Si estamos en otra página, navegar a home primero
      if (window.location.pathname !== '/') {
        window.location.href = href;
      } else {
        // Ya estamos en home, solo hacer scroll
        const element = document.querySelector(href.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      // Navegación normal
      window.location.href = href;
    }
    setIsMenuOpen(false);
  };

  const handleTherapyNavigation = (type) => {
    if (type === 'couples') {
      window.location.href = '/terapia-pareja';
    } else if (type === 'individual') {
      window.location.href = '/terapia-individual';
    }
    setIsMenuOpen(false);
  };

  const handleLogoClick = () => {
    window.location.href = '/';
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
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent cursor-pointer"
            onClick={handleLogoClick}
          >
            Psicología & Bienestar
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.label}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -2 }}
                className="text-foreground hover:text-accent transition-colors duration-300 font-medium"
                onClick={() => handleNavigation(item.href)}
              >
                {item.label}
              </motion.button>
            ))}
            
            {/* Therapy Buttons */}
            <div className="flex items-center space-x-3">
              <Button 
                variant="outline" 
                className="border-sage text-sage hover:bg-sage hover:text-white shadow-hover transition-all duration-300"
                onClick={() => handleTherapyNavigation('couples')}
              >
                <Heart size={16} className="mr-2" />
                Terapia de Pareja
              </Button>
              <Button 
                variant="default" 
                className="bg-gradient-primary shadow-hover hover:shadow-glow transition-all duration-300"
                onClick={() => handleTherapyNavigation('individual')}
              >
                <User size={16} className="mr-2" />
                Terapia Individual
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
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
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  className="text-foreground hover:text-accent transition-colors duration-300 font-medium py-2 text-left"
                  onClick={() => handleNavigation(item.href)}
                >
                  {item.label}
                </button>
              ))}
              
              {/* Mobile Therapy Buttons */}
              <div className="flex flex-col space-y-3 pt-4 border-t border-border">
                <Button 
                  variant="outline" 
                  className="border-sage text-sage hover:bg-sage hover:text-white w-full"
                  onClick={() => handleTherapyNavigation('couples')}
                >
                  <Heart size={16} className="mr-2" />
                  Terapia de Pareja
                </Button>
                <Button 
                  variant="default" 
                  className="bg-gradient-primary w-full"
                  onClick={() => handleTherapyNavigation('individual')}
                >
                  <User size={16} className="mr-2" />
                  Terapia Individual
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};

export default Header;