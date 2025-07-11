import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Heart, Phone, Mail } from 'lucide-react';
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
    { label: 'Inicio', href: '#inicio' },
    { label: 'Sobre Mí', href: '#sobre-mi' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Especialidades', href: '#especialidades' },
    { label: 'Testimonios', href: '#testimonios' },
    { label: 'Contacto', href: '#contacto' },
  ];

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-elegant border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <div className="p-2 rounded-full bg-gradient-primary">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Patricia Rojas R.
              </span>
              <span className="text-sm text-muted-foreground">
                Psicóloga Clínica
              </span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -2, scale: 1.05 }}
                className="text-foreground hover:text-accent transition-colors duration-300 font-medium relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full"></span>
              </motion.button>
            ))}
          </div>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <motion.a
              href="tel:+573115578592"
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="p-2 rounded-full bg-accent/10 text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300"
            >
              <Phone size={18} />
            </motion.a>
            <motion.a
              href="mailto:patriciarojaspsicologia@gmail.com"
              whileHover={{ scale: 1.1, rotate: -5 }}
              className="p-2 rounded-full bg-accent/10 text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300"
            >
              <Mail size={18} />
            </motion.a>
            <Button 
              variant="default" 
              className="bg-gradient-primary shadow-hover hover:shadow-glow transition-all duration-300"
              onClick={() => handleNavClick('#contacto')}
            >
              Agenda tu Sesión
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <motion.div
              animate={{ rotate: isMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isMenuOpen ? 1 : 0, 
            height: isMenuOpen ? 'auto' : 0 
          }}
          transition={{ duration: 0.3 }}
          className="lg:hidden overflow-hidden"
        >
          <div className="py-4 space-y-4 border-t border-border mt-4">
            {navItems.map((item, index) => (
              <motion.button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                initial={{ x: -20, opacity: 0 }}
                animate={{ 
                  x: isMenuOpen ? 0 : -20, 
                  opacity: isMenuOpen ? 1 : 0 
                }}
                transition={{ delay: index * 0.1 }}
                className="block w-full text-left text-foreground hover:text-accent transition-colors duration-300 font-medium py-2"
              >
                {item.label}
              </motion.button>
            ))}
            <div className="flex space-x-4 pt-4">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => handleNavClick('#contacto')}
                className="flex-1"
              >
                Contactar
              </Button>
              <Button 
                variant="default" 
                size="sm"
                className="flex-1 bg-gradient-primary"
                onClick={() => handleNavClick('#contacto')}
              >
                Agendar Sesión
              </Button>
            </div>
          </div>
        </motion.div>
      </nav>
    </motion.header>
  );
};

export default Header;