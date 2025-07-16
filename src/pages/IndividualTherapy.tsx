import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { User, Brain, Heart, Target, CheckCircle, ArrowRight, Phone, Mail, Calendar, AlertCircle, Menu, X, Home, Shield, Activity, Lightbulb } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { containerVariants, itemVariants } from '@/utils/animations';
import { useState, useEffect } from 'react';

const IndividualTherapy = () => {
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

  // Datos para los motivos de consulta frecuentes
  const mainTopics = [
    {
      title: "Ansiedad, ataques de pánico",
      icon: Brain,
      description: "Comprende y maneja la ansiedad para recuperar tu bienestar",
      content: {
        definition: "La ansiedad es una respuesta emocional normal ante situaciones percibidas como amenazantes o estresantes. Se vuelve un trastorno cuando esta reacción es excesiva, persistente en el tiempo y desproporcionada frente al contexto real.",
        symptoms: {
          psychological: ["preocupación constante", "temor anticipatorio", "irritabilidad"],
          physiological: ["palpitaciones", "tensión muscular", "dificultad para respirar", "insomnio"]
        },
        note: "No siempre existe una causa única identificable, y el tratamiento efectivo no depende exclusivamente de conocer el origen, sino de aprender respuestas más funcionales ante los síntomas."
      }
    },
    {
      title: "Depresión, tristeza persistente",
      icon: Heart,
      description: "Diferenciando tristeza de depresión y encontrando el camino hacia la recuperación",
      content: {
        difference: {
          sadness: "Es una emoción humana natural, generalmente ligada a experiencias dolorosas. Suele ser transitoria y no impide el funcionamiento cotidiano.",
          depression: "Es un trastorno clínico que implica más que sentir tristeza. Requiere la presencia de otros síntomas específicos, durante un mínimo de dos semanas consecutivas, generando un deterioro importante en la vida diaria."
        }
      }
    },
    {
      title: "Duelos por pérdida, ruptura, migración, cambio",
      icon: Heart,
      description: "Acompañamiento en procesos de duelo y pérdidas significativas",
      content: {
        definition: "El duelo es un proceso emocional, cognitivo y corporal natural que experimentamos tras una pérdida significativa. Es una respuesta natural a la pérdida de un ser querido, y para la mayoría de las personas, los síntomas del duelo comienzan a disminuir con el tiempo.",
        scope: "No se limita únicamente a la muerte de un ser querido: también puede desencadenarse por la pérdida de una relación, un trabajo, una etapa vital, la salud, la migración o incluso ideales profundamente arraigados.",
        individual: "Cada persona vive el duelo de manera distinta. No hay una forma \"correcta\" de sentir, y lo que para una persona puede ser transitorio, para otra puede convertirse en un proceso profundo y doloroso que requiere acompañamiento terapéutico.",
        stages: [
          { name: "Negación", description: "dificultad para aceptar la pérdida o lo ocurrido" },
          { name: "Ira", description: "sentimientos de injusticia, enfado hacia uno mismo, los demás o la situación" },
          { name: "Negociación", description: "intentos mentales de cambiar o revertir la pérdida" },
          { name: "Depresión", description: "tristeza profunda, vacío, aislamiento, desesperanza" },
          { name: "Aceptación", description: "integración de la pérdida en la vida y apertura a nuevas experiencias" }
        ],
        reactions: {
          emotional: [
            "Tristeza, ira, culpa, alivio, ansiedad",
            "Confusión, soledad, sensación de vacío",
            "Ambivalencia emocional (sentimientos contradictorios)"
          ],
          physical: [
            "Fatiga y debilidad generalizada",
            "Opresión en el pecho, dificultades respiratorias",
            "Alteraciones del sueño (insomnio o hipersomnia)",
            "Falta de apetito o cambios en patrones alimentarios",
            "Molestias gastrointestinales, dolores de cabeza",
            "Susceptibilidad aumentada a enfermedades"
          ],
          cognitive: [
            "Dificultad para concentrarse y tomar decisiones",
            "Pensamientos recurrentes sobre la persona perdida",
            "Sensación de irrealidad o despersonalización",
            "Problemas de memoria y atención",
            "Ocasionalmente, experiencias sensoriales breves (sentir presencia, voces)"
          ],
          behavioral: [
            "Llanto frecuente e incontrolable",
            "Retraimiento social y aislamiento",
            "Hiperactividad o inquietud motora",
            "Evitación de recuerdos o, por el contrario, búsqueda obsesiva de ellos",
            "Cambios en rutinas y hábitos",
            "Comportamientos de búsqueda de la persona perdida"
          ]
        },
        pathological: {
          definition: "El duelo puede volverse clínicamente problemático cuando cumple criterios diagnósticos para el Trastorno de Duelo Prolongado, según el Manual Diagnóstico y Estadístico de los Trastornos Mentales, DSM-5-TR. Este diagnóstico se considera cuando, tras al menos 12 meses desde la pérdida (6 meses en niños y adolescentes), la persona sigue experimentando un nivel de malestar intenso que interfiere significativamente con su funcionamiento diario.",
          criteria: [
            "Anhelo o nostalgia persistente e intensa por la persona fallecida",
            "Tristeza o dolor emocional profundo relacionado con la pérdida",
            "Preocupación constante por el fallecido o por las circunstancias de su muerte",
            "Alteración en el sentido de identidad (sensación de haber perdido una parte de sí mismo tras la muerte del ser querido)"
          ],
          symptoms: [
            "Dificultad para aceptar la muerte",
            "Incredulidad, entumecimiento emocional o sensación de irrealidad",
            "Retraimiento social o desconfianza hacia los demás",
            "Incapacidad para reanudar la vida cotidiana o establecer metas",
            "Evitación persistente de recordatorios de la pérdida",
            "Sentimientos de vacío o pérdida de sentido vital",
            "Reducción en la capacidad para experimentar emociones positivas",
            "Malestar o deterioro significativo en el funcionamiento social, laboral o familiar"
          ],
          note: "Este tipo de duelo no es simplemente \"un duelo más largo\", sino una condición que requiere intervención clínica especializada, idealmente con psicoterapia centrada en el procesamiento del dolor, la reconexión con el presente y la resignificación de la pérdida.",
          seekHelp: [
            "Los síntomas persisten intensamente por más de 12 meses",
            "No se puede retomar la vida cotidiana",
            "Aparecen síntomas depresivos severos o ideación suicida",
            "Se experimenta una tristeza completamente paralizante",
            "La persona se siente atrapada en negación o enojo crónico",
            "Hay pensamientos persistentes de muerte o culpa extrema",
            "Se desarrollan problemas de salud física relacionados"
          ],
          riskFactors: {
            loss: [
              "Muerte súbita, traumática o inesperada",
              "Muerte por suicidio, homicidio o accidente",
              "Pérdida de un hijo o pareja",
              "Múltiples pérdidas simultáneas",
              "Circunstancias ambiguas de la muerte"
            ],
            relationship: [
              "Relación muy estrecha o dependiente",
              "Relación conflictiva no resuelta",
              "Cuidador principal del fallecido"
            ],
            personal: [
              "Historia de trastornos mentales previos",
              "Experiencias traumáticas pasadas",
              "Estilo de apego inseguro",
              "Baja autoestima o recursos de afrontamiento limitados"
            ],
            social: [
              "Falta de apoyo social",
              "Aislamiento geográfico o cultural",
              "Dificultades económicas derivadas de la pérdida"
            ]
          }
        },
        therapy: {
          intro: "La terapia psicológica no busca \"acelerar\" el duelo, sino acompañarte, sostenerte emocionalmente y ayudarte a darle sentido a lo que estás viviendo.",
          objectives: [
            "Facilitar la expresión emocional sin juicio",
            "Ayudar a procesar la pérdida de manera gradual y respetando tu ritmo",
            "Desarrollar estrategias de afrontamiento saludables y efectivas",
            "Reconstruir el significado y encontrar formas de honrar la memoria",
            "Fortalecer la red de apoyo y mejorar las relaciones interpersonales",
            "Prevenir complicaciones como depresión o trastorno de duelo prolongado"
          ],
          approaches: [
            "Terapia de duelo específica y centrada en la pérdida",
            "Terapia cognitivo-conductual para síntomas de ansiedad y depresión",
            "Terapia narrativa para reconstruir la historia personal",
            "Terapia de grupo con personas en situaciones similares",
            "Enfoques integrativos que combinan múltiples perspectivas"
          ],
          selfHelp: {
            healthy: [
              "Permitirse sentir y expresar emociones",
              "Mantener rutinas básicas de autocuidado",
              "Buscar apoyo en familiares y amigos cercanos",
              "Crear rituales de recuerdo significativos",
              "Practicar técnicas de relajación y mindfulness",
              "Mantener actividad física moderada",
              "Evitar decisiones importantes inmediatamente"
            ],
            warning: [
              "Aislamiento social prolongado",
              "Consumo excesivo de alcohol o sustancias",
              "Ideación suicida o de autolesión",
              "Incapacidad total para funcionar en la vida diaria",
              "Síntomas físicos que empeoran progresivamente"
            ]
          },
          hope: "El duelo es una experiencia profundamente humana que surge ante cualquier pérdida significativa: no solo por la muerte de un ser querido, sino también por rupturas, migraciones, cambios vitales, pérdida de salud o proyectos importantes. Aunque doloroso, el duelo puede convertirse en una oportunidad para crecer, resignificar y profundizar en nuestra vida emocional. Con el apoyo adecuado y el tiempo necesario para tu proceso único, es posible integrar la pérdida en tu vida de una forma que honre tanto lo que has perdido como tu capacidad de adaptación, crecimiento y renovación. Tu dolor es válido y merece ser atendido con compasión. No estás solo en este proceso. Buscar ayuda profesional es un acto de valentía y autocuidado que puede marcar una diferencia significativa en tu bienestar."
        },
        theories: {
          bowlby: "La teoría del vínculo de Bowlby describe el desarrollo psicoemocional sano en el ser humano. La persona desarrolla de forma instintiva vínculos (apegos), y el mantenimiento de un vínculo se experimenta como fuente de seguridad. Esta teoría explica por qué las pérdidas de figuras significativas generan tanto sufrimiento: rompen los vínculos de apego que nos proporcionan seguridad emocional.",
          contemporary: "La investigación sobre duelo está alcanzando el centenario de la publicación del clásico ensayo de Freud \"Duelo y Melancolía\" (1917), un texto de gran significancia para el desarrollo teórico posterior. Los modelos actuales han evolucionado considerablemente desde entonces, reconociendo la complejidad y variabilidad individual del proceso."
        }
      }
    },
    {
      title: "Crecimiento personal",
      icon: Target,
      description: "Baja autoestima, inseguridad, perdón, propósito de vida",
      content: {
        definition: "El crecimiento personal es un proceso consciente de desarrollo interno que nos permite ampliar nuestra comprensión de nosotros mismos, fortalecer habilidades emocionales, cultivar el bienestar y vivir de manera más coherente con nuestros valores.",
        clarification: "No se trata de \"ser alguien distinto\", sino de reconectar con lo esencial, descubrir recursos internos y vivir con mayor autenticidad.",
        benefits: [
          "Mayor autoconocimiento y autoestima",
          "Mejora en la toma de decisiones y en las relaciones",
          "Reducción del malestar emocional y mayor resiliencia",
          "Conexión con un propósito de vida y mayor satisfacción subjetiva"
        ],
        areas: [
          "Reconexión con tus valores y sentido vital",
          "Manejo emocional y regulación afectiva",
          "Desarrollo de la autoestima y autocompasión",
          "Flexibilidad psicológica y gestión del cambio",
          "Claridad de metas, motivación y hábitos saludables",
          "Superación de bloqueos internos o creencias limitantes"
        ],
        whenToStart: [
          "Cuando sientes estancamiento o repetición de patrones",
          "Si quieres mejorar tu bienestar y construir relaciones más sanas",
          "Ante cambios vitales, decisiones importantes o crisis existenciales",
          "Si deseas conocerte más, fortalecer tu identidad o hacer cambios desde adentro"
        ],
        therapyHelp: "La terapia no solo alivia el malestar, también es un espacio para crecer. Te acompaña en el descubrimiento de fortalezas, la exploración de tus deseos auténticos y la construcción de una vida con mayor plenitud y sentido. A través de técnicas basadas en evidencia (ACT, mindfulness, enfoque humanista y sistémico), puedes avanzar hacia una versión más consciente y alineada de ti mismo."
      }
    }
  ];

  // Otros motivos de consulta
  const otherReasons = [
    {
      title: "Relaciones afectivas",
      description: "Dificultades en vínculos interpersonales, patrones relacionales, establecimiento de límites saludables."
    },
    {
      title: "Transiciones vitales: maternidad, separaciones, mudanzas",
      description: "Apoyo durante cambios importantes que requieren adaptación y restructuración emocional."
    },
    {
      title: "Traumas o vivencias no procesadas",
      description: "Elaboración de experiencias difíciles del pasado que continúan afectando el presente."
    },
    {
      title: "Toma de decisiones bloqueada por confusión o miedo",
      description: "Clarificación de valores y objetivos para superar la parálisis decisional."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-steel-blue/10 to-cream">
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
              Patricia
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
                className="border-sage text-sage hover:bg-sage hover:text-white"
                onClick={() => handleNavigation('/couples-therapy')}
              >
                <Heart size={16} className="mr-2" />
                Terapia de Pareja
              </Button>
              <Button 
                variant="default" 
                className="bg-gradient-primary shadow-hover"
              >
                <User size={16} className="mr-2" />
                Terapia Individual
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
                  className="border-sage text-sage hover:bg-sage hover:text-white w-full"
                  onClick={() => handleNavigation('/couples-therapy')}
                >
                  <Heart size={16} className="mr-2" />
                  Terapia de Pareja
                </Button>
                <Button 
                  variant="default" 
                  className="bg-gradient-primary w-full"
                >
                  <User size={16} className="mr-2" />
                  Terapia Individual
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
          <div className="inline-flex items-center gap-2 bg-steel-blue/10 px-4 py-2 rounded-full mb-6">
            <User className="w-5 h-5 text-steel-blue" />
            <span className="text-steel-blue font-medium">Terapia Individual</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Sanar, Comunicar, Conectar
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            Porque el vínculo más importante es contigo mismo. 
            Te acompaño en tu proceso de crecimiento personal y bienestar emocional.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-gradient-primary shadow-hover hover:shadow-glow">
              <Calendar className="w-5 h-5 mr-2" />
              Agendar Sesión
            </Button>
            <Button variant="outline" size="lg" className="border-steel-blue text-steel-blue hover:bg-steel-blue hover:text-white">
              <Phone className="w-5 h-5 mr-2" />
              Consulta Inicial
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Motivos de Consulta Frecuentes */}
      <section className="py-16 px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="container mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-sage-dark">
              Motivos de Consulta Frecuentes
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Explora las áreas principales en las que puedo acompañarte en tu proceso de crecimiento y sanación
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <Accordion type="single" collapsible className="space-y-6">
              {mainTopics.map((topic, index) => (
                <AccordionItem key={index} value={`topic-${index}`} className="border border-steel-blue/20 rounded-lg">
                  <AccordionTrigger className="px-6 text-left hover:no-underline">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                        <topic.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-left">
                        <h3 className="text-xl font-bold text-sage-dark">{topic.title}</h3>
                        <p className="text-muted-foreground text-sm">{topic.description}</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <div className="space-y-6">
                      {/* Contenido específico para Ansiedad */}
                      {topic.title.includes("Ansiedad") && (
                        <div className="space-y-6">
                          <div>
                            <h4 className="font-semibold text-sage-dark mb-3">¿Qué es la ansiedad?</h4>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                              {topic.content.definition} En estos casos, suele ir acompañada de síntomas tanto psicológicos como fisiológicos, interfiriendo con el bienestar y la vida cotidiana.
                            </p>
                            
                            <div className="grid md:grid-cols-2 gap-6">
                              <div className="bg-sage/5 p-4 rounded-lg">
                                <h5 className="font-medium text-sage-dark mb-2">Síntomas Psicológicos:</h5>
                                <ul className="space-y-1">
                                  {topic.content.symptoms.psychological.map((symptom, idx) => (
                                    <li key={idx} className="flex items-center gap-2">
                                      <div className="w-2 h-2 bg-sage rounded-full" />
                                      <span className="text-sm text-muted-foreground">{symptom}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              
                              <div className="bg-steel-blue/5 p-4 rounded-lg">
                                <h5 className="font-medium text-steel-blue mb-2">Síntomas Fisiológicos:</h5>
                                <ul className="space-y-1">
                                  {topic.content.symptoms.physiological.map((symptom, idx) => (
                                    <li key={idx} className="flex items-center gap-2">
                                      <div className="w-2 h-2 bg-steel-blue rounded-full" />
                                      <span className="text-sm text-muted-foreground">{symptom}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                            
                            <Alert>
                              <AlertCircle className="h-4 w-4" />
                              <AlertDescription className="text-sage-dark">
                                {topic.content.note}
                              </AlertDescription>
                            </Alert>
                          </div>
                        </div>
                      )}

                      {/* Depresión Content */}
                      {topic.title.includes("Depresión") && (
                        <div className="space-y-6">
                          <h4 className="font-semibold text-sage-dark mb-3">¿Depresión o tristeza?</h4>
                          <p className="text-muted-foreground mb-4">Es común confundir tristeza con depresión, pero no son lo mismo:</p>
                          
                          <div className="grid md:grid-cols-2 gap-6">
                            <Card className="shadow-elegant">
                              <CardHeader>
                                <CardTitle className="text-sage text-lg">La Tristeza</CardTitle>
                              </CardHeader>
                              <CardContent>
                                <p className="text-muted-foreground text-sm">
                                  {topic.content.difference.sadness}
                                </p>
                              </CardContent>
                            </Card>
                            
                            <Card className="shadow-elegant border-steel-blue/20">
                              <CardHeader>
                                <CardTitle className="text-steel-blue text-lg">La Depresión</CardTitle>
                              </CardHeader>
                              <CardContent>
                                <p className="text-muted-foreground text-sm">
                                  {topic.content.difference.depression}
                                </p>
                              </CardContent>
                            </Card>
                          </div>
                        </div>
                      )}

                      {/* Duelo Content */}
                      {topic.title.includes("Duelos") && (
                        <div className="space-y-8">
                          <div>
                            <h4 className="font-semibold text-sage-dark mb-3">¿Qué es el duelo?</h4>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                              {topic.content.definition}
                            </p>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                              {topic.content.scope}
                            </p>
                            <p className="text-muted-foreground leading-relaxed mb-6">
                              {topic.content.individual}
                            </p>
                          </div>

                          <div>
                            <h4 className="font-semibold text-sage-dark mb-4">¿Cómo se vive el duelo?</h4>
                            <h5 className="text-lg font-medium text-steel-blue mb-4">Las Cinco Etapas de Kübler-Ross</h5>
                            <p className="text-muted-foreground mb-6">
                              La teoría de las 5 fases del duelo de la psiquiatra Elisabeth Kübler-Ross es uno de los modelos psicológicos más célebres en todo el mundo. Estas etapas incluyen (no necesariamente en orden):
                            </p>
                            
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                              {topic.content.stages.map((stage, idx) => (
                                <Card key={idx} className="shadow-elegant hover:shadow-hover transition-all duration-300">
                                  <CardHeader className="pb-3">
                                    <CardTitle className="text-lg text-sage-dark flex items-center gap-3">
                                      <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                                        {idx + 1}
                                      </div>
                                      {stage.name}
                                    </CardTitle>
                                  </CardHeader>
                                  <CardContent className="pt-0">
                                    <p className="text-sm text-muted-foreground">{stage.description}</p>
                                  </CardContent>
                                </Card>
                              ))}
                            </div>
                            
                            <Alert>
                              <AlertCircle className="h-4 w-4" />
                              <AlertDescription>
                                <strong>Importante:</strong> Hoy sabemos que el duelo no sigue un orden rígido ni lineal. Cada persona lo 
                                vive a su propio ritmo, pudiendo avanzar, retroceder o permanecer más tiempo en ciertas etapas. Lo fundamental 
                                en el acompañamiento terapéutico es ayudar a la persona a aceptar la realidad de la pérdida, gestionar sus 
                                emociones con compasión y avanzar en su proceso de adaptación a una vida que ha cambiado. El objetivo terapéutico 
                                no es acelerar el proceso, sino acompañarlo con empatía y herramientas de contención.
                              </AlertDescription>
                            </Alert>
                          </div>

                          <div>
                            <h4 className="font-semibold text-sage-dark mb-6">Reacciones Comunes ante el Duelo</h4>
                            
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                              <Card className="shadow-elegant">
                                <CardHeader>
                                  <CardTitle className="text-blue-gray text-lg flex items-center gap-2">
                                    <Heart className="w-5 h-5" />
                                    Emocionales
                                  </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-2">
                                  {topic.content.reactions.emotional.map((reaction, idx) => (
                                    <div key={idx} className="text-sm text-muted-foreground">• {reaction}</div>
                                  ))}
                                </CardContent>
                              </Card>

                              <Card className="shadow-elegant">
                                <CardHeader>
                                  <CardTitle className="text-magenta text-lg flex items-center gap-2">
                                    <Activity className="w-5 h-5" />
                                    Físicas
                                  </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-2">
                                  {topic.content.reactions.physical.map((reaction, idx) => (
                                    <div key={idx} className="text-sm text-muted-foreground">• {reaction}</div>
                                  ))}
                                </CardContent>
                              </Card>

                              <Card className="shadow-elegant">
                                <CardHeader>
                                  <CardTitle className="text-steel-blue text-lg flex items-center gap-2">
                                    <Brain className="w-5 h-5" />
                                    Cognitivas
                                  </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-2">
                                  {topic.content.reactions.cognitive.map((reaction, idx) => (
                                    <div key={idx} className="text-sm text-muted-foreground">• {reaction}</div>
                                  ))}
                                </CardContent>
                              </Card>

                              <Card className="shadow-elegant">
                                <CardHeader>
                                  <CardTitle className="text-sage text-lg flex items-center gap-2">
                                    <Target className="w-5 h-5" />
                                    Conductuales
                                  </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-2">
                                  {topic.content.reactions.behavioral.map((reaction, idx) => (
                                    <div key={idx} className="text-sm text-muted-foreground">• {reaction}</div>
                                  ))}
                                </CardContent>
                              </Card>
                            </div>
                          </div>

                          <div>
                            <h4 className="font-semibold text-sage-dark mb-6">¿Cómo puede ayudarte la psicoterapia?</h4>
                            
                            <Card className="shadow-elegant bg-gradient-secondary mb-6">
                              <CardContent className="p-6">
                                <p className="text-sage-dark text-center mb-6 italic">
                                  {topic.content.therapy.intro}
                                </p>

                                <div className="mb-6">
                                  <h5 className="font-semibold text-sage-dark mb-4">Objetivos Terapéuticos</h5>
                                  <div className="grid md:grid-cols-2 gap-4">
                                    {topic.content.therapy.objectives.map((objective, index) => (
                                      <div key={index} className="bg-card p-4 rounded-lg shadow-hover">
                                        <div className="flex items-start gap-3">
                                          <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                                            <CheckCircle className="w-4 h-4 text-white" />
                                          </div>
                                          <p className="text-sm text-muted-foreground">{objective}</p>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </div>

                                <div>
                                  <h5 className="font-semibold text-sage-dark mb-4">Enfoques Terapéuticos Efectivos</h5>
                                  <div className="space-y-3">
                                    {topic.content.therapy.approaches.map((approach, idx) => (
                                      <div key={idx} className="flex items-start gap-3">
                                        <ArrowRight className="w-4 h-4 text-steel-blue mt-1 flex-shrink-0" />
                                        <span className="text-sm text-muted-foreground">{approach}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </CardContent>
                            </Card>

                            <div className="grid md:grid-cols-2 gap-6 mb-6">
                              <Card className="shadow-elegant">
                                <CardHeader>
                                  <CardTitle className="text-sage text-lg">Recursos de Autoayuda - Estrategias Saludables</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-3">
                                  {topic.content.therapy.selfHelp.healthy.map((strategy, idx) => (
                                    <div key={idx} className="flex items-start gap-3">
                                      <CheckCircle className="w-4 h-4 text-sage mt-1 flex-shrink-0" />
                                      <span className="text-sm text-muted-foreground">{strategy}</span>
                                    </div>
                                  ))}
                                </CardContent>
                              </Card>

                              <Card className="shadow-elegant border-destructive/20">
                                <CardHeader>
                                  <CardTitle className="text-destructive text-lg">Señales de Alarma</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-3">
                                  {topic.content.therapy.selfHelp.warning.map((warning, idx) => (
                                    <div key={idx} className="flex items-start gap-3">
                                      <AlertCircle className="w-4 h-4 text-destructive mt-1 flex-shrink-0" />
                                      <span className="text-sm text-muted-foreground">{warning}</span>
                                    </div>
                                  ))}
                                </CardContent>
                              </Card>
                            </div>

                            <Card className="shadow-elegant bg-gradient-primary text-white">
                              <CardHeader>
                                <CardTitle className="text-2xl text-center">Mensaje de Esperanza</CardTitle>
                              </CardHeader>
                              <CardContent>
                                <p className="leading-relaxed text-center">
                                  {topic.content.therapy.hope}
                                </p>
                              </CardContent>
                            </Card>
                          </div>

                          <div>
                            <h4 className="font-semibold text-sage-dark mb-6">¿Cuándo el duelo se vuelve patológico?</h4>
                            
                            <Card className="shadow-elegant mb-6">
                              <CardHeader>
                                <CardTitle className="text-sage-dark">Trastorno de Duelo Prolongado (DSM-5-TR)</CardTitle>
                              </CardHeader>
                              <CardContent>
                                <p className="text-muted-foreground mb-4">
                                  {topic.content.pathological.definition}
                                </p>
                                
                                <div className="space-y-6">
                                  <div>
                                    <h5 className="font-semibold text-sage-dark mb-3">Criterios Diagnósticos Principales:</h5>
                                    <div className="space-y-3">
                                      {topic.content.pathological.criteria.map((criteria, idx) => (
                                        <div key={idx} className="flex items-start gap-3">
                                          <CheckCircle className="w-5 h-5 text-sage mt-0.5 flex-shrink-0" />
                                          <span className="text-muted-foreground">{criteria}</span>
                                        </div>
                                      ))}
                                    </div>
                                  </div>

                                  <div>
                                    <h5 className="font-semibold text-sage-dark mb-3">Síntomas Asociados Frecuentes:</h5>
                                    <div className="space-y-3">
                                      {topic.content.pathological.symptoms.map((symptom, idx) => (
                                        <div key={idx} className="flex items-start gap-3">
                                          <div className="w-2 h-2 bg-steel-blue rounded-full mt-2 flex-shrink-0" />
                                          <span className="text-muted-foreground text-sm">{symptom}</span>
                                        </div>
                                      ))}
                                    </div>
                                  </div>

                                  <div className="bg-steel-blue/10 p-4 rounded-lg border border-steel-blue/20">
                                    <p className="text-steel-blue font-medium">
                                      {topic.content.pathological.note}
                                    </p>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>

                            <Card className="shadow-elegant border-destructive/20 mb-6">
                              <CardHeader>
                                <CardTitle className="text-destructive">Cuándo Buscar Ayuda Profesional</CardTitle>
                              </CardHeader>
                              <CardContent>
                                <p className="text-muted-foreground mb-4">Es recomendable buscar apoyo especializado cuando:</p>
                                <div className="space-y-2">
                                  {topic.content.pathological.seekHelp.map((signal, idx) => (
                                    <div key={idx} className="flex items-start gap-3">
                                      <AlertCircle className="w-4 h-4 text-destructive mt-1 flex-shrink-0" />
                                      <span className="text-sm text-muted-foreground">{signal}</span>
                                    </div>
                                  ))}
                                </div>
                              </CardContent>
                            </Card>

                            <div>
                              <h5 className="font-semibold text-sage-dark mb-4">Factores de Riesgo para Duelo Complicado</h5>
                              
                              <div className="grid md:grid-cols-2 gap-6">
                                <Card className="shadow-elegant">
                                  <CardHeader>
                                    <CardTitle className="text-steel-blue text-base">Relacionados con la pérdida</CardTitle>
                                  </CardHeader>
                                  <CardContent className="space-y-2">
                                    {topic.content.pathological.riskFactors.loss.map((factor, idx) => (
                                      <div key={idx} className="flex items-start gap-2">
                                        <div className="w-2 h-2 bg-steel-blue rounded-full mt-2 flex-shrink-0" />
                                        <span className="text-sm text-muted-foreground">{factor}</span>
                                      </div>
                                    ))}
                                  </CardContent>
                                </Card>

                                <Card className="shadow-elegant">
                                  <CardHeader>
                                    <CardTitle className="text-magenta text-base">Relacionados con la relación</CardTitle>
                                  </CardHeader>
                                  <CardContent className="space-y-2">
                                    {topic.content.pathological.riskFactors.relationship.map((factor, idx) => (
                                      <div key={idx} className="flex items-start gap-2">
                                        <div className="w-2 h-2 bg-magenta rounded-full mt-2 flex-shrink-0" />
                                        <span className="text-sm text-muted-foreground">{factor}</span>
                                      </div>
                                    ))}
                                  </CardContent>
                                </Card>

                                <Card className="shadow-elegant">
                                  <CardHeader>
                                    <CardTitle className="text-sage text-base">Factores personales</CardTitle>
                                  </CardHeader>
                                  <CardContent className="space-y-2">
                                    {topic.content.pathological.riskFactors.personal.map((factor, idx) => (
                                      <div key={idx} className="flex items-start gap-2">
                                        <div className="w-2 h-2 bg-sage rounded-full mt-2 flex-shrink-0" />
                                        <span className="text-sm text-muted-foreground">{factor}</span>
                                      </div>
                                    ))}
                                  </CardContent>
                                </Card>

                                <Card className="shadow-elegant">
                                  <CardHeader>
                                    <CardTitle className="text-blue-gray text-base">Factores sociales</CardTitle>
                                  </CardHeader>
                                  <CardContent className="space-y-2">
                                    {topic.content.pathological.riskFactors.social.map((factor, idx) => (
                                      <div key={idx} className="flex items-start gap-2">
                                        <div className="w-2 h-2 bg-blue-gray rounded-full mt-2 flex-shrink-0" />
                                        <span className="text-sm text-muted-foreground">{factor}</span>
                                      </div>
                                    ))}
                                  </CardContent>
                                </Card>
                              </div>
                            </div>
                          </div>

                          <div>
                            <h4 className="font-semibold text-sage-dark mb-4">Perspectivas Científicas del Duelo</h4>
                            
                            <div className="space-y-6">
                              <Card className="shadow-elegant">
                                <CardHeader>
                                  <CardTitle className="text-steel-blue text-lg">Teoría del Apego (John Bowlby)</CardTitle>
                                </CardHeader>
                                <CardContent>
                                  <p className="text-muted-foreground text-sm leading-relaxed">
                                    {topic.content.theories.bowlby}
                                  </p>
                                </CardContent>
                              </Card>

                              <Card className="shadow-elegant border-sage/20">
                                <CardHeader>
                                  <CardTitle className="text-sage text-lg">Modelos Contemporáneos</CardTitle>
                                </CardHeader>
                                <CardContent>
                                  <p className="text-muted-foreground text-sm leading-relaxed">
                                    {topic.content.theories.contemporary}
                                  </p>
                                </CardContent>
                              </Card>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Crecimiento Personal Content */}
                      {topic.title.includes("Crecimiento") && (
                        <div className="space-y-6">
                          <div>
                            <h4 className="font-semibold text-sage-dark mb-3">1. ¿Qué es el crecimiento personal?</h4>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                              {topic.content.definition}
                            </p>
                            <p className="text-sage-dark text-sm italic">
                              {topic.content.clarification}
                            </p>
                          </div>

                          <div>
                            <h4 className="font-semibold text-sage-dark mb-3">2. ¿Por qué es importante?</h4>
                            <p className="text-muted-foreground mb-4">
                              Numerosos estudios en psicología positiva, terapia de aceptación y compromiso (ACT) y teorías del desarrollo humano muestran que trabajar en el crecimiento personal favorece:
                            </p>
                            <div className="grid md:grid-cols-2 gap-4">
                              {topic.content.benefits.map((benefit, idx) => (
                                <div key={idx} className="flex items-start gap-3 p-3 bg-sage/5 rounded-lg">
                                  <CheckCircle className="w-5 h-5 text-sage mt-0.5 flex-shrink-0" />
                                  <span className="text-sm text-muted-foreground">{benefit}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h4 className="font-semibold text-sage-dark mb-3">3. Temas que puedes trabajar en este proceso</h4>
                            <div className="space-y-2">
                              {topic.content.areas.map((area, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                  <ArrowRight className="w-4 h-4 text-steel-blue mt-1 flex-shrink-0" />
                                  <span className="text-sm text-muted-foreground">{area}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h4 className="font-semibold text-sage-dark mb-3">4. ¿Cuándo iniciar un proceso de crecimiento personal?</h4>
                            <div className="space-y-2">
                              {topic.content.whenToStart.map((when, idx) => (
                                <div key={idx} className="flex items-start gap-3 p-3 bg-steel-blue/5 rounded-lg">
                                  <Lightbulb className="w-4 h-4 text-steel-blue mt-1 flex-shrink-0" />
                                  <span className="text-sm text-muted-foreground">{when}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="bg-gradient-secondary p-6 rounded-lg">
                            <h4 className="font-semibold text-sage-dark mb-3">5. ¿Cómo puede ayudarte la psicoterapia en este camino?</h4>
                            <p className="text-sage-dark">
                              {topic.content.therapyHelp}
                            </p>
                          </div>
                        </div>
                      )}

                      {/* Placeholder para otros contenidos */}
                      {!topic.title.includes("Ansiedad") && !topic.title.includes("Depresión") && !topic.title.includes("Duelos") && !topic.title.includes("Crecimiento") && (
                        <div className="bg-steel-blue/5 p-6 rounded-lg">
                          <p className="text-sage-dark font-medium">
                            Contenido pendiente por agregar para: {topic.title}
                          </p>
                          <p className="text-muted-foreground text-sm mt-2">
                            Este contenido se desarrollará en las siguientes iteraciones
                          </p>
                        </div>
                      )}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </motion.div>
      </section>

      {/* Otros Motivos de Consulta */}
      <section className="py-16 px-6 bg-white/30">
        <div className="container mx-auto">
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-sage-dark">
              Otros Motivos de Consulta
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Además de los motivos principales, también ofrezco acompañamiento en otras áreas importantes de la vida
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {otherReasons.map((reason, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="h-full"
              >
                <Card className="shadow-elegant hover:shadow-hover transition-all duration-300 h-full">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-3 h-3 bg-gradient-primary rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-sage-dark mb-2 text-lg">
                        {reason.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {reason.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Simple */}
      <footer className="py-8 px-6 bg-sage-dark text-white">
        <div className="container mx-auto text-center">
          <p className="mb-4">© 2025 Patricia Rojas. Acompañándote en tu crecimiento.</p>
          <div className="flex justify-center space-x-6">
            <Button variant="ghost" onClick={() => handleNavigation('/')} className="text-white hover:text-sage-light">
              Inicio
            </Button>
            <Button variant="ghost" onClick={() => handleNavigation('/couples-therapy')} className="text-white hover:text-sage-light">
              Terapia de Pareja
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default IndividualTherapy;