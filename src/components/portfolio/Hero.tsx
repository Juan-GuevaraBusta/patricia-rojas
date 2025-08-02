import { motion } from 'framer-motion';
import { ArrowDown, Calendar, Phone, Mail, User, Heart, Target, Award, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { containerVariants, itemVariants } from '@/utils/animations';

const Hero = () => {
  const services = [
    {
      title: "Terapia Individual",
      description: "Acompañamiento en ansiedad, depresión, duelos, crecimiento personal",
      icon: User,
      color: "text-steel-blue",
      bgColor: "bg-steel-blue/10",
      link: "/individual-therapy"
    },
    {
      title: "Terapia de Pareja",
      description: "Fortalecimiento de relaciones con Método Gottman",
      icon: Heart,
      color: "text-terracota",
      bgColor: "bg-terracota/10",
      link: "/couples-therapy"
    }
  ];

  const stats = [
    { number: '25+', label: 'Años de experiencia', icon: Award },
    { number: '15+', label: 'Años en psicoterapia', icon: Target },
    { number: '100%', label: 'Confidencialidad', icon: MapPin },
    { number: 'Presencial y Virtual', label: 'Modalidades', icon: Clock },
  ];

  const contactInfo = [
    {
      icon: Phone,
      title: 'WhatsApp',
      value: '+57 311 836 1642',
      link: 'https://wa.me/573118361642'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'patriciarojaspsicologia@gmail.com',
      link: 'mailto:patriciarojaspsicologia@gmail.com'
    },
    {
      icon: MapPin,
      title: 'Ubicación',
      value: 'Cali, Colombia',
      link: '#'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Principal con Video de Fondo */}
      <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        {/* Video de Fondo */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-40"
          >
            {/* Tu video */}
            <source src="/videos/video.mp4" type="video/mp4" />
            {/* Fallback para navegadores que no soportan video */}
            Tu navegador no soporta la reproducción de video.
          </video>
        </div>

        {/* Overlay blanco para dar más opacidad blanca al video */}
        <div className="absolute inset-0 bg-white/30" />
        
        {/* Elementos decorativos de fondo (mantienen la estética original) */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,hsl(var(--sage)/0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,hsl(var(--steel-blue)/0.1),transparent_50%)]" />
        
        {/* Floating Butterfly Elements */}
        <motion.div 
          className="absolute top-20 right-20 opacity-80"
          animate={{ 
            y: [-10, 10, -10],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        >
          <svg width="40" height="40" viewBox="0 0 100 100" className="text-terracota">
            <path d="M50 20 C30 10, 10 30, 30 50 C10 70, 30 90, 50 80 C70 90, 90 70, 70 50 C90 30, 70 10, 50 20 Z" fill="currentColor"/>
            <circle cx="50" cy="50" r="3" fill="currentColor"/>
          </svg>
        </motion.div>
        
        <motion.div 
          className="absolute bottom-32 left-16 opacity-80"
          animate={{ 
            y: [10, -10, 10],
            rotate: [0, -3, 3, 0]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        >
          <svg width="30" height="30" viewBox="0 0 100 100" className="text-terracota">
            <path d="M50 20 C30 10, 10 30, 30 50 C10 70, 30 90, 50 80 C70 90, 90 70, 70 50 C90 30, 70 10, 50 20 Z" fill="currentColor"/>
            <circle cx="50" cy="50" r="2" fill="currentColor"/>
          </svg>
        </motion.div>

        {/* Contenido Principal */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="container mx-auto px-6 text-center relative z-10"
        >
          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="block text-steel-blue font-bold">
                Soy Patricia Rojas
              </span>
            </h1>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mb-12"
          >
            <p className="text-xl md:text-2xl text-steel-blue mb-6 font-bold">
              Psicóloga Master Especializada en Terapia Individual y de Parejas
            </p>
            <p className="text-lg text-steel-blue max-w-3xl mx-auto leading-relaxed font-semibold">
              Te acompaño en tu proceso de crecimiento personal y bienestar emocional a sanar tus relaciones y reconectar contigo mismo.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex justify-center mb-16"
          >
            <a href="https://wa.me/573118361642" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-terracota hover:bg-terracota/90 text-white shadow-hover hover:shadow-glow">
                <Calendar className="w-5 h-5 mr-2" />
                Agendar Primera Sesión
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Sección de Servicios */}
      <section className="py-20 bg-muted/10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="container mx-auto px-6"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-2">
              <Target className="w-4 h-4 mr-2" />
              Servicios
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              ¿Cómo puedo ayudarte?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ofrezco espacios seguros y confidenciales para tu proceso de sanación y crecimiento
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="h-full"
              >
                <Card className="h-full shadow-elegant hover:shadow-hover transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <motion.div
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      className={`inline-flex p-4 rounded-full ${service.bgColor} ${service.color} mb-6`}
                    >
                      <service.icon size={32} />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <Button 
                      className="bg-terracota hover:bg-terracota/90 text-white shadow-hover hover:shadow-glow"
                      asChild
                    >
                      <Link to={service.link}>
                        Conocer más
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Sección de Estadísticas */}
      <section className="py-20 bg-gradient-secondary">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="container mx-auto px-6"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-sage-dark">
              Experiencia y Compromiso
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Años de experiencia respaldados por formación continua y dedicación profesional
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <Card className="p-6 shadow-elegant hover:shadow-hover transition-all duration-300">
                  <CardContent className="p-0">
                    <stat.icon size={32} className="text-terracota mx-auto mb-4" />
                    <div className="text-3xl font-bold text-foreground mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Sección de Contacto */}
      <section className="py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="container mx-auto px-6"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-2">
              <Calendar className="w-4 h-4 mr-2" />
              Contacto
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Comienza tu proceso hoy
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              El primer paso hacia el bienestar emocional es decidir buscar ayuda. 
              Estoy aquí para acompañarte en este camino.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            {contactInfo.map((contact, index) => (
              <motion.div
                key={contact.title}
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <Card className="shadow-elegant hover:shadow-hover transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="inline-flex p-3 rounded-full bg-terracota/10 text-terracota mb-4"
                    >
                      <contact.icon size={24} />
                    </motion.div>
                    <h4 className="font-semibold text-foreground mb-2">
                      {contact.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {contact.value}
                    </p>
                    {contact.link.startsWith('http') || contact.link.startsWith('mailto:') ? (
                      <a 
                        href={contact.link} 
                        target={contact.link.startsWith('http') ? '_blank' : '_self'}
                        rel={contact.link.startsWith('http') ? 'noopener noreferrer' : ''}
                        className="inline-block mt-3"
                      >
                        <Button variant="outline" size="sm">
                          Contactar
                        </Button>
                      </a>
                    ) : null}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="text-center">
            <div className="flex justify-center">
              <a href="https://wa.me/573118361642" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-terracota hover:bg-terracota/90 text-white shadow-hover hover:shadow-glow">
                  <Calendar className="w-5 h-5 mr-2" />
                  Agendar Primera Sesión
                </Button>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Hero;