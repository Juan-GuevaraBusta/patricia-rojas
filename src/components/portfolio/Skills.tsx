import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart, Users, Brain, MessageCircle, Calendar, Video, User, Lightbulb } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { containerVariants, itemVariants } from '@/utils/animations';

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const services = [
    {
      title: 'Terapia de Parejas',
      icon: Heart,
      color: 'text-magenta',
      bgColor: 'bg-magenta/10',
      description: 'Método Gottman para fortalecer la comunicación, resolver conflictos y reconstruir la conexión emocional.',
      features: [
        'Resolución de conflictos',
        'Mejora de comunicación',
        'Manejo de infidelidad',
        'Fortalecimiento del vínculo'
      ],
      duration: '50 minutos',
      frequency: 'Semanal',
      modality: 'Presencial/Virtual'
    },
    {
      title: 'Terapia Individual',
      icon: User,
      color: 'text-steel-blue',
      bgColor: 'bg-steel-blue/10',
      description: 'Enfoque ACT para ansiedad, depresión, duelos y crecimiento personal con herramientas de autoconocimiento.',
      features: [
        'Ansiedad y depresión',
        'Procesos de duelo',
        'Crecimiento personal',
        'Regulación emocional'
      ],
      duration: '50 minutos',
      frequency: 'Semanal',
      modality: 'Presencial/Virtual'
    },
    {
      title: 'Terapia para Jóvenes',
      icon: Users,
      color: 'text-sage',
      bgColor: 'bg-sage/10',
      description: 'Acompañamiento especializado para adolescentes y jóvenes adultos en sus desafíos emocionales y relacionales.',
      features: [
        'Transiciones vitales',
        'Relaciones familiares',
        'Autoestima',
        'Toma de decisiones'
      ],
      duration: '50 minutos',
      frequency: 'Semanal',
      modality: 'Presencial/Virtual'
    }
  ];

  const specializations = [
    {
      title: 'Método Gottman',
      institution: 'Instituto Gottman',
      description: 'Terapia de Pareja Niveles 1 y 2, Manejo de Infidelidad',
      icon: Heart,
      color: 'text-magenta'
    },
    {
      title: 'Terapia ACT',
      institution: 'Universidad Pontificia Bolivariana',
      description: 'Terapia de Aceptación y Compromiso',
      icon: Brain,
      color: 'text-steel-blue'
    },
    {
      title: 'Terapias de 3ra Generación',
      institution: 'Universidad Pontificia Bolivariana',
      description: 'Enfoques contextualistas y mindfulness',
      icon: Lightbulb,
      color: 'text-sage'
    }
  ];

  const sessionDetails = [
    { icon: Calendar, label: 'Duración', value: '50 minutos' },
    { icon: Video, label: 'Modalidad', value: 'Presencial/Virtual' },
    { icon: MessageCircle, label: 'Frecuencia', value: 'Semanal recomendado' },
    { icon: Users, label: 'Población', value: 'Jóvenes y Adultos' }
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="servicios" className="py-20">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container mx-auto px-6"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            <Heart className="w-4 h-4 mr-2" />
            Servicios Especializados
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            ¿Cómo puedo acompañarte?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ofrezco acompañamiento psicológico especializado con enfoques basados en evidencia 
            para ayudarte a sanar, crecer y reconectar con lo que realmente importa.
          </p>
        </motion.div>

        {/* Main Services */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="h-full"
            >
              <Card className="h-full shadow-elegant hover:shadow-hover transition-all duration-500 overflow-hidden">
                <CardHeader className={`${service.bgColor} relative`}>
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-gradient-primary/5 -translate-y-16 translate-x-16" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-gradient-secondary/10 translate-y-12 -translate-x-12" />
                  
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className={`inline-flex p-4 rounded-2xl ${service.bgColor} ${service.color} mb-4 relative z-10`}
                  >
                    <service.icon size={32} />
                  </motion.div>
                  <CardTitle className="text-2xl relative z-10">{service.title}</CardTitle>
                  <p className="text-muted-foreground relative z-10">{service.description}</p>
                </CardHeader>

                <CardContent className="p-6 space-y-6">
                  {/* Features */}
                  <div>
                    <h4 className="font-semibold mb-3 text-foreground">Áreas de trabajo:</h4>
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <motion.div
                          key={feature}
                          initial={{ opacity: 0, x: -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ delay: 0.3 + idx * 0.1 }}
                          className="flex items-center space-x-2"
                        >
                          <div className={`w-2 h-2 rounded-full ${service.color.replace('text-', 'bg-')}`} />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Session Details */}
                  <div className="border-t border-border pt-4">
                    <div className="grid grid-cols-1 gap-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Duración:</span>
                        <span className="font-medium">{service.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Frecuencia:</span>
                        <span className="font-medium">{service.frequency}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Modalidad:</span>
                        <span className="font-medium">{service.modality}</span>
                      </div>
                    </div>
                  </div>

                  <Button 
                    className={`w-full ${service.color.replace('text-', 'bg-')} hover:opacity-90 transition-all duration-300`}
                    onClick={scrollToContact}
                  >
                    Agendar Consulta
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Session Information */}
        <motion.div variants={itemVariants} className="mb-20">
          <Card className="shadow-elegant bg-gradient-secondary/10">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-center mb-8">Información de Sesiones</h3>
              <div className="grid md:grid-cols-4 gap-6">
                {sessionDetails.map((detail, index) => (
                  <motion.div
                    key={detail.label}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    className="text-center"
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="inline-flex p-4 rounded-full bg-gradient-primary/10 text-accent mb-4"
                    >
                      <detail.icon size={24} />
                    </motion.div>
                    <h4 className="font-semibold text-foreground mb-2">{detail.label}</h4>
                    <p className="text-muted-foreground">{detail.value}</p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Specializations */}
        <motion.div variants={itemVariants}>
          <h3 className="text-2xl font-bold text-center mb-12">Formación Especializada</h3>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {specializations.map((spec, index) => (
              <motion.div
                key={spec.title}
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <Card className="p-6 shadow-elegant hover:shadow-hover transition-all duration-300 h-full">
                  <CardContent className="p-0 text-center">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className={`inline-flex p-3 rounded-full bg-muted/30 ${spec.color} mb-4`}
                    >
                      <spec.icon size={28} />
                    </motion.div>
                    <h4 className="font-bold text-foreground mb-2">{spec.title}</h4>
                    <p className="text-sm text-accent mb-2">{spec.institution}</p>
                    <p className="text-sm text-muted-foreground">{spec.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          variants={itemVariants} 
          className="text-center bg-gradient-primary/5 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-foreground mb-4">
            ¿Listo para comenzar tu proceso de sanación?
          </h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Te ofrezco un espacio seguro y confidencial donde podrás explorar, 
            sanar y crecer. El primer paso hacia el bienestar emocional comienza con una decisión.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="bg-gradient-primary shadow-hover hover:shadow-glow transition-all duration-300 px-8 py-4"
            >
              <Calendar className="mr-2 w-5 h-5" />
              Agenda tu Primera Sesión
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;