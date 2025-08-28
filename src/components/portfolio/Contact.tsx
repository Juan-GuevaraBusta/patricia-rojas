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
    <section id="contacto" className="py-20 bg-[#4a6741]/10">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container mx-auto px-6"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <Badge className="mb-4 px-4 py-2 bg-steel-blue text-white border-steel-blue">
            <Calendar className="w-4 h-4 mr-2" style={{ color: '#fb7185' }} />
            Contacto
          </Badge>

        </motion.div>

        {/* Contact Information */}
        <motion.div variants={itemVariants} className="mb-16">
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
        </motion.div>

        {/* Social Media */}
        <motion.div variants={itemVariants} className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 font-marcellus" style={{ color: '#3e554d' }}>
            Sígueme en mis redes sociales
          </h3>
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
          <motion.div variants={itemVariants} className="text-center mt-8">
            <a href="https://wa.me/573118361642" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-steel-blue hover:bg-steel-blue/90 text-white shadow-hover hover:shadow-glow">
                <Calendar className="w-5 h-5 mr-2" style={{ color: '#fb7185' }} />
                Agenda tu cita
              </Button>
            </a>
          </motion.div>
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
                    Línea Nacional de Prevención del Suicidio: <strong>106</strong> (disponible 24/7).
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