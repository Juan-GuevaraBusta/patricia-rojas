import { motion } from 'framer-motion';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Logo = ({ className = '', size = 'md' }: LogoProps) => {
  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'h-6';
      case 'lg':
        return 'h-16';
      case 'md':
      default:
        return 'h-8';
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
      className={`${getSizeClasses()} ${className}`}
    >
      <img 
        src="/images/logo-patricia-rojas.png" 
        alt="Patricia Rojas - Psicóloga Master"
        className="h-full w-auto object-contain"
      />
    </motion.div>
  );
};

export default Logo;
