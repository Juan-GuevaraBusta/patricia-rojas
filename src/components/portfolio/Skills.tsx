import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart, Brain, Users, Lightbulb, Target, Compass, Clock, Shield, MessageCircle, MapPin, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { containerVariants, itemVariants } from '@/utils/animations';
import TherapeuticApproaches from '@/pages/TherapeuticApproaches';
import { Button } from '@/components/ui/button';

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

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
    <>
      {/* Mi Enfoque Terapéutico y Herramientas - Sección Unificada */}
      <section className="py-20 bg-muted/20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="container mx-auto px-6"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-marcellus" style={{ color: '#3e554d' }}>
              Mi Enfoque Terapéutico
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-raleway">
              Trabajo desde un enfoque integrativo, con fuerte base en la Terapia de Aceptación y Compromiso (ACT) y el método Gottman.
            </p>
          </motion.div>

          <Card className="shadow-elegant">
            <CardContent className="p-8 space-y-8">
              {/* Dos columnas principales - ACT y Gottman */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* Columna izquierda - ACT */}
                <div className="bg-card p-6 rounded-lg shadow-hover">
                  <h4 className="font-semibold text-sage-dark mb-4 flex items-center gap-2">
                    <Target className="w-5 h-5" style={{ color: '#fb7185' }} />
                    Terapia de Aceptación y Compromiso (ACT)
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    La Terapia de Aceptación y Compromiso (ACT) es un enfoque psicológico basado en evidencia y nace del marco de la terapia cognitivo conductual. Utiliza ejercicios prácticos para ayudar a aceptar las emociones difíciles, tomar distancia de pensamientos limitantes y comprometerse con acciones coherentes con los propios valores.
                  </p>
                </div>

                {/* Columna derecha - Método Gottman */}
                <div className="bg-card p-6 rounded-lg shadow-hover">
                  <h4 className="font-semibold text-sage-dark mb-4 flex items-center gap-2">
                    <Heart className="w-5 h-5" style={{ color: '#fb7185' }} />
                    Método Gottman
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    El método Gottman ofrece herramientas prácticas y ejercicios en sesión para mejorar la comunicación, resolver conflictos y fortalecer la conexión emocional de la pareja.
                  </p>
                </div>
              </div>

              {/* Herramientas y estilo terapéutico */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* Lista de herramientas */}
                <div className="bg-card p-6 rounded-lg shadow-hover">
                  <h4 className="font-semibold text-sage-dark mb-4 flex items-center gap-2">
                    <Lightbulb className="w-5 h-5" style={{ color: '#fb7185' }} />
                    Algunas Herramientas Terapéuticas
                  </h4>
                  <div className="space-y-3">
                    {[
                      "Mindfulness y atención plena",
                      "Meditación guiada",
                      "Uso de metáforas terapéuticas",
                      "Ejercicios experienciales en sesión",
                      "Ejercicios de comunicación y resolución de conflictos",
                      "Aplicación formato de evaluación Gottman para la relación de pareja",
                      "Técnicas específicas de la Terapia Gestalt, Logoterapia y Terapia Cognitivo Conductual TCC"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-terracota rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Estilo terapéutico */}
                <div className="bg-card p-6 rounded-lg shadow-hover">
                  <h4 className="font-semibold text-sage-dark mb-4 flex items-center gap-2">
                    <Shield className="w-5 h-5" style={{ color: '#fb7185' }} />
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
      </section>

      {/* Formato de Sesiones */}
      <section className="py-20 bg-muted/20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="container mx-auto px-6"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-marcellus" style={{ color: '#3e554d' }}>
              Formato de las Sesiones
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-raleway">
              Cada sesión está diseñada para brindarte el máximo beneficio terapéutico en un ambiente seguro y profesional
            </p>
          </motion.div>

          <Card className="shadow-elegant">
            <CardContent className="p-8 space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-6 h-6" style={{ color: '#fb7185' }} />
                <div>
                  <h4 className="font-semibold text-sage-dark">Duración</h4>
                  <p className="text-muted-foreground">Cada sesión tiene una duración de 50 minutos.</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card p-6 rounded-lg shadow-hover">
                  <h5 className="font-semibold text-sage-dark mb-3 flex items-center gap-2">
                    <Users className="w-5 h-5" style={{ color: '#fb7185' }} />
                    Sesiones Individuales
                  </h5>
                  <p className="text-muted-foreground leading-relaxed">
                    Durante el proceso terapéutico se incluirán sesiones individuales para explorar la historia personal de cada miembro de la pareja y comprender cómo estas experiencias influyen en la dinámica relacional actual.
                  </p>
                </div>

                <div className="bg-card p-6 rounded-lg shadow-hover">
                  <h5 className="font-semibold text-sage-dark mb-3 flex items-center gap-2">
                    <Heart className="w-5 h-5" style={{ color: '#fb7185' }} />
                    Espacio Seguro
                  </h5>
                  <p className="text-muted-foreground leading-relaxed">
                    En cada encuentro se proporciona un espacio seguro donde ambos pueden expresar libremente sus necesidades, relatos y emociones.
                  </p>
                </div>

                <div className="bg-card p-6 rounded-lg shadow-hover">
                  <h5 className="font-semibold text-sage-dark mb-3 flex items-center gap-2">
                    <MessageCircle className="w-5 h-5" style={{ color: '#fb7185' }} />
                    Metodología
                  </h5>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Las sesiones combinan la escucha empática con psicoeducación especializada y ejercicios prácticos de comunicación que pueden implementar en su vida cotidiana.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    La metodología integra teoría y práctica, permitiendo que las parejas no solo comprendan los conceptos, sino que desarrollen habilidades concretas para fortalecer su relación.
                  </p>
                </div>

                <div className="bg-card p-6 rounded-lg shadow-hover">
                  <h5 className="font-semibold text-sage-dark mb-3 flex items-center gap-2">
                    <MapPin className="w-5 h-5" style={{ color: '#fb7185' }} />
                    Modalidades
                  </h5>
                  <p className="text-muted-foreground font-medium">
                    Sesiones presencial y virtual
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      {/* Enfoque Terapéutico Individual */}
      <section className="py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="container mx-auto px-6"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-marcellus" style={{ color: '#3e554d' }}>
              Enfoque Terapéutico Individual
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-raleway">
              Trabajo desde un enfoque integrativo, adaptándome a tus necesidades específicas
              con herramientas basadas en evidencia científica.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <Card className="h-full overflow-hidden shadow-elegant hover:shadow-hover transition-all duration-500 bg-gradient-to-br from-steel-blue/20 to-steel-blue/5">
                <CardHeader className="pb-4">
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className="inline-flex p-4 rounded-2xl bg-background/80 mb-4 shadow-sm"
                  >
                    <Brain size={32} style={{ color: '#fb7185' }} />
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    Enfoque Integrativo Personalizado
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Adapto mi enfoque terapéutico a tus necesidades específicas, utilizando herramientas de ACT, mindfulness y terapias de tercera generación.
                  </p>
                </CardHeader>
              </Card>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <Card className="h-full overflow-hidden shadow-elegant hover:shadow-hover transition-all duration-500 bg-gradient-to-br from-terracota/20 to-terracota/5">
                <CardHeader className="pb-4">
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className="inline-flex p-4 rounded-2xl bg-background/80 text-[#fb7185] mb-4 shadow-sm"
                  >
                    <Shield size={32} />
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    Espacio Seguro y Libre de Juicios
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Creo un ambiente confidencial y empático donde puedes expresarte con total libertad y autenticidad.
                  </p>
                </CardHeader>
              </Card>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <Card className="h-full overflow-hidden shadow-elegant hover:shadow-hover transition-all duration-500 bg-gradient-to-br from-sage/20 to-sage/5">
                <CardHeader className="pb-4">
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className="inline-flex p-4 rounded-2xl bg-background/80 text-[#fb7185] mb-4 shadow-sm"
                  >
                    <Lightbulb size={32} />
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    Herramientas Prácticas para la Vida Diaria
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Te proporciono estrategias concretas que puedes aplicar en tu día a día para gestionar emociones y situaciones difíciles.
                  </p>
                </CardHeader>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Call to Action - Agenda tu cita */}
      <section className="py-20 bg-gradient-primary">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="container mx-auto px-6"
        >
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-marcellus text-primary-foreground">
              ¿Listo para comenzar tu proceso de transformación?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-3xl mx-auto font-raleway">
              Con más de 25 años de experiencia y enfoques basados en evidencia científica, 
              estoy aquí para acompañarte en tu camino hacia el bienestar emocional.
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={() => window.open('https://wa.me/573118361642', '_blank')}
                className="bg-steel-blue hover:bg-steel-blue/90 text-white px-8 py-3 rounded-lg font-medium shadow-hover hover:shadow-glow transition-all duration-300"
              >
                <Calendar className="mr-2" size={20} style={{ color: '#fb7185' }} />
                Agenda tu cita
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default Skills;