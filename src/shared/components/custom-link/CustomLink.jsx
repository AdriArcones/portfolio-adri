import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'; 
import './CustomLink.scss';

const CustomLink = ({
  to,
  children,
  variant = 'primary',
  className = '',
  external = false,
}) => {
  const isHashLink = to.startsWith('/#');
  
  const handleHashClick = (e) => {
    if (isHashLink) {
      e.preventDefault();
      const elementId = to.replace('/#', '');
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const linkProps = external
    ? {
        href: to,
        target: '_blank',
        rel: 'noopener noreferrer',
      }
    : {
        to,
        onClick: handleHashClick,
      };

  const Component = external ? 'a' : Link;

  return (
    <Component
      className={`custom-link ${variant} ${className}`}
      {...linkProps}
    >
      {children}
    </Component>
  );
};

CustomLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'text']),
  className: PropTypes.string,
  external: PropTypes.bool,
};

export default CustomLink; 