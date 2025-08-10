import { motion } from 'framer-motion';
import { ArrowDown, Calendar, Phone, Mail, User, Heart, Target, Award, MapPin, Clock, Users, Brain, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { containerVariants, itemVariants } from '@/utils/animations';

const Hero = () => {
  const services = [
    {
      title: "TERAPIA DE PAREJA",
      description: "La terapia de pareja es un espacio para mejorar la comunicación, resolver conflictos y fortalecer el vínculo, no solo en momentos de crisis. También es ideal para novios y parejas que desean prepararse para el matrimonio o la convivencia, comenzando con claridad sobre las claves que les ayudarán a construir una relación estable, sana y feliz.",
      frequentReasons: [
        'Conflictos que no se resuelven',
        'Distanciamiento o desconexión emocional',
        'Problemas de comunicación',
        'Crisis por Infidelidad',
        'Fortalecimiento y mejoramiento de la relación'
      ],
      image: "/images/terapia-pareja.jpg", // Ruta de la imagen
      link: "/couples-therapy"
    },
    {
      title: "TERAPIA INDIVIDUAL",
      description: "Te brindo un espacio para conocerte, comprender tus emociones y aprender a observar tus pensamientos sin quedarte atrapado en ellos, para que puedas vivir en coherencia con tus valores y construir una vida con sentido.",
      frequentReasons: [
        'Ansiedad',
        'Depresión',
        'Duelos por pérdida, ruptura, migración o cambio',
        'Crecimiento personal'
      ],
      image: "/images/terapia-individual.jpg", // Ruta de la imagen
      link: "/individual-therapy"
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
      <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden py-20" style={{ backgroundColor: '#f6f6f2' }}>
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
              </div>
            </motion.div>

            {/* Columna Derecha - Contenido */}
            <motion.div
              variants={itemVariants}
              className="order-1 lg:order-2 text-center lg:text-left h-[50vh] lg:h-screen flex flex-col justify-center px-6 lg:px-12"
            >
              <motion.div
                variants={itemVariants}
                className="space-y-6 mb-4 md:mb-6"
              >
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold relative font-marcellus">
                  <span className="block font-bold" style={{ color: '#3e554d' }}>
                    Patricia Rojas
                  </span>

                </h1>
                <h2 className="text-lg md:text-xl lg:text-2xl font-light font-raleway" style={{ color: '#7c939b' }}>
                  Psicóloga Master Especializada en Terapia Individual y de Parejas
                </h2>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="space-y-6 mb-8 md:mb-12"
              >
                <p className="text-base md:text-lg lg:text-xl font-semibold leading-relaxed font-raleway" style={{ color: '#3e554d' }}>
                  Te ayudo a sanar relaciones y conectar contigo mismo.
                </p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex flex-col gap-6 md:gap-8 justify-center items-center lg:items-center"
              >
                <Button 
                  size="lg" 
                  className="shadow-hover hover:shadow-glow px-4 md:px-6 py-2 md:py-3 text-base md:text-lg font-medium rounded-full max-w-xs mx-auto"
                  style={{ backgroundColor: '#3e554d', color: 'white' }}
                  asChild
                >
                  <Link to="/couples-therapy" className="flex items-center gap-2">
                    <span className="text-lg">👥</span>
                    Terapia de Pareja
                  </Link>
                </Button>
                <Button 
                  size="lg" 
                  className="shadow-hover hover:shadow-glow px-4 md:px-6 py-2 md:py-3 text-base md:text-lg font-medium rounded-full max-w-xs mx-auto"
                  style={{ backgroundColor: '#8ca194', color: '#3e554d' }}
                  asChild
                >
                  <Link to="/individual-therapy" className="flex items-center gap-2">
                    <span className="text-lg">👤</span>
                    Terapia Individual
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
          className="container mx-auto px-12 md:px-16"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-2">
              <Target className="w-4 h-4 mr-2" />
              Servicios
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent font-marcellus">
              ¿Cómo puedo ayudarte?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-raleway">
              Ofrezco espacios seguros y confidenciales para tu proceso de sanación y crecimiento
            </p>
          </motion.div>

          <div className="space-y-16 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`grid md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'md:grid-flow-col-dense' : ''
                }`}
              >
                {/* Imagen */}
                <div className={`relative h-64 md:h-80 overflow-hidden rounded-lg shadow-elegant ${
                  index % 2 === 1 ? 'md:col-start-2' : ''
                }`}>
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
                
                {/* Contenido */}
                <div className={`text-center md:text-left space-y-6 ${
                  index % 2 === 1 ? 'md:col-start-1' : ''
                }`}>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 font-marcellus">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-base md:text-lg font-raleway mb-4">
                      {service.description}
                    </p>
                    
                    {/* Motivos de consulta más frecuentes */}
                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-sage-dark">
                        Motivos de consulta más frecuentes:
                      </p>
                      <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                        {service.frequentReasons.map((reason, reasonIndex) => (
                          <div key={reasonIndex} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-sage rounded-full flex-shrink-0"></div>
                            <span className="text-muted-foreground text-sm">{reason}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <Button 
                    variant="outline"
                    className="border-sage text-sage hover:bg-sage hover:text-white transition-all duration-300"
                    asChild
                  >
                    <Link to={service.link}>
                      Infórmate aquí →
                    </Link>
                  </Button>
                </div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-sage-dark font-marcellus">
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
                <Card className="h-40 shadow-elegant hover:shadow-hover transition-all duration-300 flex flex-col justify-center">
                  <CardContent className="p-4">
                    <stat.icon size={32} className="text-steel-blue mx-auto mb-4" />
                    <div className="text-3xl font-bold text-foreground mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-muted-foreground leading-tight">
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
                  Agenda tu cita
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