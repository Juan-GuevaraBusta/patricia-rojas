import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { User, Heart, Target, Award, Book, ArrowLeft, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { containerVariants, itemVariants } from '@/utils/animations';
import { useNavigate } from 'react-router-dom';

const TherapeuticApproaches = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const navigate = useNavigate();

  // Componente reutilizable para listas con viñetas
  const BulletList = ({ items, bulletColor = "bg-accent" }) => (
    <div className="space-y-2">
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          <div className={`w-2 h-2 ${bulletColor} rounded-full mr-3`}></div>
          <span className="text-muted-foreground text-sm">{item}</span>
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      {/* Hero Section - Mi Enfoque Terapéutico */}
      <section className="pt-20 pb-16">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="container mx-auto px-6"
        >
          {/* Mi Enfoque Terapéutico - Sección Hero */}
          <motion.div variants={itemVariants} className="mb-16">
            <Card className="shadow-elegant">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-4xl font-marcellus text-foreground mb-4">
                  Mi Enfoque Terapéutico
                </CardTitle>
                <div className="w-32 h-1 bg-gradient-to-r from-accent to-sage mx-auto rounded-full"></div>
              </CardHeader>
              <CardContent className="space-y-8">
                {/* Introducción */}
                <div className="bg-gradient-to-br from-accent/5 to-sage/10 p-8 rounded-lg border border-accent/20">
                  <h3 className="text-xl font-marcellus text-foreground mb-4 text-center">
                    Trabajo desde un enfoque integrativo, con fuerte base en la Terapia de Aceptación y Compromiso (ACT) y el método Gottman.
                  </h3>
                </div>

                {/* Dos columnas principales */}
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Columna izquierda - ACT */}
                  <div className="bg-card p-6 rounded-lg shadow-hover border-l-4 border-accent">
                    <h4 className="text-lg font-marcellus text-foreground mb-4 flex items-center">
                      <Target className="mr-2 text-accent" size={20} />
                      Terapia de Aceptación y Compromiso (ACT)
                    </h4>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      La Terapia de Aceptación y Compromiso (ACT) es un enfoque psicológico basado en evidencia y nace del marco de la terapia cognitivo conductual. Utiliza ejercicios prácticos para ayudar a aceptar las emociones difíciles, tomar distancia de pensamientos limitantes y comprometerse con acciones coherentes con los propios valores.
                    </p>
                  </div>

                  {/* Columna derecha - Método Gottman */}
                  <div className="bg-card p-6 rounded-lg shadow-hover border-l-4 border-sage">
                    <h4 className="text-lg font-marcellus text-foreground mb-4 flex items-center">
                      <Heart className="mr-2 text-sage" size={20} />
                      Método Gottman
                    </h4>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      El método Gottman ofrece herramientas prácticas y ejercicios en sesión para mejorar la comunicación, resolver conflictos y fortalecer la conexión emocional de la pareja.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </section>

      {/* Resto del contenido */}
      <section className="py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="container mx-auto px-6"
        >
          {/* Header con botón de regreso */}
          <motion.div variants={itemVariants} className="mb-8">
            <Button
              variant="ghost"
              onClick={() => navigate(-1)}
              className="mb-6 text-foreground hover:text-accent transition-colors"
            >
              <ArrowLeft className="mr-2" size={20} />
              Volver
            </Button>
          </motion.div>

          {/* Herramientas Terapéuticas */}
          <motion.div variants={itemVariants} className="mb-16">
            <Card className="shadow-elegant">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-marcellus text-foreground mb-4">
                  Algunas herramientas terapéuticas
                </CardTitle>
                <div className="w-16 h-1 bg-gradient-to-r from-accent to-sage mx-auto rounded-full"></div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Lista de herramientas */}
                  <div className="space-y-4">
                    <BulletList items={[
                      "Mindfulness y atención plena",
                      "Meditación guiada",
                      "Uso de metáforas terapéuticas",
                      "Ejercicios experienciales en sesión",
                      "Ejercicios de comunicación y resolución de conflictos",
                      "Aplicación formato de evaluación Gottman para la relación de pareja",
                      "Técnicas específicas de la Terapia Gestalt, Logoterapia y Terapia Cognitivo Conductual TCC"
                    ]} />
                  </div>

                  {/* Estilo terapéutico */}
                  <div className="bg-gradient-to-br from-sage/5 to-accent/10 p-6 rounded-lg border border-sage/20">
                    <h4 className="text-lg font-marcellus text-foreground mb-4">
                      Mi estilo terapéutico
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Mi trabajo se desarrolla en un espacio confidencial, empático y libre de juicios, pensado para que cada persona o pareja pueda conectar con su historia, emociones y pensamientos de manera segura y auténtica.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center">
            <Card className="max-w-3xl mx-auto shadow-elegant bg-gradient-primary">
              <CardContent className="p-8 text-center">
                <h3 className="text-3xl font-marcellus text-primary-foreground mb-4">
                  ¿Listo para comenzar tu proceso de transformación?
                </h3>
                <p className="text-primary-foreground/90 mb-6 text-lg">
                  Con más de 25 años de experiencia y enfoques basados en evidencia científica, 
                  estoy aquí para acompañarte en tu camino hacia el bienestar emocional.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <motion.div 
                    className="bg-primary-foreground/10 p-4 rounded-lg cursor-pointer hover:bg-primary-foreground/20 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => navigate('/individual-therapy')}
                  >
                    <h4 className="font-marcellus text-primary-foreground mb-2">Terapia Individual</h4>
                    <p className="text-primary-foreground/80 text-sm">
                      ACT, Mindfulness y herramientas personalizadas para tu crecimiento personal
                    </p>
                  </motion.div>
                  <motion.div 
                    className="bg-primary-foreground/10 p-4 rounded-lg cursor-pointer hover:bg-primary-foreground/20 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => navigate('/couples-therapy')}
                  >
                    <h4 className="font-marcellus text-primary-foreground mb-2">Terapia de Pareja</h4>
                    <p className="text-primary-foreground/80 text-sm">
                      Método Gottman para fortalecer y sanar tu relación
                    </p>
                  </motion.div>
                </div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    onClick={() => navigate('/contacto')}
                    className="bg-primary-foreground text-primary px-8 py-3 rounded-lg font-medium shadow-hover hover:shadow-glow transition-all duration-300"
                  >
                    <Calendar className="mr-2" size={20} />
                    Agenda tu primera sesión
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default TherapeuticApproaches;