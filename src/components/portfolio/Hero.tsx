import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { containerVariants, itemVariants } from '@/utils/animations';

const Hero = () => {

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
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
            <span className="block text-foreground">Hola, soy</span>
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Patricia Rojas
            </span>
          </h1>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mb-8"
        >
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Psicóloga Clínica
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Te acompaño en tu proceso de crecimiento personal y bienestar emocional.
            Especializada en terapia individual y de pareja con enfoque humanista.
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <Button 
            size="lg" 
            className="bg-gradient-primary shadow-hover hover:shadow-glow transition-all duration-300"
            asChild
          >
            <Link to="/individual-therapy">Terapia Individual</Link>
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
            asChild
          >
            <Link to="/couples-therapy">Terapia en Pareja</Link>
          </Button>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex justify-center space-x-6 mb-16"
        >
          {[
            { Icon: Github, href: '#', label: 'GitHub' },
            { Icon: Linkedin, href: '#', label: 'LinkedIn' },
            { Icon: Mail, href: '#', label: 'Email' }
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
            <ArrowDown size={20} className="text-accent" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;