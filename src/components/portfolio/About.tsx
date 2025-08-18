import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { User, Heart, Target, Award, MapPin, Book } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { containerVariants, itemVariants } from '@/utils/animations';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const stats = [
    { icon: Award, number: '25+', label: 'Años de experiencia' },
    { icon: Target, number: '15+', label: 'Años en psicoterapia' },
    { icon: Heart, number: '', label: 'Acompañamiento profesional y humano' },
  ];

  const formacionComplementaria = [
    'Manejo de Infidelidad – Instituto Gottman',
    'Terapia de Pareja, Niveles 1 y 2 – Instituto Gottman',
    'Terapias Psicológicas de Tercera Generación – Universidad Pontificia Bolivariana de Santander',
    'Terapia de Aceptación y Compromiso (ACT) – Universidad Pontificia Bolivariana de Santander',
  ];

  return (
    <section id="sobre-mi" className="py-20 bg-muted/20">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="container mx-auto px-6"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Conoce más sobre mí
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Soy Patricia Rojas R., psicóloga con una maestría en Consejería Clínica y Salud Mental 
            —reconocida Cum Laude— y más de 25 años de experiencia profesional.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div variants={itemVariants}>
            <Card className="overflow-hidden shadow-elegant">
              <CardContent className="p-0">
                <div className="aspect-[4/5] bg-gradient-secondary relative">
                  <img 
                    src="/images/patricia-rojas-profile.jpeg" 
                    alt="Patricia Rojas - Psicóloga Master"
                    className="w-full h-full object-cover object-center rounded-lg"
                    onError={(e) => {
                      // Fallback si la imagen no carga
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
                    className="absolute inset-0 flex items-center justify-center"
                    style={{ display: 'none' }}
                  >
                    <div className="w-40 h-40 rounded-full bg-terracota/20 flex items-center justify-center">
                      <svg width="80" height="80" viewBox="0 0 100 100" className="text-terracota">
                        <path d="M50 20 C30 10, 10 30, 30 50 C10 70, 30 90, 50 80 C70 90, 90 70, 70 50 C90 30, 70 10, 50 20 Z" fill="currentColor"/>
                        <circle cx="50" cy="50" r="4" fill="currentColor"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <div className="bg-card p-6 rounded-lg shadow-elegant border">
              <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                <Heart className="mr-3" size={24} style={{ color: '#fb7185' }} />
                Mi Historia
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Soy <strong className="text-terracota">Patricia Rojas R.</strong>, psicóloga con una maestría en Consejería Clínica y Salud Mental, 
                  con reconocimiento <strong className="text-terracota">Cum Laude</strong> y 25 años de experiencia profesional. 
                  Comencé mi carrera en el ámbito organizacional, liderando procesos de selección, 
                  formación y bienestar laboral y desde hace más de 15 años, acompaño a jóvenes, adultos y parejas en sus procesos 
                  psicoterapéuticos con el objetivo de alcanzar bienestar emocional, sanar heridas 
                  del pasado y reconectar con un propósito vital.
                </p>
                <p>
                  Durante diez años tuve la oportunidad de vivir entre <strong className="text-terracota">El Salvador y Guatemala</strong>, 
                  y en este último país realicé mis estudios de posgrado. Estas vivencias personales 
                  y profesionales ampliaron mi perspectiva y enriquecieron mi comprensión de la 
                  diversidad humana y sus realidades.
                </p>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-elegant border">
              <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                <Book className="mr-2" size={20} style={{ color: '#fb7185' }} />
                Formación Complementaria en Psicoterapia
              </h4>
              <ul className="text-muted-foreground leading-relaxed space-y-2">
                <li className="flex items-start">
                  <span className="text-terracota mr-2">•</span>
                  <span>Master en consejería clínica y salud mental</span>
                </li>
                <li className="flex items-start">
                  <span className="text-terracota mr-2">•</span>
                  <span>Manejo de la infidelidad en terapia de pareja</span>
                </li>
                <li className="flex items-start">
                  <span className="text-terracota mr-2">•</span>
                  <span>Nivel I y II de Método Gottman para terapia de pareja</span>
                </li>
                <li className="flex items-start">
                  <span className="text-terracota mr-2">•</span>
                  <span>Terapias de tercera generación</span>
                </li>
                <li className="flex items-start">
                  <span className="text-terracota mr-2">•</span>
                  <span>Terapia de aceptación y compromiso (ACT)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-terracota mr-2">•</span>
                  <span>Desarrollo de habilidades psicoterapéuticas (Gestalt, Terapia Cognitivo Conductual, Logoterapia)</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Estadísticas */}
        <motion.div variants={itemVariants} className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <Card className="p-6 shadow-elegant hover:shadow-hover transition-all duration-300">
                  <CardContent className="p-0">
                    <stat.icon size={32} className="mx-auto mb-4" style={{ color: '#fb7185' }} />
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

        {/* Formación Complementaria */}
        <motion.div variants={itemVariants} className="mb-16">
          <Card className="shadow-elegant bg-gradient-to-br from-background to-muted/20">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl flex items-center justify-center">
                <Book className="mr-3" size={28} style={{ color: '#fb7185' }} />
                Formación Complementaria
              </CardTitle>
              <p className="text-muted-foreground mt-4 max-w-3xl mx-auto">
                A lo largo de mi trayectoria, me he comprometido con la actualización constante y la 
                profundización de herramientas clínicas que enriquezcan mi práctica. Entre mis 
                principales formaciones especializadas destaco:
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {formacionComplementaria.map((formacion, index) => (
                  <motion.div 
                    key={index} 
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    className="bg-card p-4 rounded-lg shadow-hover border-l-4 border-terracota"
                  >
                    <div className="flex items-start">
                      <div className="w-3 h-3 bg-terracota rounded-full mt-1 mr-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground font-medium">{formacion}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-terracota/10 rounded-lg border border-terracota/20">
                <div className="flex items-center justify-center mb-4">
                  <Award className="mr-2" size={24} style={{ color: '#fb7185' }} />
                  <span className="text-terracota font-semibold">Especialización Reconocida</span>
                </div>
                <p className="text-center text-muted-foreground">
                  Todas mis formaciones están respaldadas por instituciones de prestigio internacional 
                  como el <strong className="text-terracota">Instituto Gottman</strong> y la <strong className="text-terracota">Universidad Pontificia Bolivariana</strong>,
                  garantizando la más alta calidad en mi práctica clínica.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>




      </motion.div>
    </section>
  );
};

export default About;