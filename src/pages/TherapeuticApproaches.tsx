import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { User, Heart, Target, Award, MapPin, Book } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { containerVariants, itemVariants } from '@/utils/animations';

const TherapeuticApproaches = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="enfoques-terapeuticos" className="py-20 bg-background">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="container mx-auto px-6"
      >
        {/* Título de la sección */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Mis Enfoques Terapéuticos
          </h2>
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

              {/* Terapia de Aceptación y Compromiso (ACT) */}
              <div className="mt-8 p-6 bg-gradient-to-br from-accent/5 to-accent/10 rounded-lg border border-accent/20">
                <h4 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                  <Target className="mr-2 text-accent" size={20} />
                  Terapia de Aceptación y Compromiso (ACT)
                </h4>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  La Terapia de Aceptación y Compromiso comparte raíces científicas con la Terapia Cognitivo 
                  Conductual (TCC), pero difieren en su enfoque. Mientras que la TCC clásica se centra en 
                  cambiar el contenido de los pensamientos, <strong className="text-accent">ACT se enfoca en cambiar 
                  la relación con esos pensamientos</strong>. Ambas se complementan y se integran en muchos 
                  contextos clínicos actuales.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Por esta razón se dice que ACT es un enfoque terapéutico contemporáneo, basado en evidencia 
                  y perteneciente a las llamadas <strong className="text-accent">terapias contextuales o de tercera generación</strong>, 
                  que representan la última generación en terapias.
                </p>

                <div className="bg-card p-4 rounded-lg shadow-hover border-l-4 border-accent mb-6">
                  <h5 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                    <Heart className="mr-2 text-accent" size={18} />
                    Filosofía de ACT
                  </h5>
                  <p className="text-muted-foreground leading-relaxed">
                    ACT parte de un principio esencial: <strong className="text-accent">el dolor es una experiencia inevitable 
                    en la vida humana</strong>, pero no tiene por qué convertirse en sufrimiento crónico ni impedirnos 
                    vivir con plenitud. El objetivo no es eliminar el malestar, sino desarrollar <strong className="text-accent">
                    flexibilidad psicológica</strong>, es decir, la capacidad de adaptarnos a situaciones difíciles, 
                    mantenernos presentes y actuar en coherencia con lo que verdaderamente importa.
                  </p>
                </div>

                <div className="space-y-4">
                  <h5 className="text-lg font-semibold text-foreground mb-4">
                    Seis Procesos Fundamentales de ACT:
                  </h5>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      {
                        title: "Aceptación",
                        description: "Abrirnos a la experiencia interna en lugar de luchar contra ella."
                      },
                      {
                        title: "Defusión cognitiva",
                        description: "Observar nuestros pensamientos como eventos mentales, no como verdades absolutas."
                      },
                      {
                        title: "Contacto con el momento presente",
                        description: "Cultivar la atención plena."
                      },
                      {
                        title: "El yo como contexto",
                        description: "Desarrollar una perspectiva más amplia y estable de uno mismo."
                      },
                      {
                        title: "Clarificación de valores",
                        description: "Identificar lo que realmente importa en la vida."
                      },
                      {
                        title: "Acción comprometida",
                        description: "Dar pasos concretos en dirección a esos valores."
                      }
                    ].map((proceso, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        whileHover={{ scale: 1.02 }}
                        className="bg-card p-4 rounded-lg shadow-hover border-l-4 border-accent"
                      >
                        <div className="flex items-start">
                          <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center text-primary-foreground text-sm font-semibold mr-3 mt-0.5 flex-shrink-0">
                            {index + 1}
                          </div>
                          <div>
                            <h6 className="font-semibold text-foreground mb-1">{proceso.title}</h6>
                            <p className="text-sm text-muted-foreground">{proceso.description}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Para quién es útil ACT */}
                <div className="mt-8 p-6 bg-gradient-to-br from-muted/30 to-muted/10 rounded-lg border border-muted/30">
                  <h5 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                    <User className="mr-2 text-accent" size={18} />
                    ¿Para quién es útil ACT?
                  </h5>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    ACT ha demostrado eficacia en una amplia gama de problemáticas y es efectiva para tratar:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-3 mb-6">
                    {[
                      "Ansiedad y depresión",
                      "Estrés crónico",
                      "Dolor crónico",
                      "Problemas de relación",
                      "Adicciones",
                      "Trastornos alimentarios",
                      "Duelos y procesos de cambio personal"
                    ].map((problema, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                        <span className="text-muted-foreground">{problema}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-card p-4 rounded-lg shadow-hover border-l-4 border-accent">
                    <p className="text-muted-foreground leading-relaxed mb-3">
                      Su <strong className="text-accent">lenguaje metafórico y enfoque experiencial</strong> la hace 
                      especialmente valiosa en procesos de transformación profunda. Gracias a su lenguaje 
                      metafórico, enfoque experiencial y profunda validación de la experiencia humana, ACT 
                      es especialmente útil para personas que buscan un camino terapéutico que no solo 
                      reduzca síntomas, sino que <strong className="text-accent">potencie una vida con sentido</strong>.
                    </p>
                    <p className="text-accent font-medium text-center italic">
                      "ACT no busca que te sientas bien todo el tiempo, sino ayudarte a vivir mejor, 
                      incluso en medio de las dificultades."
                    </p>
                  </div>
                </div>
              </div>

              {/* Método Gottman */}
              <div className="mt-8 p-6 bg-gradient-to-br from-sage-light/20 to-sage/10 rounded-lg border border-sage/30">
                <h4 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                  <Heart className="mr-2 text-accent" size={20} />
                  Método Gottman
                </h4>
                
                <div className="bg-card p-4 rounded-lg shadow-hover border-l-4 border-accent mb-6">
                  <h5 className="text-lg font-semibold text-foreground mb-3">
                    ¿Qué es el Método Gottman?
                  </h5>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    El Método Gottman para terapia de pareja es un enfoque basado en <strong className="text-accent">
                    más de 40 años de investigación científica</strong> sobre relaciones exitosas y fallidas, 
                    desarrollado por los doctores John y Julie Gottman. Su trabajo ha permitido identificar 
                    con precisión los comportamientos que predicen la estabilidad o el deterioro de una 
                    relación a largo plazo.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Por tanto, ese modelo está enfocado en <strong className="text-accent">evidencia sólida resultado 
                    de estudios longitudinales</strong> con miles de parejas, tanto en laboratorios como en la vida 
                    cotidiana. Gracias a ello, el Método Gottman ofrece herramientas prácticas, emocionalmente 
                    seguras y estructuradas para fortalecer la amistad, el manejo del conflicto y la construcción 
                    de un proyecto de vida compartido.
                  </p>
                </div>

                <div className="mb-6">
                  <h5 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                    <Target className="mr-2 text-accent" size={18} />
                    Los Pilares del Método Gottman
                  </h5>
                  <p className="text-muted-foreground mb-4">
                    Los pilares del Método Gottman son graficados en una <strong className="text-accent">"Casa de la Relación Sólida"</strong> 
                    sostenida por la confianza y el compromiso. Por dentro contiene:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      {
                        number: "1",
                        title: "Mapas de amor",
                        description: "Construir un conocimiento profundo de la vida interna de la pareja (emociones, historia, aspiraciones, sueños)."
                      },
                      {
                        number: "2",
                        title: "Cultura de aprecio y admiración",
                        description: "Fomentar el reconocimiento positivo como base emocional del vínculo."
                      },
                      {
                        number: "3",
                        title: "Acercamientos y conexión diaria",
                        description: "Mantener rituales de cercanía y afecto para fortalecer la intimidad."
                      },
                      {
                        number: "4",
                        title: "Manejo constructivo del conflicto",
                        description: "Aprender a discutir sin destruir, diferenciando entre problemas resolubles y perpetuos."
                      },
                      {
                        number: "5",
                        title: "Influencia mutua",
                        description: "Tomar decisiones en conjunto y respetar las opiniones del otro."
                      },
                      {
                        number: "6",
                        title: "Crear significado compartido",
                        description: "Desarrollar una vida en común que tenga sentido, valores y rituales compartidos."
                      }
                    ].map((pilar, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        whileHover={{ scale: 1.02 }}
                        className="bg-card p-4 rounded-lg shadow-hover border-l-4 border-accent"
                      >
                        <div className="flex items-start">
                          <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold mr-3 mt-0.5 flex-shrink-0">
                            {pilar.number}
                          </div>
                          <div>
                            <h6 className="font-semibold text-foreground mb-1">{pilar.title}</h6>
                            <p className="text-sm text-muted-foreground">{pilar.description}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Qué aborda */}
                  <div className="bg-card p-4 rounded-lg shadow-hover border border-accent/20">
                    <h5 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                      <Target className="mr-2 text-accent" size={18} />
                      ¿Qué aborda el Método Gottman?
                    </h5>
                    <div className="space-y-2">
                      {[
                        "Dificultades en la comunicación",
                        "Ciclos de discusión repetitivos",
                        "Pérdida de la conexión emocional",
                        "Infidelidad y traición",
                        "Dificultades en la toma de decisiones como pareja",
                        "Desequilibrio en las tareas o roles familiares",
                        "Falta de intimidad o deseo sexual"
                      ].map((problema, index) => (
                        <div key={index} className="flex items-center">
                          <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                          <span className="text-sm text-muted-foreground">{problema}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Para quién es útil */}
                  <div className="bg-card p-4 rounded-lg shadow-hover border border-accent/20">
                    <h5 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                      <User className="mr-2 text-accent" size={18} />
                      ¿Para quién es útil?
                    </h5>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                      Este enfoque es útil tanto para <strong className="text-accent">parejas en crisis</strong> como 
                      para aquellas que desean fortalecer su vínculo, prevenir conflictos futuros o trabajar 
                      en su proyecto común.
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                      También es una herramienta valiosa para <strong className="text-accent">terapia prematrimonial</strong> y 
                      para parejas en procesos de transición (maternidad/paternidad, migración, jubilación, etc.).
                    </p>
                    <div className="bg-accent/10 p-3 rounded-lg border border-accent/20 mt-3">
                      <p className="text-sm text-accent font-medium italic text-center">
                        "El Método Gottman no busca 'quién tiene la razón', sino cómo construir una 
                        relación más saludable, conectada y resiliente."
                      </p>
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
                Algunas Herramientas Terapéuticas Utilizadas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {[
                  "Mindfulness",
                  "Tareas intersesión",
                  "Metáforas",
                  "Experiencias vivenciales"
                ].map((herramienta, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    className="bg-card p-4 rounded-lg shadow-hover border-l-4 border-accent text-center cursor-pointer"
                  >
                    <span className="font-medium text-foreground">{herramienta}</span>
                  </motion.div>
                ))}
              </div>

              {/* Mindfulness Section */}
              <div className="bg-card p-6 rounded-lg shadow-hover border border-accent/20 mb-8">
                <h5 className="text-xl font-bold text-foreground mb-4 flex items-center">
                  <Heart className="mr-2 text-accent" size={20} />
                  Mindfulness
                </h5>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Mindfulness, o atención plena, es una práctica basada en tradiciones meditativas orientales (como el budismo), 
                  adaptada al contexto clínico y apoyada por la investigación científica. <strong className="text-accent">Jon Kabat-Zinn</strong> introdujo 
                  este enfoque en la medicina moderna, demostrando que cultivar la atención consciente mejora significativamente 
                  el bienestar psicológico y físico.
                </p>

                {/* Principios básicos */}
                <div className="mb-8">
                  <h6 className="text-lg font-semibold text-foreground mb-4">Principios básicos</h6>
                  <div className="space-y-4">
                    {[
                      {
                        title: "Atención intencional al momento presente",
                        description: "focalizarse deliberadamente en lo que ocurre aquí y ahora, sin distracción."
                      },
                      {
                        title: "Actitud de apertura y curiosidad",
                        description: "explorar la experiencia con aceptación, sin juzgar ni rechazar lo que surge."
                      },
                      {
                        title: "Presencia no reactiva",
                        description: "observar pensamientos, emociones y sensaciones sin dejarse arrastrar por ellos."
                      }
                    ].map((principio, index) => (
                      <div key={index} className="bg-muted/20 p-4 rounded-lg border-l-4 border-accent">
                        <div className="flex items-start">
                          <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold mr-3 mt-0.5 flex-shrink-0">
                            {index + 1}
                          </div>
                          <div>
                            <h6 className="font-semibold text-foreground mb-1">{principio.title}:</h6>
                            <p className="text-sm text-muted-foreground">{principio.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Beneficios comprobados */}
                <div className="mb-8">
                  <h6 className="text-lg font-semibold text-foreground mb-4">Beneficios comprobados</h6>
                  <p className="text-muted-foreground mb-4">
                    Numerosos estudios con rigurosidad científica han mostrado que mindfulness:
                  </p>
                  <div className="grid md:grid-cols-2 gap-3">
                    {[
                      "Reduce la ansiedad, el estrés y la depresión",
                      "Mejora la regulación emocional y la tolerancia al malestar",
                      "Incrementa la resiliencia, la creatividad y la capacidad de resolución",
                      "Alivia dolencias físicas como el dolor crónico y mejora los síntomas del insomnio"
                    ].map((beneficio, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                        <span className="text-muted-foreground text-sm">{beneficio}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Para quién es útil */}
                <div className="mb-8">
                  <h6 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                    <User className="mr-2 text-accent" size={18} />
                    ¿Para quién es útil?
                  </h6>
                  <p className="text-muted-foreground mb-4">
                    Mindfulness es efectivo en múltiples contextos:
                  </p>
                  <div className="space-y-3">
                    {[
                      "Terapia psicológica como complemento a enfoques como ACT, TCC o EMDR",
                      "Reducción del estrés en entornos laborales, educativos o personales",
                      "Apoyo a la salud física, especialmente en casos de dolor persistente, enfermedades crónicas o insomnio",
                      "Desarrollo personal, mejorando la atención, la empatía y la calidad de vida cotidiana"
                    ].map((contexto, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                        <span className="text-muted-foreground text-sm">{contexto}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Cómo practicar */}
                <div className="mb-8">
                  <h6 className="text-lg font-semibold text-foreground mb-4">¿Cómo practicar Mindfulness en el día?</h6>
                  <div className="grid md:grid-cols-3 gap-4">
                    {[
                      {
                        title: "Meditación formal",
                        description: "ejercicios de respiración, escaneo corporal, atención a sonidos o pensamientos"
                      },
                      {
                        title: "Ejercicios informales",
                        description: "prácticas de atención en actividades cotidianas como comer, caminar o lavar platos"
                      },
                      {
                        title: "Mindful breaks",
                        description: "pausas conscientes durante el día para recuperar presencia y calma"
                      }
                    ].map((practica, index) => (
                      <div key={index} className="bg-muted/20 p-4 rounded-lg border border-accent/20">
                        <h6 className="font-semibold text-foreground mb-2">{practica.title}:</h6>
                        <p className="text-sm text-muted-foreground">{practica.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Por qué funciona */}
                <div className="bg-accent/10 p-6 rounded-lg border border-accent/20">
                  <h6 className="text-lg font-semibold text-foreground mb-4">¿Por qué funciona?</h6>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Mindfulness ayuda a desactivar la hiper-reactividad emocional, mejora la flexibilidad mental y promueve 
                    una relación más amable y consciente con la experiencia interna. No se trata de eliminar el malestar, 
                    sino de transformar la forma en que lo vivimos, recuperando equilibrio y claridad incluso en medio del desafío.
                  </p>
                  <div className="space-y-3">
                    <p className="text-accent font-medium italic text-center">
                      "Mindfulness no evita que sientas lo difícil, pero sí cambia tu forma de estar con ello: 
                      con apertura, atención y humanidad."
                    </p>
                    <p className="text-muted-foreground text-center text-sm">
                      Ideal para quienes buscan mejorar su estabilidad emocional, su bienestar y su capacidad de respuesta ante la vida.
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
                  En la terapia psicológica, el cambio no ocurre solo en la sesión, sino también (y sobre todo) entre una sesión y otra. 
                  Por eso, muchas veces los psicólogos proponen <strong className="text-accent">tareas intersesiones</strong>: ejercicios, reflexiones o acciones 
                  concretas que permiten llevar el trabajo terapéutico a la vida cotidiana.
                </p>

                {/* Objetivos */}
                <div className="mb-6">
                  <h6 className="text-lg font-semibold text-foreground mb-4">¿Cuáles son los objetivos?</h6>
                  <div className="grid md:grid-cols-2 gap-3">
                    {[
                      "Consolidar aprendizajes",
                      "Generar nuevas experiencias emocionales",
                      "Identificar patrones automáticos",
                      "Poner en práctica habilidades",
                      "Fortalecer la autonomía y el compromiso con el proceso"
                    ].map((objetivo, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                        <span className="text-muted-foreground text-sm">{objetivo}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tipos de tareas */}
                <div className="mb-6">
                  <h6 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                    <User className="mr-2 text-accent" size={18} />
                    ¿Qué tipo de tareas se pueden proponer?
                  </h6>
                  <div className="space-y-3">
                    {[
                      "Ejercicios de autorregistro (pensamientos, emociones, conductas)",
                      "Prácticas de mindfulness o respiración consciente",
                      "Exposición gradual a situaciones evitadas",
                      "Tareas creativas como escribir, dibujar, construir mapas de valores",
                      "Pequeños compromisos conductuales coherentes con los valores"
                    ].map((tarea, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                        <span className="text-muted-foreground text-sm">{tarea}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Qué pasa si no se hacen */}
                <div className="bg-accent/10 p-4 rounded-lg border border-accent/20">
                  <h6 className="text-lg font-semibold text-foreground mb-3">¿Qué pasa si no se hacen?</h6>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    No hacer las tareas no implica "fracaso", sino que es una oportunidad terapéutica para explorar obstáculos: 
                    resistencia, miedo, olvidos, exigencia o autosabotaje. Lo importante es entender qué impidió llevarlas a cabo, 
                    y no juzgarse por ello.
                  </p>
                  <p className="text-accent font-medium italic text-center">
                    "Las tareas entre sesiones no son deberes escolares, sino oportunidades de poner en acción el deseo de cambio, 
                    a tu ritmo y con acompañamiento profesional."
                  </p>
                </div>
              </div>

              {/* Metáforas Terapéuticas */}
              <div className="bg-card p-6 rounded-lg shadow-hover border border-accent/20 mb-8">
                <h5 className="text-xl font-bold text-foreground mb-4 flex items-center">
                  <Book className="mr-2 text-accent" size={20} />
                  Metáforas Terapéuticas: el lenguaje simbólico del cambio
                </h5>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Las metáforas terapéuticas son comparaciones simbólicas que usamos en psicoterapia para expresar emociones, 
                  ideas o procesos internos de manera más comprensible y vivencial. A través de imágenes sencillas, ayudan a 
                  dar sentido a lo complejo, conectar con la experiencia emocional y promover el cambio.
                </p>

                <div className="bg-muted/20 p-4 rounded-lg border-l-4 border-accent mb-6">
                  <p className="text-muted-foreground leading-relaxed">
                    Estas metáforas <strong className="text-accent">no son adornos</strong>: son anclas simbólicas que facilitan el aprendizaje experiencial, 
                    promueven la reflexión interna y ayudan a conectar con emociones y valores. Pueden usarse al inicio de la terapia, 
                    en momentos de bloqueo o para revisar los progresos.
                  </p>
                </div>

                {/* Ejemplo de metáfora */}
                <div className="bg-gradient-to-br from-accent/5 to-accent/10 p-6 rounded-lg border border-accent/20">
                  <h6 className="text-lg font-semibold text-foreground mb-4">Ejemplos de metáforas</h6>
                  
                  <div className="bg-card p-4 rounded-lg shadow-hover border-l-4 border-accent">
                    <h6 className="font-semibold text-foreground mb-3 flex items-center">
                      <Heart className="mr-2 text-accent" size={16} />
                      Metáfora: "Como ir al médico"
                    </h6>
                    <div className="space-y-3 text-muted-foreground leading-relaxed text-sm">
                      <p>
                        Ir a terapia es como ir al médico cuando algo duele. A veces el malestar no se ve por fuera, pero está ahí: 
                        una sensación persistente, un nudo en el pecho, una tristeza que no se va.
                      </p>
                      <p>
                        En consulta, exponemos esa herida emocional. Puede doler hablar de ello, como duele el alcohol al limpiar 
                        una cortadura. Pero esa incomodidad es parte del proceso de sanación.
                      </p>
                      <p>
                        <strong className="text-accent">No venimos porque somos débiles, sino porque queremos entender qué nos pasa y cómo cuidarnos mejor. 
                        Porque merecemos sanar, no solo aguantar.</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Experiencias Vivenciales */}
              <div className="bg-card p-6 rounded-lg shadow-hover border border-accent/20">
                <h5 className="text-xl font-bold text-foreground mb-4 flex items-center">
                  <User className="mr-2 text-accent" size={20} />
                  ¿Qué son las experiencias vivenciales en terapia ACT?
                </h5>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  En la Terapia de Aceptación y Compromiso (ACT), las experiencias vivenciales son <strong className="text-accent">ejercicios prácticos 
                  y emocionalmente significativos</strong> que permiten al consultante vivir en sesión los procesos centrales del cambio terapéutico. 
                  No se trata solo de hablar o analizar, sino de sentir, observar y experimentar directamente cómo es relacionarse 
                  de otra manera con las emociones, pensamientos y valores.
                </p>

                <div className="bg-muted/20 p-4 rounded-lg border-l-4 border-accent mb-6">
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Estas experiencias ayudan a <strong className="text-accent">salir del modo mental habitual</strong> para entrar en contacto con el momento 
                    presente y con lo que realmente importa. Pueden incluir prácticas como mindfulness, visualizaciones, juegos de roles, 
                    metáforas corporales, ejercicios con movimiento o dinámicas con objetos.
                  </p>
                  <p className="text-accent font-medium italic">
                    Su propósito es abrir nuevas posibilidades de respuesta frente al sufrimiento, aumentar la conciencia y fomentar 
                    acciones comprometidas con los valores personales.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Navegación de regreso */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <Card className="max-w-2xl mx-auto shadow-elegant bg-gradient-to-br from-muted/30 to-muted/10 border border-muted/30">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                ¿Quieres conocer más sobre mí?
              </h3>
              <p className="text-muted-foreground mb-6">
                Descubre mi historia personal, formación y experiencia profesional.
              </p>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => document.getElementById('sobre-mi')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-muted text-foreground px-8 py-3 rounded-lg font-medium shadow-hover hover:shadow-glow transition-all duration-300 mr-4"
              >
                Volver a Mi Historia
              </motion.button>
            </CardContent>
          </Card>
        </motion.div>

        {/* Call to Action Final */}
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
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-primary-foreground text-primary px-8 py-3 rounded-lg font-medium shadow-hover hover:shadow-glow transition-all duration-300"
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

export default TherapeuticApproaches;