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
  const Component = external ? 'a' : Link;
  const linkProps = external
    ? {
        href: to,
        target: '_blank',
        rel: 'noopener noreferrer',
      }
    : {
        to,
      };

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