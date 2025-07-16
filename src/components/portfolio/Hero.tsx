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
      color: "text-magenta",
      bgColor: "bg-magenta/10",
      link: "/couples-therapy"
    }
  ];

  const stats = [
    { number: '25+', label: 'Años de experiencia', icon: Award },
    { number: '15+', label: 'Años en psicoterapia', icon: Target },
    { number: '100%', label: 'Confidencialidad', icon: MapPin },
    { number: '24/7', label: 'Disponibilidad online', icon: Clock },
  ];

  const contactInfo = [
    {
      icon: Phone,
      title: 'WhatsApp',
      value: '+57 311 557 8592',
      link: 'https://wa.me/573115578592'
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
      {/* Hero Principal */}
      <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-secondary opacity-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,hsl(var(--magenta)/0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,hsl(var(--steel-blue)/0.1),transparent_50%)]" />

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
              <span className="block text-foreground">Hola, soy</span>
              <span className="block bg-gradient-primary bg-clip-text text-transparent">
                Patricia Rojas
              </span>
            </h1>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mb-12"
          >
            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              Psicóloga Clínica
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Te acompaño en tu proceso de crecimiento personal y bienestar emocional.
              Especializada en terapia individual y de pareja con enfoque humanista.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Button 
              size="lg" 
              className="bg-gradient-primary shadow-hover hover:shadow-glow transition-all duration-300"
              asChild
            >
              <Link to="/individual-therapy">
                <User className="w-5 h-5 mr-2" />
                Terapia Individual
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
              asChild
            >
              <Link to="/couples-therapy">
                <Heart className="w-5 h-5 mr-2" />
                Terapia de Pareja
              </Link>
            </Button>
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
                      className="bg-gradient-primary shadow-hover hover:shadow-glow"
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
                    <stat.icon size={32} className="text-accent mx-auto mb-4" />
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
                      className="inline-flex p-3 rounded-full bg-accent/10 text-accent mb-4"
                    >
                      <contact.icon size={24} />
                    </motion.div>
                    <h4 className="font-semibold text-foreground mb-2">
                      {contact.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {contact.value}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary shadow-hover hover:shadow-glow">
                <Calendar className="w-5 h-5 mr-2" />
                Agendar Sesión
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                asChild
              >
                <Link to="/contacto">
                  <Mail className="w-5 h-5 mr-2" />
                  Más información
                </Link>
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Hero;