import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Mail, Phone, MapPin, Send, Clock, Video, Calendar, 
  MessageCircle, Instagram, Linkedin, Heart, Shield, 
  CheckCircle, ArrowRight 
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { containerVariants, itemVariants } from '@/utils/animations';

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const contactInfo = [
    {
      icon: Phone,
      title: 'Teléfono / WhatsApp',
      value: '+57 311 557 8592',
      link: 'https://wa.me/573115578592',
      description: 'Respuesta en 24 horas'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'patriciarojaspsicologia@gmail.com',
      link: 'mailto:patriciarojaspsicologia@gmail.com',
      description: 'Consultas y citas'
    },
    {
      icon: MapPin,
      title: 'Ubicación',
      value: 'Carrera 100 #5-168 CC Unicentro',
      link: '#',
      description: 'Cali, Valle del Cauca'
    },
    {
      icon: Clock,
      title: 'Horarios',
      value: 'Lunes a Viernes',
      link: '#',
      description: '8:00 AM - 6:00 PM'
    }
  ];

  const socialLinks = [
    { 
      icon: Instagram, 
      href: 'https://instagram.com/patriciarojaspsicologa', 
      label: 'Instagram',
      color: 'text-magenta'
    },
    { 
      icon: Linkedin, 
      href: '#', 
      label: 'LinkedIn',
      color: 'text-steel-blue'
    },
    { 
      icon: MessageCircle, 
      href: 'https://wa.me/573115578592', 
      label: 'WhatsApp',
      color: 'text-sage'
    },
  ];

  const sessionTypes = [
    {
      title: 'Sesión Presencial',
      icon: MapPin,
      price: 'Consultar',
      duration: '50 minutos',
      description: 'En mi consultorio en Unicentro, ambiente cálido y confidencial',
      features: ['Espacio privado', 'Ambiente controlado', 'Materiales terapéuticos']
    },
    {
      title: 'Sesión Virtual',
      icon: Video,
      price: 'Consultar',
      duration: '50 minutos',
      description: 'Desde la comodidad de tu hogar con la misma calidad profesional',
      features: ['Plataforma segura', 'Flexibilidad de ubicación', 'Misma efectividad']
    },
    {
      title: 'Sesión de Pareja',
      icon: Heart,
      price: 'Consultar',
      duration: '50 minutos',
      description: 'Espacio especializado para trabajar la relación con Método Gottman',
      features: ['Enfoque Gottman', 'Ambas modalidades', 'Proceso estructurado']
    }
  ];

  const faqItems = [
    {
      question: '¿Realizas consultas online?',
      answer: 'Sí, ofrezco sesiones virtuales a través de videollamada con la misma efectividad que las presenciales.'
    },
    {
      question: '¿Cómo funcionan las sesiones online?',
      answer: 'Utilizo aplicaciones seguras para videollamadas (WhatsApp, Zoom o Meet). El pago se realiza previamente a la sesión. Para garantizar la efectividad del proceso terapéutico, es importante mantener las mismas condiciones que en una sesión presencial: vestimenta adecuada, posición sentada cómoda y contacto visual directo con la cámara. Durante la sesión no está permitido comer o hacer alguna otra actividad, para que puedas mantener el enfoque y por respeto del espacio terapéutico.'
    },
    {
      question: '¿Cuánto dura cada sesión?',
      answer: 'Las sesiones tienen una duración de 50 minutos cada una y se recomienda para empezar una sesión por semana. El proceso implica cambiar hábitos y el refuerzo es necesario.'
    },
    {
      question: '¿En qué áreas te especializas?',
      answer: 'Me especializo en terapia de parejas, acompañamiento en procesos de duelo, manejo de ansiedad y depresión, regulación emocional, comunicación efectiva y desarrollo del crecimiento personal.'
    },
    {
      question: '¿Cómo reservo una cita?',
      answer: 'Puedes agendar directamente desde el link en mi biografía o enviarme un DM.'
    },
    {
      question: '¿Cuántas sesiones se necesitan para ver resultados?',
      answer: 'Depende de cada caso, pero generalmente se comienzan a notar cambios en un promedio de 3 a 5 sesiones.'
    },
    {
      question: '¿Trabajas con obra social/seguro médico?',
      answer: 'No, solo particular.'
    },
    {
      question: '¿Qué enfoque terapéutico utilizas?',
      answer: 'Trabajo principalmente desde la Terapia de Aceptación y Compromiso (ACT) y el enfoque Cognitivo Conductual (TCC). Para el acompañamiento en terapia de parejas, me baso específicamente en la metodología Gottman, reconocida por su eficacia en la mejora de la comunicación y fortalecimiento del vínculo.'
    },
    {
      question: '¿Atiendes niños?',
      answer: 'No atiendo niños, atiendo jóvenes y adultos.'
    },
    {
      question: '¿Qué debo esperar de la primera sesión?',
      answer: 'La primera sesión es de evaluación donde conoceré tu situación actual y tus objetivos terapéuticos. Te explicaré cómo será el proceso y resolveré todas tus inquietudes. Mi prioridad es crear un ambiente seguro donde puedas expresarte con confianza.'
    },
    {
      question: '¿Qué significa que habrá un ambiente seguro en las sesiones?',
      answer: 'Significa que garantizo absoluta confidencialidad y un espacio libre de juicios sobre tus emociones, pensamientos, narrativas y orientaciones. Mi rol profesional no se basa en juzgar, sino en brindarte un acompañamiento terapéutico profesional donde puedas expresarte con total libertad.'
    },
    {
      question: '¿Ofreces talleres o charlas para empresas/grupos?',
      answer: 'Sí, ofrezco talleres para grupos y organizaciones.'
    },
    {
      question: '¿Qué pasa si necesito cancelar una cita?',
      answer: 'Solicito cancelaciones con 24 horas de anticipación para reprogramar sin costo adicional.'
    },
    {
      question: '¿Cómo garantizas la confidencialidad en las sesiones online?',
      answer: 'Utilizo plataformas seguras y encriptadas, y respeto estrictamente el código de ética profesional.'
    },
    {
      question: '¿Cómo es el proceso de terapia de pareja?',
      answer: 'Este enfoque, basado en la metodología Gottman, se centra en tres ejes fundamentales: comunicación, resolución de conflictos y conexión emocional. La mayoría de las sesiones se realizan en pareja, aunque algunas pueden ser individuales. Cada encuentro es dinámico e incluye ejercicios prácticos orientados a alcanzar los objetivos terapéuticos, así como el desarrollo de técnicas de comunicación para mejorar la resolución de conflictos.'
    },
    {
      question: '¿Cómo es una sesión de psicoterapia y qué técnicas se utilizan?',
      answer: 'Una sesión de psicoterapia es un espacio seguro y confidencial donde el consultante puede expresar sus pensamientos, emociones y experiencias sin ser juzgado. El objetivo es facilitar el autoconocimiento, la regulación emocional y el desarrollo de herramientas para afrontar dificultades.'
    },
    {
      question: '¿Cómo saber si necesito terapia?',
      answer: 'Si sientes ansiedad, estrés, tristeza constante o dificultades en tus relaciones, la terapia puede ayudarte. También es un espacio de apoyo durante procesos de duelo, cambios importantes en tu vida o la ruptura de una relación sentimental. No es necesario estar en crisis para buscar ayuda; la terapia también te permite mejorar tu comunicación, aprender a regular tus emociones y avanzar en tu crecimiento personal.'
    },
    {
      question: '¿Atiendes parejas del mismo sexo?',
      answer: 'Sí, atiendo parejas del mismo sexo.'
    }
  ];

  return (
    <section id="contacto" className="py-20 bg-muted/10">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container mx-auto px-6"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            <Calendar className="w-4 h-4 mr-2" />
            Agenda tu sesión
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Comienza tu proceso de sanación
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            El primer paso hacia el bienestar emocional es decidir buscar ayuda. 
            Estoy aquí para acompañarte en este camino de crecimiento y sanación.
          </p>
        </motion.div>

        {/* Session Types */}
        <motion.div variants={itemVariants} className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Modalidades de Sesión</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {sessionTypes.map((session, index) => (
              <motion.div
                key={session.title}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <Card className="h-full shadow-elegant hover:shadow-hover transition-all duration-300">
                  <CardHeader className="text-center">
                    <motion.div
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      className="inline-flex p-4 rounded-full bg-gradient-primary/10 text-accent mb-4 mx-auto"
                    >
                      <session.icon size={32} />
                    </motion.div>
                    <CardTitle className="text-xl">{session.title}</CardTitle>
                    <div className="flex justify-center items-center space-x-4 text-sm text-muted-foreground">
                      <span>{session.duration}</span>
                      <span>•</span>
                      <span className="font-semibold text-accent">{session.price}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground text-center">{session.description}</p>
                    <div className="space-y-2">
                      {session.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-accent" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Information & Form */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16 flex items-center">
          {/* Contact Information */}
          <motion.div variants={itemVariants} className="space-y-8">
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <Heart className="mr-3 text-accent" />
                  ¡Hablemos!
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  Estoy aquí para acompañarte en tu proceso de crecimiento personal y bienestar emocional. 
                  No dudes en contactarme para resolver cualquier duda o agendar tu primera sesión.
                </p>

                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={info.title}
                      href={info.link}
                      target={info.link.startsWith('http') ? '_blank' : '_self'}
                      rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                      whileHover={{ x: 5 }}
                      className="flex items-center space-x-4 p-4 rounded-lg hover:bg-muted/50 transition-colors duration-300 group"
                    >
                      <motion.div 
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="p-3 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors duration-300"
                      >
                        <info.icon size={24} className="text-accent" />
                      </motion.div>
                      <div>
                        <p className="font-semibold text-foreground">{info.title}</p>
                        <p className="text-muted-foreground">{info.value}</p>
                        <p className="text-sm text-muted-foreground/70">{info.description}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>

                <div className="pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-4">Sígueme en:</p>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className={`p-3 rounded-full bg-card shadow-elegant hover:shadow-hover transition-all duration-300 border border-border ${social.color}`}
                      >
                        <social.icon size={20} />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>


        </div>

        {/* FAQ Section - Ahora con Accordion para mejor UX */}
        <motion.div variants={itemVariants} className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Preguntas Frecuentes</h3>
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`faq-${index}`} className="border border-sage/20 rounded-lg px-6">
                  <AccordionTrigger className="text-left text-sage-dark hover:text-sage font-semibold">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {item.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </motion.div>

        {/* Emergency Notice */}
        <motion.div variants={itemVariants} className="mb-16">
          <Card className="shadow-elegant bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-l-red-400">
            <CardContent className="p-6">
              <div className="flex items-start space-x-3">
                <Shield className="w-6 h-6 text-red-500 mt-1" />
                <div>
                  <h4 className="font-semibold text-red-800 mb-2">Importante - Situaciones de Crisis</h4>
                  <p className="text-red-700 text-sm leading-relaxed">
                    Si estás experimentando pensamientos de autolesión o crisis emocional severa, 
                    busca ayuda inmediata en el servicio de urgencias más cercano o contacta la 
                    Línea Nacional de Prevención del Suicidio: <strong>123</strong> (disponible 24/7).
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Final CTA */}
        <motion.div variants={itemVariants} className="text-center">
          <Card className="max-w-4xl mx-auto shadow-elegant bg-gradient-secondary/20">
            <CardContent className="p-8">
              <Heart className="w-16 h-16 text-accent mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Tu bienestar emocional es mi prioridad
              </h3>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Cada proceso terapéutico es único. Trabajaremos juntos para crear un espacio 
                seguro donde puedas sanar, crecer y reconectar con lo que realmente importa en tu vida.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Shield className="w-4 h-4 mr-2 text-accent" />
                  100% Confidencial
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-accent" />
                  Sin juicios
                </div>
                <div className="flex items-center">
                  <Heart className="w-4 h-4 mr-2 text-accent" />
                  Enfoque empático
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2 text-accent" />
                  Horarios flexibles
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;