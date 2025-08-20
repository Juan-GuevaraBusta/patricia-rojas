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
      value: '+57 311 836 1642',
      link: 'https://wa.me/573118361642',
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
      value: 'Lunes a Viernes: 8:00 AM - 6:00 PM',
      link: '#',
      description: 'Sábados: 8:00 AM - 12:00 PM'
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
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
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

  const modalidades = [
    {
      title: 'Terapia Individual',
      icon: Calendar,
      price: 'Consultar',
      duration: '50 minutos',
      description: 'Acompañamiento personalizado para ansiedad, depresión, duelos y crecimiento personal',
      features: ['Enfoque ACT', 'Herramientas mindfulness', 'Proceso personalizado'],
      link: '/individual-therapy'
    },
    {
      title: 'Sesión Presencial',
      icon: MapPin,
      price: 'Consultar',
      duration: '50 minutos',
      description: 'En mi consultorio en Unicentro, ambiente cálido y confidencial',
      features: ['Espacio privado', 'Ambiente controlado', 'Materiales terapéuticos'],
      link: 'https://wa.me/573118361642'
    },
    {
      title: 'Sesión Virtual',
      icon: Video,
      price: 'Consultar',
      duration: '50 minutos',
      description: 'Desde la comodidad de tu hogar con la misma calidad profesional',
      features: ['Plataforma segura', 'Flexibilidad de ubicación', 'Misma efectividad'],
      link: 'https://wa.me/573118361642'
    },
    {
      title: 'Terapia de Pareja',
      icon: Heart,
      price: 'Consultar',
      duration: '50 minutos',
      description: 'Espacio especializado para trabajar la relación con Método Gottman',
      features: ['Enfoque Gottman', 'Ambas modalidades', 'Proceso estructurado'],
      link: '/couples-therapy'
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
      answer: 'Puedes contactarme directamente por WhatsApp al +57 311 836 1642 o enviarme un mensaje a patriciarojaspsicologia@gmail.com.'
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
            Contacto
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent font-marcellus">
            Comienza tu proceso de sanación
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-raleway">
            El primer paso hacia el bienestar emocional es decidir buscar ayuda. 
            Estoy aquí para acompañarte en este camino de crecimiento y sanación.
          </p>
        </motion.div>

        {/* Información de Contacto */}
        <motion.div variants={itemVariants} className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 font-marcellus">Información de Contacto</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <Card className="h-full shadow-elegant hover:shadow-hover transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <motion.div
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      className="inline-flex p-4 rounded-full bg-gradient-primary/10 text-accent mb-4"
                    >
                      <info.icon size={24} />
                    </motion.div>
                    <h4 className="font-semibold text-foreground mb-2">{info.title}</h4>
                    <p className="text-muted-foreground text-sm mb-1">{info.value}</p>
                    <p className="text-muted-foreground text-xs">{info.description}</p>
                    {info.link.startsWith('http') || info.link.startsWith('mailto:') ? (
                      <a
                        href={info.link}
                        target={info.link.startsWith('http') ? '_blank' : '_self'}
                        rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                        className="inline-block mt-3"
                      >
                        <Button variant="outline" size="sm">
                          Contactar
                        </Button>
                      </a>
                    ) : null}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Redes Sociales */}
        <motion.div variants={itemVariants} className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 font-marcellus">Sígueme en Redes Sociales</h3>
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="flex flex-col items-center space-y-3 p-6 rounded-lg bg-card shadow-elegant hover:shadow-hover transition-all duration-300 border border-border"
              >
                <div className={`p-4 rounded-full bg-gradient-primary/10 ${social.color}`}>
                  <social.icon />
                </div>
                <div className="text-center">
                  <p className="font-semibold text-foreground">{social.label}</p>
                  <p className="text-sm text-muted-foreground">{social.username}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Modalidades */}
        <motion.div variants={itemVariants} className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 font-marcellus">Modalidades de Atención</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {modalidades.map((modalidad, index) => (
              <motion.div
                key={modalidad.title}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <Card className="h-full shadow-elegant hover:shadow-hover transition-all duration-300">
                  <CardHeader className="text-center">
                    <motion.div
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      className="inline-flex p-4 rounded-full bg-gradient-primary/10 text-accent mb-4 mx-auto"
                    >
                      <modalidad.icon size={32} />
                    </motion.div>
                    <CardTitle className="text-xl">{modalidad.title}</CardTitle>
                    <div className="flex justify-center items-center space-x-4 text-sm text-muted-foreground">
                      <span>{modalidad.duration}</span>
                      <span>•</span>
                      <span className="font-semibold text-accent">{modalidad.price}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground text-center">{modalidad.description}</p>
                    <div className="space-y-2">
                      {modalidad.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-accent" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="text-center pt-4">
                      {modalidad.link.startsWith('/') ? (
                        <a href={modalidad.link}>
                          <Button className="bg-steel-blue hover:bg-steel-blue/90 text-white">
                            Más información
                          </Button>
                        </a>
                      ) : (
                        <a href={modalidad.link} target="_blank" rel="noopener noreferrer">
                          <Button className="bg-steel-blue hover:bg-steel-blue/90 text-white">
                            Agendar por WhatsApp
                          </Button>
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div variants={itemVariants} className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 font-marcellus">Preguntas Frecuentes</h3>
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
              <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground mb-6">
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
              <div className="flex justify-center">
                <a href="https://wa.me/573118361642" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-steel-blue hover:bg-steel-blue/90 text-white shadow-hover hover:shadow-glow">
                    <Calendar className="w-5 h-5 mr-2" style={{ color: '#fb7185' }} />
                    Agenda tu cita
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;