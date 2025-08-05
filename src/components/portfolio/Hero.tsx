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
      title: "TERAPIA INDIVIDUAL",
      description: "El objetivo es ayudar al paciente a lograr un mejor conocimiento de si mismo, ayudándolo a entender sus emociones y pensamientos.",
      image: "/images/terapia-individual.jpg", // Ruta de la imagen
      link: "/individual-therapy"
    },
    {
      title: "TERAPIA DE PAREJA",
      description: "Si las discusiones van a más, si sentís la distancia emocional entre ambos o pensáis en separaros.",
      image: "/images/terapia-pareja.jpg", // Ruta de la imagen
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
      {/* Hero Principal con Fondo Limpio */}
      <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Fondo limpio con gradiente sutil */}
        <div className="absolute inset-0 bg-gradient-to-br from-sage-light/20 via-white to-steel-blue/10" />
        
        {/* Elementos decorativos de fondo sutiles */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,hsl(var(--sage)/0.05),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,hsl(var(--steel-blue)/0.05),transparent_50%)]" />
        


        {/* Contenido Principal - Layout de dos columnas */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 w-full"
        >
          <div className="grid lg:grid-cols-2 items-center min-h-screen">
            {/* Columna Izquierda - Video */}
            <motion.div
              variants={itemVariants}
              className="order-2 lg:order-1 h-[50vh] lg:h-screen"
            >
              <div className="relative h-full w-full">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover opacity-25"
                >
                  <source src="/videos/video.mp4" type="video/mp4" />
                  Tu navegador no soporta la reproducción de video.
                </video>
                {/* Overlay con mensaje en la parte inferior izquierda */}
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                  <p className="text-steel-blue text-base md:text-lg font-semibold leading-relaxed">
                    Te acompaño en tu proceso de crecimiento personal y bienestar emocional a sanar tus relaciones y reconectar contigo mismo.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Columna Derecha - Contenido */}
            <motion.div
              variants={itemVariants}
              className="order-1 lg:order-2 text-center lg:text-left h-[50vh] lg:h-screen flex flex-col justify-center px-6 lg:px-12"
            >
              <motion.div
                variants={itemVariants}
                className="mb-6 md:mb-8"
              >
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4">
                  <span className="block text-steel-blue font-bold">
                    Soy Patricia Rojas
                  </span>
                </h1>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-light text-steel-blue mb-2">
                  Psicóloga Master Especializada en Terapia Individual y de Parejas
                </h2>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="mb-8 md:mb-12"
              >
                <p className="text-base md:text-lg lg:text-xl text-steel-blue mb-6 md:mb-8 font-semibold leading-relaxed">
                  Te acompaño en tu proceso de crecimiento personal y bienestar emocional a sanar tus relaciones y reconectar contigo mismo.
                </p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start"
              >
                <Button 
                  size="lg" 
                  className="bg-sage hover:bg-sage/90 text-white shadow-hover hover:shadow-glow px-6 md:px-8 py-2 md:py-3 text-base md:text-lg font-medium"
                  asChild
                >
                  <Link to="/individual-therapy">
                    Terapia Individual
                  </Link>
                </Button>
                <Button 
                  size="lg" 
                  className="bg-sage hover:bg-sage/90 text-white shadow-hover hover:shadow-glow px-6 md:px-8 py-2 md:py-3 text-base md:text-lg font-medium"
                  asChild
                >
                  <Link to="/couples-therapy">
                    Terapia de Pareja
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
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
                <Card className="h-full shadow-elegant hover:shadow-hover transition-all duration-300 overflow-hidden flex flex-col">
                  {/* Imagen superior - altura fija */}
                  <div className="relative h-48 overflow-hidden flex-shrink-0">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback si la imagen no carga - mostrar placeholder
                        const target = e.currentTarget as HTMLImageElement;
                        target.style.display = 'none';
                        const placeholder = target.nextElementSibling as HTMLElement;
                        if (placeholder) {
                          placeholder.style.display = 'flex';
                        }
                      }}
                    />
                    {/* Placeholder si no hay imagen */}
                    <div 
                      className="w-full h-full bg-gradient-to-br from-sage-light to-steel-blue/20 flex items-center justify-center"
                      style={{ display: 'none' }}
                    >
                      <div className="text-center text-sage-dark">
                        <div className="text-4xl mb-2">📷</div>
                        <p className="text-sm">Imagen no disponible</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Contenido inferior - altura flexible pero mínima */}
                  <CardContent className="p-6 text-center flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-4">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                        {service.description}
                      </p>
                    </div>
                    <Button 
                      variant="outline"
                      className="border-sage text-sage hover:bg-sage hover:text-white transition-all duration-300 self-center"
                      asChild
                    >
                      <Link to={service.link}>
                        Informate aquí →
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
                <Card className="h-32 shadow-elegant hover:shadow-hover transition-all duration-300 flex flex-col justify-center">
                  <CardContent className="p-0">
                    <stat.icon size={32} className="text-steel-blue mx-auto mb-4" />
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-sage-dark">
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
                <Card className="h-32 shadow-elegant hover:shadow-hover transition-all duration-300 flex flex-col justify-center">
                  <CardContent className="p-6 text-center">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="inline-flex p-3 rounded-full bg-steel-blue/10 text-steel-blue mb-4"
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
                <Button size="lg" className="bg-sage hover:bg-sage/90 text-white shadow-hover hover:shadow-glow">
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