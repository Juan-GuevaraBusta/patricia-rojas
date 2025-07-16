import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { User, Heart, Target, Award, Book, ArrowLeft, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { containerVariants, itemVariants } from '@/utils/animations';
import { useNavigate } from 'react-router-dom';

const TherapeuticApproaches = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const navigate = useNavigate();

  // Datos estructurados para optimizar el código
  const actProcesses = [
    { title: "Aceptación", description: "Abrirnos a la experiencia interna en lugar de luchar contra ella." },
    { title: "Defusión cognitiva", description: "Observar nuestros pensamientos como eventos mentales, no como verdades absolutas." },
    { title: "Contacto con el momento presente", description: "Cultivar la atención plena." },
    { title: "El yo como contexto", description: "Desarrollar una perspectiva más amplia y estable de uno mismo." },
    { title: "Clarificación de valores", description: "Identificar lo que realmente importa en la vida." },
    { title: "Acción comprometida", description: "Dar pasos concretos en dirección a esos valores." }
  ];

  const actApplications = [
    "Ansiedad y depresión", "Estrés crónico", "Dolor crónico", "Problemas de relación",
    "Adicciones", "Trastornos alimentarios", "Duelos y procesos de cambio personal"
  ];

  const gottmanPillars = [
    { number: "1", title: "Mapas de amor", description: "Construir un conocimiento profundo de la vida interna de la pareja (emociones, historia, aspiraciones, sueños)." },
    { number: "2", title: "Cultura de aprecio y admiración", description: "Fomentar el reconocimiento positivo como base emocional del vínculo." },
    { number: "3", title: "Acercamientos y conexión diaria", description: "Mantener rituales de cercanía y afecto para fortalecer la intimidad." },
    { number: "4", title: "Manejo constructivo del conflicto", description: "Aprender a discutir sin destruir, diferenciando entre problemas resolubles y perpetuos." },
    { number: "5", title: "Influencia mutua", description: "Tomar decisiones en conjunto y respetar las opiniones del otro." },
    { number: "6", title: "Crear significado compartido", description: "Desarrollar una vida en común que tenga sentido, valores y rituales compartidos." }
  ];

  const gottmanIssues = [
    "Dificultades en la comunicación", "Ciclos de discusión repetitivos", "Pérdida de la conexión emocional",
    "Infidelidad y traición", "Dificultades en la toma de decisiones como pareja",
    "Desequilibrio en las tareas o roles familiares", "Falta de intimidad o deseo sexual"
  ];

  const mindfulnessPrinciples = [
    { title: "Atención intencional al momento presente", description: "focalizarse deliberadamente en lo que ocurre aquí y ahora, sin distracción." },
    { title: "Actitud de apertura y curiosidad", description: "explorar la experiencia con aceptación, sin juzgar ni rechazar lo que surge." },
    { title: "Presencia no reactiva", description: "observar pensamientos, emociones y sensaciones sin dejarse arrastrar por ellos." }
  ];

  const mindfulnessBenefits = [
    "Reduce la ansiedad, el estrés y la depresión",
    "Mejora la regulación emocional y la tolerancia al malestar",
    "Incrementa la resiliencia, la creatividad y la capacidad de resolución",
    "Alivia dolencias físicas como el dolor crónico y mejora los síntomas del insomnio"
  ];

  const mindfulnessContexts = [
    "Terapia psicológica como complemento a enfoques como ACT, TCC o EMDR",
    "Reducción del estrés en entornos laborales, educativos o personales",
    "Apoyo a la salud física, especialmente en casos de dolor persistente, enfermedades crónicas o insomnio",
    "Desarrollo personal, mejorando la atención, la empatía y la calidad de vida cotidiana"
  ];

  const mindfulnessPractices = [
    { title: "Meditación formal", description: "ejercicios de respiración, escaneo corporal, atención a sonidos o pensamientos" },
    { title: "Ejercicios informales", description: "prácticas de atención en actividades cotidianas como comer, caminar o lavar platos" },
    { title: "Mindful breaks", description: "pausas conscientes durante el día para recuperar presencia y calma" }
  ];

  const intersessionObjectives = [
    "Consolidar aprendizajes", "Generar nuevas experiencias emocionales", "Identificar patrones automáticos",
    "Poner en práctica habilidades", "Fortalecer la autonomía y el compromiso con el proceso"
  ];

  const intersessionTasks = [
    "Ejercicios de autorregistro (pensamientos, emociones, conductas)",
    "Prácticas de mindfulness o respiración consciente",
    "Exposición gradual a situaciones evitadas",
    "Tareas creativas como escribir, dibujar, construir mapas de valores",
    "Pequeños compromisos conductuales coherentes con los valores"
  ];

  const therapeuticTools = ["Mindfulness", "Tareas intersesión", "Metáforas", "Experiencias vivenciales"];

  // Componente reutilizable para listas con viñetas
  const BulletList = ({ items, bulletColor = "bg-accent" }) => (
    <div className="space-y-2">
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          <div className={`w-2 h-2 ${bulletColor} rounded-full mr-3`}></div>
          <span className="text-muted-foreground text-sm">{item}</span>
        </div>
      ))}
    </div>
  );

  // Componente para procesos numerados
  const NumberedProcess = ({ processes, bgColor = "bg-accent" }) => (
    <div className="grid md:grid-cols-2 gap-4">
      {processes.map((process, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          className="bg-card p-4 rounded-lg shadow-hover border-l-4 border-accent"
        >
          <div className="flex items-start">
            <div className={`w-6 h-6 ${bgColor} rounded-full flex items-center justify-center text-primary-foreground text-sm font-semibold mr-3 mt-0.5 flex-shrink-0`}>
              {process.number || index + 1}
            </div>
            <div>
              <h6 className="font-semibold text-foreground mb-1">{process.title}</h6>
              <p className="text-sm text-muted-foreground">{process.description}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      <section className="py-20">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="container mx-auto px-6"
        >
          {/* Botón de regreso */}
          <motion.div variants={itemVariants} className="mb-8">
            <Button 
              variant="outline" 
              onClick={() => navigate('/sobre-mi')}
              className="flex items-center gap-2 hover:bg-accent hover:text-accent-foreground"
            >
              <ArrowLeft size={16} />
              Volver a Mi Historia
            </Button>
          </motion.div>

          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Mis Enfoques Terapéuticos
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Descubre las metodologías basadas en evidencia científica que utilizo para 
              acompañarte en tu proceso de transformación personal y relacional.
            </p>
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
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>Mi trabajo se desarrolla en un espacio confidencial, empático y libre de juicios, pensado para que cada persona pueda conectar con su historia, emociones y pensamientos de manera segura y auténtica.</p>
                  <p>Me enfoco en comprender y trabajar el estilo de afrontamiento de cada consultante desde un enfoque integrativo, con base sólida en la Terapia de Aceptación y Compromiso (ACT).</p>
                  <p>En parejas, integro los principios del Método Gottman, respaldado por décadas de investigación científica para construir relaciones estables y emocionalmente conectadas.</p>
                </div>

                {/* ACT Section */}
                <div className="mt-8 p-6 bg-gradient-to-br from-accent/5 to-accent/10 rounded-lg border border-accent/20">
                  <h4 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                    <Target className="mr-2 text-accent" size={20} />
                    Terapia de Aceptación y Compromiso (ACT)
                  </h4>
                  
                  <div className="space-y-6">
                    <div className="bg-card p-4 rounded-lg shadow-hover border-l-4 border-accent">
                      <h5 className="text-lg font-semibold text-foreground mb-3">Filosofía de ACT</h5>
                      <p className="text-muted-foreground leading-relaxed">
                        ACT parte de un principio esencial: <strong className="text-accent">el dolor es inevitable</strong>, 
                        pero no tiene por qué convertirse en sufrimiento crónico. El objetivo es desarrollar 
                        <strong className="text-accent"> flexibilidad psicológica</strong> para adaptarnos y actuar 
                        en coherencia con nuestros valores.
                      </p>
                    </div>

                    <div>
                      <h5 className="text-lg font-semibold text-foreground mb-4">Seis Procesos Fundamentales:</h5>
                      <NumberedProcess processes={actProcesses} />
                    </div>

                    <div className="bg-gradient-to-br from-muted/30 to-muted/10 rounded-lg border border-muted/30 p-6">
                      <h5 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                        <User className="mr-2 text-accent" size={18} />
                        ¿Para quién es útil ACT?
                      </h5>
                      <p className="text-muted-foreground mb-4">ACT ha demostrado eficacia en una amplia gama de problemáticas:</p>
                      <div className="grid md:grid-cols-2 gap-3 mb-4">
                        <BulletList items={actApplications} />
                      </div>
                      <div className="bg-card p-4 rounded-lg shadow-hover border-l-4 border-accent">
                        <p className="text-accent font-medium text-center italic">
                          "ACT no busca que te sientas bien todo el tiempo, sino ayudarte a vivir mejor, incluso en medio de las dificultades."
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Gottman Method */}
                <div className="mt-8 p-6 bg-gradient-to-br from-sage-light/20 to-sage/10 rounded-lg border border-sage/30">
                  <h4 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                    <Heart className="mr-2 text-accent" size={20} />
                    Método Gottman
                  </h4>
                  
                  <div className="bg-card p-4 rounded-lg shadow-hover border-l-4 border-accent mb-6">
                    <h5 className="text-lg font-semibold text-foreground mb-3">¿Qué es el Método Gottman?</h5>
                    <p className="text-muted-foreground leading-relaxed">
                      Enfoque basado en <strong className="text-accent">más de 40 años de investigación científica</strong> 
                      sobre relaciones exitosas, desarrollado por John y Julie Gottman. Ofrece herramientas prácticas 
                      para fortalecer la amistad, el manejo del conflicto y la construcción de un proyecto de vida compartido.
                    </p>
                  </div>

                  <div className="mb-6">
                    <h5 className="text-lg font-semibold text-foreground mb-4">Los Pilares del Método Gottman</h5>
                    <p className="text-muted-foreground mb-4">
                      Graficados en la <strong className="text-accent">"Casa de la Relación Sólida"</strong> 
                      sostenida por la confianza y el compromiso:
                    </p>
                    <NumberedProcess processes={gottmanPillars} bgColor="bg-accent" />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-card p-4 rounded-lg shadow-hover border border-accent/20">
                      <h5 className="text-lg font-semibold text-foreground mb-3">¿Qué aborda?</h5>
                      <BulletList items={gottmanIssues} />
                    </div>
                    <div className="bg-card p-4 rounded-lg shadow-hover border border-accent/20">
                      <h5 className="text-lg font-semibold text-foreground mb-3">¿Para quién es útil?</h5>
                      <div className="space-y-3 text-sm text-muted-foreground">
                        <p>Útil tanto para <strong className="text-accent">parejas en crisis</strong> como para quienes desean fortalecer su vínculo.</p>
                        <p>También valioso para <strong className="text-accent">terapia prematrimonial</strong> y parejas en transiciones vitales.</p>
                        <div className="bg-accent/10 p-3 rounded-lg border border-accent/20">
                          <p className="text-accent font-medium italic text-center">
                            "No busca 'quién tiene la razón', sino cómo construir una relación más saludable y conectada."
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Herramientas Terapéuticas */}
          <motion.div variants={itemVariants} className="mb-16">
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl text-center flex items-center justify-center">
                  <Target className="mr-3 text-accent" size={28} />
                  Herramientas Terapéuticas
                </CardTitle>
              </CardHeader>
              <CardContent>
                {/* Tools Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                  {therapeuticTools.map((tool, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      whileHover={{ scale: 1.05 }}
                      className="bg-card p-4 rounded-lg shadow-hover border-l-4 border-accent text-center cursor-pointer"
                    >
                      <span className="font-medium text-foreground">{tool}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Mindfulness */}
                <div className="bg-card p-6 rounded-lg shadow-hover border border-accent/20 mb-8">
                  <h5 className="text-xl font-bold text-foreground mb-4 flex items-center">
                    <Heart className="mr-2 text-accent" size={20} />
                    Mindfulness
                  </h5>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Práctica basada en tradiciones meditativas orientales, adaptada al contexto clínico y apoyada por investigación científica. 
                    <strong className="text-accent"> Jon Kabat-Zinn</strong> introdujo este enfoque en la medicina moderna.
                  </p>

                  <div className="space-y-6">
                    <div>
                      <h6 className="text-lg font-semibold text-foreground mb-4">Principios básicos</h6>
                      <NumberedProcess processes={mindfulnessPrinciples} />
                    </div>

                    <div>
                      <h6 className="text-lg font-semibold text-foreground mb-4">Beneficios comprobados</h6>
                      <div className="grid md:grid-cols-2 gap-3">
                        <BulletList items={mindfulnessBenefits} />
                      </div>
                    </div>

                    <div>
                      <h6 className="text-lg font-semibold text-foreground mb-4">Contextos de aplicación</h6>
                      <BulletList items={mindfulnessContexts} />
                    </div>

                    <div>
                      <h6 className="text-lg font-semibold text-foreground mb-4">¿Cómo practicar?</h6>
                      <div className="grid md:grid-cols-3 gap-4">
                        {mindfulnessPractices.map((practice, index) => (
                          <div key={index} className="bg-muted/20 p-4 rounded-lg border border-accent/20">
                            <h6 className="font-semibold text-foreground mb-2">{practice.title}:</h6>
                            <p className="text-sm text-muted-foreground">{practice.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-accent/10 p-6 rounded-lg border border-accent/20">
                      <p className="text-accent font-medium italic text-center">
                        "Mindfulness no evita que sientas lo difícil, pero sí cambia tu forma de estar con ello: 
                        con apertura, atención y humanidad."
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tareas Intersesiones */}
                <div className="bg-card p-6 rounded-lg shadow-hover border border-accent/20 mb-8">
                  <h5 className="text-xl font-bold text-foreground mb-4 flex items-center">
                    <Target className="mr-2 text-accent" size={20} />
                    Tareas Intersesiones
                  </h5>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    El cambio ocurre también entre sesiones. Las <strong className="text-accent">tareas intersesiones</strong> 
                    permiten llevar el trabajo terapéutico a la vida cotidiana.
                  </p>

                  <div className="space-y-6">
                    <div>
                      <h6 className="text-lg font-semibold text-foreground mb-4">Objetivos</h6>
                      <div className="grid md:grid-cols-2 gap-3">
                        <BulletList items={intersessionObjectives} />
                      </div>
                    </div>

                    <div>
                      <h6 className="text-lg font-semibold text-foreground mb-4">Tipos de tareas</h6>
                      <BulletList items={intersessionTasks} />
                    </div>

                    <div className="bg-accent/10 p-4 rounded-lg border border-accent/20">
                      <p className="text-accent font-medium italic text-center">
                        "No son deberes escolares, sino oportunidades de poner en acción el deseo de cambio, 
                        a tu ritmo y con acompañamiento profesional."
                      </p>
                    </div>
                  </div>
                </div>

                {/* Metáforas y Experiencias Vivenciales */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-card p-6 rounded-lg shadow-hover border border-accent/20">
                    <h5 className="text-xl font-bold text-foreground mb-4 flex items-center">
                      <Book className="mr-2 text-accent" size={20} />
                      Metáforas Terapéuticas
                    </h5>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Comparaciones simbólicas que ayudan a dar sentido a lo complejo, conectar con la experiencia emocional y promover el cambio.
                    </p>
                    <div className="bg-gradient-to-br from-accent/5 to-accent/10 p-4 rounded-lg border border-accent/20">
                      <h6 className="font-semibold text-foreground mb-2">Ejemplo: "Como ir al médico"</h6>
                      <p className="text-sm text-muted-foreground">
                        "Ir a terapia es como ir al médico cuando algo duele. Exponemos esa herida emocional. 
                        <strong className="text-accent"> No venimos porque somos débiles, sino porque queremos sanar.</strong>"
                      </p>
                    </div>
                  </div>

                  <div className="bg-card p-6 rounded-lg shadow-hover border border-accent/20">
                    <h5 className="text-xl font-bold text-foreground mb-4 flex items-center">
                      <User className="mr-2 text-accent" size={20} />
                      Experiencias Vivenciales
                    </h5>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      <strong className="text-accent">Ejercicios prácticos y emocionalmente significativos</strong> que permiten 
                      vivir en sesión los procesos centrales del cambio terapéutico.
                    </p>
                    <div className="bg-muted/20 p-4 rounded-lg border-l-4 border-accent">
                      <p className="text-accent font-medium italic">
                        "Su propósito es abrir nuevas posibilidades de respuesta frente al sufrimiento y fomentar 
                        acciones comprometidas con los valores personales."
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center">
            <Card className="max-w-3xl mx-auto shadow-elegant bg-gradient-primary">
              <CardContent className="p-8 text-center">
                <h3 className="text-3xl font-bold text-primary-foreground mb-4">
                  ¿Listo para comenzar tu proceso de transformación?
                </h3>
                <p className="text-primary-foreground/90 mb-6 text-lg">
                  Con más de 25 años de experiencia y enfoques basados en evidencia científica, 
                  estoy aquí para acompañarte en tu camino hacia el bienestar emocional.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-primary-foreground/10 p-4 rounded-lg">
                    <h4 className="font-semibold text-primary-foreground mb-2">Terapia Individual</h4>
                    <p className="text-primary-foreground/80 text-sm">
                      ACT, Mindfulness y herramientas personalizadas para tu crecimiento personal
                    </p>
                  </div>
                  <div className="bg-primary-foreground/10 p-4 rounded-lg">
                    <h4 className="font-semibold text-primary-foreground mb-2">Terapia de Pareja</h4>
                    <p className="text-primary-foreground/80 text-sm">
                      Método Gottman para fortalecer y sanar tu relación
                    </p>
                  </div>
                </div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    onClick={() => navigate('/contacto')}
                    className="bg-primary-foreground text-primary px-8 py-3 rounded-lg font-medium shadow-hover hover:shadow-glow transition-all duration-300"
                  >
                    <Calendar className="mr-2" size={20} />
                    Agenda tu primera sesión
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default TherapeuticApproaches;