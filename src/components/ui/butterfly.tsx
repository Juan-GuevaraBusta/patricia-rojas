import { motion } from 'framer-motion';

interface ButterflyProps {
  className?: string;
  size?: number;
  position?: 'header' | 'footer';
  style?: React.CSSProperties;
}

const Butterfly = ({ className = '', size = 16, position = 'header', style }: ButterflyProps) => {

  return (
    <div
      className={`absolute z-20 ${className}`}
      style={{
        width: size,
        height: size,
        ...style
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        className="text-terracota"
      >
        {/* Mariposa con alas sobrepuestas en el centro */}
        <g>
          {/* Ala superior izquierda - sobrepuesta */}
          <path d="M50 50 L28 22 Q18 32 24 42 Q28 49 50 50 Z" fill="currentColor" />
          {/* Ala superior derecha - sobrepuesta */}
          <path d="M50 50 L72 22 Q82 32 76 42 Q72 49 50 50 Z" fill="currentColor" />
          {/* Ala inferior izquierda - sobrepuesta */}
          <path d="M50 50 L28 78 Q18 68 24 58 Q28 51 50 50 Z" fill="currentColor" />
          {/* Ala inferior derecha - sobrepuesta */}
          <path d="M50 50 L72 78 Q82 68 76 58 Q72 51 50 50 Z" fill="currentColor" />
                           {/* Centro sobrepuesto para mayor definición */}
                 <circle cx="50" cy="50" r="8" fill="currentColor" />
          {/* Antenas pequeñas */}
          <path d="M48 45 Q45 40 42 35" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <path d="M52 45 Q55 40 58 35" stroke="currentColor" strokeWidth="1.5" fill="none" />
        </g>
      </svg>
    </div>
  );
};

export default Butterfly;
