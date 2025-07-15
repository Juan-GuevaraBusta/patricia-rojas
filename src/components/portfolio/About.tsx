import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { User, Heart, Target, Award, MapPin, Book } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { containerVariants, itemVariants } from '@/utils/animations';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const stats = [
    { icon: Award, number: '25+', label: 'Años de experiencia' },
    { icon: Target, number: '15+', label: 'Años en psicoterapia' },
    { icon: Heart, number: '100%', label: 'Satisfacción del cliente' },
    { icon: User, number: '24/7', label: 'Disponibilidad online' },
  ];

  const formacionComplementaria = [
    'Manejo de Infidelidad – Instituto Gottman',
    'Terapia de Pareja, Niveles 1 y 2 – Instituto Gottman',
    'Terapias Psicológicas de Tercera Generación – Universidad Pontificia Bolivariana de Santander',
    'Terapia de Aceptación y Compromiso (ACT) – Universidad Pontificia Bolivariana de Santander'
  ];

  return (
    <section id="sobre-mi" className="py-20 bg-muted/20">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container mx-auto px-6"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Conoce más sobre mí
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Soy Patricia Rojas R., psicóloga con una maestría en Consejería Clínica y Salud Mental 
            —reconocida Cum Laude— y más de 25 años de experiencia profesional.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div variants={itemVariants}>
            <Card className="overflow-hidden shadow-elegant">
              <CardContent className="p-0">
                <div className="aspect-square bg-gradient-secondary relative">
                  {/* Placeholder para imagen de perfil */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-40 h-40 rounded-full bg-card shadow-hover flex items-center justify-center">
                      <User size={60} className="text-accent" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <div className="bg-card p-6 rounded-lg shadow-elegant border">
              <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                <Heart className="mr-3 text-accent" size={24} />
                Mi Historia
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Soy <strong className="text-accent">PRR</strong>, psicóloga con una maestría en Consejería Clínica y Salud Mental 
                  —<strong className="text-accent">reconocida Cum Laude</strong>— y más de 25 años de experiencia profesional. 
                  Comencé mi carrera en el ámbito organizacional, liderando procesos de selección, 
                  formación y bienestar laboral.
                </p>
                <p>
                  Desde hace más de 15 años, acompaño a jóvenes, 
                  adultos y parejas en sus procesos psicoterapéuticos con el objetivo de alcanzar 
                  bienestar emocional, sanar heridas del pasado y reconectar con un propósito vital.
                </p>
                <p>
                  He tenido la oportunidad de vivir en <strong className="text-accent">El Salvador y Guatemala</strong>, países donde realicé 
                  mis estudios de posgrado. Estas vivencias personales y profesionales ampliaron mi 
                  perspectiva y enriquecieron mi comprensión de la diversidad humana y sus realidades.
                </p>
                <p>
                  Como muchas personas que llegan a terapia, también he atravesado desafíos 
                  personales profundos. Algunos los he superado con éxito, otros han sido fuente de 
                  aprendizaje y crecimiento. He conocido la frustración, la pérdida, pero también la 
                  alegría y la gratitud. Estas experiencias han fortalecido mi empatía, sensibilidad 
                  y la convicción de que <strong className="text-accent">sanar es posible</strong> y que toda persona puede reconectarse 
                  con lo que realmente importa.
                </p>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-elegant border">
              <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                <Target className="mr-2 text-accent" size={20} />
                Mi Propósito
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                Mi propósito es ayudarte a transformar lo que estás viviendo hoy y a descubrir 
                nuevas formas de afrontar tu vida o tu relación. Ofrezco <strong className="text-accent">sesiones presenciales y 
                virtuales</strong>, personalizadas y empáticas, donde podrás desarrollar herramientas para 
                comunicarte con claridad, establecer límites saludables y tomar decisiones alineadas 
                con tus verdaderas necesidades.
              </p>
            </div>

            <div className="flex items-center space-x-2 text-accent bg-muted/20 p-3 rounded-lg border">
              <MapPin size={20} />
              <span className="font-medium">Madrid, España • Sesiones presenciales y virtuales</span>
            </div>
          </motion.div>
        </div>

        {/* Estadísticas */}
        <motion.div variants={itemVariants} className="mb-16">
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

        {/* Mi Enfoque Terapéutico */}
        <motion.div variants={itemVariants} className="mb-16">
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="text-2xl text-center flex items-center justify-center">
                <Heart className="mr-3 text-accent" size={28} />
                Mi Enfoque Terapéutico
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Mi trabajo se desarrolla en un espacio confidencial, empático y libre de juicios, pensado 
                para que cada persona pueda conectar con su historia, emociones y pensamientos de 
                manera segura y auténtica. Creo firmemente que cuando nos sentimos escuchados y 
                comprendidos, es posible explorar con mayor claridad tanto aquello que nos duele como 
                aquello que nos moviliza.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Me enfoco en comprender y trabajar el estilo de afrontamiento de cada consultante: cómo 
                responde ante el malestar y qué estrategias ha desarrollado para protegerse. Abordo este 
                proceso desde un enfoque integrativo, con una base sólida en la Terapia de Aceptación y 
                Compromiso (ACT), que promueve una relación más flexible, consciente y compasiva con la 
                experiencia interna.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                En el trabajo con parejas, integro los principios del Método Gottman, un enfoque respaldado 
                por décadas de investigación científica, que ha identificado los elementos clave para 
                construir y sostener relaciones estables, saludables y emocionalmente conectadas.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                En la práctica, esto significa ayudar a las personas a observar sus pensamientos sin quedar 
                atrapadas en ellos, validar sus emociones sin dejar que las paralicen, y avanzar hacia una 
                vida más plena mediante acciones alineadas con sus valores personales y relacionales.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Formato de Sesiones */}
        <motion.div variants={itemVariants} className="mb-16">
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="text-2xl text-center flex items-center justify-center">
                <Target className="mr-3 text-accent" size={28} />
                Formato de las Sesiones
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-card p-4 rounded-lg shadow-hover border-l-4 border-accent">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-3 h-3 bg-accent rounded-full"></div>
                    <span className="font-medium text-foreground">Modalidad:</span>
                  </div>
                  <span className="text-muted-foreground">Presencial u Online</span>
                </div>
                <div className="bg-card p-4 rounded-lg shadow-hover border-l-4 border-accent">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-3 h-3 bg-accent rounded-full"></div>
                    <span className="font-medium text-foreground">Frecuencia:</span>
                  </div>
                  <span className="text-muted-foreground">Una vez por semana es lo más recomendable, aunque puede ajustarse a cada situación</span>
                </div>
                <div className="bg-card p-4 rounded-lg shadow-hover border-l-4 border-accent">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-3 h-3 bg-accent rounded-full"></div>
                    <span className="font-medium text-foreground">Duración:</span>
                  </div>
                  <span className="text-muted-foreground">50 minutos por sesión</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Testimonio */}
        <motion.div variants={itemVariants} className="mb-16">
          <Card className="shadow-elegant bg-gradient-secondary">
            <CardContent className="p-8 text-center">
              <blockquote className="text-lg italic text-sage-dark mb-4">
                "Me ayudó a comprender mi ansiedad y a conectarme con mis objetivos de vida."
              </blockquote>
              <cite className="text-muted-foreground">— Paciente, 2025</cite>
            </CardContent>
          </Card>
        </motion.div>

        {/* Formación Complementaria */}
        <motion.div variants={itemVariants} className="mb-16">
          <Card className="shadow-elegant bg-gradient-to-br from-background to-muted/20">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl flex items-center justify-center">
                <Book className="mr-3 text-accent" size={28} />
                Formación Complementaria
              </CardTitle>
              <p className="text-muted-foreground mt-4 max-w-3xl mx-auto">
                A lo largo de mi trayectoria, me he comprometido con la actualización constante y la 
                profundización de herramientas clínicas que enriquezcan mi práctica. Entre mis 
                principales formaciones especializadas destaco:
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {formacionComplementaria.map((formacion, index) => (
                  <motion.div 
                    key={index} 
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    className="bg-card p-4 rounded-lg shadow-hover border-l-4 border-accent"
                  >
                    <div className="flex items-start">
                      <div className="w-3 h-3 bg-accent rounded-full mt-1 mr-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground font-medium">{formacion}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-accent/10 rounded-lg border border-accent/20">
                <div className="flex items-center justify-center mb-4">
                  <Award className="text-accent mr-2" size={24} />
                  <span className="text-accent font-semibold">Especialización Reconocida</span>
                </div>
                <p className="text-center text-muted-foreground">
                  Todas mis formaciones están respaldadas por instituciones de prestigio internacional 
                  como el <strong className="text-accent">Instituto Gottman</strong> y la <strong className="text-accent">Universidad Pontificia Bolivariana</strong>,
                  garantizando la más alta calidad en mi práctica clínica.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Call to Action */}
        <motion.div variants={itemVariants} className="text-center mt-16">
          <Card className="max-w-2xl mx-auto shadow-elegant bg-gradient-secondary">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                ¿Sientes que es momento de iniciar un cambio?
              </h3>
              <p className="text-muted-foreground mb-6">
                Mi propósito es ayudarte a transformar lo que estás viviendo hoy y a descubrir 
                nuevas formas de afrontar tu vida o tu relación. Ofrezco sesiones presenciales y 
                virtuales, personalizadas y empáticas.
              </p>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-gradient-primary text-primary-foreground px-8 py-3 rounded-lg font-medium shadow-hover hover:shadow-glow transition-all duration-300"
              >
                Agenda tu primera sesión
              </motion.button>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;