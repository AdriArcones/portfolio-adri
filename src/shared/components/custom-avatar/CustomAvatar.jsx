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

  // Generar color de fondo aleatorio
  const backgroundColor = useMemo(() => {
    const colors = [
      '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7',
      '#DDA0DD', '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E9',
      '#F8C471', '#82E0AA', '#F1948A', '#85C1E9', '#D7BDE2',
      '#F9E79F', '#ABEBC6', '#FAD7A0', '#AED6F1', '#F5B7B1'
    ];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }, []);

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
