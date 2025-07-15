import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart, MessageCircle, Users, Calendar, CheckCircle, ArrowRight, Phone, Mail, Menu, X, User, Home } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { containerVariants, itemVariants } from '@/utils/animations';
import { useState, useEffect } from 'react';

const CouplesTherapy = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (path) => {
    window.location.href = path;
    setIsMenuOpen(false);
  };

  const commonSituations = [
    {
      title: "Discusiones frecuentes o conflictos que no se resuelven",
      description: "¿Tienen las mismas peleas una y otra vez? ¿Sientes que ciertos temas nunca se resuelven del todo?",
      content: [
        "Seguramente están frente a una situación insoluble. Según las investigaciones del Dr. John Gottman, el 69% de los conflictos en pareja son problemas perpetuos: diferencias de personalidad, valores o necesidades que no tienen una 'solución definitiva'. Entonces, la clave no está en eliminar el conflicto, sino en cómo lo manejan juntos.",
        "Cuando la pareja entra en este tipo de situaciones queriendo cambiar lo que no se puede cambiar, entra en un ciclo de discusiones que solo generan enojo, frustración y distanciamiento.",
        "La terapia ayuda a identificar este patrón y enseña técnicas de comunicación y otras estrategias que permiten superar esta situación."
      ],
      action: "la próxima vez que repitan un conflicto, hazte esta pregunta: '¿Cuando hablo con mi pareja estoy buscando entender o solo demostrar que tengo la razón?'"
    },
    {
      title: "Sensación de distanciamiento emocional o pérdida de conexión",
      description: "¿Sienten que ya no se conectan como antes?",
      content: [
        "Desde el método Gottman, entendemos que la conexión emocional es el núcleo del vínculo de pareja. Es esa sensación de ser visto, comprendido, valorado y querido por el otro. No depende solo del tiempo juntos, sino de cómo se responden mutuamente en los momentos cotidianos y emocionales.",
        "Se construye a través de pequeños gestos constantes que refuerzan el vínculo afectivo.",
        "Gottman describe la relación como una cuenta bancaria emocional: cada gesto de cariño, validación o escucha es un depósito; cada crítica, indiferencia o desdén, un retiro. Las parejas emocionalmente conectadas mantienen un balance positivo y reparan rápidamente cuando hay errores.",
        "En terapia fomentamos diálogos que ayuden a comprenderse, ayudamos a reconstruir la intimidad emocional tras momentos de distancia o crisis, enseñamos a responder a los 'intentos de conexión' de forma activa y amorosa, y a restaurar el vínculo afectivo."
      ],
      signals: [
        "Sensación de que ya no se entienden",
        "Respuestas automáticas, frías o ausentes",
        "Conversaciones centradas solo en lo funcional (logística, deberes)",
        "Pérdida de intimidad emocional y sexual",
        "Disminución de la empatía o el interés por la experiencia del otro"
      ]
    },
    {
      title: "Problemas de comunicación",
      description: "¿Sienten que no logran entenderse al comunicarse?",
      content: [
        "En terapia se puede identificar que un problema se agudiza por una comunicación que busca atacar, juzgar y defenderse. La comunicación es el puente entre lo que sentimos y lo que el otro puede comprender. No se trata solo de hablar, sino de construir una conexión emocional segura, resolver diferencias con respeto y fomentar la intimidad.",
        "Según el Instituto Gottman, los patrones de comunicación son predictores clave de estabilidad o conflicto en la relación.",
        "La terapia se enfoca, desde el método Gottman, en identificar los patrones de comunicación y ayudar a desarrollar una comunicación que lleve a comprenderse, y no a defenderse. Con este nuevo enfoque, la comunicación se vuelve una herramienta fundamental de la relación para que cada uno se sienta importante, tenido en cuenta y se facilite la construcción de buenos acuerdos."
      ],
      symptoms: [
        "Discusiones frecuentes sin solución",
        "Sentirse ignorado, invalidado o no escuchado",
        "Dificultades para expresar emociones o necesidades",
        "Reacciones defensivas o críticas constantes",
        "Desgaste emocional por temas recurrentes",
        "Sensación de distancia emocional o desconexión",
        "Evasión, crítica, desprecio e invalidación"
      ],
      riskPatterns: [
        "Crítica destructiva: 'Siempre haces...'",
        "Desprecio: sarcasmos, burlas o gestos que denotan superioridad",
        "Actitud defensiva: justificar todo en lugar de escuchar",
        "Evasión (stonewalling): cerrar la conversación o retirarse emocionalmente"
      ],
      whenToConsult: [
        "Cuando las discusiones escalan fácilmente o se repiten sin solución",
        "Si uno o ambos sienten que 'ya no se entienden'",
        "Cuando hay resentimiento acumulado, distancia emocional o deseos de separación",
        "Si desean mejorar su vínculo desde la prevención y el fortalecimiento",
        "Cuando la pareja quiere mejorar su comunicación"
      ],
      note: "Las técnicas de comunicación que se enseñan en terapia de pareja son útiles en cualquier comunicación, incluyendo la que involucra a los hijos."
    },
    {
      title: "Infidelidad",
      description: "Superando la crisis de confianza y reconstruyendo el vínculo",
      content: [
        "La infidelidad va más allá de una traición sexual. Según John y Julie Gottman, implica la violación de un acuerdo —explícito o implícito— de exclusividad emocional, física o sexual dentro de la relación. Supone una ruptura profunda del compromiso y la confianza, y puede manifestarse de diversas maneras:",
        "Estas conductas suelen emerger como resultado de una desconexión emocional progresiva, marcada por una pérdida de intimidad, fallas en la comunicación y necesidades emocionales insatisfechas. Conductas que de manera ideal, han debido atendidas al interior de la relación."
      ],
      types: [
        "Infidelidad física: Contacto sexual o romántico con terceras personas",
        "Infidelidad emocional: Vínculos íntimos que desvían la conexión emocional que debería nutrir la pareja",
        "Infidelidad digital: Relacionamiento virtual, sexting o consumo de pornografía oculto a la pareja",
        "Micro-infidelidades: Conductas aparentemente menores que, con el tiempo, erosionan la exclusividad y la confianza"
      ],
      emotionalImpact: {
        betrayed: "Se activa una herida en el sistema de apego que puede vivirse como trauma relacional. Es frecuente experimentar hipervigilancia, obsesiones, retraimiento, e incluso síntomas comparables al estrés postraumático.",
        unfaithful: "Puede aparecer culpa, vergüenza, miedo a la pérdida, o confusión emocional. Muchas veces hay ambivalencia entre lo vivido fuera y el vínculo con la pareja."
      },
      canItBeHealed: "Sí. Aunque la herida es profunda, la infidelidad puede convertirse en una oportunidad para transformar la relación, siempre que ambas partes estén dispuestas a atravesar el proceso con honestidad y compromiso. En otros casos, puede marcar el cierre de un ciclo; en ambos caminos, la terapia resulta fundamental para tramitar el dolor y encontrar claridad.",
      recoveryFactors: [
        "Arrepentimiento genuino",
        "Capacidad de empatía en ambos miembros",
        "Compromiso con el proceso terapéutico",
        "Ausencia de patologías de personalidad severas",
        "Historia previa de conexión emocional"
      ],
      hinderingFactors: [
        "Negación o minimización del impacto",
        "Falta de responsabilidad o desprecio hacia el otro",
        "Reincidencia en la infidelidad",
        "Narcisismo patológico o abuso de sustancias",
        "Resistencia al trabajo terapéutico"
      ],
      conclusion: "Si estás enfrentando una infidelidad, buscar acompañamiento psicológico especializado puede ayudarte a tomar decisiones desde la claridad y el cuidado, ya sea para reconstruir la relación o para despedirte de ella con dignidad y crecimiento emocional."
    }
  ];

  const processSteps = [
    {
      title: "Comunicación consciente",
      description: "Herramientas para expresar necesidades sin herir ni atacar."
    },
    {
      title: "Resolución de conflictos",
      description: "Estrategias distintas para conflictos solucionables vs. perpetuos."
    },
    {
      title: "Conexión emocional",
      description: "Fortalecer intimidad, rituales de conexión y aprecio mutuo."
    }
  ];

  const sessionDetails = [
    { label: "Modalidad", value: "Presencial u Online" },
    { label: "Frecuencia", value: "Una vez por semana (ajustable según necesidad)" },
    { label: "Duración", value: "50 minutos por sesión" },
    { label: "Sesiones individuales", value: "Algunas sesiones pueden ser individuales para abordar temas personales" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sage-light/20 to-cream">
      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-background/80 backdrop-blur-md shadow-elegant border-b border-border'
            : 'bg-transparent'
        }`}
      >
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent cursor-pointer"
              onClick={() => handleNavigation('/')}
            >
              Psicología & Bienestar
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <Button 
                variant="ghost" 
                onClick={() => handleNavigation('/')}
                className="text-foreground hover:text-accent"
              >
                <Home size={16} className="mr-2" />
                Inicio
              </Button>
              <Button 
                variant="outline" 
                className="border-steel-blue text-steel-blue hover:bg-steel-blue hover:text-white"
                onClick={() => handleNavigation('/individual-therapy')}
              >
                <User size={16} className="mr-2" />
                Terapia Individual
              </Button>
              <Button 
                variant="default" 
                className="bg-gradient-primary shadow-hover"
              >
                <Heart size={16} className="mr-2" />
                Terapia de Pareja
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pb-4"
            >
              <div className="flex flex-col space-y-3">
                <Button 
                  variant="ghost" 
                  onClick={() => handleNavigation('/')}
                  className="text-foreground hover:text-accent w-full justify-start"
                >
                  <Home size={16} className="mr-2" />
                  Inicio
                </Button>
                <Button 
                  variant="outline" 
                  className="border-steel-blue text-steel-blue hover:bg-steel-blue hover:text-white w-full"
                  onClick={() => handleNavigation('/individual-therapy')}
                >
                  <User size={16} className="mr-2" />
                  Terapia Individual
                </Button>
                <Button 
                  variant="default" 
                  className="bg-gradient-primary w-full"
                >
                  <Heart size={16} className="mr-2" />
                  Terapia de Pareja
                </Button>
              </div>
            </motion.div>
          )}
        </nav>
      </motion.header>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 bg-sage/10 px-4 py-2 rounded-full mb-6">
            <Heart className="w-5 h-5 text-sage-dark" />
            <span className="text-sage-dark font-medium">Terapia de Pareja</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Fortalece tu Relación
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            En la terapia de parejas los apoyo en la resolución de conflictos, mejorar la comunicación,
            fortalecer conexión emocional y superar una infidelidad.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-gradient-primary shadow-hover hover:shadow-glow">
              <Calendar className="w-5 h-5 mr-2" />
              Agendar Sesión
            </Button>
            <Button variant="outline" size="lg" className="border-sage text-sage hover:bg-sage hover:text-white">
              <Phone className="w-5 h-5 mr-2" />
              Sesión Introductoria
            </Button>
          </div>

          <p className="text-sage-dark font-medium">
            ¿Están enfrentando conflictos, distanciamiento o sienten que algo en la relación ya no fluye como antes?
          </p>
        </motion.div>
      </section>

      {/* Método Gottman */}
      <section className="py-16 px-6 bg-white/50">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="container mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Método Científico</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-sage-dark">
              Basado en el Método Gottman
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              La terapia de pareja que ofrezco se basa en el Método Gottman, un enfoque respaldado por
              más de 40 años de investigación científica sobre lo que fortalece o debilita una relación.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Situaciones Comunes */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-sage-dark">
              Situaciones Comunes para Iniciar Terapia
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Estos son algunos de los motivos más frecuentes por los que las parejas buscan ayuda profesional
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {commonSituations.map((situation, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-sage/20 rounded-lg px-6">
                  <AccordionTrigger className="text-left text-sage-dark hover:text-sage font-semibold">
                    {situation.title}
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4 pb-6">
                    {situation.description && (
                      <p className="text-muted-foreground italic">{situation.description}</p>
                    )}
                    
                    {Array.isArray(situation.content) ? (
                      situation.content.map((paragraph, idx) => (
                        <p key={idx} className="text-foreground leading-relaxed mb-4">
                          {paragraph}
                        </p>
                      ))
                    ) : (
                      <p className="text-foreground leading-relaxed">{situation.content}</p>
                    )}
                    
                    {situation.signals && (
                      <div>
                        <h4 className="font-semibold text-sage-dark mb-2">Las señales de desconexión emocional están en:</h4>
                        <ul className="space-y-1">
                          {situation.signals.map((signal, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-sage rounded-full mt-2 flex-shrink-0" />
                              <span className="text-muted-foreground">{signal}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {situation.symptoms && (
                      <div>
                        <h4 className="font-semibold text-sage-dark mb-2">Cuando hay una comunicación deficiente, las parejas experimentan:</h4>
                        <ul className="space-y-1">
                          {situation.symptoms.map((symptom, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0" />
                              <span className="text-muted-foreground">{symptom}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {situation.riskPatterns && (
                      <div>
                        <h4 className="font-semibold text-sage-dark mb-2">💬 Patrones de riesgo según Gottman:</h4>
                        <ul className="space-y-1">
                          {situation.riskPatterns.map((pattern, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0" />
                              <span className="text-muted-foreground">{pattern}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {situation.types && (
                      <div>
                        <h4 className="font-semibold text-sage-dark mb-2">Tipos de infidelidad:</h4>
                        <ul className="space-y-2">
                          {situation.types.map((type, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <div className="w-2 h-2 bg-steel-blue rounded-full mt-2 flex-shrink-0" />
                              <span className="text-muted-foreground">{type}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {situation.emotionalImpact && (
                      <div className="bg-gradient-secondary p-6 rounded-lg">
                        <h4 className="font-semibold text-sage-dark mb-4">💔 Impacto Emocional</h4>
                        <div className="grid md:grid-cols-1 gap-4">
                          <div>
                            <h5 className="font-medium text-sage-dark mb-2">En quien ha sido traicionado:</h5>
                            <p className="text-muted-foreground text-sm mb-4">{situation.emotionalImpact.betrayed}</p>
                            <h5 className="font-medium text-sage-dark mb-2">En quien ha sido infiel:</h5>
                            <p className="text-muted-foreground text-sm">{situation.emotionalImpact.unfaithful}</p>
                          </div>
                        </div>
                      </div>
                    )}

                    {situation.canItBeHealed && (
                      <div className="bg-sage/10 p-4 rounded-lg">
                        <h4 className="font-semibold text-sage-dark mb-2">¿Es posible sanar?</h4>
                        <p className="text-sage-dark">{situation.canItBeHealed}</p>
                      </div>
                    )}

                    {(situation.recoveryFactors || situation.hinderingFactors) && (
                      <div className="grid md:grid-cols-2 gap-6 mt-6">
                        {situation.recoveryFactors && (
                          <div>
                            <h4 className="font-semibold text-sage-dark mb-2 flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-sage" />
                              Factores que favorecen la recuperación
                            </h4>
                            <ul className="space-y-2">
                              {situation.recoveryFactors.map((factor, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <div className="w-2 h-2 bg-sage rounded-full mt-2 flex-shrink-0" />
                                  <span className="text-muted-foreground text-sm">{factor}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        
                        {situation.hinderingFactors && (
                          <div>
                            <h4 className="font-semibold text-destructive mb-2 flex items-center gap-2">
                              <ArrowRight className="w-4 h-4" />
                              Factores que dificultan la recuperación
                            </h4>
                            <ul className="space-y-2">
                              {situation.hinderingFactors.map((factor, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0" />
                                  <span className="text-muted-foreground text-sm">{factor}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    )}

                    {situation.whenToConsult && (
                      <div>
                        <h4 className="font-semibold text-sage-dark mb-2">¿Cuándo consultar?</h4>
                        <ul className="space-y-1">
                          {situation.whenToConsult.map((when, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-sage rounded-full mt-2 flex-shrink-0" />
                              <span className="text-muted-foreground">{when}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {situation.note && (
                      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                        <p className="text-blue-800 text-sm">
                          <strong>Nota adicional:</strong> {situation.note}
                        </p>
                      </div>
                    )}

                    {situation.conclusion && (
                      <div className="bg-steel-blue/10 p-4 rounded-lg border border-steel-blue/20">
                        <p className="text-steel-blue font-medium text-sm">{situation.conclusion}</p>
                      </div>
                    )}

                    {situation.action && (
                      <div className="bg-sage/10 p-4 rounded-lg">
                        <h4 className="font-semibold text-sage-dark mb-2">Acción sugerida para hoy:</h4>
                        <p className="text-sage-dark">{situation.action}</p>
                      </div>
                    )}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Otros Motivos */}
      <section className="py-16 px-6 bg-sage/5">
        <div className="container mx-auto">
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-sage-dark">
              Otros Motivos de Consulta
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              "Desacuerdos sobre crianza, finanzas, familia o prioridades",
              "Falta de intimidad o deseo sexual",
              "Dudas sobre continuar o separarse",
              "Deseo de fortalecer el vínculo antes de convivir o casarse",
              "Sanar heridas del pasado y prevenir conflictos",
              "Necesidad de apoyo para una separación consciente y respetuosa"
            ].map((motivo, index) => (
              <Card key={index} className="shadow-elegant hover:shadow-hover transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-sage mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">{motivo}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Proceso Terapéutico */}
      <section className="py-16 px-6 bg-white/50">
        <div className="container mx-auto max-w-4xl">
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-sage-dark">
              Proceso Terapéutico
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Cada pareja llega con una historia única. Ustedes aportan el conocimiento profundo de su
              relación y yo, herramientas terapéuticas, investigación y experiencia clínica. Creamos un
              proceso colaborativo, respetuoso y con objetivos concretos.
            </p>
            <h3 className="text-xl font-bold text-sage-dark mb-4">
              Ejes Fundamentales
            </h3>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {processSteps.map((step, index) => (
              <Card key={index} className="shadow-elegant hover:shadow-hover transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                    {index + 1}
                  </div>
                  <CardTitle className="text-sage-dark">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Formato de Sesiones */}
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="text-sage-dark text-center">Formato de Sesiones</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {sessionDetails.map((detail, index) => (
                  <div key={index} className="flex justify-between items-center p-4 bg-sage/5 rounded-lg">
                    <span className="font-medium text-sage-dark">{detail.label}:</span>
                    <span className="text-muted-foreground">{detail.value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonio */}
      <section className="py-16 px-6 bg-gradient-secondary">
        <div className="container mx-auto max-w-3xl text-center">
          <blockquote className="text-xl italic text-sage-dark mb-6">
            "Llegamos por una infidelidad. El proceso nos ayudó a perdonar y reconstruir la confianza. 
            Hoy acabamos de ser padres."
          </blockquote>
          <cite className="text-muted-foreground">— Paciente, 2023</cite>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold mb-6 text-sage-dark">
              ¡No tienen que esperar a estar al borde de la ruptura!
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              La terapia puede ser una oportunidad para reencontrarse y fortalecer su relación.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary shadow-hover hover:shadow-glow">
                <Calendar className="w-5 h-5 mr-2" />
                Agendar Sesión
              </Button>
              <Button variant="outline" size="lg" className="border-sage text-sage hover:bg-sage hover:text-white">
                Solicitar Sesión Introductoria
              </Button>
              <Button variant="ghost" size="lg" className="text-steel-blue hover:bg-steel-blue/10">
                <Mail className="w-5 h-5 mr-2" />
                Enviar un Mensaje
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Simple */}
      <footer className="py-8 px-6 bg-sage-dark text-white">
        <div className="container mx-auto text-center">
          <p className="mb-4">© 2025 Psicología & Bienestar. Acompañándote en tu crecimiento.</p>
          <div className="flex justify-center space-x-6">
            <Button variant="ghost" onClick={() => handleNavigation('/')} className="text-white hover:text-sage-light">
              Inicio
            </Button>
            <Button variant="ghost" onClick={() => handleNavigation('/individual-therapy')} className="text-white hover:text-sage-light">
              Terapia Individual
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CouplesTherapy;