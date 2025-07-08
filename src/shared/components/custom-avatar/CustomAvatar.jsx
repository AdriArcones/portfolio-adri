import React, { useMemo } from 'react';
import './CustomAvatar.scss';

const CustomAvatar = ({ name, size = 'medium', className = '' }) => {
  // Generar iniciales del nombre completo
  const initials = useMemo(() => {
    if (!name) return '';
    
    const nameParts = name.trim().split(' ');
    if (nameParts.length === 1) {
      return nameParts[0].charAt(0).toUpperCase();
    } else {
      const firstInitial = nameParts[0].charAt(0).toUpperCase();
      const lastInitial = nameParts[nameParts.length - 1].charAt(0).toUpperCase();
      return firstInitial + lastInitial;
    }
  }, [name]);

  // Función para generar un hash simple del nombre
  const getStringHash = (str) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convertir a 32-bit integer
    }
    return Math.abs(hash);
  };

  // Generar color de fondo consistente basado en el nombre
  const backgroundColor = useMemo(() => {
    if (!name) return '#6B7280'; // Color por defecto
    
    // Paleta de colores mejorada con mejor contraste para texto blanco
    const colors = [
      '#1F2937', // Gris oscuro
      '#DC2626', // Rojo
      '#D97706', // Naranja
      '#059669', // Verde
      '#0284C7', // Azul
      '#7C3AED', // Violeta
      '#DB2777', // Rosa
      '#0891B2', // Cian
      '#7C2D12', // Marrón
      '#374151', // Gris medio
      '#BE123C', // Rojo oscuro
      '#A16207', // Amarillo oscuro
      '#047857', // Verde oscuro
      '#1E40AF', // Azul oscuro
      '#6B21A8', // Púrpura
      '#A21CAF', // Magenta
      '#0F766E', // Teal
      '#92400E', // Naranja oscuro
      '#450A0A', // Rojo muy oscuro
      '#365314', // Verde oliva
    ];
    
    const hash = getStringHash(name);
    const colorIndex = hash % colors.length;
    return colors[colorIndex];
  }, [name]);

  return (
    <div 
      className={`custom-avatar custom-avatar--${size} ${className}`}
      style={{ backgroundColor }}
    >
      <span className="custom-avatar__initials">{initials}</span>
    </div>
  );
};

export default CustomAvatar;
