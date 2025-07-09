import React from 'react';
import './BackgroundBlobs.scss';

const BackgroundBlobs = ({ blobs = [] }) => {
  return (
    <div className="background-blobs">
      {blobs.map((blob, index) => {
        // Posiciones predefinidas
        const predefinedPositions = {
          'top-left': { top: '-10%', left: '-10%' },
          'top-right': { top: '-10%', right: '-10%' },
          'bottom-left': { bottom: '-10%', left: '-10%' },
          'bottom-right': { bottom: '-10%', right: '-10%' },
          'center': { top: '50%', left: '50%', transform: 'translate(-50%, -50%)' },
        };

        // Priorizar posiciones predefinidas si existen
        let style = {};
        let isCentered = false;
        
        if (blob.position && predefinedPositions[blob.position]) {
          style = predefinedPositions[blob.position];
          isCentered = blob.position === 'center';
        } else {
          // Si no hay posición predefinida, usar propiedades directas
          style = {
            top: blob.top,
            right: blob.right,
            bottom: blob.bottom,
            left: blob.left,
            transform: blob.center ? 'translate(-50%, -50%)' : undefined,
          };
          isCentered = blob.center;
        }

        return (
          <div
            key={index}
            className={`blob ${blob.color} ${blob.size || 'medium'} ${isCentered ? 'centered' : ''}`}
            style={style}
          />
        );
      })}
    </div>
  );
};

export default BackgroundBlobs;
