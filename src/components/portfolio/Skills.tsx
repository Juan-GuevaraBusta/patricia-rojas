import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart, Brain, Users, Lightbulb, Target, Compass } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { containerVariants, itemVariants } from '@/utils/animations';

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const enfoquesTerapeuticos = [
    {
      title: 'Terapia de Aceptación y Compromiso (ACT)',
      icon: Brain,
      color: 'text-accent',
      description: 'Enfoque contemporáneo basado en evidencia que desarrolla flexibilidad psicológica para adaptarse a situaciones difíciles y actuar en coherencia con los valores personales.',
      procesos: [
        'Aceptación de la experiencia interna',
        'Defusión cognitiva',
        'Contacto con el momento presente',
        'El yo como contexto',
        'Clarificación de valores',
        'Acción comprometida'
      ],
      aplicaciones: ['Ansiedad y depresión', 'Estrés crónico', 'Problemas de relación', 'Duelos y cambio personal']
    },
    {
      title: 'Método Gottman para Parejas',
      icon: Heart,
      color: 'text-magenta',
      description: 'Enfoque basado en más de 40 años de investigación científica sobre relaciones exitosas, que identifica comportamientos que predicen la estabilidad de una relación.',
      procesos: [
        'Mapas de amor',
        'Cultura de aprecio y admiración',
        'Acercamientos y conexión diaria',
        'Manejo constructivo del conflicto',
        'Influencia mutua',
        'Crear significado compartido'
      ],
      aplicaciones: ['Dificultades de comunicación', 'Infidelidad y traición', 'Pérdida de conexión emocional', 'Prevención de conflictos']
    },
    {
      title: 'Mindfulness y Atención Plena',
      icon: Compass,
      color: 'text-sage',
      description: 'Práctica basada en tradiciones contemplativas y validada científicamente para cultivar la atención consciente y mejorar el bienestar psicológico.',
      procesos: [
        'Atención intencional al presente',
        'Actitud de apertura y curiosidad',
        'Presencia no reactiva',
        'Observación sin juicio',
        'Regulación emocional',
        'Tolerancia al malestar'
      ],
      aplicaciones: ['Reducción de ansiedad y estrés', 'Mejora de la concentración', 'Regulación emocional', 'Dolor crónico']
    },
    {
      title: 'Terapia Cognitivo Conductual (TCC)',
      icon: Lightbulb,
      color: 'text-steel-blue',
      description: 'Enfoque terapéutico estructurado que se centra en identificar y cambiar patrones de pensamiento y comportamiento disfuncionales.',
      procesos: [
        'Identificación de pensamientos automáticos',
        'Reestructuración cognitiva',
        'Técnicas conductuales',
        'Exposición gradual',
        'Prevención de recaídas',
        'Tareas entre sesiones'
      ],
      aplicaciones: ['Trastornos de ansiedad', 'Depresión', 'Fobias específicas', 'Trastorno obsesivo-compulsivo']
    },
    {
      title: 'Terapias de Tercera Generación',
      icon: Target,
      color: 'text-blue-gray',
      description: 'Enfoques contextuales que integran mindfulness, aceptación y valores, representando la evolución más reciente en psicoterapia.',
      procesos: [
        'Flexibilidad psicológica',
        'Aceptación radical',
        'Compromiso con valores',
        'Conciencia plena',
        'Desactivación de evitación',
        'Construcción de contexto'
      ],
      aplicaciones: ['Trastornos complejos', 'Dolor crónico', 'Trauma', 'Desarrollo personal']
    },
    {
      title: 'Enfoque Integrativo',
      icon: Users,
      color: 'text-sage-dark',
      description: 'Combinación personalizada de diferentes enfoques terapéuticos según las necesidades específicas de cada consultante.',
      procesos: [
        'Evaluación integral',
        'Adaptación del enfoque',
        'Técnicas multimodales',
        'Validación emocional',
        'Trabajo experiencial',
        'Seguimiento personalizado'
      ],
      aplicaciones: ['Casos complejos', 'Múltiples problemáticas', 'Resistencia terapéutica', 'Necesidades específicas']
    }
  ];

  return (
    <section id="habilidades" className="py-20">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container mx-auto px-6"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Mi Enfoque Terapéutico
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Trabajo desde un enfoque integrativo, con fuerte base en la Terapia de Aceptación y Compromiso (ACT). 
            Acompaño a las personas a desarrollar flexibilidad psicológica y comprometerse con una vida alineada a sus valores.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {enfoquesTerapeuticos.map((enfoque, index) => (
            <motion.div
              key={enfoque.title}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="h-full"
            >
              <Card className="h-full shadow-elegant hover:shadow-hover transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-full bg-muted mr-4">
                      <enfoque.icon size={32} className={enfoque.color} />
                    </div>
                    <CardTitle className="text-xl">{enfoque.title}</CardTitle>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {enfoque.description}
                  </p>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Procesos Principales:</h4>
                    <div className="grid gap-2">
                      {enfoque.procesos.map((proceso, i) => (
                        <div key={i} className="flex items-start">
                          <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-sm text-muted-foreground">{proceso}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Aplicaciones:</h4>
                    <div className="flex flex-wrap gap-2">
                      {enfoque.aplicaciones.map((aplicacion) => (
                        <Badge key={aplicacion} variant="outline" className="text-xs">
                          {aplicacion}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Mensaje sobre el enfoque integrativo */}
        <motion.div variants={itemVariants} className="mt-16">
          <Card className="shadow-elegant bg-gradient-secondary">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Mi Trabajo se Desarrolla en un Espacio Seguro
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                Creo un ambiente confidencial, empático y libre de juicios, pensado para que cada persona pueda 
                conectar con su historia, emociones y pensamientos de manera segura y auténtica. Me enfoco en 
                comprender y trabajar el estilo de afrontamiento de cada consultante: cómo responde ante el 
                malestar y qué estrategias ha desarrollado para protegerse.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;