import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, MessageCircle, Lightbulb, Shield, User, Calendar, Mail } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { containerVariants, itemVariants } from '@/utils/animations';

const IndividualTherapy = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

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
          note: '¿Por qué es importante pedir ayuda? La depresión tiene causas múltiples (biológicas, psicológicas y sociales) y requiere tratamiento profesional especializado.'
        }
      }
    },
    {
      id: 'duelos',
      title: 'Duelos por pérdida, ruptura, migración o cambio',
      content: {
        title: '¿Qué es el duelo?',
        description: 'El duelo es un proceso natural ante cualquier pérdida significativa: muerte de un ser querido, ruptura, migración, enfermedad, pérdida laboral o cambios vitales importantes. Cada persona lo vive de manera única y a su propio ritmo. Cada persona lo vive a su manera. Para algunos, es transitorio; para otros, puede ser un proceso profundo que necesita acompañamiento profesional.',
        manifestations: {
          title: '¿Cómo se manifiesta?',
          description: 'El duelo puede presentarse de distintas formas:',
          categories: [
            {
              type: 'Emocionales',
              symptoms: ['tristeza', 'ira', 'ansiedad', 'culpa', 'alivio', 'sensación de vacío']
            },
            {
              type: 'Físicas',
              symptoms: ['fatiga', 'opresión en el pecho', 'insomnio', 'cambios en el apetito', 'malestares físicos']
            },
            {
              type: 'Cognitivas',
              symptoms: ['confusión', 'pensamientos repetitivos', 'despersonalización', 'dificultad para concentrarse']
            },
            {
              type: 'Conductuales',
              symptoms: ['llanto frecuente', 'aislamiento', 'cambios en rutinas', 'evitación o búsqueda constante de recuerdos']
            }
          ]
        },
        whenToSeekHelp: {
          title: '¿Cuándo buscar ayuda?',
          list: [
            'El malestar persiste o se intensifica después de varios meses',
            'No puedes retomar actividades cotidianas',
            'Aparecen síntomas depresivos o pensamientos suicidas',
            'Te sientes "atrapado/a" en emociones intensas',
            'La pérdida afecta gravemente tu salud o funcionamiento'
          ]
        },
        therapyBenefits: {
          title: '¿Qué puede aportar la psicoterapia?',
          description: 'La terapia no busca acelerar el proceso, sino acompañarte con respeto y compasión. Puede ayudarte a:',
          list: [
            'Validar y expresar lo que sientes, sin juicios',
            'Procesar la pérdida de forma gradual, respetando tu ritmo',
            'Reconstruir significado y honrar lo perdido',
            'Fortalecer tu red de apoyo y tu capacidad de adaptación',
            'Prevenir complicaciones como depresión o duelo patológico'
          ]
        },
        stages: {
          title: 'Etapas del duelo: ¿todas las personas las viven igual?',
          description: 'Una de las teorías más conocidas es la de Elisabeth Kübler-Ross, que identifica cinco etapas emocionales comunes tras una pérdida y no todas las personas la viven de igual manera.',
          note: 'El duelo es un proceso natural que merece respeto y tiempo. Si necesitas apoyo, buscar ayuda profesional es una decisión valiente y saludable.'
        }
      }
    },
    {
      id: 'crecimiento',
      title: 'Crecimiento personal',
      subtitle: '(Baja autoestima, inseguridad, perdón, propósito de vida, toma de decisiones, superación de traumas, etc)',
      content: {
        title: '¿Qué es el crecimiento personal?',
        description: 'Es un proceso consciente de desarrollo interno que te permite conocerte mejor, fortalecer tu bienestar emocional y vivir de forma más auténtica. No se trata de cambiar tu personalidad, sino de reconectar con tus recursos internos y valores esenciales.',
        importance: {
          title: '¿Por qué es importante trabajar en tu crecimiento personal?',
          description: 'El crecimiento personal es un proceso profundo de autoconocimiento y transformación que impacta todas las áreas de tu vida. Invertir en ti mismo te permite:',
          benefits: [
            'Fortalecer tu autoestima: aprender a reconocerte, valorarte y confiar en tus propias capacidades.',
            'Mejorar tus relaciones: establecer vínculos más sanos, poner límites y comunicarte de forma auténtica.',
            'Tomar mejores decisiones: actuar desde la claridad, evitando que el miedo o la duda te frenen.',
            'Reducir el malestar emocional: manejar el estrés, la ansiedad y los pensamientos difíciles con mayor equilibrio.',
            'Aumentar tu resiliencia: adaptarte a los cambios y superar las adversidades con mayor fortaleza.',
            'Conectar con tu propósito de vida: descubrir lo que realmente importa para vivir de acuerdo a tus valores y construir una vida más plena y significativa.'
          ]
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
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="container mx-auto"
        >
          <div className="grid lg:grid-cols-2 items-center gap-12">
            {/* Columna Izquierda - Imagen */}
            <motion.div
              variants={itemVariants}
              className="order-2 lg:order-1"
            >
              <div className="relative h-64 md:h-80 overflow-hidden rounded-lg shadow-elegant">
                <img
                  src="/images/individual-therapy-page.jpg"
                  alt="Terapia Individual"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    target.style.display = 'none';
                    const placeholder = target.nextElementSibling as HTMLElement;
                    if (placeholder) {
                      placeholder.style.display = 'flex';
                    }
                  }}
                />
                {/* Placeholder si no hay imagen */}
                <div 
                  className="w-full h-full bg-gradient-to-br from-sage-light to-steel-blue/20 flex items-center justify-center"
                  style={{ display: 'none' }}
                >
                  <div className="text-center text-sage-dark">
                    <div className="text-4xl mb-2">🧠</div>
                    <p className="text-sm">Imagen no disponible</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Columna Derecha - Contenido */}
            <motion.div
              variants={itemVariants}
              className="order-1 lg:order-2 text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 bg-sage/10 px-4 py-2 rounded-full mb-6">
                <User className="w-5 h-5" style={{ color: '#3e554d' }} />
                <span className="font-medium" style={{ color: '#3e554d' }}>Terapia Individual</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 font-marcellus" style={{ color: '#3e554d' }}>
                Sanar, comunicar, conectar
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Te brindo un espacio para conocerte, comprender tus emociones y aprender a observar tus pensamientos sin quedarte atrapado en ellos, para que puedas vivir en coherencia con tus valores y construir una vida con sentido.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Motivos de Consulta Frecuentes */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-marcellus" style={{ color: '#3e554d' }}>
              Motivos de Consulta Frecuentes
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-raleway">
              Estos son algunos de los temas más comunes que trabajamos en terapia individual
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto space-y-4">
            <Accordion type="single" collapsible className="space-y-4">
              {consultationReasons.map((reason) => (
                <AccordionItem key={reason.id} value={reason.id} className="border border-sage/20 rounded-lg px-6">
                  <AccordionTrigger className="text-left text-sage-dark hover:text-sage font-semibold cursor-pointer">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-terracota rounded-full flex-shrink-0" />
                      <span>
                        {reason.title}
                        {reason.subtitle && <span className="text-sm text-muted-foreground font-normal ml-2">{reason.subtitle}</span>}
                      </span>
                    </div>
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

                    {/* Manifestaciones del duelo */}
                    {reason.content.manifestations && (
                      <div>
                        <h5 className="text-md font-semibold text-sage-dark mb-3">
                          {reason.content.manifestations.title}
                        </h5>
                        <p className="text-muted-foreground mb-4">{reason.content.manifestations.description}</p>
                        <div className="grid md:grid-cols-2 gap-4">
                          {reason.content.manifestations.categories.map((category, idx) => (
                            <div key={idx} className="bg-card p-4 rounded-lg shadow-hover border-l-4 border-terracota">
                              <h6 className="font-semibold text-terracota mb-2">{category.type}:</h6>
                              <div className="text-sm text-muted-foreground">
                                {category.symptoms.join(', ')}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Cuándo buscar ayuda */}
                    {reason.content.whenToSeekHelp && (
                      <div>
                        <h5 className="text-md font-semibold text-sage-dark mb-3">
                          {reason.content.whenToSeekHelp.title}
                        </h5>
                        <ul className="space-y-2 mb-4">
                          {reason.content.whenToSeekHelp.list.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <div className="w-2 h-2 bg-terracota rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-muted-foreground">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Beneficios de la terapia */}
                    {reason.content.therapyBenefits && (
                      <div>
                        <h5 className="text-md font-semibold text-sage-dark mb-3">
                          {reason.content.therapyBenefits.title}
                        </h5>
                        <p className="text-muted-foreground mb-4">{reason.content.therapyBenefits.description}</p>
                        <ul className="space-y-2 mb-4">
                          {reason.content.therapyBenefits.list.map((benefit, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <div className="w-2 h-2 bg-terracota rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-muted-foreground">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Etapas del duelo */}
                    {reason.content.stages && (
                      <div>
                        <h5 className="text-md font-semibold text-sage-dark mb-3">
                          {reason.content.stages.title}
                        </h5>
                        <p className="text-muted-foreground mb-4">{reason.content.stages.description}</p>
                        <div className="bg-steel-blue/10 p-4 rounded-lg border border-steel-blue/20">
                          <p className="text-steel-blue text-sm font-medium">
                            <strong>Nota:</strong> {reason.content.stages.note}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Importancia del crecimiento personal */}
                    {reason.content.importance && (
                      <div>
                        <h5 className="text-md font-semibold text-sage-dark mb-3">
                          {reason.content.importance.title}
                        </h5>
                        <p className="text-muted-foreground mb-4">{reason.content.importance.description}</p>
                        <ul className="space-y-2 mb-4">
                          {reason.content.importance.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <div className="w-2 h-2 bg-terracota rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-muted-foreground">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Síntomas regulares (para ansiedad, depresión, crecimiento) */}
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
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-marcellus" style={{ color: '#3e554d' }}>
              Mi Enfoque Terapéutico
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-raleway">
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

      {/* CTA Final */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold mb-6 font-marcellus" style={{ color: '#3e554d' }}>
              ¿Listo para comenzar tu proceso de crecimiento personal?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 font-raleway">
              Te acompaño en un espacio seguro y profesional hacia tu bienestar emocional.
            </p>

            <div className="flex justify-center">
              <a href="https://wa.me/573118361642" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-gradient-primary shadow-hover hover:shadow-glow">
                  <Calendar className="w-5 h-5 mr-2" />
                  Agenda tu cita
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Simple */}
      <footer className="py-8 px-6 bg-sage-dark text-white">
        <div className="container mx-auto text-center">
          <p className="mb-4">© 2025 Patricia Rojas Psicóloga - Terapia Individual y de Parejas. Acompañándote en tu crecimiento.</p>
          <div className="flex justify-center space-x-6">
            <Button variant="ghost" onClick={() => window.location.href = '/'} className="text-white hover:text-sage-light">
              Inicio
            </Button>
            <Button variant="ghost" onClick={() => window.location.href = '/couples-therapy'} className="text-white hover:text-sage-light">
              Terapia de Pareja
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default IndividualTherapy;