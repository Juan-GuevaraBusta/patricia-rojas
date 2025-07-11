import { motion } from 'framer-motion';
import { ArrowDown, Heart, Brain, Users, Star, Calendar, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { containerVariants, itemVariants } from '@/utils/animations';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.querySelector('#servicios');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const specialties = [
    { icon: Heart, text: "Terapia de Parejas", color: "text-magenta" },
    { icon: Brain, text: "Salud Mental", color: "text-steel-blue" },
    { icon: Users, text: "Terapia Individual", color: "text-sage" }
  ];

  const stats = [
    { number: "25+", label: "Años de Experiencia" },
    { number: "1000+", label: "Pacientes Atendidos" },
    { number: "95%", label: "Satisfacción" }
  ];

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-secondary opacity-5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,hsl(var(--magenta)/0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,hsl(var(--steel-blue)/0.1),transparent_50%)]" />
      
      {/* Floating Elements */}
      <motion.div
        animate={{ 
          y: [-20, 20, -20],
          rotate: [0, 180, 360]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-20 right-20 w-16 h-16 rounded-full bg-gradient-primary opacity-20"
      />
      <motion.div
        animate={{ 
          y: [20, -20, 20],
          x: [-10, 10, -10]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute bottom-20 left-20 w-24 h-24 rounded-full bg-gradient-accent opacity-15"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-6 text-center relative z-10"
      >
        {/* Badge de Credenciales */}
        <motion.div
          variants={itemVariants}
          className="mb-8 flex justify-center"
        >
          <Badge 
            variant="outline" 
            className="px-6 py-2 text-sm bg-background/80 backdrop-blur-sm border-accent/30 text-accent"
          >
            ✨ Psicóloga con Maestría Cum Laude • 25+ años de experiencia
          </Badge>
        </motion.div>

        {/* Título Principal */}
        <motion.div
          variants={itemVariants}
          className="mb-8"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="block text-foreground">Patricia Rojas R.</span>
            <span className="block bg-gradient-primary bg-clip-text text-transparent text-4xl md:text-5xl mt-2">
              Psicóloga Clínica
            </span>
          </h1>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            {specialties.map((specialty, index) => (
              <motion.div
                key={specialty.text}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.2 }}
                className="flex items-center space-x-2 bg-background/50 backdrop-blur-sm px-4 py-2 rounded-full border border-border"
              >
                <specialty.icon className={`w-5 h-5 ${specialty.color}`} />
                <span className="text-sm font-medium">{specialty.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Descripción */}
        <motion.div
          variants={itemVariants}
          className="mb-12"
        >
          <p className="text-xl md:text-2xl text-muted-foreground mb-6 max-w-4xl mx-auto leading-relaxed">
            Te acompaño a <span className="text-accent font-semibold">sanar tus relaciones</span> y 
            <span className="text-accent font-semibold"> reconectar contigo mismo</span>. 
            Especializada en terapia de parejas y terapia individual con enfoque en ACT y Método Gottman.
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sesiones presenciales y virtuales • Enfoque empático y personalizado
          </p>
        </motion.div>

        {/* Estadísticas */}
        <motion.div
          variants={itemVariants}
          className="mb-12"
        >
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="text-3xl md:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2"
                >
                  {stat.number}
                </motion.div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Botones de Acción */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="bg-gradient-primary shadow-hover hover:shadow-glow transition-all duration-300 px-8 py-4 text-lg"
            >
              <Calendar className="mr-2 w-5 h-5" />
              Agenda tu Primera Sesión
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button 
              variant="outline" 
              size="lg"
              onClick={scrollToServices}
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-4 text-lg"
            >
              <MessageCircle className="mr-2 w-5 h-5" />
              Conoce mis Servicios
            </Button>
          </motion.div>
        </motion.div>

        {/* Redes Sociales */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center space-x-6 mb-16"
        >
          {[
            { icon: '📧', href: 'mailto:patriciarojaspsicologia@gmail.com', label: 'Email' },
            { icon: '📱', href: 'https://instagram.com/patriciarojaspsicologa', label: 'Instagram' },
            { icon: '🎥', href: '#', label: 'TikTok' },
            { icon: '💼', href: '#', label: 'LinkedIn' }
          ].map(({ icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="p-4 rounded-full bg-card shadow-elegant hover:shadow-hover transition-all duration-300 border border-border text-2xl"
            >
              {icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Indicador de Scroll */}
        <motion.div
          variants={itemVariants}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center cursor-pointer"
            onClick={scrollToServices}
          >
            <span className="text-sm text-muted-foreground mb-2">Descubre más</span>
            <motion.div
              whileHover={{ scale: 1.2 }}
              className="p-2 rounded-full bg-accent/10 border border-accent/20"
            >
              <ArrowDown size={20} className="text-accent" />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;