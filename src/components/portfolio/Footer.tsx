import { motion } from 'framer-motion';
import { Heart, ArrowUp, Phone, Mail, MapPin, Instagram, MessageCircle, Clock, Shield, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link, useLocation } from 'react-router-dom';
import Butterfly from '@/components/ui/butterfly';

const Footer = () => {
  const location = useLocation();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigation = (href: string) => {
    if (href.startsWith('#')) {
      // Si estamos en la página principal y es un hash link
      if (location.pathname === '/') {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // Si no estamos en la página principal, navegar primero y luego hacer scroll
        window.location.href = '/' + href;
      }
    } else {
      // Para links externos o rutas normales
      if (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')) {
        window.open(href, '_blank');
      } else {
        window.location.href = href;
      }
    }
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Inicio', href: '/' },
    { label: 'Sobre Mí', href: '/sobre-mi' },
    { label: 'Enfoque', href: '/habilidades' },
    { label: 'Terapia Individual', href: '/individual-therapy' },
    { label: 'Terapia de Pareja', href: '/couples-therapy' },
    { label: 'Testimonios', href: '/experiencia' },
    { label: 'Contacto', href: '/contacto' },
  ];

  const services = [
    { label: 'Terapia de Parejas', href: '/couples-therapy' },
    { label: 'Terapia Individual', href: '/individual-therapy' },
    { label: 'Terapia para Jóvenes', href: '/individual-therapy' },
    { label: 'Procesos de Duelo', href: '/individual-therapy' },
    { label: 'Manejo de Ansiedad', href: '/individual-therapy' },
    { label: 'Crecimiento Personal', href: '/individual-therapy' },
  ];

  const contactInfo = [
    { 
      icon: Phone, 
      label: '+57 311 836 1642',
      href: 'https://wa.me/573118361642',
      description: 'WhatsApp disponible'
    },
    { 
      icon: Mail, 
      label: 'patriciarojaspsicologia@gmail.com',
      href: 'mailto:patriciarojaspsicologia@gmail.com',
      description: 'Consultas y citas'
    },
    { 
      icon: MapPin, 
      label: 'CC Unicentro, Cali',
      href: '/contacto',
      description: 'Sesiones presenciales'
    },
    { 
      icon: Clock, 
      label: 'Lun - Vie: 8AM - 6PM',
      href: '/contacto',
      description: 'Sáb: 8AM - 12PM'
    },
  ];

  const socialLinks = [
    { 
      icon: Instagram, 
      href: 'https://instagram.com/patriciarojaspsicologa', 
      label: 'Instagram',
      color: 'hover:text-terracota'
    },
    { 
      icon: MessageCircle, 
      href: 'https://wa.me/573118361642', 
      label: 'WhatsApp',
      color: 'hover:text-sage'
    },
    { 
      icon: () => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-4.59v13.59a2.83 2.83 0 0 1-5.66 0 2.83 2.83 0 0 1 2.83-2.83c.28 0 .56.04.83.1V9.76a6.54 6.54 0 0 0-1.83-.25 6.59 6.59 0 0 0-6.59 6.59 6.59 6.59 0 0 0 13.18 0V9.69a8.48 8.48 0 0 0 5.77 2.26V8.35a4.79 4.79 0 0 1-0.17-1.66z"/>
        </svg>
      ), 
      href: 'https://tiktok.com/@patriciarojaspsicologa', 
      label: 'TikTok',
      color: 'hover:text-steel-blue'
    },
  ];

  const certifications = [
    'Maestría Cum Laude en Consejería Clínica',
    'Especialización Método Gottman',
    'Certificación en Terapia ACT',
    '25+ años de experiencia profesional'
  ];

  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-primary opacity-95" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,hsl(var(--terracota)/0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,hsl(var(--steel-blue)/0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-6 py-12 relative z-10">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-8">
          {/* Brand & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1 space-y-6"
          >
            <div className="flex items-center space-x-3">
              {/* Logo Patricia Rojas */}
              <div className="flex items-center space-x-3">
                <div className="text-2xl font-bold font-marcellus text-white">
                  Patricia Rojas
                </div>
                <div>
                  <p className="text-primary-foreground/80 font-raleway">Psicóloga Master - Especializada en Terapia Individual y de Parejas</p>
                </div>
              </div>
            </div>
            
            <p className="text-primary-foreground/80 leading-relaxed">
              Te acompaño a sanar tus relaciones y reconectar contigo mismo. 
              Especializada en terapia de parejas y terapia individual con 
              enfoques basados en evidencia científica.
            </p>

            {/* Certifications */}
            <div className="space-y-2">
              <h4 className="font-semibold text-white flex items-center font-raleway">
                <Award className="w-4 h-4 mr-2" />
                Certificaciones
              </h4>
              {certifications.map((cert, index) => (
                <Badge 
                  key={index}
                  variant="secondary" 
                  className="block w-fit mb-1 text-xs bg-white/20 text-white border-white/30"
                >
                  {cert}
                </Badge>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <h4 className="text-lg font-semibold text-white font-raleway">Enlaces Rápidos</h4>
            <div className="space-y-3">
              {quickLinks.map((link) => (
                <motion.div
                  key={link.label}
                  whileHover={{ x: 5 }}
                >
                  <Link
                    to={link.href}
                    className="block text-primary-foreground/80 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h4 className="text-lg font-semibold text-white font-raleway">Servicios</h4>
            <div className="space-y-3">
              {services.map((service) => (
                <motion.div
                  key={service.label}
                  whileHover={{ x: 5 }}
                >
                  <Link
                    to={service.href}
                    className="block text-primary-foreground/80 hover:text-white transition-colors duration-300"
                  >
                    {service.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <h4 className="text-lg font-semibold text-white">Contacto</h4>
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-start space-x-3 text-primary-foreground/80 hover:text-white transition-colors duration-300"
                >
                  {contact.href.startsWith('http') || contact.href.startsWith('mailto:') ? (
                    <a
                      href={contact.href}
                      target={contact.href.startsWith('http') ? '_blank' : '_self'}
                      rel={contact.href.startsWith('http') ? 'noopener noreferrer' : ''}
                      className="flex items-start space-x-3"
                    >
                      <contact.icon size={18} className="mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">{contact.label}</p>
                        <p className="text-sm opacity-75">{contact.description}</p>
                      </div>
                    </a>
                  ) : (
                    <Link
                      to={contact.href}
                      className="flex items-start space-x-3"
                    >
                      <contact.icon size={18} className="mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">{contact.label}</p>
                        <p className="text-sm opacity-75">{contact.description}</p>
                      </div>
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-4 border-t border-white/20">
              <h5 className="font-semibold text-white mb-3">Sígueme en:</h5>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-3 rounded-full bg-white/20 backdrop-blur-sm text-white transition-all duration-300 ${social.color}`}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider Line */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-primary-foreground/80 text-sm flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4"
            >
              <div className="flex items-center">
                <span>© {currentYear} Patricia Rojas Psicóloga</span>
                <Heart size={16} className="mx-2 text-red-400" fill="currentColor" />
                <span>Todos los derechos reservados</span>
              </div>
              <div className="flex items-center space-x-4 text-xs">
                <motion.div whileHover={{ scale: 1.05 }} className="flex items-center">
                  <Shield size={14} className="mr-1" />
                  Confidencialidad garantizada
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="flex items-center">
                  <Award size={14} className="mr-1" />
                  Registro profesional vigente
                </motion.div>
              </div>
            </motion.div>

            {/* Back to Top Button */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Button
                variant="outline"
                size="sm"
                onClick={scrollToTop}
                className="border-white/30 text-white hover:bg-white hover:text-primary transition-all duration-300"
              >
                <ArrowUp size={16} className="mr-2" />
                Volver arriba
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Emergency Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20"
        >
          <p className="text-center text-sm text-primary-foreground/90">
            <Shield className="inline w-4 h-4 mr-2" />
            En caso de emergencia psicológica o crisis, contacta inmediatamente el 
            <strong className="text-white"> 123 </strong> 
            (Línea Nacional de Emergencias) o acude al servicio de urgencias más cercano.
          </p>
        </motion.div>

        {/* Professional Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-6 text-center text-xs text-primary-foreground/60"
        >
          <p>
            Patricia Rojas Psicóloga - Terapia Individual y de Parejas • Registro Profesional Vigente • 
            Sesiones bajo estricta confidencialidad según normativa de salud mental
          </p>
        </motion.div>
      </div>

      {/* Floating decoration elements with butterflies */}
      <motion.div
        animate={{ 
          y: [-20, 20, -20],
          opacity: [0.3, 0.6, 0.3],
          rotate: [0, 5, -5, 0]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-10 right-10"
      >
        <svg width="24" height="24" viewBox="0 0 100 100" className="text-white/20">
          <path d="M50 20 C30 10, 10 30, 30 50 C10 70, 30 90, 50 80 C70 90, 90 70, 70 50 C90 30, 70 10, 50 20 Z" fill="currentColor"/>
        </svg>
      </motion.div>
      
      <motion.div
        animate={{ 
          y: [20, -20, 20],
          opacity: [0.2, 0.5, 0.2],
          rotate: [0, -3, 3, 0]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute bottom-20 left-20"
      >
        <svg width="18" height="18" viewBox="0 0 100 100" className="text-white/15">
          <path d="M50 20 C30 10, 10 30, 30 50 C10 70, 30 90, 50 80 C70 90, 90 70, 70 50 C90 30, 70 10, 50 20 Z" fill="currentColor"/>
        </svg>
      </motion.div>
    </footer>
  );
};

export default Footer;