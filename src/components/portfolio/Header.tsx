import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import Logo from '@/components/ui/logo';

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
    { 
      label: 'Sobre Mí', 
      href: '/sobre-mi',
      dropdown: [
        { label: 'Sobre Mí', href: '/sobre-mi' },
        { label: 'Enfoque', href: '/habilidades' },
        { label: 'Testimonios', href: '/experiencia' }
      ]
    },
    { 
      label: 'Acompañamiento', 
      href: '/individual-therapy',
      dropdown: [
        { label: 'Terapia Individual', href: '/individual-therapy' },
        { label: 'Terapia de Pareja', href: '/couples-therapy' }
      ]
    },
    { label: 'Contacto', href: '/contacto' },
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
          ? 'bg-background shadow-elegant border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 -mt-2">
            <Logo size="lg" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                {item.dropdown ? (
                  <div className="flex items-center space-x-1 cursor-pointer">
                    <span
                      className={`font-medium transition-colors duration-300 ${
                        location.pathname === item.href
                          ? (isHomePage && !isScrolled ? 'text-steel-blue font-semibold' : 'text-steel-blue')
                          : getTextColorClasses()
                      }`}
                    >
                      {item.label}
                    </span>
                    <svg 
                      className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                ) : (
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
                )}

                {/* Dropdown Menu */}
                {item.dropdown && (
                  <div className="absolute top-full left-0 mt-0 w-48 bg-white rounded-lg shadow-lg border border-sage/20 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-[-10px]">
                    <div className="py-2">
                                              {item.dropdown.map((dropdownItem, dropdownIndex) => (
                          <Link
                            key={dropdownItem.label}
                            to={dropdownItem.href}
                            className={`block px-4 py-2 text-sm transition-colors duration-200 ${
                              location.pathname === dropdownItem.href
                                ? 'text-sage bg-sage/10'
                                : 'text-sage-dark hover:text-sage hover:bg-sage/5'
                            }`}
                          >
                            {dropdownItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
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
                <div key={item.label}>
                  {item.dropdown ? (
                    <div className="space-y-2">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.label}
                          to={dropdownItem.href}
                          className={`block py-2 text-sm transition-colors duration-300 ${
                            location.pathname === dropdownItem.href
                              ? 'text-sage'
                              : 'text-muted-foreground hover:text-sage'
                          }`}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {dropdownItem.label}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link
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
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};

export default Header;