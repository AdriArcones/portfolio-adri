import React from 'react';
import PropTypes from 'prop-types';
import './CustomSection.scss';

const CustomSection = ({
  children,
  title,
  subtitle,
  className = '',
  background = 'default',
  fullWidth = false,
  id,
}) => {
  return (
    <section className={`custom-section ${background} ${fullWidth ? 'full-width' : ''} ${className}`} id={id}>
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

CustomSection.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  className: PropTypes.string,
  background: PropTypes.oneOf(['default', 'primary', 'secondary', 'glass']),
  fullWidth: PropTypes.bool,
  id: PropTypes.string,
};

export default CustomSection; 