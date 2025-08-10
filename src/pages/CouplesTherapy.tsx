import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart, MessageCircle, Users, Calendar, Clock, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { containerVariants, itemVariants } from '@/utils/animations';

const CouplesTherapy = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const consultationReasons = [
    {
      id: 'conflictos',
      title: 'Conflictos que no se resuelven',
      content: `¿Sienten que tienen las mismas discusiones una y otra vez, sin llegar a ningún acuerdo?

Según el Dr. John Gottman, reconocido investigador en terapia de pareja, el 69% de los conflictos son problemas perpetuos.

¿Cómo puede ayudarte la terapia?

• Identificar patrones destructivos de discusión
• Desarrollar estrategias de comunicación efectivas
• Distinguir conflictos solucionables de perpetuos
• Construir acuerdos realistas frente a las diferencias que no pueden cambiar

Reflexión: "La próxima vez que repitan un conflicto, pregúntate: ¿Estoy intentando comprender o solo demostrar que tengo razón?"`
    },
    {
      id: 'distanciamiento',
      title: 'Distanciamiento o desconexión emocional',
      content: `La conexión emocional es el núcleo vital de toda relación de pareja: esa experiencia de ser visto, comprendido, respetado y valorado profundamente por el otro. Su ausencia genera vacío y soledad, incluso estando juntos.

Señales de desconexión emocional:

• Sensación creciente de que ya no se conocen
• Conversaciones limitadas a temas funcionales (logística, responsabilidades)
• Interacciones automáticas y respuestas frías
• Pérdida progresiva de intimidad emocional y sexual
• Disminución del interés genuino por la experiencia del otro
• Sensación de vivir como "compañeros de casa" más que como pareja

¿Cómo puedo ayudarte en terapia?

Te acompaño en restaurar el balance positivo de tu relación mediante técnicas específicas de reconexión emocional, herramientas de comunicación efectiva, rituales de conexión y estrategias para el fortalecimiento de la intimidad física y emocional.

El trabajo terapéutico se enfoca en identificar y potenciar los recursos que ya poseen como pareja, mientras desarrollan nuevas habilidades que les permitan construir una relación más sólida y satisfactoria.`
    },
    {
      id: 'comunicacion',
      title: 'Problemas de comunicación',
      content: `¿Sientes que no te escucha o que todo termina en discusión?

Una comunicación deficiente puede convertirse en un ciclo destructivo: discusiones que no llegan a nada, sensación persistente de no ser comprendido y un desgaste emocional que debilita, poco a poco, los cimientos de la relación.

El problema no siempre está en lo que se dice, sino en cómo se dice. Muchas veces, detrás del silencio, la crítica o la evasión, hay emociones profundas no expresadas como el miedo, la frustración o la tristeza.

¿Cómo puede ayudarte la terapia de pareja?

Te enseño a transformar los patrones destructivos de comunicación en nuevas habilidades que priorizan la validación, la escucha activa y los acuerdos basados en el respeto mutuo. Porque la comprensión es más poderosa que tener la razón.`
    },
    {
      id: 'infidelidad',
      title: 'Crisis por Infidelidad',
      content: `La infidelidad es una traición a la confianza y al compromiso de la relación que no se limita únicamente al aspecto sexual, sino que incluye también la traición emocional. Contrario a lo que muchos creen, surge más por desconexión emocional y oportunidades que por impulsos puramente sexuales, y generalmente es el resultado de factores acumulativos más que de un evento aislado.

¿Se puede reconstruir la confianza después de una infidelidad?

Sí es posible, aunque requiere un proceso profundo que involucra tres elementos esenciales: arrepentimiento genuino, disposición al perdón y un compromiso real con la reparación del daño causado.

¿Cómo puede ayudar la terapia?

• Dar voz a los sentimientos y necesidades de ambos miembros de la pareja, creando un espacio seguro donde puedan expresarse con honestidad mientras se fomenta una actitud empática mutua.

• Facilitar la expresión del remordimiento genuino, promoviendo la transparencia total y la honestidad como pilares fundamentales para la reconstrucción del vínculo.

• Brindar apoyo terapéutico para los síntomas del estrés postraumático que frecuentemente experimenta la persona traicionada, validando su dolor y acompañándola en su proceso de sanación.

• Facilitar la reconstrucción gradual de la confianza a través de un ambiente terapéutico seguro, comunicación empática y la construcción de un nuevo significado compartido sobre lo ocurrido, ayudando a identificar las vulnerabilidades de la relación para transformarlas en fortalezas.`
    },
    {
      id: 'fortalecimiento',
      title: 'Fortalecimiento y mejoramiento de la relación',
      content: `No es necesario esperar una crisis para invertir en tu relación. La terapia preventiva fortalece vínculos sanos y desarrolla herramientas para navegar futuros desafíos juntos.

¿Cuándo es apropiada?

• Deseo de profundizar la conexión emocional existente
• Interés en desarrollar mejores habilidades comunicacionales
• Necesidad de establecer rituales de conexión más efectivos
• Preparación para transiciones vitales (cambios laborales, mudanzas, etc.)
• Fortalecimiento de la intimidad emocional y sexual`
    }
  ];

  const sessionFormat = {
    duration: '50 minutos',
    individualSessions: 'Durante el proceso terapéutico se incluirán sesiones individuales para explorar la historia personal de cada miembro de la pareja y comprender cómo estas experiencias influyen en la dinámica relacional actual.',
    safeSpace: 'En cada encuentro se proporciona un espacio seguro donde ambos pueden expresar libremente sus necesidades, relatos y emociones.',
    methodology: 'Las sesiones combinan la escucha empática con psicoeducación especializada y ejercicios prácticos de comunicación que pueden implementar en su vida cotidiana.',
    integration: 'La metodología integra teoría y práctica, permitiendo que las parejas no solo comprendan los conceptos, sino que desarrollen habilidades concretas para fortalecer su relación.',
    modalities: 'presencial y virtual'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sage-light/20 to-cream">
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
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent font-marcellus">
            Fortalece tu Relación
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            En la terapia de parejas los apoyo en la resolución de conflictos, mejorar la comunicación,
            fortalecer conexión emocional y superar una infidelidad.
          </p>

          <div className="flex justify-center mb-12">
            <a href="https://wa.me/573118361642" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-gradient-primary shadow-hover hover:shadow-glow">
                <Calendar className="w-5 h-5 mr-2" />
                                  Agenda tu cita
              </Button>
            </a>
          </div>

          <p className="text-sage-dark font-medium">
            ¿Están enfrentando conflictos, distanciamiento o sienten que algo en la relación ya no fluye como antes?
          </p>
        </motion.div>
      </section>

      {/* Motivos de Consulta Frecuentes */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-sage-dark font-marcellus">
              Motivos de Consulta Más Frecuentes
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-raleway">
              Estos son algunos de los temas más comunes que trabajamos en terapia de pareja
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto space-y-4">
            <Accordion type="single" collapsible className="space-y-4">
              {consultationReasons.map((reason) => (
                <AccordionItem key={reason.id} value={reason.id} className="border border-sage/20 rounded-lg px-6">
                  <AccordionTrigger className="text-left text-sage-dark hover:text-sage font-semibold">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-terracota rounded-full flex-shrink-0" />
                      <span>{reason.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4 pb-6">
                    <div className="text-foreground leading-relaxed whitespace-pre-line font-medium">
                      {reason.content}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Formato de las Sesiones */}
      <section className="py-16 px-6 bg-white/50">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="container mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-sage-dark font-marcellus">
              Formato de las Sesiones
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <Card className="shadow-elegant">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="w-6 h-6 text-terracota" />
                  <div>
                    <h4 className="font-semibold text-sage-dark">Duración</h4>
                    <p className="text-muted-foreground">Cada sesión tiene una duración de {sessionFormat.duration}.</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-card p-6 rounded-lg shadow-hover border-l-4 border-terracota">
                    <h5 className="font-semibold text-sage-dark mb-3 flex items-center gap-2">
                      <Users className="w-5 h-5 text-terracota" />
                      Sesiones Individuales
                    </h5>
                    <p className="text-muted-foreground leading-relaxed">
                      {sessionFormat.individualSessions}
                    </p>
                  </div>

                  <div className="bg-card p-6 rounded-lg shadow-hover border-l-4 border-sage">
                    <h5 className="font-semibold text-sage-dark mb-3 flex items-center gap-2">
                      <Heart className="w-5 h-5 text-sage" />
                      Espacio Seguro
                    </h5>
                    <p className="text-muted-foreground leading-relaxed">
                      {sessionFormat.safeSpace}
                    </p>
                  </div>

                  <div className="bg-card p-6 rounded-lg shadow-hover border-l-4 border-steel-blue">
                    <h5 className="font-semibold text-sage-dark mb-3 flex items-center gap-2">
                      <MessageCircle className="w-5 h-5 text-steel-blue" />
                      Metodología
                    </h5>
                    <p className="text-muted-foreground leading-relaxed mb-3">
                      {sessionFormat.methodology}
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      {sessionFormat.integration}
                    </p>
                  </div>

                  <div className="bg-gradient-secondary p-6 rounded-lg">
                    <h5 className="font-semibold text-sage-dark mb-3 flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-sage-dark" />
                      Modalidades
                    </h5>
                    <p className="text-sage-dark font-medium">
                      Sesiones {sessionFormat.modalities}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </section>

      {/* Método Gottman */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <motion.div variants={itemVariants} className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Método Científico</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-sage-dark font-marcellus">
              Basado en el Método Gottman
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-raleway">
              La terapia de pareja que ofrezco se basa en el Método Gottman, un enfoque respaldado por
              más de 40 años de investigación científica sobre lo que fortalece o debilita una relación.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold mb-6 text-sage-dark font-marcellus">
              ¿Listos para fortalecer su relación?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 font-raleway">
              Te acompaño en un proceso profesional hacia una relación más sólida y conectada.
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
            <Button variant="ghost" onClick={() => window.location.href = '/individual-therapy'} className="text-white hover:text-sage-light">
              Terapia Individual
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CouplesTherapy;