import React from 'react';
import PropTypes from 'prop-types';
import './BackgroundBlobs.scss';

const BackgroundBlobs = ({ blobs = [] }) => {
  return (
    <div className="background-blobs">
      {blobs.map((blob, index) => {
        const style = {
          top: blob.top,
          right: blob.right,
          bottom: blob.bottom,
          left: blob.left,
          transform: blob.center 
            ? 'translate(-50%, -50%)' 
            : undefined,
        };

        // Ajustar la posición inicial para la animación
        const initialPosition = {
          'top-left': { top: '-10%', left: '-10%' },
          'top-right': { top: '-10%', right: '-10%' },
          'bottom-left': { bottom: '-10%', left: '-10%' },
          'bottom-right': { bottom: '-10%', right: '-10%' },
          'center': { top: '50%', left: '50%' },
        };

        const position = blob.position ? initialPosition[blob.position] : {};

        return (
          <div
            key={index}
            className={`blob ${blob.color} ${blob.size || 'medium'}`}
            style={{ ...style, ...position }}
          />
        );
      })}
    </div>
  );
};

BackgroundBlobs.propTypes = {
  blobs: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.oneOf(['pink', 'blue', 'orange']).isRequired,
      size: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']),
      // Posicionamiento
      position: PropTypes.oneOf(['top-left', 'top-right', 'bottom-left', 'bottom-right', 'center']),
      top: PropTypes.string,
      right: PropTypes.string,
      bottom: PropTypes.string,
      left: PropTypes.string,
      center: PropTypes.bool,
    })
  ),
};

export default BackgroundBlobs;
