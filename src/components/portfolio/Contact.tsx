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
      question: '¿Cómo sé si necesito terapia?',
      answer: 'Si sientes ansiedad, estrés, tristeza constante o dificultades en tus relaciones, la terapia puede ayudarte. También es útil durante procesos de duelo, cambios importantes o para crecimiento personal.'
    },
    {
      question: '¿Cuántas sesiones necesitaré?',
      answer: 'Depende de cada caso, pero generalmente se comienzan a notar cambios en un promedio de 3 a 5 sesiones. Trabajaremos juntos para establecer objetivos claros.'
    },
    {
      question: '¿Las sesiones online son igual de efectivas?',
      answer: 'Sí, utilizo plataformas seguras y mantengo las mismas condiciones profesionales. Es importante tener un espacio privado y buena conexión a internet.'
    },
    {
      question: '¿Qué pasa si necesito cancelar una cita?',
      answer: 'Solicito cancelaciones con 24 horas de anticipación para reprogramar sin costo adicional.'
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
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
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

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <Send className="mr-3 text-accent" />
                  Agenda tu Primera Sesión
                </CardTitle>
                <p className="text-muted-foreground">
                  Completa el formulario y me pondré en contacto contigo en menos de 24 horas.
                </p>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nombre completo *</Label>
                      <Input
                        id="name"
                        placeholder="Tu nombre"
                        className="transition-all duration-300 focus:shadow-elegant"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Teléfono *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+57 300 123 4567"
                        className="transition-all duration-300 focus:shadow-elegant"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="tu@email.com"
                      className="transition-all duration-300 focus:shadow-elegant"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="session-type">Tipo de sesión preferida</Label>
                    <select 
                      id="session-type"
                      className="w-full p-3 border border-input rounded-md bg-background transition-all duration-300 focus:shadow-elegant"
                    >
                      <option value="">Selecciona una opción</option>
                      <option value="individual">Terapia Individual</option>
                      <option value="pareja">Terapia de Pareja</option>
                      <option value="joven">Terapia para Jóvenes</option>
                      <option value="consulta">No estoy seguro/a</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="modality">Modalidad preferida</Label>
                    <select 
                      id="modality"
                      className="w-full p-3 border border-input rounded-md bg-background transition-all duration-300 focus:shadow-elegant"
                    >
                      <option value="">Selecciona una opción</option>
                      <option value="presencial">Presencial</option>
                      <option value="virtual">Virtual</option>
                      <option value="ambas">Sin preferencia</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Cuéntame brevemente tu situación</Label>
                    <Textarea
                      id="message"
                      placeholder="Describe lo que te gustaría trabajar en terapia..."
                      rows={4}
                      className="transition-all duration-300 focus:shadow-elegant resize-none"
                    />
                  </div>

                  <div className="flex items-start space-x-2">
                    <input type="checkbox" id="privacy" className="mt-1" required />
                    <Label htmlFor="privacy" className="text-sm text-muted-foreground">
                      Acepto que mis datos sean tratados de forma confidencial según las normas de privacidad en salud mental. *
                    </Label>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-primary shadow-hover hover:shadow-glow transition-all duration-300"
                    >
                      <Send size={20} className="mr-2" />
                      Enviar Solicitud
                    </Button>
                  </motion.div>

                  <p className="text-xs text-center text-muted-foreground">
                    Al enviar este formulario, recibirás una respuesta en menos de 24 horas para coordinar tu cita.
                  </p>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div variants={itemVariants} className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Preguntas Frecuentes</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -2 }}
              >
                <Card className="shadow-elegant hover:shadow-hover transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-foreground mb-3 flex items-start">
                      <ArrowRight className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                      {item.question}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed pl-7">
                      {item.answer}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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