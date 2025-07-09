import React from 'react';
import './CustomSection.scss';

const CustomSection = ({
  children,
  title,
  subtitle,
  className = '',
  background = '',
  fullWidth = false,
  id,
}) => {
  return (
    <section className={`custom-section ${background ? background : ''} ${fullWidth ? 'full-width' : ''} ${className}`} id={id}>
      <div className="custom-section__container">
        {(title || subtitle) && (
          <div className="custom-section__header">
            {title && <h2 className="custom-section__title">{title}</h2>}
            {subtitle && <p className="custom-section__subtitle">{subtitle}</p>}
          </div>
        )}
        <div className="custom-section__content">
          {children}
        </div>
      </div>
    </section>
  );
};



export default CustomSection; 