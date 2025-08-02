import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart, Brain, Users, MessageCircle, Lightbulb, Shield, Sparkles, ArrowRight, User, Home, Menu, X, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
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

  const handleNavigation = (path: string) => {
    window.location.href = path;
    setIsMenuOpen(false);
  };

  const consultationReasons = [
    {
      id: 'ansiedad',
      title: 'Ansiedad',
      content: {
        title: '¿Qué es la ansiedad?',
        description: 'La ansiedad es una respuesta natural que nos prepara para responder ante situaciones que percibimos como amenazantes o desafiantes. Sin embargo, se convierte en un problema cuando esa reacción es excesiva, persistente y desproporcionada frente al contexto real durante más de 6 meses. En estos casos, puede afectar seriamente tu bienestar emocional y físico.',
        symptoms: {
          title: '¿Qué síntomas puede generar?',
          list: [
            'Preocupación constante o pensamientos que no puedes detener',
            'Sensación de alerta permanente o temor anticipatorio',
            'Tensión muscular, palpitaciones o dificultad para respirar',
            'Irritabilidad, fatiga o insomnio'
          ],
          note: 'Los ataques de pánico, son episodios súbitos de miedo intenso con síntomas físicos abrumadores: palpitaciones severas, sudoración, temblores, sensación de ahogo y miedo extremo.'
        }
      }
    },
    {
      id: 'depresion',
      title: 'Depresión',
      content: {
        title: '¿Depresión o tristeza?',
        description: 'Es común confundir la tristeza con la depresión, pero no son lo mismo. La tristeza es una emoción natural y temporal ante pérdidas o decepciones. Aunque dolorosa, permite mantener las actividades cotidianas. La depresión, en cambio, es un trastorno del estado de ánimo que implica más que sentirse triste. Según los criterios del DSM-5 (Manual Diagnóstico de la Asociación Americana de Psiquiatría), requiere la presencia de varios síntomas —además del estado de ánimo bajo— durante al menos dos semanas consecutivas, afectando de forma significativa la vida diaria.',
        symptoms: {
          title: '¿Qué síntomas puede presentar la depresión?',
          list: [
            'Tristeza profunda o vacío emocional casi todos los días',
            'Pérdida de interés o placer en actividades antes significativas',
            'Fatiga constante o disminución de la energía',
            'Cambios en el apetito o el sueño (insomnio o hipersomnia)',
            'Sentimientos de culpa, inutilidad o desesperanza',
            'Dificultad para concentrarse o tomar decisiones',
            'Pensamientos de muerte o ideación suicida'
          ],
          note: 'La depresión tiene causas múltiples (biológicas, psicológicas y sociales) y requiere tratamiento profesional especializado.'
        },
        helpSection: {
          title: '¿Por qué es importante pedir ayuda?',
          description: 'La depresión tiene causas múltiples (biológicas, psicológicas y sociales) y requiere tratamiento profesional especializado.'
        }
      }
    },
    {
      id: 'duelos',
      title: 'Duelos por pérdida, ruptura, migración o cambio',
      content: {
        title: 'Procesos de Duelo',
        description: 'El duelo es un proceso natural de adaptación ante las pérdidas significativas en nuestra vida. No solo incluye la muerte de seres queridos, sino también rupturas de pareja, cambios de país, pérdida del trabajo, cambios en la salud, entre otros.',
        symptoms: {
          title: 'Tipos de duelo que acompaño:',
          list: [
            'Duelo por muerte de ser querido',
            'Duelo por ruptura de pareja o divorcio',
            'Duelo migratorio (mudanza a otro país o ciudad)',
            'Duelo por pérdida de empleo o cambios laborales',
            'Duelo por cambios en la salud física',
            'Duelo anticipatorio (cuando sabemos que se acerca una pérdida)'
          ],
          note: 'Cada duelo es único y respeto el ritmo personal de cada proceso, acompañándote hacia una adaptación saludable.'
        }
      }
    },
    {
      id: 'crecimiento',
      title: 'Crecimiento personal',
      subtitle: '(Baja autoestima, inseguridad, perdón, propósito de vida, toma de decisiones, superación de traumas, etc)',
      content: {
        title: 'Desarrollo Personal y Autoconocimiento',
        description: 'El crecimiento personal es un viaje hacia el autoconocimiento, la aceptación y la construcción de una vida más auténtica y plena. Te acompaño en la exploración de tus valores, fortalezas y en el desarrollo de herramientas para una vida más satisfactoria.',
        symptoms: {
          title: 'Áreas que trabajamos:',
          list: [
            'Fortalecimiento de la autoestima y confianza personal',
            'Manejo de la inseguridad y autovaloración',
            'Procesos de perdón (hacia otros y hacia uno mismo)',
            'Clarificación del propósito de vida y valores personales',
            'Desarrollo de habilidades para la toma de decisiones',
            'Superación de traumas y experiencias dolorosas del pasado',
            'Establecimiento de límites saludables',
            'Construcción de hábitos que apoyen tu bienestar'
          ],
          note: 'El crecimiento personal es un proceso gradual que requiere paciencia y autocompasión. Juntos creamos un espacio seguro para tu transformación.'
        }
      }
    }
  ];

  const specialties = [
    {
      title: 'Enfoque Integrativo Personalizado',
      description: 'Adapto mi enfoque terapéutico a tus necesidades específicas, utilizando herramientas de ACT, mindfulness y terapias de tercera generación.',
      icon: Brain,
      color: 'text-steel-blue',
      bgGradient: 'from-steel-blue/20 to-steel-blue/5',
    },
    {
      title: 'Espacio Seguro y Libre de Juicios',
      description: 'Creo un ambiente confidencial y empático donde puedes expresarte con total libertad y autenticidad.',
      icon: Shield,
      color: 'text-terracota',
      bgGradient: 'from-terracota/20 to-terracota/5',
    },
    {
      title: 'Herramientas Prácticas para la Vida Diaria',
      description: 'Te proporciono estrategias concretas que puedes aplicar en tu día a día para gestionar emociones y situaciones difíciles.',
      icon: Lightbulb,
      color: 'text-sage',
      bgGradient: 'from-sage/20 to-sage/5',
    }
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
                  variant="default" 
                  className="bg-gradient-primary w-full"
                >
                  <User size={16} className="mr-2" />
                  Terapia Individual
                </Button>
                <Button 
                  variant="outline" 
                  className="border-steel-blue text-steel-blue hover:bg-steel-blue hover:text-white w-full"
                  onClick={() => handleNavigation('/couples-therapy')}
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
            <User className="w-5 h-5 text-sage-dark" />
            <span className="text-sage-dark font-medium">Terapia Individual</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Sanar, comunicar, conectar
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            <strong className="text-terracota">Porque el vínculo más importante es contigo mismo.</strong>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-gradient-primary shadow-hover hover:shadow-glow">
              <Calendar className="w-5 h-5 mr-2" />
              Agendar Sesión
            </Button>
            <Button variant="outline" size="lg" className="border-sage text-sage hover:bg-sage hover:text-white">
              <MessageCircle className="w-5 h-5 mr-2" />
              Consulta Inicial
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Mi Enfoque */}
      <section className="py-16 px-6 bg-white/50">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="container mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-sage-dark">
              Mi Enfoque Terapéutico
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Trabajo desde un enfoque integrativo, adaptándome a tus necesidades específicas
              con herramientas basadas en evidencia científica.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {specialties.map((specialty, index) => (
              <motion.div
                key={specialty.title}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <Card className={`h-full overflow-hidden shadow-elegant hover:shadow-hover transition-all duration-500 bg-gradient-to-br ${specialty.bgGradient}`}>
                  <CardHeader className="pb-4">
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
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Motivos de Consulta Frecuentes */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-sage-dark">
              Motivos de Consulta Frecuentes
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Estos son algunos de los temas más comunes que trabajamos en terapia individual
            </p>
          </motion.div>
          <div className="max-w-4xl mx-auto space-y-4">
            <Accordion type="single" collapsible className="space-y-4">
              {consultationReasons.map((reason) => (
                <AccordionItem key={reason.id} value={reason.id} className="border border-sage/20 rounded-lg px-6">
                  <AccordionTrigger className="text-left text-sage-dark hover:text-sage font-semibold">
                    {reason.title}
                    {reason.subtitle && <span className="text-sm text-muted-foreground ml-2">{reason.subtitle}</span>}
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4 pb-6">
                    <div>
                      <h4 className="text-lg font-semibold text-sage-dark mb-3">
                        {reason.content.title}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {reason.content.description}
                      </p>
                    </div>
                    {reason.content.symptoms && (
                      <div>
                        <h5 className="text-md font-semibold text-sage-dark mb-3">
                          {reason.content.symptoms.title}
                        </h5>
                        <ul className="space-y-2 mb-4">
                          {reason.content.symptoms.list.map((symptom, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <div className="w-2 h-2 bg-terracota rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-muted-foreground">{symptom}</span>
                            </li>
                          ))}
                        </ul>
                        {reason.content.symptoms.note && (
                          <div className="bg-steel-blue/10 p-4 rounded-lg border border-steel-blue/20">
                            <p className="text-steel-blue text-sm font-medium">
                              <strong>Nota:</strong> {reason.content.symptoms.note}
                            </p>
                          </div>
                        )}
                      </div>
                    )}
                    {reason.content.helpSection && (
                      <div className="bg-terracota/10 p-4 rounded-lg border border-terracota/20">
                        <h5 className="text-md font-semibold text-terracota mb-2">
                          {reason.content.helpSection.title}
                        </h5>
                        <p className="text-terracota text-sm">
                          {reason.content.helpSection.description}
                        </p>
                      </div>
                    )}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold mb-6 text-sage-dark">
              ¿Listo para comenzar tu proceso de crecimiento personal?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Te acompaño en un espacio seguro y profesional hacia tu bienestar emocional.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary shadow-hover hover:shadow-glow">
                <Calendar className="w-5 h-5 mr-2" />
                Agendar Primera Sesión
              </Button>
              <Button variant="outline" size="lg" className="border-sage text-sage hover:bg-sage hover:text-white">
                Hacer una Consulta
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