import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Quote, Heart, Users, Calendar, Award, MapPin, BookOpen, Shield } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { containerVariants, itemVariants } from '@/utils/animations';

const Experience = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const testimonials = [
    {
      id: 'E.R',
      date: 'Junio 2025',
      rating: 5,
      text: 'Consulté a la Dra Patricia Rojas por una situación de un duelo debido a la muerte de mi madre. Las pautas que me dio fueron muy valiosas para poder superar esta situación. Su calidez y empatía me impactaron muy positivamente.',
      category: 'Proceso de Duelo',
      initials: 'E.R',
      color: 'bg-magenta'
    },
    {
      id: 'S.R',
      date: 'Junio 2025',
      rating: 5,
      text: 'Recibí sesiones con la psicóloga Patricia por múltiples problemas emocionales que presenté debido a una calamidad familiar. Estuvo monitoreando mi proceso constantemente, escuchó con atención a todos los conflictos que he afrontado y sentí su apoyo en todo momento. Ella es una de las razones que más influyó en mi recuperación emocional.',
      category: 'Crisis Familiar',
      initials: 'S.R',
      color: 'bg-steel-blue'
    },
    {
      id: 'I.P',
      date: 'Junio 2025',
      rating: 5,
      text: 'Me encantó la terapia, me ha ayudado mucho a mejorar mi ansiedad del día a día. Estoy más tranquila y puedo disfrutar de cada momento sin tanto estrés. Todos sus consejos y su cariño me hicieron sentir muy cómoda y con una curita en el corazón.',
      category: 'Ansiedad',
      initials: 'I.P',
      color: 'bg-sage'
    },
    {
      id: 'L.G',
      date: 'Junio 2025',
      rating: 5,
      text: 'La Dra Patricia es una profesional con bastante empatía, es comprensiva, precisa y transmite mucha confianza. Me gustó que ella en la terapia siempre me guía con respeto y sensibilidad. Es muy clara en sus orientaciones y me ha brindado herramientas muy útiles para mi proceso.',
      category: 'Terapia Individual',
      initials: 'L.G',
      color: 'bg-accent'
    },
    {
      id: 'J.C',
      date: 'Junio 2025',
      rating: 5,
      text: 'Fue una experiencia muy grata. Fui por problemas de ansiedad con la universidad. Después de 2 meses, he sentido que los tips que me ha dado la doctora han funcionado a la perfección. ¡Súper recomendada!',
      category: 'Ansiedad Académica',
      initials: 'J.C',
      color: 'bg-blue-gray'
    },
    {
      id: 'C.O',
      date: 'Junio 2025',
      rating: 5,
      text: 'La experiencia en mi cita con Patricia fue excelente! Me pareció una persona muy amable, humana, respetuosa y muy profesional. La recomiendo!',
      category: 'Primera Consulta',
      initials: 'C.O',
      color: 'bg-sage-dark'
    },
    {
      id: 'J.R',
      date: 'Junio 2025',
      rating: 5,
      text: 'Llegamos por una infidelidad. El proceso nos ayudó a perdonar y reconstruir la confianza. Hoy acabamos de ser padres.',
      category: 'Terapia de Pareja',
      initials: 'J.R',
      color: 'bg-magenta'
    }
  ];

  const stats = [
    { number: '25+', label: 'Años de Experiencia', icon: Calendar },
    { number: '1000+', label: 'Pacientes Atendidos', icon: Users },
    { number: '95%', label: 'Satisfacción', icon: Heart },
    { number: '15+', label: 'Años en Terapia Clínica', icon: Award }
  ];

  const experience = [
    {
      period: '2008 - Presente',
      title: 'Práctica Privada en Psicología Clínica',
      location: 'Cali, Colombia',
      description: 'Especializada en terapia de parejas, terapia individual para jóvenes y adultos, con enfoque en ACT y Método Gottman.',
      achievements: [
        'Más de 1000 pacientes atendidos exitosamente',
        'Especialización en Método Gottman (Instituto Gottman)',
        'Formación en Terapia ACT',
        'Desarrollo de programa de terapia virtual'
      ]
    },
    {
      period: '1999 - 2008',
      title: 'Psicología Organizacional',
      location: 'Sector Corporativo',
      description: 'Liderazgo en procesos de selección, formación y bienestar laboral en diferentes organizaciones.',
      achievements: [
        'Implementación de programas de bienestar',
        'Diseño de procesos de selección',
        'Formación en liderazgo y desarrollo humano',
        'Consultoría en clima organizacional'
      ]
    }
  ];

  const education = [
    {
      degree: 'Maestría en Consejería Clínica y Salud Mental',
      institution: 'Universidad (El Salvador/Guatemala)',
      period: 'Cum Laude',
      description: 'Especialización en enfoques terapéuticos contemporáneos'
    },
    {
      degree: 'Especialización - Método Gottman',
      institution: 'Instituto Gottman',
      period: 'Niveles 1 y 2',
      description: 'Terapia de pareja y manejo de infidelidad'
    },
    {
      degree: 'Especialización - Terapia ACT',
      institution: 'Universidad Pontificia Bolivariana',
      period: 'Certificación',
      description: 'Terapia de Aceptación y Compromiso'
    }
  ];

  return (
    <section id="testimonios" className="py-20">
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
            <Star className="w-4 h-4 mr-2" />
            Testimonios y Experiencia
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Lo que dicen mis pacientes
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            La confianza y transformación de quienes han pasado por mi consulta 
            es el mayor testimonio de la efectividad del proceso terapéutico.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div variants={itemVariants} className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center"
              >
                <Card className="p-6 shadow-elegant hover:shadow-hover transition-all duration-300">
                  <CardContent className="p-0">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="inline-flex p-3 rounded-full bg-gradient-primary/10 text-accent mb-4"
                    >
                      <stat.icon size={24} />
                    </motion.div>
                    <div className="text-3xl font-bold text-foreground mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div variants={itemVariants} className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-12">Testimonios Reales</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="h-full"
              >
                <Card className="h-full shadow-elegant hover:shadow-hover transition-all duration-300 relative overflow-hidden">
                  {/* Background decoration */}
                  <div className="absolute top-0 right-0 w-20 h-20 rounded-full bg-gradient-primary/5 -translate-y-10 translate-x-10" />
                  
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <Avatar className={`${testimonial.color} text-white`}>
                          <AvatarFallback className={`${testimonial.color} text-white text-sm font-bold`}>
                            {testimonial.initials}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-semibold text-foreground">{testimonial.id}</div>
                          <div className="text-sm text-muted-foreground">{testimonial.date}</div>
                        </div>
                      </div>
                      <Quote className="w-6 h-6 text-accent/30" />
                    </div>
                    
                    <div className="flex items-center space-x-1 mt-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current text-yellow-400" />
                      ))}
                    </div>
                    
                    <Badge variant="secondary" className="w-fit mt-2">
                      {testimonial.category}
                    </Badge>
                  </CardHeader>

                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed italic">
                      "{testimonial.text}"
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Professional Experience */}
        <motion.div variants={itemVariants} className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-12 flex items-center justify-center">
            <BookOpen className="mr-3 text-accent" size={28} />
            Trayectoria Profesional
          </h3>
          
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ x: 5 }}
                className="relative"
              >
                <Card className="shadow-elegant hover:shadow-hover transition-all duration-300">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-foreground mb-2">
                          {exp.title}
                        </h4>
                        <div className="flex items-center text-accent font-semibold mb-2">
                          <MapPin size={16} className="mr-2" />
                          {exp.location}
                        </div>
                      </div>
                      <Badge variant="outline" className="w-fit">
                        {exp.period}
                      </Badge>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>

                    <div>
                      <h5 className="font-semibold text-foreground mb-3 flex items-center">
                        <Award size={18} className="mr-2 text-accent" />
                        Logros Principales
                      </h5>
                      <div className="grid md:grid-cols-2 gap-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <div key={achIndex} className="flex items-start">
                            <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span className="text-sm text-muted-foreground">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education */}
        <motion.div variants={itemVariants}>
          <h3 className="text-2xl font-bold text-center mb-12 flex items-center justify-center">
            <Award className="mr-3 text-accent" size={28} />
            Formación Académica y Especializada
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <Card className="h-full shadow-elegant hover:shadow-hover transition-all duration-300">
                  <CardHeader>
                    <h4 className="text-lg font-bold text-foreground">
                      {edu.degree}
                    </h4>
                    <p className="text-accent font-semibold">
                      {edu.institution}
                    </p>
                    <Badge variant="secondary" className="w-fit">
                      {edu.period}
                    </Badge>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-muted-foreground">
                      {edu.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust Message */}
        <motion.div variants={itemVariants} className="text-center mt-16">
          <Card className="max-w-4xl mx-auto shadow-elegant bg-gradient-secondary/10">
            <CardContent className="p-8">
              <Heart className="w-16 h-16 text-accent mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Un espacio seguro para tu crecimiento
              </h3>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Mi compromiso es brindarte un acompañamiento profesional, empático y respetuoso. 
                Cada proceso es único, y trabajaremos juntos hacia tu bienestar emocional.
              </p>
              <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Shield className="w-4 h-4 mr-2 text-accent" />
                  Confidencialidad garantizada
                </div>
                <div className="flex items-center">
                  <Heart className="w-4 h-4 mr-2 text-accent" />
                  Enfoque empático
                </div>
                <div className="flex items-center">
                  <Award className="w-4 h-4 mr-2 text-accent" />
                  Basado en evidencia
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Experience;