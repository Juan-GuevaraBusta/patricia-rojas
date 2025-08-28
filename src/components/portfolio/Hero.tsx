import { motion } from 'framer-motion';
import { ArrowDown, Calendar, Phone, Mail, User, Heart, Target, Award, MapPin, Clock, Users, Brain, Shield, Users2, User2, ArrowRight, Instagram, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Link } from 'react-router-dom';
import { containerVariants, itemVariants } from '@/utils/animations';

const Hero = () => {
  const services = [
    {
      title: "Terapia individual",
      description: "Te brindo un espacio para conocerte, comprender tus emociones y aprender a observar tus pensamientos sin quedarte atrapado en ellos, para que puedas vivir en coherencia con tus valores y construir una vida con sentido.",
      frequentReasons: [
        'Ansiedad',
        'Depresión',
        'Duelos por pérdida, ruptura, migración o cambio',
        'Crecimiento personal'
      ],
      image: "/images/individual-therapy-page.jpg", // Ruta de la imagen
      link: "/individual-therapy"
    },
    {
      title: "Terapia de pareja",
      description: "La terapia de pareja es un espacio para mejorar la comunicación, resolver conflictos y fortalecer el vínculo, no solo en momentos de crisis. También es ideal para novios y parejas que desean prepararse para el matrimonio o la convivencia, comenzando con claridad sobre las claves que les ayudarán a construir una relación estable, sana y feliz.",
      frequentReasons: [
        'Conflictos que no se resuelven',
        'Distanciamiento o desconexión emocional',
        'Problemas de comunicación',
        'Crisis por Infidelidad',
        'Fortalecimiento y mejoramiento de la relación'
      ],
      image: "/images/couples-therapy-page.jpg", // Ruta de la imagen
      link: "/couples-therapy"
    }
  ];

  // Datos estructurados para los desplegables de terapia de pareja
  const couplesTherapyReasons = [
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

  // Datos estructurados para los desplegables de terapia individual
  const individualTherapyReasons = [
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

  const stats = [
    { number: '25+', label: 'Años de experiencia', icon: Award },
    { number: '15+', label: 'Años en psicoterapia', icon: Target },
    { number: '', label: 'Acompañamiento profesional y humano', icon: MapPin },
    { number: '', label: 'Modalidad Online y Presencial', icon: Clock },
  ];

  const contactInfo = [
    {
      icon: Phone,
      title: 'WhatsApp',
      value: '+57 311 836 1642',
      link: 'https://wa.me/573118361642'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'patriciarojaspsicologia@gmail.com',
      link: 'mailto:patriciarojaspsicologia@gmail.com'
    },
    {
      icon: MapPin,
      title: 'Ubicación',
      value: 'Cali, Colombia',
      link: '#'
    }
  ];

  const socialLinks = [
    { 
      icon: Instagram, 
      href: 'https://instagram.com/patriciarojaspsicologa', 
      label: 'Instagram',
      color: 'text-magenta',
      username: '@patriciarojaspsicologa'
    },
    { 
      icon: () => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-4.59v13.59a2.83 2.83 0 0 1-5.66 0 2.83 2.83 0 0 1 2.83-2.83c.28 0 .56.04.83.1V9.76a6.54 6.54 0 0 0-1.83-.25 6.59 6.59 0 0 0-6.59 6.59 6.59 6.59 0 0 0 13.18 0V9.69a8.48 8.48 0 0 0 5.77 2.26V8.35a4.79 4.79 0 0 1-0.17-1.66z"/>
        </svg>
      ), 
      href: 'https://tiktok.com/@patriciarojaspsicologa', 
      label: 'TikTok',
      color: 'text-steel-blue',
      username: '@patriciarojaspsicologa'
    },
    { 
      icon: MessageCircle, 
      href: 'https://wa.me/573118361642', 
      label: 'WhatsApp',
      color: 'text-[#fb7185]',
      username: '+57 311 836 1642'
    },
  ];



  return (
    <div className="min-h-screen">
      {/* Hero Principal con Fondo Limpio */}
      <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden py-20 bg-white">
        


        {/* Contenido Principal - Layout de dos columnas */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 w-full"
        >
          <div className="grid lg:grid-cols-2 items-center min-h-screen">
            {/* Columna Izquierda - Video */}
            <motion.div
              variants={itemVariants}
              className="order-2 lg:order-1 h-[50vh] lg:h-screen"
            >
              <div className="relative h-full w-full">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover opacity-75"
                >
                  <source src="/videos/video.mp4" type="video/mp4" />
                  Tu navegador no soporta la reproducción de video.
                </video>
              </div>
            </motion.div>

            {/* Columna Derecha - Contenido */}
            <motion.div
              variants={itemVariants}
              className="order-1 lg:order-2 text-center lg:text-left h-[50vh] lg:h-screen flex flex-col justify-center px-6 lg:px-12"
            >
              <motion.div
                variants={itemVariants}
                className="space-y-6 mb-4 md:mb-6"
              >
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold relative font-marcellus">
                  <span className="block font-bold" style={{ color: '#3e554d' }}>
                    Patricia Rojas
                  </span>

                </h1>
                <h2 className="text-lg md:text-xl lg:text-2xl font-light font-raleway" style={{ color: '#3e554d' }}>
                  Psicóloga Master Especializada en Terapia Individual y de Parejas
                </h2>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="space-y-6 mb-8 md:mb-12"
              >
                <p className="text-base md:text-lg lg:text-xl font-semibold leading-relaxed font-raleway" style={{ color: '#3e554d' }}>
                  Te ayudo a fortalecer tus relaciones y conectar contigo mismo.
                </p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex flex-col md:flex-row gap-6 md:gap-12 justify-center items-center lg:items-center"
              >
                <Button 
                  size="lg" 
                  className="shadow-hover hover:shadow-glow px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-medium rounded-full min-w-[200px] bg-steel-blue hover:bg-steel-blue/90 text-white"
                  asChild
                >
                  <Link to="/individual-therapy" className="flex items-center gap-2">
                    <User2 className="w-5 h-5" stroke="#fb7185" />
                    Terapia Individual
                  </Link>
                </Button>
                <Button 
                  size="lg" 
                  className="shadow-hover hover:shadow-glow px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-medium rounded-full min-w-[200px] bg-steel-blue hover:bg-steel-blue/90 text-white"
                  asChild
                >
                  <Link to="/couples-therapy" className="flex items-center gap-2">
                    <Users2 className="w-5 h-5" stroke="#fb7185" />
                    Terapia de Pareja
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Sección de Servicios */}
      <section className="py-20 bg-white">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="container mx-auto px-12 md:px-16"
        >


          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                className="flex flex-col space-y-6"
              >


                {/* Título */}
                <div className="text-center">
                  <Link to={service.link} className="block">
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 font-marcellus hover:text-sage transition-colors duration-300 cursor-pointer">
                      {service.title}
                    </h3>
                  </Link>
                </div>

                {/* Imagen */}
                <div className="relative h-48 md:h-64 overflow-hidden rounded-lg shadow-elegant">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback si la imagen no carga - mostrar placeholder
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
                      <div className="text-4xl mb-2">📷</div>
                      <p className="text-sm">Imagen no disponible</p>
                    </div>
                  </div>
                </div>
                
                {/* Información */}
                <div className="space-y-4">
                  <p className="leading-relaxed text-sm md:text-base font-raleway text-center" style={{ color: '#3e554d' }}>
                    {service.description}
                  </p>
                  
                  {/* Botón Más información */}
                  <div className={`text-center ${service.title === "Terapia de pareja" ? "pt-7" : ""}`}>
                    <Link to={service.link}>
                      <Button className="bg-steel-blue hover:bg-steel-blue/90 text-white px-6 py-2 rounded-lg font-medium shadow-hover hover:shadow-glow">
                        <ArrowRight className="w-4 h-4 mr-2" style={{ color: '#fb7185' }} />
                        Más información
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Botón Agenda tu cita centrado */}
          <motion.div variants={itemVariants} className="text-center mt-12">
            <a href="https://wa.me/573118361642" target="_blank" rel="noopener noreferrer">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-steel-blue hover:bg-steel-blue/90 text-white px-6 py-3 rounded-lg font-medium shadow-hover hover:shadow-glow transition-all duration-300 text-base"
              >
                <Calendar className="w-4 h-4 mr-2 inline" style={{ color: '#fb7185' }} />
                Agenda tu cita
              </motion.button>
            </a>
          </motion.div>
        </motion.div>
      </section>



      {/* Sección de Modalidades */}
      <section className="py-20 bg-[#4a6741]/10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="container mx-auto px-6"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <Badge className="mb-4 px-4 py-2 bg-steel-blue text-white border-steel-blue">
              <MapPin className="w-4 h-4 mr-2" style={{ color: '#fb7185' }} />
              Modalidades
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-marcellus" style={{ color: '#3e554d' }}>
              ¿Cómo prefieres tu terapia?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8">
            {/* Modalidad Virtual */}
            <motion.div
              variants={itemVariants}
              className="bg-white p-8 rounded-lg shadow-elegant border border-[#4a6741]/20 text-center"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-[#4a6741]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#fb7185' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2 font-marcellus" style={{ color: '#3e554d' }}>ONLINE</h3>
              </div>
              <p className="leading-relaxed text-base font-raleway" style={{ color: '#3e554d' }}>
                Accede a tus sesiones desde cualquier lugar: si vives fuera de la ciudad, estás de viaje o prefieres no desplazarte. Nos conectamos a través de plataformas seguras de videoconferencia.
              </p>
            </motion.div>

            {/* Modalidad Presencial */}
            <motion.div
              variants={itemVariants}
              className="bg-white p-8 rounded-lg shadow-elegant border border-[#4a6741]/20 text-center"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-[#4a6741]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#fb7185' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2 font-marcellus" style={{ color: '#3e554d' }}>PRESENCIAL</h3>
              </div>
              <p className="leading-relaxed text-base font-raleway" style={{ color: '#3e554d' }}>
                Puedes asistir de manera presencial en un espacio cómodo y privado, ubicado en Yoffice, Torre B de las Torres Pasoancho, Centro Comercial Unicentro Cali, piso 6.
              </p>
            </motion.div>
          </div>

          {/* Botón Agenda tu cita */}
          <motion.div variants={itemVariants} className="text-center">
            <a href="https://wa.me/573118361642" target="_blank" rel="noopener noreferrer">
              <Button className="bg-steel-blue hover:bg-steel-blue/90 text-white px-8 py-3 rounded-lg font-medium">
                <Calendar className="w-4 h-4 mr-2" style={{ color: '#fb7185' }} />
                Agenda tu cita
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </section>



      {/* Sección de Contacto */}
      <section className="py-20 bg-[#4a6741]/10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="container mx-auto px-6"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <Badge className="mb-4 px-4 py-2 bg-steel-blue text-white border-steel-blue">
              <Calendar className="w-4 h-4 mr-2" style={{ color: '#fb7185' }} />
              Contacto
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-marcellus" style={{ color: '#3e554d' }}>
              Comienza tu proceso hoy
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: '#3e554d' }}>
              El primer paso hacia el bienestar emocional es decidir buscar ayuda. 
              Estoy aquí para acompañarte en este camino.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            {contactInfo.map((contact, index) => (
              <motion.div
                key={contact.title}
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <Card className="h-40 shadow-elegant hover:shadow-hover transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="inline-flex p-3 rounded-full bg-steel-blue/10 mb-4 mx-auto"
                    >
                      <contact.icon size={24} style={{ color: '#fb7185' }} />
                    </motion.div>
                    <h4 className="font-semibold text-foreground mb-2">
                      {contact.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {contact.value}
                    </p>
                  </CardContent>
                </Card>
                {contact.link.startsWith('http') || contact.link.startsWith('mailto:') ? (
                  <div className="text-center mt-3">
                    <a 
                      href={contact.link} 
                      target={contact.link.startsWith('http') ? '_blank' : '_self'}
                      rel={contact.link.startsWith('http') ? 'noopener noreferrer' : ''}
                    >
                      <Button variant="outline" size="sm">
                        Contactar
                      </Button>
                    </a>
                  </div>
                ) : null}
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="text-center">
            <div className="flex justify-center">
              <a href="https://wa.me/573118361642" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-steel-blue hover:bg-steel-blue/90 text-white shadow-hover hover:shadow-glow">
                  <Calendar className="w-5 h-5 mr-2" style={{ color: '#fb7185' }} />
                  Agenda tu cita
                </Button>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Sección de Redes Sociales */}
      <section className="py-20 bg-[#4a6741]/10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="container mx-auto px-6"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <Badge className="mb-4 px-4 py-2 bg-steel-blue text-white border-steel-blue">
              <Heart className="w-4 h-4 mr-2" style={{ color: '#fb7185' }} />
              Redes Sociales
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-marcellus" style={{ color: '#3e554d' }}>
              Sígueme en mis redes sociales
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: '#3e554d' }}>
              Mantente conectado conmigo y accede a contenido exclusivo sobre bienestar emocional y relaciones saludables.
            </p>
          </motion.div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8 max-w-4xl mx-auto">
            {socialLinks.map((social, index) => (
              <motion.div
                key={social.label}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="w-full md:w-auto"
              >
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <Card className="h-40 w-full md:w-60 shadow-elegant hover:shadow-hover transition-all duration-300">
                    <CardContent className="p-6 text-center h-full flex flex-col justify-center">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className={`inline-flex p-4 rounded-full bg-steel-blue/10 mb-4 mx-auto ${social.color}`}
                      >
                        <social.icon size={28} />
                      </motion.div>
                      <h4 className="font-semibold text-foreground mb-2 text-sm">
                        {social.label}
                      </h4>
                      <p className="text-xs text-muted-foreground break-words px-2">
                        {social.username}
                      </p>
                    </CardContent>
                  </Card>
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Sección de Preguntas Frecuentes */}
      <section className="py-20 bg-[#4a6741]/10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="container mx-auto px-6"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <Badge className="mb-4 px-4 py-2 bg-steel-blue text-white border-steel-blue">
              <MessageCircle className="w-4 h-4 mr-2" style={{ color: '#fb7185' }} />
              Preguntas Frecuentes
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-marcellus" style={{ color: '#3e554d' }}>
              ¿Tienes dudas sobre la terapia?
            </h2>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: '#3e554d' }}>
              Encuentra respuestas a las preguntas más comunes sobre mis servicios, 
              metodología y proceso terapéutico.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="text-center">
            <Button 
              size="lg" 
              className="shadow-hover hover:shadow-glow px-8 py-4 text-lg font-medium rounded-full min-w-[250px] bg-steel-blue hover:bg-steel-blue/90 text-white"
              asChild
            >
              <Link to="/contact#contacto" className="flex items-center gap-2">
                <ArrowRight className="w-5 h-5" style={{ color: '#fb7185' }} />
                Ver Preguntas Frecuentes
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Hero;