import { motion } from 'framer-motion';
import { ArrowDown, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { containerVariants, itemVariants } from '@/utils/animations';

const Hero = () => {

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-secondary opacity-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,hsl(var(--magenta)/0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,hsl(var(--steel-blue)/0.1),transparent_50%)]" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-6 text-center relative z-10"
      >
        <motion.div
          variants={itemVariants}
          className="mb-8"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="block text-foreground">Patricia Rojas R.</span>
            <span className="block bg-gradient-primary bg-clip-text text-transparent text-3xl md:text-4xl mt-4">
              Psicóloga Clínica
            </span>
          </h1>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mb-8"
        >
          <p className="text-xl md:text-2xl text-accent mb-4 font-semibold">
            Maestría en Consejería Clínica y Salud Mental (Cum Laude)
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-6">
            <div className="bg-gradient-secondary px-6 py-3 rounded-full">
              <span className="text-lg font-medium text-foreground">Terapia de Parejas</span>
            </div>
            <div className="text-muted-foreground">&</div>
            <div className="bg-gradient-secondary px-6 py-3 rounded-full">
              <span className="text-lg font-medium text-foreground">Terapia Individual</span>
            </div>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Te acompaño a sanar tus relaciones y reconectar contigo mismo. 
            Más de 25 años de experiencia profesional con enfoque en ACT y Método Gottman.
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mb-8"
        >
          <h3 className="text-xl text-foreground mb-6">¿Cuál es el tipo de acompañamiento ideal para ti?</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-primary shadow-hover hover:shadow-glow transition-all duration-300 min-w-[280px]"
            >
              Quiero trabajar en mi relación de pareja
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground min-w-[280px]"
            >
              Quiero trabajar en mí
            </Button>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex justify-center space-x-6 mb-16"
        >
          {[
            { Icon: Mail, href: 'mailto:patriciarojaspsicologia@gmail.com', label: 'Email' },
            { Icon: Phone, href: 'tel:+573115578592', label: 'Teléfono' },
            { Icon: MapPin, href: '#', label: 'Ubicación' }
          ].map(({ Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full bg-card shadow-elegant hover:shadow-hover transition-all duration-300 border border-border"
            >
              <Icon size={24} className="text-accent" />
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center cursor-pointer"
          >
            <span className="text-sm text-muted-foreground mb-2">Conoce más sobre mí</span>
            <ArrowDown size={20} className="text-accent" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;