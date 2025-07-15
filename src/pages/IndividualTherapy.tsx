import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { User, Brain, Heart, Target, CheckCircle, ArrowRight, Phone, Mail, Calendar, AlertCircle, Menu, X, Home } from 'lucide-react';
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
        definition: "El duelo es un proceso emocional, cognitivo y corporal natural que experimentamos tras una pérdida significativa. No se limita únicamente a la muerte de un ser querido: también puede desencadenarse por la pérdida de una relación, un trabajo, una etapa vital, la salud, la migración o incluso ideales profundamente arraigados.",
        stages: [
          { name: "Negación", description: "dificultad para aceptar la pérdida o lo ocurrido" },
          { name: "Ira", description: "sentimientos de injusticia, enfado hacia uno mismo, los demás o la situación" },
          { name: "Negociación", description: "intentos mentales de cambiar o revertir la pérdida" },
          { name: "Depresión", description: "tristeza profunda, vacío, aislamiento, desesperanza" },
          { name: "Aceptación", description: "integración de la pérdida en la vida y apertura a nuevas experiencias" }
        ]
      }
    },
    {
      title: "Crecimiento personal",
      icon: Target,
      description: "Desarrollo interno para vivir con mayor autenticidad y bienestar",
      content: {
        definition: "El crecimiento personal es un proceso consciente de desarrollo interno que nos permite ampliar nuestra comprensión de nosotros mismos, fortalecer habilidades emocionales, cultivar el bienestar y vivir de manera más coherente con nuestros valores.",
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
        ]
      }
    }
  ];

  const griefReactions = {
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
      "Ocasionalmente, experiencias sensoriales breves"
    ],
    behavioral: [
      "Llanto frecuente e incontrolable",
      "Retraimiento social y aislamiento",
      "Hiperactividad o inquietud motora",
      "Evitación de recuerdos o búsqueda obsesiva de ellos",
      "Cambios en rutinas y hábitos",
      "Comportamientos de búsqueda de la persona perdida"
    ]
  };

  const therapyObjectives = [
    "Facilitar la expresión emocional sin juicio",
    "Ayudar a procesar la pérdida de manera gradual y respetando tu ritmo",
    "Desarrollar estrategias de afrontamiento saludables y efectivas",
    "Reconstruir el significado y encontrar formas de honrar la memoria",
    "Fortalecer la red de apoyo y mejorar las relaciones interpersonales",
    "Prevenir complicaciones como depresión o trastorno de duelo prolongado"
  ];

  const otherReasons = [
    "Relaciones afectivas",
    "Transiciones vitales: maternidad, separaciones, mudanzas",
    "Traumas o vivencias no procesadas",
    "Toma de decisiones bloqueada por confusión o miedo"
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
                      {/* Ansiedad Content */}
                      {topic.title.includes("Ansiedad") && (
                        <div className="space-y-6">
                          <div>
                            <h4 className="font-semibold text-sage-dark mb-3">¿Qué es la ansiedad?</h4>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                              {topic.content.definition}
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
                        <div className="space-y-6">
                          <div>
                            <h4 className="font-semibold text-sage-dark mb-3">¿Qué es el duelo?</h4>
                            <p className="text-muted-foreground leading-relaxed mb-6">
                              {topic.content.definition}
                            </p>
                          </div>

                          <div>
                            <h4 className="font-semibold text-sage-dark mb-4">Las Cinco Etapas de Kübler-Ross</h4>
                            <p className="text-muted-foreground mb-4 text-sm">
                              Estas etapas no siguen un orden rígido ni lineal. Cada persona lo vive a su propio ritmo:
                            </p>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                              {topic.content.stages.map((stage, idx) => (
                                <Card key={idx} className="shadow-elegant">
                                  <CardHeader className="pb-3">
                                    <CardTitle className="text-sm text-sage-dark">{stage.name}</CardTitle>
                                  </CardHeader>
                                  <CardContent className="pt-0">
                                    <p className="text-xs text-muted-foreground">{stage.description}</p>
                                  </CardContent>
                                </Card>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Crecimiento Personal Content */}
                      {topic.title.includes("Crecimiento") && (
                        <div className="space-y-6">
                          <div>
                            <h4 className="font-semibold text-sage-dark mb-3">¿Qué es el crecimiento personal?</h4>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                              {topic.content.definition}
                            </p>
                            <p className="text-sage-dark text-sm italic">
                              No se trata de "ser alguien distinto", sino de reconectar con lo esencial, 
                              descubrir recursos internos y vivir con mayor autenticidad.
                            </p>
                          </div>

                          <div>
                            <h4 className="font-semibold text-sage-dark mb-3">¿Por qué es importante?</h4>
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
                            <h4 className="font-semibold text-sage-dark mb-3">Temas que puedes trabajar</h4>
                            <div className="space-y-2">
                              {topic.content.areas.map((area, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                  <ArrowRight className="w-4 h-4 text-steel-blue mt-1 flex-shrink-0" />
                                  <span className="text-sm text-muted-foreground">{area}</span>
                                </div>
                              ))}
                            </div>
                          </div>
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

      {/* Otros Motivos */}
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
                        {reason}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {reason === "Relaciones afectivas" && "Dificultades en vínculos interpersonales, patrones relacionales, establecimiento de límites saludables."}
                        {reason === "Transiciones vitales: maternidad, separaciones, mudanzas" && "Apoyo durante cambios importantes que requieren adaptación y restructuración emocional."}
                        {reason === "Traumas o vivencias no procesadas" && "Elaboración de experiencias difíciles del pasado que continúan afectando el presente."}
                        {reason === "Toma de decisiones bloqueada por confusión o miedo" && "Clarificación de valores y objetivos para superar la parálisis decisional."}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Cuándo Consultar */}
          <motion.div variants={itemVariants} className="mt-16">
            <Card className="shadow-elegant max-w-3xl mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl text-sage-dark text-center flex items-center justify-center gap-3">
                  <AlertCircle className="w-6 h-6 text-steel-blue" />
                  ¿Cuándo es el momento de consultar?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-sage-dark mb-3">Señales para iniciar terapia:</h4>
                    <ul className="space-y-2">
                      {[
                        "Cuando sientes estancamiento o repetición de patrones",
                        "Si quieres mejorar tu bienestar y construir relaciones más sanas",
                        "Ante cambios vitales, decisiones importantes o crisis existenciales",
                        "Si deseas conocerte más y fortalecer tu identidad"
                      ].map((signal, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-4 h-4 text-sage mt-1 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{signal}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-sage-dark mb-3">Beneficios del proceso:</h4>
                    <ul className="space-y-2">
                      {[
                        "Desarrollo de mayor autoconocimiento",
                        "Mejora en el manejo emocional",
                        "Fortalecimiento de la autoestima",
                        "Construcción de relaciones más saludables"
                      ].map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <ArrowRight className="w-4 h-4 text-steel-blue mt-1 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="bg-gradient-secondary p-4 rounded-lg mt-6">
                  <p className="text-sage-dark text-center italic">
                    "La terapia no solo alivia el malestar, también es un espacio para crecer. 
                    Te acompaña en el descubrimiento de fortalezas y la construcción de una vida con mayor plenitud y sentido."
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Duelo Extendido */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-sage-dark">
              Proceso de Duelo: Comprensión Profunda
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              El duelo es una experiencia profundamente humana. Cada persona lo vive de manera distinta.
            </p>
          </motion.div>

          {/* Reacciones Comunes */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-sage-dark mb-8 text-center">
              Reacciones Comunes ante el Duelo
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-blue-gray text-lg flex items-center gap-2">
                    <Brain className="w-5 h-5" />
                    Cognitivas
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {griefReactions.cognitive.map((reaction, idx) => (
                    <div key={idx} className="text-sm text-muted-foreground">• {reaction}</div>
                  ))}
                </CardContent>
              </Card>

              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-magenta text-lg flex items-center gap-2">
                    <Target className="w-5 h-5" />
                    Conductuales
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {griefReactions.behavioral.map((reaction, idx) => (
                    <div key={idx} className="text-sm text-muted-foreground">• {reaction}</div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Duelo Complicado */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-sage-dark mb-6 text-center">
              ¿Cuándo el duelo se vuelve patológico?
            </h3>
            
            <div className="max-w-4xl mx-auto">
              <Alert className="mb-6">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  El Trastorno de Duelo Prolongado (DSM-5-TR) se considera cuando, tras al menos 12 meses 
                  desde la pérdida (6 meses en niños y adolescentes), la persona sigue experimentando 
                  un nivel de malestar intenso que interfiere significativamente con su funcionamiento diario.
                </AlertDescription>
              </Alert>

              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-sage-dark">Criterios Diagnósticos Principales</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      "Anhelo o nostalgia persistente e intensa por la persona fallecida",
                      "Tristeza o dolor emocional profundo relacionado con la pérdida",
                      "Preocupación constante por el fallecido o por las circunstancias de su muerte",
                      "Alteración en el sentido de identidad (sensación de haber perdido una parte de sí mismo)"
                    ].map((criteria, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-sage mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{criteria}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Cómo ayuda la terapia */}
      <section className="py-16 px-6 bg-gradient-secondary">
        <div className="container mx-auto max-w-4xl">
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-sage-dark">
              ¿Cómo puede acompañarte la psicoterapia?
            </h2>
            <p className="text-lg text-muted-foreground">
              La terapia psicológica no busca "acelerar" el duelo, sino acompañarte, sostenerte 
              emocionalmente y ayudarte a darle sentido a lo que estás viviendo.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {therapyObjectives.map((objective, index) => (
              <Card key={index} className="shadow-elegant hover:shadow-hover transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-sm text-muted-foreground">{objective}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mensaje de Esperanza */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div variants={itemVariants} className="bg-gradient-primary p-8 rounded-lg text-white">
            <h2 className="text-3xl font-bold mb-6">Mensaje de Esperanza</h2>
            <p className="text-lg leading-relaxed mb-6">
              El duelo es una experiencia profundamente humana que, aunque dolorosa, puede transformarse 
              en una oportunidad de crecimiento personal y mayor profundidad emocional.
            </p>
            <p className="leading-relaxed mb-6">
              Independientemente del tipo de pérdida que hayas experimentado - ya sea la muerte de un ser querido, 
              el fin de una relación significativa, la pérdida de un trabajo, un cambio de vida importante, 
              problemas de salud, o el abandono de sueños e ideales - tu dolor es válido y merece ser atendido con compasión.
            </p>
            <p className="font-semibold">
              Con el apoyo adecuado y el tiempo necesario para tu proceso único, es posible aprender a integrar 
              la pérdida en tu vida de manera que honre tanto lo que has perdido como tu propia capacidad de 
              adaptación, crecimiento y renovación.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 px-6 bg-steel-blue/5">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold mb-6 text-sage-dark">
              Tu bienestar emocional es prioritario
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              No estás solo en este proceso. Buscar ayuda profesional es un acto de valentía y 
              autocuidado que puede marcar una diferencia significativa en tu bienestar.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary shadow-hover hover:shadow-glow">
                <Calendar className="w-5 h-5 mr-2" />
                Agendar Sesión
              </Button>
              <Button variant="outline" size="lg" className="border-steel-blue text-steel-blue hover:bg-steel-blue hover:text-white">
                <Phone className="w-5 h-5 mr-2" />
                Consulta Inicial
              </Button>
              <Button variant="ghost" size="lg" className="text-sage hover:bg-sage/10">
                <Mail className="w-5 h-5 mr-2" />
                Enviar Mensaje
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