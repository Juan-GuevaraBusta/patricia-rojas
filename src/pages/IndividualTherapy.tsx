import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart, Brain, Users, MessageCircle, Lightbulb, Shield, Sparkles, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { containerVariants, itemVariants } from '@/utils/animations';

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const specialties = [
    {
      title: 'Ansiedad y Ataques de Pánico',
      description: 'Acompañamiento especializado para comprender y manejar la ansiedad, desarrollando herramientas de regulación emocional.',
      icon: Brain,
      color: 'text-steel-blue',
      bgGradient: 'from-steel-blue/20 to-steel-blue/5',
      featured: true,
      areas: [
        'Ataques de pánico y ansiedad generalizada',
        'Ansiedad social y fobias específicas',
        'Preocupación excesiva y rumiación',
        'Síntomas físicos de la ansiedad',
        'Técnicas de relajación y mindfulness',
        'Reestructuración cognitiva'
      ],
      approach: 'Utilizando enfoques integrativos como ACT, TCC y mindfulness',
      duration: '8-12 sesiones promedio'
    },
    {
      title: 'Depresión y Tristeza Persistente',
      description: 'Proceso terapéutico para reconectar con el bienestar emocional y encontrar sentido y propósito en la vida.',
      icon: Heart,
      color: 'text-terracota',
      bgGradient: 'from-terracota/20 to-terracota/5',
      featured: true,
      areas: [
        'Episodios depresivos mayores',
        'Distimia y tristeza crónica',
        'Pérdida de interés y motivación',
        'Baja autoestima y autovaloración',
        'Aislamiento social',
        'Pensamientos negativos recurrentes'
      ],
      approach: 'Enfoque integrativo basado en ACT y terapias de tercera generación',
      duration: '10-16 sesiones promedio'
    },
    {
      title: 'Procesos de Duelo y Pérdidas',
      description: 'Acompañamiento empático en procesos de duelo por muerte, ruptura, migración o cambios vitales significativos.',
      icon: Lightbulb,
      color: 'text-sage',
      bgGradient: 'from-sage/20 to-sage/5',
      featured: false,
      areas: [
        'Duelo por muerte de ser querido',
        'Duelo por ruptura de pareja',
        'Pérdida de empleo o estatus',
        'Duelo migratorio y cultural',
        'Pérdida de salud o capacidades',
        'Duelo anticipatorio'
      ],
      approach: 'Respetando el ritmo personal y promoviendo la adaptación saludable',
      duration: '6-12 sesiones según el proceso'
    },
    {
      title: 'Crecimiento Personal y Autoestima',
      description: 'Proceso de exploración personal para reconectar con valores, fortalecer autoestima y crear una vida más auténtica.',
      icon: Sparkles,
      color: 'text-blue-gray',
      bgGradient: 'from-blue-gray/20 to-blue-gray/5',
      featured: true,
      areas: [
        'Exploración de valores personales',
        'Fortalecimiento de la autoestima',
        'Desarrollo de asertividad',
        'Manejo del perfeccionismo',
        'Construcción de hábitos saludables',
        'Búsqueda de propósito vital'
      ],
      approach: 'Enfoque humanista centrado en el potencial de crecimiento',
      duration: '8-12 sesiones promedio'
    },
    {
      title: 'Relaciones Interpersonales',
      description: 'Mejora de habilidades sociales, establecimiento de límites saludables y construcción de relaciones más sanas.',
      icon: Users,
      color: 'text-sage-dark',
      bgGradient: 'from-sage-dark/20 to-sage-dark/5',
      featured: false,
      areas: [
        'Dificultades en relaciones familiares',
        'Conflictos interpersonales',
        'Establecimiento de límites',
        'Habilidades de comunicación',
        'Dependencia emocional',
        'Patrones relacionales disfuncionales'
      ],
      approach: 'Trabajo sistémico y enfoque en habilidades sociales',
      duration: '8-14 sesiones promedio'
    },
    {
      title: 'Transiciones Vitales',
      description: 'Apoyo durante momentos de cambio como maternidad, separaciones, mudanzas o cambios profesionales.',
      icon: Shield,
      color: 'text-accent',
      bgGradient: 'from-accent/20 to-accent/5',
      featured: false,
      areas: [
        'Maternidad y paternidad',
        'Separaciones y divorcios',
        'Cambios de carrera profesional',
        'Mudanzas y migración',
        'Transición a la adultez',
        'Jubilación y envejecimiento'
      ],
      approach: 'Apoyo en la adaptación y desarrollo de nuevas estrategias',
      duration: '6-10 sesiones según el proceso'
    },
  ];

  const scrollToContact = () => {
    window.location.href = '/contacto';
  };

  return (
    <section id="terapia-individual" className="py-20 bg-muted/10">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container mx-auto px-6"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 border-terracota text-terracota">
            <Sparkles className="w-4 h-4 mr-2" />
            Terapia Individual
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Áreas de Especialización
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Con enfoques basados en evidencia científica, te acompaño en diferentes aspectos 
            de tu bienestar emocional, adaptándome a tus necesidades específicas para jóvenes y adultos.
          </p>
        </motion.div>

        {/* Specialties Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {specialties.map((specialty, index) => (
            <motion.div
              key={specialty.title}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.01 }}
              className={`h-full ${specialty.featured ? 'lg:col-span-1' : ''}`}
            >
              <Card className={`h-full overflow-hidden shadow-elegant hover:shadow-hover transition-all duration-500 bg-gradient-to-br ${specialty.bgGradient}`}>
                <CardHeader className="relative pb-4">
                  {/* Background decoration */}
                  <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-gradient-primary/5 -translate-y-16 translate-x-16" />
                  
                  {specialty.featured && (
                    <Badge className="absolute top-4 right-4 bg-terracota hover:bg-terracota/90 text-white">
                      Especialidad Principal
                    </Badge>
                  )}
                  
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className={`inline-flex p-4 rounded-2xl bg-background/80 ${specialty.color} mb-4 shadow-sm`}
                  >
                    <specialty.icon size={32} />
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {specialty.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {specialty.description}
                  </p>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Areas of work */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Áreas de trabajo:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {specialty.areas.map((area, areaIndex) => (
                        <motion.div
                          key={area}
                          initial={{ opacity: 0, x: -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ delay: 0.3 + areaIndex * 0.1 }}
                          className="flex items-center space-x-3 p-2 rounded-lg hover:bg-background/50 transition-colors"
                        >
                          <div className={`w-2 h-2 rounded-full ${specialty.color.replace('text-', 'bg-')}`} />
                          <span className="text-sm text-muted-foreground">{area}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Approach and Duration */}
                  <div className="border-t border-border/50 pt-4 space-y-3">
                    <div>
                      <span className="text-sm font-medium text-foreground">Enfoque: </span>
                      <span className="text-sm text-muted-foreground">{specialty.approach}</span>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-foreground">Duración típica: </span>
                      <span className="text-sm text-muted-foreground">{specialty.duration}</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button 
                    variant="outline"
                    className="w-full group hover:bg-terracota hover:text-white hover:border-terracota transition-all duration-300"
                    onClick={scrollToContact}
                  >
                    Consultar sobre esta especialidad
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Therapeutic Approach Section */}
        <motion.div variants={itemVariants} className="mb-16">
          <Card className="shadow-elegant bg-gradient-to-br from-background to-muted/20">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <MessageCircle className="w-16 h-16 text-terracota mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-4">Mi Enfoque Terapéutico</h3>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Mi trabajo se desarrolla en un espacio confidencial, empático y libre de juicios, 
                  pensado para que cada persona pueda conectar con su historia, emociones y 
                  pensamientos de manera segura y auténtica.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <motion.div whileHover={{ scale: 1.05 }} className="text-center p-4">
                  <div className="w-12 h-12 bg-terracota/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Enfoque Integrativo</h4>
                  <p className="text-sm text-muted-foreground">
                    Combino Terapia ACT, enfoques humanistas y técnicas de tercera generación según tus necesidades.
                  </p>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.05 }} className="text-center p-4">
                  <div className="w-12 h-12 bg-terracota/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Colaboración Activa</h4>
                  <p className="text-sm text-muted-foreground">
                    Trabajamos juntos como equipo hacia tus objetivos de bienestar y crecimiento personal.
                  </p>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.05 }} className="text-center p-4">
                  <div className="w-12 h-12 bg-terracota/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">💡</span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Herramientas Prácticas</h4>
                  <p className="text-sm text-muted-foreground">
                    Te proporciono estrategias concretas que puedes aplicar en tu vida diaria.
                  </p>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Call to Action */}
        <motion.div variants={itemVariants} className="text-center">
          <Card className="max-w-4xl mx-auto shadow-elegant bg-gradient-to-br from-terracota/5 to-terracota/10 border border-terracota/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                ¿No estás seguro qué especialidad necesitas?
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                En nuestra primera sesión evaluaremos juntos cuál es el enfoque más 
                adecuado para tu situación particular. No tienes que decidir solo.
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  size="lg" 
                  onClick={scrollToContact}
                  className="bg-terracota hover:bg-terracota/90 text-white shadow-hover hover:shadow-glow transition-all duration-300 px-8 py-4"
                >
                  Agenda una Sesión de Evaluación
                </Button>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;