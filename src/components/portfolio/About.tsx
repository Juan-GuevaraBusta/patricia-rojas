import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart, Users, Brain, Award, MapPin, BookOpen, Coffee, Lightbulb } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { containerVariants, itemVariants } from '@/utils/animations';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const achievements = [
    { 
      icon: Award, 
      title: '25+ Años', 
      description: 'De experiencia profesional',
      color: 'text-magenta'
    },
    { 
      icon: Users, 
      title: '1000+ Pacientes', 
      description: 'Acompañados exitosamente',
      color: 'text-steel-blue'
    },
    { 
      icon: Heart, 
      title: 'Maestría Cum Laude', 
      description: 'En Consejería Clínica',
      color: 'text-sage'
    },
    { 
      icon: Brain, 
      title: 'Especialización', 
      description: 'Método Gottman & ACT',
      color: 'text-accent'
    },
  ];

  const journey = [
    {
      period: "Inicios Profesionales",
      description: "Comencé en el ámbito organizacional, liderando procesos de selección, formación y bienestar laboral.",
      icon: BookOpen
    },
    {
      period: "Expansión Internacional",
      description: "Viví en El Salvador y Guatemala, donde realicé mis estudios de posgrado, enriqueciendo mi perspectiva.",
      icon: MapPin
    },
    {
      period: "Especialización Clínica",
      description: "Más de 15 años acompañando a jóvenes, adultos y parejas en procesos psicoterapéuticos.",
      icon: Heart
    },
    {
      period: "Formación Continua",
      description: "Especialización en Método Gottman, ACT y terapias de tercera generación.",
      icon: Lightbulb
    }
  ];

  const values = [
    {
      title: "Empatía",
      description: "Cada experiencia de dolor ha fortalecido mi empatía y sensibilidad hacia el sufrimiento humano.",
      icon: "💙"
    },
    {
      title: "Esperanza",
      description: "Creo firmemente que sanar es posible y que toda persona puede reconectarse con lo que realmente importa.",
      icon: "🌟"
    },
    {
      title: "Crecimiento",
      description: "Los desafíos personales han sido fuente de aprendizaje y crecimiento tanto personal como profesional.",
      icon: "🌱"
    },
    {
      title: "Autenticidad",
      description: "Como muchas personas que llegan a terapia, también he atravesado desafíos profundos.",
      icon: "✨"
    }
  ];

  return (
    <section id="sobre-mi" className="py-20 bg-muted/10">
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
            Conoce mi historia
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Sobre Mí
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mi propósito es ayudarte a transformar lo que estás viviendo hoy y a descubrir 
            nuevas formas de afrontar tu vida o tu relación.
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <motion.div variants={itemVariants} className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center"
              >
                <Card className="p-6 shadow-elegant hover:shadow-hover transition-all duration-300 bg-gradient-to-br from-background to-muted/20">
                  <CardContent className="p-0">
                    <motion.div
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      className={`inline-flex p-4 rounded-full bg-muted/30 ${achievement.color} mb-4`}
                    >
                      <achievement.icon size={32} />
                    </motion.div>
                    <div className="text-2xl font-bold text-foreground mb-2">
                      {achievement.title}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {achievement.description}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Profile Image Placeholder */}
          <motion.div variants={itemVariants}>
            <Card className="overflow-hidden shadow-elegant">
              <CardContent className="p-0">
                <div className="aspect-square bg-gradient-secondary relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div 
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="w-48 h-48 rounded-full bg-gradient-primary/20 backdrop-blur-sm flex items-center justify-center"
                    >
                      <Heart size={80} className="text-accent" />
                    </motion.div>
                  </div>
                  {/* Floating elements around the photo */}
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-3 h-3 bg-accent/30 rounded-full"
                      style={{
                        left: `${20 + i * 12}%`,
                        top: `${15 + (i % 2) * 70}%`,
                      }}
                      animate={{
                        y: [-10, 10, -10],
                        opacity: [0.3, 0.8, 0.3],
                      }}
                      transition={{
                        duration: 2 + i * 0.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Biography Text */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground flex items-center">
              <Coffee className="mr-3 text-accent" size={32} />
              Mi Historia
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                Soy <span className="text-accent font-semibold">Patricia Rojas R.</span>, psicóloga con una maestría en 
                Consejería Clínica y Salud Mental —reconocida <span className="text-accent font-semibold">Cum Laude</span>— 
                y más de <span className="text-accent font-semibold">25 años de experiencia profesional</span>.
              </p>
              <p>
                Comencé mi carrera en el ámbito organizacional, liderando procesos de selección, 
                formación y bienestar laboral. Desde hace más de 15 años, acompaño a jóvenes, 
                adultos y parejas en sus procesos psicoterapéuticos.
              </p>
              <p>
                Como muchas personas que llegan a terapia, también he atravesado 
                <span className="text-accent font-semibold"> desafíos personales profundos</span>. 
                Estas experiencias han fortalecido mi empatía, sensibilidad y la convicción de que 
                <span className="text-accent font-semibold"> sanar es posible</span>.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Journey Timeline */}
        <motion.div variants={itemVariants} className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-12">Mi Trayectoria Profesional</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {journey.map((step, index) => (
              <motion.div
                key={step.period}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="relative"
              >
                <Card className="p-6 shadow-elegant hover:shadow-hover transition-all duration-300 h-full">
                  <CardContent className="p-0">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="inline-flex p-3 rounded-full bg-gradient-primary/10 text-accent mb-4"
                    >
                      <step.icon size={24} />
                    </motion.div>
                    <h4 className="font-bold text-foreground mb-3">{step.period}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
                {index < journey.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-primary opacity-30" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div variants={itemVariants}>
          <h3 className="text-2xl font-bold text-center mb-12">Mis Valores Fundamentales</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="text-center"
              >
                <Card className="p-6 shadow-elegant hover:shadow-hover transition-all duration-300 h-full">
                  <CardContent className="p-0">
                    <div className="text-4xl mb-4">{value.icon}</div>
                    <h4 className="font-bold text-foreground mb-3">{value.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          variants={itemVariants} 
          className="text-center mt-16 bg-gradient-secondary/20 rounded-2xl p-8"
        >
          <Heart className="w-16 h-16 text-accent mx-auto mb-6" />
          <h3 className="text-2xl font-bold text-foreground mb-4">
            ¿Sientes que es momento de iniciar un cambio?
          </h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Ofrezco sesiones presenciales y virtuales, personalizadas y empáticas, 
            donde podrás desarrollar herramientas para comunicarte con claridad y 
            tomar decisiones alineadas con tus verdaderas necesidades.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;